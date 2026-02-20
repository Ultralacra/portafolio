export const en = {
  // Navbar
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },

  // Hero
  hero: {
    role: "Full Stack Developer",
    greeting: "Hi, I'm ",
    description:
      "6+ years turning ideas into production-ready digital products. Specialized in TypeScript, Next.js, PostgreSQL and WordPress — I've shipped 15+ projects including e-commerce platforms, dashboards, SaaS tools and custom solutions for startups and businesses.",
    location: "Santiago, Chile",
    viewProjects: "View projects",
    downloadCV: "Download CV",
    downloadHTML: "Download HTML",
    downloadPDF: "Save as PDF",
    profileAlt: "César's profile photo",
  },

  // About
  about: {
    label: "About me",
    title: "Clean code, deliveries that drive impact",
    description:
      "I'm a full stack developer with 6+ years of experience and 15+ projects in production. I work with TypeScript, Next.js, React, Node.js, PostgreSQL and the WordPress ecosystem to design and build end-to-end solutions: from e-commerce with payment integrations (Transbank, Mercado Pago) to educational platforms, booking systems and internal management dashboards. My approach combines scalable architecture, maintainable code and on-time delivery — always prioritizing the product's business value.",
    highlights: {
      frontend: {
        title: "Frontend",
        description:
          "High-performance interfaces with React, Next.js and TypeScript. Responsive, accessible design optimized for conversion.",
      },
      backend: {
        title: "Backend",
        description:
          "Scalable REST APIs with Node.js and PostgreSQL. Efficient data modeling, optimized queries and clean architecture.",
      },
      fullstack: {
        title: "Full Stack",
        description:
          "End-to-end development: from database modeling and API design to Vercel deployment with CI/CD.",
      },
    },
  },

  // Projects
  projects: {
    label: "Projects",
    title: "Projects in production",
    description:
      "A curated selection of real-world projects for clients and personal ventures: e-commerce with payment gateways, full-stack applications, WordPress sites with custom plugins. All live in production.",
    categoryNextjs: "E-commerce & Next.js",
    categoryFullstack: "Full-stack Applications",
    categoryWordpress: "WordPress",
    pluginsTitle: "Custom WordPress Plugins",
    pluginsDescription:
      "Purpose-built plugins that solve specific business needs: external API integrations, advanced WooCommerce workflows, process automation and core functionality extensions.",
    viewOnGithub: "View {name} on GitHub",
    viewLive: "View {name} live",
    items: {
      animalaria: "Illustration e-commerce with catalog, cart, order management and dual payment gateway (Transbank + Mercado Pago). Stack: Next.js, Material UI, TypeScript.",
      stickys: "Phone accessories store with product variants, integrated shipping and checkout via Transbank and Mercado Pago. Conversion-focused responsive design.",
      indraSolutions: "Corporate site for a tech solutions company. Next.js architecture with SSR, Lighthouse score 90+ and SEO-optimized structure.",
      myhDashboard: "Admin dashboard for a moving company. Service, client and internal operations management with roles and permissions.",
      myhCotizador: "Web quotation tool for instant moving estimates. Dynamic calculation logic with an intuitive user interface.",
      santiagoAdicto: "Full-stack urban tourism platform for Santiago. Places, activities and experiences guide with SSR and SEO optimized for organic ranking.",
      academiaPlataforma: "Educational platform with course management, user authentication, admin panel and continuous deployment pipeline on Vercel.",
      chileAdictoHoteles: "Frontend for the Chile Adicto hotel platform. Search and booking experience with modern design and optimized performance.",
      profesionesVzla: "Professional directory for Venezuela with search, advanced filters and detailed profiles. Accessible and fast interface.",
      bettingApp: "Sports betting app with real-time data, PostgreSQL database and complex business logic.",
      euclides: "Professional WordPress site with custom design, on-page SEO optimization and sub-second load times.",
      altoDominicos: "Real estate/commercial WordPress portal with dynamic content management and lead-generation focused design.",
      waw: "Corporate WordPress site with custom plugins, third-party integrations and brand-aligned design.",
      navegue: "WordPress web platform with custom functionality and user experience centered on simplicity.",
      klaims: "International corporate WordPress site. Multi-language support, high performance and optimization for global markets.",
      justecorp: "Business WordPress website with advanced integrations, professional design and scalable content architecture.",
    },
  },

  // Skills
  skills: {
    label: "Skills",
    title: "Tech stack",
    description:
      "Technologies and tools I use daily to design, build and deploy production-grade web applications.",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks & Libraries",
      cms: "CMS & Platforms",
      payments: "Payment Integrations",
    },
    items: {
      "Plugins WP a medida": "Custom WP Plugins",
    },
  },

  // Contact
  contact: {
    label: "Contact",
    title: "Let's work together",
    description:
      "Have a project in mind or looking for a developer to join your team? Reach out and let's discuss how I can add value.",
    location: "Location",
  },

  // Contact Modal
  modal: {
    sendMessage: "Send message",
    messageTo: "Your message will go directly to cesaramuroc@gmail.com",
    messageSent: "Message sent!",
    thankYou: "Thanks for reaching out. I'll get back to you shortly.",
    close: "Close",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project or opportunity...",
    sending: "Sending...",
    send: "Send message",
  },

  // Floating buttons
  floating: {
    whatsappMessage:
      "Hi César, I saw your portfolio and I'd like to discuss an opportunity.",
  },

  // Footer
  footer: {
    builtWith: "Designed and developed with Next.js, Tailwind CSS — deployed on Vercel",
  },
} as const;
