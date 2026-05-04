export const dynamic = "force-static";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Donal O'Callaghan — AI Engineer";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: "-0.02em",
            color: "#a1a1aa",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#34d399",
              borderRadius: 999,
              boxShadow: "0 0 16px #34d399",
            }}
          />
          donalocallaghan.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              color: "#ededed",
              display: "flex",
            }}
          >
            Donal O Callaghan
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#a1a1aa",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            AI Engineer. Builder. Ireland.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 22,
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          <span>hello@donalocallaghan.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
