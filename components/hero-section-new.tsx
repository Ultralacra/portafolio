"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, FileText, FileDown } from "lucide-react";
import Image from "next/image";
import avatarImage from "@/public/images/cesar-avatar.jpg";
import { useI18n } from "@/lib/i18n/provider";

function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const chars = text.split("");
  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <span className="glitch-text relative inline-block" data-text={text}>
      {text}
    </span>
  );
}

function HeroParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const { t, locale } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <motion.div
          className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(166 72% 50% / 0.08), transparent 60%)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(197 80% 60% / 0.06), transparent 60%)",
          }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <HeroParticles />

      {/* Horizontal lines decoration */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 bottom-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ y, opacity, scale }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs tracking-wider text-primary uppercase">
                {t.hero.role}
              </span>
            </div>
          </motion.div>

          {/* Avatar with 3D orbit ring */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex justify-center"
          >
            <div className="relative">
              {/* Orbit ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </motion.div>
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary/60" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={avatarImage}
                  alt={t.hero.profileAlt}
                  width={120}
                  height={120}
                  sizes="120px"
                  priority
                  quality={90}
                  className="h-[120px] w-[120px] rounded-full border-2 border-primary/30 object-cover shadow-2xl shadow-primary/20"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading with split text animation */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="overflow-hidden">
              <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
                <SplitText text={t.hero.greeting} delay={0.8} />
                <br />
                <span className="hero-gradient-text inline-block">
                  <SplitText
                    text="Cesar"
                    delay={1.2}
                    className="inline-block"
                  />
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Description with reveal */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </motion.div>
            <span className="font-mono text-xs tracking-wider">
              {t.hero.location}
            </span>
          </motion.div>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              data-cursor="Ver"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewProjects}
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href="https://github.com/Ultralacra"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/50 bg-white/5 px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:text-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <span className="absolute inset-0 -translate-x-full bg-primary/5 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href={`/api/cv?lang=${locale}&format=html`}
              data-cursor="HTML"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/20 bg-primary/5 px-8 py-3.5 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-500 hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/10"
            >
              <FileText className="h-4 w-4" />
              <span>{t.hero.downloadHTML || "HTML"}</span>
            </a>

            <a
              href={`/api/cv?lang=${locale}&format=pdf`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PDF"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/20 bg-primary/5 px-8 py-3.5 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-500 hover:bg-primary/10 hover:shadow-2xl hover:shadow-primary/10"
            >
              <FileDown className="h-4 w-4" />
              <span>{t.hero.downloadPDF || "PDF"}</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
