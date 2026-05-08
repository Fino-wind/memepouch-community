import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to save an iMessage sticker someone sent you (2026 guide)",
  description:
    "iOS 17+ shows an Emoji Details view for stickers, but for third-party stickers it only links to the sender's App Store page — there is no Save button. Here is the one supported way to actually keep a sticker your friend sent you.",
  alternates: { canonical: "/blog/save-sticker-someone-sent-imessage" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to save an iMessage sticker someone sent you",
    description:
      "iOS 17+ added an Emoji Details view, but for third-party iMessage stickers it shows an App Store icon instead of a Save button — there is no public API for sticker apps to register as a save destination. The only path the system exposes is dragging the sticker into a sticker app's iMessage extension.",
    datePublished: "2026-05-07",
    dateModified: "2026-05-08",
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
          MemePouch is a free-to-try iPhone app (iOS 16+) that turns your photos, GIFs, and short
          videos into reusable iMessage stickers, and lets you save stickers other people send
          you in iMessage by dragging them into your library. The first 10 stickers are free; a
          one-time unlock removes the cap.
        </p>

        <p className="text-slate-700 leading-relaxed mb-12">
          A friend sends you the perfect sticker. You long-press it expecting a Save button. iOS
          17+ does have an &quot;Emoji Details&quot; option (it&apos;s called &quot;Sticker
          Details&quot; on iOS 17, renamed in iOS 18) that opens a detail view — but for
          third-party stickers, the icon you find in the corner of that view is not a download
          button. It&apos;s an App Store link to the sender&apos;s sticker pack. There is no Save
          button. This guide explains exactly why, why every workaround you might think of
          fails, and the one supported path that actually puts the sticker into your own
          library.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What Emoji Details actually does (and doesn&apos;t)
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Long-pressing a sticker in iOS 17 or later does open an Emoji Details / Sticker Details
          view. What that view contains depends entirely on where the sticker came from:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Apple system stickers</strong> — the cutouts you (or the sender) made via
            Photos app subject lift, or stickers already saved into the iOS system Stickers
            drawer — get a real <strong>Save / download button</strong> in the corner of Emoji
            Details. Tap it and the sticker is added to your own system Stickers drawer or saved
            as an image to Photos.
          </li>
          <li>
            <strong>Third-party stickers</strong> — anything sent from MemePouch, LINE, Sticker
            Drop, Persona, or any other app that ships an iMessage sticker pack via{" "}
            <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSStickerBrowserView</code>{" "}
            — get an <strong>App Store icon</strong> instead. Tapping it opens the App Store page
            for the sender&apos;s sticker app so you can install it. It does not save the sticker
            you&apos;re looking at.
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          That distinction is intentional, not an oversight. Apple&apos;s public Messages
          framework (the one all third-party sticker apps use) does not expose any way for a
          sticker app to register as a save destination. The Apple-controlled iOS system
          Stickers drawer is the only sink, and only stickers Apple itself classifies as system
          stickers can be written to it. For third-party stickers, Apple&apos;s answer is
          &quot;just download the same pack the sender used&quot; — hence the App Store link.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What does <em>not</em> work
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          A few common attempts that you&apos;ll see suggested in old forum posts — none of them
          actually save a third-party sticker as a usable sticker:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Tapping the App Store icon inside Emoji Details.</strong> This sends you to
            install the sender&apos;s sticker pack — useful only if you actually want their
            entire pack, not the single sticker you saw. If you don&apos;t want to install yet
            another sticker app per friend, this is a dead end.
          </li>
          <li>
            <strong>Screenshot the chat and crop.</strong> You capture chat-bubble background,
            the timestamp, sometimes the keyboard. Animated GIFs become a single still frame.
            And the result is a static image, not a sticker — meaning sending it in another
            conversation requires going through Photos picker every time.
          </li>
          <li>
            <strong>Looking for &quot;Save Image&quot; in the long-press menu.</strong> That
            option only appears for true image attachments (photos sent as files). It does not
            appear for sticker payloads, regardless of iOS version.
          </li>
          <li>
            <strong>Forwarding the message to yourself.</strong> The forwarded message is still
            a sticker payload. You end up with the same sticker in another chat, still without a
            Save button.
          </li>
          <li>
            <strong>Pulling up the system Share Sheet.</strong> Long-pressing or hitting
            &quot;More…&quot; on a third-party sticker doesn&apos;t open a
            UIActivityViewController. The share sheet you can launch from Photos or Safari is not
            exposed for sticker payloads.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          The one supported method: drag into a sticker app
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Apple does expose exactly one way for a third-party sticker app to receive an
          incoming sticker: the iOS drag-and-drop API. If a sticker app installs a{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">UIDropInteraction</code> on
          its iMessage extension, you can long-press a sticker in any chat and drag it there.
          Same gesture as moving photos between apps in Split View on iPad. On iPhone it&apos;s a
          two-finger gesture, which is the part most people miss:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            With one finger, long-press the sticker in the chat. <strong>Keep holding</strong>
            {" "}— it should detach from the bubble and follow your finger as a small floating
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
          (Reply / Attach Sticker / Emoji Details / etc.) and you have to start over.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why MemePouch handles this
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Most third-party iMessage sticker apps were built before this gesture existed and
          never added a drop target — so even though iOS would let them receive stickers, they
          don&apos;t. MemePouch&apos;s iMessage extension installs a UIDropInteraction on the
          extension&apos;s root view, registered for image, GIF, PNG, JPEG, and the Apple
          private &quot;com.apple.uikit.image&quot; type identifiers. Drop a sticker in and it
          goes through the same import pipeline as a Photos picker import: animated GIFs stay
          animated (when they fit the 500 KB cap), static stickers are auto-compressed if
          needed, and the sticker shows up in your MemePouch library — visible from both the
          iMessage extension and the main app, separate from the iOS system Stickers drawer.
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
            <strong>The receiving app doesn&apos;t support drop.</strong> The iOS system
            Stickers drawer doesn&apos;t accept third-party drops, and most older third-party
            sticker apps were shipped before Apple normalized the gesture and never wired up a
            drop target. You need a sticker app that explicitly registered for it.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Wrapping up</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Short version: iOS 17+ does have an Emoji Details view, but for third-party stickers
          it only links to the sender&apos;s App Store page rather than offering a Save button.
          Drag-and-drop into a sticker app&apos;s iMessage extension is the only path the system
          actually exposes for putting a friend&apos;s sticker into your own library.{" "}
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
