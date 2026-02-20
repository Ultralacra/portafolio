"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  speed?: number; // 0 = no parallax, 1 = full scroll speed. Negative = reverse
  className?: string;
};

export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Only animate when element is in viewport
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const scrolled = window.scrollY;
          const yOffset = scrolled * speed;
          el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * Parallax layer that translates based on scroll position relative to its container.
 * Use inside a `relative overflow-hidden` parent.
 */
export function ParallaxLayer({
  children,
  speed = 0.15,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const parent = el.parentElement;
        if (!parent) {
          ticking = false;
          return;
        }
        const rect = parent.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.bottom > 0 && rect.top < windowHeight) {
          // How far through the viewport the section is (0 to 1)
          const progress =
            (windowHeight - rect.top) / (windowHeight + rect.height);
          const yOffset = (progress - 0.5) * speed * 200;
          el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
