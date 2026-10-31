import { Baloo_2 } from "next/font/google";

// Oyunun kendi arayüz fontu
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

export default function IznikTilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={baloo.variable}>{children}</div>;
}
