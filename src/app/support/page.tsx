import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">Support</h1>
        <p className="text-lg text-slate-600 mb-12">
          Need help with MemePouch? We&apos;re here for you. Discover frequently asked questions or get in touch with our team directly.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-line pb-4 mb-6">Contact Us</h2>
          <div className="pouch-card p-8">
            <p className="text-slate-600 mb-4">
              If you are experiencing any issues, have a feature request, or just want to say hi, please reach out to us at:
            </p>
            <a href="mailto:memepouch@tetherme.app" className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition">
              memepouch@tetherme.app
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-line pb-4 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="pouch-card p-8">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Where are my stickers saved?</h3>
              <p className="text-slate-600 leading-relaxed">
                Stickers are stored locally on your device in the shared container used by the main app and iMessage extension. MemePouch never uploads your stickers to our servers.
              </p>
            </div>
            <div className="pouch-card p-8">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">How do I make a GIF from a video?</h3>
              <p className="text-slate-600 leading-relaxed">
                Tap <strong>Turn a video into a GIF</strong> and select a video or Live Photo. You will see a timeline editor where you can trim the clip to your favorite moment (up to 10 seconds). MemePouch will then automatically convert it to a looping GIF sticker, which sends as a full-quality iMessage attachment (no 500 KB cap).
              </p>
            </div>
            <div className="pouch-card p-8">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">What does Auto-Delete do?</h3>
              <p className="text-slate-600 leading-relaxed">
                When enabled in Settings, any photo or video you import will be automatically moved to your Photos app&apos;s Recently Deleted folder. It&apos;s a great way to keep your camera roll clean from thousands of random memes!
              </p>
            </div>
            <div className="pouch-card p-8">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">How do I access stickers in iMessage?</h3>
              <p className="text-slate-600 leading-relaxed">
                Open a conversation in the Messages app. Tap the App Store icon inside the message field, then select MemePouch. All your imported stickers and GIFs will be waiting for you.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
              &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
