"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function SettingsBar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      <button
        onClick={toggleLocale}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-border text-xs font-bold tracking-wide text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-pointer"
        aria-label="Toggle language"
      >
        {locale === "en" ? "TR" : "EN"}
      </button>

      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-pointer"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <HiOutlineSun className="w-4 h-4" />
        ) : (
          <HiOutlineMoon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
