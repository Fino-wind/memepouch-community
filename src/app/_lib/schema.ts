import { APP_STORE_URL, SITE_URL, siteUrl } from "../site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const APP_ENTITY_ID = `${SITE_URL}/#app`;

export const SAME_AS = [
  "https://apps.apple.com/us/app/memepouch/id6763726992",
  "https://github.com/Fino-wind/memepouch-community",
  "https://www.tiktok.com/@finowind",
  "https://www.instagram.com/fino_wind/",
  "https://www.youtube.com/channel/UCUy40hl0RCWZ9bNYaHMWBJA",
] as const;

export const APP_RATING = {
  value: "4.5",
  count: 23,
  verifiedDate: "2026-11-19",
} as const;

/**
 * Unified Knowledge Graph for MemePouch.
 * Injected once in RootLayout so every page references stable @id entities
 * instead of emitting conflicting MobileApplication vs SoftwareApplication blocks.
 */
export const GLOBAL_SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "MemePouch",
      url: `${SITE_URL}/`,
      email: "support@memepouch.com",
      logo: {
        "@type": "ImageObject",
        url: siteUrl("/icon.png"),
        width: 512,
        height: 512,
      },
      sameAs: [...SAME_AS],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "MemePouch",
      alternateName: [
        "Meme Pouch",
        "MemePouch App",
        "MemePouch: Sticker Maker",
      ],
      url: `${SITE_URL}/`,
      description:
        "MemePouch is a video-to-GIF converter and iMessage sticker manager for iPhone. Keep whole-image stickers without auto-cutout, convert videos to 50fps looping GIFs with no watermark, and save third-party stickers received in iMessage.",
      publisher: { "@id": ORG_ID },
      inLanguage: ["en", "zh-Hans", "zh-Hant"],
    },
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": APP_ENTITY_ID,
      name: "MemePouch",
      alternateName: "MemePouch: Sticker Maker",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
      author: { "@id": ORG_ID },
      description:
        "MemePouch is an iPhone video-to-GIF converter and iMessage sticker manager (iOS 16+). It converts videos and Live Photos into seamless looping GIFs at up to 50 fps with no watermark, preserves full-frame memes without Apple's forced auto-cutout, saves third-party stickers friends send you in iMessage via drag-and-drop, and exports packs to WhatsApp for free.",
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Video to GIF Converter, iMessage Sticker Manager",
      operatingSystem: "iOS 16 or later (iOS 16, iOS 17, iOS 18, iOS 26)",
      softwareVersion: "2.21",
      url: `${SITE_URL}/`,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      sameAs: "https://apps.apple.com/us/app/memepouch/id6763726992",
      screenshot: [
        siteUrl("/img/app-home.webp"),
        siteUrl("/img/full-meme.webp"),
        siteUrl("/img/step-saved.webp"),
      ],
      inLanguage: ["en", "es-MX", "ja", "ko", "pt-BR", "zh-Hans", "zh-Hant"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description:
          "Free to try on iOS 16+. Unlock unlimited stickers with a one-time purchase or a monthly/yearly subscription.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: APP_RATING.value,
        bestRating: "5",
        worstRating: "1",
        ratingCount: APP_RATING.count,
      },
      featureList: [
        "Video to GIF converter up to 50 fps and 600 px, no watermark",
        "Smart Loop perceptual dHash seam matching and Boomerang fallback",
        "Whole-image iMessage stickers with no auto-cutout or background removal",
        "Save third-party iMessage stickers friends send you via drag-and-drop",
        "Live Photo to looping GIF sticker in one tap",
        "Free export to WhatsApp sticker packs (static and animated WebP)",
        "Custom categories, pin to top, smart usage sort, and 30-day Recently Deleted",
        "Private on-device storage with optional iCloud backup through your own Apple ID",
      ],
    },
  ],
};

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export function buildBreadcrumbLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.href ? { item: siteUrl(item.href) } : {}),
    })),
  };
}
