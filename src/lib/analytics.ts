import posthog from "posthog-js";
import { APP_STORE_PT, SITE_URL } from "../app/site";

export const POSTHOG_KEY = "phc_xEgkGFfkrWRpvur6C8v4U7KyDgFoGTdVDRt7bj5TMGFB";
export const POSTHOG_HOST = "https://eu.i.posthog.com";
export const POSTHOG_UI_HOST = "https://eu.posthog.com";
export const CT_SESSION_KEY = "mp_ct";

/**
 * 判断是否是正式生产域名。
 * 🔴 严禁在 localhost / 127.0.0.1 / Vercel preview 等非正式域名上打生产事件，
 * 防止本地开发或预览污染生产 Web analytics 指标（2026-10-10 实踩教训）。
 */
export function isProductionHost(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const targetHost = new URL(SITE_URL).hostname;
    return window.location.hostname === targetHost;
  } catch {
    return false;
  }
}

/**
 * 初始化 PostHog（高级功能全量打满）
 */
export function initPostHog(): void {
  if (typeof window === "undefined") return;

  // 如果已经在运行中，不重复 init
  if ((window as unknown as { __posthog_initialized?: boolean }).__posthog_initialized) {
    return;
  }

  const isProd = isProductionHost();

  // 即使在本地非正式域名，也打标避免重复
  (window as unknown as { __posthog_initialized?: boolean }).__posthog_initialized = true;

  if (!isProd) {
    console.debug("[PostHog] Non-production environment detected, production events suppressed.");
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    ui_host: POSTHOG_UI_HOST,
    defaults: "2025-05-24",
    person_profiles: "identified_only",

    // ──────────────── 1. 会话录屏打满 (Session Recording) ────────────────
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: undefined, // 营销官网公开文本不打码，完整还原阅读轨迹
      recordCrossOriginIframes: false,
    },

    // ──────────────── 2. 核心 Web 性能与 Web Vitals ────────────────
    capture_performance: true,

    // ──────────────── 3. 前端未捕获异常与 Promise 错误捕获 ────────────────
    capture_exceptions: true,

    // ──────────────── 4. 热力图与死点分析 (Heatmaps & Rage Clicks) ────────────────
    autocapture: true,
    capture_pageview: "history_change",
    capture_pageleave: true,
    persistence: "localStorage",

    loaded: (ph) => {
      // 注册 super-property 确保所有事件带 app 标签
      ph.register({ app: "memepouch-web" });

      // 内部流量永久打标：访问 ?ph_internal=1 标记自己，排除在面板之外
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.has("ph_internal")) {
          window.localStorage.setItem("ph_internal", "1");
        }
        if (window.localStorage.getItem("ph_internal") === "1") {
          ph.register({ internal: true });
        }
      } catch {
        // Safari private mode safe
      }

      // 如果已有归因桶，直接注入
      try {
        const ct = sessionStorage.getItem(CT_SESSION_KEY);
        if (ct) {
          ph.register({ appstore_ct: ct });
        }
      } catch {
        // safe
      }
    },
  });
}

/**
 * 结构化上报：App Store 点击转化（全站第一核心转化漏斗）
 */
export interface AppStoreClickProps {
  location:
    | "nav_button"
    | "mobile_menu"
    | "hero_primary"
    | "bottom_banner"
    | "blog_banner"
    | "blog_inline"
    | "faq_cta"
    | "compare_cta"
    | "unknown";
  page_path?: string;
  page_title?: string;
  blog_slug?: string;
  ct?: string;
  target_url?: string;
}

export function trackAppStoreClick(props: AppStoreClickProps): void {
  if (typeof window === "undefined") return;

  const currentPath = props.page_path || window.location.pathname;
  let detectedSlug = props.blog_slug;
  if (!detectedSlug && currentPath.startsWith("/blog/")) {
    detectedSlug = currentPath.replace(/^\/blog\//, "").split("/")[0] || undefined;
  }

  let ct = props.ct;
  if (!ct) {
    try {
      ct = sessionStorage.getItem(CT_SESSION_KEY) || undefined;
    } catch {
      // safe
    }
  }

  const payload = {
    location: props.location,
    page_path: currentPath,
    page_title: props.page_title || document.title,
    blog_slug: detectedSlug,
    ct: ct || "direct",
    pt: APP_STORE_PT,
    target_url: props.target_url,
    referrer: document.referrer || undefined,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: app_store_clicked]", payload);
    return;
  }

  posthog.capture("app_store_clicked", payload);
}

/**
 * 结构化上报：博客长文阅读深度（GEO 与 SEO 内容消费里程碑）
 */
export interface BlogReadMilestoneProps {
  slug: string;
  depth: 25 | 50 | 75 | 100;
  reading_time_sec: number;
  page_title?: string;
}

export function trackBlogReadMilestone(props: BlogReadMilestoneProps): void {
  if (typeof window === "undefined") return;

  const payload = {
    slug: props.slug,
    depth: props.depth,
    reading_time_sec: Math.round(props.reading_time_sec),
    page_title: props.page_title || document.title,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: blog_read_milestone]", payload);
    return;
  }

  posthog.capture("blog_read_milestone", payload);

  // 如果达到 100%，额外发一条完成事件，方便漏斗直连
  if (props.depth === 100) {
    posthog.capture("blog_read_completed", {
      slug: props.slug,
      reading_time_sec: Math.round(props.reading_time_sec),
      page_title: props.page_title || document.title,
    });
  }
}

/**
 * 结构化上报：用户开始阅读博客（滚动超过 5%）
 */
export function trackBlogReadStarted(slug: string): void {
  if (typeof window === "undefined") return;

  const payload = {
    slug,
    page_title: document.title,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: blog_read_started]", payload);
    return;
  }

  posthog.capture("blog_read_started", payload);
}

/**
 * 结构化上报：FAQ 问答项展开/折叠
 */
export function trackFaqToggle(question: string, isExpanded: boolean, pagePath?: string): void {
  if (typeof window === "undefined") return;

  const payload = {
    question: question.slice(0, 150),
    is_expanded: isExpanded,
    page_path: pagePath || window.location.pathname,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: faq_toggled]", payload);
    return;
  }

  posthog.capture("faq_toggled", payload);
}

/**
 * 结构化上报：导航点击
 */
export function trackNavClick(label: string, destination: string): void {
  if (typeof window === "undefined") return;

  const payload = {
    label,
    destination,
    source_path: window.location.pathname,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: nav_clicked]", payload);
    return;
  }

  posthog.capture("nav_clicked", payload);
}

/**
 * 结构化上报：外链点击
 */
export function trackExternalLink(destination: string, label?: string): void {
  if (typeof window === "undefined") return;

  const payload = {
    destination,
    label: label || destination,
    source_path: window.location.pathname,
  };

  if (!isProductionHost()) {
    console.debug("[PostHog Event: external_link_clicked]", payload);
    return;
  }

  posthog.capture("external_link_clicked", payload);
}

/**
 * 前端手动异常捕获工具
 */
export function captureException(error: unknown, extra?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  if (!isProductionHost()) {
    console.error("[PostHog Exception Captured]", error, extra);
    return;
  }

  if (error instanceof Error) {
    posthog.captureException(error, extra);
  } else {
    posthog.capture("client_error", {
      error_message: String(error),
      ...extra,
    });
  }
}

export { posthog };
