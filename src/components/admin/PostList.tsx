"use client";

import Link from "next/link";
import { useTransition } from "react";
import { deletePost } from "@/app/admin/actions";
import type { BlogPost } from "@/lib/types";

interface PostListProps {
  posts: BlogPost[];
}

export default function PostList({ posts }: PostListProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete(id: string, title: string) {
    if (!confirm(`"${title}" yazısını silmek istediğine emin misin?`)) return;
    startTransition(async () => {
      await deletePost(id);
      window.location.reload();
    });
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 rounded-xl border border-border bg-surface">
        <p className="text-muted text-sm mb-4">Henüz yazı yok.</p>
        <Link
          href="/admin/posts/new"
          className="inline-flex px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
        >
          İlk yazını oluştur
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground truncate">
                {post.title}
              </h3>
              <span
                className={`shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-md ${
                  post.published
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-surface-light text-muted border border-border"
                }`}
              >
                {post.published ? "Yayında" : "Taslak"}
              </span>
            </div>
            <p className="text-xs text-muted truncate">/{post.slug}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {post.published && (
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="px-3 py-1.5 text-xs text-muted hover:text-accent transition-colors"
              >
                Görüntüle
              </Link>
            )}
            <Link
              href={`/admin/posts/${post.id}/edit`}
              className="px-3 py-1.5 text-xs rounded-lg bg-surface-light border border-border hover:border-accent/40 transition-colors"
            >
              Düzenle
            </Link>
            <button
              onClick={() => handleDelete(post.id, post.title)}
              disabled={isPending}
              className="px-3 py-1.5 text-xs text-muted hover:text-accent transition-colors cursor-pointer disabled:opacity-50"
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
