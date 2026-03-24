import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";
import { placeholderPosts } from "@/lib/placeholder-posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = placeholderPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = placeholderPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
