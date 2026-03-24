"use client";

import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineClock } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPost } from "@/lib/types";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { locale, t } = useLanguage();

  const formattedDate = new Date(post.createdAt).toLocaleDateString(
    locale === "tr" ? "tr-TR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <div className="animate-fade-in space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-300"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            {t("allPosts")}
          </Link>

          <header className="space-y-4 pb-8 border-b border-border">
            <div className="flex items-center gap-3 text-xs text-muted">
              <time dateTime={post.createdAt}>{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1">
                <HiOutlineClock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-heading">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-surface-light border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="max-w-none">
            <p className="text-foreground/60 leading-relaxed text-base">
              {post.excerpt}
            </p>
            <div className="mt-12 rounded-xl bg-surface border border-border p-8 text-center">
              <p className="text-muted text-sm">
                {t("postComingSoon")}
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
