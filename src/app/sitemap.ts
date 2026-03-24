import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { placeholderPosts } from "@/lib/placeholder-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = placeholderPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
