"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { createPost, updatePost } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/utils";
import type { BlogPost } from "@/lib/types";

interface PostFormProps {
  post?: BlogPost;
}

export default function PostForm({ post }: PostFormProps) {
  const isEdit = !!post;
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugManual, setSlugManual] = useState(isEdit);
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [tags, setTags] = useState(post?.tags.join(", ") ?? "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [coverImageUrl, setCoverImageUrl] = useState(post?.coverImageUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugManual) setSlug(slugify(value));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ""))}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(path, file, { upsert: false });

    if (uploadError) {
      setError("Görsel yüklenemedi: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    setCoverImageUrl(data.publicUrl);
    setUploading(false);
  }

  async function handleSubmit(formData: FormData) {
    setError("");
    formData.set("coverImageUrl", coverImageUrl);

    startTransition(async () => {
      const result = isEdit
        ? await updatePost(post!.id, formData)
        : await createPost(formData);

      if (result?.error) {
        const messages = Object.values(result.error).flat().join(", ");
        setError(messages || "Bir hata oluştu.");
      }
    });
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-surface-light border border-border text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors";

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <label htmlFor="title" className="text-xs font-mono uppercase tracking-widest text-muted">
          Başlık
        </label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="slug" className="text-xs font-mono uppercase tracking-widest text-muted">
          Slug
        </label>
        <input
          id="slug"
          name="slug"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setSlugManual(true);
          }}
          required
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="excerpt" className="text-xs font-mono uppercase tracking-widest text-muted">
          Özet
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={2}
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="text-xs font-mono uppercase tracking-widest text-muted">
          İçerik (Markdown)
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className={`${inputClass} font-mono text-xs leading-relaxed`}
          placeholder="## Başlık&#10;&#10;Yazını buraya markdown olarak yaz..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="tags" className="text-xs font-mono uppercase tracking-widest text-muted">
          Etiketler (virgülle ayır)
        </label>
        <input
          id="tags"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Next.js, React, Web"
          className={inputClass}
        />
      </div>

      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-widest text-muted">
          Kapak Görseli
        </label>
        {coverImageUrl && (
          <div className="relative w-full max-w-xs aspect-video rounded-lg overflow-hidden border border-border">
            <Image
              src={coverImageUrl}
              alt="Kapak"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading}
          className="text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-surface-light file:text-foreground file:text-xs file:cursor-pointer"
        />
        {uploading && <p className="text-xs text-muted">Yükleniyor...</p>}
        <input type="hidden" name="coverImageUrl" value={coverImageUrl} />
        {coverImageUrl && (
          <button
            type="button"
            onClick={() => setCoverImageUrl("")}
            className="text-xs text-muted hover:text-accent cursor-pointer"
          >
            Görseli kaldır
          </button>
        )}
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="published"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="w-4 h-4 rounded border-border accent-accent"
        />
        <span className="text-sm text-foreground">Yayınla</span>
      </label>

      {error && <p className="text-sm text-accent">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending || uploading}
          className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Kaydediliyor..." : isEdit ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
}
