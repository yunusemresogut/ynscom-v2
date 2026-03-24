import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";
import { placeholderPosts } from "@/lib/placeholder-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about software, technology and web development.",
};

export default function BlogPage() {
  return <BlogPageContent posts={placeholderPosts} />;
}
