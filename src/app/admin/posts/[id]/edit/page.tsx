import { notFound, redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import { getPostById } from "@/lib/posts";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <AdminHeader />
        <h2 className="text-lg font-semibold text-heading mb-6">Yazıyı Düzenle</h2>
        <PostForm post={post} />
      </div>
    </main>
  );
}
