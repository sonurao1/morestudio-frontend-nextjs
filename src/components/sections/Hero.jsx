import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Stat from "@/components/ui/Stat";
import HeroVisual from "@/components/sections/HeroVisual";
import { stats } from "@/data/stats";


export default function Hero() {
  const heroStats = stats.slice(0, 3);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0A0A0F]"
    >
      {/* =========================
          Background Image
      ========================== */}
      <Image
      src="/global_images/hero5.png"
      alt=""
      fill
      priority
      sizes="100vw"
      className="
        -z-30
        object-cover
        object-[72%_center]
        sm:object-[75%_center]
        md:object-[80%_center]
        lg:object-[85%_center]
        xl:object-right
      "
    />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-black/55" />

      {/* Left Gradient for Text */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-[#1D4ED8]/15 blur-3xl" />

      <Container className="relative z-10 grid min-h-[90vh] grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Left Content */}
        <div>
          <span className="eyebrow text-[13px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FED600]">
            Corporate Video Production Company
          </span>

          <h1 className="mt-5 font-display text-[30px] sm:text-[36px] md:text-[42px] lg:text-[70px] font-extrabold leading-[1.08] tracking-tight text-white">
            Powerful Videos.
            <br />
            Stronger Brands.
          </h1>

          <p className="mt-6 max-w-md md:max-w-lg text-[13px] md:text-[17px] lg:text-[1.3rem] leading-relaxed text-white/60">
            We create corporate films, commercials, product videos, training
            content and animation that inspire audiences and help businesses
            grow.
          </p>

          {/* Stats */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-5 sm:gap-x-8 sm:divide-x sm:divide-white/10">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "sm:pl-6 lg:pl-8" : ""}
              >
                <Stat {...stat} layout="row" tone="dark" />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#work"  icon className = "w-[180px] sm:w-[200px]">
              View Our Work
            </Button>

            <Button href="#contact" variant="outline"  className = "w-[180px] sm:w-[200px]">
              Book a Discovery Call
            </Button>
          </div>
        </div>

        {/* Right Side */}
        {/* <HeroVisual /> */}
      </Container>
    </section>
  );
}