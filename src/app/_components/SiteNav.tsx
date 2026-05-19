import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="MemePouch home" className="flex items-center gap-2 group">
          <img
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">MemePouch</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/faq" className="hidden sm:inline-block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
          <Link href="/compare" className="hidden sm:inline-block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Compare</Link>
          <Link href="/blog" className="hidden sm:inline-block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Blog</Link>
          <Link href="/support" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Support</Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy</Link>
        </div>
      </div>
    </nav>
  );
}
