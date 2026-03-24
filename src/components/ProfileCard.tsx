"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <div className="animate-slide-left flex flex-col items-center gap-6">
      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-accent via-accent-dark to-transparent opacity-60 blur-md group-hover:opacity-80 transition-opacity duration-500" />
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-accent/30 bg-surface-light flex items-center justify-center">
          <Image
            src="/images/profile.jpeg"
            alt="Yunus Emre Söğüt"
            fill
            className="object-cover grayscale"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="text-center space-y-2 max-w-[280px]">
        <p className="text-muted text-sm font-mono tracking-wide">
          {t("profileTagline")}
        </p>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {t("profileDescription")}
        </p>
      </div>
    </div>
  );
}
