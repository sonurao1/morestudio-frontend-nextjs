import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import WorkCard from "@/components/ui/WorkCard";
import { featuredWork } from "@/data/work";

export default function Work() {
  return (
    <section id="work" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-xs font-bold uppercase text-brand">
              Featured Work
            </span>

            <h2 className="mt-4 font-display text-[35px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[41px]">
              Some Stories We&rsquo;re Proud Of
            </h2>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View All Work
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWork.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>
      </Container>
    </section>
  );
}