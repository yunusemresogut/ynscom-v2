import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface AppFooterProps {
  appName: string;
  links: { href: string; label: string }[];
  className?: string;
}

export default function AppFooter({ appName, links, className = "" }: AppFooterProps) {
  return (
    <footer className={`border-t border-current/10 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="font-semibold">{appName}</p>
          <p className="opacity-60">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              {siteConfig.name}
            </Link>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 opacity-70">
          {links.map((l) =>
            l.href.startsWith("mailto:") ? (
              <a key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className="hover:underline">
                {l.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
