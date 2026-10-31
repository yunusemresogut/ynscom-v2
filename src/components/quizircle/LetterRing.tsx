"use client";

import { useEffect, useState } from "react";

const LETTERS = "ABCÇDEFGHIİJKLMNOÖPRSŞTUÜVYZ".split("");

// Oyundaki renk kodları: doğru yeşil, yanlış kırmızı, pas sarı, aktif turuncu
const COLORS = {
  idle: "#4B4B5C",
  correct: "#22C55E",
  wrong: "#EF4444",
  pass: "#FACC15",
  active: "#FF6A00",
} as const;

// Turun sabit senaryosu: harf harf ilerlerken her harfin sonucu
const SCRIPT = "ccwcpcccccpcccwcccpccwcccccw";

const STEP_MS = 650;

export default function LetterRing({ className = "" }: { className?: string }) {
  // Sunucuda ve azaltılmış harekette tur ortasından bir kare görünür
  const [active, setActive] = useState(18);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      // Tur bitince kısa bir bekleme verip baştan başla
      setActive((a) => (a >= LETTERS.length + 3 ? 0 : a + 1));
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  const size = 400;
  const center = size / 2;
  const radius = 168;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label="A to Z letter circle"
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#FF6A00"
        strokeOpacity={0.15}
        strokeWidth={2}
      />
      {LETTERS.map((letter, i) => {
        const angle = (i / LETTERS.length) * Math.PI * 2 - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        const state =
          i === active
            ? "active"
            : i < active
              ? SCRIPT[i] === "c"
                ? "correct"
                : SCRIPT[i] === "w"
                  ? "wrong"
                  : "pass"
              : "idle";
        const color = COLORS[state];
        const lit = state !== "idle";

        return (
          <g key={letter} style={{ transition: "all 300ms ease" }}>
            {lit && (
              <circle cx={x} cy={y} r={20} fill={color} opacity={state === "active" ? 0.35 : 0.18}>
                {state === "active" && (
                  <animate attributeName="r" values="18;24;18" dur="1.2s" repeatCount="indefinite" />
                )}
              </circle>
            )}
            <circle
              cx={x}
              cy={y}
              r={15}
              fill={lit ? color : "#1A1A22"}
              stroke={color}
              strokeWidth={lit ? 0 : 1.5}
              style={{ transition: "fill 300ms ease" }}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={13}
              fontWeight={800}
              fill={lit ? (state === "pass" ? "#1A1A22" : "#FFFFFF") : "#9A9AAF"}
              fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            >
              {letter}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
