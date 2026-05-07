import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MemePouch FAQ - How to make custom stickers for iMessage",
  description:
    "Frequently asked questions about MemePouch: how to import stickers, how to save stickers others send you, supported formats, and pricing.",
  alternates: { canonical: "/faq" },
};

const QA = [
  {
    q: "How do I make custom stickers for iMessage?",
    a: "Open MemePouch, tap Import from Photos, pick a photo, GIF, or short video, and it becomes a reusable custom sticker in your iMessage sticker drawer.",
  },
  {
    q: "How do I save a sticker someone sent me in iMessage?",
    a: "iOS does not show a Save or Share menu for third-party stickers, so the way to do it is: long-press the sticker in the chat and keep your finger held down. With another finger, tap the MemePouch icon in the iMessage app drawer to open it. Then drag the sticker into the MemePouch grid and release. The sticker is added to your library.",
  },
  {
    q: "Can I make an animated sticker from a video?",
    a: "Yes. Tap Turn a video into a GIF, pick a clip, trim up to 3 seconds, and MemePouch saves it as an animated GIF sticker (under the 500 KB iMessage limit).",
  },
  {
    q: "Does MemePouch work on iPad?",
    a: "MemePouch is iPhone-first. The iMessage extension itself runs on iPad, but the main app UI is designed for portrait iPhone.",
  },
  {
    q: "Is MemePouch free?",
    a: "Yes, with a 10-sticker free tier. A one-time in-app purchase unlocks unlimited stickers permanently — no subscription.",
  },
  {
    q: "Does MemePouch upload my photos anywhere?",
    a: "No. Everything stays on your device in an App Group container shared between the main app and the iMessage extension. There are no servers and no accounts.",
  },
  {
    q: "What image formats does MemePouch support?",
    a: "PNG, JPEG, and GIF. HEIC photos from your iPhone are auto-converted on import.",
  },
  {
    q: "How big can a sticker file be?",
    a: "Apple's iMessage limit is 500 KB per sticker. MemePouch auto-compresses static images to fit; for animated GIFs, the original file must already be under 500 KB to keep the animation.",
  },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <h1 className="text-4xl font-bold mb-12">Frequently asked questions</h1>
      <div className="space-y-10">
        {QA.map(({ q, a }) => (
          <section key={q}>
            <h2 className="text-xl font-semibold mb-2">{q}</h2>
            <p className="text-slate-600 leading-relaxed">{a}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
