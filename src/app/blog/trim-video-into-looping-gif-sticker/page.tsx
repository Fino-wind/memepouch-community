import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "Trim a video into a perfectly looping GIF sticker for iMessage (Smart loop walkthrough)",
  description:
    "Turn a screen recording, video clip, or Live Photo into a clean-looping GIF sticker for iMessage with MemePouch's Smart loop (perceptual frame matching via dHash). Up to 10 seconds, auto-sized to fit iMessage's 10 MB attachment limit.",
  alternates: { canonical: "/blog/trim-video-into-looping-gif-sticker" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Trim a video into a perfectly looping GIF sticker for iMessage",
    description:
      "Walkthrough of MemePouch's video trim view, Smart loop endpoint detection (dHash), Boomerang fallback, and the encoder cascade that keeps the file under iMessage's 10 MB limit.",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/trim-video-into-looping-gif-sticker"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Trim a video into a looping GIF sticker for iMessage",
    description:
      "Use MemePouch's trim view + Smart loop detection to turn a video or screen recording into a seamless GIF sticker.",
    totalTime: "PT3M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "MemePouch (free for first 5 stickers)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Import the video",
        text: "Open MemePouch and tap 'Turn a video into a GIF'. Pick the clip from Photos. A screen recording, a downloaded video, or any short clip works.",
      },
      {
        "@type": "HowToStep",
        name: "Drag the trim handles",
        text: "Two sliders mark Start and End. Drag them to select up to 10 seconds. The preview seeks as you drag so you see exactly where each handle lands.",
      },
      {
        "@type": "HowToStep",
        name: "Or use the whole clip in one tap",
        text: "If the clip is already short enough, tap 'Use whole clip' to expand the trim to the full length (capped at 10 seconds) in one tap. The button only appears when the trim isn't already full.",
      },
      {
        "@type": "HowToStep",
        name: "Pick a loop mode",
        text: "Smart loop is the default — MemePouch finds the cleanest seam for you using perceptual frame matching. Boomerang plays forward-then-reversed for clips with no natural loop. Off plays as-is.",
      },
      {
        "@type": "HowToStep",
        name: "Save as GIF sticker",
        text: "Tap Create GIF Sticker. The encoder tries four recipes (15 → 8 fps, 300 → 180 px max dim) and ships the first one that fits iMessage's 10 MB attachment limit.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does MemePouch's Smart loop work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart loop uses perceptual frame matching (dHash, a 64-bit difference hash by Neal Krawetz, 2013) to find the cleanest seam for a GIF loop. It samples 15 candidate frames in a ±0.5 second window around the chosen trim end, computes a 64-bit hash for each, and snaps the end to the frame whose hash is most similar (lowest Hamming distance) to the start frame. If no candidate is within 12 bits of the start frame's hash, MemePouch falls back to Boomerang automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 'Use whole clip' button?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A one-tap shortcut that expands the trim selection to the full length of the imported clip, capped at MemePouch's 10-second sticker maximum. It only appears when the current trim isn't already the full clip, so the UI stays clean for the common case of trimming a longer video down.",
        },
      },
      {
        "@type": "Question",
        name: "What loop modes does MemePouch support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three modes: Smart (perceptual frame matching for a seamless one-way loop), Boomerang (plays forward then reversed for clips with no natural loop point), and Off (plays as-is, smallest file size, lets the GIF restart with a hard cut).",
        },
      },
      {
        "@type": "Question",
        name: "Why does my GIF sticker stay sharp instead of getting compressed to mush?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MemePouch routes GIF stickers through iMessage's insertAttachment API, which has a ~10 MB cap — much larger than the 500 KB MSSticker limit Apple's own Live Stickers use. The encoder tries a cascade of recipes (15 fps at 300 px, then 8 fps at 300 px, then 15 fps at 180 px, then 8 fps at 180 px) and ships the first one that fits. Most clips fit the highest preset; longer or more visually complex clips fall back to lower settings gracefully.",
        },
      },
      {
        "@type": "Question",
        name: "Can I trim a Live Photo the same way?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Live Photo import flow extracts the paired motion video, hands it to the same trim + Smart loop pipeline, and saves the result as a GIF sticker. There's also a one-tap 'Save GIF now' shortcut if you don't want to trim — works with iCloud-only Live Photos too (MemePouch sets the network-access flag so iOS fetches the motion data automatically).",
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
        Trim a video into a perfectly looping GIF sticker for iMessage
      </h1>
      <p className="text-sm text-slate-500 mb-8 not-prose">Last updated 2026-05-20 · iOS 16+ · 3 min read</p>

      <p className="text-lg text-slate-700 leading-relaxed">
        The reason most homemade GIF stickers look amateur is a visible <em>seam</em> — the
        moment the GIF loops, the last frame jumps to the first and the cut shows. Even a
        2-second clip can ruin the joke when the seam interrupts a reaction in the wrong place.
        MemePouch&apos;s Smart loop finds the cleanest seam for you, automatically — using
        perceptual frame matching (dHash). This post walks through the trim view, all three
        loop modes, and how the encoder keeps your GIF under iMessage&apos;s attachment limit.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        The trim view: two sliders + seekable preview
      </h2>
      <p className="text-slate-700 leading-relaxed">
        After you pick a video, MemePouch opens a full-screen trim view with two handles —
        <strong> Start</strong> on the left, <strong>End</strong> on the right. Dragging either
        one seeks the preview to that frame in real time, so you know exactly where the trim
        lands. The maximum is 10 seconds; longer clips need to be trimmed before save (the
        slider physically caps).
      </p>
      <p className="text-slate-700 leading-relaxed">
        Above the slider sits a length indicator. Past 3 seconds it picks up a quiet warning
        hint that longer clips push file size up and may need lower fps to fit the iMessage
        cap. For most reactions, 1.5–3 seconds is the sweet spot.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        The &quot;Use whole clip&quot; shortcut
      </h2>
      <p className="text-slate-700 leading-relaxed">
        If you imported a clip that&apos;s already short enough — say a 2-second screen
        recording of a single reaction — you don&apos;t want to fuss with sliders. MemePouch
        shows a single <strong>Use whole clip</strong> button below the trim controls (added in
        1.8) that expands the trim to the full length in one tap, capped at 10 seconds. The
        button only appears when the current trim isn&apos;t already the whole clip, so it
        stays out of the way the rest of the time.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Smart loop: perceptual frame matching with dHash
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Here&apos;s the headline feature. When you pick Smart (the default), MemePouch
        doesn&apos;t just cut at your end handle — it searches a small window of nearby frames
        and picks the one that <em>visually matches</em> the start frame.
      </p>
      <p className="text-slate-700 leading-relaxed">
        The algorithm: sample 15 candidate frames in a ±0.5 second window around the chosen
        end point. For each frame (and the start frame), compute a 64-bit{" "}
        <a
          href="https://www.hackerfactor.com/blog/index.php?/archives/529-Kind-of-Like-That.html"
          target="_blank"
          rel="noopener"
          className="text-blue-600 hover:underline"
        >
          difference hash (dHash, Krawetz 2013)
        </a>{" "}
        — a perceptual hash where each bit records &quot;is pixel A brighter than pixel B&quot;
        across a downsampled 9×8 grid. Two visually similar frames produce nearly identical
        hashes; the difference between them is the <strong>Hamming distance</strong> (number of
        bits that differ).
      </p>
      <p className="text-slate-700 leading-relaxed">
        MemePouch picks the candidate with the smallest Hamming distance to the start frame and
        snaps the end there. If the best candidate is more than 12 bits off (out of 64), no
        good seam exists in the search window — the clip&apos;s motion just doesn&apos;t loop
        naturally — and MemePouch falls back to Boomerang automatically.
      </p>
      <p className="text-slate-700 leading-relaxed">
        End-frame extraction uses zero tolerance, so the snapped frame is literally the one we
        matched. Interior frames use a 16 ms tolerance for encoding speed. (This is a fencepost
        detail that costs nothing when you get right and produces an invisible 16 ms hiccup at
        the seam when you get wrong; we fixed the off-by-one in 1.8.)
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Boomerang fallback: forward, then reversed
      </h2>
      <p className="text-slate-700 leading-relaxed">
        For clips with no natural loop point — a wave breaking, a door slamming, a person
        walking off-frame — Boomerang plays forward to the end, then back to the start. The
        loop is always smooth because the seam <em>is</em> the start frame. Trade-offs: the
        GIF is roughly twice as long, and motion that&apos;s only natural in one direction
        looks unnatural reversed. Smart loop catches most cases; Boomerang catches the rest.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        &quot;Off&quot; mode: as-is, smallest file
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Some clips are meant to restart with a hard cut — a reaction that ends on a
        freeze-frame, for example. Loop mode <strong>Off</strong> ships the trimmed clip
        exactly, no modification. Smallest file size, no loop processing. Use it when the seam
        doesn&apos;t matter.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        The encoder cascade: staying under 10 MB
      </h2>
      <p className="text-slate-700 leading-relaxed">
        iMessage attachments cap at roughly 10 MB. To send a sharp GIF at that ceiling,
        MemePouch tries four recipes in order, stepping down both framerate and resolution
        in tandem so quality degrades smoothly instead of falling off a cliff:
      </p>
      <ol className="list-decimal pl-6 space-y-1 text-slate-700 leading-relaxed">
        <li><strong>15 fps</strong>, max 300 px on the longest edge — sharp, smooth motion</li>
        <li><strong>12 fps</strong>, max 260 px — small step down for slightly heavier clips</li>
        <li><strong>10 fps</strong>, max 220 px — for longer / more visually complex clips</li>
        <li><strong>8 fps</strong>, max 180 px — last resort, still sends, still recognizable</li>
      </ol>
      <p className="text-slate-700 leading-relaxed">
        The first recipe that produces a file under 10 MB ships. Most 1–3 second clips fit
        the first recipe. 5–10 second clips with lots of motion fall back to recipe 2 or 3.
        The point: <strong>your GIF always sends</strong>, and it gets as much quality as the
        cap allows. No manual quality slider to fiddle with.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Compared to Apple Live Stickers
      </h2>
      <p className="text-slate-700 leading-relaxed">
        iOS 17+ has Live Stickers from Live Photos — but the built-in feature is locked to
        Live Photos (no arbitrary videos), forces the subject-cutout pipeline, and ships
        system-compressed for in-line use. MemePouch&apos;s GIF stickers go through the
        attachment route at 10 MB and keep the full frame. Trade-off: GIFs don&apos;t
        peelable-stick to message bubbles like MSSticker objects do — they send as their own
        message. For most uses that&apos;s a feature, not a bug.
      </p>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">Try Smart loop in MemePouch.</p>
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
          <li><Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 hover:underline">How to make GIF stickers for iMessage from any video</Link></li>
          <li><Link href="/blog/organize-imessage-sticker-library" className="text-blue-600 hover:underline">How to organize your iMessage sticker library</Link></li>
          <li><Link href="/blog/imessage-stickers-without-auto-cutout" className="text-blue-600 hover:underline">Make iMessage stickers without auto-cutout</Link></li>
        </ul>
      </div>
    </main>
  );
}
