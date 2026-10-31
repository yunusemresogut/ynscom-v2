import { FaApple } from "react-icons/fa6";
import type { AppEntry } from "@/lib/apps";

interface StoreBadgesProps {
  app: AppEntry;
  comingSoonLabel: string;
  className?: string;
}

function Badge({ href, src, alt }: { href: string; src: string; alt: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-12 sm:h-13 w-auto" />
    </a>
  );
}

export default function StoreBadges({ app, comingSoonLabel, className = "" }: StoreBadgesProps) {
  const { appStore, googlePlay } = app.stores;

  if (!appStore && !googlePlay) {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <span className="inline-flex items-center gap-2.5 h-12 px-5 rounded-xl border border-current/25 bg-black/30 text-sm font-semibold">
          <FaApple className="w-5 h-5" />
          {comingSoonLabel}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {appStore && (
        <Badge href={appStore} src="/apps/badges/app-store-badge.svg" alt="Download on the App Store" />
      )}
      {googlePlay && (
        <Badge href={googlePlay} src="/apps/badges/google-play-badge.svg" alt="Get it on Google Play" />
      )}
    </div>
  );
}
