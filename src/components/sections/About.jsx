import { Caveat } from "next/font/google";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AboutVisual from "@/components/sections/AboutVisual";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.3fr_1.7fr] lg:gap-16 ">
        <div className="flex flex-col gap-4 lg:items-start items-center text-center lg:text-left">
          <span className="eyebrow text-[.8rem] lg:text-xs font-bold uppercase text-brand">
            Who We Are
          </span>

          <h2 className="  mt-4 font-display text-[1.5rem] lg:text-[2rem] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[41px]">
            Storytellers. Filmmakers.
            <br />
            Brand Builders.
          </h2>

          <p className="mt-5 max-w-full lg:max-w-md text-[16px] leading-relaxed text-ink-muted">
            MoreStudios is a full-service video production house built on
            in-house talent — filmmakers, animators, writers and designers
            who take a project from first script to final delivery without
            handing it off along the way.
          </p>

          <div className=" mt-8 flex flex-wrap flex-col sm:flex-row justify-center 
          items-center gap-x-4 gap-y-3 text-center">
            <span className={`${caveat.className} text-3xl text-ink/80 sm:text-4xl`}>
              Arjun Mehra
            </span>
            <div className="sm:h-9 sm:w-px bg-line h-px w-9" />
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-ink">Arjun Mehra</p>
              <p className="text-xs text-ink-muted">Founder &amp; Creative Director</p>
            </div>
          </div>

          <Button href="#about" variant="outline-dark" size="md" icon className="mt-9">
            More About Us
          </Button>
        </div>

        <AboutVisual />
      </Container>
    </section>
  );
}
