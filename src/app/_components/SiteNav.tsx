import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">MemePouch</span>
        </div>
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
