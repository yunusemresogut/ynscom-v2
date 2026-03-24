import { BlogPost } from "./types";

export const placeholderPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js 16 ile Gelen Yenilikler",
    excerpt:
      "Next.js 16 ile birlikte gelen performans iyileştirmeleri, yeni API'ler ve geliştirici deneyimindeki değişikliklere detaylı bir bakış.",
    slug: "nextjs-16-yenilikler",
    createdAt: "2026-03-20",
    tags: ["Next.js", "React", "Web"],
    readTime: "5 dk",
  },
  {
    id: "2",
    title: "TypeScript ile Clean Architecture",
    excerpt:
      "TypeScript projelerinizde clean architecture prensiplerini nasıl uygulayabileceğinizi adım adım keşfedin.",
    slug: "typescript-clean-architecture",
    createdAt: "2026-03-15",
    tags: ["TypeScript", "Architecture"],
    readTime: "8 dk",
  },
  {
    id: "3",
    title: "Tailwind CSS ile Modern UI Tasarımı",
    excerpt:
      "Tailwind CSS kullanarak minimal, şık ve responsive arayüzler tasarlamanın ipuçları ve en iyi pratikler.",
    slug: "tailwind-css-modern-ui",
    createdAt: "2026-03-10",
    tags: ["CSS", "Tailwind", "Design"],
    readTime: "4 dk",
  },
];
