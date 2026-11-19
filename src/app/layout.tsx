import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "./_components/ClarityAnalytics";
import PostHogProvider from "./_components/PostHogProvider";
import ScrollFX from "./_components/ScrollFX";
import SiteFooter from "./_components/SiteFooter";
import SiteNav from "./_components/SiteNav";
import { GLOBAL_SCHEMA_GRAPH } from "./_lib/schema";
import { SITE_URL, siteUrl } from "./site";

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
    default: "MemePouch — Video to GIF & iMessage Stickers Without Auto-Cutout",
    template: "%s · MemePouch",
  },
  description:
    "Turn any video or TikTok clip into a smooth 50fps looping GIF with no watermark, keep full-frame iMessage stickers without Apple's auto-cutout, and save third-party stickers friends send you on iPhone (iOS 16+).",
  applicationName: "MemePouch",
  keywords: [
    "iMessage stickers without auto-cutout",
    "video to gif iPhone no watermark",
    "save TikTok stickers to iMessage",
    "save iMessage stickers someone sent",
    "save third-party stickers iMessage",
    "custom iMessage stickers",
    "iMessage sticker app no cutout",
    "gif to sticker iMessage",
    "make iMessage stickers from photos",
    "MemePouch",
  ],
  authors: [{ name: "MemePouch", url: SITE_URL }],
  creator: "MemePouch",
  publisher: "MemePouch",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MemePouch",
    title: "MemePouch — Video to GIF & iMessage Stickers Without Auto-Cutout",
    description:
      "Turn videos into 50fps looping GIFs with no watermark, keep full-frame iMessage stickers without auto-cutout, and save third-party stickers friends send you.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePouch — Video to GIF & iMessage Stickers Without Auto-Cutout",
    description:
      "Turn videos into 50fps looping GIFs with no watermark, keep the whole meme frame intact, and save stickers friends send you in iMessage.",
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
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="text/markdown"
          href={siteUrl("/llms.txt")}
          title="MemePouch LLM Summary"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href={siteUrl("/llms-full.txt")}
          title="MemePouch Full Technical Documentation for LLMs"
        />
      </head>
      <body className="min-h-full flex flex-col grain">
        {/* PostHog 全功能 Provider（会话录屏打满、性能监控打满、异常监控打满、全站漏斗与来源归因） */}
        <PostHogProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GLOBAL_SCHEMA_GRAPH),
          }}
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
