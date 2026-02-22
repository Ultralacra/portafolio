"use client";

import { ArrowDown, Github, MapPin, FileText, FileDown } from "lucide-react";
import Image from "next/image";
import avatarImage from "@/public/images/cesar-avatar.jpg";
import { useI18n } from "@/lib/i18n/provider";

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 3}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const { t, locale } = useI18n();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Animated background blobs with parallax */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-blob-delay-2 absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="animate-blob-delay-4 absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Particle dots */}
      <Particles />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Avatar with float and pulse ring */}
        <div className="animate-fade-in-up mb-8 flex justify-center">
          <div className="animate-float relative">
            <Image
              src={avatarImage}
              alt={t.hero.profileAlt}
              width={112}
              height={112}
              sizes="112px"
              priority
              quality={85}
              className="h-28 w-28 rounded-full border-2 border-primary/30 object-cover"
            />
            <span className="animate-pulse-ring absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
          </div>
        </div>

        {/* Role */}
        <p className="animate-fade-in-up-delay-1 mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          <span>{t.hero.role}</span>
        </p>

        <h1 className="animate-fade-in-up-delay-1 mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">
            {t.hero.greeting}
            <span className="animate-gradient-text">Cesar</span>
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t.hero.description}
        </p>

        <div className="animate-fade-in-up-delay-2 mb-10 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {t.hero.location}
          </span>
          {/*
          <span className="h-4 w-px bg-border" />
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            cesaramuroc@gmail.com
          </span>
          */}
        </div>

        <div className="animate-fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            {t.hero.viewProjects}
            <ArrowDown className="h-4 w-4 animate-bounce-down" />
          </a>
          <a
            href="https://github.com/Ultralacra"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`/api/cv?lang=${locale}&format=html`}
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10"
          >
            <FileText className="h-4 w-4" />
            {t.hero.downloadHTML || "HTML"}
          </a>
          <a
            href={`/api/cv?lang=${locale}&format=pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10"
          >
            <FileDown className="h-4 w-4" />
            {t.hero.downloadPDF || "PDF"}
          </a>
        </div>
      </div>
    </section>
  );
}
