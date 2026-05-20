import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "Turn a Live Photo into a looping GIF sticker for iMessage",
  description:
    "Live Photos are already 1.5–3 seconds of motion — they make ideal sources for animated iMessage stickers. MemePouch converts them to GIF stickers with one tap (or trim first), works with iCloud-only Live Photos, and uses Smart loop to find a seamless seam — without Apple's forced subject cutout.",
  alternates: { canonical: "/blog/live-photo-to-gif-sticker" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Turn a Live Photo into a looping GIF sticker for iMessage",
    description:
      "How MemePouch converts Live Photos into GIF stickers — one-tap or trim-then-save, iCloud-only Live Photo handling, Smart loop on the paired motion video, and how this compares to Apple's iOS 17 Live Stickers (cutout-forced vs full-frame).",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/live-photo-to-gif-sticker"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Convert a Live Photo into a GIF sticker for iMessage",
    totalTime: "PT1M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "A Live Photo in your Photos library" },
      { "@type": "HowToTool", name: "MemePouch (free for first 10 stickers)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Open MemePouch",
        text: "Launch MemePouch and tap 'Turn a Live Photo into a GIF' on the home screen.",
      },
      {
        "@type": "HowToStep",
        name: "Pick the Live Photo",
        text: "The picker filters to Live Photos only. Tap the one you want. If it lives only in iCloud, MemePouch automatically requests the paired motion video — no extra step.",
      },
      {
        "@type": "HowToStep",
        name: "Choose: save now or trim first",
        text: "A dialog offers 'Save GIF now' (one tap — ship the full motion as a GIF) or 'Trim before saving' (open the trim + Smart loop pipeline for precise control). Save now is the fastest path; trim first is for Live Photos with a slow start.",
      },
      {
        "@type": "HowToStep",
        name: "Send from iMessage",
        text: "The GIF sticker lands in your library. Open the MemePouch keyboard in any iMessage chat, filter to GIF, tap to send.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I turn a Live Photo into a sticker on iPhone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In MemePouch, tap 'Turn a Live Photo into a GIF', pick the Live Photo, then choose Save GIF now (one-tap) or Trim before saving. MemePouch extracts the paired motion video, runs it through the GIF encoder, and saves the result as an animated sticker — no subject cutout, full frame preserved.",
        },
      },
      {
        "@type": "Question",
        name: "Does MemePouch work with iCloud-only Live Photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MemePouch sets the PHAssetResourceManager network-access flag, so iOS fetches the motion video from iCloud automatically. There's a brief loading spinner while the download completes; no manual download step.",
        },
      },
      {
        "@type": "Question",
        name: "Why not use Apple's iOS 17 Live Stickers instead?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iOS 17 added Live Stickers from Live Photos, but the built-in feature runs Apple's subject-cutout pipeline — the background is removed and only the foreground subject becomes the sticker. For a meme Live Photo where the background or surrounding context is the joke, that destroys the punchline. MemePouch keeps the full frame and runs Smart loop on the motion video.",
        },
      },
      {
        "@type": "Question",
        name: "Can I trim a Live Photo to part of its motion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pick 'Trim before saving' in the import dialog. You get the full trim view with two handles, the seekable preview, and the same Smart loop / Boomerang / Off mode picker as videos. The Live Photo's paired motion clip is typically 3 seconds, so trimming usually means tightening to 1–2 seconds for a snappy reaction.",
        },
      },
      {
        "@type": "Question",
        name: "Will the Live Photo sticker animate when I send it in iMessage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Live Photo GIFs in MemePouch send as full-quality iMessage attachments (the same 10 MB attachment path video GIFs use), so the animation plays inline in the chat just like any other GIF. They don't peelable-stick to message bubbles like MSSticker objects do; that's the trade-off for keeping the full motion.",
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
        Turn a Live Photo into a looping GIF sticker for iMessage
      </h1>
      <p className="text-sm text-slate-500 mb-8 not-prose">Last updated 2026-05-20 · iOS 16+</p>

      <p className="text-lg text-slate-700 leading-relaxed">
        Live Photos are 1.5–3 seconds of motion already captured around a still frame — most
        people forget they exist after the novelty wears off, but they&apos;re an ideal source
        for animated iMessage stickers. The motion is short, expressive, and self-contained.
        MemePouch converts a Live Photo to a GIF sticker in one tap (or trim first if you
        want to tighten the seam), works with Live Photos that live only in iCloud, and
        — unlike Apple&apos;s iOS 17 Live Stickers — keeps the whole frame intact.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Why Live Photos make good loop stickers
      </h2>
      <p className="text-slate-700 leading-relaxed">
        A Live Photo is captured by holding the shutter slightly longer in Photos, recording
        about 1.5 seconds before and after the still frame. That timing happens to be the same
        as a great reaction GIF — long enough to deliver a beat, short enough to load fast and
        loop without overstaying. Snapping a Live Photo of your friend reacting to something,
        or of your dog cocking their head, gives you sticker material on the spot, with no
        explicit recording step.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        The two-flow dialog: Save GIF now vs Trim before saving
      </h2>
      <p className="text-slate-700 leading-relaxed">
        After you pick a Live Photo, MemePouch shows a small dialog with two buttons:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
        <li>
          <strong>Save GIF now</strong> — one tap, no further UI. MemePouch extracts the paired
          motion video, runs it through the encoder cascade, and the GIF sticker lands in your
          library. Best for already-tight reactions where you don&apos;t need to trim.
        </li>
        <li>
          <strong>Trim before saving</strong> — opens the trim view with the motion video
          loaded. You get the same two-handle trim, seekable preview, &quot;Use whole clip&quot;
          shortcut, and Smart loop / Boomerang / Off picker as videos.
        </li>
      </ul>
      <p className="text-slate-700 leading-relaxed">
        Most users settle on Save GIF now once they realize how reliably the full Live Photo
        works as a loop.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        iCloud-only Live Photos: no manual download
      </h2>
      <p className="text-slate-700 leading-relaxed">
        If iCloud Photos is on and the Live Photo&apos;s paired motion video lives only in
        the cloud (not yet cached on this device), MemePouch sets the{" "}
        <code className="text-sm bg-slate-100 px-1 rounded">PHAssetResourceManager</code>{" "}
        network-access flag, which tells iOS &quot;yes, please fetch from iCloud now.&quot;
        You see a brief loading spinner while the motion video downloads, then the conversion
        proceeds normally. No manual &quot;download this photo&quot; step.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Apps that forget to set this flag silently fail on iCloud-only assets — the user picks
        a Live Photo, the conversion errors out with a vague message, and they have to dig
        into Photos to force a download. MemePouch handles it automatically.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Smart loop on the motion video
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Once the motion video is extracted, MemePouch hands it to the same trim + Smart loop
        pipeline that videos use. Smart loop samples 15 candidate frames in a ±0.5 second
        window around the trim end, computes a 64-bit perceptual hash (dHash) for each, and
        snaps the end to the frame that visually matches the start frame closest. Many Live
        Photos loop naturally because the subject returns to roughly the same position by the
        end — Smart loop captures that exactly. See the{" "}
        <Link href="/blog/trim-video-into-looping-gif-sticker" className="text-blue-600 hover:underline">
          Smart loop walkthrough
        </Link>{" "}
        for the full algorithm.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Compared to Apple&apos;s iOS 17 Live Stickers
      </h2>
      <p className="text-slate-700 leading-relaxed">
        iOS 17 added a built-in &quot;Live Sticker&quot; feature: long-press a Live Photo in
        Photos and pick &quot;Add Sticker.&quot; It feels close to what MemePouch does, but
        with three big differences worth knowing about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
        <li>
          <strong>Forced subject cutout.</strong> Apple&apos;s Live Stickers run the same
          on-device foreground-subject detection model that Photos uses for &quot;lift subject.&quot;
          The background is removed and only the foreground is kept as the sticker. For a meme
          Live Photo where the background or surrounding context is the joke, that destroys
          the punchline. MemePouch keeps the whole frame.
        </li>
        <li>
          <strong>System-compressed for in-line use.</strong> Apple hasn&apos;t published the
          system Live Sticker size cap, but the result is visibly compressed for sending in
          line. MemePouch&apos;s 10 MB attachment route preserves much higher fidelity.
        </li>
        <li>
          <strong>Native sticker drawer attach vs attachment send.</strong> Apple&apos;s Live
          Stickers can peel onto message bubbles like a regular MSSticker. MemePouch&apos;s
          GIF stickers send as their own bubble (attachment route) because the 500 KB MSSticker
          cap can&apos;t hold a sharp 2-second motion video. Trade-offs of the architecture,
          not a missing feature.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Live Photo or Live Sticker — which to use?
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Use Apple&apos;s built-in Live Stickers when the subject is the whole story (a person
        or pet against a clean background, no surrounding context, no text overlay). Use
        MemePouch&apos;s Live Photo → GIF flow when the background, the surroundings, or any
        on-frame text is part of the joke — or when you want the sticker to land at full
        quality without Apple&apos;s system compression.
      </p>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">Turn your Live Photos into iMessage GIF stickers.</p>
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
          <li><Link href="/blog/trim-video-into-looping-gif-sticker" className="text-blue-600 hover:underline">Trim a video into a perfectly looping GIF sticker</Link></li>
          <li><Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 hover:underline">How to make GIF stickers for iMessage from any video</Link></li>
          <li><Link href="/blog/import-stickers-five-ways" className="text-blue-600 hover:underline">5 ways to add a sticker to MemePouch</Link></li>
        </ul>
      </div>
    </main>
  );
}
