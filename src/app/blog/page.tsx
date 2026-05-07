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
            <Link href="/blog/turn-photos-into-imessage-stickers" className="text-slate-900 hover:text-blue-600 transition-colors">
              How to turn photos into iMessage stickers in 2026
            </Link>
          </h2>
          <p className="text-slate-600 mb-4 line-clamp-2">
            A quick tutorial on bringing your favorite photos and videos directly into iMessage conversations using MemePouch. Learn how to import via clipboard, share sheet, or from your camera roll.
          </p>
          <Link href="/blog/turn-photos-into-imessage-stickers" className="text-blue-600 font-medium hover:text-blue-700">
            Read article &rarr;
          </Link>
        </article>
        
        {/* Placeholder for future posts */}
      </div>
    </div>
  );
}
