import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt =
  "MemePouch custom iMessage sticker maker for photos, GIFs, and short videos";

function StickerBubble({ label, color, left, top, rotate }: { label: string; color: string; left: number; top: number; rotate: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 168,
        height: 128,
        borderRadius: 38,
        background: color,
        border: "6px solid rgba(255,255,255,0.92)",
        boxShadow: "0 22px 55px rgba(15, 23, 42, 0.24)",
        transform: `rotate(${rotate}deg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 48,
        fontWeight: 900,
      }}
    >
      {label}
    </div>
  );
}

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f8fafc",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#0f172a",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "#bfdbfe",
            opacity: 0.72,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -170,
            width: 600,
            height: 600,
            borderRadius: 600,
            background: "#fbcfe8",
            opacity: 0.76,
          }}
        />

        <div
          style={{
            width: 650,
            padding: "76px 0 76px 84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 34,
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 13,
                background: "#FDC433",
                color: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 31,
                fontWeight: 900,
              }}
            >
              M
            </div>
            MemePouch
          </div>

          <div
            style={{
              fontSize: 76,
              lineHeight: 0.95,
              fontWeight: 950,
              letterSpacing: 0,
              marginBottom: 28,
            }}
          >
            Make custom stickers for iMessage.
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.28,
              color: "#475569",
              maxWidth: 590,
            }}
          >
            Turn photos, GIFs, and short videos into a private sticker library on iPhone.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 82,
            top: 74,
            width: 390,
            height: 500,
            borderRadius: 70,
            background: "#111827",
            border: "12px solid #ffffff",
            boxShadow: "0 34px 80px rgba(15, 23, 42, 0.24)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 304,
              height: 360,
              borderRadius: 48,
              background: "#f8fafc",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              padding: 28,
            }}
          >
            {["Photos", "GIFs", "Videos", "iMessage"].map((text, index) => (
              <div
                key={text}
                style={{
                  height: 62,
                  borderRadius: 20,
                  background: index === 3 ? "#dbeafe" : "#ffffff",
                  color: index === 3 ? "#1d4ed8" : "#334155",
                  border: "2px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 22,
                  fontSize: 27,
                  fontWeight: 800,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <StickerBubble label="GIF" color="#8b5cf6" left={690} top={68} rotate={-9} />
        <StickerBubble label="PNG" color="#0ea5e9" left={948} top={280} rotate={8} />
        <StickerBubble label="JPG" color="#f97316" left={700} top={404} rotate={7} />
      </div>
    ),
    socialImageSize,
  );
}

