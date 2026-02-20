"use client";

import { useEffect, useRef } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  /** Element tag, defaults to span */
  as?: "span" | "h1" | "h2" | "h3" | "p";
  /** Delay between each word appearing (ms) */
  staggerMs?: number;
};

/**
 * Splits text into words that animate in one by one
 * when the element scrolls into view.
 */
export function TextReveal({
  text,
  className = "",
  as: Tag = "span",
  staggerMs = 50,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const words = el.querySelectorAll<HTMLSpanElement>(".word-reveal");
          words.forEach((word, i) => {
            setTimeout(() => {
              word.classList.add("word-revealed");
            }, i * staggerMs);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  const words = text.split(" ");

  return (
    // @ts-expect-error Tag is dynamic
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word-reveal inline-block"
          style={{ transitionDelay: `${i * staggerMs}ms` }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
