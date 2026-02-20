"use client";

import { useEffect, useState } from "react";

/**
 * Thin animated progress bar fixed at the top of the page
 * that fills based on how far the user has scrolled.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setProgress(scrolled);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full bg-primary/80 transition-[width] duration-150 ease-out shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
