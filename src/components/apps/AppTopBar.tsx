"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import type { AppEntry } from "@/lib/apps";

interface AppTopBarProps {
  app: AppEntry;
  sections: { href: string; label: string }[];
  /** Renkler sayfanın kendi paletinden gelir */
  className: string;
  accentClassName: string;
}

export default function AppTopBar({ app, sections, className, accentClassName }: AppTopBarProps) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md ${className}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-6">
        <Link
          href="/"
          aria-label="yunusemresogut.com"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-current/15 opacity-70 transition hover:opacity-100"
        >
          <HiArrowLeft className="h-4 w-4" />
        </Link>

        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Image
            src={app.icon}
            alt=""
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="truncate font-bold tracking-tight">{app.name}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 text-sm md:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={`rounded-lg px-3 py-2 opacity-70 transition hover:opacity-100 ${accentClassName}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleLocale}
          className="ml-auto flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-current/15 text-xs font-bold tracking-wide opacity-70 transition hover:opacity-100 md:ml-2"
          aria-label="Toggle language"
        >
          {locale === "en" ? "TR" : "EN"}
        </button>
      </div>
    </header>
  );
}
