import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MemePouch FAQ - How to make custom stickers for iMessage",
  description:
    "Frequently asked questions about MemePouch: how to import stickers, how to save stickers others send you, supported formats, and pricing.",
  alternates: { canonical: "/faq" },
};

const QA = [
  {
    q: "How do I make custom stickers for iMessage?",
    a: "Open MemePouch, tap Import from Photos, pick a photo, GIF, or short video, and it becomes a reusable custom sticker in your iMessage sticker drawer.",
  },
  {
    q: "Does MemePouch remove the background like Apple's built-in sticker tool?",
    a: "No — MemePouch keeps the framing and content exactly as you import it, with no background removal and no subject detection. iOS 17+'s built-in Add Sticker feature runs Apple's foreground-object detection and auto-cuts what it thinks is the main subject; for memes with text overlays, reaction faces, hands, or intentional backgrounds, that detection often removes the context you wanted to keep. MemePouch imports the full frame — photo, GIF, or short video — and registers it as a regular iMessage sticker; static stickers may be auto-compressed to fit Apple's 500 KB MSSticker cap, but framing and content stay intact, so what you import is what your friends see.",
  },
  {
    q: "How do I save a sticker someone sent me in iMessage?",
    a: "iOS 17+ shows a Save to Stickers button in the Emoji Details view, but tapping it on third-party stickers hangs — Apple's system sticker daemon drops the connection and the sticker never lands in your sticker drawer. The reliable path is a drag gesture into MemePouch: long-press the sticker in the chat and keep your finger held down. With another finger, tap the MemePouch icon in the iMessage app drawer to open it, then drag the sticker into the MemePouch grid and release. If MemePouch is already open in the drawer below the chat, you can drag straight down with one finger.",
  },
  {
    q: "Can I make an animated sticker from a video?",
    a: "Yes. Tap Turn a video into a GIF, pick a clip, trim up to 10 seconds, and MemePouch saves it as a GIF sticker. GIFs send as full-quality iMessage attachments (no 500 KB cap).",
  },
  {
    q: "Does MemePouch work on iPad?",
    a: "MemePouch is iPhone-first. The iMessage extension itself runs on iPad, but the main app UI is designed for portrait iPhone.",
  },
  {
    q: "Is MemePouch free?",
    a: "Yes, with a 5-sticker free tier. A one-time in-app purchase unlocks unlimited stickers permanently — no subscription.",
  },
  {
    q: "Does MemePouch upload my photos anywhere?",
    a: "No. Everything stays on your device in an App Group container shared between the main app and the iMessage extension. There are no servers and no accounts.",
  },
  {
    q: "What image formats does MemePouch support?",
    a: "PNG, JPEG, and GIF. HEIC photos from your iPhone are auto-converted on import.",
  },
  {
    q: "How big can a sticker file be?",
    a: "Static stickers go through Apple's MSSticker API and have a 500 KB cap — MemePouch auto-compresses to fit. GIF stickers in MemePouch route through Messages attachments instead, so they're not subject to the 500 KB cap and can be up to 10 MB. The trade: GIFs send as their own bubble in the chat, while static stickers can still stick onto someone's message bubble like Apple's system stickers.",
  },
  {
    q: "Can I import multiple photos at once?",
    a: "Yes. The Photos picker lets you select up to 30 images or GIFs at a time, in any order, and they're imported into your sticker library preserving the selection order. Each one goes through the same dedup + auto-compress pipeline as a single import.",
  },
  {
    q: "Can I make a GIF from the entire video instead of trimming?",
    a: "Yes. In the trim view, tap Use whole clip to expand the trim to the full length of the imported clip (capped at MemePouch's 10-second maximum) in one tap. The button only appears when the trim isn't already full, so the UI stays clean when you do want to shorten a longer video.",
  },
  {
    q: "Can I turn a Live Photo into a sticker in one tap?",
    a: "Yes. The Live Photo flow gives you two choices: Save GIF now (skip the trim view, ship the full motion as a GIF immediately) or Trim before saving (open the trim + Smart loop pipeline for fine control). MemePouch sets the iCloud network-access flag, so Live Photos that live only in iCloud still convert.",
  },
  {
    q: "Can I share an image from Safari, Files, or another app into MemePouch?",
    a: "Yes. MemePouch installs an iOS Share Sheet extension. From Safari, Files, Photos, WhatsApp, Mail, or any app with the standard Share button, tap Share → MemePouch. Static images import straight into your sticker library. If you share a video, MemePouch hands it off to the main app and opens the trim view directly so you can turn it into a GIF sticker.",
  },
  {
    q: "How do I restore my MemePouch purchase on a new iPhone?",
    a: "Open MemePouch → Settings → Restore Purchase. As long as you're signed into the same Apple ID that bought the unlock, the app re-verifies the entitlement through StoreKit and immediately removes the 5-sticker limit. No account, no email, no extra steps.",
  },
  {
    q: "How does MemePouch decide the order my stickers appear in?",
    a: "Your library sorts itself by how often you actually use each sticker — the ones you send the most rise to the top automatically, so your go-to reactions stay within thumb's reach. Old favorites you haven't sent in weeks slowly fade down without disappearing. Just imported something new? It stays at the top for 24 hours so it's easy to find. It all happens invisibly — there's no setting to fiddle with and no 'frequently used' tab to switch into. The same order shows up in both the main app and the iMessage drawer. Want a few stickers locked to the very front regardless of usage? Long-press and Pin to Top — pinned stickers always sit above the auto-sorted ones.",
  },
  {
    q: "Can I change MemePouch's language? Does it support Chinese?",
    a: "Yes. Open Settings → Language and choose System (follow iOS), English, 简体中文, or 繁體中文. The choice is written into the App Group container so both the main app and the iMessage extension switch together — no relaunch needed.",
  },
  {
    q: "Does MemePouch support dark mode?",
    a: "Yes. Settings → Appearance lets you pick Follow System, Light, or Dark. The setting applies to both the main app and the iMessage extension drawer.",
  },
  {
    q: "Does the iMessage drawer stay open after I send a sticker?",
    a: "No — MemePouch auto-collapses the keyboard back to compact mode the moment you tap a sticker, so the chat field is immediately usable. Most older iMessage sticker apps leave the keyboard expanded, blocking the chat; MemePouch closes itself, which is a small but constant UX win.",
  },
  {
    q: "Can I drop an image from another app (Safari, Files, etc.) onto MemePouch's home screen?",
    a: "Yes. In Stage Manager or split view on iPad, or with the iOS multi-touch drag gesture on iPhone, drag any image onto the MemePouch home screen — a dashed-blue highlight appears confirming the drop target. The image imports into your library. This is the main-app drop target, separate from the iMessage extension's drop target (which is for saving stickers your friends send you).",
  },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4">
        Frequently asked questions
      </h1>
      <p className="text-lg text-ink-soft mb-12">
        Everything about importing, saving, formats, and pricing — straight answers, no fluff.
      </p>
      <div className="space-y-4">
        {QA.map(({ q, a }, i) => (
          <details
            key={q}
            data-reveal
            style={{ "--reveal-delay": `${Math.min(i, 6) * 0.04}s` } as React.CSSProperties}
            className="pouch-card group px-7 py-5 open:shadow-lifted transition-shadow"
          >
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-start justify-between gap-4 font-bold text-ink text-lg leading-snug">
              <h2 className="text-lg font-bold">{q}</h2>
              <span
                className="text-ink-faint text-2xl leading-none group-open:rotate-45 transition-transform shrink-0 mt-0.5"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-ink-soft leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
