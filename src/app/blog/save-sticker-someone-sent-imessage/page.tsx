import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to save an iMessage sticker someone sent you (2026 guide)",
  description:
    "iOS hides the Save button on third-party iMessage stickers, but there is one supported way to keep a sticker your friend sent you, animation and all. Here is exactly how it works.",
  alternates: { canonical: "/blog/save-sticker-someone-sent-imessage" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to save an iMessage sticker someone sent you",
    description:
      "Apple does not show a Save or Share menu on third-party iMessage stickers. The only path iOS exposes for keeping a sticker someone sent you is dragging it into a sticker app. This guide walks through that gesture, why the screenshot trick fails, and how to keep GIF animation intact.",
    datePublished: "2026-05-07",
    dateModified: "2026-05-07",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/save-sticker-someone-sent-imessage"),
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          How to save an iMessage sticker someone sent you
        </h1>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          MemePouch is a free iPhone app (iOS 16+) that turns your photos, GIFs, and short
          videos into reusable iMessage stickers, and lets you save stickers other people send
          you in iMessage by dragging them into your library.
        </p>

        <p className="text-slate-700 leading-relaxed mb-12">
          A friend sends you the perfect sticker. You long-press it expecting a Save button —
          and there is no Save button. No Share menu either. Just &quot;Reply&quot;,
          &quot;Attach Sticker&quot;, the name of whatever sticker app they used, and
          &quot;More…&quot;. None of those keep the sticker for you. This guide explains why
          iOS does that, why every workaround you might think of fails, and the one supported
          path that actually works in 2026.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why iOS doesn&apos;t let you save third-party stickers
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          When someone sends a sticker from a third-party iMessage sticker app, iOS treats it as
          a sticker payload — not as a regular image attachment. That distinction matters
          because Apple only built a save flow for one kind of sticker: the stickers in
          iOS&apos;s own system drawer (the one you reach with the smiley/sticker button on the
          keyboard). Long-pressing a sticker from that drawer gives you &quot;Add Sticker&quot;
          — but it adds to the same Apple-controlled drawer, not to any third-party app. There
          is no public API for a third-party sticker app to register as a destination.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          The result is that the long-press menu on a sticker your friend sent typically reads
          something like:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Reply</strong> — replies to that message in a thread
          </li>
          <li>
            <strong>Attach Sticker</strong> — lets you send your own sticker as a reaction
          </li>
          <li>
            <strong>From [App Name]</strong> — opens that sender&apos;s sticker app so you can
            reply with one of <em>their</em> stickers (not save the one they sent)
          </li>
          <li>
            <strong>More…</strong> — additional iMessage actions, none of which include a
            standard Share Sheet
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          You will not find &quot;Save&quot;, &quot;Save to Photos&quot;, or &quot;Add to
          Stickers&quot; in there. That is intentional on Apple&apos;s part, not a bug.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What does <em>not</em> work
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          A few common attempts that you will see suggested in old forum posts — none of them
          actually work for third-party stickers in current iOS:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Screenshot.</strong> You will capture the chat bubble background, the
            timestamp, possibly part of the keyboard. Animated GIFs become a single frame.
            Cropping to a square gives you a static, white-background image that is too large
            for iMessage&apos;s 500 KB sticker limit anyway.
          </li>
          <li>
            <strong>Looking for a Save Image option.</strong> It does not exist on third-party
            stickers — the same long-press on a regular photo message would offer it, but a
            sticker payload is a different thing entirely.
          </li>
          <li>
            <strong>Forwarding the message to yourself.</strong> The forwarded message is still
            a sticker, not a saved image. You end up with the same sticker in another chat,
            still without a Save button.
          </li>
          <li>
            <strong>Using the system Share Sheet.</strong> Long-pressing or hitting
            &quot;More…&quot; on a third-party sticker does not open a UIActivityViewController.
            The share sheet you can launch from Photos or Safari is not exposed here.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          The one supported method: drag into a sticker app
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Apple does expose exactly one way for a third-party sticker app to receive an
          incoming sticker — the iOS drag-and-drop API. If a sticker app installs a drop target
          inside its iMessage extension, you can long-press a sticker in any chat and drag it
          there. That is the same gesture that works for moving photos between apps in Split
          View on iPad, and it is the only path the system actually offers on iPhone for
          stickers.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          The gesture takes two fingers, which is the part most people miss:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            With one finger, long-press the sticker in the chat. <strong>Keep holding</strong>{" "}
            — it should detach from the bubble and follow your finger as a small floating
            preview.
          </li>
          <li>
            With your other hand (or another finger), tap the apps icon to the left of the
            iMessage text field and open a sticker app that supports drag import.
          </li>
          <li>
            Drag the floating sticker onto the app&apos;s sticker grid and release. The sticker
            is now in that app&apos;s library and you can send it to anyone going forward.
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          If you let go before step 3, the long-press collapses into the regular context menu
          (Reply / Attach Sticker / etc.) and you have to start over.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why MemePouch handles this
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Most third-party iMessage sticker apps were built before this gesture existed and
          never added a drop target — so even though iOS would let them receive stickers, they
          do not. MemePouch&apos;s iMessage extension installs a UIDropInteraction on the
          extension&apos;s root view, registered for image, GIF, PNG, and JPEG type
          identifiers. Drop a sticker in, and it is normalized through the same import pipeline
          as a Photos picker import: animated GIFs stay animated (when they fit the 500 KB
          cap), static stickers are auto-compressed if needed, and the sticker shows up in your
          MemePouch library on both the iMessage extension and the main app.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Will the GIF animation be preserved?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Yes, in nearly every case. iMessage&apos;s 500 KB sticker cap applies on both ends —
          your friend&apos;s sticker had to fit it to be sent in the first place, so by
          definition it will fit on import. The sticker arrives as raw GIF data and MemePouch
          stores it as-is without re-encoding, which means the animation, frame timing, and
          original quality are exactly what your friend sent.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          When the drag doesn&apos;t go through
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Three things can fail the import:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>The long-press collapsed into a menu.</strong> Your finger moved too far,
            too quickly, or you released. The fix is just to try again, holding more steady
            until the sticker visibly detaches into a floating preview.
          </li>
          <li>
            <strong>You released the sticker outside the grid.</strong> Drop has to land inside
            the receiving app&apos;s extension area. If you drop it on the chat or anywhere
            outside, nothing happens.
          </li>
          <li>
            <strong>The receiving app doesn&apos;t support drop.</strong> Apple system stickers
            and most older third-party packs cannot receive drops at all. You need a sticker
            app that explicitly added a drop target.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Wrapping up</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          The short version: iOS hides the Save button on purpose, the workarounds you find
          online don&apos;t work for third-party stickers, and drag-and-drop into a sticker app
          is the only path the system actually allows.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Download MemePouch
          </a>{" "}
          if you want to try it. The{" "}
          <Link
            href="/blog/turn-photos-into-imessage-stickers"
            className="text-blue-600 hover:underline font-medium"
          >
            companion guide on making your own stickers
          </Link>{" "}
          covers the four other ways to import (Photos, video to GIF, clipboard, share sheet),
          and the{" "}
          <Link href="/faq" className="text-blue-600 hover:underline font-medium">
            FAQ
          </Link>{" "}
          collects the smaller questions like supported formats and the free-tier limit.
        </p>
      </article>
    </div>
  );
}
