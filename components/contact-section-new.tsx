"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, MapPin, ArrowUpRight } from "lucide-react";
import { ContactModal } from "./contact-modal";
import { useI18n } from "@/lib/i18n/provider";

export function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Ultralacra",
      icon: Github,
      description: "@Ultralacra",
      gradient: "from-purple-500/10 to-violet-500/10",
    },
    {
      label: t.contact.location,
      href: "https://maps.google.com/?q=Santiago,Chile",
      icon: MapPin,
      description: "Santiago, Chile",
      gradient: "from-teal-500/10 to-cyan-500/10",
    },
  ];

  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[200px]" />
      </div>

      <div ref={ref} className="mx-auto max-w-5xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {t.contact.label}
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.contact.title}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary">
                <link.icon className="h-6 w-6" />
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>

              <ArrowUpRight className="relative z-10 h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
