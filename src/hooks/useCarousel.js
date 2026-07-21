"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Small reusable carousel hook: tracks an active index, auto-advances on an
 * interval, and exposes helpers to jump to a slide or pause/resume the timer.
 * Used by TrustedBy and Testimonials so both sections share one behavior.
 */
export function useCarousel(length, intervalMs = 2000) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    if (length <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % length);
    }, intervalMs);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  const goTo = (index) => {
    setActive(index);
    startTimer();
  };

  const pause = () => clearInterval(timerRef.current);
  const resume = () => startTimer();

  return { active, goTo, pause, resume };
}
