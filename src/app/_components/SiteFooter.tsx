import Link from "next/link";
import { APP_STORE_URL } from "../site";

export default function SiteFooter() {
  return (
    <footer className="mt-24">
      {/* Closing CTA band */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-paper px-8 py-14 md:px-16 md:py-20 text-center">
          <span aria-hidden="true" className="sticker-chip absolute left-[4%] top-[10%] w-14 h-14 text-3xl hidden md:flex" style={{ "--tilt": "-9deg" } as React.CSSProperties}>😂</span>
          <span aria-hidden="true" className="sticker-chip absolute right-[4%] top-[14%] w-12 h-12 text-2xl hidden md:flex" style={{ "--tilt": "7deg" } as React.CSSProperties}>🔥</span>
          <span aria-hidden="true" className="sticker-chip absolute left-[9%] bottom-[12%] w-12 h-12 text-2xl hidden md:flex" style={{ "--tilt": "5deg" } as React.CSSProperties}>🐸</span>
          <span aria-hidden="true" className="sticker-chip absolute right-[8%] bottom-[10%] w-14 h-14 text-3xl hidden md:flex" style={{ "--tilt": "-6deg" } as React.CSSProperties}>💀</span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl mx-auto text-balance">
            Your memes deserve the whole frame.
          </h2>
          <p className="text-paper/70 text-lg mb-8 max-w-xl mx-auto">
            Free to try with 5 stickers. $2.99 unlocks everything, once, forever.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 py-4 text-base font-bold hover:bg-sun transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </div>

      <div className="border-t border-line bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" aria-label="MemePouch home" className="flex items-center gap-2 group">
            <img
              src="/icon.png"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 rounded-md -rotate-3 transition-transform group-hover:rotate-3"
            />
            <span className="font-display font-bold text-ink tracking-tight">MemePouch</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="/faq" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">FAQ</Link>
            <Link href="/compare" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Compare</Link>
            <Link href="/blog" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Blog</Link>
            <Link href="/support" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Support</Link>
            <Link href="/privacy" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Privacy Policy</Link>
            <a rel="alternate" href={APP_STORE_URL} className="text-sm font-medium text-pouch hover:text-pouch-deep transition-colors">Download App</a>
          </div>
          <p className="text-sm text-ink-faint">
            &copy; {new Date().getFullYear()} MemePouch.
          </p>
        </div>
      </div>
    </footer>
  );
}
