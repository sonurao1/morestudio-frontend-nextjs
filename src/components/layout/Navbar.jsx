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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-[9999] border-b border-white/5 transition-all duration-500
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${scrolled ? "bg-night/95 backdrop-blur" : "bg-transparent"}`}
    >
      <Container className="flex h-[76px] items-center justify-between overflow-visible">
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

                {/* Desktop Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-[9999] w-[560px] max-w-[calc(100vw-3rem)] -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-white/10 bg-[#101014]/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,.55)] backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href="#services"
                          className="group/item flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5"
                        >
                          <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 transition-colors group-hover/item:bg-brand/20">
                            <service.icon
                              className="h-5 w-5 text-brand"
                              strokeWidth={1.8}
                            />
                          </div>

                          <div>
                            <h4 className="text-[15px] font-semibold text-white">
                              {service.title}
                            </h4>

                            <p className="mt-1 text-[13px] leading-5 text-white/55">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 border-t border-white/10 pt-3">
                      <Link
                        href="#services"
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        <span>Explore All Services</span>

                        <ChevronDown className="-rotate-90 h-4 w-4" />
                      </Link>
                    </div>
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
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-[16px] font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href="#services"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 rounded-lg px-2 py-3 text-[14.5px] text-white/65 transition hover:bg-white/5 hover:text-white"
                        >
                          <service.icon
                            className="h-4 w-4 shrink-0 text-brand"
                            strokeWidth={1.75}
                          />

                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-[16px] font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}

            <Button
              href="#contact"
              className="mt-4 justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}