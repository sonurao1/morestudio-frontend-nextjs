"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/nav";
import { services } from "@/data/services";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollTop = useRef(0);
  const mobileOpenRef = useRef(mobileOpen);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpenRef.current) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop <= 25) {
        setHidden(false);
        setScrolled(false);
      } else if (scrollTop < lastScrollTop.current) {
        setHidden(false);
        setScrolled(true);
      } else {
        setHidden(true);
      }

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-all duration-500
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${scrolled ? "bg-night/95 backdrop-blur" : "bg-transparent"}`}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[15.5px] font-medium text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full w-[520px] max-w-[calc(100vw-3rem)] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-night-soft p-3 shadow-2xl shadow-black/40">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href="#services"
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <service.icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                          strokeWidth={1.75}
                        />

                        <span>
                          <p className="text-[14.5px] font-semibold text-white">
                            {service.title}
                          </p>

                          <p className="mt-0.5 text-xs text-white/45">
                            {service.description}
                          </p>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15.5px] font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" size="sm">
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-night lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-[16px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Button href="#contact" className="mt-3 justify-center">
              Book a Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}