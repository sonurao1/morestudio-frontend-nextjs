"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CarouselDots from "@/components/ui/CarouselDots";
import { useCarousel } from "@/hooks/useCarousel";
import { testimonialGroups } from "@/data/testimonials";

export default function Testimonials() {
  const { active, goTo, pause, resume } = useCarousel(testimonialGroups.length);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Trusted by Brands, Loved by Partners"
          align="center"
          className="mx-auto"
        />

        <div onMouseEnter={pause} onMouseLeave={resume}>
          <div
            key={active}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animation: "fadeSlideIn 0.45s ease" }}
          >
            {testimonialGroups[active].map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>

        <CarouselDots
          count={testimonialGroups.length}
          active={active}
          onSelect={goTo}
          className="mt-10"
        />
      </Container>
    </section>
  );
}
