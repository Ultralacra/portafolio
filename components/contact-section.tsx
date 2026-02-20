"use client";

import { useState } from "react";
import { Github, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { ContactModal } from "./contact-modal";
import { ScrollReveal, StaggerChildren } from "./scroll-reveal";
import { useI18n } from "@/lib/i18n/provider";
import { TextReveal } from "./text-reveal";
import { CursorSpotlight } from "./cursor-spotlight";

export function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Ultralacra",
      icon: Github,
      description: "@Ultralacra",
    },
    {
      label: t.contact.location,
      href: "https://maps.google.com/?q=Santiago,Chile",
      icon: MapPin,
      description: "Santiago, Chile",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden">
      <CursorSpotlight />
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              {t.contact.label}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <TextReveal text={t.contact.title} as="span" staggerMs={80} />
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.contact.description}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-4 sm:grid-cols-3">
          {/* Email card — abre modal */}
          <button
            onClick={() => setModalOpen(true)}
            className="card-glow stagger-item group flex items-center gap-4 rounded-xl border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-card-foreground">
                Email
              </h3>
              <p className="text-sm text-muted-foreground">
                cesaramuroc@gmail.com
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </button>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow stagger-item group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-card-foreground">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </StaggerChildren>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
