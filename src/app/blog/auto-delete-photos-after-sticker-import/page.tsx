import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, SITE_URL, siteUrl } from "../../site";

export const metadata: Metadata = {
  title: "Auto-delete original photos after sticker import (keep your camera roll clean)",
  description:
    "MemePouch's optional Auto-delete setting removes the original meme from Photos once it's safely imported as a sticker — so your camera roll stays photos of your life, not a junk drawer of saved memes. Routes through iOS's Recently Deleted so you have 30 days to undo.",
  alternates: { canonical: "/blog/auto-delete-photos-after-sticker-import" },
};

export default function ArticlePage() {
  const ARTICLE_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Auto-delete original photos after sticker import",
    description:
      "How MemePouch's optional 'Auto-delete originals after import' setting works — what it deletes, what it doesn't, how recovery via Photos Recently Deleted works, and the iCloud / shared library edge cases.",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "MemePouch" },
    publisher: { "@type": "Organization", name: "MemePouch", url: SITE_URL },
    image: siteUrl("/opengraph-image"),
    mainEntityOfPage: siteUrl("/blog/auto-delete-photos-after-sticker-import"),
  };

  const HOWTO_LD = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Enable Auto-delete after import in MemePouch",
    totalTime: "PT1M",
    tool: [
      { "@type": "HowToTool", name: "iPhone running iOS 16 or later" },
      { "@type": "HowToTool", name: "MemePouch (free for first 10 stickers)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Open Settings",
        text: "In MemePouch, tap the gear icon to open Settings.",
      },
      {
        "@type": "HowToStep",
        name: "Toggle Auto-delete after import",
        text: "Flip the 'Auto-delete originals after import' switch on.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm iOS permission prompt",
        text: "The first time you import after enabling, iOS asks for explicit confirmation to delete photos. Tap Delete. (This prompt happens for every import — Apple does not allow apps to suppress it.)",
      },
      {
        "@type": "HowToStep",
        name: "Verify in Photos Recently Deleted",
        text: "Open Photos → Albums → Recently Deleted. Imported originals land here and stay for 30 days, giving you plenty of time to recover anything you wanted to keep.",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Auto-delete permanently destroy my photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. MemePouch uses the standard iOS PHAssetChangeRequest.deleteAssets API, which sends the photo to Photos' Recently Deleted album for 30 days. You can recover anything you change your mind about — just open Photos → Albums → Recently Deleted and tap Recover.",
        },
      },
      {
        "@type": "Question",
        name: "What gets deleted, what doesn't?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only photos imported through the PhotosPicker (the 'Import from Photos' flow) are eligible. Images pasted from the clipboard, dragged in from another app, received through the Share Sheet, or saved from an iMessage drag-import are not in Photos in the first place, so there's nothing to delete. Auto-delete also skips assets you don't own (read-only iCloud Shared Library items, etc.).",
        },
      },
      {
        "@type": "Question",
        name: "Why does iOS show a confirmation prompt every time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple requires user confirmation for every PHAssetChangeRequest that deletes user content. No third-party app can suppress this prompt — it's a privacy guardrail. MemePouch surfaces a toast after each import telling you exactly what happened: deleted / cancelled / no permission / off.",
        },
      },
      {
        "@type": "Question",
        name: "Can I turn Auto-delete off after enabling it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, anytime — Settings → toggle off. Future imports won't trigger the delete prompt. Photos already moved to Recently Deleted earlier are unaffected by the toggle change.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work with iCloud Photos / Shared Library / synced photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "iCloud Photos: yes, the delete propagates to your other Apple devices and to iCloud (Apple's 30-day grace period still applies). Shared Library items you don't own (someone else added to a shared library): no, Apple's API correctly refuses; the toast shows 'no permission' and the original is left alone.",
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
        Auto-delete original photos after sticker import
      </h1>
      <p className="text-sm text-slate-500 mb-8 not-prose">Last updated 2026-05-20 · iOS 16+</p>

      <p className="text-lg text-slate-700 leading-relaxed">
        Heavy meme users hit the same wall: after a few months of saving funny screenshots to
        Photos so a sticker app can find them, the camera roll is a junk drawer. Family photos
        sit between cropped Twitter reactions and out-of-context screenshots of reaction GIFs.
        MemePouch&apos;s optional <strong>Auto-delete originals after import</strong> setting
        fixes this by deleting each meme from Photos the moment it&apos;s safely a sticker.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        Why it exists
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Stickers are the destination, not the source. Once a meme is a sticker in MemePouch&apos;s
        library, the original photo has served its purpose — keeping it in Photos is pure
        clutter unless you have a separate reason to. The setting is off by default (we
        don&apos;t want to surprise anyone), but for users who&apos;ve already invested in a
        50–200 sticker library, it&apos;s usually the first thing they enable.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        How to enable it
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Open MemePouch → tap the gear icon → flip <strong>Auto-delete originals after
        import</strong> on. The next time you import via the PhotosPicker, iOS shows a
        confirmation sheet asking permission to delete the source photo(s). Tap Delete and
        the originals move to Recently Deleted.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        It&apos;s a soft delete — Recently Deleted holds 30 days
      </h2>
      <p className="text-slate-700 leading-relaxed">
        MemePouch uses the standard{" "}
        <code className="text-sm bg-slate-100 px-1 rounded">PHAssetChangeRequest.deleteAssets</code>{" "}
        API. Photos are <em>not</em> hard-deleted — they go to Photos → Albums → Recently
        Deleted and stay there 30 days. Changed your mind? Open Recently Deleted, tap Recover,
        the photo&apos;s back in your library. This is the same behavior as deleting a photo
        from Photos manually. It is impossible for MemePouch (or any third-party app) to
        bypass that grace period.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        What it deletes, what it doesn&apos;t
      </h2>
      <p className="text-slate-700 leading-relaxed">
        Only photos that came through the <strong>PhotosPicker</strong> (the
        &quot;Import from Photos&quot; / &quot;Turn a Live Photo into a GIF&quot; / &quot;Turn
        a video into a GIF&quot; flows) are eligible. The reason: MemePouch only has a delete
        handle for assets it pulled from Photos. Images you brought in via clipboard paste,
        the Share Sheet, drag-and-drop from another app, or drag-import from iMessage{" "}
        <strong>were never in Photos to begin with</strong> — there&apos;s nothing to delete.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Assets you don&apos;t own — typically iCloud Shared Library items added by someone
        else — are correctly skipped by iOS&apos;s permission layer; you&apos;ll see a
        &quot;no permission&quot; toast and the original is untouched.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        The toast feedback after every import
      </h2>
      <p className="text-slate-700 leading-relaxed">
        After each import you get a toast saying what happened to the source: <em>deleted</em>{" "}
        (you confirmed), <em>cancelled</em> (you tapped Don&apos;t Allow on the iOS prompt),{" "}
        <em>no permission</em> (the asset wasn&apos;t deletable), or <em>off</em> (the setting
        isn&apos;t enabled). No silent behavior — you always know exactly what state your
        Photos library is in.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900 not-prose">
        iCloud Photos
      </h2>
      <p className="text-slate-700 leading-relaxed">
        If iCloud Photos is on, the delete propagates to all your Apple devices and to iCloud
        itself. Apple&apos;s own 30-day grace period covers the iCloud copy too — the photo
        stays in Recently Deleted on every device until that window closes.
      </p>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">Keep your camera roll clean — try Auto-delete in MemePouch.</p>
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
          <li><Link href="/blog/import-stickers-five-ways" className="text-blue-600 hover:underline">5 ways to add a sticker to MemePouch</Link></li>
          <li><Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 hover:underline">How to turn photos into iMessage stickers</Link></li>
          <li><Link href="/blog/organize-imessage-sticker-library" className="text-blue-600 hover:underline">How to organize your iMessage sticker library</Link></li>
        </ul>
      </div>
    </main>
  );
}
