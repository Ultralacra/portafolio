"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Plug,
  Code,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/provider";

type Project = {
  name: string;
  descriptionKey: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  languages: Record<string, number>;
  category: "nextjs" | "wordpress" | "fullstack";
  logo?: string;
  logoFilter?: string;
};

const projects: Project[] = [
  {
    name: "Animalaria",
    descriptionKey: "animalaria",
    techStack: ["Next.js", "Material UI", "TypeScript", "Transbank", "Mercado Pago"],
    liveUrl: "https://www.animalaria.cl/",
    date: "2024",
    category: "nextjs",
    logo: "/logos/logo-animalaria.webp",
    languages: { TypeScript: 70, CSS: 20, JavaScript: 10 },
  },
  {
    name: "Stickys",
    descriptionKey: "stickys",
    techStack: ["Next.js", "Material UI", "TypeScript", "Transbank", "Mercado Pago"],
    liveUrl: "https://stickys.cl/",
    date: "2024",
    category: "nextjs",
    logo: "/logos/logo-stickys.webp",
    languages: { TypeScript: 65, CSS: 25, JavaScript: 10 },
  },
  {
    name: "Indra Solutions",
    descriptionKey: "indraSolutions",
    techStack: ["Next.js", "TypeScript", "JavaScript", "Vercel"],
    liveUrl: "https://indrasolutions.cl/",
    date: "2025",
    category: "nextjs",
    logo: "/logos/logo-indrasolutions.webp",
    languages: { TypeScript: 60, JavaScript: 25, CSS: 15 },
  },
  {
    name: "Move Your House Dashboard",
    descriptionKey: "myhDashboard",
    techStack: ["TypeScript", "Next.js", "Material UI", "Vercel"],
    liveUrl: "https://moveyourhouse-dashboard.vercel.app",
    date: "2025",
    category: "fullstack",
    logo: "/logos/logo-MYH.png",
    languages: { TypeScript: 88, CSS: 8, Other: 4 },
  },
  {
    name: "Move Your House Cotizador",
    descriptionKey: "myhCotizador",
    techStack: ["TypeScript", "Next.js", "Material UI", "Vercel"],
    liveUrl: "https://moveyourhouse-app.vercel.app/",
    date: "2025",
    category: "fullstack",
    logo: "/logos/logo-MYH.png",
    languages: { TypeScript: 85, CSS: 10, Other: 5 },
  },
  {
    name: "Santiago Adicto",
    descriptionKey: "santiagoAdicto",
    techStack: ["TypeScript", "Next.js", "CSS", "Vercel"],
    liveUrl: "https://www.santiagoadicto.cl/",
    date: "2025",
    category: "fullstack",
    logo: "/logos/logo-santiago-adicto.svg",
    logoFilter: "brightness-0 invert",
    languages: { TypeScript: 85, CSS: 10, Other: 5 },
  },
  {
    name: "Academia Plataforma",
    descriptionKey: "academiaPlataforma",
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "CSS", "Vercel"],
    githubUrl: "https://github.com/Ultralacra/academia-plataforma",
    liveUrl: "https://academia-plataforma.vercel.app",
    date: "Sep 2025",
    category: "fullstack",
    logo: "/logos/logo-academia.jpg",
    languages: { TypeScript: 85, CSS: 10, Other: 5 },
  },
  {
    name: "Chile Adicto Hoteles",
    descriptionKey: "chileAdictoHoteles",
    techStack: ["TypeScript", "Next.js", "CSS", "Vercel"],
    githubUrl: "https://github.com/Ultralacra/chile-adicto-hoteles-front",
    liveUrl: "https://chile-adicto-hoteles-front.vercel.app",
    date: "Ene 2026",
    category: "fullstack",
    logo: "/logos/logo-chile-adicto.svg",
    logoFilter: "brightness-0 invert",
    languages: { TypeScript: 88, CSS: 9, Other: 3 },
  },
  {
    name: "Profesiones y Oficios Venezuela",
    descriptionKey: "profesionesVzla",
    techStack: ["TypeScript", "Next.js", "CSS", "Vercel"],
    githubUrl: "https://github.com/Ultralacra/profesiones-oficios-vzla",
    liveUrl: "https://profesiones-oficios-vzla.vercel.app",
    date: "Oct 2025",
    category: "fullstack",
    languages: { TypeScript: 86, CSS: 10, Other: 4 },
  },
  {
    name: "Betting App",
    descriptionKey: "bettingApp",
    techStack: ["TypeScript", "PLpgSQL", "CSS", "JavaScript", "HTML"],
    githubUrl: "https://github.com/Ultralacra/betting-app",
    liveUrl: "https://betting-app-sigma.vercel.app",
    date: "Ene 2026",
    category: "fullstack",
    languages: { TypeScript: 94, PLpgSQL: 3, CSS: 2, Other: 1 },
  },
  {
    name: "Euclides",
    descriptionKey: "euclides",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://euclides.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-euclides.svg",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
  {
    name: "Alto Dominicos",
    descriptionKey: "altoDominicos",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://altodominicos.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-alto-dominicos.jpg",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
  {
    name: "WAW",
    descriptionKey: "waw",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://waw.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-waw.webp",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
  {
    name: "Navegue",
    descriptionKey: "navegue",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://navegue.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-navegue.png",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
  {
    name: "Klaims",
    descriptionKey: "klaims",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://klaims.com/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-klaims.svg",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
  {
    name: "Justecorp",
    descriptionKey: "justecorp",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://justecorp.com/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-juste.png",
    languages: { PHP: 50, CSS: 30, JavaScript: 20 },
  },
];

const categories = [
  { key: "all", label: "Todos", icon: Globe },
  { key: "nextjs", label: "E-commerce", icon: Globe },
  { key: "fullstack", label: "Full-Stack", icon: Code },
  { key: "wordpress", label: "WordPress", icon: Globe },
] as const;

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  PLpgSQL: "#336791",
  JavaScript: "#f7df1e",
  HTML: "#e34c26",
  PHP: "#777BB4",
  Other: "#6b7280",
};

function ProjectCard({
  project,
  t,
  index,
}: {
  project: Project;
  t: any;
  index: number;
}) {
  const description =
    (t.projects.items as Record<string, string>)[project.descriptionKey] ||
    project.descriptionKey;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/30 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Top gradient bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start gap-4">
          {project.logo ? (
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/90 p-2 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <Image
                src={project.logo}
                alt={`Logo ${project.name}`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </motion.div>
          ) : (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <Globe className="h-6 w-6 text-primary" />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-card-foreground leading-tight">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-muted-foreground/60">
              {project.date}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Code"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground/80">
          {description}
        </p>

        {/* Language bar */}
        <div className="mb-4">
          <div className="flex h-1.5 overflow-hidden rounded-full bg-white/5">
            {Object.entries(project.languages).map(([lang, pct]) => (
              <motion.div
                key={lang}
                className="h-full"
                style={{ backgroundColor: langColors[lang] || "#6b7280" }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {Object.entries(project.languages).map(([lang, pct]) => (
              <span
                key={lang}
                className="flex items-center gap-1 text-[10px] text-muted-foreground/60"
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: langColors[lang] || "#6b7280" }}
                />
                {lang} {pct}%
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] text-primary/80 transition-colors hover:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="mb-16"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {t.projects.label}
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.projects.title}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative rounded-full px-5 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                activeCategory === cat.key
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border/30 bg-white/5"
              }`}
            >
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <cat.icon className="h-3 w-3" />
                {cat.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid with AnimatePresence */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                t={t}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Plugins card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex items-center gap-4">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20"
                whileHover={{ rotate: 12 }}
              >
                <Plug className="h-5 w-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {t.projects.pluginsTitle}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.projects.pluginsDescription}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
