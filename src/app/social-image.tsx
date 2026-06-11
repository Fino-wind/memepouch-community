import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt =
  "MemePouch keeps the whole meme intact — Apple's sticker tool cuts it apart";

const asDataUri = (file: string) =>
  `data:image/png;base64,${readFileSync(
    join(process.cwd(), "src/app/_og", file)
  ).toString("base64")}`;

export function createSocialImage() {
  const cutout = asDataUri("cutout.png");
  const full = asDataUri("full.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf5ec",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#23201c",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* warm glow */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -200,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: "#ffc531",
            opacity: 0.22,
          }}
        />

        {/* Left: claim */}
        <div
          style={{
            width: 620,
            padding: "56px 0 56px 76px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 38,
              fontSize: 33,
              fontWeight: 800,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#ffc531",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                fontWeight: 900,
                transform: "rotate(-4deg)",
                boxShadow: "3px 4px 0 rgba(35,32,28,0.15)",
              }}
            >
              M
            </div>
            MemePouch
          </div>

          <div
            style={{
              fontSize: 64,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: -2,
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Apple cuts your</span>
            <span>stickers in half.</span>
            <span style={{ color: "#0a84ff" }}>MemePouch doesn&apos;t.</span>
          </div>

          <div
            style={{
              fontSize: 24,
              lineHeight: 1.3,
              color: "#5c554d",
              maxWidth: 520,
              marginBottom: 24,
            }}
          >
            Full-frame iMessage stickers from photos, GIFs, and videos. No auto-cutout.
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#23201c",
              color: "#faf5ec",
              borderRadius: 999,
              padding: "14px 30px",
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            $2.99 once · no subscription
          </div>
        </div>

        {/* Right: the real before/after */}
        <div
          style={{
            position: "absolute",
            right: 330,
            top: 40,
            width: 280,
            height: 300,
            borderRadius: 34,
            background: "#ffffff",
            border: "2px solid rgba(35,32,28,0.1)",
            boxShadow: "0 24px 48px rgba(35,32,28,0.18)",
            transform: "rotate(3deg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 18,
          }}
        >
          <img alt="" src={cutout} width={200} height={213} style={{ objectFit: "contain" }} />
          <div
            style={{
              marginTop: 10,
              background: "rgba(255,92,138,0.14)",
              color: "#e0436f",
              borderRadius: 999,
              padding: "8px 20px",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            ✂️ Apple&apos;s cutout
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 50,
            top: 252,
            width: 300,
            height: 340,
            borderRadius: 34,
            background: "#ffffff",
            boxShadow: "0 28px 56px rgba(35,32,28,0.28)",
            transform: "rotate(-4deg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 14,
          }}
        >
          <img
            alt=""
            src={full}
            width={272}
            height={262}
            style={{ objectFit: "cover", borderRadius: 22 }}
          />
          <div
            style={{
              marginTop: 10,
              background: "rgba(46,196,142,0.16)",
              color: "#1d9c6f",
              borderRadius: 999,
              padding: "8px 20px",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            ✓ whole meme intact
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
