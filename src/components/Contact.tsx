"use client";

import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in space-y-3" style={{ animationDelay: "0.6s" }}>
      <h3 className="text-xs font-mono uppercase tracking-widest text-muted">
        {t("contact")}
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:yunusesogut@gmail.com"
          className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-light border border-border hover:border-accent/40 transition-all duration-300"
        >
          <HiOutlineEnvelope className="w-4 h-4 text-accent" />
          <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
            yunusesogut@gmail.com
          </span>
        </a>
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-light border border-border">
          <HiOutlineMapPin className="w-4 h-4 text-accent" />
          <span className="text-sm text-foreground/70">{t("location")}</span>
        </div>
      </div>
    </div>
  );
}
