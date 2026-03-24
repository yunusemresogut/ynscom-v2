"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { HiOutlineClock, HiOutlineArrowRight } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const { locale } = useLanguage();

  const formattedDate = new Date(post.createdAt).toLocaleDateString(
    locale === "tr" ? "tr-TR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article
      className="animate-fade-in group relative rounded-xl bg-surface border border-border p-6 hover:border-accent/30 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-xs text-muted">
          <time dateTime={post.createdAt}>{formattedDate}</time>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1">
            <HiOutlineClock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            <Link href={`/blog/${post.slug}`} className="outline-none">
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between">
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
          <HiOutlineArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </article>
  );
}
