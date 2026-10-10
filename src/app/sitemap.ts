import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

export const dynamic = "force-static";

// lastmod = the last commit that touched the page's own source, never the build time.
// Until 2026-10-10 every entry said `new Date()`, so each deploy told crawlers that all
// 27 pages had just changed; Google stopped using the sitemap (GSC: 27 submitted, 0
// indexed through it) and newer posts sat "unknown to Google". It needs full git
// history — a shallow clone would stamp every page with the one commit it has, so the
// build refuses to run on one (deploy.yml checks out with fetch-depth: 0).
function lastModified(path: string): string | undefined {
  const file = `src/app${path === "/" ? "" : path}/page.tsx`;
  const shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf8" }).trim();
  if (shallow === "true") {
    throw new Error("sitemap: shallow git clone, so page dates would be wrong — check out with fetch-depth: 0");
  }
  const date = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim();
  return date || undefined; // not committed yet: claim nothing rather than "now"
}

const entry = (
  path: string,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
  priority: number,
): MetadataRoute.Sitemap[number] => ({ url: siteUrl(path), lastModified: lastModified(path), changeFrequency, priority });

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", "weekly", 1.0),
    entry("/support", "monthly", 0.7),
    entry("/privacy", "yearly", 0.3),
    entry("/faq", "monthly", 0.8),
    entry("/compare", "monthly", 0.7),
    entry("/blog", "weekly", 0.6),
    entry("/blog/make-whatsapp-stickers-iphone", "monthly", 0.8),
    entry("/blog/zh/make-whatsapp-stickers-iphone", "monthly", 0.6),
    entry("/blog/zh-Hant/make-whatsapp-stickers-iphone", "monthly", 0.6),
    entry("/blog/save-tiktok-gifs-to-imessage", "monthly", 0.8),
    entry("/blog/save-stickers-to-camera-roll", "monthly", 0.7),
    entry("/blog/turn-photos-into-imessage-stickers", "monthly", 0.5),
    entry("/blog/save-sticker-someone-sent-imessage", "monthly", 0.5),
    entry("/blog/turn-screenshots-into-imessage-stickers", "monthly", 0.6),
    entry("/blog/make-gif-stickers-for-imessage", "monthly", 0.6),
    entry("/blog/best-imessage-sticker-apps-compared", "monthly", 0.7),
    entry("/blog/why-apple-stickers-cannot-be-saved", "monthly", 0.6),
    entry("/blog/imessage-stickers-without-auto-cutout", "monthly", 0.7),
    entry("/blog/trim-video-into-looping-gif-sticker", "monthly", 0.7),
    entry("/blog/organize-imessage-sticker-library", "monthly", 0.7),
    entry("/blog/import-stickers-five-ways", "monthly", 0.7),
    entry("/blog/auto-delete-photos-after-sticker-import", "monthly", 0.6),
    entry("/blog/live-photo-to-gif-sticker", "monthly", 0.7),
    entry("/blog/zh/save-imessage-sticker-friend", "monthly", 0.6),
    entry("/blog/zh-Hant/save-imessage-sticker-friend", "monthly", 0.6),
    entry("/blog/zh/imessage-stickers-without-auto-cutout", "monthly", 0.6),
    entry("/blog/zh-Hant/imessage-stickers-without-auto-cutout", "monthly", 0.6),
  ];
}
