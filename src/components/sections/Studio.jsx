import Image from "next/image";
import Container from "@/components/ui/Container";
import { studioCapabilities } from "@/data/studio";

export default function Studio() {
  return (
    <section className="bg-night py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl  w-full mx-auto flex flex-col items-center justify-center text-center">
          <span className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Our Studio
          </span>

          <h2 className="mt-4 font-display text-[34px] font-extrabold leading-tight text-white lg:text-[42px]">
            Built for Creativity.
            <br />
            Designed for Excellence.
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-white/60">
            Professional production infrastructure with cinema cameras,
            lighting, sound, post-production and aerial filmmaking—all under
            one roof.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {studioCapabilities.map(({ label, icon: Icon, imageLink }) => (
            <div
              key={label}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={imageLink}
                  alt={label}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-lg">
                  <Icon
                    className="h-5 w-5 text-white"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Industry-grade equipment for premium commercial and corporate
                  productions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}