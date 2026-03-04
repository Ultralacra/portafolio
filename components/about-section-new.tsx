"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export function AboutSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Globe,
      title: t.about.highlights.frontend.title,
      description: t.about.highlights.frontend.description,
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400",
      borderHover: "hover:border-teal-500/40",
    },
    {
      icon: Database,
      title: t.about.highlights.backend.title,
      description: t.about.highlights.backend.description,
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
      borderHover: "hover:border-blue-500/40",
    },
    {
      icon: Code2,
      title: t.about.highlights.fullstack.title,
      description: t.about.highlights.fullstack.description,
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
      borderHover: "hover:border-violet-500/40",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {t.about.label}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t.about.description}
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 ${item.borderHover} hover:shadow-2xl hover:shadow-primary/5`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 ${item.iconColor}`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 h-6 w-6 border-t border-r border-primary/0 transition-colors duration-500 group-hover:border-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
