import type { Metadata } from "next";
import { SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to turn photos into iMessage stickers (2026 guide)",
  description:
    "A quick tutorial on bringing your favorite photos and videos directly into iMessage conversations using MemePouch.",
  alternates: { canonical: "/blog/turn-photos-into-imessage-stickers" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to turn photos into iMessage stickers (2026 guide)",
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/turn-photos-into-imessage-stickers"),
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <article>
        <h1 className="text-4xl font-bold mb-6">How to turn photos into iMessage stickers in 2026</h1>
        <p className="text-lg text-slate-600 mb-10">
          MemePouch is a free iPhone app (iOS 16+) that turns your photos, GIFs, and short videos into reusable iMessage stickers, and lets you import stickers other people send you in iMessage by dragging them into your library.
        </p>

        <div className="max-w-none">
          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Step 1: Download the App</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Get MemePouch from the App Store. Launch it to grant Photos access.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Step 2: Import</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            You can either paste from clipboard, select a photo/video, or use the iOS share sheet to send an image from Safari directly into your pouch. 
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Step 3: Open iMessage</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            In your chat, tap the Apps icon and find MemePouch. Tap any sticker to insert it in your message field, or drag it up to peel and place it directly on a chat bubble!
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Common Pitfalls</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Lots of people ask how to save stickers others send them. Apple doesn&apos;t provide a &quot;Save&quot; button for third-party stickers. Instead, just long press the sticker they sent you, and with another finger, open MemePouch in the app drawer and drag it right into the grid!
          </p>
        </div>
      </article>
    </div>
  );
}
