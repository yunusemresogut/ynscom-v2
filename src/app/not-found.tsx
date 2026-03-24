import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          <span className="text-heading">4</span>
          <span className="text-accent">0</span>
          <span className="text-heading">4</span>
        </h1>
        <p className="text-muted text-sm max-w-xs mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors duration-300"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>
    </main>
  );
}
