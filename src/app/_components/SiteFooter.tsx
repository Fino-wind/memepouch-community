import Link from "next/link";
import { APP_STORE_URL, siteUrl } from "../site";

const POPULAR_GUIDES = [
  {
    href: "/blog/save-tiktok-gifs-to-imessage",
    label: "Save TikTok Stickers & GIFs to iMessage",
  },
  {
    href: "/blog/save-stickers-to-camera-roll",
    label: "Save TikTok Stickers to Camera Roll",
  },
  {
    href: "/blog/save-sticker-someone-sent-imessage",
    label: "Save a Sticker Someone Sent You",
  },
  {
    href: "/blog/best-video-to-gif-apps-iphone-no-watermark",
    label: "Best Video to GIF Apps (No Watermark)",
  },
  {
    href: "/blog/imessage-stickers-without-auto-cutout",
    label: "iMessage Stickers Without Auto-Cutout",
  },
  {
    href: "/blog/best-imessage-sticker-apps-compared",
    label: "Best iMessage Sticker Apps Compared",
  },
  {
    href: "/blog/trim-video-into-looping-gif-sticker",
    label: "Trim Video to Looping GIF (50 fps)",
  },
  {
    href: "/blog/make-whatsapp-stickers-iphone",
    label: "Make WhatsApp Stickers on iPhone",
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-24">
      {/* Closing CTA band */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.5rem] bg-ink text-paper px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <span
            aria-hidden="true"
            className="sticker-chip absolute left-[4%] top-[10%] w-14 h-14 text-3xl hidden md:flex"
            style={{ "--tilt": "-9deg" } as React.CSSProperties}
          >
            😂
          </span>
          <span
            aria-hidden="true"
            className="sticker-chip absolute right-[4%] top-[14%] w-12 h-12 text-2xl hidden md:flex"
            style={{ "--tilt": "7deg" } as React.CSSProperties}
          >
            🔥
          </span>
          <span
            aria-hidden="true"
            className="sticker-chip absolute left-[9%] bottom-[12%] w-12 h-12 text-2xl hidden md:flex"
            style={{ "--tilt": "5deg" } as React.CSSProperties}
          >
            🐸
          </span>
          <span
            aria-hidden="true"
            className="sticker-chip absolute right-[8%] bottom-[10%] w-14 h-14 text-3xl hidden md:flex"
            style={{ "--tilt": "-6deg" } as React.CSSProperties}
          >
            💀
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl mx-auto text-balance">
            Your memes deserve the whole frame.
          </h2>
          <p className="text-paper/70 text-lg mb-8 max-w-xl mx-auto">
            Free to try on iPhone (iOS 16+). One-time unlock or flexible subscription — no ads, no watermark.
          </p>
          <a
            href={APP_STORE_URL}
            data-track-location="footer_cta"
            className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 py-4 text-base font-bold hover:bg-sun transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 384 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </div>

      <div className="border-t border-line bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_0.9fr_0.9fr] gap-10">
          <div>
            <Link
              href="/"
              aria-label="MemePouch home"
              className="inline-flex items-center gap-2 group mb-3"
            >
              <img
                src="/icon.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 rounded-md -rotate-3 transition-transform group-hover:rotate-3"
              />
              <span className="font-display font-bold text-ink tracking-tight">
                MemePouch
              </span>
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed mb-3">
              iPhone video-to-GIF converter and iMessage sticker manager. No
              auto-cutout, no watermark, no account required.
            </p>
            <p className="text-xs text-ink-faint">
              &copy; {new Date().getFullYear()} MemePouch · iOS 16+
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-faint mb-3">
              Popular Guides
            </p>
            <ul className="space-y-2 text-sm">
              {POPULAR_GUIDES.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="text-ink-soft hover:text-ink transition-colors"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-faint mb-3">
              Product
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare" className="text-ink-soft hover:text-ink transition-colors">
                  Compare Apps
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-ink-soft hover:text-ink transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ink-soft hover:text-ink transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-ink-soft hover:text-ink transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink-soft hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={APP_STORE_URL}
                  data-track-location="footer_link"
                  className="font-semibold text-pouch hover:text-pouch-deep transition-colors"
                >
                  Download on App Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-faint mb-3">
              Community &amp; AI
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Fino-wind/memepouch-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  GitHub Community
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@finowind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  TikTok (@finowind)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fino_wind/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  Instagram (@fino_wind)
                </a>
              </li>
              <li>
                <a
                  href={siteUrl("/llms.txt")}
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  llms.txt (AI Summary)
                </a>
              </li>
              <li>
                <a
                  href={siteUrl("/llms-full.txt")}
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  llms-full.txt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
