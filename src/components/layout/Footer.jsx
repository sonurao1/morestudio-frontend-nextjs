import { Globe, MessageCircle, Share2, Video, Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import FooterColumn from "@/components/ui/FooterColumn";
import { services } from "@/data/services";
import { footerIndustries, footerCompanyLinks, contactInfo } from "@/data/footer";

const socials = [
  { icon: Globe, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Share2, href: "#" },
  { icon: Video, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night pt-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/45">
              Full-service video production company creating powerful stories
              for brands across every industry.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Services"
            items={services.map((s) => ({ label: s.title, href: "#services" }))}
          />
          <FooterColumn title="Industries" items={footerIndustries} />
          <FooterColumn title="Company" items={footerCompanyLinks} />

          <div>
            <p className="text-[14px] font-bold text-white">Get in Touch</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-[14px] text-white/45">
                <Phone className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.75} />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/45">
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.75} />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/45">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={1.75} />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} MoreStudios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/35 hover:text-white/60">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/35 hover:text-white/60">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
