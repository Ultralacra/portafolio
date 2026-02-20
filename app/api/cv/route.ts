import { NextRequest, NextResponse } from "next/server";

type Lang = "es" | "en";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get("lang") === "en" ? "en" : "es") as Lang;
  const format = searchParams.get("format") === "pdf" ? "pdf" : "html";

  const html = generateCVHTML(lang);

  if (format === "pdf") {
    // Return HTML with auto-print dialog for PDF saving
    const pdfHtml = html.replace(
      "</head>",
      `<script>window.onload=function(){window.print()}<\/script></head>`,
    );
    return new NextResponse(pdfHtml, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="CV-Cesar-Amuro-${lang.toUpperCase()}.html"`,
    },
  });
}

// ─── i18n content ──────────────────────────────────────────────

const content = {
  es: {
    title: "Desarrollador Full Stack",
    profile: "Perfil Profesional",
    profileText:
      "Desarrollador Full Stack con +6 años de experiencia y +15 proyectos en producción. Especializado en TypeScript, Next.js, React, Node.js y PostgreSQL, con dominio sólido del ecosistema WordPress (WooCommerce, temas, plugins a medida). He diseñado y construido soluciones end-to-end: e-commerce con pasarelas de pago (Transbank, Mercado Pago), plataformas educativas, sistemas de reservas, dashboards de gestión interna y sitios corporativos internacionales. Mi enfoque combina arquitectura escalable, código mantenible y entregas dentro de plazo — priorizando siempre el valor de negocio del producto.",
    skills: "Habilidades Técnicas",
    skillCategories: {
      languages: "Lenguajes",
      frameworks: "Frameworks & Librerías",
      cms: "CMS & E-commerce",
      payments: "Integraciones de Pago",
      tools: "Herramientas & DevOps",
    },
    projects: "Proyectos Destacados",
    catEcommerce: "E-commerce & Next.js",
    catFullstack: "Aplicaciones Full-stack",
    catWordpress: "WordPress",
    catPlugins: "Plugins WordPress a medida",
    pluginsDesc:
      "Plugins personalizados que resuelven necesidades específicas de negocio: integraciones con APIs externas, flujos avanzados de WooCommerce, automatizaciones de procesos y extensiones de funcionalidad core.",
    experience: "Experiencia Profesional",
    expMeasuredRole: "Desarrollador Full Stack",
    expMeasuredCompany: "Measured Security (Chile)",
    expMeasuredPeriod: "2021 — 2025",
    expMeasuredSummary:
      "Desarrollo de soluciones web full stack para entornos corporativos y de seguridad, con foco en rendimiento, mantenibilidad e integración de servicios.",
    expIndraRole: "Desarrollador Full Stack",
    expIndraCompany: "Indra Solutions (Chile)",
    expIndraPeriod: "2021 — 2025",
    expIndraSummary:
      "Desarrollo y mantenimiento de productos digitales orientados a negocio, incluyendo sitios corporativos y aplicaciones web con arquitectura escalable.",
    education: "Formación",
    educationText:
      "Estudios en IIUTIRLA, complementados con formación autodidacta continua en desarrollo web, arquitectura de software y buenas prácticas. Cursos y certificaciones en TypeScript, React, Node.js y bases de datos.",
    languages: "Idiomas",
    langEs: "Español — Nativo",
    langEn: "Inglés — Intermedio-Avanzado (lectura técnica fluida)",
  },
  en: {
    title: "Full Stack Developer",
    profile: "Professional Profile",
    profileText:
      "Full Stack Developer with 6+ years of experience and 15+ projects in production. Specialized in TypeScript, Next.js, React, Node.js and PostgreSQL, with strong command of the WordPress ecosystem (WooCommerce, themes, custom plugins). I've designed and built end-to-end solutions: e-commerce with payment gateways (Transbank, Mercado Pago), educational platforms, booking systems, internal management dashboards and international corporate sites. My approach combines scalable architecture, maintainable code and on-time delivery — always prioritizing the product's business value.",
    skills: "Technical Skills",
    skillCategories: {
      languages: "Languages",
      frameworks: "Frameworks & Libraries",
      cms: "CMS & E-commerce",
      payments: "Payment Integrations",
      tools: "Tools & DevOps",
    },
    projects: "Featured Projects",
    catEcommerce: "E-commerce & Next.js",
    catFullstack: "Full-stack Applications",
    catWordpress: "WordPress",
    catPlugins: "Custom WordPress Plugins",
    pluginsDesc:
      "Purpose-built plugins that solve specific business needs: external API integrations, advanced WooCommerce workflows, process automation and core functionality extensions.",
    experience: "Professional Experience",
    expMeasuredRole: "Full Stack Developer",
    expMeasuredCompany: "Measured Security (Chile)",
    expMeasuredPeriod: "2021 — 2025",
    expMeasuredSummary:
      "Built full-stack web solutions for corporate and security-focused environments, with strong emphasis on performance, maintainability and service integrations.",
    expIndraRole: "Full Stack Developer",
    expIndraCompany: "Indra Solutions (Chile)",
    expIndraPeriod: "2021 — 2025",
    expIndraSummary:
      "Developed and maintained business-oriented digital products, including corporate websites and scalable web applications.",
    education: "Education",
    educationText:
      "Studies at IIUTIRLA, complemented by continuous self-taught training in web development, software architecture and best practices. Courses and certifications in TypeScript, React, Node.js and databases.",
    languages: "Languages",
    langEs: "Spanish — Native",
    langEn: "English — Upper-Intermediate (fluent technical reading)",
  },
};

const projectDescriptions = {
  es: {
    animalaria:
      "E-commerce de ilustraciones con catálogo, carrito, gestión de pedidos y doble pasarela de pago (Transbank + Mercado Pago).",
    stickys:
      "Tienda online de accesorios para celular con variantes de producto, despacho integrado y checkout con Transbank y Mercado Pago.",
    indraSolutions:
      "Sitio corporativo para empresa de soluciones tecnológicas. Arquitectura Next.js con SSR, Lighthouse +90 y SEO optimizado.",
    myhDashboard:
      "Dashboard administrativo para empresa de mudanzas. Gestión de servicios, clientes y operaciones internas con roles y permisos.",
    myhCotizador:
      "Cotizador web con lógica de cálculo dinámica que permite a usuarios obtener presupuestos instantáneos de mudanza.",
    santiagoAdicto:
      "Plataforma full-stack de turismo urbano en Santiago. Guía de lugares y experiencias con SSR y SEO optimizado.",
    academiaPlataforma:
      "Plataforma educativa con gestión de cursos, autenticación de usuarios, panel admin y pipeline de deploy continuo.",
    chileAdictoHoteles:
      "Frontend de plataforma hotelera. Experiencia de búsqueda y reservas con diseño moderno y rendimiento optimizado.",
    profesionesVzla:
      "Directorio de profesiones en Venezuela con búsqueda, filtros avanzados y perfiles detallados.",
    bettingApp:
      "Aplicación de apuestas deportivas con datos en tiempo real, PostgreSQL y lógica de negocio compleja.",
    euclides:
      "Sitio WordPress profesional con diseño a medida, SEO on-page y tiempos de carga sub-segundo.",
    altoDominicos:
      "Portal inmobiliario/comercial WordPress con gestión de contenido dinámica y captación de leads.",
    waw:
      "Sitio corporativo WordPress con plugins personalizados, integraciones de terceros y diseño brand-aligned.",
    navegue:
      "Plataforma web WordPress con funcionalidades custom y experiencia de usuario centrada en simplicidad.",
    klaims:
      "Sitio corporativo internacional WordPress. Soporte multiidioma, alta performance y optimización global.",
    justecorp:
      "Web empresarial WordPress con integraciones avanzadas, diseño profesional y arquitectura de contenido escalable.",
  },
  en: {
    animalaria:
      "Illustration e-commerce with catalog, cart, order management and dual payment gateway (Transbank + Mercado Pago).",
    stickys:
      "Phone accessories store with product variants, integrated shipping and checkout via Transbank and Mercado Pago.",
    indraSolutions:
      "Corporate site for a tech solutions company. Next.js architecture with SSR, Lighthouse 90+ and SEO-optimized.",
    myhDashboard:
      "Admin dashboard for a moving company. Service, client and internal operations management with roles and permissions.",
    myhCotizador:
      "Web quotation tool with dynamic calculation logic for instant moving estimates.",
    santiagoAdicto:
      "Full-stack urban tourism platform for Santiago. Places and experiences guide with SSR and SEO optimized.",
    academiaPlataforma:
      "Educational platform with course management, user auth, admin panel and continuous deployment pipeline.",
    chileAdictoHoteles:
      "Hotel platform frontend. Search and booking experience with modern design and optimized performance.",
    profesionesVzla:
      "Professional directory for Venezuela with search, advanced filters and detailed profiles.",
    bettingApp:
      "Sports betting app with real-time data, PostgreSQL database and complex business logic.",
    euclides:
      "Professional WordPress site with custom design, on-page SEO and sub-second load times.",
    altoDominicos:
      "Real estate/commercial WordPress portal with dynamic content management and lead-generation design.",
    waw:
      "Corporate WordPress site with custom plugins, third-party integrations and brand-aligned design.",
    navegue:
      "WordPress web platform with custom functionality and user experience centered on simplicity.",
    klaims:
      "International corporate WordPress site. Multi-language support, high performance and global optimization.",
    justecorp:
      "Business WordPress site with advanced integrations, professional design and scalable content architecture.",
  },
};

// ─── Projects data ──────────────────────────────────────────────

const projects = [
  { key: "animalaria", name: "Animalaria", tech: "Next.js · Material UI · TypeScript · Transbank · Mercado Pago", url: "animalaria.cl", cat: "ecommerce" },
  { key: "stickys", name: "Stickys", tech: "Next.js · Material UI · TypeScript · Transbank · Mercado Pago", url: "stickys.cl", cat: "ecommerce" },
  { key: "indraSolutions", name: "Indra Solutions", tech: "Next.js · TypeScript · Vercel", url: "indrasolutions.cl", cat: "ecommerce" },
  { key: "myhDashboard", name: "Move Your House — Dashboard", tech: "TypeScript · Next.js · Material UI · Vercel", url: "moveyourhouse-dashboard.vercel.app", cat: "fullstack" },
  { key: "myhCotizador", name: "Move Your House — Cotizador", tech: "TypeScript · Next.js · Material UI · Vercel", url: "moveyourhouse-app.vercel.app", cat: "fullstack" },
  { key: "santiagoAdicto", name: "Santiago Adicto", tech: "TypeScript · Next.js · Vercel", url: "santiagoadicto.cl", cat: "fullstack" },
  { key: "academiaPlataforma", name: "Academia Plataforma", tech: "TypeScript · Next.js · PostgreSQL · Vercel", url: "academia-plataforma.vercel.app", github: "Ultralacra/academia-plataforma", cat: "fullstack" },
  { key: "chileAdictoHoteles", name: "Chile Adicto Hoteles", tech: "TypeScript · Next.js · Vercel", url: "chile-adicto-hoteles-front.vercel.app", github: "Ultralacra/chile-adicto-hoteles-front", cat: "fullstack" },
  { key: "profesionesVzla", name: "Profesiones y Oficios Venezuela", tech: "TypeScript · Next.js · Vercel", url: "profesiones-oficios-vzla.vercel.app", github: "Ultralacra/profesiones-oficios-vzla", cat: "fullstack" },
  { key: "bettingApp", name: "Betting App", tech: "TypeScript · PLpgSQL · Vercel", url: "betting-app-sigma.vercel.app", github: "Ultralacra/betting-app", cat: "fullstack" },
  { key: "euclides", name: "Euclides", tech: "WordPress · PHP · CSS · JavaScript", url: "euclides.cl", cat: "wordpress" },
  { key: "altoDominicos", name: "Alto Dominicos", tech: "WordPress · PHP · CSS · JavaScript", url: "altodominicos.cl", cat: "wordpress" },
  { key: "waw", name: "WAW", tech: "WordPress · PHP · CSS · JavaScript", url: "waw.cl", cat: "wordpress" },
  { key: "navegue", name: "Navegue", tech: "WordPress · PHP · CSS · JavaScript", url: "navegue.cl", cat: "wordpress" },
  { key: "klaims", name: "Klaims", tech: "WordPress · PHP · CSS · JavaScript", url: "klaims.com", cat: "wordpress" },
  { key: "justecorp", name: "Justecorp", tech: "WordPress · PHP · CSS · JavaScript", url: "justecorp.com", cat: "wordpress" },
];

// ─── HTML generator ─────────────────────────────────────────────

function generateCVHTML(lang: Lang): string {
  const t = content[lang];
  const desc = projectDescriptions[lang];

  const renderProject = (p: typeof projects[number]) => {
    const d = desc[p.key as keyof typeof desc] || "";
    const githubLink = p.github
      ? ` <span class="sep">·</span> <a class="link" href="https://github.com/${p.github}">GitHub</a>`
      : "";
    return `
      <div class="project">
        <div class="project-header">
          <span class="project-name">${p.name}</span>
          <span class="project-links">
            <a class="link" href="https://${p.url}">${p.url}</a>${githubLink}
          </span>
        </div>
        <p class="project-desc">${d}</p>
        <p class="project-tech">${p.tech}</p>
      </div>`;
  };

  const ecommerce = projects.filter((p) => p.cat === "ecommerce").map(renderProject).join("");
  const fullstack = projects.filter((p) => p.cat === "fullstack").map(renderProject).join("");
  const wordpress = projects.filter((p) => p.cat === "wordpress").map(renderProject).join("");

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV — César Amuro | ${t.title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --primary: #0d9488;
      --primary-light: #ccfbf1;
      --text: #1a1a2e;
      --text-secondary: #52525b;
      --text-muted: #71717a;
      --border: #e4e4e7;
      --bg-subtle: #f8fafb;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: var(--text);
      line-height: 1.6;
      max-width: 820px;
      margin: 0 auto;
      padding: 48px 40px;
      background: white;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* ─── Header ─────────────────────────────── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--primary);
      margin-bottom: 28px;
    }

    .header-left h1 {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
    }

    .header-left .role {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary);
      margin-bottom: 2px;
    }

    .header-left .location {
      font-size: 13px;
      color: var(--text-muted);
    }

    .header-right {
      text-align: right;
      font-size: 13px;
      line-height: 2;
    }

    .header-right a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
    }

    .header-right a:hover { text-decoration: underline; }

    /* ─── Sections ───────────────────────────── */
    h2 {
      font-size: 13px;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 28px;
      margin-bottom: 14px;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--border);
    }

    /* ─── Profile ────────────────────────────── */
    .summary {
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    /* ─── Skills ─────────────────────────────── */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 24px;
    }

    .skill-group {
      display: flex;
      gap: 8px;
      align-items: baseline;
    }

    .skill-group .label {
      font-size: 12px;
      font-weight: 600;
      color: var(--text);
      white-space: nowrap;
      min-width: 140px;
    }

    .skill-group .values {
      font-size: 12px;
      color: var(--text-muted);
    }

    /* ─── Projects ───────────────────────────── */
    .category-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--primary);
      margin: 18px 0 10px;
      padding-left: 12px;
      border-left: 3px solid var(--primary);
    }

    .project {
      margin-bottom: 14px;
      padding-left: 12px;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 4px;
    }

    .project-name {
      font-weight: 600;
      font-size: 13.5px;
      color: var(--text);
    }

    .project-links {
      font-size: 11.5px;
    }

    .project-desc {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin: 3px 0;
      line-height: 1.5;
    }

    .project-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--primary);
      letter-spacing: 0.3px;
    }

    .link {
      color: var(--primary);
      font-size: 11.5px;
      text-decoration: none;
      font-weight: 500;
    }

    .link:hover { text-decoration: underline; }

    .sep { color: var(--border); margin: 0 2px; }

    /* ─── Education / Languages ──────────────── */
    .info-row {
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 4px;
      line-height: 1.6;
    }

    .info-row strong {
      color: var(--text);
      font-weight: 600;
    }

    /* ─── Footer ─────────────────────────────── */
    .footer {
      margin-top: 32px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: 11px;
      color: var(--text-muted);
    }

    .footer a { color: var(--primary); text-decoration: none; }

    /* ─── Print ──────────────────────────────── */
    @media print {
      body { padding: 24px 28px; }
      .header { padding-bottom: 16px; margin-bottom: 20px; }
      h2 { margin-top: 20px; }
      .project { margin-bottom: 10px; }
    }

    @page {
      margin: 0.6in;
      size: letter;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <h1>César Amuro</h1>
      <p class="role">${t.title}</p>
      <p class="location">📍 Santiago, Chile</p>
    </div>
    <div class="header-right">
      <a href="mailto:cesaramuroc@gmail.com">cesaramuroc@gmail.com</a><br>
      <a href="https://github.com/Ultralacra">github.com/Ultralacra</a><br>
      <a href="https://wa.me/56937761679">+56 9 3776 1679</a>
    </div>
  </div>

  <!-- Profile -->
  <h2>${t.profile}</h2>
  <p class="summary">${t.profileText}</p>

  <!-- Skills -->
  <h2>${t.skills}</h2>
  <div class="skills-grid">
    <div class="skill-group">
      <span class="label">${t.skillCategories.languages}</span>
      <span class="values">TypeScript, JavaScript, PHP, HTML/CSS, SQL/PLpgSQL</span>
    </div>
    <div class="skill-group">
      <span class="label">${t.skillCategories.frameworks}</span>
      <span class="values">Next.js, React, Tailwind CSS, Material UI, Node.js</span>
    </div>
    <div class="skill-group">
      <span class="label">${t.skillCategories.cms}</span>
      <span class="values">WordPress, WooCommerce, Custom Plugins</span>
    </div>
    <div class="skill-group">
      <span class="label">${t.skillCategories.payments}</span>
      <span class="values">Transbank / Webpay, Mercado Pago</span>
    </div>
    <div class="skill-group">
      <span class="label">${t.skillCategories.tools}</span>
      <span class="values">Vercel, PostgreSQL, Git/GitHub, CI/CD, VS Code</span>
    </div>
  </div>

  <!-- Experience -->
  <h2>${t.experience}</h2>
  <div class="project">
    <div class="project-header">
      <span class="project-name">${t.expMeasuredRole} — ${t.expMeasuredCompany}</span>
      <span class="project-links">${t.expMeasuredPeriod}</span>
    </div>
    <p class="project-desc">${t.expMeasuredSummary}</p>
  </div>
  <div class="project">
    <div class="project-header">
      <span class="project-name">${t.expIndraRole} — ${t.expIndraCompany}</span>
      <span class="project-links">${t.expIndraPeriod}</span>
    </div>
    <p class="project-desc">${t.expIndraSummary}</p>
  </div>

  <!-- Projects -->
  <h2>${t.projects}</h2>

  <p class="category-title">${t.catEcommerce}</p>
  ${ecommerce}

  <p class="category-title">${t.catFullstack}</p>
  ${fullstack}

  <p class="category-title">${t.catWordpress}</p>
  ${wordpress}

  <p class="category-title">${t.catPlugins}</p>
  <div class="project">
    <p class="project-desc">${t.pluginsDesc}</p>
  </div>

  <!-- Education -->
  <h2>${t.education}</h2>
  <p class="info-row">${t.educationText}</p>

  <!-- Languages -->
  <h2>${t.languages}</h2>
  <p class="info-row">${t.langEs}</p>
  <p class="info-row">${t.langEn}</p>

  <div class="footer">
    César Amuro — <a href="mailto:cesaramuroc@gmail.com">cesaramuroc@gmail.com</a> — <a href="https://github.com/Ultralacra">GitHub</a>
  </div>
</body>
</html>`;
}

