import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden  border-white/5 py-16 lg:py-20"
    >
      <Image
        src="/global_images/CTABG.png"
        alt="CTA Background"
        fill
        priority
        className="-z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-black/60" />

      <Container className="relative z-10 flex flex-col items-center justify-between gap-20 text-center">
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