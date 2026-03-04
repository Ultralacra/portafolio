"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n/provider";

function MarqueeText({
  text,
  direction = 1,
}: {
  text: string;
  direction?: number;
}) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex shrink-0 gap-8"
        animate={{ x: direction > 0 ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="inline-block shrink-0 text-7xl font-bold tracking-tighter text-foreground/[0.03] md:text-9xl"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Footer() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-border/20"
    >
      {/* Marquee background */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-4 overflow-hidden opacity-60">
        <MarqueeText text="CESAR AMURO" direction={1} />
        <MarqueeText text="FULL STACK DEV" direction={-1} />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-mono text-3xl font-bold tracking-tighter"
          >
            {"<"}
            <span className="text-primary">Cesar</span>
            {" />"}
          </motion.div>

          {/* Divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Info */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {"<Cesar /> — 2026"}
            </p>
            <p className="max-w-md text-xs text-muted-foreground/50">
              {t.footer.builtWith}
            </p>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/20" />
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
