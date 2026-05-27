"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineClock } from "react-icons/hi2";
import MarkdownContent from "@/components/MarkdownContent";
import type { BlogPost } from "@/lib/types";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [readingMode, setReadingMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("blog-reading-mode");
    if (saved === "on") setReadingMode(true);
  }, []);

  useEffect(() => {
    if (!readingMode) {
      setReadingProgress(0);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setReadingProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setReadingProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [readingMode]);

  function toggleReadingMode() {
    setReadingMode((prev) => {
      const next = !prev;
      localStorage.setItem("blog-reading-mode", next ? "on" : "off");
      return next;
    });
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main
      className={`min-h-screen px-4 sm:px-6 py-10 sm:py-16 transition-colors ${
        readingMode ? "bg-[#141414] text-[#dedede]" : ""
      }`}
    >
      {readingMode && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-surface-light/70">
          <div
            className="h-full bg-accent transition-[width] duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}
      <article
        className={`mx-auto min-w-0 transition-all ${
          readingMode ? "max-w-[75ch]" : "max-w-5xl"
        }`}
      >
        <div className="animate-fade-in space-y-8">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              <HiOutlineArrowLeft className="w-4 h-4" />
              Blog
            </Link>
            <button
              type="button"
              onClick={toggleReadingMode}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                readingMode
                  ? "border-accent/40 text-accent bg-accent/10"
                  : "border-border text-muted hover:text-accent hover:border-accent/40"
              }`}
            >
              {readingMode ? "Okuma Modu Acik" : "Okuma Modu"}
            </button>
          </div>

          <header
            className={`space-y-4 pb-8 border-b border-border min-w-0 ${
              readingMode ? "mb-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <time dateTime={post.createdAt}>{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1">
                <HiOutlineClock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1
              className={`font-black tracking-tight wrap-break-word ${
                readingMode
                  ? "text-3xl md:text-4xl leading-tight text-[#f4f4f4]"
                  : "text-2xl md:text-3xl text-heading"
              }`}
            >
              {post.title}
            </h1>

            {!readingMode && post.coverImageUrl && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            {!readingMode && (
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
            )}
          </header>

          <MarkdownContent
            content={post.content}
            className={
              readingMode
                ? "prose-base md:prose-lg leading-[1.9] prose-p:text-[#d2d2d2] prose-headings:text-[#f4f4f4]"
                : ""
            }
          />
        </div>
      </article>
    </main>
  );
}
