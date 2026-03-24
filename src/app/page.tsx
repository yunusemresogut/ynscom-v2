import type { Metadata } from "next";
import ProfileCard from "@/components/ProfileCard";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Personal Website - Yunus Emre Söğüt",
  description: "Personal website of Yunus Emre Söğüt",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
        <aside className="shrink-0">
          <ProfileCard />
        </aside>

        <section className="flex-1 flex flex-col gap-8 min-w-0">
          <HeroSection />
          <Skills />
          <SocialLinks />
          <Contact />
        </section>
      </div>
    </main>
  );
}
