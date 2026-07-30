import { ImageResponse } from "next/og";

// Logo quadrato usato nel JSON-LD (Organization.logo). Serve un'immagine
// reale (>=112x112) all'URL /logo.png: fino a quando l'agenzia non ha un
// logo definitivo, generiamo un monogramma coerente con la palette del sito.
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b3b60",
          color: "#ffffff",
          fontSize: 220,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: 96,
        }}
      >
        MT
      </div>
    ),
    { width: 512, height: 512 }
  );
}
