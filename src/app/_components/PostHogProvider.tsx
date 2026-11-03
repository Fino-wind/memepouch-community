"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { APP_ID, APP_STORE_PT } from "../site";
import {
  CT_SESSION_KEY,
  detectAiSource,
  initPostHog,
  isProductionHost,
  posthog,
  trackAiReferralLanded,
  trackAppStoreClick,
  trackContentCopied,
  trackEngagedVisit,
  trackExternalLink,
  trackFaqToggle,
} from "../../lib/analytics";

/**
 * 智能推断 App Store 按钮在页面中的位置
 */
function inferButtonLocation(
  anchor: HTMLAnchorElement
): "nav_button" | "mobile_menu" | "hero_primary" | "bottom_banner" | "blog_banner" | "blog_inline" | "faq_cta" | "compare_cta" | "unknown" {
  const explicit = anchor.getAttribute("data-track-location");
  if (explicit) return explicit as ReturnType<typeof inferButtonLocation>;

  // 1. 导航栏或移动端菜单
  if (anchor.closest("nav details")) return "mobile_menu";
  if (anchor.closest("nav")) return "nav_button";

  // 2. 页面路径检测
  const path = window.location.pathname;
  if (path.startsWith("/blog/")) {
    if (anchor.closest(".not-prose") || anchor.closest(".rounded-3xl")) {
      return "blog_banner";
    }
    return "blog_inline";
  }

  if (path.startsWith("/compare")) return "compare_cta";
  if (path.startsWith("/faq")) return "faq_cta";

  // 3. 首页 Hero 或底部
  if (anchor.closest("section:first-of-type") || anchor.closest(".pt-28") || anchor.closest(".lg\\:pt-40")) {
    return "hero_primary";
  }

  return "bottom_banner";
}

/**
 * 改写 App Store 链接的 pt 和 ct
 */
function tagAnchor(a: HTMLAnchorElement, ct: string) {
  try {
    const u = new URL(a.href);
    if (u.hostname !== "apps.apple.com" || !u.pathname.includes(`id${APP_ID}`)) return;
    u.searchParams.set("pt", APP_STORE_PT);
    u.searchParams.set("ct", ct);
    a.href = u.toString();
  } catch {
    // 非法 URL 忽略
  }
}

export default function PostHogProvider() {
  const pathname = usePathname();
  const initialPathRef = useRef<string | null>(null);

  // 1. 初始化 PostHog 与多维归因
  useEffect(() => {
    initPostHog();

    // ── 1. 深度 AI 来源检测与专属着陆事件 ──
    const ai = detectAiSource();
    if (ai.isAi && ai.engine) {
      try {
        const AI_LANDED_KEY = "mp_ai_landed";
        if (!sessionStorage.getItem(AI_LANDED_KEY)) {
          sessionStorage.setItem(AI_LANDED_KEY, ai.engine);
          trackAiReferralLanded(ai.engine, ai.rawSource);
        }
      } catch {
        // safe
      }
    }

    // ── 2. 来源归因改写 App Store 链接与注入 Super Property ──
    const applyCt = (ct: string) => {
      try {
        sessionStorage.setItem(CT_SESSION_KEY, ct);
      } catch {
        // safe
      }

      if (isProductionHost()) {
        posthog.register({ appstore_ct: ct });
      }

      const all = () => {
        document.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]').forEach((a) => tagAnchor(a, ct));
      };
      all();
    };

    let storedCt: string | null = null;
    try {
      storedCt = sessionStorage.getItem(CT_SESSION_KEY);
    } catch {
      // safe
    }

    const q = new URLSearchParams(window.location.search);
    const src = (q.get("utm_source") || "").toLowerCase();
    const med = (q.get("utm_medium") || "").toLowerCase();
    let rh = "";
    try {
      rh = new URL(document.referrer).hostname.toLowerCase();
    } catch {
      // safe
    }
    if (rh === window.location.hostname) rh = "";

    if (!src && !med && !rh) {
      if (storedCt) applyCt(storedCt);
    } else {
      fetch("/ref-channels.json")
        .then((r) => r.json())
        .then((t) => {
          const look = (m: Record<string, string>, v: string): string | null => {
            if (!v) return null;
            if (m[v]) return m[v];
            const p = v.split(".");
            for (let i = 1; i < p.length - 1; i++) {
              const d = p.slice(i).join(".");
              if (m[d]) return m[d];
            }
            return null;
          };

          const matchedCt =
            look(t.source, src) ||
            look(t.medium, med) ||
            look(t.source, rh) ||
            (src ? "site_web" : null);

          const finalCt = matchedCt || storedCt || (ai.isAi ? "ai" : "site_web");
          applyCt(finalCt);
        })
        .catch(() => {
          if (storedCt) applyCt(storedCt);
        });
    }

    // ── 3. 全局 Click 监听：捕获 App Store 转化与外链 ──
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a");
      if (!anchor || !anchor.href) return;

      // 1. App Store 下载点击拦截
      if (anchor.href.includes("apps.apple.com")) {
        const ct = storedCt || (ai.isAi ? "ai" : "direct");
        tagAnchor(anchor, ct);
        const location = inferButtonLocation(anchor);
        trackAppStoreClick({
          location,
          target_url: anchor.href,
        });
        return;
      }

      // 2. 外部链接点击
      try {
        const url = new URL(anchor.href);
        const isExternal =
          url.hostname !== window.location.hostname &&
          !url.hostname.includes("tetherme.app") &&
          (url.protocol === "http:" || url.protocol === "https:" || url.protocol === "mailto:");

        if (isExternal) {
          trackExternalLink(anchor.href, anchor.textContent?.trim() || undefined);
        }
      } catch {
        // safe
      }
    };

    // ── 4. 全局 Toggle 监听：捕获 FAQ 展开/收起 ──
    const handleToggle = (e: Event) => {
      const details = e.target as HTMLDetailsElement | null;
      if (!details || details.tagName !== "DETAILS") return;

      const summary = details.querySelector("summary");
      const text = summary?.textContent?.trim().replace(/\+$/, "").trim() || "";
      if (text) {
        trackFaqToggle(text, details.open);
      }
    };

    // ── 5. 全局 Copy 监听：捕获用户复制的内容片段（GEO 核心答疑） ──
    const handleCopy = () => {
      try {
        const selection = window.getSelection()?.toString().trim();
        if (selection && selection.length >= 8) {
          trackContentCopied(selection, selection.length);
        }
      } catch {
        // safe
      }
    };

    // ── 6. 深度参与访客计时器（Engaged Visitor，停留 30 秒） ──
    const timer30 = setTimeout(() => {
      trackEngagedVisit(30);
    }, 30000);

    document.addEventListener("click", handleClick, true);
    document.addEventListener("toggle", handleToggle, true);
    document.addEventListener("copy", handleCopy, true);

    return () => {
      clearTimeout(timer30);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("toggle", handleToggle, true);
      document.removeEventListener("copy", handleCopy, true);
    };
  }, []);

  // 2. 客户端路由切换时准确捕获 $pageview（SPA 软路由支持）
  useEffect(() => {
    if (!initialPathRef.current) {
      initialPathRef.current = pathname;
      return;
    }

    if (isProductionHost()) {
      posthog.capture("$pageview", {
        $current_url: window.location.href,
        pathname,
      });
    } else {
      console.debug("[PostHog SPA Pageview]", pathname);
    }
  }, [pathname]);

  return null;
}
