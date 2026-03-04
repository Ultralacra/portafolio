"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Premium animated section divider with glowing dot and expanding lines.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center gap-4 w-full max-w-xs">
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="relative h-1.5 w-1.5 rounded-full bg-primary/40"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20"
          initial={{ scaleX: 0, originX: 1 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </div>
  );
}
