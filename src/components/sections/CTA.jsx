import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="border-t border-white/5 bg-night py-16 lg:py-20">
      <Container className="flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-display text-[30px] font-extrabold leading-[1.2] tracking-tight text-white sm:text-[37px]">
            Ready to Create Something
            <br />
            Extraordinary?
          </h2>
          <p className="mt-3 text-[16px] text-white/50">
            Let&rsquo;s discuss your next video project.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 lg:items-end">
          <Button href="#contact" size="lg" icon>
            Book a Consultation
          </Button>
          <span className="text-xs text-white/35">
            Average response within 2 hours
          </span>
        </div>
      </Container>
    </section>
  );
}
