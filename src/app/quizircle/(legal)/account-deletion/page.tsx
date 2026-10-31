import type { Metadata } from "next";
import LegalLayout from "@/components/quizircle/LegalLayout";
import { quizircleConfig } from "@/lib/quizircle-config";

export const metadata: Metadata = {
  title: "Account Deletion",
  description: `How to delete your ${quizircleConfig.appName} account.`,
  alternates: {
    canonical: quizircleConfig.urls.accountDeletion,
  },
};

export default function QuizircleAccountDeletionPage() {
  const { appName, developerName, contactEmail, effectiveDate } = quizircleConfig;

  return (
    <LegalLayout
      title="Account Deletion"
      effectiveDate={effectiveDate}
      active="account-deletion"
    >
      <p>
        You can request deletion of your <strong className="text-foreground">{appName}</strong>{" "}
        account and associated personal data at any time. This page explains how
        to do it, as required by Apple App Store and Google Play policies.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          Option 1: Delete in the App (Recommended)
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-foreground/70">
          <li>Open {appName} on your device.</li>
          <li>Go to the <strong className="text-foreground">Profile</strong> section.</li>
          <li>Scroll to the bottom of the Profile screen.</li>
          <li>Tap the account deletion option.</li>
          <li>Read the confirmation message and confirm deletion.</li>
        </ol>
        <p>
          Once confirmed, your account and associated game data will be scheduled
          for deletion. This action is permanent and cannot be undone.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          Option 2: Request Deletion by Email
        </h2>
        <p>
          If you cannot access the App or complete deletion in Profile, email us:
        </p>
        <p className="text-foreground/70">
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${appName} Account Deletion Request`)}&body=${encodeURIComponent(`Please delete my ${appName} account.\n\nAccount email: [your account email here]\n\nI confirm that I want to permanently delete my account and all associated data.`)}`}
            className="text-accent hover:underline font-medium"
          >
            {contactEmail}
          </a>
        </p>
        <p>Include the following in your email:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>Subject line: &quot;{appName} Account Deletion Request&quot;</li>
          <li>The email address linked to your {appName} account</li>
          <li>A clear statement that you want your account permanently deleted</li>
        </ul>
        <p>
          We will verify your request and process deletion within 30 days. We may
          contact you if we need additional information to confirm your identity.
          Send the email from the same address linked to your {appName} account
          when possible, so we can verify ownership faster.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          What Gets Deleted
        </h2>
        <p>When your account is deleted, we remove or anonymize:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>Your account profile and linked sign-in data;</li>
          <li>Game progress, scores, and statistics;</li>
          <li>In-app preferences and settings stored on our servers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          What May Be Retained
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/70">
          <li>
            Purchase records handled by Apple or Google (contact the store for
            purchase history deletion);
          </li>
          <li>
            Data we are legally required to keep (e.g. fraud prevention, tax, or
            legal compliance);
          </li>
          <li>
            Anonymized or aggregated data that cannot identify you.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">
          Premium Lifetime Purchases
        </h2>
        <p>
          Deleting your account does not automatically refund a Premium Lifetime
          purchase. Refund requests must be submitted through Apple App Store or
          Google Play according to their policies. Premium access tied to your
          store account may still be restorable if you create a new in-app
          account using the same store account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-heading">Contact</h2>
        <p>
          For questions about account deletion:
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
