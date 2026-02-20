"use client";

import { Code2, Database, Globe } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "./scroll-reveal";
import { useI18n } from "@/lib/i18n/provider";
import { CursorSpotlight } from "./cursor-spotlight";
import { TextReveal } from "./text-reveal";

export function AboutSection() {
  const { t } = useI18n();

  const highlights = [
    {
      icon: Globe,
      title: t.about.highlights.frontend.title,
      description: t.about.highlights.frontend.description,
    },
    {
      icon: Database,
      title: t.about.highlights.backend.title,
      description: t.about.highlights.backend.description,
    },
    {
      icon: Code2,
      title: t.about.highlights.fullstack.title,
      description: t.about.highlights.fullstack.description,
    },
  ];

  return (
    <section id="about" className="relative px-6 py-24 overflow-hidden">
      <CursorSpotlight />
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              {t.about.label}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <TextReveal text={t.about.title} as="span" staggerMs={60} />
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-glow stagger-item group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-primary icon-hover-spin" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
