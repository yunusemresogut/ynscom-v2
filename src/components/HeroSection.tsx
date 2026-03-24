"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="animate-slide-right space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
          <span className="text-heading">YUNUS EMRE</span>
          <br />
          <span className="text-accent">SÖĞÜT</span>
        </h1>
      </div>

      <div className="space-y-1">
        <h2 className="text-lg md:text-xl font-semibold text-accent-light tracking-wide">
          {t("title")}
        </h2>
        <div className="w-12 h-0.5 bg-accent/50 rounded-full" />
      </div>

      <p className="text-foreground/60 text-sm md:text-base leading-relaxed max-w-md">
        {t("description")}
      </p>
    </div>
  );
}
