"use client";

/**
 * Animated glowing line that separates sections.
 * Subtle pulse animation on the primary accent color.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-2 ${className}`}>
      <div className="section-divider relative h-px w-full max-w-xs">
        {/* Base line */}
        <div className="absolute inset-0 bg-border" />
        {/* Animated glow sweep */}
        <div className="section-divider-glow absolute inset-0" />
      </div>
    </div>
  );
}
