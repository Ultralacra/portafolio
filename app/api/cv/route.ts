import { NextResponse } from "next/server"

export async function GET() {
  const cvContent = generateCVHTML()
  
  return new NextResponse(cvContent, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": 'attachment; filename="CV-Cesar-Amuro.html"',
    },
  })
}

function generateCVHTML() {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CV - Cesar Amuro</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a2e; line-height: 1.5; max-width: 800px; margin: 0 auto; padding: 40px 32px; }
    h1 { font-size: 28px; margin-bottom: 4px; }
    h2 { font-size: 16px; color: #0d9488; margin-bottom: 16px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-top: 24px; text-transform: uppercase; letter-spacing: 1px; }
    h3 { font-size: 14px; margin-bottom: 2px; }
    .header { margin-bottom: 20px; }
    .contact { font-size: 13px; color: #555; margin-bottom: 4px; }
    .contact a { color: #0d9488; text-decoration: none; }
    .summary { font-size: 13px; color: #333; margin-bottom: 8px; }
    .project { margin-bottom: 14px; }
    .project-name { font-weight: 600; font-size: 14px; }
    .project-desc { font-size: 13px; color: #444; margin: 2px 0; }
    .project-tech { font-size: 12px; color: #0d9488; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .skill-group h3 { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
    .skill-group p { font-size: 12px; color: #444; }
    .link { color: #0d9488; font-size: 12px; text-decoration: none; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Cesar Amuro</h1>
    <p class="contact">Desarrollador Full Stack | Santiago, Chile</p>
    <p class="contact">
      <a href="mailto:cesaramuroc@gmail.com">cesaramuroc@gmail.com</a> &middot; 
      <a href="https://github.com/Ultralacra">github.com/Ultralacra</a>
    </p>
  </div>

  <h2>Perfil Profesional</h2>
  <p class="summary">
    Desarrollador full stack venezolano con 6 anos de experiencia, radicado en Santiago, Chile. 
    Especializado en TypeScript, Next.js, React y PostgreSQL, con amplio dominio del ecosistema WordPress (WooCommerce, temas, plugins). 
    +15 proyectos en produccion: e-commerce con integraciones de pago (Transbank, Mercado Pago), plataformas educativas, dashboards administrativos, sistemas de reservas y sitios corporativos. 
    Enfocado en codigo limpio, soluciones escalables y entregas que generan impacto real.
  </p>

  <h2>Habilidades Tecnicas</h2>
  <div class="skills-grid">
    <div class="skill-group">
      <h3>Lenguajes</h3>
      <p>TypeScript, JavaScript, PHP, HTML, CSS, SQL/PLpgSQL</p>
    </div>
    <div class="skill-group">
      <h3>Frameworks & Librerias</h3>
      <p>Next.js, React, Tailwind CSS, Material UI, Node.js</p>
    </div>
    <div class="skill-group">
      <h3>CMS & E-commerce</h3>
      <p>WordPress, WooCommerce, Plugins a medida</p>
    </div>
    <div class="skill-group">
      <h3>Integraciones de Pago</h3>
      <p>Transbank, Mercado Pago</p>
    </div>
    <div class="skill-group">
      <h3>Herramientas</h3>
      <p>Vercel, PostgreSQL, Git/GitHub, VS Code</p>
    </div>
  </div>

  <h2>Proyectos Destacados</h2>

  <h3 style="color:#0d9488;margin-top:16px;margin-bottom:8px;font-size:14px;">E-commerce & Next.js</h3>

  <div class="project">
    <span class="project-name">Animalaria</span>
    <p class="project-desc">E-commerce completo para tienda de ilustraciones de animales. Catalogo, carrito, integracion de pagos con Transbank y Mercado Pago, y gestion de pedidos.</p>
    <p class="project-tech">Next.js, Material UI, TypeScript, Transbank, Mercado Pago</p>
    <a class="link" href="https://www.animalaria.cl/">animalaria.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Stickys</span>
    <p class="project-desc">Tienda online de accesorios para celular con catalogo de variantes, despacho y pagos con Transbank y Mercado Pago.</p>
    <p class="project-tech">Next.js, Material UI, TypeScript, Transbank, Mercado Pago</p>
    <a class="link" href="https://stickys.cl/">stickys.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Indra Solutions</span>
    <p class="project-desc">Sitio web corporativo para empresa de soluciones tecnologicas. Diseno moderno con Next.js, enfocado en rendimiento y SEO.</p>
    <p class="project-tech">Next.js, TypeScript, JavaScript, Vercel</p>
    <a class="link" href="https://indrasolutions.cl/">indrasolutions.cl</a>
  </div>

  <h3 style="color:#0d9488;margin-top:16px;margin-bottom:8px;font-size:14px;">Aplicaciones Full-stack</h3>

  <div class="project">
    <span class="project-name">Move Your House - Dashboard</span>
    <p class="project-desc">Panel de administracion para empresa de mudanzas con gestion de servicios, clientes y operaciones.</p>
    <p class="project-tech">TypeScript, Next.js, Material UI, Vercel</p>
    <a class="link" href="https://moveyourhouse-dashboard.vercel.app">moveyourhouse-dashboard.vercel.app</a>
  </div>

  <div class="project">
    <span class="project-name">Move Your House - Cotizador</span>
    <p class="project-desc">Aplicacion web para cotizar servicios de mudanza. Interfaz intuitiva para obtener presupuestos rapidos y precisos.</p>
    <p class="project-tech">TypeScript, Next.js, Material UI, Vercel</p>
    <a class="link" href="https://moveyourhouse-app.vercel.app/">moveyourhouse-app.vercel.app</a>
  </div>

  <div class="project">
    <span class="project-name">Santiago Adicto</span>
    <p class="project-desc">Plataforma full-stack para descubrir Santiago de Chile. Guia de lugares, actividades y experiencias con interfaz moderna y SEO.</p>
    <p class="project-tech">TypeScript, Next.js, CSS, Vercel</p>
    <a class="link" href="https://www.santiagoadicto.cl/">santiagoadicto.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Academia Plataforma</span>
    <p class="project-desc">Plataforma educativa con gestion de cursos, autenticacion, panel de administracion y despliegue continuo.</p>
    <p class="project-tech">TypeScript, Next.js, PostgreSQL, Vercel</p>
    <a class="link" href="https://academia-plataforma.vercel.app">academia-plataforma.vercel.app</a> &middot; <a class="link" href="https://github.com/Ultralacra/academia-plataforma">GitHub</a>
  </div>

  <div class="project">
    <span class="project-name">Chile Adicto Hoteles</span>
    <p class="project-desc">Frontend moderno y responsivo para plataforma de hoteles. Interfaz enfocada en busqueda y reservas.</p>
    <p class="project-tech">TypeScript, Next.js, CSS, Vercel</p>
    <a class="link" href="https://chile-adicto-hoteles-front.vercel.app">chile-adicto-hoteles-front.vercel.app</a> &middot; <a class="link" href="https://github.com/Ultralacra/chile-adicto-hoteles-front">GitHub</a>
  </div>

  <div class="project">
    <span class="project-name">Profesiones y Oficios Venezuela</span>
    <p class="project-desc">Directorio web de profesiones y oficios con busqueda, filtros e interfaz intuitiva.</p>
    <p class="project-tech">TypeScript, Next.js, CSS, Vercel</p>
    <a class="link" href="https://profesiones-oficios-vzla.vercel.app">profesiones-oficios-vzla.vercel.app</a> &middot; <a class="link" href="https://github.com/Ultralacra/profesiones-oficios-vzla">GitHub</a>
  </div>

  <div class="project">
    <span class="project-name">Betting App</span>
    <p class="project-desc">Aplicacion de apuestas deportivas con interfaz interactiva, base de datos PostgreSQL y funcionalidades en tiempo real.</p>
    <p class="project-tech">TypeScript, PLpgSQL, JavaScript, Vercel</p>
    <a class="link" href="https://betting-app-sigma.vercel.app">betting-app-sigma.vercel.app</a> &middot; <a class="link" href="https://github.com/Ultralacra/betting-app">GitHub</a>
  </div>

  <h3 style="color:#0d9488;margin-top:16px;margin-bottom:8px;font-size:14px;">WordPress</h3>

  <div class="project">
    <span class="project-name">Euclides</span>
    <p class="project-desc">Sitio web profesional con diseno personalizado, optimizado para SEO y rendimiento.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://euclides.cl/">euclides.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Alto Dominicos</span>
    <p class="project-desc">Sitio web inmobiliario/comercial con interfaz atractiva y gestion de contenido dinamica.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://altodominicos.cl/">altodominicos.cl</a>
  </div>

  <div class="project">
    <span class="project-name">WAW</span>
    <p class="project-desc">Sitio web corporativo con diseno moderno, plugins y personalizaciones a medida.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://waw.cl/">waw.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Navegue</span>
    <p class="project-desc">Plataforma web con funcionalidades personalizadas y diseno centrado en el usuario.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://navegue.cl/">navegue.cl</a>
  </div>

  <div class="project">
    <span class="project-name">Klaims</span>
    <p class="project-desc">Sitio web corporativo internacional, optimizado para multiples idiomas y alta performance.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://klaims.com/">klaims.com</a>
  </div>

  <div class="project">
    <span class="project-name">Justecorp</span>
    <p class="project-desc">Sitio web empresarial con diseno profesional, integraciones y personalizaciones avanzadas.</p>
    <p class="project-tech">WordPress, PHP, CSS, JavaScript</p>
    <a class="link" href="https://justecorp.com/">justecorp.com</a>
  </div>

  <h3 style="color:#0d9488;margin-top:16px;margin-bottom:8px;font-size:14px;">Plugins WordPress a medida</h3>
  <p class="project-desc" style="margin-bottom:8px;">Desarrollo de plugins personalizados para WordPress: integraciones con APIs externas, funcionalidades avanzadas de WooCommerce, automatizaciones y mas.</p>
</body>
</html>`
}
