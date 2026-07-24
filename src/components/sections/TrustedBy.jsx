"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Container from "@/components/ui/Container";
import { brands } from "@/data/brands";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Reset refs on every render
  // cardsRef.current = [];

  useGSAP(
    () => {
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3",
        stagger: {
          each: 0.08,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end:"top 50%",
      
          invalidateOnRefresh: true,
          // markers: true,
          scrub:1
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
    id="industries"
      ref={sectionRef}
      className="border-y border-line bg-surface py-10"
    >
      <Container>
        <p className="eyebrow text-center text-[12px] font-bold uppercase tracking-[0.2em] text-ink-muted">
          Trusted by 100+ Leading Brands
        </p>

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                ref={(el) => {
                  if (el) cardsRef.current.push(el);
                }}
                className="group flex h-16 items-center justify-center rounded-xl border border-line bg-white px-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-18 md:h-20 lg:h-20"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={60}
                  className="h-auto w-auto max-h-7 max-w-[90px] object-contain  transition-all duration-300 group-hover:scale-105 sm:max-h-8 sm:max-w-[100px] md:max-h-9 md:max-w-[110px] lg:max-h-8 lg:max-w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}