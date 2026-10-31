import Image from "next/image";

const UI = "/apps/iznik-tiles/ui";

export type TileKind = "normal" | "pattern" | "hidden" | "locked";

interface TileProps {
  motif?: number;
  kind?: TileKind;
  /** Kilitli taşın anahtar rozetindeki motif */
  keyMotif?: number;
  className?: string;
}

// Oyundaki taş: 5:6 oranlı yüzey, ortada motif
export default function Tile({ motif = 0, kind = "normal", keyMotif, className = "" }: TileProps) {
  const face = kind === "hidden" ? "tile_back" : kind === "pattern" ? "tile_face_desen" : "tile_face";

  return (
    <div className={`relative aspect-[5/6] ${className}`}>
      <Image src={`${UI}/${face}.png`} alt="" fill sizes="96px" className="object-contain" />
      {kind !== "hidden" && (
        <Image
          src={`/apps/iznik-tiles/motifs/${motif}.png`}
          alt=""
          width={96}
          height={96}
          className="absolute inset-[16%] h-[68%] w-[68%] object-contain"
        />
      )}
      {kind === "locked" && (
        <>
          <Image src={`${UI}/chain.png`} alt="" fill sizes="96px" className="object-contain" />
          <div className="absolute -right-[12%] -top-[10%] w-[46%]">
            <Image src={`${UI}/key_badge.png`} alt="" width={64} height={64} className="h-auto w-full" />
            <Image
              src={`/apps/iznik-tiles/motifs/${keyMotif ?? 0}.png`}
              alt=""
              width={40}
              height={40}
              className="absolute inset-[24%] h-[52%] w-[52%] object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
}
