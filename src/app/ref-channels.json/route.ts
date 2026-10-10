// 构建时生成 /ref-channels.json：来源（utm_source / utm_medium / 来路域名）→ App Store 链接的 ct 桶。
// 名单不自己写，直接取 PostHog 官方的渠道定义 —— 官网看板的「渠道」也是它算的，
// 这样 ct 和看板永远用同一张表。2026-10-10 前这里是手写的 12 个 AI 域名，PostHog 认 46 个，
// DeepSeek、Kimi、豆包、通义千问、Mistral 等带来的人点下载会被打成 site_web，ASC 的 ai 桶会少算。
// 用法在 layout.tsx 的来源归因脚本里：只有带来路或 utm 的访客才会去取这个文件。

export const dynamic = "force-static";

const DEFINITIONS =
  "https://raw.githubusercontent.com/PostHog/posthog/master/posthog/models/channel_type/channel_definitions.json";

// PostHog 的自然流量类型 → ct 桶。ct 只分 4 桶（ai / search / social / site_web），
// 因为 ASC 营销活动一个 ct 至少 5 个 Apple 账号安装才显示，分细了每桶都到不了 5。没列的类型（邮件、购物、推荐……）走 site_web。
const BUCKET: Record<string, string> = {
  AI: "ai",
  "Organic Search": "search",
  "Organic Social": "social",
  "Organic Video": "social",
};

// 我们自己定的 utm_source，PostHog 的名单不可能有：public/llms.txt 里的链接带它。
const OURS: Record<string, string> = { ai_agent_llmstxt: "ai" };

// 每一行：[来源或 medium, "source" | "medium", 域名类型, 付费类型, 自然流量类型, 是否 app 包名]
type Row = [string, string, string | null, string | null, string | null, boolean];

export async function GET() {
  const res = await fetch(DEFINITIONS);
  if (!res.ok) throw new Error(`ref-channels: PostHog channel definitions HTTP ${res.status}`);
  const rows = (await res.json()) as Row[];

  const source: Record<string, string> = {};
  const medium: Record<string, string> = {};
  for (const [term, kind, , , organic] of rows) {
    const bucket = organic ? BUCKET[organic] : undefined;
    if (!bucket) continue;
    (kind === "medium" ? medium : source)[term.toLowerCase()] = bucket;
  }
  // 上游改了格式就让构建失败，而不是悄悄发一张空表（空表 = 所有访客都打成 site_web，没有任何报错）。
  const ai = Object.values(source).filter((b) => b === "ai").length;
  if (Object.keys(source).length < 500 || ai < 20 || source["google.com"] !== "search") {
    throw new Error(`ref-channels: PostHog channel definitions look wrong (${Object.keys(source).length} sources, ${ai} AI)`);
  }
  return Response.json({ source: { ...source, ...OURS }, medium });
}
