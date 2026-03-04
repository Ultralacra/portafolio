"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with smooth progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate progress towards the end
        const increment = prev < 70 ? Math.random() * 8 + 2 : Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "hsl(210 20% 4%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(166 72% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(166 72% 50% / 0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Glowing orb */}
          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, hsl(166 72% 50% / 0.15), transparent)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Name reveal */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <motion.h1
                className="whitespace-nowrap font-mono text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {"<"}
                <span className="text-primary">Cesar</span>
                {" />"}
              </motion.h1>
            </motion.div>

            <motion.p
              className="font-mono text-xs tracking-[0.4em] uppercase text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Full Stack Developer
            </motion.p>

            {/* Progress bar */}
            <div className="relative mt-4 h-[1px] w-48 bg-border/30 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                animate={{ x: ["-32px", "192px"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.span
              className="font-mono text-[10px] tracking-widest text-muted-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 h-12 w-12 border-l border-t border-primary/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 h-12 w-12 border-r border-b border-primary/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
