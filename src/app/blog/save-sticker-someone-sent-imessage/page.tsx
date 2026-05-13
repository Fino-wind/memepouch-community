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
    dateModified: "2026-05-13",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/save-sticker-someone-sent-imessage"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Save an iMessage sticker someone sent you",
    description:
      "iOS does not expose a Save button for third-party iMessage stickers. The only Apple-supported path is dragging the sticker into a sticker app's iMessage extension using a two-finger gesture.",
    totalTime: "PT15S",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "MemePouch (free on the App Store)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Long-press the sticker",
        text: "With one finger, tap and hold the sticker in the iMessage chat. Keep holding until it detaches from the bubble and follows your finger as a small floating preview.",
        url: siteUrl("/blog/save-sticker-someone-sent-imessage#step-long-press"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open MemePouch with another finger",
        text: "While still holding the sticker, use a different finger to tap the apps icon left of the iMessage text field, then tap MemePouch to open it.",
        url: siteUrl("/blog/save-sticker-someone-sent-imessage#step-open-memepouch"),
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Drop the sticker onto the grid",
        text: "Drag the floating sticker onto MemePouch's sticker grid and release. The sticker is added to your library and can be sent from any chat going forward.",
        url: siteUrl("/blog/save-sticker-someone-sent-imessage#step-drop"),
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_LD) }}
      />
      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          How to save an iMessage sticker someone sent you
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          MemePouch is a free-to-try iPhone app (iOS 16+) that turns your photos, GIFs, and short
          videos into reusable iMessage stickers, and lets you save stickers other people send
          you in iMessage by dragging them into your library. The first 10 stickers are free; a
          one-time unlock removes the cap.
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            The short version
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS doesn&apos;t give you a Save button for stickers people send you. The only
            Apple-supported workaround is a two-finger drag into MemePouch.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download MemePouch on the App Store"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 hover:scale-[1.02] transition-all active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download MemePouch — Free
            </a>
            <span className="text-sm text-slate-500">iPhone · iOS 16+ · One-time unlock, no subscription</span>
          </div>
        </aside>

        <section aria-labelledby="three-step-summary" className="not-prose mb-12">
          <h2 id="three-step-summary" className="sr-only">The three-step summary</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <li id="step-long-press" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-3">1</div>
              <h3 className="font-semibold text-slate-900 mb-1">Long-press the sticker</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Hold it with one finger until it detaches into a floating preview. Don&apos;t release.</p>
            </li>
            <li id="step-open-memepouch" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mb-3">2</div>
              <h3 className="font-semibold text-slate-900 mb-1">Open MemePouch</h3>
              <p className="text-sm text-slate-600 leading-relaxed">With your other hand, tap the apps icon, then MemePouch in the iMessage drawer.</p>
            </li>
            <li id="step-drop" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center mb-3">3</div>
              <h3 className="font-semibold text-slate-900 mb-1">Drop on the grid</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Release the sticker over MemePouch&apos;s grid. It&apos;s saved to your library.</p>
            </li>
          </ol>
        </section>

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
          don&apos;t. MemePouch is built specifically to accept drops from the iMessage chat
          window, including both animated GIFs and static stickers. Drop a sticker in and it
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
        <p className="text-slate-700 leading-relaxed mb-8">
          Short version: iOS 17+ does have an Emoji Details view, but for third-party stickers
          it only links to the sender&apos;s App Store page rather than offering a Save button.
          Drag-and-drop into a sticker app&apos;s iMessage extension is the only path the system
          actually exposes for putting a friend&apos;s sticker into your own library. The{" "}
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

        <div className="not-prose mt-10 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-1">Save the next sticker your friend sends you.</p>
            <p className="text-slate-400 text-sm">Free with a 10-sticker tier. One-time unlock for unlimited. No subscription.</p>
          </div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download MemePouch on the App Store"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 hover:scale-[1.02] transition-all active:scale-95 self-start sm:self-auto whitespace-nowrap"
          >
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            Get MemePouch
          </a>
        </div>
      </article>
    </div>
  );
}
