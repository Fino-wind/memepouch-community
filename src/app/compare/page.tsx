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
          price: "2.99",
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
          text: "Sticker.ly is a subscription app (~$0.80/week or $41.99/year, with a 3-day trial that requires a card on file) built around social discovery, verified profiles, AI sticker generation, and WhatsApp pack publishing. It does claim iMessage sticker support on its PLUS page, but it's not built around the 'save the sticker a friend sent you in iMessage' workflow. Pick Sticker.ly if you want a sticker community, AI-assisted creation, and cross-platform pack sharing — and don't mind a subscription. Pick MemePouch if you want a private library on iMessage with no subscription, no community feed, and the drag-import flow for saving friends' stickers.",
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
          text: "MemePouch is built by a solo developer who chose a $2.99 one-time unlock instead of a subscription. There's no recurring fee, no ads, and no tier upsell. Sticker.ly subscription-bills the features it considers premium (smart search, exclusive stickers, AI creation, watermark removal) — MemePouch's whole-image library-first approach doesn't need any of those, so there's nothing to gate.",
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPARE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      <h1 className="text-4xl font-bold mb-3 text-slate-900">
        MemePouch vs other iMessage sticker apps
      </h1>
      <p className="text-sm text-slate-500 mb-8">Honest comparison · Last updated 2026-05-19</p>

      <p className="text-lg text-slate-700 mb-6 leading-relaxed">
        Most sticker-app comparison pages exist to sell you something. This one is written by the
        developer of MemePouch. I&apos;ll tell you where MemePouch wins, where another app is a
        better fit, and what MemePouch deliberately doesn&apos;t do.
      </p>

      <aside className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700">
        <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">In one line</p>
        <p className="text-base leading-relaxed">
          <strong>MemePouch is iMessage-only and library-first.</strong> Whole-image stickers
          (no auto-cutout), one-time $2.99 (no subscription), one shared sticker grid (no pack
          ceremony), and one of the few iMessage sticker apps that wires up both drag flows for
          saving stickers your friends send you. If you primarily chat on WhatsApp or Telegram,
          or you want a sticker community, MemePouch is not the right app — pick a
          cross-platform sticker maker (Sticker.ly or Sticker Maker Studio) instead.
        </p>
      </aside>

      <h2 className="text-2xl font-semibold mt-12 mb-6 text-slate-900">
        Quick feature comparison
      </h2>
      <div className="overflow-x-auto mb-16">
        <table className="w-full text-left border-collapse text-sm min-w-[920px]">
          <thead>
            <tr className="border-b-2 border-slate-300">
              <th className="py-3 px-3 font-semibold text-slate-900 bg-slate-50">Feature</th>
              <th className="py-3 px-3 font-bold text-blue-700 bg-blue-50 border-x border-slate-200">MemePouch</th>
              <th className="py-3 px-3 font-semibold text-slate-700">Apple built-in<sup className="text-slate-400 text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-slate-700">Sticker.ly<sup className="text-slate-400 text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-slate-700">Sticker Maker Studio<sup className="text-slate-400 text-[10px] font-normal ml-0.5">[1]</sup></th>
              <th className="py-3 px-3 font-semibold text-slate-700">Other iMessage-native<sup className="text-slate-400 text-[10px] font-normal ml-0.5">[1]</sup></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Keeps the whole image (no auto-cutout)</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">✓ By design</td>
              <td className="py-3 px-3 text-rose-600">✗ Auto-cuts subject</td>
              <td className="py-3 px-3 text-rose-600">Remove-background is PLUS feature</td>
              <td className="py-3 px-3 text-rose-600">Has background removal</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Saves friends&apos; iMessage stickers (drag flow)</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">✓ Two-finger + single-finger</td>
              <td className="py-3 px-3 text-rose-600">✗ Save button hangs</td>
              <td className="py-3 px-3 text-rose-600">Not a documented feature</td>
              <td className="py-3 px-3 text-rose-600">Not a documented feature</td>
              <td className="py-3 px-3 text-slate-500">Rare</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Library-first vs pack-based workflow</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">Library-first (one grid)</td>
              <td className="py-3 px-3 text-slate-500">Photos integration</td>
              <td className="py-3 px-3 text-rose-600">Pack + community feed</td>
              <td className="py-3 px-3 text-rose-600">Pack-based (name a pack first)</td>
              <td className="py-3 px-3 text-slate-500">Typically pack-based</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Video / Live Photo → GIF sticker</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">✓ Up to 10 s, 10 MB</td>
              <td className="py-3 px-3 text-rose-600">Live Photo only, system-compressed</td>
              <td className="py-3 px-3 text-emerald-600">✓ Supported (with cutout)</td>
              <td className="py-3 px-3 text-emerald-600">✓ Supported</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Static stickers attach to message bubbles</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">✓ MSSticker route</td>
              <td className="py-3 px-3 text-emerald-600">✓ Native</td>
              <td className="py-3 px-3 text-slate-500">Claimed (PLUS tier)</td>
              <td className="py-3 px-3 text-emerald-600">Pack → iMessage</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Auto-collapse keyboard after tap-to-send</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">✓ Yes</td>
              <td className="py-3 px-3 text-slate-500">N/A</td>
              <td className="py-3 px-3 text-rose-600">✗ Stays open</td>
              <td className="py-3 px-3 text-rose-600">✗ Stays open</td>
              <td className="py-3 px-3 text-rose-600">✗ Stays open</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Community / social discovery</td>
              <td className="py-3 px-3 text-slate-500 bg-blue-50 border-x border-slate-200">None (private library)</td>
              <td className="py-3 px-3 text-slate-500">N/A</td>
              <td className="py-3 px-3 text-slate-500">Profiles, verified badges, packs</td>
              <td className="py-3 px-3 text-slate-500">Community pack sharing</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">WhatsApp / Telegram export</td>
              <td className="py-3 px-3 text-rose-600 bg-blue-50 border-x border-slate-200">✗ iMessage-only by design</td>
              <td className="py-3 px-3 text-slate-500">N/A</td>
              <td className="py-3 px-3 text-emerald-600 font-semibold">✓ Core flow</td>
              <td className="py-3 px-3 text-emerald-600 font-semibold">✓ Core flow</td>
              <td className="py-3 px-3 text-rose-600">✗ No</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Pricing</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">$2.99 one-time, no ads</td>
              <td className="py-3 px-3 text-emerald-600">Free</td>
              <td className="py-3 px-3 text-rose-600">Subscription (~$0.80/wk or $41.99/yr; 3-day trial requires card)</td>
              <td className="py-3 px-3 text-emerald-600">Free (App Store shows Free)</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-900 font-medium">Free tier</td>
              <td className="py-3 px-3 text-emerald-700 bg-blue-50 border-x border-slate-200 font-semibold">10 stickers free</td>
              <td className="py-3 px-3 text-emerald-600">Unlimited (free)</td>
              <td className="py-3 px-3 text-rose-600">Free tier limited; core features behind PLUS</td>
              <td className="py-3 px-3 text-emerald-600">Free</td>
              <td className="py-3 px-3 text-slate-500">Varies</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
          <sup>[1]</sup> Competitor descriptions reflect their App Store listings, in-app PLUS
          pages, and reported behavior as of 2026-05. Sticker apps update frequently; if a row is
          wrong or out of date, please email{" "}
          <a href="mailto:memepouch@tetherme.app" className="underline hover:text-slate-700">memepouch@tetherme.app</a>{" "}
          and we&apos;ll fix it.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            MemePouch vs Apple Photos built-in cutout
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Apple&apos;s long-press &quot;lift subject&quot; from Photos (iOS 16+) and the system
            Stickers drawer (iOS 17+) are <strong>free, fast, and well-integrated</strong>. For
            single-subject photos of a person or pet against a simple background, it&apos;s often
            the right tool. Use it for those cases.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Where it breaks:</strong> meme screenshots with text overlays (the caption
            gets clipped), multi-subject reactions (it picks the wrong subject), iMessage-bubble
            screenshots where the chat UI is the joke (it removes the context), and animated
            content beyond a single Live Photo. There is no setting to disable the cutout — you
            either get the auto-extracted subject or you don&apos;t make a sticker.
          </p>
          <p className="text-slate-700 leading-relaxed">
            MemePouch&apos;s approach is the opposite: <strong>no cutout, ever.</strong> Import a
            photo, GIF, video, or Live Photo and the whole frame becomes a sticker. Read more in{" "}
            <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-blue-600 hover:underline">
              the screenshots guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            MemePouch vs Sticker.ly
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <a
              href="https://apps.apple.com/app/id1458740001"
              target="_blank"
              rel="noopener"
              className="text-blue-600 hover:underline"
            >
              Sticker.ly
            </a>{" "}
            (by NAVER Z Corporation) is a <strong>subscription</strong> sticker app — roughly
            $0.80/week or $41.99/year, with a 3-day trial that requires a card on file. The
            product is built around social discovery: search, verified profiles, exclusive
            sticker packs, GIPHY integration, AI sticker generation, and WhatsApp pack
            publishing. Its PLUS page does claim iMessage sticker support (&quot;Send stickers
            on iMessage or stick them on bubbles&quot;), but Sticker.ly is not designed around the
            &quot;save the sticker a friend just sent you in iMessage&quot; workflow.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Pick Sticker.ly if:</strong> you want a sticker community, AI-assisted
            creation, GIPHY browsing, and cross-platform pack sharing — and you&apos;re comfortable
            with a subscription and a card-on-file 3-day trial.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Pick MemePouch if:</strong> you want a private iMessage-only library, no
            subscription, no community feed, and the drag-import flow to save the stickers your
            friends send you in iMessage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            MemePouch vs Sticker Maker Studio
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <a
              href="https://apps.apple.com/app/id1443326857"
              target="_blank"
              rel="noopener"
              className="text-blue-600 hover:underline"
            >
              Sticker Maker Studio
            </a>{" "}
            (by Tamara Vardanyan) is a <strong>free</strong>, long-running sticker-creation
            utility. Its flow is <em>pack-based</em>: you give a pack a name first, add stickers
            to that pack, then add the whole pack to WhatsApp, iMessage, or other messengers.
            It has background removal, photo/GIF/video → sticker conversion, and a community
            where users browse and share packs other people built.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Pick Sticker Maker Studio if:</strong> you want a free way to build named
            sticker packs for WhatsApp and don&apos;t mind organizing stickers into packs and
            naming each one before you can use them.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Pick MemePouch if:</strong> you prefer a <strong>single library-first
            grid</strong> — every sticker you import lands in one shared library, no pack
            ceremony, no community feed — and you want the drag-import flow for saving friends&apos;
            iMessage stickers, which Sticker Maker Studio doesn&apos;t document.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            MemePouch vs other iMessage-native sticker apps
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A handful of other apps ship with native iMessage sticker browsers using Apple&apos;s{" "}
            <code className="text-sm bg-slate-100 px-1 rounded">MSStickerBrowserView</code>. They
            generally do one thing well — shipping a pre-made themed sticker pack — but most lack
            the two things MemePouch is built around:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 leading-relaxed">
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
          <p className="text-slate-700 leading-relaxed">
            For a deeper category breakdown, see{" "}
            <Link href="/blog/best-imessage-sticker-apps-compared" className="text-blue-600 hover:underline">
              the longer comparison article
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">
            What MemePouch deliberately doesn&apos;t do
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 leading-relaxed">
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
              <strong>No subscription tier.</strong> $2.99 one-time, that&apos;s it.
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
    </div>
  );
}
