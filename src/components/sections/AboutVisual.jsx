import { Aperture } from "lucide-react";
import Image from "next/image";

// import CenamaticImage from "@/Assets/global_images/page2.png";

export default function AboutVisual() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-night-soft via-night to-black">
      {/* ambient glow */}
      <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
      <div className="absolute -top-10 right-0 h-48 w-48 rounded-full bg-amber-500/15 blur-3xl" />

      <Image
        src="/global_images/page2.png"
        alt="Cenamatic"
        width={800}
        height={600}
        priority
        quality={100}
        className="absolute inset-0 h-full w-full object-cover"
      />

    </div>
  );
}
