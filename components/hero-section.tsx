"use client";

import { ArrowDown, Github, MapPin, Download, Mail, FileText, FileDown, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";
import { useEffect, useState, useRef } from "react";
import { ParallaxLayer } from "./parallax";
import { Magnetic } from "./magnetic";
import { CursorSpotlight } from "./cursor-spotlight";

function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

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
  const { displayed: roleText, done: roleDone } = useTypewriter(
    t.hero.role,
    70,
  );
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Cursor spotlight */}
      <CursorSpotlight />

      {/* Animated background blobs with parallax */}
      <div className="pointer-events-none absolute inset-0">
        <ParallaxLayer speed={0.2}>
          <div className="animate-blob absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.35}>
          <div className="animate-blob-delay-2 absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.15}>
          <div className="animate-blob-delay-4 absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxLayer>
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
            <img
              src="https://avatars.githubusercontent.com/u/105929633?v=4"
              alt={t.hero.profileAlt}
              className="h-28 w-28 rounded-full border-2 border-primary/30 object-cover"
            />
            <span className="animate-pulse-ring absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-background bg-primary" />
          </div>
        </div>

        {/* Typewriter role */}
        <p className="animate-fade-in-up-delay-1 mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          <span className={roleDone ? "" : "typewriter-cursor"}>
            {roleText}
          </span>
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
          <span className="h-4 w-px bg-border" />
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" />
            cesaramuroc@gmail.com
          </span>
        </div>

        <div className="animate-fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
            >
              {t.hero.viewProjects}
              <ArrowDown className="h-4 w-4 animate-bounce-down" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://github.com/Ultralacra"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <div ref={cvRef} className="relative">
              <button
                onClick={() => setCvOpen(!cvOpen)}
                className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${cvOpen ? "rotate-180" : ""}`} />
              </button>
              {cvOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-xl z-50 overflow-hidden animate-fade-in-up">
                  <a
                    href={`/api/cv?lang=${locale}&format=html`}
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    {t.hero.downloadHTML || "HTML"}
                  </a>
                  <a
                    href={`/api/cv?lang=${locale}&format=pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border/50"
                  >
                    <FileDown className="h-4 w-4" />
                    {t.hero.downloadPDF || "PDF"}
                  </a>
                </div>
              )}
            </div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
