import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to turn photos into iMessage stickers (2026 guide)",
  description:
    "A complete walkthrough of making custom iMessage stickers from your photos, GIFs, and short videos with MemePouch — plus how to save stickers your friends send you in any chat.",
  alternates: { canonical: "/blog/turn-photos-into-imessage-stickers" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to turn photos into iMessage stickers in 2026",
    description:
      "Step-by-step guide to making custom iMessage stickers from photos, GIFs, and short videos with MemePouch, including how to drag stickers other people send you into your own library.",
    datePublished: "2026-05-06",
    dateModified: "2026-05-07",
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
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          How to turn photos into iMessage stickers in 2026
        </h1>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          MemePouch is a free iPhone app (iOS 16+) that turns your photos, GIFs, and short videos
          into reusable iMessage stickers, and lets you save stickers other people send you in
          iMessage by dragging them into your library.
        </p>

        <p className="text-slate-700 leading-relaxed mb-12">
          This guide covers everything you need to start using your own face, your dog, a frame
          from your favorite movie, or that animated reaction you cannot stop laughing at as a
          custom iMessage sticker — and to grab the best ones your friends send you so you never
          have to ask &quot;where did you get that?&quot; again.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why custom iMessage stickers?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Apple&apos;s built-in sticker drawer in iOS 17 lets you make stickers from photos by
          tapping subjects in your library, but it stops there. It cannot trim a video into an
          animated GIF sticker, it cannot pull a sticker out of a chat someone sent you, and it
          cannot keep your sticker library separate from your real camera roll. A dedicated
          sticker maker app fills those gaps. MemePouch is built specifically around the three
          rules iMessage stickers actually have to follow — 500 KB per sticker, PNG/JPEG/GIF
          only, and the iMessage app drawer — so anything you import is guaranteed to work the
          moment you open Messages.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Step 1 — Install MemePouch
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Get MemePouch from the App Store. The first time you open it, iOS will ask for read
          access to Photos so you can pick what to import. There are no accounts and no sign-up.
          Your sticker library stays on your iPhone, in a sandboxed App Group container shared
          between the main app and the iMessage extension — so the stickers you create on the
          home screen show up immediately when you open the iMessage app drawer.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Step 2 — Import your first sticker
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          MemePouch gives you four ways to bring images into your library, depending on where
          the source lives:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>From Photos:</strong> tap &quot;Import from Photos&quot; on the home screen,
            pick up to 30 images or GIFs at once, and they&apos;re added to your library. HEIC
            photos taken on your iPhone are decoded and re-encoded into a sticker-compatible
            format (PNG when possible, JPEG if the PNG would exceed iMessage&apos;s 500 KB
            cap).
          </li>
          <li>
            <strong>From a video:</strong> tap &quot;Turn a video into a GIF&quot;, pick a clip
            from your library, trim up to 5 seconds, and MemePouch saves it as an animated GIF
            sticker. The encoder steps through frame rates (12 fps down to 4 fps) and
            dimensions (480 px down to 160 px on the longest side) until the result fits the
            500 KB iMessage limit — so longer or busier clips end up at lower fidelity.
          </li>
          <li>
            <strong>From the clipboard:</strong> copy an image in Safari, Twitter/X, or any
            other app, then come back to MemePouch and tap &quot;Paste from Clipboard&quot;.
          </li>
          <li>
            <strong>From the share sheet:</strong> in any other app showing an image, tap the
            share button and choose MemePouch. The image is imported in the background and
            ready next time you open Messages.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Step 3 — Send your stickers in iMessage
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Open any chat in Messages, tap the apps icon to the left of the text field, and select
          MemePouch. Your library appears as a grid. Tap a sticker to drop it in the message
          field, or long-press and drag it onto a specific chat bubble to peel-and-place it as a
          reaction. The iMessage extension and the main app share the same on-device library
          via an App Group, and the extension automatically reloads when the manifest changes,
          so anything you import shows up the next time you open the drawer.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          How to save stickers other people send you
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          This is the part most people don&apos;t realize is even possible. iOS does not show a
          Save or Share menu when you long-press a third-party sticker someone sent you — Apple
          only built that flow for stickers from its own system drawer. Drag-and-drop is the
          only path the system actually exposes for third-party sticker apps to receive an
          incoming sticker. Here is the exact gesture:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            In the chat, long-press the sticker your friend sent. Keep your finger held down —
            do not let go yet.
          </li>
          <li>
            With another finger, tap the apps icon at the bottom of the screen and open
            MemePouch from the iMessage app drawer.
          </li>
          <li>
            Drag the sticker onto the MemePouch grid and release. A confirmation toast appears
            and the sticker is now in your own library, ready to send back to anyone.
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          If your finger slips and the long-press cancels, you&apos;ll just see the regular
          context menu (Reply / Attach Sticker / Copy / More) — that&apos;s iMessage&apos;s
          standard menu and there is no third-party hook inside it. The two-finger drag is the
          only reliable way.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Format and size limits to know
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Apple&apos;s iMessage sticker spec hasn&apos;t changed in years:{" "}
          <strong>PNG, JPEG, or GIF, with a hard 500 KB cap per sticker</strong>. MemePouch
          handles this transparently — static images are auto-compressed by progressively
          reducing dimensions and JPEG quality until they fit, and animated GIFs from videos are
          encoded with adaptive frame rates (down to 4 fps if needed) and dimensions (down to
          160 px on the longest side). Up to 3 seconds of video usually gives you the best
          quality; 3 to 5 seconds is allowed but may show visible compression on busy footage.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Keep your camera roll clean
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          One of the small reasons a dedicated sticker app exists at all is that the photos you
          turn into stickers usually aren&apos;t photos you want polluting your real camera
          roll. MemePouch has an opt-in <strong>Auto-Delete</strong> setting: after a successful
          import, iOS prompts you (with its standard confirmation dialog) to move the original
          to your Recently Deleted album. The result is a clean Photos library and a separate,
          focused sticker collection that doesn&apos;t get mixed up with vacation pictures.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          Because the entire library is stored locally on your iPhone, nothing leaves your
          device. There are no servers, no analytics, and no accounts.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Wrapping up</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Download MemePouch
          </a>{" "}
          to make your first sticker. If you have a specific question, the{" "}
          <Link href="/faq" className="text-blue-600 hover:underline font-medium">
            FAQ
          </Link>{" "}
          covers the most common ones, and the{" "}
          <Link href="/compare" className="text-blue-600 hover:underline font-medium">
            comparison page
          </Link>{" "}
          explains how MemePouch differs from Sticker Drop, WA Sticker Maker, and the iOS 17
          built-in stickers drawer.
        </p>
      </article>
    </div>
  );
}
