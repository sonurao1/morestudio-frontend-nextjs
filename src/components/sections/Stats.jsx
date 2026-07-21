import Container from "@/components/ui/Container";
import Stat from "@/components/ui/Stat";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 divide-line sm:grid-cols-4 sm:divide-x">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex justify-center ${i > 0 ? "sm:pl-6" : ""}`}
            >
              <Stat {...stat} layout="column" tone="light" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
