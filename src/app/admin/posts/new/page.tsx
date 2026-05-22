import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";

export default async function NewPostPage() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <AdminHeader />
        <h2 className="text-lg font-semibold text-heading mb-6">Yeni Yazı</h2>
        <PostForm />
      </div>
    </main>
  );
}
