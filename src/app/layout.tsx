import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "./_components/ClarityAnalytics";
import SiteFooter from "./_components/SiteFooter";
import SiteNav from "./_components/SiteNav";
import { APP_STORE_URL, SITE_URL } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MemePouch — iMessage Stickers Without Auto-Cutout",
    template: "%s · MemePouch",
  },
  description:
    "Apple's built-in sticker tool auto-removes backgrounds and butchers memes. MemePouch keeps the full photo, GIF, or short video as-is — no auto-cutout — and lets you save the third-party stickers friends send you. Free to try, $2.99 one-time unlock.",
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
      description: "Free with optional one-time unlock for unlimited stickers",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_LD) }}
        />
        <ClarityAnalytics />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
