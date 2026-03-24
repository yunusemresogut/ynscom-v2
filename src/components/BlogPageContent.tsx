"use client";

import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import BlogPostCard from "@/components/BlogPostCard";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPost } from "@/lib/types";

interface BlogPageContentProps {
  posts: BlogPost[];
}

export default function BlogPageContent({ posts }: BlogPageContentProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="animate-fade-in mb-12 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-300"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-heading">BL</span>
              <span className="text-accent">OG</span>
            </h1>
            <p className="text-foreground/50 text-sm max-w-md">
              {t("blogDescription")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <BlogPostCard key={post.id} post={post} index={i} />
            ))
          ) : (
            <div className="animate-fade-in text-center py-20">
              <p className="text-muted text-sm">{t("noPosts")}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
