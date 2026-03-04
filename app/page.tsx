"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar-new";
import { HeroSection } from "@/components/hero-section-new";
import { SectionDivider } from "@/components/section-divider-new";
import { ScrollProgress } from "@/components/scroll-progress-new";
import { Preloader } from "@/components/preloader";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";

const Scene3D = dynamic(
  () => import("@/components/scene-3d").then((mod) => mod.Scene3D),
  { ssr: false },
);
const AboutSection = dynamic(() =>
  import("@/components/about-section-new").then((mod) => mod.AboutSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/projects-section-new").then(
    (mod) => mod.ProjectsSection,
  ),
);
const SkillsSection = dynamic(() =>
  import("@/components/skills-section-new").then((mod) => mod.SkillsSection),
);
const ContactSection = dynamic(() =>
  import("@/components/contact-section-new").then((mod) => mod.ContactSection),
);
const Footer = dynamic(() =>
  import("@/components/footer-new").then((mod) => mod.Footer),
);
const FloatingButtons = dynamic(() =>
  import("@/components/floating-buttons").then((mod) => mod.FloatingButtons),
);

export default function Page() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <NoiseOverlay />
      <ScrollProgress />
      <Scene3D />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </SmoothScroll>
  );
}
