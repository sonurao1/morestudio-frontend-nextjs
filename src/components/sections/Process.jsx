import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From Idea to Impact"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          <div className="absolute left-0 right-0 top-5 hidden border-t-2 border-dashed border-line lg:block" />

          {process.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center px-2 text-center"
            >
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white ring-4 ring-surface">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[15px] font-bold text-ink">{step.title}</p>
              <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-ink-muted lg:max-w-[160px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
