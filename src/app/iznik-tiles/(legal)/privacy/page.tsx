import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/iznik-tiles/LegalLayout";
import { appUrl, iznikTilesApp } from "@/lib/apps";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Iznik Tiles Privacy Policy",
  description: "Privacy Policy for Iznik Tiles: Triple Match mobile game.",
  alternates: {
    canonical: appUrl(iznikTilesApp, "/privacy"),
  },
};

const link = "text-accent hover:underline";

export default function IznikTilesPrivacyPage() {
  const email = siteConfig.author.email;

  return (
    <LegalLayout title="Privacy Policy" effectiveDate="October 6, 2026" active="privacy">
      <p>
        This policy explains how <strong className="text-foreground">Iznik Tiles: Triple Match</strong>{" "}
        (&ldquo;the game&rdquo;) handles information. The game is developed and published by{" "}
        {siteConfig.name}, an independent developer based in Türkiye (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
      </p>
      <p>
        <strong className="text-foreground">In short:</strong> the game has no accounts and never asks
        for your name, email or other personal details. Your progress is stored only on your device. The
        game is free and shows ads served by Google AdMob, which may collect device information as
        described below.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">1. Information stored on your device</h2>
        <p>
          The game saves your level, stars, tile shards, jokers, restoration progress and settings (sound,
          music, vibration, language) in a file on your device. This data is not sent to us or to anyone
          else. It is deleted when you uninstall the game.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">2. Advertising (Google AdMob)</h2>
        <p>
          The game shows banner, interstitial and optional rewarded ads through Google AdMob, a service of
          Google LLC / Google Ireland Limited. To serve and measure ads, Google may collect and process:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            device identifiers, such as the advertising identifier (IDFA on iOS, only if you allow
            tracking; Advertising ID on Android),
          </li>
          <li>IP address and approximate location derived from it,</li>
          <li>device and app information (model, operating system, language, app version),</li>
          <li>ad interactions (ads shown, taps) and diagnostic data.</li>
        </ul>
        <p>
          Google uses this information to deliver ads, limit how often you see them, measure their
          performance, prevent fraud and, where you have given consent, show personalised ads. Learn more
          in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className={link}>
            How Google uses information from sites or apps that use its services
          </a>{" "}
          and the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>
            Google Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">3. Your choices</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            <strong className="text-foreground">EEA, UK and Switzerland:</strong> on first launch we ask
            for your consent using Google&rsquo;s consent form. You can change your choice at any time in
            the game: Settings (gear icon) → Ad privacy settings.
          </li>
          <li>
            <strong className="text-foreground">iOS:</strong> the game asks for permission before using
            the advertising identifier. You can change this at any time in Settings → Privacy &amp;
            Security → Tracking.
          </li>
          <li>
            <strong className="text-foreground">Android:</strong> you can reset or delete your
            advertising ID in your device settings (Settings → Google → Ads or Privacy → Ads).
          </li>
        </ul>
        <p>If you decline, you will still see ads, but they will not be personalised.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">4. What we do not do</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>We do not collect personal information ourselves and do not run our own servers for the game.</li>
          <li>We do not use analytics or tracking tools other than Google AdMob.</li>
          <li>We do not sell your personal information.</li>
          <li>The game has no in-app purchases, chat or social features.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">5. Children</h2>
        <p>
          The game is intended for a general audience and is not directed at children under 13. We do not
          knowingly collect personal information from children. If you believe a child has provided
          personal information, please contact us and we will help.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">6. Your rights</h2>
        <p>
          Depending on where you live (for example under the GDPR or Türkiye&rsquo;s Personal Data
          Protection Law No. 6698, &ldquo;KVKK&rdquo;), you may have rights to access, correct, delete or
          object to the processing of your personal data. Because we do not hold personal data about you,
          requests regarding advertising data are best directed to Google, but you are always welcome to
          contact us and we will assist you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">7. Data retention and transfers</h2>
        <p>
          We do not retain any personal data. Google retains advertising data according to its own
          policies and may process it on servers outside your country.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Changes are published on this page with a new
          effective date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">9. Contact</h2>
        <p>
          <strong className="text-foreground">{siteConfig.name}</strong>
          <br />
          Email:{" "}
          <a href={`mailto:${email}`} className={link}>
            {email}
          </a>
          <br />
          <Link href="/iznik-tiles/support" className={link}>
            Support &amp; FAQ
          </Link>
        </p>
      </section>
    </LegalLayout>
  );
}
