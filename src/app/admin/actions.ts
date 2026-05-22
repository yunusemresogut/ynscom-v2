"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAdminUser } from "@/lib/auth";
import { postSchema } from "@/lib/validations/post";
import { calculateReadTime, parseTags } from "@/lib/utils";

async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createPost(formData: FormData) {
  await requireAdmin();

  const raw = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    tags: formData.get("tags") as string,
    published: formData.get("published") === "on",
    coverImageUrl: (formData.get("coverImageUrl") as string) || "",
  };

  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("posts").insert({
    title: parsed.data.title,
    slug: parsed.data.slug,
    excerpt: parsed.data.excerpt,
    content: parsed.data.content,
    tags: parseTags(parsed.data.tags ?? ""),
    read_time: calculateReadTime(parsed.data.content),
    published: parsed.data.published,
    cover_image_url: parsed.data.coverImageUrl || null,
  });

  if (error) {
    return { error: { _form: [error.message] } };
  }

  revalidatePath("/blog");
  revalidatePath("/admin");
  revalidatePath("/sitemap.xml");
  redirect("/admin");
}

export async function updatePost(id: string, formData: FormData) {
  await requireAdmin();

  const raw = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    tags: formData.get("tags") as string,
    published: formData.get("published") === "on",
    coverImageUrl: (formData.get("coverImageUrl") as string) || "",
  };

  const parsed = postSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("posts")
    .update({
      title: parsed.data.title,
      slug: parsed.data.slug,
      excerpt: parsed.data.excerpt,
      content: parsed.data.content,
      tags: parseTags(parsed.data.tags ?? ""),
      read_time: calculateReadTime(parsed.data.content),
      published: parsed.data.published,
      cover_image_url: parsed.data.coverImageUrl || null,
    })
    .eq("id", id);

  if (error) {
    return { error: { _form: [error.message] } };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${parsed.data.slug}`);
  revalidatePath("/admin");
  revalidatePath("/sitemap.xml");
  redirect("/admin");
}

export async function deletePost(id: string) {
  await requireAdmin();

  const supabase = await createClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/blog");
  revalidatePath("/admin");
  revalidatePath("/sitemap.xml");
  return { success: true };
}
