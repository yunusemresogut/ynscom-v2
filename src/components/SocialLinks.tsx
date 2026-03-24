"use client";

import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ynsemrsgt",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/YunusEmreSgt",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yunus-emre-s%C3%B6%C4%9F%C3%BCt-055439ab/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/yunusemresogut",
    icon: FaGithub,
  },
];

export default function SocialLinks() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in flex flex-wrap items-center gap-3" style={{ animationDelay: "0.4s" }}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="group flex items-center justify-center w-10 h-10 rounded-lg bg-surface-light border border-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
        >
          <social.icon className="w-4 h-4" />
        </a>
      ))}

      <Link
        href="/blog"
        className="flex items-center gap-2 px-4 h-10 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors duration-300"
      >
        <HiOutlineBookOpen className="w-4 h-4" />
        {t("blog")}
      </Link>
    </div>
  );
}
