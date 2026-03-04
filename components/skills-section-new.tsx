"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";

const skillData = [
  {
    key: "languages" as const,
    icon: "{ }",
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
    icon: "< >",
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
    icon: "[ ]",
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
    icon: "$ $",
    skills: [
      { name: "Transbank / Webpay", level: 85 },
      { name: "Mercado Pago", level: 80 },
    ],
  },
];

function AnimatedBar({ level, delay }: { level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="relative h-1 overflow-hidden rounded-full bg-white/5">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(166 72% 50%), hsl(197 80% 60%))`,
          width: `${width}%`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Shimmer */}
      {width > 0 && (
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ width: "30%" }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 2, delay: delay / 1000 + 1, repeat: Infinity, repeatDelay: 3 }}
        />
      )}
    </div>
  );
}

function AnimatedNumber({ target, delay }: { target: number; delay: number }) {
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
          setTimeout(() => {
            const duration = 1200;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <span ref={ref} className="font-mono text-xs tabular-nums text-primary/70">
      {count}%
    </span>
  );
}

export function SkillsSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative px-6 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[200px]" />
      </div>

      <div ref={ref} className="mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="mb-20"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {t.skills.label}
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.skills.title}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.skills.description}
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillData.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: catIndex * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border/30 bg-card/30 backdrop-blur-md p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Corner decoration */}
              <div className="absolute top-3 right-3 font-mono text-[10px] text-primary/20 transition-colors duration-500 group-hover:text-primary/40">
                {category.icon}
              </div>

              <h3 className="mb-6 text-base font-semibold text-card-foreground">
                {t.skills.categories[category.key]}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-foreground/80">
                        {(t.skills.items as Record<string, string>)[skill.name] || skill.name}
                      </span>
                      <AnimatedNumber
                        target={skill.level}
                        delay={catIndex * 100 + skillIndex * 60}
                      />
                    </div>
                    <AnimatedBar
                      level={skill.level}
                      delay={catIndex * 100 + skillIndex * 60}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
