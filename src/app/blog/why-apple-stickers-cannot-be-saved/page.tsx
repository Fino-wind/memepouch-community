import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "Why iMessage Save to Stickers hangs on third-party stickers (and the real workaround)",
  description:
    "iOS shows a Save to Stickers button on third-party iMessage stickers but tapping it stalls. This is what's actually happening inside iOS, why Apple can't easily fix it, and the drag-import workaround that bypasses the broken system flow.",
  alternates: { canonical: "/blog/why-apple-stickers-cannot-be-saved" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why iMessage Save to Stickers hangs on third-party stickers",
    description:
      "Explainer: iOS shows a Save to Stickers button on third-party iMessage stickers but tapping it stalls because Apple's StickersUltraExtension and stickersd daemon drop the XPC connection. Drag-import into a sticker keyboard app is the only working alternative.",
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/why-apple-stickers-cannot-be-saved"),
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does Save to Stickers hang on third-party stickers in iMessage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tapping the Save to Stickers button on a third-party sticker launches Apple's StickersUltraExtension, which talks to the iOS sticker daemon (stickersd) over XPC. For third-party sticker payloads the XPC peer connection drops repeatedly — the save never completes. This is a system-level iOS bug, not something third-party sticker apps have access to fix.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Save to Stickers button missing on third-party stickers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — the button is visible and tappable in the Emoji Details / Sticker Details view on iOS 17 and 18. It looks identical to the one Apple shows for native cutout stickers. The problem is the backend, not the UI: the button calls into Apple's system sticker pipeline which stalls for third-party payloads.",
        },
      },
      {
        "@type": "Question",
        name: "What's the working workaround?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drag the sticker into a sticker-keyboard app that registered a drop target on its iMessage extension. Long-press the sticker with one finger, drag to the sticker app's grid in the iMessage drawer, release. The sticker lands in that app's library — not Apple's system stickers drawer, but it works. MemePouch is one of the few apps that explicitly wires up this drop target.",
        },
      },
      {
        "@type": "Question",
        name: "Will Apple fix this?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hard to predict. The bug appears related to how stickersd handles non-system sticker payloads — fixing it requires Apple to either extend the system stickers drawer to accept arbitrary sticker app payloads (likely they don't want to for moderation reasons) or harden the existing flow. Neither has shipped through iOS 17 or 18 so far. Don't hold your breath; use the drag workaround.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between system stickers and third-party stickers in iOS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "System stickers are made by Apple's Photos cutout, by Memoji, or by being saved into the iOS Stickers drawer. They live in a system-owned database and have a working Save flow when received. Third-party stickers are made and shipped by sticker pack apps using MSStickerBrowserView; they're delivered to recipients as raw sticker payloads but Apple has no public API to register a sticker app as a save destination for them.",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <article>
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          Why iMessage&apos;s Save to Stickers hangs on third-party stickers
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated 2026-05-15 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          You long-press a sticker your friend sent. iOS shows you the Emoji Details view. The
          familiar Save to Stickers button is right there. You tap it. Nothing happens. The view
          stalls. Sometimes you can dismiss it. Sometimes you can&apos;t. The sticker never
          lands in your iOS Stickers drawer.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          This isn&apos;t a missing button. It&apos;s a <strong>broken backend</strong>. Here&apos;s
          what&apos;s actually going on inside iOS, why Apple hasn&apos;t fixed it, and the one
          workaround that actually saves the sticker.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What happens when you tap Save to Stickers
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          When you tap Save to Stickers on a third-party sticker, iOS launches an internal Apple
          extension called{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">StickersUltraExtension</code>{" "}
          (full bundle id{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">com.apple.Stickers.UserGenerated.MessagesExtension</code>).
          This extension is Apple&apos;s in-house handler for &quot;user-generated&quot; stickers — the
          ones that don&apos;t come from a built-in sticker pack.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          StickersUltraExtension talks to the iOS sticker daemon —{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">stickersd</code> — over XPC
          (Apple&apos;s inter-process communication mechanism). For native Apple stickers (Photos
          cutouts, Memoji-style stickers), the conversation goes through cleanly and the sticker
          is written to the system stickers database.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For <strong>third-party</strong> stickers (anything created by an app using
          MSStickerBrowserView), the XPC peer connection between StickersUltraExtension and
          stickersd <strong>drops repeatedly</strong>. The save action stalls. The system never
          completes the write to the stickers database. The UI shows you the &quot;saving…&quot;
          state forever, until you force-quit Messages or wait for it to time out.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          This is the same pattern that&apos;s been reported by users on r/ios going back to
          iOS 17.0 — and as of iOS 18, it hasn&apos;t been fixed.
        </p>

        <aside className="my-6 p-4 bg-cream border border-slate-200 rounded-xl text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">How this was observed</p>
          <p>
            The bundle id and XPC peer behavior above were derived from real-device system logs
            (iPhone tethered to a Mac, unified logs streamed during a tap on the Save to Stickers
            button on a third-party sticker). Apple has not published documentation of this
            failure mode; the description above is what the system itself reports in its own
            logs, not a guess at internals. If you reproduce different behavior on a newer iOS
            point release, please email{" "}
            <a href="mailto:memepouch@tetherme.app" className="underline">memepouch@tetherme.app</a>{" "}
            so we can update the article.
          </p>
        </aside>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why third-party sticker apps can&apos;t fix this
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Sticker apps that ship through the App Store (LINE Stickers, Sticker Drop, MemePouch,
          and so on) talk to iMessage through the public{" "}
          <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">Messages</code> framework.
          That framework gives third-party apps three things:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 leading-relaxed">
          <li>
            <strong>MSStickerBrowserView</strong> — a built-in sticker grid component the app
            shows in its iMessage extension. Users tap a sticker and it&apos;s inserted into the
            message field.
          </li>
          <li>
            <strong>MSConversation.insert</strong> / <strong>insertAttachment</strong> — programmatic
            ways to put a sticker or attachment into the input field from the extension.
          </li>
          <li>
            <strong>UIDropInteraction</strong> — the same drag-and-drop API used everywhere else
            in iOS. A sticker app can register its iMessage extension as a drop target for
            stickers dragged from the chat.
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-4">
          The framework does <strong>not</strong> give third-party apps:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>Access to the iOS system Stickers database</li>
          <li>A way to register as a save destination for the Save to Stickers button</li>
          <li>Anything to do with the stickersd daemon or StickersUltraExtension</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          Apple owns the entire save pipeline. The button you tap in Emoji Details, the XPC
          message to stickersd, the database where the sticker lands — all Apple-private. When
          that pipeline breaks, third-party apps can&apos;t even diagnose it from inside (the
          extension that hangs is Apple&apos;s, not yours).
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          The drag-import workaround
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The one piece of API that third-party sticker apps <em>do</em> have for receiving
          stickers from a chat is <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">
          UIDropInteraction</code>. If an app installs a drop target on its iMessage extension
          view, you can long-press a sticker in any chat and drag it onto that app&apos;s grid.
          The system delivers the sticker payload to the receiving app, which then saves it to
          its own library.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This is the workaround. It bypasses StickersUltraExtension and stickersd entirely —
          the sticker doesn&apos;t land in iOS&apos;s system Stickers drawer, but it lands in the
          third-party sticker app&apos;s library, and you can send it from there.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          The full how-to is in{" "}
          <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
            the save-sticker guide
          </Link>{" "}
          — short version: long-press the sticker, drag onto an iMessage sticker app that
          supports drop import (two fingers if the app isn&apos;t open, one if it is), release on
          the grid.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why most sticker apps don&apos;t support the drag
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          UIDropInteraction has been on iOS since iOS 11 (2017), but Apple only normalized
          dragging stickers out of chat bubbles in a later iOS release. Most sticker apps were
          shipped before that and never wired up a drop target. They&apos;ll happily show their
          stickers in iMessage but can&apos;t receive any. MemePouch is one of the few that
          explicitly does. You can tell by trying the drag — if the receiving app shows a green
          plus-sign while you hover, it&apos;ll accept the drop. If nothing happens, it
          won&apos;t.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          The bigger picture — system stickers vs third-party stickers
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          iOS treats two classes of stickers very differently:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-slate-200">
            <thead className="bg-cream">
              <tr>
                <th className="px-3 py-2 border-b border-slate-200"></th>
                <th className="px-3 py-2 border-b border-slate-200">System stickers</th>
                <th className="px-3 py-2 border-b border-slate-200">Third-party stickers</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Examples</td>
                <td className="px-3 py-2 border-b border-slate-200">Photos cutouts, Memoji, anything in the iOS Stickers drawer</td>
                <td className="px-3 py-2 border-b border-slate-200">LINE Stickers, MemePouch, any MSStickerBrowserView pack</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Saved by</td>
                <td className="px-3 py-2 border-b border-slate-200">stickersd → system Stickers drawer</td>
                <td className="px-3 py-2 border-b border-slate-200">App&apos;s own library only</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Save to Stickers button works?</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes</td>
                <td className="px-3 py-2 border-b border-slate-200">Hangs (StickersUltraExtension / stickersd bug)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Drag import works?</td>
                <td className="px-3 py-2 border-b border-slate-200">N/A (already in system drawer)</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes, if the receiving app supports it</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Sticks onto bubbles</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes (when sent via MSSticker)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">File size cap</td>
                <td className="px-3 py-2">500 KB</td>
                <td className="px-3 py-2">500 KB for MSSticker, no cap for Messages attachments</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Is the Save to Stickers button missing for third-party stickers?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              No. The button is visible and tappable in Emoji Details / Sticker Details on iOS 17
              and 18. It looks identical to the one Apple shows for native cutout stickers. The
              problem is the backend, not the UI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why does it hang?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Tapping the button launches Apple&apos;s StickersUltraExtension which talks to the
              stickersd daemon over XPC. For third-party sticker payloads that XPC connection
              drops repeatedly and the save never completes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Will Apple fix this?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Hard to predict. As of iOS 18, no fix has shipped. Don&apos;t hold your breath; use
              the drag workaround.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What&apos;s the workaround?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Long-press the sticker, drag it onto a sticker-keyboard app that supports drop
              import (
              <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
                full guide
              </Link>
              ). MemePouch is one of the few apps that explicitly registers a drop target on its
              iMessage extension.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why don&apos;t most sticker apps support the drag?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              UIDropInteraction has been on iOS since 2017, but most sticker apps were shipped
              before Apple normalized dragging stickers out of chat bubbles and never wired up a
              drop target. MemePouch did because the whole point of the app is filling this gap.
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Save the next sticker your friend sends
          </h3>
          <p className="text-slate-700 mb-4">
            MemePouch supports the drag-import workaround. iMessage-only, one-time unlock.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get MemePouch →
          </a>
        </div>
      </article>
    </div>
  );
}
