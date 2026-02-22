import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SectionDivider } from "@/components/section-divider";

const AboutSection = dynamic(() =>
  import("@/components/about-section").then((mod) => mod.AboutSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/projects-section").then((mod) => mod.ProjectsSection),
);
const SkillsSection = dynamic(() =>
  import("@/components/skills-section").then((mod) => mod.SkillsSection),
);
const ContactSection = dynamic(() =>
  import("@/components/contact-section").then((mod) => mod.ContactSection),
);
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer),
);

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
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
    </>
  );
}
