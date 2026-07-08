import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MemePouch Blog & Tutorials",
  description: "Guides on how to organize, import, and manage iMessage stickers using MemePouch.",
  alternates: { canonical: "/blog" },
};

type Post = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  lang?: string;
  cta?: string;
};

const POSTS: Post[] = [
  {
    href: "/blog/zh-Hant/save-imessage-sticker-friend",
    title: "朋友傳的 iMessage 貼圖怎麼存?",
    description:
      "iMessage 收到一張超好笑的貼圖,長按點「儲存至貼圖」會卡住沒反應——這是 Apple 系統 Bug, 不是你操作錯了。本文講清楚背後原理,以及真正能用的雙指拖曳操作步驟。",
    badge: "繁體中文",
    lang: "zh-Hant",
    cta: "閱讀文章",
  },
  {
    href: "/blog/zh/save-imessage-sticker-friend",
    title: "朋友发的 iMessage 贴纸怎么保存?",
    description:
      "iMessage 里收到一张超好笑的贴纸,长按点「保存到贴纸」会卡住没反应——这是 Apple 系统 Bug, 不是你操作错了。本文讲清楚背后原理,以及真正能用的双指拖拽操作步骤。",
    badge: "简体中文",
    lang: "zh-Hans",
    cta: "阅读文章",
  },
  {
    href: "/blog/zh-Hant/imessage-stickers-without-auto-cutout",
    title: "不自動去背的 iMessage 貼圖：保留整張原圖",
    description:
      "Apple 的「加入貼圖」會自動把背景摳掉，毀掉迷因的字、手、反應臉。為什麼 iOS 一定要去背、為什麼沒有設定可關，以及保留整張原圖的 iMessage 貼圖做法。",
    badge: "繁體中文",
    lang: "zh-Hant",
    cta: "閱讀文章",
  },
  {
    href: "/blog/zh/imessage-stickers-without-auto-cutout",
    title: "不自动去背的 iMessage 贴纸：保留整张原图",
    description:
      "Apple 的「添加贴纸」会自动把背景抠掉，毁掉表情包的字、手、反应脸。为什么 iOS 一定要抠图、为什么没有设置可关，以及保留整张原图的 iMessage 贴纸做法。",
    badge: "简体中文",
    lang: "zh-Hans",
    cta: "阅读文章",
  },
  {
    href: "/blog/save-tiktok-gifs-to-imessage",
    title: "How to save TikTok GIFs and stickers to iMessage",
    description:
      "Import your TikTok GIFs and memes to iMessage as reusable stickers: save the video (or screen-record for a watermark-free clip), share it into MemePouch, trim up to 10 seconds, send from any chat forever. Comment stickers work too via screenshot.",
    badge: "New · 2026-07-09",
  },
  {
    href: "/blog/save-stickers-to-camera-roll",
    title: "How to save stickers to your camera roll on iPhone (and a cleaner way)",
    description:
      "The fastest answer is a screenshot — works for TikTok stickers, iMessage stickers, anything on screen. Plus the flow most people miss: share the screenshot into MemePouch straight from the preview and delete it, so the sticker lands in your iMessage keyboard and your camera roll stays clean.",
    badge: "New · 2026-06-10",
  },
  {
    href: "/blog/import-stickers-five-ways",
    title: "5 ways to add a sticker to MemePouch (Photos, paste, Share Sheet, drag, iMessage)",
    description:
      "Every input path: multi-select up to 30 from Photos, one-tap paste from clipboard, Share Sheet from any app (including the video handoff to the trim view), drag-drop into the main app, and drag-import from an iMessage chat to save stickers your friends sent you.",
    badge: "New · 2026-05-20",
  },
  {
    href: "/blog/auto-delete-photos-after-sticker-import",
    title: "Auto-delete original photos after sticker import (keep your camera roll clean)",
    description:
      "MemePouch's optional Auto-delete setting removes the source meme from Photos the moment it's a sticker — so your camera roll stays photos of your life, not a junk drawer. Routes through iOS's Recently Deleted (30-day grace period), handles iCloud, skips read-only Shared Library items.",
    badge: "New · 2026-05-20",
  },
  {
    href: "/blog/live-photo-to-gif-sticker",
    title: "Turn a Live Photo into a looping GIF sticker for iMessage",
    description:
      "Live Photos are already 1.5–3 s of motion — ideal sticker material. How MemePouch converts them with one tap (or trim first), handles iCloud-only Live Photos automatically, runs Smart loop on the paired motion video, and how this compares to Apple's iOS 17 Live Stickers (cutout-forced vs full-frame).",
    badge: "New · 2026-05-20",
  },
  {
    href: "/blog/trim-video-into-looping-gif-sticker",
    title: "Trim a video into a perfectly looping GIF sticker (Smart loop walkthrough)",
    description:
      'How MemePouch\'s Smart loop finds the cleanest seam for your GIF sticker using perceptual frame matching (dHash) — plus the "Use whole clip" shortcut, Boomerang fallback, and the encoder cascade that keeps your GIF under iMessage\'s 10 MB attachment limit.',
    badge: "New · 2026-05-20",
  },
  {
    href: "/blog/organize-imessage-sticker-library",
    title: "How to organize your iMessage sticker library: filter, reorder, deduplicate",
    description:
      "Once you've imported 30+ stickers into MemePouch, you need to organize them. How to pin your go-to stickers to the top, filter image vs GIF, drag-reorder the library, preview animated stickers before sending, and how SHA-256 content hashing prevents duplicate imports.",
    badge: "New · 2026-05-20",
  },
  {
    href: "/blog/imessage-stickers-without-auto-cutout",
    title: "iMessage stickers without auto-cutout: keep the whole image",
    description:
      "Apple's Add Sticker auto-removes the background and breaks memes with text overlays, hands, and intentional context. Why iOS does the cutout, why you can't disable it, and the workflow that imports the whole frame as a real iMessage sticker.",
  },
  {
    href: "/blog/save-sticker-someone-sent-imessage",
    title: "How to save an iMessage sticker someone sent you",
    description:
      "iOS hides the Save button on third-party iMessage stickers. Here is the one supported gesture for keeping a sticker your friend sent you, animation and all, plus why every common workaround fails.",
  },
  {
    href: "/blog/best-imessage-sticker-apps-compared",
    title: "Best iMessage sticker apps in 2026 — honest comparison",
    description:
      "Three categories of iMessage sticker apps cover the actual landscape: Apple's built-in tool, generic cross-platform sticker makers, and iMessage-native sticker apps. What each does well, what each gets wrong — written by a developer who built one of them.",
  },
  {
    href: "/blog/why-apple-stickers-cannot-be-saved",
    title: "Why iMessage Save to Stickers hangs on third-party stickers",
    description:
      "iOS shows a Save to Stickers button on third-party iMessage stickers but tapping it stalls. What's actually happening inside iOS (StickersUltraExtension, stickersd), why Apple can't easily fix it, and the drag-import workaround that bypasses the broken system flow.",
  },
  {
    href: "/blog/turn-screenshots-into-imessage-stickers",
    title: "A better way to turn screenshots into iMessage stickers (without Apple's auto-cutout)",
    description:
      "Apple's long-press \"lift subject\" often clips away the punchline of a meme — the text overlay, the half-cropped hand, the background that IS the joke. Here's how to keep the whole image.",
  },
  {
    href: "/blog/make-gif-stickers-for-imessage",
    title: "How to make GIF stickers for iMessage from any video or Live Photo",
    description:
      "iMessage doesn't ship a way to turn arbitrary videos into GIF stickers. This guide covers the 30-second flow with MemePouch — up to 10 seconds long, full quality, with or without a Live Photo source.",
  },
  {
    href: "/blog/turn-photos-into-imessage-stickers",
    title: "How to turn photos into iMessage stickers in 2026",
    description:
      "A walkthrough of making custom iMessage stickers from your photos, GIFs, and short videos with MemePouch — plus how to drag stickers others send you into your own library.",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">Blog &amp; Tutorials</h1>
      <p className="text-lg text-ink-soft mb-14">
        Learn how to get the most out of your iPhone&apos;s iMessage experience, organize your memes, and create custom stickers from photos and videos.
      </p>

      <div className="space-y-6">
        {POSTS.map((post) => (
          <article
            key={post.href}
            data-reveal className="group pouch-card p-8 hover:shadow-lifted hover:-translate-y-0.5 transition-all"
            lang={post.lang}
          >
            {post.badge && (
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                  post.badge.startsWith("New") ? "text-pouch" : "text-ink-faint"
                }`}
              >
                {post.badge}
              </p>
            )}
            <h2 className="text-2xl font-bold mb-3 leading-snug">
              <Link href={post.href} className="text-ink hover:text-pouch transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-ink-soft mb-4 line-clamp-2">{post.description}</p>
            <Link href={post.href} className="font-semibold text-pouch hover:text-pouch-deep transition-colors">
              {post.cta ?? "Read article"} <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
