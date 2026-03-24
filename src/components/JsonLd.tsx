import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: "Frontend Engineer & Full Stack Developer",
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.twitter,
      siteConfig.author.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
