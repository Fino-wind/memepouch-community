import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to make WhatsApp stickers on iPhone from your own memes (2026)",
  description:
    "Turn photos, memes, and GIFs into WhatsApp sticker packs on iPhone — no watermark, no cutout, animated GIFs supported. Import into MemePouch once and the same stickers work in both iMessage and WhatsApp. iOS 16+.",
  alternates: { canonical: "/blog/make-whatsapp-stickers-iphone" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to make WhatsApp stickers on iPhone from your own memes",
    description:
      "Turn photos, memes, and GIFs into WhatsApp sticker packs with MemePouch — pick 3–30 stickers, tap Add, confirm in WhatsApp. GIFs become animated stickers.",
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/make-whatsapp-stickers-iphone"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Make a WhatsApp sticker pack from your own images on iPhone",
    description:
      "Import photos, memes, or GIFs into MemePouch, select 3–30 of them, and export them to WhatsApp as a sticker pack.",
    totalTime: "PT2M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "WhatsApp" },
      { "@type": "HowToTool", name: "MemePouch (free)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Import your memes into MemePouch",
        text: "Open MemePouch and import from Photos (up to 30 at once), paste from clipboard, or share from any app. Photos, GIFs, and short videos all work — videos become GIF stickers through the trim view.",
      },
      {
        "@type": "HowToStep",
        name: "Tap the WhatsApp button",
        text: "In My Stickers, tap the WhatsApp button next to the library title. It appears once you have at least 3 stickers.",
      },
      {
        "@type": "HowToStep",
        name: "Pick 3–30 stickers",
        text: "Select the stickers you want in the pack — or tap Select All. WhatsApp requires 3 to 30 stickers per pack, and static and animated stickers go in separate packs.",
      },
      {
        "@type": "HowToStep",
        name: "Add the pack in WhatsApp",
        text: "Tap Add to WhatsApp. MemePouch converts everything to WhatsApp's 512×512 WebP format and opens WhatsApp with an add-pack confirmation. Tap Save and the pack is in your WhatsApp sticker tray.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does WhatsApp need at least 3 stickers per pack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That's WhatsApp's own rule for third-party sticker packs — every pack must contain between 3 and 30 stickers. MemePouch shows a live count while you pick so you always know where you stand.",
        },
      },
      {
        "@type": "Question",
        name: "Do animated GIF stickers work in WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. GIF stickers export as animated WhatsApp stickers (animated WebP). WhatsApp requires static and animated stickers to live in separate packs, so MemePouch keeps them on separate tabs in the picker.",
        },
      },
      {
        "@type": "Question",
        name: "Does the WhatsApp export cost anything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — exporting to WhatsApp is completely free in MemePouch, with no unlock required. The one-time unlock only covers the sticker-library size.",
        },
      },
      {
        "@type": "Question",
        name: "Will my stickers get cropped or lose quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No cropping — MemePouch aspect-fits the full image onto WhatsApp's required 512×512 canvas, so text overlays and backgrounds survive. Files are compressed only as much as WhatsApp's size limits require (100 KB static, 500 KB animated).",
        },
      },
      {
        "@type": "Question",
        name: "I have both WhatsApp and WhatsApp Business installed — which one opens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS decides which of the two apps handles the sticker-pack handoff (usually the most recently installed one) — apps can't choose. Both fully support third-party sticker packs, so the pack lands either way.",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          How to make WhatsApp stickers on iPhone from your own memes
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated 2026-07-11 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          WhatsApp has no built-in way to turn your own photos and GIFs into stickers on
          iPhone — the sticker tray only offers packs other people published. The usual
          workarounds are sketchy web converters or sticker apps that stamp a watermark on
          your memes. Here&apos;s the clean way: <strong>import your memes into MemePouch
          once, then export any selection of them to WhatsApp as a proper sticker
          pack</strong> — full frame, no watermark, animated GIFs included.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          Bonus: the same library doubles as your iMessage sticker collection, so one import
          covers both apps.
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Get it</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">MemePouch on the App Store</h2>
          <p className="text-slate-600 mb-4">iPhone only · iOS 16+ · WhatsApp export is free</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Make a WhatsApp sticker pack, step by step
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">1. Import your memes</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Get your material into MemePouch any way you like:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li><strong>Photos picker</strong> — multi-select up to 30 images or GIFs at once</li>
          <li><strong>Paste</strong> — copy a meme anywhere, one-tap paste in MemePouch</li>
          <li><strong>Share Sheet</strong> — from Safari, WhatsApp itself, or any app</li>
          <li><strong>Video → GIF</strong> — trim any clip (up to 10 s) into a looping GIF sticker</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          Everything imports <em>full frame</em> — no forced auto-cutout, so text overlays and
          backgrounds stay intact. (Details in{" "}
          <Link href="/blog/import-stickers-five-ways" className="text-blue-600 underline">
            the five import paths guide
          </Link>
          .)
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">2. Tap the WhatsApp button</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          In <strong>My Stickers</strong>, tap the <strong>WhatsApp</strong> button next to the
          library title (it appears once you have 3+ stickers). A picker opens showing your
          whole library.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">3. Pick 3–30 stickers</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Tap the stickers you want in this pack, or hit <strong>Select All</strong>. Two
          WhatsApp rules the picker enforces for you:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <strong>3 to 30 stickers per pack</strong> — WhatsApp&apos;s own requirement; the
            button shows a live count until you&apos;re in range
          </li>
          <li>
            <strong>Static and animated packs are separate</strong> — GIF stickers get their own
            tab and export as animated WhatsApp stickers
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">4. Add the pack in WhatsApp</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Tap <strong>Add to WhatsApp</strong>. MemePouch converts every sticker to
          WhatsApp&apos;s required format (512×512 WebP, sized within WhatsApp&apos;s limits) with
          a progress count, then WhatsApp opens with an <strong>add-pack confirmation</strong>.
          Tap Save — the pack is now in your WhatsApp sticker tray, in every chat, on the
          sticker tab.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          One meme library, two messaging apps
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          The point of doing it this way instead of a one-shot converter: your memes live in
          one organized library. Import once, and the same sticker is a tap away in the
          iMessage drawer <em>and</em> exportable to WhatsApp whenever you want. Re-exports of
          stickers you&apos;ve already converted are instant. When you collect new memes, pull
          up the picker again and ship an updated pack.
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Ready?</div>
          <p className="text-slate-600 mb-4">
            Your best memes deserve to be one tap away in every chat — WhatsApp export is free.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Related guides</h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/save-tiktok-gifs-to-imessage" className="text-blue-600 underline">
              How to save TikTok GIFs and stickers to iMessage
            </Link>
          </li>
          <li>
            <Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 underline">
              How to make GIF stickers for iMessage from any video or Live Photo
            </Link>
          </li>
          <li>
            <Link href="/blog/import-stickers-five-ways" className="text-blue-600 underline">
              5 ways to add a sticker to MemePouch
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
