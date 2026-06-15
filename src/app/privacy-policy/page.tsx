import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { privacyConfig } from "@/lib/privacy-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for mobile applications using Google AdMob.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const { appName, developerName, contactEmail, effectiveDate } = privacyConfig;

  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-12 sm:py-16">
      <article className="mx-auto max-w-3xl min-w-0">
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="text-2xl sm:text-3xl font-bold text-heading tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Effective date: {effectiveDate}
          </p>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            This policy describes how {developerName} (&quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) collects, uses, and shares information when you use{" "}
            <strong className="text-foreground">{appName}</strong> (the
            &quot;Application&quot;).
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              1. Information We Collect
            </h2>
            <p>
              The Application may collect or receive the following types of
              information, including through third-party advertising partners:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/70">
              <li>
                <strong className="text-foreground">Device information</strong>{" "}
                — device model, operating system version, unique device
                identifiers, and mobile network information.
              </li>
              <li>
                <strong className="text-foreground">Advertising identifiers</strong>{" "}
                — such as Google Advertising ID (GAID) on Android or Identifier
                for Advertisers (IDFA) on iOS, where permitted by your device
                settings and applicable law.
              </li>
              <li>
                <strong className="text-foreground">Usage data</strong> — app
                interactions, session duration, crash logs, and performance data.
              </li>
              <li>
                <strong className="text-foreground">IP address</strong> — may be
                collected by advertising partners for ad delivery and fraud
                prevention.
              </li>
              <li>
                <strong className="text-foreground">Approximate location</strong>{" "}
                — derived from IP address for ad targeting, where applicable.
              </li>
            </ul>
            <p>
              We do not knowingly collect personally identifiable information
              such as your name, email address, or phone number unless you
              voluntarily provide it to us (for example, when contacting
              support).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              2. How We Use Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/70">
              <li>Provide, maintain, and improve the Application;</li>
              <li>Display personalized and non-personalized advertisements;</li>
              <li>Measure ad performance and prevent ad fraud;</li>
              <li>Analyze usage patterns and fix technical issues;</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              3. Third-Party Services — Google AdMob
            </h2>
            <p>
              The Application uses <strong className="text-foreground">Google AdMob</strong>{" "}
              to serve advertisements. AdMob and its partners may collect and
              use data as described in Google&apos;s policies:
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
                  AdMob &amp; user data (Google Help)
                </a>
              </li>
            </ul>
            <p>
              AdMob may use cookies, mobile identifiers, and similar technologies
              to show ads based on your past activity and interests. You can
              learn more about how Google personalizes ads at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Ad Settings
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              4. Legal Basis (EEA / UK Users)
            </h2>
            <p>
              If you are in the European Economic Area or the United Kingdom, we
              process data based on your consent (for personalized advertising,
              where required), our legitimate interests (app functionality,
              security, and non-personalized ads), and compliance with legal
              obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              5. Your Choices &amp; Opt-Out
            </h2>
            <p>You can limit ad tracking through your device settings:</p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/70">
              <li>
                <strong className="text-foreground">Android:</strong> Settings →
                Google → Ads → Opt out of Ads Personalization
              </li>
              <li>
                <strong className="text-foreground">iOS:</strong> Settings →
                Privacy &amp; Security → Tracking → Allow Apps to Request to
                Track (disable per app)
              </li>
            </ul>
            <p>
              You may also reset your advertising identifier in your device
              settings. Opting out does not remove ads; ads may still be shown,
              but they may be less relevant to your interests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              6. Children&apos;s Privacy
            </h2>
            <p>
              The Application is not directed to children under the age of 13 (or
              16 in certain jurisdictions). We do not knowingly collect personal
              information from children. If you believe a child has provided us
              with personal information, please contact us and we will delete it
              promptly.
            </p>
            <p>
              If the Application is designed for children or mixed audiences,
              we configure AdMob to serve only age-appropriate, non-personalized
              ads in compliance with applicable laws, including COPPA where
              relevant.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              7. Data Retention
            </h2>
            <p>
              We retain information only as long as necessary to fulfill the
              purposes described in this policy, unless a longer retention period
              is required by law. Data collected by third-party advertising
              partners is retained according to their own policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              8. Data Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect information. However, no method of transmission over the
              internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              9. International Data Transfers
            </h2>
            <p>
              Your information may be processed in countries other than your own,
              including countries that may not provide the same level of data
              protection. By using the Application, you consent to such transfers
              where permitted by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the revised policy on this page and update the effective date. Your
              continued use of the Application after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-heading">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, contact:
            </p>
            <p className="text-foreground/70">
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
        </div>
      </article>
    </main>
  );
}
