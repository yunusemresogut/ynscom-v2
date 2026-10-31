import type { Metadata } from "next";
import QuizircleLanding from "@/components/quizircle/QuizircleLanding";
import AppJsonLd from "@/components/apps/AppJsonLd";
import { appUrl, quizircleApp } from "@/lib/apps";

const description =
  "Circle the alphabet, answer a question for every letter and race the clock. A fast-paced trivia game with voice answers, duels, a weekly tournament and leaderboards. Free on iOS and Android.";

export const metadata: Metadata = {
  title: { absolute: "Quizircle: Letter Circle Trivia Quiz" },
  description,
  keywords: ["Quizircle", "trivia", "quiz game", "bilgi yarışması", "harf çemberi", "kelime oyunu", "iOS", "Android"],
  alternates: { canonical: appUrl(quizircleApp) },
  openGraph: {
    type: "website",
    url: appUrl(quizircleApp),
    siteName: "Quizircle",
    title: "Quizircle: Letter Circle Trivia Quiz",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizircle: Letter Circle Trivia Quiz",
    description,
  },
  other: {
    "apple-itunes-app": "app-id=6783071597",
  },
};

export default function QuizirclePage() {
  return (
    <>
      <AppJsonLd app={quizircleApp} description={description} genre="Trivia" operatingSystem="iOS, Android" />
      <QuizircleLanding />
    </>
  );
}
