"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import CarouselDots from "@/components/ui/CarouselDots";
import { useCarousel } from "@/hooks/useCarousel";
import { brandGroups } from "@/data/brands";

export default function TrustedBy() {
  const { active, goTo, pause, resume } = useCarousel(brandGroups.length);

  return (
    <section className="border-y border-line bg-surface py-10">
      <Container>
        <p className="eyebrow text-center text-[12px] font-bold uppercase tracking-[0.2em] text-ink-muted">
          Trusted by 100+ Leading Brands
        </p>

        <div
          className="mt-8 flex items-center justify-center"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            key={active}
            className="flex flex-wrap items-center justify-center gap-8"
            style={{ animation: "fadeSlideIn 0.45s ease" }}
          >
            {brandGroups[active].map((brand) => (
              <div
                key={brand.name}
                className="group flex h-20 w-44 items-center justify-center rounded-xl border border-line bg-white px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <CarouselDots
          count={brandGroups.length}
          active={active}
          onSelect={goTo}
          className="mt-8"
        />
      </Container>
    </section>
  );
}