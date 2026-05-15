import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    default: "MemePouch - Custom iMessage Stickers from Photos & GIFs",
    template: "%s · MemePouch",
  },
  description:
    "MemePouch is a free-to-try iPhone app that turns photos, GIFs, and short videos into custom stickers for iMessage. Import from Photos, Share Sheet, clipboard, or iMessage drag and drop.",
  applicationName: "MemePouch",
  keywords: [
    "custom stickers",
    "custom iMessage stickers",
    "iMessage stickers",
    "gif to sticker",
    "make iMessage stickers",
    "photo to sticker",
    "video to GIF sticker",
    "iPhone sticker app",
    "MemePouch",
    "custom sticker pack iOS",
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
    title: "MemePouch - Custom iMessage Stickers from Photos & GIFs",
    description:
      "Free iPhone app to turn photos, GIFs, and short videos into reusable custom stickers for iMessage.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePouch - Custom Stickers for iMessage",
    description:
      "Free iPhone app to turn photos, GIFs, and short videos into reusable custom iMessage stickers.",
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
      "Turn photos, GIFs, and short videos into iMessage stickers. Import from Photos, share sheet, clipboard, or by dragging a sticker from any iMessage chat.",
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
      "Import photos and GIFs as iMessage stickers",
      "Trim short videos into animated GIF stickers",
      "Drag stickers from any iMessage chat into your library",
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
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
