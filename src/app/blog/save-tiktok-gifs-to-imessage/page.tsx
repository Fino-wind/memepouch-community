import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "How to save TikTok GIFs and stickers to iMessage (2026)",
  description:
    "Import your TikTok GIFs and memes to iMessage as reusable stickers: save the video, share it into MemePouch, trim up to 10 seconds, done. Works for TikTok stickers and comment memes too. iPhone, iOS 16+.",
  alternates: { canonical: "/blog/save-tiktok-gifs-to-imessage" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to save TikTok GIFs and stickers to iMessage in 2026",
    description:
      "Turn TikTok videos, GIFs, and stickers into reusable iMessage stickers with MemePouch — save, share, trim, send.",
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/save-tiktok-gifs-to-imessage"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Import a TikTok GIF to iMessage as a sticker",
    description:
      "Save a TikTok video to your iPhone, share it into MemePouch, trim it into a looping GIF sticker, and send it in any iMessage chat.",
    totalTime: "PT2M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "TikTok app" },
      { "@type": "HowToTool", name: "MemePouch (free)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Save the TikTok video",
        text: "In TikTok, tap Share on the video and choose Save video. It lands in your Photos library. If the video doesn't allow saving, screen-record the moment instead.",
      },
      {
        "@type": "HowToStep",
        name: "Share it into MemePouch",
        text: "Open the saved video in Photos, tap Share, and pick MemePouch from the share sheet. The video hands off straight into MemePouch's trim view. (Or open MemePouch and tap 'Turn a video into a GIF'.)",
      },
      {
        "@type": "HowToStep",
        name: "Trim the loop",
        text: "Drag the handles to the moment you want — up to 10 seconds, though 2-4 seconds loops best as a reaction. Tap Create GIF Sticker.",
      },
      {
        "@type": "HowToStep",
        name: "Send it in iMessage",
        text: "In any iMessage chat, open the MemePouch extension from the app drawer, tap your new GIF, and send. It stays in your library forever — one tap next time.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why can't I save a TikTok GIF directly into iMessage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iMessage has no import for external GIFs or videos — Apple's sticker system only accepts Live Photos through its own auto-cutout flow, which mangles memes (it crops out the text and background that make them funny). The working path is: get the TikTok clip into your Photos library, then use a sticker-maker app like MemePouch to convert it into a reusable iMessage sticker.",
        },
      },
      {
        "@type": "Question",
        name: "Do saved TikTok videos keep the watermark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — TikTok's Save video adds the bouncing username watermark. For a clean sticker, screen-record the clip playing instead (Control Center → Screen Recording), then trim in MemePouch. The screen recording route also works for videos where saving is disabled.",
        },
      },
      {
        "@type": "Question",
        name: "Can I save the sticker emojis from TikTok comments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Screenshot the comment, then share the screenshot into MemePouch from the Photos preview and crop to the sticker. MemePouch keeps the full image — no forced auto-cutout — so text and background survive.",
        },
      },
      {
        "@type": "Question",
        name: "How long can the GIF be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Up to 10 seconds. 2-4 seconds is the sweet spot for a reaction GIF: it loads instantly in the chat and loops cleanly.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MemePouch is free to try. A one-time unlock removes the sticker limit forever — no subscription, no ads.",
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
          How to save TikTok GIFs and stickers to iMessage
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated 2026-07-09 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          You found the perfect reaction GIF on TikTok and you want it in your iMessage
          conversations — permanently, one tap away, not buried in your camera roll. iMessage
          has no import for that: Apple&apos;s built-in sticker flow only takes Live Photos and
          runs everything through an auto-cutout that crops the text and background out of
          memes. So the trick is a two-step: <strong>get the clip out of TikTok, then convert
          it into a real iMessage sticker</strong>.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          With MemePouch the whole thing takes about two minutes, and you only ever do it once
          per meme — after that the sticker lives in your iMessage keyboard forever.
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Get it</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">MemePouch on the App Store</h2>
          <p className="text-slate-600 mb-4">iPhone only · iOS 16+ · free to try · one-time unlock</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Import a TikTok GIF or video moment, step by step
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">1. Save the video from TikTok</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          On the TikTok video, tap <strong>Share → Save video</strong>. It lands in your Photos
          library. Two gotchas:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            Saved TikTok videos carry the bouncing <strong>username watermark</strong>. If you
            want the sticker clean, <strong>screen-record</strong> the moment instead (swipe
            into Control Center → Screen Recording, play the clip, stop).
          </li>
          <li>
            Some creators disable saving. The screen-record route works there too — anything
            playing on your screen can become a sticker.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">2. Share it into MemePouch</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Open the saved video in Photos, tap <strong>Share</strong>, and pick
          <strong> MemePouch</strong> in the share sheet — the video hands off directly into
          MemePouch&apos;s trim view. Or start from the other end: open MemePouch and tap
          <strong> Turn a video into a GIF</strong>, then pick the clip. Same place either way.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">3. Trim the loop</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          Drag the handles to the exact beat you want. You can go up to 10 seconds, but
          reaction GIFs work best at <strong>2–4 seconds</strong> — they load instantly in the
          chat and loop cleanly. Tap <strong>Create GIF Sticker</strong> and it&apos;s encoded
          sharp (no Apple-style sticker compression) and saved to your library.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3 text-slate-900">4. Send it from any iMessage chat</h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          In iMessage, open the MemePouch extension from the app drawer next to the keyboard.
          Your TikTok GIF is right there — tap it, it drops into the message bar, hit send.
          Next time it&apos;s one tap, no TikTok, no camera roll digging.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Also works: TikTok comment stickers and memes
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Those sticker-style memes in TikTok comments aren&apos;t videos — for them, just
          <strong> screenshot</strong>, share the screenshot into MemePouch straight from the
          Photos preview, and crop to the sticker. MemePouch keeps the <em>whole image</em> —
          there&apos;s no forced auto-cutout like Apple&apos;s &quot;Add Sticker&quot; flow, so
          the caption text and background that make the meme funny survive intact. (More on
          that in{" "}
          <Link href="/blog/imessage-stickers-without-auto-cutout" className="text-blue-600 underline">
            our no-auto-cutout guide
          </Link>
          .)
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why there&apos;s no direct TikTok → iMessage path
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Apple&apos;s sticker system (iOS 17 &quot;Live Stickers&quot;) only ingests Live
          Photos from your own library, auto-cuts the subject out, and compresses the result.
          It was never designed for internet memes:
        </p>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>No video import — a TikTok clip can&apos;t enter the flow at all</li>
          <li>Auto-cutout removes captions, borders, and reaction context</li>
          <li>Heavy compression turns crisp memes into mush</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          That gap is exactly what MemePouch exists to fill: any image, GIF, or short video
          becomes a full-quality, full-frame iMessage sticker.
        </p>

        <div className="my-10 p-6 bg-cream border border-slate-200 rounded-2xl">
          <div className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Ready?</div>
          <p className="text-slate-600 mb-4">
            Grab the GIF you were just thinking about and try the flow — it&apos;s free.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            Download MemePouch →
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">Related guides</h2>
        <ul className="text-slate-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 underline">
              How to make GIF stickers for iMessage from any video or Live Photo
            </Link>
          </li>
          <li>
            <Link href="/blog/save-stickers-to-camera-roll" className="text-blue-600 underline">
              How to save stickers to your camera roll (the screenshot trick)
            </Link>
          </li>
          <li>
            <Link href="/blog/import-stickers-five-ways" className="text-blue-600 underline">
              5 ways to add a sticker to MemePouch
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
