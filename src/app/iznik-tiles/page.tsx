import type { Metadata } from "next";
import IznikLanding from "@/components/iznik-tiles/IznikLanding";
import AppJsonLd from "@/components/apps/AppJsonLd";
import { appUrl, iznikTilesApp } from "@/lib/apps";

const title = "Iznik Tiles: Relaxing Triple Tile Match Puzzle";
const description =
  "Match three Iznik tiles, clear layered boards and restore a historic Ottoman mansion. Handcrafted levels, beautiful Iznik art, no timers and no lives.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["Iznik Tiles", "triple match", "tile match", "mahjong", "puzzle", "İznik çinisi", "taş eşleştirme", "Ottoman"],
  alternates: { canonical: appUrl(iznikTilesApp) },
  openGraph: {
    type: "website",
    url: appUrl(iznikTilesApp),
    siteName: "Iznik Tiles",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function IznikTilesPage() {
  return (
    <>
      <AppJsonLd app={iznikTilesApp} description={description} genre="Puzzle" operatingSystem="iOS" />
      <IznikLanding />
    </>
  );
}
