import { Recycle } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";



type LogoProps = { className?: string; light?: boolean };

export default function Logo({ className = "", light = true }: LogoProps) {
  return (
    // <span className={`inline-flex items-center gap-2.5 ${className}`}>
    //   <span className="relative grid h-10 w-10 place-items-center rounded-md bg-accent text-white shadow-md shadow-accent/30">
    //     <Recycle className="h-6 w-6" strokeWidth={2.4} aria-hidden="true" />
    //   </span>
    //   <span className="flex flex-col leading-none">
    //     <span className={`font-display text-2xl font-extrabold tracking-wider ${light ? "text-white" : "text-heading"}`}>
    //       {siteConfig.logoText.main}
    //     </span>
    //     <span className="font-display text-[0.7rem] font-semibold tracking-[0.42em] text-highlight">
    //       {siteConfig.logoText.sub}
    //     </span>
    //   </span>
    <Image
      src={siteConfig.logoImage}
      alt={siteConfig.name}
      width={20}
      height={20}
      priority
      className={`h-14 w-auto sm:h-16 lg:h-16 ${className}`}
    />
    // </span>
  );
}
