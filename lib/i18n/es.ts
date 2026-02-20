export const es = {
  // Navbar
  nav: {
    about: "Sobre mi",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },

  // Hero
  hero: {
    role: "Desarrollador Full Stack",
    greeting: "Hola, soy ",
    description:
      "Desarrollador venezolano con 6 anos de experiencia, radicado en Santiago. Construyo aplicaciones web modernas con TypeScript, Next.js, PostgreSQL y WordPress — desde e-commerce hasta dashboards, todo en produccion.",
    location: "Santiago, Chile",
    viewProjects: "Ver proyectos",
    downloadCV: "Descargar CV",
    profileAlt: "Foto de perfil de Cesar",
  },

  // About
  about: {
    label: "Sobre mi",
    title: "Construyendo soluciones digitales con codigo limpio",
    description:
      "Desarrollador full stack venezolano con 6 anos de experiencia, radicado en Santiago, Chile. Con mas de 15 proyectos en produccion, trabajo con TypeScript, Next.js, Material UI, PostgreSQL y el ecosistema WordPress. He construido e-commerce con integraciones de pago (Transbank, Mercado Pago), plataformas educativas, sistemas de reservas hoteleras, dashboards administrativos, sitios WordPress y plugins a medida. Enfocado en codigo limpio, entregas rapidas y soluciones que generan impacto real.",
    highlights: {
      frontend: {
        title: "Frontend",
        description:
          "Interfaces modernas con React, Next.js y TypeScript. Foco en rendimiento y experiencia de usuario.",
      },
      backend: {
        title: "Backend",
        description:
          "APIs robustas con Node.js y bases de datos PostgreSQL. Consultas optimizadas y arquitectura limpia.",
      },
      fullstack: {
        title: "Full Stack",
        description:
          "Desarrollo completo de aplicaciones, desde el diseno de la base de datos hasta el despliegue en Vercel.",
      },
    },
  },

  // Projects
  projects: {
    label: "Proyectos",
    title: "Lo que he construido",
    description:
      "Proyectos propios y para clientes: e-commerce con Next.js e integraciones de pago (Transbank, Mercado Pago), aplicaciones full-stack, sitios WordPress con plugins a medida. Todos en produccion.",
    categoryNextjs: "E-commerce & Next.js",
    categoryFullstack: "Aplicaciones Full-stack",
    categoryWordpress: "WordPress",
    pluginsTitle: "Plugins WordPress a medida",
    pluginsDescription:
      "Desarrollo de plugins personalizados para WordPress, adaptados a las necesidades especificas de cada cliente: integraciones con APIs externas, funcionalidades avanzadas de WooCommerce, automatizaciones y mas.",
    viewOnGithub: "Ver {name} en GitHub",
    viewLive: "Ver {name} en vivo",
    items: {
      animalaria: "E-commerce completo para una tienda de ilustraciones de animales. Catalogo de productos, carrito de compras, integracion de pagos con Transbank y Mercado Pago, y gestion de pedidos. Construido con Next.js y Material UI.",
      stickys: "Tienda online para accesorios de celular. Catalogo de productos con variantes, despacho, pagos integrados con Transbank y Mercado Pago, y diseno responsivo enfocado en conversion.",
      indraSolutions: "Sitio web corporativo para empresa de soluciones tecnologicas. Diseno moderno con Next.js, enfocado en rendimiento y SEO.",
      myhDashboard: "Panel de administracion para empresa de mudanzas. Dashboard con gestion de servicios, clientes y operaciones internas.",
      myhCotizador: "Aplicacion web para cotizar servicios de mudanza. Interfaz intuitiva que permite a los usuarios obtener presupuestos rapidos y precisos.",
      santiagoAdicto: "Plataforma full-stack para descubrir Santiago de Chile. Guia de lugares, actividades y experiencias con interfaz moderna y optimizada para SEO.",
      academiaPlataforma: "Plataforma educativa completa con gestion de cursos, autenticacion de usuarios, panel de administracion y despliegue continuo en Vercel.",
      chileAdictoHoteles: "Frontend moderno y responsivo para la plataforma de hoteles Chile Adicto. Interfaz enfocada en la experiencia de busqueda y reservas.",
      profesionesVzla: "Directorio web de profesiones y oficios en Venezuela. Permite buscar, filtrar y explorar servicios profesionales con una interfaz intuitiva.",
      bettingApp: "Aplicacion de apuestas deportivas con interfaz interactiva, base de datos PostgreSQL y funcionalidades en tiempo real.",
      euclides: "Sitio web profesional desarrollado con WordPress. Diseno personalizado, optimizado para SEO y rendimiento.",
      altoDominicos: "Sitio web inmobiliario/comercial desarrollado con WordPress. Interfaz atractiva y gestion de contenido dinamica.",
      waw: "Sitio web corporativo desarrollado con WordPress. Diseno moderno con plugins y personalizaciones a medida.",
      navegue: "Plataforma web desarrollada con WordPress. Funcionalidades personalizadas y diseno centrado en el usuario.",
      klaims: "Sitio web corporativo internacional desarrollado con WordPress. Optimizado para multiples idiomas y alta performance.",
      justecorp: "Sitio web empresarial desarrollado con WordPress. Diseno profesional con integraciones y personalizaciones avanzadas.",
    },
  },

  // Skills
  skills: {
    label: "Habilidades",
    title: "Stack tecnico",
    description:
      "Las tecnologias y herramientas con las que trabajo a diario para construir aplicaciones web modernas.",
    categories: {
      languages: "Lenguajes",
      frameworks: "Frameworks & Librerias",
      cms: "CMS & Plataformas",
      payments: "Integraciones de Pago",
    },
    items: {
      "Plugins WP a medida": "Plugins WP a medida",
    },
  },

  // Contact
  contact: {
    label: "Contacto",
    title: "Hablemos",
    description:
      "Si quieres discutir un proyecto o simplemente saludar, no dudes en contactarme.",
    location: "Ubicacion",
  },

  // Contact Modal
  modal: {
    sendMessage: "Enviar mensaje",
    messageTo: "Tu mensaje llegara directamente a cesaramuroc@gmail.com",
    messageSent: "Mensaje enviado!",
    thankYou: "Gracias por contactarme, te respondere pronto.",
    close: "Cerrar",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Cuentame sobre tu proyecto...",
    sending: "Enviando...",
    send: "Enviar mensaje",
  },

  // Floating buttons
  floating: {
    whatsappMessage:
      "Hola Cesar! Vi tu portafolio y me gustaria contactarte.",
  },

  // Footer
  footer: {
    builtWith: "Construido con Next.js, Tailwind CSS y desplegado en Vercel",
  },
} as const;
