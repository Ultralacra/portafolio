"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    // Track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  function toggleLocale() {
    setLocale(locale === "es" ? "en" : "es");
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.a
            href="#"
            className="font-mono text-lg font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<"}
            <span className="text-primary">Cesar</span>
            {" />"}
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/20 bg-white/5 px-1.5 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300"
                >
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      activeSection === link.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            <motion.button
              onClick={toggleLocale}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 flex items-center gap-1.5 rounded-full border border-border/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "es" ? "EN" : "ES"}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 rounded-full border border-border/20 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              className="relative flex h-8 w-8 items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="absolute block h-[1.5px] w-5 bg-foreground"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute block h-[1.5px] w-5 bg-foreground"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  scaleX: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute block h-[1.5px] w-5 bg-foreground"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.nav
              className="relative flex h-full flex-col items-center justify-center gap-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 30 },
                  }}
                  transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                className="mt-4 h-px w-16 bg-primary/30"
                variants={{
                  open: { opacity: 1, scaleX: 1 },
                  closed: { opacity: 0, scaleX: 0 },
                }}
              />

              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="mt-4 font-mono text-sm text-muted-foreground"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
              >
                ESC to close
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
