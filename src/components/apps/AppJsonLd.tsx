import { appUrl, type AppEntry } from "@/lib/apps";
import { siteConfig } from "@/lib/site-config";

interface AppJsonLdProps {
  app: AppEntry;
  description: string;
  genre: string;
  operatingSystem: string;
}

export default function AppJsonLd({ app, description, genre, operatingSystem }: AppJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: app.fullName,
    description,
    url: appUrl(app),
    image: `${siteConfig.url}${app.icon}`,
    applicationCategory: "GameApplication",
    genre,
    operatingSystem,
    inLanguage: ["en", "tr"],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    ...(app.stores.appStore || app.stores.googlePlay
      ? { sameAs: [app.stores.appStore, app.stores.googlePlay].filter(Boolean) }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
