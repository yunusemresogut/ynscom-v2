import AppLegalLayout from "@/components/apps/LegalLayout";

interface LegalLayoutProps {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
  active?: "privacy" | "support";
}

const links = [
  { href: "/iznik-tiles", label: "Iznik Tiles", key: "home" },
  { href: "/iznik-tiles/privacy", label: "Privacy Policy", key: "privacy" },
  { href: "/iznik-tiles/support", label: "Support", key: "support" },
];

export default function LegalLayout(props: LegalLayoutProps) {
  return (
    <AppLegalLayout
      {...props}
      appName="Iznik Tiles: Triple Match"
      appHref="/iznik-tiles"
      links={links}
    />
  );
}
