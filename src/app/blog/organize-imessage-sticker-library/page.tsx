import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to organize your iMessage sticker library: filter by image / GIF, reorder, deduplicate",
  description:
    "Once you've imported 30+ stickers into MemePouch, you need a way to keep them organized. Here's how to filter image vs GIF, drag-reorder your library, and how MemePouch quietly prevents duplicate imports.",
  alternates: { canonical: "/blog/organize-imessage-sticker-library" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to organize your iMessage sticker library in MemePouch",
    description:
      "Filter image vs GIF, drag-to-reorder, preview animated stickers before sending, and how content-hash deduplication keeps duplicates out.",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/organize-imessage-sticker-library"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Organize your MemePouch iMessage sticker library",
    description:
      "Filter, reorder, and preview stickers inside MemePouch so a 50-sticker library stays easy to send from.",
    totalTime: "PT2M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "MemePouch (free for first 10 stickers)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Open the library",
        text: "Launch MemePouch from your Home Screen, or tap the MemePouch icon in any iMessage chat's app drawer.",
      },
      {
        "@type": "HowToStep",
        name: "Filter by type",
        text: "Tap the segmented control at the top: All, Images, or GIF. Same filter works in both the main app and the iMessage extension.",
      },
      {
        "@type": "HowToStep",
        name: "Preview an animated sticker",
        text: "Tap the play button on any GIF card to open a full-screen looping preview before sending — useful for checking the loop seam.",
      },
      {
        "@type": "HowToStep",
        name: "Drag to reorder",
        text: "Long-press a sticker and drag it onto another to reposition. Order persists across launches and matches the order shown in the iMessage drawer.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can MemePouch filter image stickers from GIF stickers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. There's a segmented control at the top of the library: All, Images, GIF. The same filter is in the iMessage extension too, so you can pull up GIF reactions instantly without scrolling. Animated stickers also carry a small GIF badge on the card.",
        },
      },
      {
        "@type": "Question",
        name: "Can I reorder my stickers in MemePouch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — long-press any sticker and drag to move it. The reorder is saved and used in both the main app and the iMessage extension drawer, so your most-used reactions can live at the top.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I try to import the same image twice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MemePouch uses an SHA-256 content hash on every import. If the bytes match a sticker you already have, the import is skipped with a 'This sticker is already in your library' message — no duplicate clutter.",
        },
      },
      {
        "@type": "Question",
        name: "Does MemePouch have folders or sticker packs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — MemePouch is library-first by design. Every sticker you import lands in one shared grid. If you need pack-style organization, use a cross-platform sticker app like Sticker Maker Studio. MemePouch is built around the assumption that you mainly want fast access to your own reactions in iMessage.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 prose prose-slate prose-lg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <h1 className="text-4xl font-bold mb-3 text-slate-900 not-prose">
        How to organize your iMessage sticker library in MemePouch
      </h1>
      <p className="text-sm text-slate-500 mb-8 not-prose">Last updated 2026-05-20 · iOS 16+</p>

      <p className="text-lg text-slate-700 leading-relaxed">
        The moment a sticker library crosses 20 or 30 items, &quot;just scroll until you find it&quot;
        stops being a strategy. MemePouch was built around the idea that a sticker keyboard should
        feel like a chat-speed tool — pull up the right reaction in under a second. This post
        walks through the four library features that get you there: filter, preview, reorder,
        and deduplicate.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Filter: All / Images / GIF
      </h2>
      <p className="text-slate-700 leading-relaxed">
        A segmented control sits at the top of the library — three pills: <strong>All</strong>,{" "}
        <strong>Images</strong>, <strong>GIF</strong>. The same control appears in the iMessage
        extension drawer, so when you&apos;re typing a reply and want a GIF reaction, one tap
        scopes the grid to animated stickers and you can pick without scrolling past static ones.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Animated stickers also carry a small <strong>GIF</strong> badge in the bottom-right of
        each card — a visual confirm that the sticker will animate when sent, not just sit as a
        still frame.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Preview before you send
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Tap the play button on a GIF card to open a full-screen looping preview powered by a
        custom <code className="text-sm bg-slate-100 px-1 rounded">CGImageSource</code>-based
        renderer. Use it to check that the loop seam is clean — Smart loop usually nails it, but
        for the rare clip where the seam shows, you can spot it before sending instead of after.
        Tap anywhere to dismiss.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Long-press to drag and reorder
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Long-press any sticker and drag it onto another to swap positions. The original card
        dims to 40% opacity during the drag so you know what you&apos;re moving. The new order
        is persisted to the App Group container and used by both the main app and the iMessage
        extension drawer.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Practical workflow: your top three or four reactions go to the front of the grid, and
        you can hit them from the iMessage drawer without scrolling. Everything else sits below.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Duplicate prevention (SHA-256 content hash)
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Every import runs through an SHA-256 hash of the underlying bytes. If the hash matches
        a sticker already in your library, the import is rejected with a friendly{" "}
        <em>&quot;This sticker is already in your library&quot;</em> error. So you can
        confidently slam-paste from the clipboard, re-share the same meme from a chat, or
        import the same Live Photo twice — MemePouch quietly drops the dupe and your library
        stays clean.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Note: the check is on raw byte equality. If a meme is re-encoded by another app
        (different JPEG quality, different metadata), the hash will differ and you&apos;ll get
        a legitimate second copy. This is the right behavior — different bytes can mean
        different quality.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Why no folders or packs?
      </h2>
      <p className="text-slate-700 leading-relaxed">
        MemePouch is deliberately library-first: one grid, no named packs, no folders. The
        design assumption is that your stickers are your private reaction set for iMessage —
        not curated collections you&apos;re publishing to friends or to a community feed. If
        you need pack-style organization (name a pack, group stickers into it, share the pack
        as a unit), use a cross-platform sticker app like Sticker Maker Studio — it&apos;s built
        for that workflow. See the{" "}
        <Link href="/compare" className="text-blue-600 hover:underline">
          honest comparison
        </Link>{" "}
        for the trade-offs.
      </p>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">Try the library tools in MemePouch.</p>
          <p className="text-slate-400 text-sm">Free for the first 10 stickers. $2.99 one-time unlock for unlimited. No subscription.</p>
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
          <li><Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 hover:underline">How to make GIF stickers for iMessage from any video</Link></li>
          <li><Link href="/blog/trim-video-into-looping-gif-sticker" className="text-blue-600 hover:underline">Trim a video into a perfectly looping GIF sticker (Smart loop walkthrough)</Link></li>
          <li><Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">How to save a sticker someone sent you in iMessage</Link></li>
        </ul>
      </div>
    </main>
  );
}
