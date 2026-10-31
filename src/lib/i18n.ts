export type Locale = "en" | "tr";

export const translations = {
  en: {
    profileTagline: "<developer />",
    profileDescription: "A developer who loves turning ideas into reality through code.",
    title: "Frontend Engineer | Full Stack Developer",
    description:
      "I build user-focused, performant and scalable applications with modern web technologies. I embrace clean code and good design principles.",
    skills: "Skills",
    apps: "Apps",
    comingSoon: "Coming soon",
    contact: "Contact",
    location: "Samsun, Türkiye",
  },
  tr: {
    profileTagline: "<developer />",
    profileDescription: "Kod yazarak fikirleri hayata geçirmeyi seven bir yazılımcı.",
    title: "Frontend Engineer | Full Stack Developer",
    description:
      "Modern web teknolojileri ile kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. Temiz kod ve iyi tasarım prensiplerini benimsiyorum.",
    skills: "Yetenekler",
    apps: "Uygulamalar",
    comingSoon: "Yakında",
    contact: "İletişim",
    location: "Samsun, Türkiye",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];
