import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "iMessage stickers without auto-cutout — keep the whole image",
  description:
    "iOS 17+'s Add Sticker tool auto-removes the background and ruins memes with text overlays, reaction faces, or intentional context. Here's why Apple does it, why you can't disable it, and the workflow for making whole-image iMessage stickers — text, hands, and all — using MemePouch.",
  alternates: { canonical: "/blog/imessage-stickers-without-auto-cutout" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "iMessage stickers without auto-cutout: keep the whole image",
    description:
      "Apple's Add Sticker tool auto-removes the background and breaks memes with text overlays or intentional context. Explainer on why Apple does the cutout, why third-party apps can't disable it inside iOS's Add Sticker flow, and the workflow that imports the whole photo, GIF, or Live Photo as a real iMessage sticker.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/imessage-stickers-without-auto-cutout"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Make an iMessage sticker that keeps the whole image (no auto-cutout)",
    description:
      "Workflow for creating iMessage stickers from photos, GIFs, or Live Photos without Apple's automatic background removal. Result: a sticker that sends from the iMessage drawer and sticks onto message bubbles like Apple's, but with the full frame intact.",
    totalTime: "PT30S",
    supply: [
      { "@type": "HowToSupply", name: "An iPhone running iOS 16 or later" },
      { "@type": "HowToSupply", name: "MemePouch installed" },
      { "@type": "HowToSupply", name: "The photo, GIF, or short video you want to turn into a sticker" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open MemePouch",
        text: "Open the MemePouch app on your iPhone. The main screen lists your saved stickers; the import buttons are at the top.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Import the image, GIF, or Live Photo",
        text: "Tap Import from Photos and select your meme. MemePouch saves the full frame as-is — no Vision-framework subject detection, no background removal. HEIC photos are auto-converted on import. Live Photos can be turned into 10-second GIF stickers in one tap.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Send it from the iMessage drawer",
        text: "In any chat, open the MemePouch icon in the iMessage app drawer. Your sticker appears in the grid. Tap to send, or long-press and drag onto someone's message bubble to stick it like a system sticker. GIFs send as full-quality attachments.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I disable Apple's auto-cutout in the Add Sticker feature?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is no setting in iOS to turn off the background removal that runs when you tap Add Sticker on a photo. Apple's design is to always extract the main subject, and there is no public API for third-party apps to add an opt-out. The only way to get a whole-image iMessage sticker is to use a different sticker pipeline — a sticker pack app like MemePouch that registers stickers through MSStickerBrowserView instead of going through Apple's system stickers flow.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Apple remove the background automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple's Add Sticker feature uses the on-device Vision framework to detect the foreground subject and cut everything else away. It is designed for portraits, objects, and pets — where isolating the subject usually looks better than the full photo. It assumes one obvious subject per image. That assumption fails for memes, reaction images, screenshots with overlay text, and any image where the background is part of the joke.",
        },
      },
      {
        "@type": "Question",
        name: "Does MemePouch process my photo with AI before saving?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. MemePouch imports the raw image bytes. Static stickers go through Apple's MSSticker API which has a 500 KB cap, so MemePouch auto-compresses the file if it's larger — but it never crops, never runs subject detection, never alters the framing. Everything happens on-device with no network round-trip and no analytics.",
        },
      },
      {
        "@type": "Question",
        name: "Will a whole-image sticker still stick onto someone's message bubble like Apple's stickers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Static stickers sent through MemePouch's iMessage extension are real MSSticker objects, so you can long-press and drag them onto another person's message bubble exactly the way you can with an Apple cutout sticker. GIF stickers route through Messages attachments instead — they send as their own full-quality bubble in the chat rather than sticking onto an existing one (this is the trade-off for not being clamped to 500 KB).",
        },
      },
      {
        "@type": "Question",
        name: "What about animated stickers and GIFs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple's Add Sticker feature on iOS 17+ supports turning a Live Photo into an animated sticker, but it still runs the subject-detection cutout on every frame — the animation has a transparent background and the same context-loss problem. MemePouch keeps animated stickers as full-frame GIFs. You can import a GIF directly, or trim up to 10 seconds of a short video or Live Photo and MemePouch saves it as a GIF sticker. The full frame loops; nothing is masked away.",
        },
      },
      {
        "@type": "Question",
        name: "Why can't I just save a whole-image meme into the iOS system stickers drawer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The iOS system stickers drawer only accepts stickers from two sources: Apple's own Add Sticker flow (which always cuts out a subject) and the Save to Stickers button on stickers received in iMessage (which is currently broken for third-party stickers — see the linked deep-dive). There is no public API for third-party apps to write into the system drawer. MemePouch's stickers live in MemePouch's own library inside the iMessage app drawer; they send and stick exactly like Apple's, but they don't share the same database.",
        },
      },
      {
        "@type": "Question",
        name: "When is Apple's auto-cutout actually the better choice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When the photo is one clear subject on a plain background — a pet, a single object, a portrait — and you want the transparent-background sticker look that Apple's cutout produces. For those cases the Vision framework usually does a great job and you don't need a third-party app. The reason MemePouch exists is the other half of the use case: memes, reaction images, screenshots, photos with text or multiple visual elements, and anything where the whole frame is the joke.",
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
          iMessage stickers without auto-cutout: keep the whole image
        </h1>
        <p className="text-sm text-slate-500 mb-8">Last updated 2026-05-16 · iOS 16+</p>

        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          You long-press a meme in Photos. You tap Add Sticker. iOS does its little subject-detection
          animation. The result drops the punchline. The reaction face is gone. The text overlay is
          gone. The hands holding the sign are gone. What you wanted to send was the whole image —
          what you got is a floating head against transparent.
        </p>
        <p className="text-lg text-slate-700 mb-10 leading-relaxed">
          This is not a bug. Apple&apos;s <strong>Add Sticker</strong> always runs the cutout, and
          there is <strong>no setting to turn it off</strong>. Here&apos;s why iOS does it, why
          third-party apps can&apos;t turn it off either, and the path that actually keeps the full
          image: a sticker pack app that imports stickers without going anywhere near the system
          cutout pipeline.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          What Apple&apos;s Add Sticker actually does
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          When you tap Add Sticker on a photo (iOS 17 and later), iOS runs the image through the{" "}
          <strong>Vision framework</strong> — Apple&apos;s on-device computer-vision library. Vision
          looks for what it thinks is the foreground subject, generates a mask, and crops everything
          else away. The result is saved as a new system sticker with a transparent background.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          For a portrait, a pet, a single object on a plain background, this works well. The
          Vision model has been trained on millions of subject-isolation tasks and the resulting
          sticker usually looks clean.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          For a meme, this is destructive. The cutout assumes <strong>one</strong> subject and{" "}
          <strong>no</strong> meaningful background. Memes almost always violate both assumptions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Text overlays get masked away.</strong> The captioned line at the top or bottom
            of an image macro is, to Vision, background. It gets removed.
          </li>
          <li>
            <strong>Hands and props get cut off.</strong> A reaction image where someone holds a
            sign, points at the camera, or holds an object — Vision often decides the hand is part
            of the background and slices it.
          </li>
          <li>
            <strong>Context disappears.</strong> A screenshot where the meaning is in the whole
            frame (a tweet, a chat bubble layout, a UI element) is reduced to whatever Vision
            decided was the most prominent shape.
          </li>
          <li>
            <strong>Two-subject memes break.</strong> Drake meme, distracted-boyfriend, expanding-brain —
            Vision picks one subject and masks the other. The joke depends on having both.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Why you can&apos;t disable it
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          There&apos;s no setting in Settings → Messages, no toggle in Photos, no developer
          entitlement. The cutout is hard-wired into the Add Sticker flow. Apple&apos;s product
          decision is that <em>system stickers should be cutouts</em>; the whole sticker drawer is
          designed around transparent-background subjects that can sit on top of anyone&apos;s
          message bubble.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Third-party apps can&apos;t patch this for you. The Vision call happens inside Apple&apos;s
          private Stickers extension; the public Messages framework gives sticker-pack apps a
          separate pipeline (MSStickerBrowserView) that doesn&apos;t touch Vision at all. Two
          parallel sticker systems, sharing the same iMessage drawer, with very different policies
          on what an &quot;image&quot; means.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          So if you want a whole-image sticker in iMessage, the answer isn&apos;t to fight Add
          Sticker. It&apos;s to use the other pipeline.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          The alternative: a sticker pack with the raw image
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Sticker-pack apps ship as iMessage extensions that register their own grid in the iMessage
          app drawer. They use the public <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code>{" "}
          API, which takes a raw image file and registers it as a sticker. No Vision call. No
          subject detection. No automatic cropping. Whatever you put in is what your friends see.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          MemePouch is that pipeline, specifically tuned for memes. You import a photo, GIF, short
          video, or Live Photo; the app stores the full frame; the iMessage extension exposes the
          library in your sticker drawer. There are two real constraints to be aware of, both
          inherited from the underlying APIs:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 leading-relaxed">
          <li>
            <strong>Static stickers have a 500 KB cap</strong> because MSSticker enforces it. MemePouch
            auto-compresses larger photos to fit; visible quality loss is rare for typical meme
            resolutions.
          </li>
          <li>
            <strong>GIF stickers route through Messages attachments instead</strong>, which means they
            don&apos;t have the 500 KB cap (up to ~10 MB) but they send as their own full-quality
            bubble rather than sticking onto an existing message bubble. The trade-off is deliberate —
            you get high-fidelity animated stickers at the cost of the bubble-overlay behaviour.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Side-by-side comparison
        </h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 border-b border-slate-200"></th>
                <th className="px-3 py-2 border-b border-slate-200">Apple Add Sticker</th>
                <th className="px-3 py-2 border-b border-slate-200">MemePouch sticker pack</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Background</td>
                <td className="px-3 py-2 border-b border-slate-200">Auto-removed via Vision</td>
                <td className="px-3 py-2 border-b border-slate-200">Preserved as-is</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Text / overlays</td>
                <td className="px-3 py-2 border-b border-slate-200">Frequently masked out</td>
                <td className="px-3 py-2 border-b border-slate-200">Untouched</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Two-subject memes</td>
                <td className="px-3 py-2 border-b border-slate-200">One subject picked, rest cut</td>
                <td className="px-3 py-2 border-b border-slate-200">Both subjects intact</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Lives in</td>
                <td className="px-3 py-2 border-b border-slate-200">iOS system Stickers drawer</td>
                <td className="px-3 py-2 border-b border-slate-200">MemePouch app drawer in iMessage</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Sticks onto message bubbles</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes</td>
                <td className="px-3 py-2 border-b border-slate-200">Yes for static stickers; GIFs send as attachments</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Static size cap</td>
                <td className="px-3 py-2 border-b border-slate-200">N/A (system-managed)</td>
                <td className="px-3 py-2 border-b border-slate-200">500 KB (auto-compressed)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Animated stickers</td>
                <td className="px-3 py-2 border-b border-slate-200">Live Photo subject only (still cut out)</td>
                <td className="px-3 py-2 border-b border-slate-200">Full-frame GIFs up to 10 s / 10 MB</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-200 font-medium">Server upload</td>
                <td className="px-3 py-2 border-b border-slate-200">None (Vision is on-device)</td>
                <td className="px-3 py-2 border-b border-slate-200">None (everything stays on iPhone)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Cost</td>
                <td className="px-3 py-2">Free, built in</td>
                <td className="px-3 py-2">Free for 10 stickers; $2.99 one-time unlock for unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          Workflow: a whole-image sticker in 30 seconds
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed mb-6">
          <li>
            <strong>Open MemePouch.</strong> The import buttons are at the top: Photos, Live Photo,
            Clipboard, Share Sheet.
          </li>
          <li>
            <strong>Import the meme.</strong> Pick a photo, GIF, short video, or Live Photo. The
            full frame is saved. HEIC photos are converted automatically; videos and Live Photos
            can be trimmed up to 10 seconds and saved as GIF stickers.
          </li>
          <li>
            <strong>Send it.</strong> In any iMessage chat, tap the MemePouch icon in the app
            drawer. Your sticker shows in the grid. Tap to send, or long-press and drag onto a
            message bubble to stick it like Apple&apos;s system stickers.
          </li>
        </ol>
        <p className="text-slate-700 leading-relaxed mb-6">
          That&apos;s the whole loop. The original photo can be auto-deleted from your camera roll
          after import if you turn on Auto-Delete in Settings — useful if you collect memes off the
          web and don&apos;t want them cluttering Photos.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">
          When Apple&apos;s cutout is the right answer
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          To be fair to the Vision team — for the things it&apos;s designed for, Add Sticker is
          excellent. A photo of your dog. A clean portrait. A single object you photographed
          against a wall. Anywhere the &quot;subject on transparent background&quot; aesthetic is
          actually what you want, the built-in tool is fast, free, and works without installing
          anything. MemePouch isn&apos;t trying to replace it; it&apos;s the answer for the other
          half of the sticker use-case — where you want the image, not a cutout of part of it.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Can I disable Apple&apos;s auto-cutout?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              No. There is no toggle in Settings, Photos, or Messages. The Vision-framework cutout
              is hard-wired into Apple&apos;s Add Sticker flow. The only way to get a whole-image
              iMessage sticker is to use a different pipeline — a third-party sticker pack app like
              MemePouch.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Why doesn&apos;t Apple expose a setting?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              The whole system stickers drawer is designed around transparent-subject stickers that
              can be dragged onto someone&apos;s message bubble. A whole-image sticker would look
              wrong in that drawer — a rectangle floating on top of another rectangle. Apple&apos;s
              design call is to keep the system drawer cutout-only; whole-image stickers live in
              third-party sticker apps&apos; own drawers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Does MemePouch use any AI / Vision processing on import?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              No. The import path is: read the file → if it&apos;s over the MSSticker 500 KB cap,
              compress (preserving aspect ratio and frame) → write to the app&apos;s on-device
              library. No subject detection, no upscaling, no cloud calls, no analytics.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Will a whole-image sticker still stick onto a message bubble?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Static stickers — yes. They&apos;re real <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">MSSticker</code>{" "}
              objects and you long-press &amp; drag them onto another person&apos;s message exactly
              the way you would an Apple cutout sticker. Animated GIF stickers route through
              Messages attachments and send as their own bubble rather than sticking onto an
              existing one — the trade for not being clamped to 500 KB.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              What about saving a sticker a friend sent me?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              That&apos;s a separate problem with its own dedicated guide:{" "}
              <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
                how to save a sticker someone sent you in iMessage
              </Link>
              . Short version: long-press the sticker, drag it into MemePouch from the app drawer.
              For the system-level reason the built-in Save to Stickers button hangs, see{" "}
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                why iMessage&apos;s Save to Stickers hangs on third-party stickers
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Is there anything else third-party sticker apps can do that Apple&apos;s tool can&apos;t?
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A few things. Animated GIF stickers up to 10 seconds (Apple&apos;s system stickers
              only animate Live-Photo-derived cutouts). Bulk import. A separate library that
              doesn&apos;t pollute the iOS system stickers drawer. Drag-import of third-party
              stickers received in chat (also broken in Apple&apos;s flow). And — the topic of
              this post — keeping the full frame.
            </p>
          </div>
        </div>

        <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Stop letting Apple cut your memes in half
          </h3>
          <p className="text-slate-700 mb-4">
            MemePouch keeps the whole image — text, hands, context, everything. iMessage-native,
            $2.99 one-time unlock after the free 10-sticker tier.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get MemePouch →
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-12">
          <h3 className="text-base font-semibold text-slate-900 mb-3">Related guides</h3>
          <ul className="space-y-2 text-slate-700">
            <li>
              <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 hover:underline">
                How to save a sticker someone sent you in iMessage
              </Link>
            </li>
            <li>
              <Link href="/blog/why-apple-stickers-cannot-be-saved" className="text-blue-600 hover:underline">
                Why iMessage&apos;s Save to Stickers hangs on third-party stickers
              </Link>
            </li>
            <li>
              <Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 hover:underline">
                Turn photos into iMessage stickers
              </Link>
            </li>
            <li>
              <Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 hover:underline">
                Make GIF stickers for iMessage
              </Link>
            </li>
            <li>
              <Link href="/blog/best-imessage-sticker-apps-compared" className="text-blue-600 hover:underline">
                Best iMessage sticker apps compared
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
