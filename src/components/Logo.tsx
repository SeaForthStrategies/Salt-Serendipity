import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`group block ${light ? "rotate-[-2deg]" : ""}`} aria-label="Salt and Serendipity home">
      <Image
        src={light ? "/images/logo-stamp.png" : "/images/logo-wordmark.png"}
        alt="Salt & Serendipity"
        width={light ? 900 : 800}
        height={light ? 593 : 390}
        className={`${light ? "w-48 brightness-0 invert md:w-56" : "w-[140px] md:w-[160px]"} transition-transform duration-500 group-hover:scale-[1.025]`}
        priority={!light}
      />
    </Link>
  );
}
