import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/quizircle/LegalLayout";
import { quizircleConfig } from "@/lib/quizircle-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${quizircleConfig.appName} mobile game.`,
  alternates: {
    canonical: quizircleConfig.urls.privacy,
  },
};

export default function QuizirclePrivacyPage() {
  const { appName, developerName, contactEmail, effectiveDate } = quizircleConfig;

  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate={effectiveDate}
      active="privacy"
    >
      <p>
        This Privacy Policy explains how {developerName} (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects
        information when you use <strong className="text-foreground">{appName}</strong>{" "}
        (the &quot;App&quot;) on iOS and Android.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          1. Information We Collect
        </h2>
        <p>Depending on how you use the App, we may collect:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            <strong className="text-foreground">Account information:</strong> If
            you sign in with Google or Apple, we receive information provided by
            that service (such as your name, email address, and a unique account
            identifier). We do not receive your Google or Apple password.
          </li>
          <li>
            <strong className="text-foreground">Game data:</strong> Gameplay
            progress, scores, statistics, preferences, and in-app settings linked
            to your account.
          </li>
          <li>
            <strong className="text-foreground">Purchase information:</strong> If
            you buy Premium Lifetime, payment is processed by Apple App Store or
            Google Play. We receive purchase status and entitlement information,
            not your full payment card details.
          </li>
          <li>
            <strong className="text-foreground">Advertising data:</strong> When
            you view ads, Google AdMob and its partners may collect device
            identifiers, IP address, ad interaction data, and approximate
            location derived from IP.
          </li>
          <li>
            <strong className="text-foreground">Technical data:</strong> Device
            model, operating system version, app version, crash logs, and
            performance data to keep the App stable.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          2. How We Use Information
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>Create and manage your account;</li>
          <li>Save your game progress and sync it across sessions;</li>
          <li>Provide Premium Lifetime features after purchase;</li>
          <li>Display advertisements to non-premium users;</li>
          <li>Improve gameplay, fix bugs, and prevent fraud or abuse;</li>
          <li>Respond to support requests and legal obligations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          3. Sign-In with Google and Apple
        </h2>
        <p>
          If you choose to link your account with Google or Apple, authentication
          is handled by those providers. Their use of your data is governed by
          their own privacy policies:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple Privacy Policy
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          4. Advertising (Google AdMob)
        </h2>
        <p>
          The App uses <strong className="text-foreground">Google AdMob</strong> to
          show ads, including rewarded ads you may choose to watch. Premium
          Lifetime users do not see ads. Where required by law (for example in the
          EEA/UK), the App shows a Google User Messaging Platform (UMP) consent
          form before personalized ads are displayed. AdMob may use advertising
          identifiers and similar technologies. Learn more:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              How Google uses data in advertising
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/admob/answer/6128543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              AdMob &amp; user data
            </a>
          </li>
        </ul>
        <p>
          You can limit ad personalization in your device settings (Android: Google
          → Ads; iOS: Privacy → Tracking).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          5. In-App Purchases
        </h2>
        <p>
          Premium Lifetime is a one-time purchase processed by Apple or Google.
          Refunds and billing disputes are handled according to the respective
          store&apos;s policies. We do not store your payment card information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          6. Data Sharing
        </h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>Google and Apple (authentication and purchases);</li>
          <li>Google AdMob (advertising);</li>
          <li>Service providers that help us operate the App (hosting, analytics);</li>
          <li>Authorities when required by law.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          7. Data Retention
        </h2>
        <p>
          We keep your account and game data while your account is active. When
          you delete your account, we delete or anonymize associated personal data
          within a reasonable period, except where retention is required by law or
          for legitimate business purposes (such as fraud prevention).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          8. Account Deletion
        </h2>
        <p>
          You can delete your account at any time. The easiest way is in the App:
          open <strong className="text-foreground">Profile</strong>, scroll to the
          bottom, tap the delete account option, and confirm. For full details,
          see our{" "}
          <Link
            href="/quizircle/account-deletion"
            className="text-accent hover:underline"
          >
            Account Deletion
          </Link>{" "}
          page.
        </p>
        <p>
          If you cannot delete your account in the App, email us at{" "}
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${appName} Account Deletion Request`)}`}
            className="text-accent hover:underline"
          >
            {contactEmail}
          </a>{" "}
          from the email linked to your account and request deletion.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          9. Children&apos;s Privacy
        </h2>
        <p>
          The App is not directed to children under 13. We do not knowingly collect
          personal information from children. If you believe a child has provided
          us with personal data, contact us and we will delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          10. Your Rights
        </h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict processing of your personal data. Contact us to
          exercise these rights.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          11. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version on this page and change the effective date. Continued use
          of the App after changes means you accept the updated policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">12. Contact Us</h2>
        <p>
          <strong className="text-foreground">{developerName}</strong>
          <br />
          Email:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-accent hover:underline"
          >
            {contactEmail}
          </a>
        </p>
      </section>
    </LegalLayout>
  );
}
