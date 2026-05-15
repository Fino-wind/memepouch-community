import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "朋友发的 iMessage 贴纸怎么保存？(2026 完整教程)",
  description:
    "iMessage 里收到一张超好笑的贴纸,想保存下来自己用?长按贴纸点「保存到贴纸」会卡住没反应。这是为什么,以及真正能用的「双指拖拽」操作步骤——iOS 唯一开放的第三方贴纸保存路径。",
  alternates: { canonical: "/blog/zh/save-imessage-sticker-friend" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "zh-Hans",
    headline: "朋友发的 iMessage 贴纸怎么保存到自己的贴纸库?",
    description:
      "iOS 显示「保存到贴纸」按钮但点了卡住——这是 Apple 系统贴纸守护进程的已知问题。真正可用的方法是把贴纸拖进 MemePouch 的 iMessage 扩展。本文说明背后原理与操作步骤。",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh/save-imessage-sticker-friend"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    inLanguage: "zh-Hans",
    name: "保存别人在 iMessage 里发给你的贴纸",
    description:
      "用「双指拖拽」把贴纸拖进 MemePouch 的 iMessage 扩展,绕开 Apple 系统「保存到贴纸」卡住的问题。",
    totalTime: "PT15S",
    tool: [
      { "@type": "HowToTool", name: "iPhone (iOS 16 或更高)" },
      { "@type": "HowToTool", name: "MemePouch (App Store 免费下载)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "长按贴纸",
        text: "用一根手指长按朋友发来的贴纸,保持不要松手。贴纸会从聊天气泡里「浮起来」,跟着你的手指走。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "切换到 MemePouch",
        text: "用另一根手指点 iMessage 输入框左边的「应用」图标,然后选择 MemePouch 打开。第一根手指继续按住贴纸。(如果 MemePouch 已经打开在聊天下方,这一步可以跳过——一根手指就够了。)",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "把贴纸放到 MemePouch 网格里",
        text: "把贴纸拖到 MemePouch 的贴纸网格上,然后松手。贴纸就被保存到你的贴纸库了——动态 GIF 也能保留动画效果。",
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
        name: "iMessage 里收到的贴纸,为什么「保存到贴纸」按钮点了没反应?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS 17 和 18 在第三方贴纸的「Emoji 详情」视图里确实显示了「保存到贴纸」按钮,但点击之后会卡住——Apple 的 StickersUltraExtension 启动后,系统贴纸守护进程 stickersd 反复掉线,XPC 连接持续失效,保存动作永远不会完成。这是 iOS 系统级 Bug,第三方贴纸 App 无法修复(我们没有任何公开 API 能介入系统贴纸保存流程)。",
        },
      },
      {
        "@type": "Question",
        name: "一定要用两根手指吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "只有当 MemePouch 还没打开的时候才需要两根手指——一根按住贴纸,另一根切换到 MemePouch。如果你提前在 iMessage 抽屉里打开了 MemePouch,贴纸网格已经显示在聊天下方,那一根手指就够了——长按贴纸直接往下拖到网格里就行。",
        },
      },
      {
        "@type": "Question",
        name: "GIF 动态贴纸拖过来还会动吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "会。贴纸是以原始 GIF 数据的形式拖过来的,MemePouch 不会重新编码——帧率、时长、画质和你朋友发出去的一模一样。",
        },
      },
      {
        "@type": "Question",
        name: "保存好之后,我怎么把这张贴纸发给别人?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "在任意 iMessage 聊天里,点输入框左边的「应用」图标,选 MemePouch,然后点你要发的贴纸。MemePouch 会自动收起键盘回到聊天界面,贴纸已经放在输入框里——你点发送就行。静态贴纸还能像 Apple 系统贴纸一样,长按拖到对方消息气泡上「贴」过去;GIF 贴纸则作为高清附件单独发出去。",
        },
      },
      {
        "@type": "Question",
        name: "截图保存这张贴纸不行吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以截,但效果不好。截图会把聊天气泡背景、时间戳、有时候还有键盘都包含进来;动态贴纸截图后只剩一帧静态画面;而且截图本质上是「相册里的图片」,不是贴纸——下次想发还要走相册选图流程,体验明显差。拖拽流程能保留完整动画,直接得到一张真正的贴纸。",
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
          朋友发的 iMessage 贴纸,怎么保存到自己的贴纸库?
        </h1>
        <p className="text-sm text-slate-500 mb-8">更新于 2026-05-15 · iOS 16+ · 适用于 iPhone</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          朋友在 iMessage 里发来一张超好笑的贴纸。你长按它,等着看到「保存到贴纸」按钮——
          按钮真的在那里。你点了一下,准备让这张贴纸进入你的贴纸库。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          然后……<strong>什么都没发生。</strong>界面卡在那里,贴纸永远没保存进去。
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            一句话答案
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS 的「保存到贴纸」按钮在第三方贴纸上点了会卡——是 Apple 系统的 Bug,不是你操作错了。
            真正能用的方法是把贴纸<strong>拖进 MemePouch</strong>:MemePouch 没打开的时候用双指拖,
            打开的时候单指拖。
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition"
            >
              在 App Store 下载 MemePouch
            </a>
            <span className="text-sm text-slate-500">iPhone · iOS 16+ · 一次性 $2.99 解锁,无订阅</span>
          </div>
        </aside>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          为什么 Apple 的「保存到贴纸」会卡住?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          你点的那个「保存到贴纸」按钮,确实是 Apple 提供的——iOS 17 和 18 都有。
          但它背后调用的是 Apple 自己的内部扩展{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">StickersUltraExtension</code>,
          这个扩展会和 iOS 系统贴纸守护进程{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">stickersd</code> 通过 XPC 通信,
          把贴纸写入系统贴纸库。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          对于 Apple 原生的贴纸(比如照片自动抠图、Memoji),这个流程跑得通。
          但对于<strong>第三方贴纸</strong>(任何贴纸包 App 制作的贴纸),
          StickersUltraExtension 和 stickersd 之间的 XPC 连接会反复掉线,
          保存动作永远不会完成。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          这是 iOS 系统级 Bug,第三方 App 完全无法介入——
          整个「保存到贴纸」的处理流程都是 Apple 私有的。从 iOS 17 一直到 iOS 18,Apple 还没修。
          所以你需要绕过它,而绕过的方法只有一种。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          方法一:双指拖拽(MemePouch 还没打开时)
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          这是最常用的场景——你正在聊天,朋友突然发来一张贴纸,
          你当场决定要保存。MemePouch 还没在 iMessage 抽屉里打开。
          双指操作可以一次完成「打开 MemePouch」和「拖贴纸进去」这两步,
          中间不会让贴纸掉下来。
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>一根手指长按贴纸,保持不要松手。</strong>
            等几秒钟,贴纸会「浮起来」,跟着你的手指走——这时候你才进入拖拽状态。
            如果你太早松手,会出现普通的右键菜单(回复 / 贴 / Emoji 详情……),需要重新来一次。
          </li>
          <li>
            <strong>另一根手指点 iMessage 输入框左边的「应用」图标,选 MemePouch 打开。</strong>
            iMessage 抽屉切换到 MemePouch,但第一根手指还在按着贴纸。
          </li>
          <li>
            <strong>把贴纸拖到 MemePouch 网格上,松手。</strong>
            网格上会显示「+」号提示,贴纸就被保存进库了。
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          方法二:单指拖拽(MemePouch 已经打开时)
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          如果你提前在 iMessage 抽屉里打开了 MemePouch,贴纸网格已经显示在聊天下方,
          那操作可以简化成单指——目标已经在屏幕上,不用切换抽屉了:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>长按贴纸</strong>(同上,等浮起来)。
          </li>
          <li>
            <strong>直接往下拖到 MemePouch 网格上,松手。</strong>
            不用第二根手指。
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          两种方法保存进来的贴纸是一样的——动画、画质都和原贴纸完全一致。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          保存好之后,怎么把贴纸发出去?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          MemePouch 在发送体验上比大多数贴纸键盘做得更细致——
          在任意 iMessage 聊天里点 MemePouch 图标,选你要发的贴纸,
          <strong>键盘会自动收回到聊天界面</strong>,
          贴纸已经放在你的输入框里,你点发送就行。
          大多数贴纸键盘 App 选完贴纸后还停在键盘界面,要手动滑走才能看到聊天——
          MemePouch 帮你省了这一步。
        </p>
        <p className="text-slate-700 leading-relaxed mb-12">
          静态贴纸还能像 Apple 系统贴纸一样,长按拖到对方消息气泡上「贴」过去;
          GIF 动态贴纸则作为高清附件单独发出去——
          画质比 Apple 系统贴纸路径(被 500 KB 大小限制)好得多。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          为什么其他贴纸 App 做不到这件事?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          iOS 从 2017 年(iOS 11)起就提供了拖拽 API{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">UIDropInteraction</code>,
          理论上任何贴纸 App 都可以在自己的 iMessage 扩展上注册「接受拖拽」的目标区域,
          这样用户就能把聊天里的贴纸拖进去保存。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          但大多数贴纸包 App 上架时间比这个能力出现的时间早,
          它们从来没接入过这个 API,所以即便 iOS 允许,
          它们的 iMessage 扩展也接不住贴纸——拖过去会反弹回原来的聊天气泡。
          MemePouch 是专门围绕这个流程做的,所以才接得住。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          想看更详细的技术原理,可以读{" "}
          <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
            《为什么 iMessage 的「保存到贴纸」会卡住》(英文)
          </Link>{" "}
          或英文版完整操作指南{" "}
          <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
            How to save an iMessage sticker someone sent you
          </Link>
          。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">几个常见问题</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              截图保存这张贴纸不行吗?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              可以截,但效果不好。截图会把聊天气泡背景、时间戳、有时候还有键盘都包含进来;
              动态贴纸截图后只剩一帧静态画面;而且截图本质上是「相册里的图片」,不是贴纸——
              下次想发还要走相册选图流程,体验明显差。拖拽流程能保留完整动画,
              直接得到一张真正的贴纸。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">关掉 iMessage 用短信发给自己呢?</h3>
            <p className="text-slate-700 leading-relaxed">
              这是网上常见的老办法——把 iMessage 关掉,
              贴纸通过 SMS 重新发给自己,然后存到相册。这只对原本就是普通图片的贴纸有效,
              对从第三方贴纸 App 制作的贴纸或动态贴纸不行——SMS 会破坏贴纸格式或丢失动画。
              而且要切系统设置、发短信、再切回来——拖拽方法 5 秒搞定,这个方法可能要 5 分钟。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">MemePouch 多少钱?</h3>
            <p className="text-slate-700 leading-relaxed">
              前 10 张贴纸免费。无限解锁是一次性 $2.99(约 ¥21),买一次永久使用——没有订阅、没有广告。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">这个 App 能用在微信 / Telegram / WhatsApp 吗?</h3>
            <p className="text-slate-700 leading-relaxed">
              不能,MemePouch 是专门为 iMessage 设计的——贴纸住在 iMessage 抽屉里,
              发送流程也是 iMessage 原生的(静态贴纸贴消息、GIF 走附件路径)。
              如果你主要在微信、Telegram、WhatsApp 聊天,需要的是另一类「跨平台贴纸制作」App,
              我们不和那类 App 重叠。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">动态贴纸保存进来还会动吗?</h3>
            <p className="text-slate-700 leading-relaxed">
              会。贴纸以原始 GIF 数据拖过来,MemePouch 不重新编码——
              帧率、时长、画质和原贴纸完全一致。
            </p>
          </div>
        </div>

        <div className="not-prose mt-12 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-1">下次再收到好玩的贴纸,试试拖拽流程。</p>
            <p className="text-slate-400 text-sm">前 10 张免费 · 一次性 $2.99 解锁无限 · 无订阅无广告</p>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition self-start sm:self-auto whitespace-nowrap"
          >
            下载 MemePouch
          </a>
        </div>
      </article>
    </div>
  );
}
