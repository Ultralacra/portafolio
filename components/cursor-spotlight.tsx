"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a subtle radial spotlight glow that follows the cursor.
 * Must be placed inside a `relative overflow-hidden` parent.
 */
export function CursorSpotlight({ className = "" }: { className?: string }) {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    // Ensure parent has relative positioning
    const parentStyle = getComputedStyle(parent);
    if (parentStyle.position === "static") {
      parent.style.position = "relative";
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.opacity = "1";
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.06), transparent 40%)`;
    };

    const handleMouseLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 opacity-0 ${className}`}
    />
  );
}
