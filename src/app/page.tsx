import Link from "next/link";
import { APP_STORE_URL } from "./site";

const tilt = (deg: number) => ({ "--tilt": `${deg}deg` } as React.CSSProperties);

function PhoneFrame({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.8rem] bg-ink p-[10px] shadow-lifted ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
        <img src={src} alt={alt} className={`block w-full h-auto ${imgClassName}`} loading="lazy" />
        {/* Dynamic Island */}
        <div aria-hidden="true" className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[24%] h-[3.2%] rounded-full bg-ink" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-1.5 text-sm font-semibold text-ink-soft mb-8 shadow-sm" style={{ "--rise-delay": "0s" } as React.CSSProperties}>
              <span className="w-2 h-2 rounded-full bg-mint" />
              iMessage sticker app · pay once · no subscription
            </p>

            <h1 className="rise text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-ink mb-8 text-balance leading-[1.05]" style={{ "--rise-delay": "0.08s" } as React.CSSProperties}>
              Apple cuts your stickers in half.{" "}
              <span className="relative inline-block text-pouch">
                MemePouch doesn&apos;t.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden="true" preserveAspectRatio="none">
                  <path d="M3 9c60-6 180-6 294-3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="text-sun" />
                </svg>
              </span>
            </h1>

            <p className="rise text-xl md:text-2xl text-ink-soft font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed" style={{ "--rise-delay": "0.16s" } as React.CSSProperties}>
              Custom iMessage stickers that keep the whole frame — text, background, hands, reaction context, all intact. No auto-cutout, no background removal. Free to try — one-time unlock, no subscription.
            </p>

            <div className="rise flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" style={{ "--rise-delay": "0.24s" } as React.CSSProperties}>
              <a
                href={APP_STORE_URL}
                aria-label="Download MemePouch on the App Store"
                className="flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-bold text-paper shadow-lg hover:bg-pouch hover:scale-105 transition-all active:scale-95"
              >
                <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Download on the App Store
              </a>
              <a href="#cutout-demo" className="text-base font-semibold text-ink-soft hover:text-ink transition-colors px-4 py-4">
                See the difference ↓
              </a>
            </div>

            <p className="rise mt-8 text-sm font-medium text-ink-faint" style={{ "--rise-delay": "0.32s" } as React.CSSProperties}>
              No account · No ads · Everything stays on your iPhone
            </p>
          </div>

          {/* Real product, real phone */}
          <div className="rise relative mx-auto w-full max-w-[320px] lg:max-w-[340px]" style={{ "--rise-delay": "0.2s" } as React.CSSProperties}>
            <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-sun/25 blur-3xl" />
            <PhoneFrame
              src="/img/app-home.webp"
              alt="MemePouch home screen — import from Photos, turn a video or Live Photo into a GIF, paste from clipboard"
              className="rotate-2 hover:rotate-0 transition-transform"
            />
            <span aria-hidden="true" className="sticker-chip animate-float absolute -left-8 top-12 w-16 h-16 text-4xl" style={tilt(-10)}>😂</span>
            <span aria-hidden="true" className="sticker-chip animate-float-slow absolute -right-7 top-1/3 w-14 h-14 text-3xl" style={tilt(8)}>🔥</span>
            <span aria-hidden="true" className="sticker-chip animate-float-slow absolute -left-6 bottom-24 w-12 h-12 text-2xl" style={tilt(6)}>🐸</span>
            <span aria-hidden="true" className="sticker-chip animate-float absolute -right-9 bottom-8 w-16 h-16 text-4xl" style={tilt(-7)}>💀</span>
          </div>
        </div>
      </section>

      {/* ─────────────── Before / After cutout demo ─────────────── */}
      <section id="cutout-demo" className="max-w-6xl mx-auto px-6 pb-24 scroll-mt-24">
        <div data-reveal className="pouch-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-stretch">
            {/* Apple side */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-berry/10 text-berry px-3 py-1 text-sm font-bold">
                  ✂️ Apple&apos;s &quot;Add Sticker&quot;
                </span>
              </div>
              <div className="relative flex-1 rounded-3xl checkerboard border border-line min-h-[280px] flex items-center justify-center overflow-hidden p-8">
                {/* the real thing: Apple's cutout even ate the first letter of the caption */}
                <img
                  src="/img/apple-cutout.webp"
                  alt="The same cat meme after Apple's Add Sticker: background deleted and the caption clipped to 'lways at your service'"
                  className="max-h-[300px] w-auto drop-shadow-lg rotate-[-2deg]"
                  loading="lazy"
                />
                <span className="absolute top-5 left-5 rounded-lg bg-cream/95 border border-line px-3 py-1.5 text-xs font-bold text-ink-soft rotate-[-3deg] shadow-sm">background: gone</span>
                <span className="absolute bottom-5 right-5 rounded-lg bg-cream/95 border border-line px-3 py-1.5 text-xs font-bold text-berry rotate-[2deg] shadow-sm">even the caption got clipped</span>
              </div>
              <p className="mt-5 text-ink-soft leading-relaxed">
                iOS auto-detects &quot;the subject&quot; and deletes everything else. Same meme, real result — it even ate the first letter of the caption.
              </p>
            </div>

            {/* MemePouch side */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 text-mint px-3 py-1 text-sm font-bold">
                  ✓ MemePouch
                </span>
              </div>
              <div className="relative flex-1 rounded-3xl bg-white border-[6px] border-white shadow-lifted min-h-[280px] overflow-hidden rotate-[1.5deg] hover:rotate-0 transition-transform">
                <img
                  src="/img/full-meme.webp"
                  alt="The same cat meme imported with MemePouch: full frame kept, caption 'Always at your service' intact"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 rounded-lg bg-mint text-white px-3 py-1.5 text-xs font-bold rotate-[2deg] shadow-md">everything intact</span>
              </div>
              <p className="mt-5 text-ink-soft leading-relaxed">
                The whole frame becomes the sticker — caption, hands, background, context. What you import is what your friends see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── Feature band — save friends' stickers ────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Link
          href="/blog/save-sticker-someone-sent-imessage"
          data-reveal
          className="block group relative overflow-hidden rounded-[2.5rem] bg-ink text-paper p-10 md:p-14 shadow-lifted hover:scale-[1.005] transition-transform"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-wide text-sun mb-3">
                New · iMessage&apos;s Save to Stickers button hangs on third-party stickers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Save the stickers your friends send you in iMessage.
              </h2>
              <p className="text-paper/70 text-lg leading-relaxed mb-6">
                iOS shows the button, but tapping it stalls — Apple&apos;s system sticker daemon
                drops the connection. The path that actually works: drag the sticker into MemePouch.
                Animated GIFs and static stickers, real-device tested.
              </p>
              <span className="inline-flex items-center gap-2 text-base font-bold text-paper group-hover:gap-3.5 transition-all">
                See how it works
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>

            {/* The real flow, shot on a real device */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 items-start">
              {[
                { src: "/img/step-menu.webp", n: "1", caption: "iOS shows Save — it hangs", alt: "iMessage long-press menu on a sticker showing the Save option that hangs" },
                { src: "/img/step-drawer.webp", n: "2", caption: "Open MemePouch in the drawer", alt: "iMessage app drawer with MemePouch next to Camera, Photos and GIPHY" },
                { src: "/img/step-saved.webp", n: "3", caption: "Drag in — saved, animated", alt: "Sticker saved into the MemePouch grid inside iMessage" },
              ].map((s) => (
                <figure key={s.n} className="text-center">
                  <div className="relative rounded-[1.4rem] bg-paper/15 p-[5px]">
                    <img src={s.src} alt={s.alt} className="block w-full h-auto rounded-[1.1rem]" loading="lazy" />
                    <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-sun text-ink text-sm font-bold flex items-center justify-center shadow-md">{s.n}</span>
                  </div>
                  <figcaption className="mt-3 text-xs sm:text-sm font-semibold text-paper/70 leading-snug">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Link>
      </section>

      {/* ─────────────── Five import paths (bento) ─────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Five magical ways to import</h2>
          <p className="mt-4 text-lg text-ink-soft">Add to your pouch from anywhere on your device.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Video to GIF (Large) */}
          <div data-reveal className="md:col-span-2 pouch-card relative overflow-hidden p-10 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 transition-transform">
            <div aria-hidden="true" className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-grape/10" />
            <div aria-hidden="true" className="absolute top-10 right-10 hidden sm:flex items-end gap-1.5">
              {[28, 44, 36, 56, 40].map((h, i) => (
                <div key={i} className="w-3 rounded-full bg-grape/30" style={{ height: h }} />
              ))}
            </div>
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(-5)}>🎬</div>
            <div>
              <h3 className="text-2xl font-bold text-ink mb-3">Video to GIF</h3>
              <p className="text-ink-soft text-lg leading-relaxed max-w-md">Choose a short video, trim up to 10 seconds of the best moment, and turn it into a looping animated GIF sticker instantly.</p>
            </div>
          </div>

          {/* Card 2: Photos */}
          <div data-reveal style={{ "--reveal-delay": "0.06s" } as React.CSSProperties} className="relative overflow-hidden rounded-[1.75rem] bg-ink shadow-lifted p-10 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 transition-transform">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(6)}>🖼️</div>
            <div>
              <h3 className="text-2xl font-bold text-paper mb-3">Photos</h3>
              <p className="text-paper/60 text-lg leading-relaxed">Select multiple images or GIFs directly from your library and import them all in one tap.</p>
            </div>
          </div>

          {/* Card 3: Clipboard */}
          <div data-reveal className="pouch-card relative overflow-hidden p-10 flex flex-col justify-between min-h-[300px] hover:-translate-y-1 transition-transform">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(-4)}>📋</div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">Clipboard</h3>
              <p className="text-ink-soft leading-relaxed">Copy an image anywhere, then just tap &quot;Paste from Clipboard&quot;.</p>
            </div>
          </div>

          {/* Card 4: Share Sheet */}
          <div data-reveal className="pouch-card relative overflow-hidden p-10 flex flex-col justify-between min-h-[300px] hover:-translate-y-1 transition-transform">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(5)}>📤</div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">Share Sheet</h3>
              <p className="text-ink-soft leading-relaxed">Share an image from Safari, Files, or another app directly to MemePouch.</p>
            </div>
          </div>

          {/* Card 5: Drag and Drop — styled as a drop zone */}
          <div data-reveal style={{ "--reveal-delay": "0.06s" } as React.CSSProperties} className="relative overflow-hidden rounded-[1.75rem] border-2 border-dashed border-pouch/40 bg-pouch/5 p-10 flex flex-col justify-between min-h-[300px] hover:-translate-y-1 hover:border-pouch/70 transition-all">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(-7)}>👆</div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">Drag &amp; Drop</h3>
              <p className="text-ink-soft leading-relaxed">Long-press a sticker someone sent, keep holding, open MemePouch in the iMessage drawer with another finger, and drop it into the grid.</p>
            </div>
          </div>
        </div>

        {/* Feature: Auto-Delete */}
        <div data-reveal className="mt-6 pouch-card p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-mint/10" />
          <div className="max-w-xl relative">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(4)}>🧹</div>
            <h3 className="text-3xl font-bold text-ink mb-4">Clean Up Camera Roll</h3>
            <p className="text-ink-soft text-lg leading-relaxed">Turn on <strong className="text-ink">Auto-Delete</strong> in settings. Once you import a meme into MemePouch, its original photo will be moved to Trash after iOS asks you to confirm.</p>
          </div>
          <div className="w-full md:w-auto relative">
            <div className="bg-white border border-line shadow-lifted rounded-3xl p-6 w-full md:w-80 flex flex-col gap-4 rotate-3 hover:rotate-1 transition-transform">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink">Auto-Delete Imported</span>
                <div className="w-12 h-7 bg-mint rounded-full flex items-center px-1 justify-end">
                  <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <p className="text-sm text-ink-faint">Automatically move original photos or videos to Trash once they are safely stored here.</p>
            </div>
          </div>
        </div>

        {/* Feature: Pin to Top */}
        <div className="mt-6 pouch-card p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div aria-hidden="true" className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sun/15" />
          <div className="max-w-xl relative">
            <div className="sticker-chip w-16 h-16 text-3xl mb-6" style={tilt(-5)}>📌</div>
            <h3 className="text-3xl font-bold text-ink mb-4">Pin Your Go-To Stickers to the Top</h3>
            <p className="text-ink-soft text-lg leading-relaxed">Long-press a sticker and tap <strong className="text-ink">Pin to Top</strong> to keep your most-used reactions front and center — they stay above the rest, marked with a small pin badge. Drag the pinned ones to put them in exactly the order you want, and that order sticks in both the app and the iMessage drawer.</p>
          </div>
          <div className="w-full md:w-auto relative">
            <div className="bg-white border border-line shadow-lifted rounded-3xl p-6 w-full md:w-80 flex flex-col gap-4 -rotate-3 hover:-rotate-1 transition-transform">
              <div className="flex items-center gap-3">
                <div className="sticker-chip w-12 h-12 text-2xl" style={tilt(-3)}>😂</div>
                <span className="font-semibold text-ink">Pinned</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-sun px-2.5 py-1 text-xs font-bold text-ink">
                  📌 Pin
                </span>
              </div>
              <p className="text-sm text-ink-faint">Long-press any sticker and choose Pin to Top. Drag the pinned ones to reorder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Pricing ───────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Pay once. Keep it forever.</h2>
          <p className="mt-4 text-lg text-ink-soft">Free to try. One unlock — not per month, not per year.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div data-reveal className="relative rounded-[1.75rem] bg-ink text-paper p-10 flex flex-col shadow-lifted">
            <span className="absolute -top-3.5 right-8 rounded-full bg-sun text-ink px-4 py-1.5 text-sm font-bold rotate-2 shadow-md">pay once, keep forever</span>
            <p className="text-sm font-bold uppercase tracking-wide text-paper/50 mb-6">What you get</p>
            <ul className="space-y-3 text-paper/80 mb-8 flex-1">
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> Unlimited stickers</li>
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> All import paths — Photos, paste, share, drag</li>
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> Video &amp; Live Photo → GIF maker</li>
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> No ads, no account, no watermark</li>
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> Restores on any iPhone with your Apple ID</li>
              <li className="flex gap-2.5"><span className="text-sun font-bold">✓</span> Supports a solo indie developer 💛</li>
            </ul>
            <a href={APP_STORE_URL} className="rounded-full bg-paper text-ink text-center font-bold py-3.5 hover:bg-sun transition-colors">
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── FAQ teaser ───────────────────── */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink text-center mb-10">Quick answers</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does MemePouch remove backgrounds like Apple's tool?",
              a: "No — that's the whole point. MemePouch keeps the framing and content exactly as you import it. No subject detection, no cutout.",
            },
            {
              q: "Does MemePouch upload my photos anywhere?",
              a: "No. Everything stays on your device in a container shared between the app and the iMessage extension. No servers, no accounts.",
            },
            {
              q: "Can I make an animated sticker from a video?",
              a: "Yes — pick a clip, trim up to 10 seconds, and MemePouch turns it into a looping GIF sticker that sends at full quality.",
            },
          ].map((item) => (
            <details key={item.q} data-reveal className="pouch-card group px-7 py-5 open:shadow-lifted transition-shadow">
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-4 font-bold text-ink text-lg">
                {item.q}
                <span className="text-ink-faint text-2xl leading-none group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-ink-soft leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/faq" className="font-semibold text-pouch hover:text-pouch-deep transition-colors">
            See all 20+ questions in the FAQ →
          </Link>
        </p>
      </section>
    </div>
  );
}
