import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "不自動去背的 iMessage 貼圖怎麼做？保留整張原圖（2026 教學）",
  description:
    "Apple 的「加入貼圖」會用 Vision 框架自動把背景摳掉，常常把迷因的字、手、反應圖都一起切掉。為什麼 iOS 一定要去背、為什麼沒有設定可關，以及保留整張原圖的 iMessage 貼圖做法——靠第三方貼圖包 App。",
  alternates: {
    canonical: "/blog/zh-Hant/imessage-stickers-without-auto-cutout",
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
    inLanguage: "zh-Hant",
    headline: "不自動去背的 iMessage 貼圖怎麼做？保留整張原圖",
    description:
      "Apple 的「加入貼圖」會用 Vision 框架自動摳掉背景，毀掉有文字、有手、有反應臉的迷因。本文解釋 iOS 為什麼一定要去背、為什麼沒有設定可以關掉，以及保留整張原圖的真正做法——透過第三方 MSSticker 流程把整張照片、GIF 或 Live Photo 變成完整的 iMessage 貼圖。",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh-Hant/imessage-stickers-without-auto-cutout"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    inLanguage: "zh-Hant",
    name: "做一張保留整張原圖、不被自動去背的 iMessage 貼圖",
    description:
      "用 MemePouch 把整張照片、GIF 或 Live Photo 匯入成 iMessage 貼圖，不會經過 Apple Vision 框架的主體偵測去背。靜態貼圖可以貼在訊息泡泡上像 Apple 系統貼圖一樣，但保留完整畫面。",
    totalTime: "PT30S",
    supply: [
      { "@type": "HowToSupply", name: "iPhone（iOS 16 或以上）" },
      { "@type": "HowToSupply", name: "MemePouch（App Store 免費下載）" },
      { "@type": "HowToSupply", name: "想做成貼圖的照片、GIF 或短影片" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "打開 MemePouch",
        text: "在 iPhone 上開啟 MemePouch。主畫面上方有匯入按鈕：照片、Live Photo、剪貼簿、分享面板。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "匯入照片、GIF 或 Live Photo",
        text: "點「從相簿匯入」選一張迷因。MemePouch 會把整張畫面儲存下來——不跑 Vision 主體偵測、不去背景。HEIC 照片會在匯入時自動轉檔。Live Photo 也能一鍵變成最長 10 秒的 GIF 貼圖。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "從 iMessage 抽屜傳送",
        text: "在任何聊天裡點 iMessage 抽屜的 MemePouch 圖示，你的貼圖會出現在網格裡。點一下就傳出去，或長按拖到對方訊息泡泡上「黏」上去（跟系統貼圖一樣）。GIF 會以完整畫質的附件方式傳送。",
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
        name: "可以關掉 Apple「加入貼圖」的自動去背嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不行。iOS 沒有任何設定可以關掉「加入貼圖」啟動時跑的背景移除——這個流程是 Apple 寫死的，沒有設定可切換，也沒有公開 API 讓第三方 App 加上關閉的選項。想要得到保留整張原圖的 iMessage 貼圖，唯一的方法是用另一條完全不同的貼圖流程——透過第三方貼圖包 App（例如 MemePouch），這類 App 是用 MSStickerBrowserView 來註冊貼圖，根本不會經過 Apple 系統的去背流程。",
        },
      },
      {
        "@type": "Question",
        name: "為什麼 Apple 一定要自動去背？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple 的「加入貼圖」是用裝置上的 Vision 框架——Apple 自己的電腦視覺函式庫——來偵測前景主體，把其他部份全部裁掉。它是為了人物照、寵物、單一物件這類用途設計的：把主體獨立出來通常會比保留整張照片好看。但這個流程預設「一張圖只有一個明顯主體、背景沒有意義」——對迷因、反應圖、有疊文字的截圖、或任何「背景就是笑點」的圖片來說，這個假設完全錯誤。",
        },
      },
      {
        "@type": "Question",
        name: "MemePouch 在匯入照片時會跑 AI 處理嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不會。MemePouch 直接讀取原始檔案。靜態貼圖會經過 Apple 的 MSSticker API，這個 API 有 500 KB 上限，所以 MemePouch 會在檔案太大時自動壓縮——但絕對不裁切、不跑主體偵測、不改變畫面構圖。所有處理都在裝置上完成，不上傳雲端、沒有分析追蹤。",
        },
      },
      {
        "@type": "Question",
        name: "整張原圖的貼圖還能像 Apple 貼圖那樣黏在訊息泡泡上嗎？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。透過 MemePouch 的 iMessage 擴充功能傳出去的靜態貼圖是真正的 MSSticker 物件，你可以長按然後拖到別人的訊息泡泡上，跟 Apple 去背貼圖完全一樣的操作。GIF 貼圖則是透過 Messages 附件流程傳送——它們會以自己獨立的訊息泡泡傳出去，不能黏在別人的訊息上（這是不被 500 KB 限制的代價）。",
        },
      },
      {
        "@type": "Question",
        name: "動態貼圖和 GIF 呢？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple 的「加入貼圖」在 iOS 17+ 支援把 Live Photo 變成動態貼圖，但它一樣會對每一格畫面跑主體偵測去背——動畫的背景變透明，跟靜態貼圖一樣會丟掉脈絡。MemePouch 的動態貼圖則保留完整畫面：你可以直接匯入 GIF，或從短影片或 Live Photo 剪 10 秒以內存成 GIF 貼圖。整張畫面完整循環，什麼都不會被遮掉。",
        },
      },
      {
        "@type": "Question",
        name: "我能不能直接把整張原圖的迷因存到 iOS 系統貼圖庫？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不行。iOS 系統貼圖庫只接受兩種來源：Apple 自己的「加入貼圖」流程（一定會去背）和 iMessage 收到貼圖時的「儲存至貼圖」按鈕（這個按鈕對第三方貼圖目前是壞掉的，詳見另一篇技術分析）。Apple 沒有公開 API 讓第三方 App 寫入系統貼圖庫。MemePouch 的貼圖住在自己的 iMessage 抽屜 App 裡——傳送和黏訊息泡泡的行為跟 Apple 貼圖一樣，但它們不共用同一個資料庫。",
        },
      },
      {
        "@type": "Question",
        name: "Apple 的自動去背什麼時候反而是對的選擇？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "當照片本身就是「乾淨背景上的單一主體」——比如寵物、單一物件、人像——而你又喜歡 Apple 去背產生的「透明背景貼圖」風格時。這種情況 Vision 框架通常做得很好，根本不需要第三方 App。MemePouch 存在的理由是貼圖用途的另一半：迷因、反應圖、截圖、有文字或多個視覺元素的照片，以及任何「整張畫面就是笑點」的素材。",
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
          不自動去背的 iMessage 貼圖：保留整張原圖
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          更新於 2026-05-16 · iOS 16+ · iPhone 適用 ·{" "}
          <Link
            href="/blog/imessage-stickers-without-auto-cutout"
            hrefLang="en"
            className="text-blue-600 hover:underline"
          >
            English
          </Link>{" "}
          ·{" "}
          <Link
            href="/blog/zh/imessage-stickers-without-auto-cutout"
            hrefLang="zh-Hans"
            className="text-blue-600 hover:underline"
          >
            简体
          </Link>
        </p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          你在「相片」裡長按一張迷因，點「加入貼圖」。iOS 跑了一段主體偵測的小動畫，
          結果——笑點不見了。反應臉留下來，但「上方那行字」被吃掉了。手裡舉的牌子被切掉。
          原本想傳整張畫面，最後拿到的卻是一顆飄在透明背景上的頭。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          這不是 Bug。Apple 的<strong>「加入貼圖」永遠會跑去背</strong>，而且<strong>沒有設定可以關掉</strong>。
          本文說明 iOS 為什麼這樣做、為什麼第三方 App 也無法替你關掉，以及真正能保留整張原圖的做法——
          走另一條完全不經過系統去背流程的貼圖包流程。
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            一句話答案
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS 的「加入貼圖」一定會自動去背，沒辦法關。要保留整張原圖，就用第三方貼圖包
            App（例如 <strong>MemePouch</strong>）匯入——靜態貼圖照樣能黏訊息泡泡，GIF 則以完整附件傳送。
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
            <span className="text-sm text-slate-500">iPhone · iOS 16+ · 一次性 $2.99 解鎖，沒有訂閱</span>
          </div>
        </aside>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Apple 的「加入貼圖」實際在做什麼？
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          當你在 iOS 17 之後的相片或對話裡點「加入貼圖」，iOS 會把這張圖丟進
          <strong>Vision 框架</strong>——Apple 自己的裝置上電腦視覺函式庫。
          Vision 會偵測它認為的前景主體、產生一個遮罩，把其他部份全部裁掉。
          結果會以透明背景儲存成一個新的系統貼圖。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          對於人像、寵物、乾淨背景上的單一物件，這套流程做得很好。
          Vision 的模型已經被訓練過數百萬張主體分離任務，產生出來的貼圖通常看起來很乾淨。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          但對<strong>迷因</strong>來說，這套流程就是毀滅性的。
          去背預設「<strong>一張圖只有一個主體</strong>」加上「<strong>背景沒有意義</strong>」。
          迷因幾乎一定同時違反這兩個前提：
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>疊在圖上的文字會被遮掉。</strong>
            在 image macro 上方或下方加的那行字幕，對 Vision 來說就是背景，會被去掉。
          </li>
          <li>
            <strong>手和道具被切掉。</strong>
            反應圖裡舉著牌子、指著鏡頭、拿著東西的手——Vision 常常判斷成背景，一刀切下去。
          </li>
          <li>
            <strong>脈絡消失。</strong>
            一張截圖裡，意思在於整張畫面（一則推文、一段對話泡泡、一個 UI 元素），
            被 Vision 簡化成它認為最顯眼的那一塊形狀。
          </li>
          <li>
            <strong>雙人迷因壞掉。</strong>
            Drake 迷因、Distracted Boyfriend、Expanding Brain——
            Vision 只會挑一個主體，另一個就被遮掉，但笑點建立在「兩個都在畫面裡」。
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          為什麼你關不掉自動去背
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          設定 → 訊息裡沒有開關，相片設定裡沒有開關，開發者也沒有對應的 entitlement。
          去背是寫死在「加入貼圖」流程裡的。Apple 的產品設計是：
          <em>系統貼圖就應該是去背貼圖</em>，整個系統貼圖庫是繞著「透明背景的主體可以疊在別人訊息泡泡上」這個概念設計的。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          第三方 App 也沒辦法替你修這件事。Vision 的呼叫發生在 Apple 私有的 Stickers 擴充功能裡；
          公開的 Messages 框架給貼圖包 App 一條完全平行的流程（<code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSStickerBrowserView</code>），
          這條流程根本不會碰 Vision。兩套平行的貼圖系統共用同一個 iMessage 抽屜，但對「什麼算一張圖」的政策完全不一樣。
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          所以如果你想要在 iMessage 裡用整張原圖的貼圖，答案不是去抵抗「加入貼圖」，
          而是改用另一條流程。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          替代方案：用原始畫面的貼圖包
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          貼圖包 App 是以 iMessage 擴充功能的形式出貨的，會在 iMessage 抽屜裡註冊自己的網格。
          它們用公開的 <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code> API，
          這個 API 接受一個原始的圖檔，把它註冊成貼圖。
          沒有 Vision 呼叫、沒有主體偵測、沒有自動裁切。你放什麼進去，朋友就看到什麼。
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          MemePouch 就是這條流程，而且是專門為迷因調過的。
          你匯入一張照片、GIF、短影片或 Live Photo，App 把整張畫面存起來，
          iMessage 擴充功能把這個貼圖庫公開在你的貼圖抽屜裡。
          有兩個來自底層 API 的限制要注意：
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>靜態貼圖有 500 KB 上限</strong>，這是 MSSticker 規定的。
            MemePouch 會自動壓縮超過大小的照片來符合限制；以一般迷因解析度來說，肉眼可見的畫質損失很少。
          </li>
          <li>
            <strong>GIF 貼圖走 Messages 附件流程</strong>——
            意思是不被 500 KB 限制（最大約 10 MB），但會以自己的訊息泡泡傳出去，而不是黏在對方訊息上。
            這個取捨是刻意的：你得到完整畫質的動態貼圖，代價是失去「黏在訊息泡泡上」的能力。
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          並排對照
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 border-b border-slate-200"></th>
                <th className="px-3 py-2 border-b border-slate-200">Apple「加入貼圖」</th>
                <th className="px-3 py-2 border-b border-slate-200">MemePouch 貼圖包</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">背景</td>
                <td className="px-3 py-2 border-b border-slate-200">Vision 自動去背</td>
                <td className="px-3 py-2 border-b border-slate-200">原封不動保留</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">文字／疊圖</td>
                <td className="px-3 py-2 border-b border-slate-200">經常被遮掉</td>
                <td className="px-3 py-2 border-b border-slate-200">完整保留</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">雙人迷因</td>
                <td className="px-3 py-2 border-b border-slate-200">只挑一個主體，另一個被切</td>
                <td className="px-3 py-2 border-b border-slate-200">兩個主體都完整</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">住在哪裡</td>
                <td className="px-3 py-2 border-b border-slate-200">iOS 系統貼圖庫</td>
                <td className="px-3 py-2 border-b border-slate-200">iMessage 抽屜裡的 MemePouch App</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">黏訊息泡泡</td>
                <td className="px-3 py-2 border-b border-slate-200">可以</td>
                <td className="px-3 py-2 border-b border-slate-200">靜態貼圖可以；GIF 以附件傳送</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">靜態大小上限</td>
                <td className="px-3 py-2 border-b border-slate-200">不適用（系統管理）</td>
                <td className="px-3 py-2 border-b border-slate-200">500 KB（自動壓縮）</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">動態貼圖</td>
                <td className="px-3 py-2 border-b border-slate-200">只支援 Live Photo 主體（仍去背）</td>
                <td className="px-3 py-2 border-b border-slate-200">完整畫面 GIF，最長 10 秒／10 MB</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">是否上傳伺服器</td>
                <td className="px-3 py-2 border-b border-slate-200">無（Vision 在裝置上跑）</td>
                <td className="px-3 py-2 border-b border-slate-200">無（全部留在 iPhone 上）</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">費用</td>
                <td className="px-3 py-2">免費，系統內建</td>
                <td className="px-3 py-2">免費試用 10 張；$2.99 一次性解鎖無限張</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          流程：30 秒做出整張原圖貼圖
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed mb-6">
          <li>
            <strong>打開 MemePouch。</strong>
            匯入按鈕在上方：照片、Live Photo、剪貼簿、分享面板。
          </li>
          <li>
            <strong>匯入迷因。</strong>
            選一張照片、GIF、短影片或 Live Photo，整張畫面會被存下來。HEIC 自動轉檔；
            影片和 Live Photo 可以剪最長 10 秒存成 GIF 貼圖。
          </li>
          <li>
            <strong>傳出去。</strong>
            任何 iMessage 對話裡點 iMessage 抽屜的 MemePouch 圖示，貼圖出現在網格裡。
            點一下就傳，或長按拖到對方訊息泡泡上，跟 Apple 系統貼圖一樣的操作。
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          整個迴圈就這樣。如果你在設定裡打開「自動刪除原檔」，匯入後相簿裡的原檔會自動丟到「最近刪除」——
          收集網路上看到的迷因時很實用，不會塞滿相簿。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Apple 自動去背什麼時候才是對的選擇
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          公平地說——對於 Vision 設計來處理的情境，「加入貼圖」做得很好。
          一張你家狗的照片。一張乾淨的人像。一個你拍在牆前的物件。
          凡是你真的想要「主體在透明背景上」這種美感的場合，
          系統內建工具又快又免費，不用裝任何東西。
          MemePouch 不是要取代它；MemePouch 是另一半貼圖用途的答案——
          當你想要的是「整張畫面」、不是「畫面裡某一塊去背的形狀」的時候。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">常見問題</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              可以關掉 Apple 的自動去背嗎？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              不行。設定、相片、訊息裡都沒有開關。Vision 框架去背是寫死在 Apple「加入貼圖」流程裡的。
              要得到保留整張原圖的 iMessage 貼圖，唯一的方法是用另一條流程——
              第三方貼圖包 App，例如 MemePouch。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Apple 為什麼不開個設定？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              整個系統貼圖庫是繞著「透明背景主體可以拖到別人訊息泡泡上」這個概念設計的。
              一張完整原圖的貼圖在這個庫裡會看起來很怪——一個長方形飄在另一個長方形上。
              Apple 的設計選擇是：系統貼圖庫只放去背貼圖；整張原圖的貼圖住在第三方貼圖 App 自己的庫裡。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              MemePouch 匯入照片時會跑 AI／Vision 處理嗎？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              不會。匯入路徑是：讀檔 → 如果超過 MSSticker 500 KB 上限就壓縮（保留比例和畫面構圖）→
              寫到 App 的裝置上貼圖庫。沒有主體偵測、沒有放大處理、沒有雲端呼叫、沒有分析追蹤。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              整張原圖的貼圖還能黏在訊息泡泡上嗎？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              靜態貼圖——可以。它們是真正的 <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code>{" "}
              物件，可以長按拖到對方訊息上，跟 Apple 去背貼圖完全一樣。
              動態 GIF 貼圖則走 Messages 附件流程，會以自己的訊息泡泡傳出去，而不是黏在別人的訊息上——
              這是換取「不被 500 KB 限制」的代價。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              那朋友傳給我的貼圖怎麼存？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              那是另一個問題，有專門的教學：{" "}
              <Link href="/blog/zh-Hant/save-imessage-sticker-friend" className="text-blue-600 hover:underline">
                朋友傳的 iMessage 貼圖怎麼存
              </Link>
              。簡單版：長按貼圖、拖到 MemePouch（在 iMessage 抽屜裡）。
              系統「儲存至貼圖」按鈕為什麼會卡住的技術原因詳見{" "}
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                為什麼 iMessage 的「儲存至貼圖」會卡住
              </Link>
              。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              第三方貼圖 App 還有什麼 Apple 內建做不到的？
            </h3>
            <p className="text-slate-700 leading-relaxed">
              幾件事。最長 10 秒的動態 GIF 貼圖（Apple 系統貼圖只能動 Live Photo 去背版本）。
              批次匯入。一個獨立的貼圖庫，不會污染 iOS 系統貼圖抽屜。
              拖曳匯入別人傳來的第三方貼圖（系統流程那邊也是壞的）。
              還有——這篇文章的主題——保留整張畫面。
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            別再讓 Apple 把你的迷因切一半
          </h3>
          <p className="text-slate-700 mb-4">
            MemePouch 保留整張畫面——文字、手、脈絡，全部都在。
            iMessage 原生，免費 10 張試用後 $2.99 一次性解鎖。
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            到 App Store 下載 →
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-12">
          <h3 className="text-base font-semibold text-slate-900 mb-3">相關教學</h3>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/blog/zh-Hant/save-imessage-sticker-friend" className="text-blue-600 hover:underline">
                朋友傳的 iMessage 貼圖怎麼存
              </Link>
            </li>
            <li>
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                為什麼 iMessage 的「儲存至貼圖」會卡住（技術版）
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
