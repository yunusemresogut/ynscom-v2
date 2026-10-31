import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/quizircle/LegalLayout";
import { quizircleConfig } from "@/lib/quizircle-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${quizircleConfig.appName} mobile game.`,
  alternates: {
    canonical: quizircleConfig.urls.terms,
  },
};

export default function QuizircleTermsPage() {
  const { appName, developerName, contactEmail, effectiveDate } = quizircleConfig;

  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate={effectiveDate}
      active="terms"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
        <strong className="text-foreground">{appName}</strong> (the
        &quot;App&quot;), a word quiz game developed by {developerName}. By
        downloading, accessing, or using the App, you agree to these Terms.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">1. The App</h2>
        <p>
          {appName} is a fast-paced word quiz game. Each round presents
          letter-based and category-based questions. Answer correctly to earn
          points, track your progress, and improve your stats over time.
          Features may include optional account linking (Google or Apple),
          advertisements, rewarded ad viewing, and a Premium Lifetime purchase
          that removes ads and unlocks premium features.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the App. If you are under the
          age required to consent in your country, you must have permission from
          a parent or legal guardian.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">3. Accounts</h2>
        <p>
          You may play as a guest or link your progress to an account using
          Google or Apple Sign-In. You are responsible for maintaining access
          to your account and for all activity that occurs under it. Do not share
          your account or use another person&apos;s account without permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          4. Premium Lifetime Purchase
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            Premium Lifetime is a one-time in-app purchase that removes
            advertisements and unlocks premium features for the lifetime of the
            App, as described in the store listing.
          </li>
          <li>
            Payment is processed by Apple App Store or Google Play. All billing
            and refund requests must be submitted through the store where you
            made the purchase, in accordance with their policies.
          </li>
          <li>
            Premium access is tied to your store account. If you switch devices
            or reinstall the App, use the same store account to restore your
            purchase.
          </li>
          <li>
            We may modify premium features over time, but we will not remove
            core premium benefits already purchased without a valid reason and
            reasonable notice where required by law.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">5. Advertisements</h2>
        <p>
          Non-premium users may see advertisements served through Google AdMob,
          including optional rewarded ads. Ad content is provided by third
          parties. Premium Lifetime users do not see in-app ads. See our{" "}
          <Link href="/quizircle/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>{" "}
          for how advertising data is handled.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>Cheat, exploit bugs, or use unauthorized tools to gain an advantage;</li>
          <li>Reverse engineer, decompile, or attempt to extract source code;</li>
          <li>Interfere with servers, other users, or the App&apos;s operation;</li>
          <li>Use the App for any unlawful purpose.</li>
        </ul>
        <p>
          We may suspend or terminate access if you violate these Terms or abuse
          the App.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          7. Intellectual Property
        </h2>
        <p>
          The App, including its design, content, questions, graphics, and code,
          is owned by {developerName} and protected by applicable intellectual
          property laws. You receive a limited, non-exclusive, non-transferable
          license to use the App for personal, non-commercial purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          8. Account Deletion
        </h2>
        <p>
          You may delete your account at any time from the Profile section in the
          App. See our{" "}
          <Link
            href="/quizircle/account-deletion"
            className="text-accent hover:underline"
          >
            Account Deletion
          </Link>{" "}
          page for step-by-step instructions and email support options.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">9. Disclaimers</h2>
        <p>
          The App is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, to the fullest extent permitted by law.
          We do not guarantee uninterrupted or error-free operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          10. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, {developerName} shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from your use of the App. Our total liability shall not exceed
          the amount you paid for Premium Lifetime in the twelve months preceding
          the claim, or zero if you have not made a purchase.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">11. Changes</h2>
        <p>
          We may update these Terms from time to time. We will post the revised
          Terms on this page and update the effective date. Continued use of the
          App after changes constitutes acceptance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">12. Contact</h2>
        <p>
          Questions about these Terms? Contact:
          <br />
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
