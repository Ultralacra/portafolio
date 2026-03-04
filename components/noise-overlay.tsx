"use client";

/**
 * Subtle SVG noise/grain overlay for that cinematic Awwwards feel.
 * Applied as a fixed layer over the entire page.
 */
export function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9990] opacity-[0.015]">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
