import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to make GIF stickers for iMessage from any video or Live Photo (2026)",
  description:
    "Turn a Live Photo or short video into an animated iMessage GIF sticker with MemePouch — up to 10 seconds, full quality. iPhone only, iOS 16+. Free for 10 stickers, $2.99 one-time unlock.",
  alternates: { canonical: "/blog/make-gif-stickers-for-imessage" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to make GIF stickers for iMessage in 2026",
    description:
      "Turn videos and Live Photos into animated GIF stickers for iMessage, up to 10 seconds long. Step-by-step with MemePouch.",
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/make-gif-stickers-for-imessage"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Make a GIF sticker for iMessage from a video or Live Photo",
    description:
      "Convert a short video or Live Photo into an animated iMessage GIF sticker using MemePouch.",
    totalTime: "PT3M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "MemePouch (free)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Pick the source",
        text: "Open MemePouch and tap either 'Turn a video into a GIF' or 'Turn a Live Photo into a GIF', then choose the clip from your library.",
      },
      {
        "@type": "HowToStep",
        name: "Trim up to 10 seconds",
        text: "Drag the trim handles to select the segment you want. GIF stickers can be up to 10 seconds long. Shorter clips load faster in chat.",
      },
      {
        "@type": "HowToStep",
        name: "Save as GIF sticker",
        text: "Tap Create GIF Sticker. MemePouch encodes it at a quality preset that stays sharp without bloating file size. It's added to your sticker library.",
      },
      {
        "@type": "HowToStep",
        name: "Send from iMessage",
        text: "In any iMessage chat, open the MemePouch keyboard extension, filter to GIF if you want, tap the sticker. The keyboard collapses back to the chat and the GIF is in your message bar — hit send.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why doesn't iMessage have a built-in way to make GIF stickers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS 17 added Live Sticker support — Live Photos can be made into animated stickers — but the built-in feature is locked to subject-cutout Live Photos only, system-compressed for in-line use, and gives no trimming UI for video sources. For arbitrary videos, longer GIFs, or full-image animations (no auto-cutout), you need a separate sticker-maker app. MemePouch is built specifically for this.",
        },
      },
      {
        "@type": "Question",
        name: "How long can a GIF sticker be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Up to 10 seconds in MemePouch. The trim UI defaults to 3 seconds (the sweet spot for fast loading), but you can extend to 10. Longer clips create larger files; for instant sending feel, stay around 3-5 seconds.",
        },
      },
      {
        "@type": "Question",
        name: "Will the GIF stick onto a message bubble like an Apple sticker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — GIF stickers in MemePouch send as full-quality iMessage attachments, not as MSSticker objects. The trade-off: GIFs send at much higher quality than Apple's 500 KB sticker cap allows, but they don't attach to message bubbles. Static stickers (PNG/JPEG) still do attach to bubbles.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work with Live Photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MemePouch has a dedicated 'Turn a Live Photo into a GIF' import flow. Tap once, the Live Photo's motion video is converted to a GIF sticker, and you can trim it before saving.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The first 10 stickers are free. A one-time $2.99 unlock removes the limit forever. No ads, no recurring subscription.",
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
          How to make GIF stickers for iMessage from any video or Live Photo
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated 2026-05-14 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          iMessage doesn&apos;t have a built-in way to turn an arbitrary video into a GIF sticker. iOS
          17 added &quot;Live Stickers&quot; from Live Photos, but it auto-cuts out the subject (often
          wrong), heavily compresses the result so quality collapses, and won&apos;t touch a regular
          video. If you want a sharp, full-image GIF sticker from <em>any</em> short clip — a
          screen recording, a movie clip, a Live Photo, a downloaded video — you need a
          dedicated app.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          <strong>MemePouch makes this a 30-second job.</strong> Pick a source, trim up to 10
          seconds, save. The GIF goes straight into your iMessage sticker library and sends as a
          high-quality attachment to any chat. The first 10 stickers are free; $2.99 one-time
          unlocks unlimited.
        </p>

        <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Get it</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">MemePouch on the App Store</h2>
          <p className="text-slate-600 mb-4">iPhone only · iOS 16+ · Free for 10 stickers · $2.99 one-time unlock</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Step-by-step</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">1. Pick your source</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          From the MemePouch home screen, tap either:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <strong>Turn a video into a GIF</strong> — pick any video from your Photos library.
            Movie clips, screen recordings, downloaded videos all work.
          </li>
          <li>
            <strong>Turn a Live Photo into a GIF</strong> — pick a Live Photo. MemePouch uses the
            motion video baked into the Live Photo and skips the cutout step.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">2. Trim up to 10 seconds</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          You&apos;ll land in a trim view with the clip playing on a loop. Drag the start and end
          handles to pick the segment you want. The default trim is 3 seconds — for stickers
          that&apos;s the sweet spot because:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>3-second GIFs load instantly in iMessage</li>
          <li>The file size stays small, so they send fast even on slow connections</li>
          <li>Loops feel natural — a 3-second reaction loops cleanly forever</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          You can stretch it to 10 seconds for longer reactions or in-jokes that need setup. Past
          that, MemePouch won&apos;t let you — the encoding pipeline is tuned for sticker-sized GIFs,
          not long video.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">3. Save as GIF sticker</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Tap <strong>Create GIF Sticker</strong>. MemePouch encodes the GIF at a quality preset
          that stays sharp without bloating the file. It&apos;s added to your sticker library
          alongside any static stickers you have.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">4. Send it from iMessage</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Open any iMessage chat. In the iMessage app drawer next to the keyboard, tap the
          MemePouch icon — your sticker library appears. Use the filter at the top of the grid
          to show only GIFs if you have a lot of stickers. Tap the GIF you want, and the
          keyboard collapses back to the chat with the GIF already in your message bar. Hit
          send.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why GIF stickers send as attachments instead of bubble stickers
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Apple&apos;s MSSticker API — the one that lets a sticker attach onto someone&apos;s message
          bubble — caps each sticker file at <strong>500 KB</strong>. A 3-second, 480-pixel GIF
          with reasonable framerate easily blows past 500 KB. To stay under the cap, you have to
          drop resolution or framerate dramatically, and the result is a smeary, jerky GIF — not
          worth sending.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          MemePouch makes the opposite trade. GIF stickers send through Apple&apos;s
          <code className="text-sm bg-slate-100 px-1 rounded mx-1">insertAttachment</code> path
          instead, which doesn&apos;t have the 500 KB cap. The GIF lands in the conversation at the
          quality you actually want. The price: it sends as its own bubble in the chat — it
          doesn&apos;t stick onto someone&apos;s existing message bubble like a static sticker can. For
          GIFs, the quality is worth the trade.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          Static stickers (PNG/JPEG) still use MSSticker, so they can still attach to bubbles. You
          get the right behavior for each kind automatically.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Other things worth knowing
        </h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <strong>Whole image, no auto-cutout.</strong> Unlike iOS Live Stickers, MemePouch
            doesn&apos;t try to remove the background. The whole frame is the sticker — useful for
            anything where the background or text is part of the joke. See the{" "}
            <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-blue-600 hover:underline">
              screenshot guide
            </Link>{" "}
            for more on this.
          </li>
          <li>
            <strong>Save GIF stickers friends send you.</strong> If a friend sent you a GIF
            sticker in iMessage and you want to reuse it, long-press it with one finger and use
            another finger to swipe up the iMessage app drawer, then drop it onto MemePouch.
            MemePouch keeps the animation intact. See the{" "}
            <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
              save-sticker guide
            </Link>
            .
          </li>
          <li>
            <strong>Filter by GIFs.</strong> Both the main app and the iMessage extension have a
            built-in filter at the top of the grid — All / Images / GIFs. Useful once your
            library grows.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why doesn&apos;t iMessage have a built-in way to make GIF stickers?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              iOS 17 added Live Sticker support — Live Photos can become animated stickers — but
              it auto-cuts out the subject, is system-compressed for in-line use, and gives no
              trimming UI for video sources. For arbitrary videos, longer clips, or full-image
              animations, you need a dedicated app.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">How long can a GIF sticker be?</h3>
            <p className="text-slate-700 leading-relaxed">
              Up to 10 seconds. Default is 3 seconds (the sweet spot for fast loading and natural
              loops); stretch to 10 for longer reactions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Will the GIF stick onto a message bubble like an Apple sticker?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              No — GIFs send as full-quality attachments, not as MSSticker objects. Static
              stickers do attach to bubbles. The trade is conscious: GIFs send sharp instead of
              smeared down by aggressive compression.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Does this work with Live Photos?</h3>
            <p className="text-slate-700 leading-relaxed">
              Yes, there&apos;s a dedicated Live Photo flow. One tap turns the Live Photo&apos;s motion
              video into a GIF sticker; you can trim it before saving.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">How much does it cost?</h3>
            <p className="text-slate-700 leading-relaxed">
              First 10 stickers free. $2.99 one-time unlock removes the limit forever. No ads, no
              subscription.
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Make your first GIF sticker</h3>
          <p className="text-slate-700 mb-4">
            Download MemePouch on the App Store. Free for the first 10 stickers, then $2.99
            one-time to unlock unlimited.
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
