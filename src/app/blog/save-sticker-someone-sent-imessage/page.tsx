import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to save an iMessage sticker someone sent you (2026 guide)",
  description:
    "iOS shows a Save to Stickers button for third-party stickers, but tapping it hangs — the system sticker daemon stalls. Here are the two drag flows in MemePouch that actually work, plus why every screenshot/forward workaround fails.",
  alternates: {
    canonical: "/blog/save-sticker-someone-sent-imessage",
    languages: {
      en: "/blog/save-sticker-someone-sent-imessage",
      "zh-Hans": "/blog/zh/save-imessage-sticker-friend",
      "zh-Hant": "/blog/zh-Hant/save-imessage-sticker-friend",
      "x-default": "/blog/save-sticker-someone-sent-imessage",
    },
  },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to save an iMessage sticker someone sent you",
    description:
      "iOS's Save to Stickers button hangs on third-party stickers in 2026. The two reliable ways to save a friend's iMessage sticker are both drag flows into MemePouch — two-finger drag if MemePouch isn't open yet, or single-finger drag if it is.",
    datePublished: "2026-05-07",
    dateModified: "2026-05-15",
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
      "Drag a third-party iMessage sticker your friend sent into MemePouch's library. Works around iOS's broken Save to Stickers backend.",
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
        text: "While still holding the sticker, use a different finger to tap the apps icon left of the iMessage text field, then tap MemePouch. (If MemePouch is already open in the drawer below the chat, you can skip this step and drag the sticker straight down — one finger is enough.)",
        url: siteUrl("/blog/save-sticker-someone-sent-imessage#step-open-memepouch"),
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Drop the sticker onto the grid",
        text: "Drag the floating sticker onto MemePouch's sticker grid and release. The sticker is added to your library. Animation and full quality are preserved.",
        url: siteUrl("/blog/save-sticker-someone-sent-imessage#step-drop"),
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does Save to Stickers hang when I tap it on a friend's sticker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS shows the Save to Stickers / Emoji Details button on third-party stickers, but tapping it launches Apple's StickersUltraExtension and the system sticker daemon (stickersd) drops its XPC connection. The action stalls indefinitely. This is a system-level iOS bug — third-party sticker apps can't fix it because we have no public API access to the sticker save pipeline. The drag-to-MemePouch path is the working alternative.",
        },
      },
      {
        "@type": "Question",
        name: "Do I always need two fingers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only if MemePouch isn't already open. If you open MemePouch in the iMessage drawer first, you can long-press a sticker with one finger and drag it straight down onto the MemePouch grid. The two-finger version is for the case where MemePouch isn't open yet — one finger holds the sticker, the other switches the drawer to MemePouch.",
        },
      },
      {
        "@type": "Question",
        name: "Does the animation survive the drag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The sticker arrives as raw GIF data; MemePouch stores it without re-encoding. Frame timing and quality match what your friend sent.",
        },
      },
      {
        "@type": "Question",
        name: "After I save it, how do I send the sticker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open any iMessage chat, tap the MemePouch icon in the iMessage drawer, tap the sticker. The keyboard automatically collapses back to the chat with the sticker in your message bar — hit send. Static stickers can still be dragged onto a message bubble like Apple's system stickers. GIFs send as full-quality attachments.",
        },
      },
      {
        "@type": "Question",
        name: "Will the screenshot trick work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, not really. Screenshots capture the chat bubble, timestamp, sometimes keyboard chrome. Animated stickers become a single still frame. And the result is a Photos image, not a sticker — sending it in another chat means going through Photos picker every time. The drag flow keeps animation and gives you a real sticker.",
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
          How to save an iMessage sticker someone sent you
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last updated 2026-05-15 · iOS 16+ ·{" "}
          <Link
            href="/blog/zh/save-imessage-sticker-friend"
            hrefLang="zh-Hans"
            className="text-blue-600 hover:underline"
          >
            简体中文
          </Link>{" "}
          ·{" "}
          <Link
            href="/blog/zh-Hant/save-imessage-sticker-friend"
            hrefLang="zh-Hant"
            className="text-blue-600 hover:underline"
          >
            繁體中文
          </Link>
        </p>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          MemePouch is a free-to-try iPhone app (iOS 16+) that turns your photos, GIFs, and Live
          Photos into reusable iMessage stickers, and gives you two reliable drag flows for
          saving stickers other people send you in iMessage. The first 10 stickers are free; a
          one-time $2.99 unlock removes the cap. No subscription.
        </p>

        <aside className="not-prose mb-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            The short version
          </p>
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug mb-6">
            iOS&apos;s Save to Stickers button hangs when you tap it on a third-party sticker. The
            two reliable ways are both drag flows into MemePouch — two fingers if MemePouch
            isn&apos;t open yet, one finger if it is.
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
              <h3 className="font-semibold text-slate-900 mb-1">Open (or already-open) MemePouch</h3>
              <p className="text-sm text-slate-600 leading-relaxed">If MemePouch isn&apos;t open, use a second finger to swipe to it in the iMessage drawer. If it&apos;s already open below, skip ahead.</p>
            </li>
            <li id="step-drop" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 font-bold flex items-center justify-center mb-3">3</div>
              <h3 className="font-semibold text-slate-900 mb-1">Drop on the grid</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Release the sticker over MemePouch&apos;s grid. It&apos;s saved to your library.</p>
            </li>
          </ol>
        </section>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What happens when you tap Save to Stickers
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          On iOS 17 and 18, long-pressing a third-party sticker opens the system context menu and,
          on the Emoji Details / Sticker Details view, you&apos;ll see a Save to Stickers button.
          The button looks like the same one Apple shows for native Photos cutout stickers. So
          you tap it.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          Nothing happens. The view stalls. Sometimes you can dismiss it with a swipe; sometimes
          you have to force-quit Messages. The sticker never lands in your iOS sticker drawer.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          On the system level, tapping that button launches{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">StickersUltraExtension</code>{" "}
          (Apple&apos;s internal user-generated stickers extension), which talks to{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">stickersd</code> (the iOS
          sticker daemon). For third-party sticker payloads, the XPC connection between those two
          processes drops repeatedly. The save action never completes. It&apos;s a system bug, not
          something MemePouch (or any other sticker app) has access to fix — Apple owns the
          entire save pipeline.{" "}
          <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
            Full breakdown of the system bug (with how the behavior was observed) →
          </Link>
        </p>
        <p className="text-slate-700 leading-relaxed mb-12">
          That&apos;s the real reason you need a workaround. iOS&apos;s Save to Stickers <em>exists</em>;
          it just doesn&apos;t <em>work</em> on third-party stickers.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Method 1 — two-finger drag (MemePouch not open yet)
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          This is the path that&apos;ll come up most — you&apos;re in any chat, your friend sends a
          sticker, you decide on the spot to save it. MemePouch isn&apos;t open in the iMessage
          drawer yet. The two-finger gesture handles the &quot;open MemePouch&quot; step without
          dropping the sticker.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Long-press the sticker with one finger.</strong> Keep holding — wait for the
            sticker to detach from the bubble and follow your finger as a small floating preview.
            (If you let go too early, you get the system context menu instead. Start over.)
          </li>
          <li>
            <strong>With another finger, swipe up the iMessage app drawer and tap MemePouch.</strong>
            The drawer switches; your first finger is still holding the sticker preview.
          </li>
          <li>
            <strong>Drop the sticker onto MemePouch&apos;s grid.</strong> Release. The grid shows a
            plus-sign indicator while you&apos;re hovering, and the sticker pops into your library
            when you release.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Method 2 — single-finger drag (MemePouch already open)
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          If you anticipate saving stickers, just open MemePouch in the iMessage drawer before
          your friend sends them. With MemePouch&apos;s grid visible below the chat, the save
          gesture collapses to one finger:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Long-press the sticker.</strong> Same as above — wait for the floating
            preview.
          </li>
          <li>
            <strong>Drag straight down onto the MemePouch grid.</strong> No second finger
            required, because the destination is already visible. Release on the grid.
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          Both methods land the sticker in the MemePouch library with full animation and quality
          intact. Pick whichever fits your situation.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Send it back — the auto-collapse trick
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Once a sticker is in MemePouch, sending it is faster than most sticker keyboards. Tap
          it in MemePouch&apos;s grid and the iMessage extension <strong>automatically collapses
          back to the chat</strong> — the keyboard returns, the sticker is already in your input
          bar, you just hit send. Most sticker keyboard apps stay open after a tap and force you
          to swipe them away manually; MemePouch&apos;s extension closes itself, so the chat is
          visible immediately.
        </p>
        <p className="text-slate-700 leading-relaxed mb-12">
          Static stickers can also be dragged onto a message bubble (the iMessage &quot;stick onto
          a message&quot; effect) like Apple&apos;s system stickers. GIF stickers send as
          full-quality attachments — too rich to fit Apple&apos;s 500 KB sticker file cap, so they
          take the Messages attachment path instead.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What does <em>not</em> work
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          A few common attempts that won&apos;t actually save a third-party sticker as a usable
          sticker:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Tap Save to Stickers in Emoji / Sticker Details.</strong> The button is
            there, looks legitimate, and stalls when you tap it on third-party stickers — see
            above.
          </li>
          <li>
            <strong>Tap the App Store icon in Emoji Details.</strong> Some sticker packs put one
            there as well. This installs the sender&apos;s entire sticker pack — useful if you
            want the whole pack, dead-end if you just want that one sticker.
          </li>
          <li>
            <strong>Screenshot the chat and crop.</strong> You capture chat-bubble background,
            the timestamp, sometimes the keyboard. Animated stickers collapse to a single still
            frame. The result is a Photos image, not a sticker — sending it again means Photos
            picker every time.
          </li>
          <li>
            <strong>Look for &quot;Save Image&quot; in the long-press menu.</strong> That option
            only appears for true image attachments (photos sent as files). It doesn&apos;t appear
            for sticker payloads regardless of iOS version.
          </li>
          <li>
            <strong>Forward the message to yourself.</strong> The forwarded message is still a
            sticker payload — same sticker in another chat, still no working Save button.
          </li>
          <li>
            <strong>Pull up the system Share Sheet.</strong> Long-press / More… on a third-party
            sticker doesn&apos;t open <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">
            UIActivityViewController</code>. The Share Sheet you can launch from Photos or Safari
            isn&apos;t exposed for sticker payloads.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why MemePouch supports the drag
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Most third-party iMessage sticker apps were built before this drag gesture existed and
          never wired up a drop target — so even though iOS would let them receive stickers, they
          don&apos;t. MemePouch installs a{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">UIDropInteraction</code> on
          its iMessage extension specifically to accept stickers dragged from the chat. The
          import pipeline matches the one used by Photos picker import: animated GIFs stay
          animated (when they fit), static stickers are normalized, the sticker shows up in your
          MemePouch library — visible from both the iMessage extension and the main app, separate
          from the iOS system Stickers drawer.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Will the GIF animation be preserved?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Yes, in nearly every case. iMessage&apos;s 500 KB sticker cap applies on both ends —
          your friend&apos;s sticker had to fit it to be sent in the first place, so by definition
          it will fit on import. The sticker arrives as raw GIF data and MemePouch stores it
          as-is without re-encoding, which means animation, frame timing, and original quality
          match what your friend sent.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          When the drag doesn&apos;t go through
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Three things can fail the import:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>The long-press collapsed into a menu.</strong> Your finger moved too far, too
            quickly, or you released. Try again, holding more steady until the sticker visibly
            detaches into a floating preview.
          </li>
          <li>
            <strong>You released the sticker outside the grid.</strong> Drop has to land inside
            MemePouch&apos;s extension area. If you drop it on the chat or anywhere outside,
            nothing happens — the sticker snaps back to the bubble.
          </li>
          <li>
            <strong>The receiving app doesn&apos;t support drop.</strong> The iOS system Stickers
            drawer doesn&apos;t accept third-party drops, and most older third-party sticker apps
            were shipped before Apple normalized the gesture and never wired up a drop target.
            You need an app that explicitly registered for it — MemePouch does.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Wrapping up</h2>
        <p className="text-slate-700 leading-relaxed mb-8">
          Short version: iOS shows a Save to Stickers button on third-party stickers, but it
          hangs — the system sticker daemon can&apos;t complete the save. The two reliable ways
          are both drag flows into MemePouch&apos;s iMessage extension: two-finger if MemePouch
          isn&apos;t open yet, one finger if it is. After it&apos;s saved, tap to send and the
          keyboard collapses back to the chat automatically. The{" "}
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
          collects smaller questions like supported formats and the free-tier limit.
        </p>

        <div className="not-prose mt-10 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-1">Save the next sticker your friend sends you.</p>
            <p className="text-slate-400 text-sm">Free with a 10-sticker tier. One-time $2.99 unlock for unlimited. No subscription.</p>
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
