import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../../site";

export const metadata: Metadata = {
  title: "iPhone 怎么自制 WhatsApp 贴纸?用自己的表情包做贴纸包 (2026)",
  description:
    "把照片、表情包、GIF 做成 WhatsApp 贴纸包——无水印、不强制抠图、支持动态 GIF。导入 MemePouch 一次,同一批贴纸 iMessage 和 WhatsApp 都能用。iOS 16+。",
  alternates: { canonical: "/blog/zh/make-whatsapp-stickers-iphone" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "iPhone 怎么自制 WhatsApp 贴纸?用自己的表情包做贴纸包",
    description:
      "用 MemePouch 把照片、表情包、GIF 做成 WhatsApp 贴纸包——选 3-30 张、点添加、在 WhatsApp 确认。GIF 会变成动态贴纸。",
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/zh/make-whatsapp-stickers-iphone"),
    inLanguage: "zh-Hans",
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "为什么 WhatsApp 贴纸包至少要 3 张?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "这是 WhatsApp 官方对第三方贴纸包的硬性规定——每包必须 3 到 30 张。MemePouch 选择时会实时显示数量,不够会提示。",
        },
      },
      {
        "@type": "Question",
        name: "动态 GIF 贴纸在 WhatsApp 能动吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "能。GIF 贴纸会导出成 WhatsApp 的动态贴纸(动态 WebP)。WhatsApp 规定静态和动态贴纸必须分开成包,所以选择器里有静态/GIF 两个分页。",
        },
      },
      {
        "@type": "Question",
        name: "导出到 WhatsApp 要收费吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不用——WhatsApp 导出在 MemePouch 完全免费,不需要解锁。一次性解锁只影响贴纸库容量上限。",
        },
      },
      {
        "@type": "Question",
        name: "贴纸会被裁切或压糊吗?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不会裁切——MemePouch 把整张图等比缩放放进 WhatsApp 要求的 512×512 画布,表情包的字和背景都保得住。压缩只压到 WhatsApp 的大小上限为止(静态 100 KB / 动态 500 KB)。",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24" lang="zh-Hans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          iPhone 怎么自制 WhatsApp 贴纸?用自己的表情包做贴纸包
        </h1>
        <p className="text-sm text-slate-500 mb-8">最后更新 2026-07-11 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          WhatsApp 在 iPhone 上没有内置「把自己的照片做成贴纸」的功能——贴纸抽屉里只有别人发布的贴纸包。
          网上的替代方案不是可疑的在线转换器,就是会在你的表情包上盖水印的贴纸 App。
          干净的做法是:<strong>把表情包导入 MemePouch 一次,再把任选的几张导出成正式的
          WhatsApp 贴纸包</strong>——完整画面、无水印、动态 GIF 也支持。
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          加分项:同一个贴纸库也是你的 iMessage 贴纸收藏,导入一次、两个 App 都能用。
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">下载</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">App Store 上的 MemePouch</h2>
          <p className="text-slate-600 mb-4">iPhone 专用 · iOS 16+ · WhatsApp 导出免费</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            下载 MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">四步做出 WhatsApp 贴纸包</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">1. 把表情包导入 MemePouch</h3>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li><strong>相册多选</strong>——一次最多 30 张照片或 GIF</li>
          <li><strong>粘贴</strong>——在任何地方复制表情包,MemePouch 里一键粘贴</li>
          <li><strong>分享菜单</strong>——Safari、WhatsApp 本身、任何 App 都能分享进来</li>
          <li><strong>视频转 GIF</strong>——任何短片(最长 10 秒)剪成循环 GIF 贴纸</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          全部<em>完整画面</em>导入——没有强制抠图,表情包的字和背景都保得住。
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">2. 点 WhatsApp 按钮</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          在<strong>我的贴纸</strong>页,点标题旁的 <strong>WhatsApp</strong> 按钮(库存满 3 张才出现),会打开整个贴纸库的选择器。
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">3. 选 3–30 张</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          点选想要的贴纸,或点<strong>全选</strong>。选择器替你把 WhatsApp 的两条规定管好:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li><strong>每包 3 到 30 张</strong>——WhatsApp 官方规定,按钮会实时显示数量</li>
          <li><strong>静态和动态分开成包</strong>——GIF 贴纸有自己的分页,导出成动态 WhatsApp 贴纸</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">4. 在 WhatsApp 确认添加</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          点<strong>添加到 WhatsApp</strong>。MemePouch 把每张贴纸转成 WhatsApp 要求的格式(512×512
          WebP,带转换进度),然后 WhatsApp 会打开<strong>添加贴纸包的确认页</strong>。点保存——贴纸包就进了你的
          WhatsApp 贴纸抽屉,每个聊天都能用。
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">一个表情包库,两个聊天 App</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          比一次性转换器好的地方:你的表情包住在同一个有整理的库里。导入一次,同一张贴纸在 iMessage
          抽屉一键可发,想用在 WhatsApp 时随时导出。已转换过的贴纸再次导出是秒出。收集到新表情包,再开一次选择器出新包就好。
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">开始吧</div>
          <p className="text-slate-600 mb-4">你最好笑的表情包值得在每个聊天里都一键可发——WhatsApp 导出免费。</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            下载 MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">相关教程</h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/zh/save-imessage-sticker-friend" className="text-blue-600 underline">
              朋友发的 iMessage 贴纸怎么保存?
            </Link>
          </li>
          <li>
            <Link href="/blog/zh/imessage-stickers-without-auto-cutout" className="text-blue-600 underline">
              不自动去背的 iMessage 贴纸:保留整张原图
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
