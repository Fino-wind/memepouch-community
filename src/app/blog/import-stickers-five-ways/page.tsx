import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "5 ways to add a sticker to MemePouch (PhotosPicker, paste, Share Sheet, drag, iMessage)",
  description:
    "Every way to get an image, GIF, or video into your MemePouch sticker library on iOS — from Photos multi-select, clipboard paste, the iOS Share Sheet from Safari or any app, drag-and-drop into the main app, and drag-import from iMessage chats.",
  alternates: { canonical: "/blog/import-stickers-five-ways" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 ways to add a sticker to MemePouch",
    description:
      "Photos multi-select, clipboard paste, Share Sheet from any app (including video handoff to the trim view), main-app drag-and-drop, and iMessage extension drag-import.",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/import-stickers-five-ways"),
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the fastest way to add a sticker to MemePouch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste from clipboard. Copy an image from any app (Safari long-press, Photos action sheet, a screenshot's share preview, any chat) and tap 'Paste from Clipboard' on MemePouch's home screen. It's a single tap once the image is on your clipboard.",
        },
      },
      {
        "@type": "Question",
        name: "Can I import multiple photos at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The PhotosPicker on the home screen supports multi-select up to 30 images or GIFs, preserves your selection order, and runs each one through the same dedup + auto-compress pipeline.",
        },
      },
      {
        "@type": "Question",
        name: "Can I share an image from Safari or Twitter directly to MemePouch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MemePouch installs an iOS Share Sheet extension. Hit Share in Safari, Twitter, Instagram, Mail, Files, WhatsApp, or any app with the standard Share button, then tap MemePouch. Static images import straight to your library. If you share a video, MemePouch hands it off to the main app and opens the trim + Smart loop view so you can turn it into a GIF sticker.",
        },
      },
      {
        "@type": "Question",
        name: "Can I drag and drop images into MemePouch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — in two different places. (1) Drop into the main app's home screen grid: drag an image from Files, Photos, or Safari onto the MemePouch window (works in Stage Manager on iPad, multi-touch on iPhone), and it imports. (2) Drop into the iMessage extension drawer: when a friend sends you a sticker, long-press it in the chat, keep your finger down, and with another finger tap MemePouch in the app drawer; then drag the sticker into the MemePouch grid.",
        },
      },
      {
        "@type": "Question",
        name: "Can MemePouch import directly from the iMessage sticker drawer (Apple's built-in stickers)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — iOS doesn't expose the system sticker drawer as a drop source. Apple's built-in stickers (Photos cutouts, Memoji, Animoji, GIPHY embeds) live inside the sticker daemon and don't surface through any public API. MemePouch can receive drag-drops from chat bubbles (the sticker your friend sent) and from any standard image-share surface, but it can't reach into Apple's private drawer.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 prose prose-slate prose-lg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <h1 className="text-4xl font-bold mb-3 text-slate-900 not-prose">
        5 ways to add a sticker to MemePouch
      </h1>
      <p className="text-sm text-slate-500 mb-8 not-prose">Last updated 2026-05-20 · iOS 16+</p>

      <p className="text-lg text-slate-700 leading-relaxed">
        Most sticker apps have one or two import paths. MemePouch ships <strong>five</strong>,
        because the meme you want to save lives in a different place every time —
        sometimes Photos, sometimes a Safari long-press, sometimes a sticker a friend just sent
        you in iMessage. This post walks through all five with concrete steps and what gets
        deduplicated.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        1. Photos picker — multi-select up to 30 at a time
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Tap <strong>Import from Photos</strong> on the home screen. The iOS PhotosPicker opens
        with multi-select on; pick up to 30 images or GIFs in any order. The selection order is
        preserved when they land in your library (so your &quot;reaction triplet&quot; stays in
        sequence). Each image goes through SHA-256 dedup — if a byte-identical copy already
        exists, the duplicate is silently skipped instead of cluttering your grid.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Two sibling buttons next to it handle video and Live Photo sources:{" "}
        <strong>Turn a video into a GIF</strong> and <strong>Turn a Live Photo into a GIF</strong>{" "}
        — both lead into the trim + Smart loop pipeline.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        2. Paste from Clipboard — one tap from anywhere
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Copy an image from any source: long-press in Safari, the share-preview &quot;Copy
        Photo&quot; in Photos, a screenshot&apos;s &quot;Copy&quot; quick action, &quot;Copy
        Image&quot; from a Discord or Twitter post, the share sheet&apos;s &quot;Copy&quot;
        action. Then tap <strong>Paste from Clipboard</strong> on MemePouch&apos;s home screen.
        The card validates that the clipboard actually has image content; if not, a friendly
        empty-state appears instead of a silent failure.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Why this matters: it&apos;s the fastest path. No picker, no permissions prompt for an
        entire Photos library, no app switch. Just two taps total once the image is copied.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        3. iOS Share Sheet — from Safari, Twitter, WhatsApp, any app
      </h2>
      <p className="text-slate-700 leading-relaxed">
        MemePouch installs a Share Sheet extension. In any app with the standard iOS Share
        button — Safari, Twitter / X, Instagram, Mail, Files, WhatsApp, Photos, even other
        sticker apps — tap Share → MemePouch. The extension opens with a tiny progress modal
        (&quot;Processing 3/12…&quot;) so you can watch a batch land, and shows a green
        checkmark on success.
      </p>
      <p className="text-slate-700 leading-relaxed">
        <strong>Video handoff (somewhat unusual):</strong> if you share a video instead of an
        image, MemePouch&apos;s share extension can&apos;t open the main app directly (Apple
        deliberately blocks share extensions from launching their host app). Instead, the
        extension writes the video into the App Group container as a handoff file and uses a
        responder-chain <code className="text-sm bg-slate-100 px-1 rounded">application.open</code>{" "}
        URL-scheme trick to nudge MemePouch into foreground — landing you straight in the trim
        view with the video ready. Most apps just throw a &quot;not supported&quot; error
        here.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        4. Drag and drop into the main app
      </h2>
      <p className="text-slate-700 leading-relaxed">
        On iPad with Stage Manager or Split View, or on iPhone with the multi-touch drag
        gesture, drag any image from Files, Safari, Photos, or another app onto the MemePouch
        home screen. A dashed-blue highlight appears confirming the drop target; release to
        import.
      </p>
      <p className="text-slate-700 leading-relaxed">
        This is the <strong>main-app</strong> drop target — different from the iMessage
        extension drop (next section). Use it when MemePouch is the foreground app and you
        want to drop something from another open window.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        5. Drag-import from iMessage — save stickers your friends sent you
      </h2>
      <p className="text-slate-700 leading-relaxed">
        This one&apos;s the headline feature: <em>save the sticker a friend sent you in
        iMessage</em>. iOS&apos;s built-in &quot;Save to Stickers&quot; button hangs on
        third-party stickers (Apple&apos;s system sticker daemon drops the XPC connection — see
        the{" "}
        <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
          deep-dive on why
        </Link>
        ), so MemePouch wires up a drop target inside its iMessage extension instead.
      </p>
      <p className="text-slate-700 leading-relaxed">
        The gesture: long-press the sticker your friend sent in the chat, keep your finger
        held down. With another finger, tap the MemePouch icon in the iMessage app drawer to
        open it. Drag the sticker into the MemePouch grid and release. The sticker imports,
        animation intact, ready to send back. Static stickers (PNG/JPEG) and animated GIFs
        both work — added in 1.8 after early reviewers had trouble with the two-finger gesture
        on static stickers.{" "}
        <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
          Full walkthrough with the alternate single-finger variant
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        What MemePouch can&apos;t import from
      </h2>
      <p className="text-slate-700 leading-relaxed">
        One thing for honesty: MemePouch can&apos;t import directly from the iMessage sticker
        drawer itself (Apple&apos;s built-in stickers, Memoji, Animoji, system Live Stickers).
        Those live behind a private system surface that doesn&apos;t expose itself as a drop
        source or share destination. If you want one of Apple&apos;s system stickers in your
        MemePouch library, the workflow is: take a screenshot, crop it, and import via Path 1
        (PhotosPicker) — but at that point you might as well use Apple&apos;s system drawer
        directly.
      </p>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">Try all five import paths in MemePouch.</p>
          <p className="text-slate-400 text-sm">Free for the first 5 stickers. $2.99 one-time unlock for unlimited. No subscription.</p>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition self-start sm:self-auto whitespace-nowrap"
        >
          Download MemePouch →
        </a>
      </div>

      <div className="mt-10 not-prose text-sm text-slate-500">
        <p>Related guides:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">How to save a sticker someone sent you in iMessage</Link></li>
          <li><Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 hover:underline">How to turn photos into iMessage stickers</Link></li>
          <li><Link href="/blog/organize-imessage-sticker-library" className="text-blue-600 hover:underline">How to organize your iMessage sticker library</Link></li>
        </ul>
      </div>
    </main>
  );
}
