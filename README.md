# MemePouch — Marketing Site

> MemePouch is a free iPhone app (iOS 16+) that turns your photos, GIFs, and short videos into reusable iMessage stickers, and lets you save stickers other people send you in iMessage by dragging them into your library.

This repository is the public marketing website for **MemePouch**.

- Live: <https://memepouch.tetherme.app>
- App Store: <https://apps.apple.com/us/app/memepouch/id6763726992>
- iOS source: private — this repo only contains the marketing site

## What MemePouch does

| Feature | Detail |
| --- | --- |
| Photo / GIF import | Up to 30 images at once via the Photos picker |
| Video to GIF | Trim up to 5 seconds, auto-compressed to fit iMessage's 500 KB sticker limit |
| Clipboard paste | Copy an image anywhere, paste into MemePouch |
| Share sheet | From Safari, Files, or any app that exposes an image |
| **Save stickers others send you** | Long-press a sticker in any iMessage chat and drag it onto MemePouch's grid in the iMessage app drawer — the only path iOS exposes for third-party sticker apps |
| Auto-clean | Optional: delete originals from Photos after import |
| Privacy | Everything stays on-device. No accounts, no servers, no analytics. |

## Project layout

| Path | What it is |
| --- | --- |
| `src/app/` | Next.js 16 App Router pages |
| `src/app/_components/` | Shared `SiteNav` and `SiteFooter` |
| `src/app/site.ts` | Single source of truth for `SITE_URL` and `APP_STORE_URL` |
| `src/app/sitemap.ts` / `robots.ts` | File-based metadata routes |
| `src/app/opengraph-image.tsx` / `twitter-image.tsx` / `apple-icon.tsx` | Dynamically generated images |
| `src/app/social-image.tsx` | Shared rendering helper for the social images |
| `public/llms.txt` | Plain-text product summary for LLM crawlers |
| `public/CNAME` | GitHub Pages custom-domain marker for `memepouch.tetherme.app` |
| `.github/workflows/deploy.yml` | GitHub Actions pipeline that builds and publishes to GitHub Pages |

## Stack

- Next.js 16 (App Router) with `output: "export"` for fully static deployment
- React 19, Tailwind CSS v4, TypeScript 5
- GitHub Pages as the host, custom domain `memepouch.tetherme.app` via DNS CNAME
- Cloudflare DNS in front, Let's Encrypt SSL signed by GitHub Pages

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with `next build` and publishes the `out/` directory to GitHub Pages. The custom domain is bound through `public/CNAME`.

## A note on Next.js 16

This site uses Next.js 16 with React 19 and Tailwind v4 — all three have breaking changes from previous major versions. If you're contributing, prefer the conventions in `node_modules/next/dist/docs/` over older tutorials.
