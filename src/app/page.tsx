import Link from "next/link";
import { APP_STORE_URL } from "./site";

export default function Home() {
  return (
    <div className="bg-[#fafafa] font-sans selection:bg-blue-200 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mx-auto max-w-6xl px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-40 pointer-events-none -z-10">
          <div className="absolute -left-32 top-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute -right-32 top-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute left-32 top-32 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Apple cuts your stickers in half.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              MemePouch doesn&apos;t.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Custom iMessage stickers that keep the whole frame — text, background, hands, reaction context, all intact. No auto-cutout, no background removal. Free to try, $2.99 one-time unlock.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              aria-label="Download MemePouch on the App Store"
              className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-slate-800 hover:scale-105 transition-all active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {/* Hero Feature Band — save iMessage stickers people send you */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Link
          href="/blog/save-sticker-someone-sent-imessage"
          className="block group rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-10 md:p-14 shadow-sm hover:shadow-lg transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3">
                New · iMessage&apos;s Save to Stickers button hangs on third-party stickers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Save the stickers your friends send you in iMessage.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                iOS shows the button, but tapping it stalls — Apple&apos;s system sticker daemon
                drops the connection. The path that actually works: drag the sticker into MemePouch.
                Animated GIFs and static stickers, real-device tested.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-base font-semibold text-white whitespace-nowrap group-hover:translate-x-1 transition-transform">
              See how it works
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Five magical ways to import</h2>
          <p className="mt-4 text-lg text-slate-500">Add to your pouch from anywhere on your device.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Video to GIF (Large) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md p-10 flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-bl from-purple-100 to-transparent rounded-full opacity-50 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Video to GIF</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">Choose a short video, trim up to 10 seconds of the best moment, and turn it into a looping animated GIF sticker instantly.</p>
            </div>
          </div>

          {/* Card 2: Photos */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-sm p-10 flex flex-col justify-between min-h-[320px]">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Photos</h3>
              <p className="text-slate-400 text-lg leading-relaxed">Select multiple images or GIFs directly from your library and import them all in one tap.</p>
            </div>
          </div>

          {/* Card 3: Clipboard */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md p-10 flex flex-col justify-between h-[320px]">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clipboard</h3>
              <p className="text-slate-500 leading-relaxed">Copy an image anywhere, then just tap &quot;Paste from Clipboard&quot;.</p>
            </div>
          </div>

          {/* Card 4: Share Sheet */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md p-10 flex flex-col justify-between h-[320px]">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Share Sheet</h3>
              <p className="text-slate-500 leading-relaxed">Share an image from Safari, Files, or another app directly to MemePouch.</p>
            </div>
          </div>

          {/* Card 5: Drag and Drop */}
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md p-10 flex flex-col justify-between h-[320px]">
            <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drag & Drop</h3>
              <p className="text-slate-500 leading-relaxed">Long-press a sticker someone sent, keep holding, open MemePouch in the iMessage drawer with another finger, and drop it into the grid.</p>
            </div>
          </div>

        </div>

        {/* Feature: Auto-Delete */}
        <div className="mt-8 rounded-[2.5rem] bg-gradient-to-br from-green-50 to-emerald-100 border border-green-100 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
             <div className="w-14 h-14 rounded-2xl bg-white/60 shadow-sm flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Clean Up Camera Roll</h3>
            <p className="text-emerald-900/70 text-lg leading-relaxed">Turn on <strong>Auto-Delete</strong> in settings. Once you import a meme into MemePouch, its original photo will be moved to Trash after iOS asks you to confirm.</p>
          </div>
          <div className="w-full md:w-auto relative">
             <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 w-full md:w-80 flex flex-col gap-4 transform rotate-3">
                <div className="flex items-center justify-between">
                   <span className="font-semibold text-slate-900">Auto-Delete Imported</span>
                   <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center px-1 justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                   </div>
                </div>
                <p className="text-sm text-slate-500">Automatically move original photos or videos to Trash once they are safely stored here.</p>
             </div>
          </div>
        </div>

        {/* Feature: Pin to Top */}
        <div className="mt-8 rounded-[2.5rem] bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-100 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
             <div className="w-14 h-14 rounded-2xl bg-white/60 shadow-sm flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4h6l-1.2 5.2 3.2 3.3H7L10.2 9.2 9 4zM12 15.5V21" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Pin Your Go-To Stickers to the Top</h3>
            <p className="text-amber-900/70 text-lg leading-relaxed">Long-press a sticker and tap <strong>Pin to Top</strong> to keep your most-used reactions front and center — they stay above the rest, marked with a small pin badge. Drag the pinned ones to put them in exactly the order you want, and that order sticks in both the app and the iMessage drawer.</p>
          </div>
          <div className="w-full md:w-auto relative">
             <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 w-full md:w-80 flex flex-col gap-4 transform -rotate-3">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">😂</div>
                   <span className="font-semibold text-slate-900">Pinned</span>
                   <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 4h6l-1.2 5.2 3.2 3.3H7L10.2 9.2 9 4zM12 15.5V21" />
                      </svg>
                      Pin
                   </span>
                </div>
                <p className="text-sm text-slate-500">Long-press any sticker and choose Pin to Top. Drag the pinned ones to reorder.</p>
             </div>
          </div>
        </div>

      </section>

    </div>
  );
}
