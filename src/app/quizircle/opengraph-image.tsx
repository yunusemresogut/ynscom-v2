import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Quizircle: Letter Circle Trivia Quiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = async (file: string, type: string) => {
  const data = await readFile(path.join(process.cwd(), "public/apps/quizircle", file));
  return `data:${type};base64,${data.toString("base64")}`;
};

export default async function Image() {
  const [icon, home, classic] = await Promise.all([
    asset("icon.png", "image/png"),
    asset("screens/en/home.jpg", "image/jpeg"),
    asset("screens/en/classic.jpg", "image/jpeg"),
  ]);

  const phone = (src: string, top: number) => (
    <div
      style={{
        display: "flex",
        marginTop: top,
        width: 250,
        height: 542,
        borderRadius: 40,
        border: "6px solid #22222E",
        overflow: "hidden",
        background: "#0F0F12",
      }}
    >
      <img src={src} width={238} height={517} alt="" />
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 70px 0 80px",
          background: "radial-gradient(circle at 80% 40%, rgba(255,106,0,0.28), #0F0F12 60%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 560 }}>
          <img src={icon} width={96} height={96} alt="" style={{ borderRadius: 24 }} />
          <div style={{ fontSize: 84, fontWeight: 900, marginTop: 28, letterSpacing: -2 }}>Quizircle</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#FF8C33", marginTop: 4 }}>
            Letter Circle Trivia Quiz
          </div>
          <div style={{ fontSize: 26, color: "#9A9AAF", marginTop: 22, lineHeight: 1.4 }}>
            Answer a question for every letter, race the clock and climb the leaderboards.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {phone(home, 70)}
          {phone(classic, -70)}
        </div>
      </div>
    ),
    size,
  );
}
