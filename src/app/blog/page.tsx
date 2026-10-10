import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "./_lib/posts";

export const metadata: Metadata = {
  title: "MemePouch Blog & Tutorials",
  description: "Guides on how to organize, import, and manage iMessage stickers using MemePouch.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">Blog &amp; Tutorials</h1>
      <p className="text-lg text-ink-soft mb-14">
        Learn how to get the most out of your iPhone&apos;s iMessage experience, organize your memes, and create custom stickers from photos and videos.
      </p>

      <div className="space-y-6">
        {POSTS.map((post) => (
          <article
            key={post.href}
            data-reveal className="group pouch-card p-8 hover:shadow-lifted hover:-translate-y-0.5 transition-all"
            lang={post.lang}
          >
            {post.badge && (
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                  post.badge.startsWith("New") ? "text-pouch" : "text-ink-faint"
                }`}
              >
                {post.badge}
              </p>
            )}
            <h2 className="text-2xl font-bold mb-3 leading-snug">
              <Link href={post.href} className="text-ink hover:text-pouch transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-ink-soft mb-4 line-clamp-2">{post.description}</p>
            <Link href={post.href} className="font-semibold text-pouch hover:text-pouch-deep transition-colors">
              {post.cta ?? "Read article"} <span className="inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
