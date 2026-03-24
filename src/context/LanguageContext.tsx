"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { type Locale, translations, type TranslationKey } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "tr") {
      setLocale(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("lang", locale);
    localStorage.setItem("locale", locale);
  }, [locale, mounted]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "tr" : "en"));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
