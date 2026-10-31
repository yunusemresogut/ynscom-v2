import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yunus Emre Söğüt, Frontend Engineer & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #cc3700, #ff4500, #ff6a33)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span style={{ color: "#ffffff" }}>YUNUS EMRE</span>
            <span style={{ color: "#ff4500" }}>SÖĞÜT</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#ff6a33",
              margin: 0,
              fontWeight: 600,
            }}
          >
            Frontend Engineer | Full Stack Developer
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#888888",
              margin: 0,
              marginTop: "8px",
            }}
          >
            yunusemresogut.com
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
