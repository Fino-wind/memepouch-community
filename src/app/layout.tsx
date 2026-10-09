import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "./_components/ClarityAnalytics";
import ScrollFX from "./_components/ScrollFX";
import SiteFooter from "./_components/SiteFooter";
import SiteNav from "./_components/SiteNav";
import { APP_STORE_URL, SITE_URL } from "./site";

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
        {/* Dynamic campaign attribution for App Store links based on AI/search referrers or UTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var ref=(document.referrer||'').toLowerCase();var params=new URLSearchParams(window.location.search);var utm=(params.get('utm_source')||'').toLowerCase();var ct=null;if(ref.indexOf('chatgpt.com')!==-1||ref.indexOf('chat.openai.com')!==-1||utm.indexOf('chatgpt')!==-1){ct='ai_chatgpt';}else if(ref.indexOf('perplexity.ai')!==-1||utm.indexOf('perplexity')!==-1){ct='ai_perplexity';}else if(ref.indexOf('claude.ai')!==-1||utm.indexOf('claude')!==-1){ct='ai_claude';}else if(ref.indexOf('gemini.google.com')!==-1||utm.indexOf('gemini')!==-1){ct='ai_gemini';}else if(ref.indexOf('copilot.microsoft.com')!==-1||utm.indexOf('copilot')!==-1){ct='ai_copilot';}else if(ref.indexOf('google.')!==-1||utm.indexOf('google')!==-1){ct='seo_google';}else if(ref.indexOf('bing.')!==-1||utm.indexOf('bing')!==-1){ct='seo_bing';}else if(ref.indexOf('dev.to')!==-1){ct='ref_devto';}else if(ref.indexOf('medium.com')!==-1){ct='ref_medium';}else if(ref.indexOf('reddit.com')!==-1){ct='ref_reddit';}if(ct){var applyCt=function(){var links=document.querySelectorAll('a[href*="apps.apple.com"]');for(var i=0;i<links.length;i++){try{var u=new URL(links[i].href);u.searchParams.set('ct',ct);links[i].href=u.toString();}catch(err){}}};if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',applyCt);}else{applyCt();}document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href*="apps.apple.com"]');if(a){try{var u=new URL(a.href);u.searchParams.set('ct',ct);a.href=u.toString();}catch(err){}}},true);var checkPh=function(){if(window.posthog&&window.posthog.register){window.posthog.register({referrer_channel:ct});}else{setTimeout(checkPh,500);}};checkPh();}}catch(e){}})();`,
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
