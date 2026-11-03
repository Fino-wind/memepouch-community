import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to save transparent stickers in iMessage (without the white background box)",
  description:
    "Keep transparent PNG stickers clean in iMessage without Apple's forced white background box or bad auto-cutout edges. Works on iPhone and iPad, iOS 17 & iOS 18.",
  alternates: { canonical: "/blog/how-to-save-transparent-stickers-in-imessage" },
};

export default function TransparentStickersPage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to save transparent stickers in iMessage without a white background box",
    description:
      "A complete guide to keeping transparent PNG stickers clean in iMessage on iOS 17 and iOS 18 without Apple's forced white canvas fill or bad auto-cutout borders.",
    datePublished: "2026-11-03",
    dateModified: "2026-11-03",
    author: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/how-to-save-transparent-stickers-in-imessage"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Save transparent stickers into iMessage with true alpha channels",
    description:
      "Import transparent PNG memes or Discord emojis into MemePouch so they send with clean edges and zero background boxes in iMessage.",
    totalTime: "PT1M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 17 or iOS 18" },
      { "@type": "HowToTool", name: "Transparent PNG or WebP image" },
      { "@type": "HowToTool", name: "MemePouch (free)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Save the transparent PNG to Photos",
        text: "Download or save your transparent image (from Discord, Safari, or Twitter) to your camera roll. Ensure it has a real alpha channel.",
      },
      {
        "@type": "HowToStep",
        name: "Share into MemePouch",
        text: "Open the image in Photos, tap Share, and select MemePouch. Alternatively, open MemePouch and tap Import from Photos.",
      },
      {
        "@type": "HowToStep",
        name: "Preserve full transparency",
        text: "MemePouch preserves the original 32-bit RGBA channels without triggering Apple's destructive auto-cutout. Tap Add to Library.",
      },
      {
        "@type": "HowToStep",
        name: "Send in iMessage",
        text: "Open the MemePouch extension in any iMessage chat. Tap your sticker to send it. It floats cleanly on light and dark mode bubbles without an ugly white border.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does Apple put a white background box behind my transparent sticker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you use Apple's native 'Add Sticker' in Photos, iOS runs the image through its VisionKit subject-lifting model. If the image is already a transparent PNG, the system fails to detect a distinct subject and flattens the transparent canvas onto a solid white background box. In Dark Mode, this turns transparent memes into glaring white rectangles.",
        },
      },
      {
        "@type": "Question",
        name: "How do I stop Apple from auto-cutting out transparent memes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no system toggle in iOS settings to disable auto-cutout. To bypass it, you must use a dedicated iMessage sticker extension like MemePouch that bypasses VisionKit entirely and reads the raw RGBA pixel buffer directly.",
        },
      },
      {
        "@type": "Question",
        name: "What if Apple's sticker cutout also cuts off my meme text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When using Apple's Add Sticker, VisionKit frequently cuts off meme text and captions while attempting to remove the background (sticker cutoff). MemePouch preserves the full frame with all text and reaction elements intact, while maintaining 100% transparent alpha channels when you want them.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work for animated GIF stickers with transparent backgrounds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MemePouch preserves transparency on both static PNG/WebP files and transparent looping GIFs, transmitting animated stickers through its high-bandwidth 10MB attachment route for uncompressed visual clarity.",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />

      <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
        <Link href="/blog" className="hover:text-slate-900 transition">
          Guides
        </Link>
        <span>/</span>
        <span className="text-slate-900">Transparent Stickers in iMessage</span>
      </nav>

      <article>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
          How to save transparent stickers in iMessage (without the white background box)
        </h1>
        <p className="text-sm text-slate-500 mb-8">Updated November 2026 · Tested on iOS 17 & iOS 18</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          You spent time clipping an image or downloaded a transparent PNG meme from Discord, but
          the moment you add it to iMessage via Apple&apos;s native sticker menu, iOS slaps an opaque white box behind it:
          <strong> it gets plastered on an awkward white rectangular box</strong>, or Apple&apos;s
          auto-cutout chops off caption text, hands, and reaction borders. In Dark Mode, it looks
          even worse — glowing like a harsh neon light around your sticker.
        </p>

        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          The problem isn&apos;t your PNG file. The problem is Apple&apos;s forced subject-lifting
          pipeline. Here is why it happens and how to save clean, true-transparent stickers in
          iMessage in under a minute.
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">
            The Fix
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            MemePouch on the App Store
          </h2>
          <p className="text-slate-600 mb-4">
            Zero auto-cutout · True RGBA transparency · iMessage keyboard extension included
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch free →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why Apple ruins transparent stickers on iOS 17 & 18
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          When you long-press a photo in Apple Photos or tap &quot;Add Sticker&quot; in the native
          iMessage tray, iOS runs your image through <strong>VisionKit machine learning</strong>:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <strong>It assumes every photo is a portrait:</strong> It actively looks for dogs, cats,
            or people. When given a transparent graphic or a meme with text, the model gets confused
            and crops out text captions because it doesn&apos;t recognize text as a &quot;subject&quot;.
          </li>
          <li>
            <strong>Forced solid canvas fill:</strong> If an image already has an alpha channel (transparent
            background), Apple&apos;s sticker compiler flattens it onto a 24-bit RGB canvas with an opaque
            white fill.
          </li>
          <li>
            <strong>There is no disable switch:</strong> Apple provides no setting to say &quot;keep
            this PNG exactly as it is&quot;.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          How to keep true transparency in iMessage
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">
          Step 1: Save your transparent PNG
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Save your sticker from Safari, Discord, or Twitter into your Photos library. As long as the
          source file has a real alpha channel (PNG or transparent WebP), you are ready.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">
          Step 2: Send it to MemePouch
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          In Photos, tap <strong>Share → MemePouch</strong>. Or simply open MemePouch and select your
          image. Unlike Apple&apos;s Photos app, MemePouch does not run VisionKit cutout filters; it
          respects your exact pixels and preserves the 32-bit RGBA channel.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">
          Step 3: Tap to send from the iMessage drawer
        </h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          In iMessage, tap the &quot;+&quot; icon next to the text box, select MemePouch, and tap your
          sticker. It lands directly on the chat thread with clean, crisp, transparent edges.
          Whether the recipient is on Light Mode, Dark Mode, or viewing on a Mac, there is no white
          box framing your meme.
        </p>

        <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">💡 Pro Tip for Discord Emotes</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Have a custom emoji server in Discord? Long-press any emote, tap &quot;Save Image&quot;, and
            drop it into MemePouch. You can build your entire Discord reaction library straight inside
            iMessage.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Will transparent stickers work if my friend doesn&apos;t have MemePouch?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Yes. When you send a sticker from MemePouch, it is sent as a native sticker attachment
              via the Apple Messages framework. The recipient sees the full transparent sticker regardless
              of whether they have any apps installed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              What if Apple&apos;s sticker cutout also cuts off my meme text?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              When using Apple&apos;s Add Sticker, VisionKit frequently cuts off meme text and captions while attempting to
              remove the background. MemePouch preserves the full frame with all text and reaction elements intact,
              while maintaining 100% transparent alpha channels when you want them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Does this work on iOS 18.1 and iOS 18.2?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Yes. MemePouch is fully verified against iOS 18.0 through iOS 18.2 on iPhone 15, 16, and
              earlier models down to iOS 16.
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-cream border border-slate-200 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Keep your memes clean</h3>
          <p className="text-slate-600 mb-6">
            Stop letting iOS ruin your stickers with unwanted white borders.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Get MemePouch on the App Store →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Related guides</h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/imessage-stickers-without-auto-cutout" className="text-blue-600 underline">
              How to stop Apple cutting off text and make iMessage stickers without auto-cutout
            </Link>
          </li>
          <li>
            <Link href="/blog/save-tiktok-gifs-to-imessage" className="text-blue-600 underline">
              How to save TikTok GIFs to iMessage
            </Link>
          </li>
          <li>
            <Link href="/blog/import-stickers-five-ways" className="text-blue-600 underline">
              5 ways to import stickers into MemePouch
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
