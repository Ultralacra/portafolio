"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Premium scroll progress bar with glow effect.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, hsl(166 72% 50%), hsl(197 80% 60%), hsl(166 72% 50%))",
        boxShadow:
          "0 0 20px hsl(166 72% 50% / 0.5), 0 0 40px hsl(166 72% 50% / 0.2)",
      }}
    />
  );
}
