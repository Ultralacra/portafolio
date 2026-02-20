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
      "Venezuelan developer with 6 years of experience, based in Santiago. I build modern web apps with TypeScript, Next.js, PostgreSQL and WordPress — from e-commerce to dashboards, all in production.",
    location: "Santiago, Chile",
    viewProjects: "View projects",
    downloadCV: "Download CV",
    profileAlt: "Cesar's profile photo",
  },

  // About
  about: {
    label: "About me",
    title: "Building digital solutions with clean code",
    description:
      "Venezuelan full stack developer with 6 years of experience, based in Santiago, Chile. With over 15 projects in production, I work with TypeScript, Next.js, Material UI, PostgreSQL and the WordPress ecosystem. I've built e-commerce with payment integrations (Transbank, Mercado Pago), educational platforms, hotel booking systems, admin dashboards, WordPress sites and custom plugins. Focused on clean code, fast delivery and solutions that make a real impact.",
    highlights: {
      frontend: {
        title: "Frontend",
        description:
          "Modern interfaces with React, Next.js and TypeScript. Focus on performance and user experience.",
      },
      backend: {
        title: "Backend",
        description:
          "Robust APIs with Node.js and PostgreSQL databases. Optimized queries and clean architecture.",
      },
      fullstack: {
        title: "Full Stack",
        description:
          "End-to-end application development, from database design to deployment on Vercel.",
      },
    },
  },

  // Projects
  projects: {
    label: "Projects",
    title: "What I've built",
    description:
      "Personal and client projects: e-commerce with Next.js and payment integrations (Transbank, Mercado Pago), full-stack applications, WordPress sites with custom plugins. All in production.",
    categoryNextjs: "E-commerce & Next.js",
    categoryFullstack: "Full-stack Applications",
    categoryWordpress: "WordPress",
    pluginsTitle: "Custom WordPress Plugins",
    pluginsDescription:
      "Development of custom WordPress plugins, tailored to each client's specific needs: external API integrations, advanced WooCommerce features, automation and more.",
    viewOnGithub: "View {name} on GitHub",
    viewLive: "View {name} live",
    items: {
      animalaria: "Full e-commerce for an animal illustration store. Product catalog, shopping cart, payment integration with Transbank and Mercado Pago, and order management. Built with Next.js and Material UI.",
      stickys: "Online store for phone accessories. Product catalog with variants, shipping, payments integrated with Transbank and Mercado Pago, and responsive design focused on conversion.",
      indraSolutions: "Corporate website for a tech solutions company. Modern design with Next.js, focused on performance and SEO.",
      myhDashboard: "Admin panel for a moving company. Dashboard with service, client and internal operations management.",
      myhCotizador: "Web application to quote moving services. Intuitive interface that allows users to get quick and accurate estimates.",
      santiagoAdicto: "Full-stack platform to discover Santiago, Chile. Guide of places, activities and experiences with a modern, SEO-optimized interface.",
      academiaPlataforma: "Complete educational platform with course management, user authentication, admin panel and continuous deployment on Vercel.",
      chileAdictoHoteles: "Modern and responsive frontend for the Chile Adicto hotel platform. Interface focused on search and booking experience.",
      profesionesVzla: "Web directory of professions and trades in Venezuela. Search, filter and explore professional services with an intuitive interface.",
      bettingApp: "Sports betting application with interactive interface, PostgreSQL database and real-time features.",
      euclides: "Professional website built with WordPress. Custom design, optimized for SEO and performance.",
      altoDominicos: "Real estate/commercial website built with WordPress. Attractive interface and dynamic content management.",
      waw: "Corporate website built with WordPress. Modern design with custom plugins and customizations.",
      navegue: "Web platform built with WordPress. Custom features and user-centered design.",
      klaims: "International corporate website built with WordPress. Optimized for multiple languages and high performance.",
      justecorp: "Business website built with WordPress. Professional design with advanced integrations and customizations.",
    },
  },

  // Skills
  skills: {
    label: "Skills",
    title: "Tech stack",
    description:
      "The technologies and tools I work with daily to build modern web applications.",
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
    title: "Let's talk",
    description:
      "If you want to discuss a project or just say hello, feel free to reach out.",
    location: "Location",
  },

  // Contact Modal
  modal: {
    sendMessage: "Send message",
    messageTo: "Your message will go directly to cesaramuroc@gmail.com",
    messageSent: "Message sent!",
    thankYou: "Thanks for reaching out, I'll get back to you soon.",
    close: "Close",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    sending: "Sending...",
    send: "Send message",
  },

  // Floating buttons
  floating: {
    whatsappMessage:
      "Hi Cesar! I saw your portfolio and I'd like to get in touch.",
  },

  // Footer
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS and deployed on Vercel",
  },
} as const;
