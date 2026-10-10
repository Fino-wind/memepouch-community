import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "./_components/ClarityAnalytics";
import ScrollFX from "./_components/ScrollFX";
import SiteFooter from "./_components/SiteFooter";
import SiteNav from "./_components/SiteNav";
import { APP_ID, APP_STORE_PT, APP_STORE_URL, SITE_URL } from "./site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MemePouch — iMessage Stickers Without Auto-Cutout",
    template: "%s · MemePouch",
  },
  description:
    "Apple's built-in sticker tool auto-removes backgrounds and butchers memes. MemePouch keeps the full photo, GIF, or short video as-is — no auto-cutout — and lets you save the third-party stickers friends send you. Free to try — unlock it once, or subscribe.",
  applicationName: "MemePouch",
  keywords: [
    "iMessage stickers without auto-cutout",
    "no background removal stickers",
    "save iMessage stickers someone sent",
    "save third-party stickers iMessage",
    "custom iMessage stickers",
    "iMessage sticker app no cutout",
    "gif to sticker iMessage",
    "make iMessage stickers from photos",
    "iPhone sticker app",
    "MemePouch",
  ],
  authors: [{ name: "MemePouch" }],
  creator: "MemePouch",
  publisher: "MemePouch",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MemePouch",
    title: "MemePouch — iMessage Stickers Without Auto-Cutout",
    description:
      "Apple's sticker tool removes backgrounds and chops up your memes. MemePouch keeps the full photo, GIF, or video as-is — and lets you save the stickers friends send you.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePouch — iMessage Stickers Without Auto-Cutout",
    description:
      "Apple's sticker tool butchers memes by auto-removing backgrounds. MemePouch keeps the whole frame, and lets you save the stickers friends send you.",
  },
  category: "utilities",
  appleWebApp: {
    title: "MemePouch",
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "apple-itunes-app": "app-id=6763726992",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const APP_LD = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MemePouch",
    operatingSystem: "iOS 16, iOS 17, iOS 18",
    applicationCategory: "UtilitiesApplication",
    description:
      "Custom iMessage sticker app that keeps the full image as-is — no auto-cutout, no background removal — and lets you save the third-party stickers friends send you in iMessage. Imports from Photos, share sheet, clipboard, or by dragging a sticker straight from a chat.",
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free with an optional unlock for unlimited stickers",
    },
    publisher: {
      "@type": "Organization",
      name: "MemePouch",
      url: SITE_URL,
    },
    inLanguage: ["en", "zh-Hans"],
    featureList: [
      "Keep full image as-is — no auto-cutout or background removal",
      "Save third-party iMessage stickers friends send you (drag into MemePouch)",
      "Import photos and GIFs as iMessage stickers",
      "Trim short videos into animated GIF stickers",
      "Auto-clean originals from Photos after import",
      "Paste from clipboard",
      "Receive shared images via the iOS share sheet",
    ],
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        {/* PostHog（project 269900「memepouch.tetherme.app」· 2026-09-09 接入）
            不进 MemePouch 那个 project：mp-now / mp-detail 的 DAU 查询没有 app 过滤，
            网页访客会被算成 app 用户。营销站单独一个 project，两边都干净。
            内部流量：访问一次 ?ph_internal=1 即永久打标（localStorage），此后事件带 internal:true。
            🔴 只在正式域名上启动：本地预览、开发服务器的访问一律不发（2026-10-10 本地预览带着
               utm_source=chatgpt.com 发了 8 条，差点被 Web analytics 算成 AI 渠道访客）。项目的
               test_account_filters 另外只认 $host = 正式域名，两层各管一半：这里管以后，过滤管已经发出去的。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(location.hostname!=='${new URL(SITE_URL).hostname}')return;var s=document.createElement('script');
s.src='https://eu-assets.i.posthog.com/static/array.js';s.async=true;
s.onload=function(){posthog.init('phc_xEgkGFfkrWRpvur6C8v4U7KyDgFoGTdVDRt7bj5TMGFB',{api_host:'https://eu.i.posthog.com',defaults:'2025-05-24',person_profiles:'identified_only'});
posthog.register({app:'memepouch-web'});
try{if(new URLSearchParams(location.search).has('ph_internal'))localStorage.setItem('ph_internal','1');
if(localStorage.getItem('ph_internal')==='1')posthog.register({internal:true});}catch(e){}};
document.head.appendChild(s);})();`,
          }}
        />
        {/* 来源归因：按着陆来源改写本站 App Store 链接的 ct，让 ASC「营销活动」按来源分装机。
            🔴 ct 只分 4 桶（ai / search / social / site_web）：ASC 营销活动一个 ct 至少 5 个 Apple 账号安装才显示，
               桶分细了每桶都到不了 5，报表永远「数据不足」。
            网页上的细分来源不在这里记：PostHog Web analytics 自己按来路分渠道（2026-07-28 起有原生「AI」渠道，
               历史数据也会重新归类）。这里原先还往 PostHog 写 referrer_channel，但写在首个 $pageview 之后，
               从没落到页面浏览上（10-10 查：100 条里 0 条有值），2026-10-10 删掉。
            🔑 哪个来源算哪个桶，查的是构建时从 PostHog 官方渠道定义生成的 /ref-channels.json（ref-channels.json/route.ts），
               跟看板的「渠道」是同一张表；查法也照抄 PostHog：先 utm_source、再 utm_medium、再来路域名，
               每一项先按原值查，查不到再去掉子域名查（www.google.com → google.com，alice.yandex.ru → yandex.ru）。
               只有带来路或 utm 的访客才去取这个文件；直接打开的访客一个字节都不多下。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
var APP='id${APP_ID}',PT='${APP_STORE_PT}',KEY='mp_ct';
function tag(a,ct){try{var u=new URL(a.href);if(u.hostname!=='apps.apple.com'||u.pathname.indexOf(APP)<0)return;
u.searchParams.set('pt',PT);u.searchParams.set('ct',ct);a.href=u.toString();}catch(e){}}
function apply(ct){
function all(){var l=document.querySelectorAll('a[href*="apps.apple.com"]');for(var i=0;i<l.length;i++)tag(l[i],ct);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',all);else all();
document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href*="apps.apple.com"]');if(a)tag(a,ct);},true);}
function stored(){try{return sessionStorage.getItem(KEY);}catch(e){return null;}}
var q=new URLSearchParams(location.search);
var src=(q.get('utm_source')||'').toLowerCase(),med=(q.get('utm_medium')||'').toLowerCase();
var rh='';try{rh=new URL(document.referrer).hostname.toLowerCase();}catch(e){}
if(rh===location.hostname)rh='';
if(!src&&!med&&!rh){var s=stored();if(s)apply(s);return;}
function look(m,v){if(!v)return null;if(m[v])return m[v];var p=v.split('.');
for(var i=1;i<p.length-1;i++){var d=p.slice(i).join('.');if(m[d])return m[d];}return null;}
fetch('/ref-channels.json').then(function(r){return r.json();}).then(function(t){
var ct=look(t.source,src)||look(t.medium,med)||look(t.source,rh)||(src?'site_web':null);
if(ct){try{sessionStorage.setItem(KEY,ct);}catch(e){}}else ct=stored();
if(ct)apply(ct);
}).catch(function(){var s=stored();if(s)apply(s);});
}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_LD) }}
        />
        <ClarityAnalytics />
        <ScrollFX />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
