import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedSlugs } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPublishedSlugs();
  const latestPostDate =
    slugs.length > 0
      ? new Date(
          Math.max(...slugs.map((post) => new Date(post.updatedAt).getTime()))
        )
      : new Date();

  const blogPosts = slugs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
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
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
