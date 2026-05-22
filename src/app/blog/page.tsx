import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about software, technology and web development.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <BlogPageContent posts={posts} />;
}
