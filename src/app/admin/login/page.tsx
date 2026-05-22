import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Giriş",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-heading">AD</span>
            <span className="text-accent">MIN</span>
          </h1>
          <p className="text-muted text-sm">Yönetim paneline giriş yap</p>
        </div>
        <Suspense fallback={<div className="h-40" />}>
          <LoginForm />
        </Suspense>
        <p className="text-center">
          <Link
            href="/"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            ← Ana sayfaya dön
          </Link>
        </p>
      </div>
    </main>
  );
}
