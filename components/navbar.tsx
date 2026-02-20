"use client";

import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { locale, setLocale, t } = useI18n();
  const indicatorRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["about", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animate the sliding indicator
  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const activeLink = document.querySelector(
      `nav a[href="${activeSection}"]`,
    ) as HTMLElement | null;

    if (activeLink) {
      const nav = activeLink.closest("ul");
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      indicator.style.opacity = "1";
      indicator.style.width = `${linkRect.width + 16}px`;
      indicator.style.transform = `translateX(${linkRect.left - navRect.left - 8}px)`;
    } else {
      indicator.style.opacity = "0";
    }
  }, [activeSection]);

  function toggleLocale() {
    setLocale(locale === "es" ? "en" : "es");
  }

  function handleMobileNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-mono text-lg font-bold tracking-tight text-primary"
          >
            {"<Cesar />"}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="relative flex items-center gap-8">
              {/* Sliding active indicator */}
              <div
                ref={indicatorRef}
                className="absolute -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out opacity-0"
              />
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`underline-grow text-sm transition-colors duration-200 ${
                      activeSection === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile: lang toggle + menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              className="flex flex-col gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - slide from left */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 border-r border-border shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundColor: "hsl(210 20% 7%)" }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-mono text-lg font-bold tracking-tight text-primary">
              {"<Cesar />"}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
