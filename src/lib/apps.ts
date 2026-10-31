import type { Locale } from "./i18n";
import { siteConfig } from "./site-config";

export type AppStatus = "live" | "in-review";

export interface AppEntry {
  slug: string;
  name: string;
  fullName: string;
  icon: string;
  status: AppStatus;
  tagline: Record<Locale, string>;
  stores: {
    appStore?: string;
    googlePlay?: string;
  };
}

export const quizircleApp: AppEntry = {
  slug: "quizircle",
  name: "Quizircle",
  fullName: "Quizircle: Letter Circle Trivia Quiz",
  icon: "/apps/quizircle/icon.png",
  status: "live",
  tagline: {
    en: "Letter circle trivia quiz",
    tr: "Harf çemberi bilgi yarışması",
  },
  stores: {
    appStore: "https://apps.apple.com/app/quizircle/id6783071597",
    googlePlay: "https://play.google.com/store/apps/details?id=com.quizircle.app",
  },
};

export const iznikTilesApp: AppEntry = {
  slug: "iznik-tiles",
  name: "Iznik Tiles",
  fullName: "Iznik Tiles: Triple Match",
  icon: "/apps/iznik-tiles/icon.png",
  status: "in-review",
  tagline: {
    en: "Relaxing tile matching puzzle",
    tr: "Rahatlatıcı taş eşleştirme",
  },
  // Mağazada yayınlanınca bağlantıları ekle ve status'u "live" yap.
  stores: {},
};

export const apps: AppEntry[] = [quizircleApp, iznikTilesApp];

export function appUrl(app: AppEntry, path = "") {
  return `${siteConfig.url}/${app.slug}${path}`;
}
