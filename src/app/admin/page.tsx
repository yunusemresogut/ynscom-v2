import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import { getAllPosts } from "@/lib/posts";
import AdminHeader from "@/components/admin/AdminHeader";
import PostList from "@/components/admin/PostList";

export default async function AdminPage() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  const posts = await getAllPosts();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <AdminHeader />
        <PostList posts={posts} />
      </div>
    </main>
  );
}
