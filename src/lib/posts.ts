import { createClient } from "@/lib/supabase/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import type { BlogPost, DbPost } from "@/lib/types";

export function mapPost(row: DbPost): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    tags: row.tags ?? [],
    readTime: row.read_time,
    published: row.published,
    coverImageUrl: row.cover_image_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function getSupabase() {
  if (!getSupabaseUrl() || !getSupabaseAnonKey()) {
    return null;
  }
  return createClient();
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getPublishedPosts:", error.message);
    return [];
  }

  return (data as DbPost[]).map(mapPost);
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const supabase = await getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) return null;
  return mapPost(data as DbPost);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = await getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllPosts:", error.message);
    return [];
  }

  return (data as DbPost[]).map(mapPost);
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const supabase = await getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return mapPost(data as DbPost);
}

export async function getPublishedSlugs(): Promise<
  { slug: string; updatedAt: string }[]
> {
  const supabase = await getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("posts")
    .select("slug, updated_at")
    .eq("published", true);

  if (error || !data) return [];
  return data.map((row) => ({
    slug: row.slug,
    updatedAt: row.updated_at,
  }));
}
