import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MemePouch Blog & Tutorials",
  description: "Guides on how to organize, import, and manage iMessage stickers using MemePouch.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Blog &amp; Tutorials</h1>
      <p className="text-lg text-slate-600 mb-12">
        Learn how to get the most out of your iPhone&apos;s iMessage experience, organize your memes, and create custom stickers from photos and videos.
      </p>

      <div className="space-y-8">
        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white" lang="zh-Hant">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">繁體中文</p>
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/zh-Hant/save-imessage-sticker-friend" className="text-slate-900 hover:text-blue-600 transition-colors">
              朋友傳的 iMessage 貼圖怎麼存?
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iMessage 收到一張超好笑的貼圖,長按點「儲存至貼圖」會卡住沒反應——這是 Apple 系統 Bug,
            不是你操作錯了。本文講清楚背後原理,以及真正能用的雙指拖曳操作步驟。
          </p>
          <Link href="/blog/zh-Hant/save-imessage-sticker-friend" className="text-blue-600 font-medium hover:text-blue-700">
            閱讀文章 &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white" lang="zh-Hans">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">简体中文</p>
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/zh/save-imessage-sticker-friend" className="text-slate-900 hover:text-blue-600 transition-colors">
              朋友发的 iMessage 贴纸怎么保存?
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iMessage 里收到一张超好笑的贴纸,长按点「保存到贴纸」会卡住没反应——这是 Apple 系统 Bug,
            不是你操作错了。本文讲清楚背后原理,以及真正能用的双指拖拽操作步骤。
          </p>
          <Link href="/blog/zh/save-imessage-sticker-friend" className="text-blue-600 font-medium hover:text-blue-700">
            阅读文章 &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white" lang="zh-Hant">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">繁體中文</p>
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/zh-Hant/imessage-stickers-without-auto-cutout" className="text-slate-900 hover:text-blue-600 transition-colors">
              不自動去背的 iMessage 貼圖：保留整張原圖
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Apple 的「加入貼圖」會自動把背景摳掉，毀掉迷因的字、手、反應臉。為什麼 iOS 一定要去背、
            為什麼沒有設定可關，以及保留整張原圖的 iMessage 貼圖做法。
          </p>
          <Link href="/blog/zh-Hant/imessage-stickers-without-auto-cutout" className="text-blue-600 font-medium hover:text-blue-700">
            閱讀文章 &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white" lang="zh-Hans">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">简体中文</p>
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/zh/imessage-stickers-without-auto-cutout" className="text-slate-900 hover:text-blue-600 transition-colors">
              不自动去背的 iMessage 贴纸：保留整张原图
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Apple 的「添加贴纸」会自动把背景抠掉，毁掉表情包的字、手、反应脸。为什么 iOS 一定要抠图、
            为什么没有设置可关，以及保留整张原图的 iMessage 贴纸做法。
          </p>
          <Link href="/blog/zh/imessage-stickers-without-auto-cutout" className="text-blue-600 font-medium hover:text-blue-700">
            阅读文章 &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/imessage-stickers-without-auto-cutout" className="text-slate-900 hover:text-blue-600 transition-colors">
              iMessage stickers without auto-cutout: keep the whole image
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Apple&apos;s Add Sticker auto-removes the background and breaks memes with text overlays, hands, and intentional context. Why iOS does the cutout, why you can&apos;t disable it, and the workflow that imports the whole frame as a real iMessage sticker.
          </p>
          <Link href="/blog/imessage-stickers-without-auto-cutout" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/save-sticker-someone-sent-imessage" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to save an iMessage sticker someone sent you
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iOS hides the Save button on third-party iMessage stickers. Here is the one supported gesture for keeping a sticker your friend sent you, animation and all, plus why every common workaround fails.
          </p>
          <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/best-imessage-sticker-apps-compared" className="text-slate-900 hover:text-blue-600 transition-colors">
              Best iMessage sticker apps in 2026 — honest comparison
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Three categories of iMessage sticker apps cover the actual landscape: Apple&apos;s built-in tool, generic cross-platform sticker makers, and iMessage-native sticker apps. What each does well, what each gets wrong — written by a developer who built one of them.
          </p>
          <Link href="/blog/best-imessage-sticker-apps-compared" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-slate-900 hover:text-blue-600 transition-colors">
              Why iMessage Save to Stickers hangs on third-party stickers
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iOS shows a Save to Stickers button on third-party iMessage stickers but tapping it stalls. What&apos;s actually happening inside iOS (StickersUltraExtension, stickersd), why Apple can&apos;t easily fix it, and the drag-import workaround that bypasses the broken system flow.
          </p>
          <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-slate-900 hover:text-blue-600 transition-colors">
              A better way to turn screenshots into iMessage stickers (without Apple&apos;s auto-cutout)
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Apple&apos;s long-press &quot;lift subject&quot; often clips away the punchline of a meme — the text overlay, the half-cropped hand, the background that IS the joke. Here&apos;s how to keep the whole image.
          </p>
          <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/make-gif-stickers-for-imessage" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to make GIF stickers for iMessage from any video or Live Photo
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iMessage doesn&apos;t ship a way to turn arbitrary videos into GIF stickers. This guide covers the 30-second flow with MemePouch — up to 10 seconds long, full quality, with or without a Live Photo source.
          </p>
          <Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/turn-photos-into-imessage-stickers" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to turn photos into iMessage stickers in 2026
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            A walkthrough of making custom iMessage stickers from your photos, GIFs, and short videos with MemePouch — plus how to drag stickers others send you into your own library.
          </p>
          <Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>
      </div>
    </div>
  );
}
