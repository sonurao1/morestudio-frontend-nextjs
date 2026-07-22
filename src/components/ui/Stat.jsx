"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  Film,
  Users,
  CalendarDays,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  film: Film,
  users: Users,
  calendar: CalendarDays,
  sparkles: Sparkles,
};

export default function Stat({
  icon,
  value,
  label,
  sublabel,
  layout = "row",
  tone = "light",
}) {
  const Icon = icons[icon];

  const statRef = useRef(null);

  useGSAP(() => {
    const number = parseFloat(String(value).replace(/[^\d.]/g, ""));
    const suffix = String(value).replace(/[\d.]/g, "");

    const counter = {
      value: 0,
    };

    gsap.to(counter, {
      value: number,
      duration: 2,
      ease: "power2.out",

      onUpdate: () => {
        statRef.current.textContent =
          Math.round(counter.value) + suffix;
      },

      scrollTrigger: {
        trigger: statRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const valueColor = tone === "dark" ? "text-white" : "text-ink";
  const labelColor = tone === "dark" ? "text-white/55" : "text-ink-soft";
  const sublabelColor = tone === "dark" ? "text-white/35" : "text-ink-muted";

  if (layout === "column") {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-light">
          <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
        </span>

        <span
          ref={statRef}
          className={`font-display text-3xl font-extrabold ${valueColor}`}
        >
          0
        </span>

        <span className={`mt-1 text-[16px] font-semibold ${labelColor}`}>
          {label}
        </span>

        {sublabel && (
          <span className={`mt-0.5 text-xs ${sublabelColor}`}>
            {sublabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />

      <div className="flex flex-col leading-tight">
        <span
          ref={statRef}
          className={`font-display text-lg font-extrabold ${valueColor}`}
        >
          0
        </span>

        <span className={`text-xs ${labelColor}`}>{label}</span>
      </div>
    </div>
  );
}