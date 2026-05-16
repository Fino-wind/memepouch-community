import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "不自动去背的 iMessage 贴纸怎么做？保留整张原图（2026 教学）",
  description:
    "Apple 的「加入贴纸」会用 Vision 框架自动把背景抠掉，常常把迷因的字、手、反应图都一起切掉。为什么 iOS 一定要去背、为什么没有设置可关，以及保留整张原图的 iMessage 贴纸做法——靠第三方贴纸包 App。",
  alternates: {
    canonical: "/blog/zh/imessage-stickers-without-auto-cutout",
    languages: {
      en: "/blog/imessage-stickers-without-auto-cutout",
      "zh-Hans": "/blog/zh/imessage-stickers-without-auto-cutout",
      "zh-Hant": "/blog/zh-Hant/imessage-stickers-without-auto-cutout",
      "x-default": "/blog/imessage-stickers-without-auto-cutout",
    },
  },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "zh-Hans",
    headline: "不自动去背的 iMessage 贴纸怎么做？保留整张原图",
    description:
      "Apple 的「加入贴纸」会用 Vision 框架自动抠掉背景，毁掉有文字、有手、有反应脸的迷因。本文解释 iOS 为什么一定要去背、为什么没有设置可以关掉，以及保留整张原图的真正做法——透过第三方 MSSticker 流程把整张照片、GIF 或 Live Photo 变成完整的 iMessage 贴纸。",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh/imessage-stickers-without-auto-cutout"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    inLanguage: "zh-Hans",
    name: "做一张保留整张原图、不被自动去背的 iMessage 贴纸",
    description:
      "用 MemePouch 把整张照片、GIF 或 Live Photo 导入成 iMessage 贴纸，不会经过 Apple Vision 框架的主体侦测去背。静态贴纸可以贴在消息泡泡上像 Apple 系统贴纸一样，但保留完整画面。",
    totalTime: "PT30S",
    supply: [
      { "@type": "HowToSupply", name: "iPhone（iOS 16 或以上）" },
      { "@type": "HowToSupply", name: "MemePouch（App Store 免费下载）" },
      { "@type": "HowToSupply", name: "想做成贴纸的照片、GIF 或短视频" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "打开 MemePouch",
        text: "在 iPhone 上打开 MemePouch。主画面上方有导入按钮：照片、Live Photo、剪贴板、分享面板。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "导入照片、GIF 或 Live Photo",
        text: "点「从图库导入」选一张迷因。MemePouch 会把整张画面保存下来——不跑 Vision 主体侦测、不去背景。HEIC 照片会在导入时自动转档。Live Photo 也能一键变成最长 10 秒的 GIF 贴纸。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "从 iMessage 抽屉发送",
        text: "在任何聊天里点 iMessage 抽屉的 MemePouch 图标，你的贴纸会出现在网格里。点一下就传出去，或长按拖到对方消息泡泡上「黏」上去（跟系统贴纸一样）。GIF 会以完整画质的附件方式发送。",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "zh-Hans",
    mainEntity: [
      {
        "@type": "Question",
        name: "可以关掉 Apple「加入贴纸」的自动去背吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不行。iOS 没有任何设置可以关掉「加入贴纸」启动时跑的背景移除——这个流程是 Apple 写死的，没有设置可切换，也没有公开 API 让第三方 App 加上关闭的选项。想要得到保留整张原图的 iMessage 贴纸，唯一的方法是用另一条完全不同的贴纸流程——透过第三方贴纸包 App（例如 MemePouch），这类 App 是用 MSStickerBrowserView 来注册贴纸，根本不会经过 Apple 系统的去背流程。",
        },
      },
      {
        "@type": "Question",
        name: "为什么 Apple 一定要自动去背？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple 的「加入贴纸」是用设备上的 Vision 框架——Apple 自己的电脑视觉函数库——来侦测前景主体，把其他部份全部裁掉。它是为了人物照、宠物、单一对象这类用途设计的：把主体独立出来通常会比保留整张照片好看。但这个流程预设「一张图只有一个明显主体、背景没有意义」——对迷因、反应图、有叠文字的截屏、或任何「背景就是笑点」的图片来说，这个假设完全错误。",
        },
      },
      {
        "@type": "Question",
        name: "MemePouch 在导入照片时会跑 AI 处理吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不会。MemePouch 直接读取源文件案。静态贴纸会经过 Apple 的 MSSticker API，这个 API 有 500 KB 上限，所以 MemePouch 会在文件太大时自动压缩——但绝对不裁切、不跑主体侦测、不改变画面构图。所有处理都在设备上完成，不上传云端、没有分析追踪。",
        },
      },
      {
        "@type": "Question",
        name: "整张原图的贴纸还能像 Apple 贴纸那样黏在消息泡泡上吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。透过 MemePouch 的 iMessage 扩充功能传出去的静态贴纸是真正的 MSSticker 对象，你可以长按然后拖到别人的消息泡泡上，跟 Apple 去背贴纸完全一样的操作。GIF 贴纸则是透过 Messages 附件流程发送——它们会以自己独立的消息泡泡传出去，不能黏在别人的消息上（这是不被 500 KB 限制的代价）。",
        },
      },
      {
        "@type": "Question",
        name: "动态贴纸和 GIF 呢？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple 的「加入贴纸」在 iOS 17+ 支持把 Live Photo 变成动态贴纸，但它一样会对每一格画面跑主体侦测去背——动画的背景变透明，跟静态贴纸一样会丢掉脉络。MemePouch 的动态贴纸则保留完整画面：你可以直接导入 GIF，或从短视频或 Live Photo 剪 10 秒以内存成 GIF 贴纸。整张画面完整循环，什么都不会被遮掉。",
        },
      },
      {
        "@type": "Question",
        name: "我能不能直接把整张原图的迷因存到 iOS 系统贴纸库？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不行。iOS 系统贴纸库只接受两种来源：Apple 自己的「加入贴纸」流程（一定会去背）和 iMessage 收到贴纸时的「保存至贴纸」按钮（这个按钮对第三方贴纸目前是坏掉的，详见另一篇技术分析）。Apple 没有公开 API 让第三方 App 写入系统贴纸库。MemePouch 的贴纸住在自己的 iMessage 抽屉 App 里——发送和黏消息泡泡的行为跟 Apple 贴纸一样，但它们不共用同一个数据库。",
        },
      },
      {
        "@type": "Question",
        name: "Apple 的自动去背什么时候反而是对的选择？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "当照片本身就是「干净背景上的单一主体」——比如宠物、单一对象、人像——而你又喜欢 Apple 去背产生的「透明背景贴纸」风格时。这种情况 Vision 框架通常做得很好，根本不需要第三方 App。MemePouch 存在的理由是贴纸用途的另一半：迷因、反应图、截屏、有文字或多个视觉元素的照片，以及任何「整张画面就是笑点」的素材。",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24" lang="zh-Hans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">
          不自动去背的 iMessage 贴纸：保留整张原图
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          更新于 2026-05-16 · iOS 16+ · iPhone 适用 ·{" "}
          <Link
            href="/blog/imessage-stickers-without-auto-cutout"
            hrefLang="en"
            className="text-blue-600 hover:underline"
          >
            English
          </Link>{" "}
          ·{" "}
          <Link
            href="/blog/zh-Hant/imessage-stickers-without-auto-cutout"
            hrefLang="zh-Hant"
            className="text-blue-600 hover:underline"
          >
            繁體
          </Link>
        </p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          你在「相片」里长按一张迷因，点「加入贴纸」。iOS 跑了一段主体侦测的小动画，
          结果——笑点不见了。反应脸留下来，但「上方那行字」被吃掉了。手里举的牌子被切掉。
          原本想传整张画面，最后拿到的却是一颗飘在透明背景上的头。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          这不是 Bug。Apple 的<strong>「加入贴纸」永远会跑去背</strong>，而且<strong>没有设置可以关掉</strong>。
          本文说明 iOS 为什么这样做、为什么第三方 App 也无法替你关掉，以及真正能保留整张原图的做法——
          走另一条完全不经过系统去背流程的贴纸包流程。
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            一句话答案
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS 的「加入贴纸」一定会自动去背，没办法关。要保留整张原图，就用第三方贴纸包
            App（例如 <strong>MemePouch</strong>）导入——静态贴纸照样能黏消息泡泡，GIF 则以完整附件发送。
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition"
            >
              到 App Store 下载 MemePouch
            </a>
            <span className="text-sm text-slate-500">iPhone · iOS 16+ · 一次性 $2.99 解锁，没有订阅</span>
          </div>
        </aside>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Apple 的「加入贴纸」实际在做什么？
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          当你在 iOS 17 之后的相片或对话里点「加入贴纸」，iOS 会把这张图丢进
          <strong>Vision 框架</strong>——Apple 自己的设备上电脑视觉函数库。
          Vision 会侦测它认为的前景主体、产生一个遮罩，把其他部份全部裁掉。
          结果会以透明背景保存成一个新的系统贴纸。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          对于人像、宠物、干净背景上的单一对象，这套流程做得很好。
          Vision 的模型已经被训练过数百万张主体分离任务，产生出来的贴纸通常看起来很干净。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          但对<strong>迷因</strong>来说，这套流程就是毁灭性的。
          去背预设「<strong>一张图只有一个主体</strong>」加上「<strong>背景没有意义</strong>」。
          迷因几乎一定同时违反这两个前提：
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>叠在图上的文字会被遮掉。</strong>
            在 image macro 上方或下方加的那行字幕，对 Vision 来说就是背景，会被去掉。
          </li>
          <li>
            <strong>手和道具被切掉。</strong>
            反应图里举着牌子、指着镜头、拿着东西的手——Vision 常常判断成背景，一刀切下去。
          </li>
          <li>
            <strong>脉络消失。</strong>
            一张截屏里，意思在于整张画面（一则推文、一段对话泡泡、一个 UI 元素），
            被 Vision 简化成它认为最显眼的那一块形状。
          </li>
          <li>
            <strong>双人迷因坏掉。</strong>
            Drake 迷因、Distracted Boyfriend、Expanding Brain——
            Vision 只会挑一个主体，另一个就被遮掉，但笑点创建在「两个都在画面里」。
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          为什么你关不掉自动去背
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          设置 → 消息里没有开关，相片设置里没有开关，开发者也没有对应的 entitlement。
          去背是写死在「加入贴纸」流程里的。Apple 的产品设计是：
          <em>系统贴纸就应该是去背贴纸</em>，整个系统贴纸库是绕着「透明背景的主体可以叠在别人消息泡泡上」这个概念设计的。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          第三方 App 也没办法替你修这件事。Vision 的调用发生在 Apple 私有的 Stickers 扩充功能里；
          公开的 Messages 框架给贴纸包 App 一条完全平行的流程（<code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSStickerBrowserView</code>），
          这条流程根本不会碰 Vision。两套平行的贴纸系统共用同一个 iMessage 抽屉，但对「什么算一张图」的政策完全不一样。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          所以如果你想要在 iMessage 里用整张原图的贴纸，答案不是去抵抗「加入贴纸」，
          而是改用另一条流程。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          替代方案：用原始画面的贴纸包
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          贴纸包 App 是以 iMessage 扩充功能的形式出货的，会在 iMessage 抽屉里注册自己的网格。
          它们用公开的 <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code> API，
          这个 API 接受一个原始的图档，把它注册成贴纸。
          没有 Vision 调用、没有主体侦测、没有自动裁切。你放什么进去，朋友就看到什么。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          MemePouch 就是这条流程，而且是专门为迷因调过的。
          你导入一张照片、GIF、短视频或 Live Photo，App 把整张画面存起来，
          iMessage 扩充功能把这个贴纸库公开在你的贴纸抽屉里。
          有两个来自底层 API 的限制要注意：
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>静态贴纸有 500 KB 上限</strong>，这是 MSSticker 规定的。
            MemePouch 会自动压缩超过大小的照片来符合限制；以一般迷因分辨率来说，肉眼可见的画质损失很少。
          </li>
          <li>
            <strong>GIF 贴纸走 Messages 附件流程</strong>——
            意思是不被 500 KB 限制（最大约 10 MB），但会以自己的消息泡泡传出去，而不是黏在对方消息上。
            这个取舍是刻意的：你得到完整画质的动态贴纸，代价是失去「黏在消息泡泡上」的能力。
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          并排对照
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 border-b border-slate-200"></th>
                <th className="px-3 py-2 border-b border-slate-200">Apple「加入贴纸」</th>
                <th className="px-3 py-2 border-b border-slate-200">MemePouch 贴纸包</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">背景</td>
                <td className="px-3 py-2 border-b border-slate-200">Vision 自动去背</td>
                <td className="px-3 py-2 border-b border-slate-200">原封不动保留</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">文字／叠图</td>
                <td className="px-3 py-2 border-b border-slate-200">经常被遮掉</td>
                <td className="px-3 py-2 border-b border-slate-200">完整保留</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">双人迷因</td>
                <td className="px-3 py-2 border-b border-slate-200">只挑一个主体，另一个被切</td>
                <td className="px-3 py-2 border-b border-slate-200">两个主体都完整</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">住在哪里</td>
                <td className="px-3 py-2 border-b border-slate-200">iOS 系统贴纸库</td>
                <td className="px-3 py-2 border-b border-slate-200">iMessage 抽屉里的 MemePouch App</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">黏消息泡泡</td>
                <td className="px-3 py-2 border-b border-slate-200">可以</td>
                <td className="px-3 py-2 border-b border-slate-200">静态贴纸可以；GIF 以附件发送</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">静态大小上限</td>
                <td className="px-3 py-2 border-b border-slate-200">不适用（系统管理）</td>
                <td className="px-3 py-2 border-b border-slate-200">500 KB（自动压缩）</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">动态贴纸</td>
                <td className="px-3 py-2 border-b border-slate-200">只支持 Live Photo 主体（仍去背）</td>
                <td className="px-3 py-2 border-b border-slate-200">完整画面 GIF，最长 10 秒／10 MB</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">是否上传服务器</td>
                <td className="px-3 py-2 border-b border-slate-200">无（Vision 在设备上跑）</td>
                <td className="px-3 py-2 border-b border-slate-200">无（全部留在 iPhone 上）</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">费用</td>
                <td className="px-3 py-2">免费，系统内置</td>
                <td className="px-3 py-2">免费试用 10 张；$2.99 一次性解锁无限张</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          流程：30 秒做出整张原图贴纸
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed mb-6">
          <li>
            <strong>打开 MemePouch。</strong>
            导入按钮在上方：照片、Live Photo、剪贴板、分享面板。
          </li>
          <li>
            <strong>导入迷因。</strong>
            选一张照片、GIF、短视频或 Live Photo，整张画面会被存下来。HEIC 自动转档；
            视频和 Live Photo 可以剪最长 10 秒存成 GIF 贴纸。
          </li>
          <li>
            <strong>传出去。</strong>
            任何 iMessage 对话里点 iMessage 抽屉的 MemePouch 图标，贴纸出现在网格里。
            点一下就传，或长按拖到对方消息泡泡上，跟 Apple 系统贴纸一样的操作。
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          整个循环就这样。如果你在设置里打开「自动删除原档」，导入后图库里的原档会自动丢到「最近删除」——
          收集网络上看到的迷因时很实用，不会塞满图库。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Apple 自动去背什么时候才是对的选择
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          公平地说——对于 Vision 设计来处理的情境，「加入贴纸」做得很好。
          一张你家狗的照片。一张干净的人像。一个你拍在墙前的对象。
          凡是你真的想要「主体在透明背景上」这种美感的场合，
          系统内置工具又快又免费，不用装任何东西。
          MemePouch 不是要取代它；MemePouch 是另一半贴纸用途的答案——
          当你想要的是「整张画面」、不是「画面里某一块去背的形状」的时候。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">常见问题</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              可以关掉 Apple 的自动去背吗？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              不行。设置、相片、消息里都没有开关。Vision 框架去背是写死在 Apple「加入贴纸」流程里的。
              要得到保留整张原图的 iMessage 贴纸，唯一的方法是用另一条流程——
              第三方贴纸包 App，例如 MemePouch。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Apple 为什么不开个设置？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              整个系统贴纸库是绕着「透明背景主体可以拖到别人消息泡泡上」这个概念设计的。
              一张完整原图的贴纸在这个库里会看起来很怪——一个长方形飘在另一个长方形上。
              Apple 的设计选择是：系统贴纸库只放去背贴纸；整张原图的贴纸住在第三方贴纸 App 自己的库里。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              MemePouch 导入照片时会跑 AI／Vision 处理吗？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              不会。导入路径是：读档 → 如果超过 MSSticker 500 KB 上限就压缩（保留比例和画面构图）→
              写到 App 的设备上贴纸库。没有主体侦测、没有放大处理、没有云端调用、没有分析追踪。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              整张原图的贴纸还能黏在消息泡泡上吗？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              静态贴纸——可以。它们是真正的 <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code>{" "}
              对象，可以长按拖到对方消息上，跟 Apple 去背贴纸完全一样。
              动态 GIF 贴纸则走 Messages 附件流程，会以自己的消息泡泡传出去，而不是黏在别人的消息上——
              这是换取「不被 500 KB 限制」的代价。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              那朋友传给我的贴纸怎么存？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              那是另一个问题，有专门的教学：{" "}
              <Link href="/blog/zh/save-imessage-sticker-friend" className="text-blue-600 hover:underline">
                朋友传的 iMessage 贴纸怎么存
              </Link>
              。简单版：长按贴纸、拖到 MemePouch（在 iMessage 抽屉里）。
              系统「保存至贴纸」按钮为什么会卡住的技术原因详见{" "}
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                为什么 iMessage 的「保存至贴纸」会卡住
              </Link>
              。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              第三方贴纸 App 还有什么 Apple 内置做不到的？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              几件事。最长 10 秒的动态 GIF 贴纸（Apple 系统贴纸只能动 Live Photo 去背版本）。
              批量导入。一个独立的贴纸库，不会污染 iOS 系统贴纸抽屉。
              拖拽导入别人传来的第三方贴纸（系统流程那边也是坏的）。
              还有——这篇文章的主题——保留整张画面。
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            别再让 Apple 把你的迷因切一半
          </h3>
          <p className="text-slate-700 mb-4">
            MemePouch 保留整张画面——文字、手、脉络，全部都在。
            iMessage 原生，免费 10 张试用后 $2.99 一次性解锁。
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            到 App Store 下载 →
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-12">
          <h3 className="text-base font-semibold text-slate-900 mb-3">相关教学</h3>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/blog/zh/save-imessage-sticker-friend" className="text-blue-600 hover:underline">
                朋友传的 iMessage 贴纸怎么存
              </Link>
            </li>
            <li>
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                为什么 iMessage 的「保存至贴纸」会卡住（技术版）
              </Link>
            </li>
            <li>
              <Link href="/blog/imessage-stickers-without-auto-cutout" hrefLang="en" className="text-blue-600 hover:underline">
                English version
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}