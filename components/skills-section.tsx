"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ScrollReveal, StaggerChildren } from "./scroll-reveal";
import { useI18n } from "@/lib/i18n/provider";
import { TextReveal } from "./text-reveal";
import { CursorSpotlight } from "./cursor-spotlight";
import { ParallaxLayer } from "./parallax";

const skillData = [
  {
    key: "languages" as const,
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL/PLpgSQL", level: 75 },
    ],
  },
  {
    key: "frameworks" as const,
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    key: "cms" as const,
    skills: [
      { name: "WordPress", level: 85 },
      { name: "WooCommerce", level: 80 },
      { name: "Plugins WP a medida", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
  {
    key: "payments" as const,
    skills: [
      { name: "Transbank / Webpay", level: 85 },
      { name: "Mercado Pago", level: 80 },
    ],
  },
];

function AnimatedCounter({
  target,
  duration = 1200,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={ref}
      className="font-mono text-xs tabular-nums text-muted-foreground"
    >
      {count}%
    </span>
  );
}

export function SkillsSection() {
  const barsRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const container = barsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bars = container.querySelectorAll<HTMLDivElement>(".skill-bar");
          bars.forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.level + "%";
            }, i * 60);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="px-6 py-24 relative overflow-hidden">
      <CursorSpotlight />
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <ParallaxLayer speed={0.2}>
          <div className="animate-blob-delay-2 absolute top-20 -right-20 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.3}>
          <div className="animate-blob-delay-4 absolute bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/3 blur-3xl" />
        </ParallaxLayer>
      </div>

      <div className="mx-auto max-w-5xl relative">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              {t.skills.label}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <TextReveal text={t.skills.title} as="span" staggerMs={60} />
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.skills.description}
            </p>
          </div>
        </ScrollReveal>

        <div ref={barsRef}>
          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillData.map((category) => (
              <div
                key={category.key}
                className="card-glow stagger-item rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="mb-6 text-lg font-semibold text-card-foreground">
                  {t.skills.categories[category.key]}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-foreground">
                          {(t.skills.items as Record<string, string>)[
                            skill.name
                          ] || skill.name}
                        </span>
                        <AnimatedCounter target={skill.level} />
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="skill-bar skill-bar-shimmer h-full rounded-full"
                          data-level={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
