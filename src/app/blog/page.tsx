import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MemePouch Blog & Tutorials",
  description: "Guides on how to organize, import, and manage iMessage stickers using MemePouch.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Blog &amp; Tutorials</h1>
      <p className="text-lg text-slate-600 mb-12">
        Learn how to get the most out of your iPhone&apos;s iMessage experience, organize your memes, and create custom stickers from photos and videos.
      </p>

      <div className="space-y-8">
        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/save-sticker-someone-sent-imessage" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to save an iMessage sticker someone sent you
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iOS hides the Save button on third-party iMessage stickers. Here is the one supported gesture for keeping a sticker your friend sent you, animation and all, plus why every common workaround fails.
          </p>
          <Link href="/blog/save-sticker-someone-sent-imessage" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-slate-900 hover:text-blue-600 transition-colors">
              A better way to turn screenshots into iMessage stickers (without Apple&apos;s auto-cutout)
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            Apple&apos;s long-press &quot;lift subject&quot; often clips away the punchline of a meme — the text overlay, the half-cropped hand, the background that IS the joke. Here&apos;s how to keep the whole image.
          </p>
          <Link href="/blog/turn-screenshots-into-imessage-stickers" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/make-gif-stickers-for-imessage" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to make GIF stickers for iMessage from any video or Live Photo
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            iMessage doesn&apos;t ship a way to turn arbitrary videos into GIF stickers. This guide covers the 30-second flow with MemePouch — up to 10 seconds long, full quality, with or without a Live Photo source.
          </p>
          <Link href="/blog/make-gif-stickers-for-imessage" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>

        <article className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow bg-white">
          <h2 className="text-2xl font-bold mb-3">
            <Link href="/blog/turn-photos-into-imessage-stickers" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to turn photos into iMessage stickers in 2026
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            A walkthrough of making custom iMessage stickers from your photos, GIFs, and short videos with MemePouch — plus how to drag stickers others send you into your own library.
          </p>
          <Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>
      </div>
    </div>
  );
}
