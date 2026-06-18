import { createClient } from "@/lib/supabase/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import { withTimeout } from "@/lib/with-timeout";
import type { BlogPost, DbPost } from "@/lib/types";

const QUERY_TIMEOUT_MS = 5000;

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

async function runQuery<T>(
  fn: () => PromiseLike<{ data: T | null; error: { message: string } | null }>
): Promise<T | null> {
  const result = await withTimeout(
    Promise.resolve(fn()),
    QUERY_TIMEOUT_MS,
    null
  );

  if (!result || result.error || result.data === null) {
    if (result?.error) console.error("Supabase query:", result.error.message);
    return null;
  }

  return result.data;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await getSupabase();
  if (!supabase) return [];

  const data = await runQuery(() =>
    supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
  );

  return data ? (data as DbPost[]).map(mapPost) : [];
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const supabase = await getSupabase();
  if (!supabase) return null;

  const data = await runQuery(() =>
    supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()
  );

  return data ? mapPost(data as DbPost) : null;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = await getSupabase();
  if (!supabase) return [];

  const data = await runQuery(() =>
    supabase.from("posts").select("*").order("created_at", { ascending: false })
  );

  return data ? (data as DbPost[]).map(mapPost) : [];
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const supabase = await getSupabase();
  if (!supabase) return null;

  const data = await runQuery(() =>
    supabase.from("posts").select("*").eq("id", id).single()
  );

  return data ? mapPost(data as DbPost) : null;
}

export async function getPublishedSlugs(): Promise<
  { slug: string; updatedAt: string }[]
> {
  const supabase = await getSupabase();
  if (!supabase) return [];

  const data = await runQuery(() =>
    supabase.from("posts").select("slug, updated_at").eq("published", true)
  );

  if (!data) return [];
  return (data as { slug: string; updated_at: string }[]).map((row) => ({
    slug: row.slug,
    updatedAt: row.updated_at,
  }));
}
