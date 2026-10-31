import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  /** Ekran görüntüsü çerçeveden kısa kalırsa boşluğu dolduran renk */
  screenColor: string;
  frameClassName?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function PhoneFrame({
  src,
  alt,
  screenColor,
  frameClassName = "border-white/10 bg-black",
  className = "",
  priority,
  sizes = "(min-width: 1024px) 300px, 60vw",
}: PhoneFrameProps) {
  return (
    <div
      className={`aspect-[9/19.5] rounded-[2.4rem] border-[6px] shadow-2xl ${frameClassName} ${className}`}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[1.9rem]"
        style={{ backgroundColor: screenColor }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
