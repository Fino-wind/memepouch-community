import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "iPhone 怎麼自製 WhatsApp 貼圖?用自己的迷因做貼圖包 (2026)",
  description:
    "把照片、迷因、GIF 做成 WhatsApp 貼圖包——無浮水印、不強制去背、支援動態 GIF。匯入 MemePouch 一次,同一批貼圖 iMessage 和 WhatsApp 都能用。iOS 16+。",
  alternates: { canonical: "/blog/zh-Hant/make-whatsapp-stickers-iphone" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "iPhone 怎麼自製 WhatsApp 貼圖?用自己的迷因做貼圖包",
    description:
      "用 MemePouch 把照片、迷因、GIF 做成 WhatsApp 貼圖包——選 3-30 張、按加入、在 WhatsApp 確認。GIF 會變成動態貼圖。",
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh-Hant/make-whatsapp-stickers-iphone"),
    inLanguage: "zh-Hant",
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "為什麼 WhatsApp 貼圖包至少要 3 張?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "這是 WhatsApp 官方對第三方貼圖包的硬性規定——每包必須 3 到 30 張。MemePouch 選取時會即時顯示數量,不夠會提示。",
        },
      },
      {
        "@type": "Question",
        name: "動態 GIF 貼圖在 WhatsApp 能動嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "能。GIF 貼圖會匯出成 WhatsApp 的動態貼圖(動態 WebP)。WhatsApp 規定靜態和動態貼圖必須分開成包,所以選取器裡有靜態/GIF 兩個分頁。",
        },
      },
      {
        "@type": "Question",
        name: "匯出到 WhatsApp 要收費嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不用——WhatsApp 匯出在 MemePouch 完全免費,不需要解鎖。一次性解鎖只影響貼圖庫容量上限。",
        },
      },
      {
        "@type": "Question",
        name: "貼圖會被裁切或壓爛嗎?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不會裁切——MemePouch 把整張圖等比縮放放進 WhatsApp 要求的 512×512 畫布,梗圖的字和背景都保得住。壓縮只壓到 WhatsApp 的大小上限為止(靜態 100 KB / 動態 500 KB)。",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24" lang="zh-Hant">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          iPhone 怎麼自製 WhatsApp 貼圖?用自己的迷因做貼圖包
        </h1>
        <p className="text-sm text-slate-500 mb-8">最後更新 2026-07-11 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          WhatsApp 在 iPhone 上沒有內建「把自己的照片做成貼圖」的功能——貼圖匣裡只有別人發佈的貼圖包。
          網路上的替代方案不是可疑的線上轉換器,就是會在你的迷因上蓋浮水印的貼圖 App。
          乾淨的做法是:<strong>把迷因匯入 MemePouch 一次,再把任選的幾張匯出成正式的
          WhatsApp 貼圖包</strong>——完整畫面、無浮水印、動態 GIF 也支援。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          加碼:同一個貼圖庫也是你的 iMessage 貼圖收藏,匯入一次、兩個 App 都能用。
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">下載</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">App Store 上的 MemePouch</h2>
          <p className="text-slate-600 mb-4">iPhone 專用 · iOS 16+ · WhatsApp 匯出免費</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            下載 MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">四步做出 WhatsApp 貼圖包</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">1. 把迷因匯入 MemePouch</h3>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li><strong>相簿多選</strong>——一次最多 30 張照片或 GIF</li>
          <li><strong>貼上</strong>——在任何地方複製迷因,MemePouch 裡一鍵貼上</li>
          <li><strong>分享選單</strong>——Safari、WhatsApp 本身、任何 App 都能分享進來</li>
          <li><strong>影片轉 GIF</strong>——任何短片(最長 10 秒)剪成循環 GIF 貼圖</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          全部<em>完整畫面</em>匯入——沒有強制去背,梗圖的字和背景都保得住。
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">2. 按 WhatsApp 按鈕</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          在<strong>我的貼圖</strong>頁,按標題旁的 <strong>WhatsApp</strong> 按鈕(庫存滿 3 張才出現),會打開整個貼圖庫的選取器。
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">3. 選 3–30 張</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          點選想要的貼圖,或按<strong>全選</strong>。選取器替你把 WhatsApp 的兩條規定管好:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li><strong>每包 3 到 30 張</strong>——WhatsApp 官方規定,按鈕會即時顯示數量</li>
          <li><strong>靜態和動態分開成包</strong>——GIF 貼圖有自己的分頁,匯出成動態 WhatsApp 貼圖</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">4. 在 WhatsApp 確認加入</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          按<strong>加入到 WhatsApp</strong>。MemePouch 把每張貼圖轉成 WhatsApp 要求的格式(512×512
          WebP,帶轉換進度),然後 WhatsApp 會打開<strong>加入貼圖包的確認頁</strong>。按儲存——貼圖包就進了你的
          WhatsApp 貼圖匣,每個聊天室都能用。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">一個迷因庫,兩個通訊 App</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          比一次性轉換器好的地方:你的迷因住在同一個有整理的庫裡。匯入一次,同一張貼圖在 iMessage
          抽屜一鍵可發,想用在 WhatsApp 時隨時匯出。已轉換過的貼圖再次匯出是秒出。收集到新迷因,再開一次選取器出新包就好。
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">開始吧</div>
          <p className="text-slate-600 mb-4">你最好笑的迷因值得在每個聊天室都一鍵可發——WhatsApp 匯出免費。</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            下載 MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">相關教學</h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/zh-Hant/save-imessage-sticker-friend" className="text-blue-600 underline">
              朋友傳的 iMessage 貼圖怎麼存?
            </Link>
          </li>
          <li>
            <Link href="/blog/zh-Hant/imessage-stickers-without-auto-cutout" className="text-blue-600 underline">
              不自動去背的 iMessage 貼圖:保留整張原圖
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
