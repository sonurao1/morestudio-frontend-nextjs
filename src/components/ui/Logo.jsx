import Image from "next/image";
import moreslidesLogo from "@/Assets/logos/moreslides.webp";

export default function Logo({ className = "" }) {
  return (
    <a href="#home" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image 
      src={moreslidesLogo}
       alt="MoreSlides Logo" 
       className="h-12 w-auto text-white"
      />
    </a>
  );
}
