import AppLegalLayout from "@/components/apps/LegalLayout";
import { quizircleConfig } from "@/lib/quizircle-config";

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
  active?: "privacy" | "terms" | "account-deletion";
}

const links = [
  { href: "/quizircle", label: "Quizircle", key: "home" },
  { href: "/quizircle/privacy", label: "Privacy Policy", key: "privacy" },
  { href: "/quizircle/terms", label: "Terms of Service", key: "terms" },
  {
    href: "/quizircle/account-deletion",
    label: "Account Deletion",
    key: "account-deletion",
  },
];

export default function LegalLayout(props: LegalLayoutProps) {
  return (
    <AppLegalLayout
      {...props}
      appName={quizircleConfig.appName}
      appHref="/quizircle"
      links={links}
    />
  );
}
