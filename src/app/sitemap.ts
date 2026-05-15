import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl("/"),        lastModified, changeFrequency: "weekly",  priority: 1.0 },
    { url: siteUrl("/support"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: siteUrl("/privacy"), lastModified, changeFrequency: "yearly",  priority: 0.3 },
    { url: siteUrl("/faq"),     lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl("/compare"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: siteUrl("/blog"),    lastModified, changeFrequency: "weekly",  priority: 0.6 },
    { url: siteUrl("/blog/turn-photos-into-imessage-stickers"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: siteUrl("/blog/save-sticker-someone-sent-imessage"), lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: siteUrl("/blog/turn-screenshots-into-imessage-stickers"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: siteUrl("/blog/make-gif-stickers-for-imessage"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: siteUrl("/blog/best-imessage-sticker-apps-compared"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: siteUrl("/blog/why-apple-stickers-cannot-be-saved"), lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
