"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { APP_STORE_URL } from "../site";

const LINKS = [
  { href: "/faq", label: "FAQ" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-xl border-b transition-shadow ${
        scrolled ? "border-line shadow-[0_8px_30px_-18px_rgba(35,32,28,0.4)]" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" aria-label="MemePouch home" className="flex items-center gap-2.5 group">
          <img
            src="/icon.png"
            alt=""
            width={34}
            height={34}
            className="w-[34px] h-[34px] rounded-[10px] shadow-sm -rotate-3 transition-transform group-hover:rotate-3 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            MemePouch
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "text-ink after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-sun"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink text-paper px-4 py-2 text-sm font-semibold hover:bg-pouch transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download
          </a>

          {/* CSS-only fallback; JS closes it after navigation */}
          <details ref={menuRef} className="relative md:hidden group">
            <summary
              className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-10 h-10 -mr-2 flex items-center justify-center rounded-full text-ink"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-56 pouch-card p-2 flex flex-col">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(l.href) ? "text-ink bg-paper" : "text-ink hover:bg-paper"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink hover:bg-paper transition-colors"
              >
                Privacy
              </Link>
              <a
                href={APP_STORE_URL}
                className="mt-1 rounded-xl px-4 py-3 text-sm font-bold text-paper bg-ink text-center"
              >
                Download on the App Store
              </a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
