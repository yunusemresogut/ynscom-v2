import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";
import { getPublishedPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yazilim, teknoloji ve web gelistirme uzerine yazilar.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blog`,
    title: `Blog | ${siteConfig.name}`,
    description: "Yazilim, teknoloji ve web gelistirme uzerine yazilar.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description: "Yazilim, teknoloji ve web gelistirme uzerine yazilar.",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <BlogPageContent posts={posts} />;
}
