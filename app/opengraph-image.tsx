import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} – ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b3b60",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#ffffff",
              color: "#0b3b60",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            MT
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#cbd8e4" }}>
          Google Business Profile + sito web · Catania e provincia
        </div>
      </div>
    ),
    { ...size }
  );
}
