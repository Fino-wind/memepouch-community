import Link from "next/link";
import { APP_STORE_URL } from "../site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" aria-label="MemePouch home" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">MemePouch</span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/faq" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
          <Link href="/compare" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Compare</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Blog</Link>
          <Link href="/support" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Support</Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <a rel="alternate" href={APP_STORE_URL} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Download App</a>
        </div>
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} MemePouch.
        </p>
      </div>
    </footer>
  );
}
