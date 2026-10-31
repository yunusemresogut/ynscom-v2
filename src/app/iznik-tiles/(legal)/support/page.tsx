import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/iznik-tiles/LegalLayout";
import { appUrl, iznikTilesApp } from "@/lib/apps";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Iznik Tiles Support",
  description: "Help and frequently asked questions for Iznik Tiles: Triple Match.",
  alternates: {
    canonical: appUrl(iznikTilesApp, "/support"),
  },
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I play?",
    a: "Tap free tiles (tiles with nothing on top) to move them to the tray. Three tiles with the same motif in the tray match and disappear. Clear the board to win; if the tray fills up, you lose. Tap the ? button in the main menu for an illustrated guide.",
  },
  {
    q: "A level is too hard. What can I do?",
    a: "Use jokers: Undo, Hint, Shuffle and Release (moves tiles out of the tray). When a joker runs out, you can refill it by watching an optional ad. If you lose, you can continue once by watching an ad.",
  },
  {
    q: "Will I lose my progress if I delete the game?",
    a: "Yes. Progress is stored only on your device and there is no cloud save, so deleting the game resets it. Updating the game keeps your progress.",
  },
  {
    q: "Why are there ads?",
    a: "Ads keep the game completely free. There are no purchases, lives or energy limits. Rewarded ads are always optional.",
  },
  {
    q: "How do I change my ad privacy choices?",
    a: (
      <>
        In the EEA, UK and Switzerland: Settings (gear icon) → Ad privacy settings. On iOS you can also
        change tracking permission in Settings → Privacy &amp; Security → Tracking. See the{" "}
        <Link href="/iznik-tiles/privacy" className="text-accent hover:underline">
          Privacy Policy
        </Link>{" "}
        for details.
      </>
    ),
  },
  {
    q: "How do I turn off sound, music or vibration, or change the language?",
    a: "Open Settings (gear icon, top right of the main menu). During a game, tap the home button to pause and change sound settings.",
  },
];

export default function IznikTilesSupportPage() {
  const email = siteConfig.author.email;

  return (
    <LegalLayout title="Support" active="support">
      <p>
        Need help, found a bug or have an idea? Write to us. We read every message and usually reply
        within a few days.
      </p>
      <p>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent("Iznik Tiles support")}`}
          className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Email support
        </a>
      </p>
      <p className="text-foreground/60">
        Please include your device model, iOS/Android version, the level number and a screenshot if
        possible.
      </p>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-heading">Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} className="space-y-2">
            <h3 className="font-semibold text-foreground">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>
    </LegalLayout>
  );
}
