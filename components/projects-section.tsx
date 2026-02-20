"use client";

import {
  ExternalLink,
  Github,
  Calendar,
  Globe,
  Plug,
  Code,
} from "lucide-react";
import Image from "next/image";
import { ScrollReveal, StaggerChildren } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";
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
  // â”€â”€â”€ E-commerce Next.js â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    name: "Animalaria",
    descriptionKey: "animalaria",
    techStack: [
      "Next.js",
      "Material UI",
      "TypeScript",
      "Transbank",
      "Mercado Pago",
    ],
    liveUrl: "https://www.animalaria.cl/",
    date: "2024",
    category: "nextjs",
    logo: "/logos/logo-animalaria.webp",
    languages: {
      TypeScript: 70,
      CSS: 20,
      JavaScript: 10,
    },
  },
  {
    name: "Stickys",
    descriptionKey: "stickys",
    techStack: [
      "Next.js",
      "Material UI",
      "TypeScript",
      "Transbank",
      "Mercado Pago",
    ],
    liveUrl: "https://stickys.cl/",
    date: "2024",
    category: "nextjs",
    logo: "/logos/logo-stickys.webp",
    languages: {
      TypeScript: 65,
      CSS: 25,
      JavaScript: 10,
    },
  },
  // â”€â”€â”€ Next.js / Full-stack â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    name: "Indra Solutions",
    descriptionKey: "indraSolutions",
    techStack: ["Next.js", "TypeScript", "JavaScript", "Vercel"],
    liveUrl: "https://indrasolutions.cl/",
    date: "2025",
    category: "nextjs",
    logo: "/logos/logo-indrasolutions.webp",
    languages: {
      TypeScript: 60,
      JavaScript: 25,
      CSS: 15,
    },
  },
  {
    name: "Move Your House Dashboard",
    descriptionKey: "myhDashboard",
    techStack: ["TypeScript", "Next.js", "Material UI", "Vercel"],
    liveUrl: "https://moveyourhouse-dashboard.vercel.app",
    date: "2025",
    category: "fullstack",
    logo: "/logos/logo-MYH.png",
    languages: {
      TypeScript: 88,
      CSS: 8,
      Other: 4,
    },
  },
  {
    name: "Move Your House Cotizador",
    descriptionKey: "myhCotizador",
    techStack: ["TypeScript", "Next.js", "Material UI", "Vercel"],
    liveUrl: "https://moveyourhouse-app.vercel.app/",
    date: "2025",
    category: "fullstack",
    logo: "/logos/logo-MYH.png",
    languages: {
      TypeScript: 85,
      CSS: 10,
      Other: 5,
    },
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
    languages: {
      TypeScript: 85,
      CSS: 10,
      Other: 5,
    },
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
    languages: {
      TypeScript: 85,
      CSS: 10,
      Other: 5,
    },
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
    languages: {
      TypeScript: 88,
      CSS: 9,
      Other: 3,
    },
  },
  {
    name: "Profesiones y Oficios Venezuela",
    descriptionKey: "profesionesVzla",
    techStack: ["TypeScript", "Next.js", "CSS", "Vercel"],
    githubUrl: "https://github.com/Ultralacra/profesiones-oficios-vzla",
    liveUrl: "https://profesiones-oficios-vzla.vercel.app",
    date: "Oct 2025",
    category: "fullstack",
    languages: {
      TypeScript: 86,
      CSS: 10,
      Other: 4,
    },
  },
  {
    name: "Betting App",
    descriptionKey: "bettingApp",
    techStack: ["TypeScript", "PLpgSQL", "CSS", "JavaScript", "HTML"],
    githubUrl: "https://github.com/Ultralacra/betting-app",
    liveUrl: "https://betting-app-sigma.vercel.app",
    date: "Ene 2026",
    category: "fullstack",
    languages: {
      TypeScript: 94,
      PLpgSQL: 3,
      CSS: 2,
      Other: 1,
    },
  },
  // â”€â”€â”€ WordPress â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    name: "Euclides",
    descriptionKey: "euclides",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://euclides.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-euclides.svg",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
  {
    name: "Alto Dominicos",
    descriptionKey: "altoDominicos",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://altodominicos.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-alto-dominicos.jpg",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
  {
    name: "WAW",
    descriptionKey: "waw",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://waw.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-waw.webp",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
  {
    name: "Navegue",
    descriptionKey: "navegue",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://navegue.cl/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-navegue.png",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
  {
    name: "Klaims",
    descriptionKey: "klaims",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://klaims.com/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-klaims.svg",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
  {
    name: "Justecorp",
    descriptionKey: "justecorp",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    liveUrl: "https://justecorp.com/",
    date: "2024",
    category: "wordpress",
    logo: "/logos/logo-juste.png",
    languages: {
      PHP: 50,
      CSS: 30,
      JavaScript: 20,
    },
  },
];

function LanguageBar({ languages }: { languages: Record<string, number> }) {
  const colors: Record<string, string> = {
    TypeScript: "bg-[#3178c6]",
    CSS: "bg-[#563d7c]",
    PLpgSQL: "bg-[#336791]",
    JavaScript: "bg-[#f7df1e]",
    HTML: "bg-[#e34c26]",
    PHP: "bg-[#777BB4]",
    Other: "bg-muted-foreground/40",
  };

  return (
    <div className="space-y-2">
      <div className="flex h-2 overflow-hidden rounded-full bg-secondary">
        {Object.entries(languages).map(([lang, pct]) => (
          <div
            key={lang}
            className={`${colors[lang] || "bg-muted-foreground/40"}`}
            style={{ width: `${pct}%` }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {Object.entries(languages).map(([lang, pct]) => (
          <span
            key={lang}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${colors[lang] || "bg-muted-foreground/40"}`}
            />
            {lang} {pct}%
          </span>
        ))}
      </div>
    </div>
  );
}

const nextjsProjects = projects.filter((p) => p.category === "nextjs");
const fullstackProjects = projects.filter((p) => p.category === "fullstack");
const wordpressProjects = projects.filter((p) => p.category === "wordpress");

function ProjectCard({ project, t }: { project: Project; t: any }) {
  const description =
    (t.projects.items as Record<string, string>)[project.descriptionKey] ||
    project.descriptionKey;
  return (
    <TiltCard className="stagger-item h-full">
    <article className="card-glow group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Header: logo + title + links aligned at top */}
      <div className="mb-3 flex items-center gap-3">
        {project.logo ? (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2">
            <Image
              src={project.logo}
              alt={`Logo de ${project.name}`}
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Globe className="h-6 w-6 text-primary" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-card-foreground">
            {project.name}
          </h3>
        </div>
        <div className="flex shrink-0 gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={t.projects.viewOnGithub.replace(
                "{name}",
                project.name,
              )}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={t.projects.viewLive.replace("{name}", project.name)}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mb-3">
        <LanguageBar languages={project.languages} />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
    </TiltCard>
  );
}

export function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              {t.projects.label}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">{t.projects.title}</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.projects.description}
            </p>
          </div>
        </ScrollReveal>

        {/* E-commerce & Next.js */}
        <div className="mb-12">
          <ScrollReveal>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Globe className="h-5 w-5 text-primary" />
              {t.projects.categoryNextjs}
            </h3>
          </ScrollReveal>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nextjsProjects.map((project) => (
              <ProjectCard key={project.name} project={project} t={t} />
            ))}
          </StaggerChildren>
        </div>

        {/* Full-stack */}
        <div className="mb-12">
          <ScrollReveal>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Code className="h-5 w-5 text-primary" />
              {t.projects.categoryFullstack}
            </h3>
          </ScrollReveal>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fullstackProjects.map((project) => (
              <ProjectCard key={project.name} project={project} t={t} />
            ))}
          </StaggerChildren>
        </div>

        {/* WordPress */}
        <div className="mb-12">
          <ScrollReveal>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Globe className="h-5 w-5 text-primary" />
              {t.projects.categoryWordpress}
            </h3>
          </ScrollReveal>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.name} project={project} t={t} />
            ))}
          </StaggerChildren>
        </div>

        {/* Plugins a medida */}
        <ScrollReveal>
          <div className="card-glow rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Plug className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-card-foreground">
                  {t.projects.pluginsTitle}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t.projects.pluginsDescription}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
