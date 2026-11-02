import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "朋友傳的 iMessage 貼圖怎麼存？(2026 完整教學)",
  description:
    "iMessage 收到一張超好笑的貼圖，想存下來自己用？長按貼圖點「儲存至貼圖」會卡住沒反應。這是為什麼，以及真正能用的「先點開抽屜，直接拖入」步驟——iOS 唯一開放給第三方貼圖 App 的儲存路徑。",
  alternates: {
    canonical: "/blog/zh-Hant/save-imessage-sticker-friend",
    languages: {
      en: "/blog/save-sticker-someone-sent-imessage",
      "zh-Hans": "/blog/zh/save-imessage-sticker-friend",
      "zh-Hant": "/blog/zh-Hant/save-imessage-sticker-friend",
      "x-default": "/blog/save-sticker-someone-sent-imessage",
    },
  },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "zh-Hant",
    headline: "朋友傳的 iMessage 貼圖怎麼存到自己的貼圖庫?",
    description:
      "iOS 顯示「儲存至貼圖」按鈕但點了卡住——這是 Apple 系統貼圖常駐程序的已知問題。真正可用的方法是先點開 MemePouch 抽屜，把貼圖直接拖入抽屜網格。本文說明背後原理與操作步驟。",
    datePublished: "2026-05-15",
    dateModified: "2026-11-02",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh-Hant/save-imessage-sticker-friend"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    inLanguage: "zh-Hant",
    name: "把朋友在 iMessage 傳的貼圖存起來",
    description:
      "先點開聊天下方的 MemePouch 抽屜，把貼圖直接拖入抽屜網格，繞過 Apple 系統「儲存至貼圖」卡住的問題。",
    totalTime: "PT10S",
    tool: [
      { "@type": "HowToTool", name: "iPhone(iOS 16 或以上)" },
      { "@type": "HowToTool", name: "MemePouch(App Store 免費下載)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "點開 MemePouch 抽屜",
        text: "在 iMessage 輸入欄下方點開 MemePouch 圖示，貼圖庫網格就會顯示在聊天下方。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "長按貼圖",
        text: "長按聊天裡朋友傳來的貼圖，貼圖會從訊息泡泡裡浮起來，跟著你的手指動。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "直接往下拖入抽屜網格",
        text: "直接把貼圖往下拖到 MemePouch 的網格上放手，秒存入庫，完整保留動態貼圖動畫！",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "zh-Hant",
    mainEntity: [
      {
        "@type": "Question",
        name: "iMessage 收到的貼圖,為什麼「儲存至貼圖」按了沒反應?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS 17 和 18 在第三方貼圖的「Emoji 詳細資訊」介面裡的確顯示了「儲存至貼圖」按鈕,但是按下去之後會卡住——Apple 的 StickersUltraExtension 啟動後,系統貼圖常駐程序 stickersd 會反覆掉線,XPC 連線持續失效,儲存動作永遠完不成。這是 iOS 系統層級的 Bug,第三方貼圖 App 沒有任何公開 API 可以介入系統的貼圖儲存流程,所以修不了。",
        },
      },
      {
        "@type": "Question",
        name: "一定要用兩根手指操作嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完全不需要！最順手的方式是直接先點開 iMessage 下方的 MemePouch 抽屜，然後長按聊天裡的貼圖，直接一根手指往下一拉拖進網格放手就存好了，全程單指單手即可完成。",
        },
      },
      {
        "@type": "Question",
        name: "動態 GIF 貼圖拖過來還會動嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "會。貼圖是以原始 GIF 資料的形式拖過來的,MemePouch 不會重新編碼——影格率、長度、畫質和朋友傳給你的一模一樣。",
        },
      },
      {
        "@type": "Question",
        name: "存好之後,我要怎麼把這張貼圖傳給別人?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "在任何 iMessage 聊天裡,點輸入欄左邊的 App 圖示,選 MemePouch,點你要傳的貼圖。MemePouch 會自動收回鍵盤回到聊天畫面,貼圖已經放在輸入欄了——點傳送就行。靜態貼圖還能像 Apple 系統貼圖一樣,長按拖到對方的訊息泡泡上「貼」過去;GIF 貼圖則作為高畫質附件單獨傳出去。",
        },
      },
      {
        "@type": "Question",
        name: "螢幕截圖存這張貼圖不行嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以截,但效果不好。截圖會把聊天泡泡背景、時間戳記、有時候連鍵盤都一起截進去;動態貼圖截圖後只剩一格靜態畫面;而且截圖本質上是「照片裡的一張圖」,不是貼圖——下次想傳還得走照片選圖流程,體驗明顯差。拖曳流程能保留完整動畫,直接得到一張真正的貼圖。",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24" lang="zh-Hant">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">
          朋友傳的 iMessage 貼圖,怎麼存到自己的貼圖庫?
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          更新於 2026-05-15 · iOS 16+ · iPhone 適用 ·{" "}
          <Link
            href="/blog/save-sticker-someone-sent-imessage"
            hrefLang="en"
            className="text-blue-600 hover:underline"
          >
            English
          </Link>{" "}
          ·{" "}
          <Link
            href="/blog/zh/save-imessage-sticker-friend"
            hrefLang="zh-Hans"
            className="text-blue-600 hover:underline"
          >
            简体
          </Link>
        </p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          朋友在 iMessage 傳來一張超好笑的貼圖。你長按它,等著看到「儲存至貼圖」按鈕——
          按鈕真的在那裡。你點了一下,以為這張貼圖會進到你的貼圖庫。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          結果……<strong>什麼也沒發生。</strong>畫面卡在那裡,貼圖永遠存不進去。
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            一句話答案
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS 的「儲存至貼圖」按鈕在第三方貼圖上點了會卡——是 Apple 系統 Bug,不是你操作錯。
            真正能用的方式是把貼圖<strong>拖到 MemePouch</strong>：先點開抽屜直接拖入，秒存入庫。
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition"
            >
              到 App Store 下載 MemePouch
            </a>
            <span className="text-sm text-slate-500">iPhone · iOS 16+ · 免費試用 · 支援買斷或訂閱</span>
          </div>
        </aside>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          為什麼 Apple 的「儲存至貼圖」會卡住?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          你點的那顆「儲存至貼圖」按鈕,確實是 Apple 自己提供的——iOS 17 和 18 都有。
          但它背後呼叫的是 Apple 的內部擴充功能{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">StickersUltraExtension</code>,
          這個擴充功能會和 iOS 系統貼圖常駐程序{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">stickersd</code> 透過 XPC 通訊,
          把貼圖寫到系統貼圖庫裡。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          對於 Apple 原生的貼圖(比如照片自動去背、Memoji),這條流程是通的。
          但對於<strong>第三方貼圖</strong>(任何貼圖包 App 製作的貼圖),
          StickersUltraExtension 和 stickersd 之間的 XPC 連線會反覆掉線,
          儲存動作永遠完不成。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          這是 iOS 系統層級的 Bug,第三方 App 完全無法介入——
          整個「儲存至貼圖」的處理流程都是 Apple 私有的。從 iOS 17 一路到 iOS 18,Apple 還沒修好。
          所以你需要繞過它,而繞過的方法只有一種。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          最簡單順手的方式：先點開抽屜，直接拖進去
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          這是最推薦、最直覺的操作方式。直接在 iMessage 輸入欄下方先點開 MemePouch，讓貼圖網格在螢幕下方候著，然後儲存貼圖只需要一滑：
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>在輸入欄下方點開 MemePouch 抽屜：</strong>
            點 iMessage 輸入欄左邊的「+」或 App 圖示，點開 MemePouch，你的貼圖庫網格就直接展示在聊天下方。
          </li>
          <li>
            <strong>長按聊天泡泡裡的貼圖：</strong>
            按住朋友傳來的貼圖，等它「浮起來」跟著手指動。
          </li>
          <li>
            <strong>直接往下一拉，拖到 MemePouch 網格裡放手：</strong>
            貼圖網格亮起「+」提示，瞬間儲存完畢！動態貼圖原始資料與動畫完好無損。
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          備用方式：如果已經長按浮起了貼圖
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          如果你沒提前打開抽屜、已經有一根手指按住貼圖浮起來了，也不用放手重來：
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            第一根手指繼續按住浮起的貼圖不要放。
          </li>
          <li>
            用另一根手指點一下輸入欄左側的 App 圖示切換到 MemePouch。
          </li>
          <li>
            拖進打開的網格放手即可。
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          兩種方法存進來的貼圖一模一樣——動畫、畫質都和原貼圖完全一致。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          存好之後,要怎麼把貼圖傳出去?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          MemePouch 在傳送體驗上做得比一般貼圖鍵盤細——
          在任何 iMessage 聊天裡點 MemePouch 圖示,選你要傳的貼圖,
          <strong>鍵盤會自動收回到聊天畫面</strong>,
          貼圖已經放在輸入欄裡,你點傳送就好。
          大部分貼圖鍵盤 App 選完貼圖後還停在鍵盤介面,要手動滑掉才能看到聊天——
          MemePouch 幫你省了這一步。
        </p>
        <p className="text-slate-700 leading-relaxed mb-12">
          靜態貼圖還能像 Apple 系統貼圖一樣,長按拖到對方訊息泡泡上「貼」過去;
          GIF 動態貼圖則作為高畫質附件單獨傳出去——
          畫質比 Apple 系統貼圖路徑(被 500 KB 大小限制)好太多。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          為什麼其他貼圖 App 做不到這件事?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          iOS 從 2017 年(iOS 11)起就提供了拖曳 API{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">UIDropInteraction</code>,
          理論上任何貼圖 App 都可以在自己的 iMessage 擴充功能上註冊「接受拖曳」的目標區域,
          這樣使用者就能把聊天裡的貼圖拖進去存起來。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          但大多數貼圖包 App 上架的時間比這個能力出現的時間還早,
          它們從來沒有接過這個 API,所以即使 iOS 允許,
          它們的 iMessage 擴充功能也接不住貼圖——拖過去會彈回原本的聊天泡泡。
          MemePouch 是專門圍繞這個流程設計的,所以接得住。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          想看更詳細的技術原理,可以讀{" "}
          <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
            《為什麼 iMessage 的「儲存至貼圖」會卡住》(英文)
          </Link>{" "}
          或英文版的完整操作教學{" "}
          <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
            How to save an iMessage sticker someone sent you
          </Link>
          。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">幾個常見問題</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              螢幕截圖存這張貼圖不行嗎?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              可以截,但效果不好。截圖會把聊天泡泡背景、時間戳記、有時候連鍵盤都一起截進去;
              動態貼圖截圖後只剩一格靜態畫面;而且截圖本質上是「照片裡的一張圖」,不是貼圖——
              下次想傳還得走照片選圖流程,體驗明顯差。拖曳流程能保留完整動畫,
              直接得到一張真正的貼圖。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              關掉 iMessage,用簡訊傳給自己呢?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              這是網路上常見的老方法——把 iMessage 關掉,讓貼圖透過 SMS 重新傳給自己,
              再存到照片裡。這只對原本就是普通圖片的貼圖有用,
              對第三方貼圖 App 製作的貼圖或動態貼圖都不行——SMS 會破壞貼圖格式或丟掉動畫。
              而且要切系統設定、傳簡訊、再切回來——拖曳方法 5 秒搞定,這個方法可能要 5 分鐘。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">MemePouch 多少錢?</h3>
            <p className="text-slate-700 leading-relaxed">
              可以免費試用。無限解鎖是一次性買斷,買一次永久使用——沒有訂閱、沒有廣告。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">這個 App 能用在 LINE / Telegram / WhatsApp 嗎?</h3>
            <p className="text-slate-700 leading-relaxed">
              不行。MemePouch 是專門為 iMessage 設計的——貼圖住在 iMessage 抽屜裡,
              傳送流程也是 iMessage 原生的(靜態貼圖貼訊息、GIF 走附件路徑)。
              如果你主要在 LINE、Telegram、WhatsApp 聊天,需要的是另一類「跨平台貼圖製作」App,
              我們不和那類 App 重疊。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">動態貼圖存進來還會動嗎?</h3>
            <p className="text-slate-700 leading-relaxed">
              會。貼圖是以原始 GIF 資料拖過來的,MemePouch 不會重新編碼——
              影格率、長度、畫質和原貼圖完全一致。
            </p>
          </div>
        </div>

        <div className="not-prose mt-12 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-1">下次再收到好玩的貼圖,試試拖曳流程。</p>
            <p className="text-slate-400 text-sm">免費試用 · 一次性解鎖無限 · 沒有訂閱、沒有廣告</p>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition self-start sm:self-auto whitespace-nowrap"
          >
            下載 MemePouch
          </a>
        </div>
      </article>
    </div>
  );
}
