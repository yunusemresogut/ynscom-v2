import Link from "next/link";
import { signOut } from "@/app/admin/actions";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between mb-10 pb-6 border-b border-border">
      <div className="flex items-center gap-4">
        <Link href="/admin" className="text-lg font-black tracking-tight">
          <span className="text-heading">AD</span>
          <span className="text-accent">MIN</span>
        </Link>
        <Link
          href="/admin/posts/new"
          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-colors"
        >
          + Yeni Yazı
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="text-xs text-muted hover:text-accent transition-colors"
        >
          Siteye Dön
        </Link>
        <form action={signOut}>
          <button
            type="submit"
            className="text-xs text-muted hover:text-accent transition-colors cursor-pointer"
          >
            Çıkış
          </button>
        </form>
      </div>
    </header>
  );
}
