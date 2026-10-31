import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { apps, appUrl } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...apps.map((app) => ({
      url: appUrl(app),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
