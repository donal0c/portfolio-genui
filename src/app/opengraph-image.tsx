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
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #1a0e00 100%)",
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
              background: "#f59e0b",
              borderRadius: 999,
              boxShadow: "0 0 16px #f59e0b",
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
            Donal O’Callaghan
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: "#f59e0b",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            AI Engineer. Builder. Shipping things that matter.
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
          <span>TypeScript</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>Claude Code</span>
          <span>·</span>
          <span>Agents</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
