#!/usr/bin/env python3
"""Tell IndexNow (Bing, Yandex, Seznam, Naver…) that MemePouch pages changed.

Run AFTER a deploy is live, or to broadcast updated content to AI search engines.
"""
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://memepouch.tetherme.app"
KEY = "c03798cf60bd4e3d9370773b0a7019f2"
HOST = "memepouch.tetherme.app"

sitemap_xml = ROOT / "out" / "sitemap.xml"
if sitemap_xml.exists():
    urls = re.findall(r"<loc>(.*?)</loc>", sitemap_xml.read_text())
else:
    # Fallback to known site URLs if out/sitemap.xml not yet built
    urls = [
        f"{SITE}/",
        f"{SITE}/support",
        f"{SITE}/privacy",
        f"{SITE}/faq",
        f"{SITE}/compare",
        f"{SITE}/blog",
        f"{SITE}/blog/make-whatsapp-stickers-iphone",
        f"{SITE}/blog/zh/make-whatsapp-stickers-iphone",
        f"{SITE}/blog/zh-Hant/make-whatsapp-stickers-iphone",
        f"{SITE}/blog/save-tiktok-gifs-to-imessage",
        f"{SITE}/blog/save-stickers-to-camera-roll",
        f"{SITE}/blog/turn-photos-into-imessage-stickers",
        f"{SITE}/blog/save-sticker-someone-sent-imessage",
        f"{SITE}/blog/turn-screenshots-into-imessage-stickers",
        f"{SITE}/blog/make-gif-stickers-for-imessage",
        f"{SITE}/blog/best-imessage-sticker-apps-compared",
        f"{SITE}/blog/why-apple-stickers-cannot-be-saved",
        f"{SITE}/blog/imessage-stickers-without-auto-cutout",
        f"{SITE}/blog/trim-video-into-looping-gif-sticker",
        f"{SITE}/blog/organize-imessage-sticker-library",
        f"{SITE}/blog/import-stickers-five-ways",
        f"{SITE}/blog/auto-delete-photos-after-sticker-import",
        f"{SITE}/blog/live-photo-to-gif-sticker",
        f"{SITE}/blog/zh/save-imessage-sticker-friend",
        f"{SITE}/blog/zh-Hant/save-imessage-sticker-friend",
        f"{SITE}/blog/zh/imessage-stickers-without-auto-cutout",
        f"{SITE}/blog/zh-Hant/imessage-stickers-without-auto-cutout",
    ]

if len(sys.argv) > 1:
    urls = [SITE + p if p.startswith("/") else p for p in sys.argv[1:]]

body = json.dumps({
    "host": HOST,
    "key": KEY,
    "keyLocation": f"{SITE}/{KEY}.txt",
    "urlList": urls,
}).encode()

req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=body,
    headers={"Content-Type": "application/json; charset=utf-8"},
)

try:
    with urllib.request.urlopen(req, timeout=30) as r:
        print(f"IndexNow: HTTP {r.status} for {len(urls)} URLs (200/202 = accepted)")
except urllib.error.HTTPError as e:
    print(f"IndexNow: HTTP {e.code} {e.read().decode(errors='replace')[:300]}")
    sys.exit(1)
