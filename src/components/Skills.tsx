"use client";

import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Next.js",
  "React",
  "Vue",
  "Nuxt.js",
  "Zustand/Redux",
  "Pinia/Vuex",
  "TypeScript",
  "TailwindCSS",
  "Node.js (Express, API Routes)",
  "PostgreSQL",
  "Prisma",
  "Docker",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in space-y-3" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-xs font-mono uppercase tracking-widest text-muted">
        {t("skills")}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-light border border-border text-foreground/80 hover:border-accent/40 hover:text-accent transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
