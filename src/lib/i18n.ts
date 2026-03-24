export type Locale = "en" | "tr";

export const translations = {
  en: {
    profileTagline: "<developer />",
    profileDescription: "A developer who loves turning ideas into reality through code.",
    title: "Frontend Engineer | Full Stack Developer",
    description:
      "I build user-focused, performant and scalable applications with modern web technologies. I embrace clean code and good design principles.",
    skills: "Skills",
    contact: "Contact",
    blog: "Blog",
    backToHome: "Home",
    blogTitle: "BLOG",
    blogDescription:
      "A space where I share my experiences and learnings about software, technology and web development.",
    noPosts: "No posts yet.",
    allPosts: "All Posts",
    postComingSoon: "Full content of this post will be available soon.",
    postNotFound: "Post Not Found",
    location: "Samsun, Türkiye",
  },
  tr: {
    profileTagline: "<developer />",
    profileDescription: "Kod yazarak fikirleri hayata geçirmeyi seven bir yazılımcı.",
    title: "Frontend Engineer | Full Stack Developer",
    description:
      "Modern web teknolojileri ile kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. Temiz kod ve iyi tasarım prensiplerini benimsiyorum.",
    skills: "Yetenekler",
    contact: "İletişim",
    blog: "Blog",
    backToHome: "Ana Sayfa",
    blogTitle: "BLOG",
    blogDescription:
      "Yazılım, teknoloji ve web geliştirme üzerine deneyimlerimi ve öğrendiklerimi paylaştığım alan.",
    noPosts: "Henüz yazı yok.",
    allPosts: "Tüm Yazılar",
    postComingSoon: "Bu yazının tam içeriği yakında eklenecek.",
    postNotFound: "Yazı Bulunamadı",
    location: "Samsun, Türkiye",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];
