import { siteConfig } from "./site-config";

export const quizircleConfig = {
  appName: "Quizircle",
  developerName: "Yunus Emre Söğüt",
  contactEmail: "yunusesogut@gmail.com",
  effectiveDate: "March 27, 2026",
  urls: {
    privacy: `${siteConfig.url}/quizircle/privacy`,
    terms: `${siteConfig.url}/quizircle/terms`,
    accountDeletion: `${siteConfig.url}/quizircle/account-deletion`,
  },
} as const;
