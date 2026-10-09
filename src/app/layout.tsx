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
            内部流量：访问一次 ?ph_internal=1 即永久打标（localStorage），此后事件带 internal:true。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');
s.src='https://eu-assets.i.posthog.com/static/array.js';s.async=true;
s.onload=function(){posthog.init('phc_xEgkGFfkrWRpvur6C8v4U7KyDgFoGTdVDRt7bj5TMGFB',{api_host:'https://eu.i.posthog.com',defaults:'2025-05-24',person_profiles:'identified_only'});
posthog.register({app:'memepouch-web'});
try{if(new URLSearchParams(location.search).has('ph_internal'))localStorage.setItem('ph_internal','1');
if(localStorage.getItem('ph_internal')==='1')posthog.register({internal:true});}catch(e){}};
document.head.appendChild(s);})();`,
          }}
        />
        {/* 来源归因：按着陆来源改写本站 App Store 链接的 ct，并把细分来源记进 PostHog。
            🔴 ct 只分 4 桶（ai / search / social / site_web）：ASC 营销活动一个 ct 至少 5 个 Apple 账号安装才显示，
               桶分细了每桶都到不了 5，报表永远「数据不足」。细分标签（ai_chatgpt、seo_google…）只进 PostHog，那边没门槛。
            🔴 域名一律精确匹配（等于或以 .域名 结尾）：子串匹配曾把 youtube 认成 you.com、把 pinterest.com 认成 t.co。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
var APP='id${APP_ID}',PT='${APP_STORE_PT}',KEY='mp_src';
var D={
'chatgpt.com':['ai','ai_chatgpt'],'chat.openai.com':['ai','ai_chatgpt'],'perplexity.ai':['ai','ai_perplexity'],
'claude.ai':['ai','ai_claude'],'gemini.google.com':['ai','ai_gemini'],'copilot.microsoft.com':['ai','ai_copilot'],
'grok.com':['ai','ai_grok'],'meta.ai':['ai','ai_meta'],'poe.com':['ai','ai_poe'],'you.com':['ai','ai_you'],
'phind.com':['ai','ai_phind'],'genspark.ai':['ai','ai_genspark'],
'bing.com':['search','seo_bing'],'duckduckgo.com':['search','seo_ddg'],'kagi.com':['search','seo_kagi'],
'ecosia.org':['search','seo_ecosia'],'yandex.ru':['search','seo_yandex'],'yahoo.com':['search','seo_yahoo'],
'reddit.com':['social','ref_reddit'],'news.ycombinator.com':['social','ref_hn'],'github.com':['social','ref_github'],
'medium.com':['social','ref_medium'],'dev.to':['social','ref_devto'],'v2ex.com':['social','ref_v2ex'],
'x.com':['social','ref_x'],'twitter.com':['social','ref_x'],'t.co':['social','ref_x'],
'tiktok.com':['social','ref_tiktok'],'youtube.com':['social','ref_youtube'],'youtu.be':['social','ref_youtube'],
'instagram.com':['social','ref_instagram'],'facebook.com':['social','ref_facebook']};
var U={chatgpt:'chatgpt.com',openai:'chatgpt.com',perplexity:'perplexity.ai',claude:'claude.ai',gemini:'gemini.google.com',
copilot:'copilot.microsoft.com',grok:'grok.com',tiktok:'tiktok.com',youtube:'youtube.com',instagram:'instagram.com',
reddit:'reddit.com',medium:'medium.com',github:'github.com',x:'x.com',twitter:'x.com'};
function hit(h){h=(h||'').toLowerCase().replace(/^www\\./,'');if(!h)return null;
for(var d in D){if(h===d||h.slice(-d.length-1)==='.'+d)return D[d];}
if(/(^|\\.)google\\.[a-z.]+$/.test(h))return['search','seo_google'];return null;}
function fromUtm(u){u=(u||'').toLowerCase().replace(/^www\\./,'');if(!u)return null;
if(u==='ai_agent_llmstxt'||u==='llmstxt'||u==='llms.txt')return['ai','ai_llmstxt'];
return hit(u)||(U[u.split('.')[0]]?hit(U[u.split('.')[0]]):null);}
var q=new URLSearchParams(location.search);
var utm=q.get('utm_source')||q.get('ref')||q.get('source')||'';
var rh='';try{rh=new URL(document.referrer).hostname;}catch(e){}
var r=fromUtm(utm)||hit(rh)||(utm?['site_web','ref_'+utm.toLowerCase().replace(/[^a-z0-9_-]/g,'').slice(0,20)]:null);
try{if(r)sessionStorage.setItem(KEY,JSON.stringify(r));else{var s=sessionStorage.getItem(KEY);if(s)r=JSON.parse(s);}}catch(e){}
if(!r)return;
var ct=r[0],ch=r[1];
function tag(a){try{var u=new URL(a.href);if(u.hostname!=='apps.apple.com'||u.pathname.indexOf(APP)<0)return;
u.searchParams.set('pt',PT);u.searchParams.set('ct',ct);a.href=u.toString();}catch(e){}}
function tagAll(){var l=document.querySelectorAll('a[href*="apps.apple.com"]');for(var i=0;i<l.length;i++)tag(l[i]);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',tagAll);else tagAll();
document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href*="apps.apple.com"]');if(a)tag(a);},true);
var n=0;(function ph(){if(window.posthog&&window.posthog.register)window.posthog.register({referrer_channel:ch,appstore_ct:ct});else if(++n<40)setTimeout(ph,500);})();
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
