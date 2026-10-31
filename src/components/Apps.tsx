"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { apps } from "@/lib/apps";

export default function Apps() {
  const { t, locale } = useLanguage();

  return (
    <div className="animate-fade-in space-y-3" style={{ animationDelay: "0.3s" }}>
      <h3 className="text-xs font-mono uppercase tracking-widest text-muted">
        {t("apps")}
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {apps.map((app) => (
          <Link
            key={app.slug}
            href={`/${app.slug}`}
            className="group flex items-center gap-4 rounded-xl bg-surface-light border border-border p-3 hover:border-accent/40 transition-colors duration-300"
          >
            <Image
              src={app.icon}
              alt=""
              width={52}
              height={52}
              className="rounded-xl shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-heading truncate">{app.name}</span>
                {app.status === "in-review" && (
                  <span className="shrink-0 rounded-md bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                    {t("comingSoon")}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted truncate">{app.tagline[locale]}</p>
            </div>
            <HiArrowUpRight className="w-4 h-4 shrink-0 text-muted group-hover:text-accent transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
