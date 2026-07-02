import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL } from "../site";

export const metadata: Metadata = {
  title: "MemePouch vs other iMessage sticker apps — honest comparison",
  description:
    "How MemePouch compares to Apple's built-in cutout, Sticker.ly (subscription, cross-platform), Sticker Maker Studio (free, pack-based), and other iMessage-native sticker apps. Written by the developer — honest about what MemePouch is for and what it isn't.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  const COMPARE_LD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "iMessage sticker apps compared",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "MemePouch",
        operatingSystem: "iOS",
        applicationCategory: "UtilitiesApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "One-time unlock, no subscription",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "Apple Photos built-in sticker cutout (iOS 17+)",
        operatingSystem: "iOS",
        applicationCategory: "UtilitiesApplication",
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Sticker.ly",
        operatingSystem: "iOS",
        applicationCategory: "UtilitiesApplication",
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Sticker Maker Studio",
        operatingSystem: "iOS",
        applicationCategory: "UtilitiesApplication",
      },
      {
        "@type": "SoftwareApplication",
        position: 5,
        name: "Other iMessage-native sticker pack apps",
        operatingSystem: "iOS",
        applicationCategory: "UtilitiesApplication",
      },
    ],
  };

  const FAQ_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is MemePouch better than Apple's built-in sticker maker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the use case. Apple Photos' long-press cutout is free, fast, and good for clean selfies and pet photos where you want a transparent subject. MemePouch is better when you want the WHOLE image (memes where the caption or context is the joke), GIF stickers from videos or Live Photos, or when you want to save a sticker a friend sent you in iMessage (Apple's Save to Stickers button hangs on third-party stickers; MemePouch's drag flow is the working alternative).",
        },
      },
      {
        "@type": "Question",
        name: "Should I use MemePouch or Sticker.ly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sticker.ly is a subscription app (with a trial that requires a card on file) built around social discovery, verified profiles, AI sticker generation, and WhatsApp pack publishing. It does claim iMessage sticker support on its PLUS page, but it's not built around the 'save the sticker a friend sent you in iMessage' workflow. Pick Sticker.ly if you want a sticker community, AI-assisted creation, and cross-platform pack sharing — and don't mind a subscription. Pick MemePouch if you want a private library on iMessage with no subscription, no community feed, and the drag-import flow for saving friends' stickers.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use MemePouch or Sticker Maker Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sticker Maker Studio (by Tamara Vardanyan) is free and built around a pack-based workflow: name a pack, add stickers, then add the pack to WhatsApp or iMessage. It supports community pack sharing and has background removal built in. Pick Sticker Maker Studio if you want free pack export to WhatsApp and don't mind organizing stickers into named packs. Pick MemePouch if you want a single library-first grid (no pack ceremony), no community feed, and the drag-import flow for saving friends' iMessage stickers — Sticker Maker Studio doesn't document that workflow.",
        },
      },
      {
        "@type": "Question",
        name: "Why is MemePouch one-time price instead of subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MemePouch is built by a solo developer who chose a one-time unlock instead of a subscription. There's no recurring fee, no ads, and no tier upsell. Sticker.ly subscription-bills the features it considers premium (smart search, exclusive stickers, AI creation, watermark removal) — MemePouch's whole-image library-first approach doesn't need any of those, so there's nothing to gate.",
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPARE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <h1 className="text-4xl font-bold mb-3 text-ink">
        MemePouch vs other iMessage sticker apps
      </h1>
      <p className="text-sm text-ink-faint mb-8">Honest comparison · Last updated 2026-05-19</p>

      <p className="text-lg text-ink-soft mb-6 leading-relaxed">
        Most sticker-app comparison pages exist to sell you something. This one is written by the
        developer of MemePouch. I&apos;ll tell you where MemePouch wins, where another app is a
        better fit, and what MemePouch deliberately doesn&apos;t do.
      </p>

      <aside className="my-10 p-6 bg-cream border border-line rounded-2xl text-ink-soft">
        <p className="text-sm uppercase tracking-wider text-ink-faint font-semibold mb-2">In one line</p>
        <p className="text-base leading-relaxed">
          <strong>MemePouch is iMessage-only and library-first.</strong> One shared sticker
          grid (no pack ceremony), private library (no community feed), one-time unlock (no
          subscription), and one of the few iMessage sticker apps that wires up both drag
          flows for saving the stickers your friends send you. The whole-frame import (no
          auto-cutout) sets MemePouch apart from Apple&apos;s built-in tool; against other
          sticker apps the bigger differences are <em>workflow shape</em> and{" "}
          <em>what the app is built around</em>. If you primarily chat on WhatsApp or Telegram,
          or you want a sticker community, MemePouch is not the right app — pick a
          cross-platform sticker maker (Sticker.ly or Sticker Maker Studio) instead.
        </p>
      </aside>

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-ink">
        Quick feature comparison
      </h2>
      <div className="overflow-x-auto mb-16 rounded-2xl border border-line bg-cream shadow-sticker">
        <table className="w-full text-left border-collapse text-sm min-w-[920px]">
          <thead>
            <tr className="border-b-2 border-line">
              <th className="py-3 px-3 font-semibold text-ink bg-cream">Feature</th>
              <th className="py-3 px-3 font-bold text-pouch-deep bg-pouch/8 border-x border-line">MemePouch</th>
              <th className="py-3 px-3 font-semibold text-ink-soft">Apple built-in<sup className="text-ink-faint text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-ink-soft">Sticker.ly<sup className="text-ink-faint text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-ink-soft">Sticker Maker Studio<sup className="text-ink-faint text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-ink-soft">Other iMessage-native<sup className="text-ink-faint text-[10px] font-normal ml-0.5">[1]</sup></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line [&>tr]:transition-colors [&>tr:hover]:bg-white/80">
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Whole frame is the default (no cutout required)</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">✓ Whole frame, every time (no cutout UI anywhere)</td>
              <td className="py-3 px-3 text-berry">✗ Auto-cuts subject</td>
              <td className="py-3 px-3 text-berry">Auto Cut documented as the default flow<sup className="text-ink-faint text-[10px] font-normal ml-0.5">[2]</sup></td>
              <td className="py-3 px-3 text-emerald-600">✓ Whole frame on import; cutout is optional</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Saves friends&apos; iMessage stickers (drag flow)</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">✓ Two-finger + single-finger</td>
              <td className="py-3 px-3 text-berry">✗ Save button hangs</td>
              <td className="py-3 px-3 text-berry">Not a documented feature</td>
              <td className="py-3 px-3 text-berry">Not a documented feature</td>
              <td className="py-3 px-3 text-ink-faint">Rare</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Library-first vs pack-based workflow</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">Library-first (one grid)</td>
              <td className="py-3 px-3 text-ink-faint">Photos integration</td>
              <td className="py-3 px-3 text-berry">Pack + community feed</td>
              <td className="py-3 px-3 text-berry">Pack-based (name a pack first)</td>
              <td className="py-3 px-3 text-ink-faint">Typically pack-based</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Video / Live Photo → GIF sticker</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">✓ Up to 10 s, 10 MB</td>
              <td className="py-3 px-3 text-berry">Live Photo only, system-compressed</td>
              <td className="py-3 px-3 text-emerald-600">✓ Supported (with cutout)</td>
              <td className="py-3 px-3 text-emerald-600">✓ Supported</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Static stickers attach to message bubbles</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">✓ MSSticker route</td>
              <td className="py-3 px-3 text-emerald-600">✓ Native</td>
              <td className="py-3 px-3 text-ink-faint">Claimed (PLUS tier)</td>
              <td className="py-3 px-3 text-emerald-600">Pack → iMessage</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Auto-collapse keyboard after tap-to-send</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">✓ Yes</td>
              <td className="py-3 px-3 text-ink-faint">N/A</td>
              <td className="py-3 px-3 text-berry">✗ Stays open</td>
              <td className="py-3 px-3 text-berry">✗ Stays open</td>
              <td className="py-3 px-3 text-berry">✗ Stays open</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Community / social discovery</td>
              <td className="py-3 px-3 text-ink-faint bg-pouch/8 border-x border-line">None (private library)</td>
              <td className="py-3 px-3 text-ink-faint">N/A</td>
              <td className="py-3 px-3 text-ink-faint">Profiles, verified badges, packs</td>
              <td className="py-3 px-3 text-ink-faint">Community pack sharing</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">WhatsApp / Telegram export</td>
              <td className="py-3 px-3 text-berry bg-pouch/8 border-x border-line">✗ iMessage-only by design</td>
              <td className="py-3 px-3 text-ink-faint">N/A</td>
              <td className="py-3 px-3 text-emerald-600 font-semibold">✓ Core flow</td>
              <td className="py-3 px-3 text-emerald-600 font-semibold">✓ Core flow</td>
              <td className="py-3 px-3 text-berry">✗ No</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Pricing</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">One-time unlock, no ads</td>
              <td className="py-3 px-3 text-emerald-600">Free</td>
              <td className="py-3 px-3 text-berry">Subscription (trial requires card)</td>
              <td className="py-3 px-3 text-emerald-600">Free (App Store shows Free)</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-ink font-medium">Free tier</td>
              <td className="py-3 px-3 text-emerald-700 bg-pouch/8 border-x border-line font-semibold">Free to try</td>
              <td className="py-3 px-3 text-emerald-600">Unlimited (free)</td>
              <td className="py-3 px-3 text-berry">Free tier limited; core features behind PLUS</td>
              <td className="py-3 px-3 text-emerald-600">Free</td>
              <td className="py-3 px-3 text-ink-faint">Varies</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-ink-faint mt-3 leading-relaxed">
          <sup>[1]</sup> Competitor descriptions reflect their App Store listings, in-app PLUS
          pages, and hands-on use where possible, as of 2026-05.{" "}
          <sup>[2]</sup> Sticker.ly&apos;s PLUS subscription requires a card-on-file 3-day trial
          to access, so we describe Sticker.ly&apos;s cutout flow based on its public App Store
          documentation (&quot;cut out stickers from your photos&quot;, &quot;Auto Cut
          technology&quot;, &quot;image segmentation by SenseTime&quot;) rather than personal
          hands-on use. Sticker apps update frequently; if a row is wrong or out of date, please
          email{" "}
          <a href="mailto:memepouch@tetherme.app" className="underline hover:text-ink-soft">memepouch@tetherme.app</a>{" "}
          and we&apos;ll fix it.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-ink">
            MemePouch vs Apple Photos built-in cutout
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Apple&apos;s long-press &quot;lift subject&quot; from Photos (iOS 16+) and the system
            Stickers drawer (iOS 17+) are <strong>free, fast, and well-integrated</strong>. For
            single-subject photos of a person or pet against a simple background, it&apos;s often
            the right tool. Use it for those cases.
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            <strong>Where it breaks:</strong> meme screenshots with text overlays (the caption
            gets clipped), multi-subject reactions (it picks the wrong subject), iMessage-bubble
            screenshots where the chat UI is the joke (it removes the context), and animated
            content beyond a single Live Photo. There is no setting to disable the cutout — you
            either get the auto-extracted subject or you don&apos;t make a sticker.
          </p>
          <p className="text-ink-soft leading-relaxed">
            MemePouch&apos;s approach is the opposite: <strong>whole frame is the default — no
            cutout step at all.</strong> Import a photo, GIF, video, or Live Photo and the whole
            frame becomes a sticker. Read more in{" "}
            <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-pouch hover:underline">
              the screenshots guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-ink">
            MemePouch vs Sticker.ly
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            <a
              href="https://apps.apple.com/app/id1458740001"
              target="_blank"
              rel="noopener"
              className="text-pouch hover:underline"
            >
              Sticker.ly
            </a>{" "}
            (by NAVER Z Corporation) is a <strong>subscription</strong> sticker app,
            with a trial that requires a card on file. The
            product is built around social discovery: search, verified profiles, exclusive
            sticker packs, GIPHY integration, AI sticker generation, and WhatsApp pack
            publishing. Sticker creation runs through an <strong>Auto Cut</strong> pipeline
            (image segmentation by SenseTime) — the documented flow is &quot;select photo →
            auto-cut subject → caption → export.&quot; Its PLUS page does claim iMessage sticker
            support (&quot;Send stickers on iMessage or stick them on bubbles&quot;), but
            Sticker.ly isn&apos;t designed around the &quot;save the sticker a friend just sent
            you in iMessage&quot; workflow.
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            <strong>Pick Sticker.ly if:</strong> you want a sticker community, AI-assisted
            creation, GIPHY browsing, and cross-platform pack sharing — and you&apos;re comfortable
            with a subscription and a card-on-file 3-day trial.
          </p>
          <p className="text-ink-soft leading-relaxed">
            <strong>Pick MemePouch if:</strong> you want a private iMessage-only library, no
            subscription, no community feed, and the drag-import flow to save the stickers your
            friends send you in iMessage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-ink">
            MemePouch vs Sticker Maker Studio
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            <a
              href="https://apps.apple.com/app/id1443326857"
              target="_blank"
              rel="noopener"
              className="text-pouch hover:underline"
            >
              Sticker Maker Studio
            </a>{" "}
            (by Tamara Vardanyan) is a <strong>free</strong>, long-running sticker-creation
            utility. Its flow is <em>pack-based</em>: name a pack first, add stickers to that
            pack, then add the whole pack to WhatsApp, iMessage, or other messengers. In recent
            versions Sticker Maker Studio defaults to importing the whole frame (cutout is an
            optional manual step), so &quot;whole-image sticker&quot; isn&apos;t a feature that
            sets MemePouch apart from it — the real differences are <strong>workflow
            shape</strong> and <strong>what each app is built around</strong>.
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            <strong>Pick Sticker Maker Studio if:</strong> you want a free way to build named
            sticker packs for WhatsApp; you like browsing community packs other people built;
            and you don&apos;t mind naming and organizing each pack before adding stickers to it.
          </p>
          <p className="text-ink-soft leading-relaxed">
            <strong>Pick MemePouch if:</strong> you want a{" "}
            <strong>single library-first grid</strong> instead of named packs (every sticker you
            import lands in one shared library with no pack ceremony), a <strong>private</strong>{" "}
            library (no community feed, no profile, no shared discovery), and the drag-import
            flow for <strong>saving stickers your friends send you in iMessage</strong> —
            something Sticker Maker Studio doesn&apos;t document.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-ink">
            MemePouch vs other iMessage-native sticker apps
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            A handful of other apps ship with native iMessage sticker browsers using Apple&apos;s{" "}
            <code className="text-sm bg-slate-100 px-1 rounded">MSStickerBrowserView</code>. They
            generally do one thing well — shipping a pre-made themed sticker pack — but most lack
            the two things MemePouch is built around:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-ink-soft leading-relaxed">
            <li>
              <strong>Saving stickers friends send you.</strong> Apple&apos;s
              <code className="text-sm bg-slate-100 px-1 rounded mx-1">UIDropInteraction</code>{" "}
              API has been on iOS since 2017, but most iMessage sticker apps were shipped before
              Apple normalized dragging stickers out of chat bubbles and never wired up a drop
              target. MemePouch did — that&apos;s the headline feature.
            </li>
            <li>
              <strong>Whole-image content imported from your library.</strong> Most are pre-made
              pack apps, not user-content tools. MemePouch is library-first: photos, GIFs, videos,
              Live Photos, screenshots — anything you have becomes a sticker.
            </li>
            <li>
              <strong>Auto-collapse after send.</strong> Most sticker keyboards stay open after a
              tap. MemePouch&apos;s extension closes itself, so the chat is visible immediately.
            </li>
          </ul>
          <p className="text-ink-soft leading-relaxed">
            For a deeper category breakdown, see{" "}
            <Link href="/blog/best-imessage-sticker-apps-compared" className="text-pouch hover:underline">
              the longer comparison article
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-ink">
            What MemePouch deliberately doesn&apos;t do
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-ink-soft leading-relaxed">
            <li>
              <strong>No automatic background removal.</strong> Use Apple Photos&apos; built-in
              cutout (free) before importing if you want a transparent subject.
            </li>
            <li>
              <strong>No cross-platform export.</strong> iMessage-only by design. If you primarily
              chat on WhatsApp / Telegram, pick a different app.
            </li>
            <li>
              <strong>No social discovery / pack store.</strong> Your sticker library is private
              to your device.
            </li>
            <li>
              <strong>No subscription tier.</strong> One-time unlock, that&apos;s it.
            </li>
            <li>
              <strong>No cloud sync.</strong> Everything stays on your iPhone. No accounts, no
              servers, no analytics.
            </li>
          </ul>
        </section>
      </div>

      <div className="not-prose mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-xl font-bold mb-1">If you primarily chat in iMessage, give MemePouch a try.</p>
          <p className="text-ink-faint text-sm">Free to try. One-time unlock for unlimited — no subscription.</p>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-md hover:bg-slate-100 transition self-start sm:self-auto whitespace-nowrap"
        >
          Download MemePouch →
        </a>
      </div>

      <div className="mt-12 pt-6 border-t border-line text-xs text-ink-faint leading-relaxed space-y-2">
        <p>
          <strong className="text-ink-soft">Trademarks &amp; comparison disclosure.</strong>{" "}
          Sticker.ly is a trademark of NAVER Z Corporation. Sticker Maker Studio is a product of
          Tamara Vardanyan. Apple, iMessage, iOS, iPhone, and related marks are trademarks of
          Apple Inc. MemePouch is not affiliated with, sponsored by, or endorsed by NAVER Z
          Corporation, Tamara Vardanyan, or Apple Inc. This comparison reflects publicly
          available App Store descriptions, official developer documentation, and hands-on use
          as of 2026-05-19; sticker apps update frequently, so verify pricing and features in
          each app&apos;s App Store listing before deciding. If you believe any statement here
          is inaccurate, please email{" "}
          <a href="mailto:memepouch@tetherme.app" className="underline hover:text-ink-soft">memepouch@tetherme.app</a>{" "}
          and we&apos;ll review and correct it within one business day.
        </p>
      </div>
    </div>
  );
}
