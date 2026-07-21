import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Studio from "@/components/sections/Studio";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <About />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <Studio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
