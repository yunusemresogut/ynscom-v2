import Link from "next/link";

export interface LegalLink {
  href: string;
  label: string;
  key: string;
}

interface LegalLayoutProps {
  appName: string;
  appHref: string;
  links: LegalLink[];
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
  active?: string;
}

export default function LegalLayout({
  appName,
  appHref,
  links,
  title,
  effectiveDate,
  children,
  active,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-12 sm:py-16">
      <article className="mx-auto max-w-3xl min-w-0">
        <nav className="mb-8 flex flex-wrap gap-2 text-xs">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                active === link.key
                  ? "border-accent/40 text-accent bg-accent/10"
                  : "border-border text-muted hover:text-accent hover:border-accent/40"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <header className="mb-10 pb-8 border-b border-border">
          <Link
            href={appHref}
            className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-2 hover:underline"
          >
            {appName}
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-heading tracking-tight">
            {title}
          </h1>
          {effectiveDate && (
            <p className="mt-3 text-sm text-muted">
              Effective date: {effectiveDate}
            </p>
          )}
        </header>

        <div className="space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
          {children}
        </div>
      </article>
    </main>
  );
}
