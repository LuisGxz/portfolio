// ===== Site data — edit these to update the portfolio =====

const SITE_DATA = {
  name: "Luis Chiquito",
  role: "Software Engineer",
  yearsExperience: 5,
  startedYear: 2021,
  location: "Remote · Open to USA / Europe",
  email: "luis@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",

  // 3 tagline variants — Tweaks panel switches between them
  taglines: {
    en: [
      "Adapting to every challenge, delivering every solution.",
      "Built to ship — across stacks, time zones, and stakes.",
      "From prototype to production. Wherever the problem lives, I learn its language.",
    ],
    es: [
      "Adaptándome a cada reto, entregando cada solución.",
      "Hecho para enviar — entre stacks, zonas horarias y desafíos.",
      "Del prototipo a producción. Donde sea que viva el problema, aprendo su lenguaje.",
    ],
  },

  bio: {
    en: "Software engineer working across the full stack since 2021. I build resilient web and mobile products — from Angular and Ionic frontends to .NET, Node, Python and Java services running on Azure. I'm at home in a messy spec, a freshly-cloned repo, or a deploy that has to ship tonight.",
    es: "Ingeniero de software full-stack desde 2021. Construyo productos web y móviles resilientes — desde frontends Angular e Ionic hasta servicios en .NET, Node, Python y Java sobre Azure. Me siento cómodo en una spec ambigua, un repo recién clonado o un deploy que sale esta noche.",
  },

  timeline: [
    {
      year: 2021,
      role: { en: "Junior Software Engineer", es: "Ingeniero de Software Junior" },
      company: "Started professionally",
      summary: {
        en: "Joined my first engineering role. Shipped Angular dashboards, fixed bugs nobody wanted to touch, learned the value of reading the diff before the docs.",
        es: "Mi primer rol como ingeniero. Envié dashboards en Angular, arreglé bugs que nadie quería tocar, aprendí a leer el diff antes que la documentación.",
      },
      stack: ["Angular", "TypeScript", "REST"],
    },
    {
      year: 2022,
      role: { en: "Full-stack Engineer", es: "Ingeniero Full-stack" },
      company: "Cross-stack delivery",
      summary: {
        en: "Crossed into the backend in earnest — .NET services, SQL Server schemas, CI pipelines. Started owning features end-to-end.",
        es: "Crucé al backend en serio — servicios .NET, esquemas SQL Server, pipelines CI. Empecé a tomar features de punta a punta.",
      },
      stack: [".NET", "C#", "SQL Server", "Azure DevOps"],
    },
    {
      year: 2023,
      role: { en: "Mobile + Cloud Engineer", es: "Ingeniero Mobile + Cloud" },
      company: "Ionic & Azure",
      summary: {
        en: "Led an Ionic migration and shipped my first apps to TestFlight and Play. Stood up Azure resources, App Insights dashboards, and on-call runbooks.",
        es: "Lideré una migración a Ionic y envié mis primeras apps a TestFlight y Play. Levanté recursos en Azure, dashboards en App Insights y runbooks de on-call.",
      },
      stack: ["Ionic", "Angular", "Azure", "App Insights"],
    },
    {
      year: 2024,
      role: { en: "Senior Engineer", es: "Ingeniero Senior" },
      company: "Polyglot & platform work",
      summary: {
        en: "Picked up Python and Java to integrate with partner systems. Designed a MongoDB-backed event store, mentored two juniors, set the team's PR review bar.",
        es: "Aprendí Python y Java para integrar con sistemas socios. Diseñé un event store sobre MongoDB, mentoré a dos juniors y subí el listón de revisión de PRs.",
      },
      stack: ["Python", "Java", "Node.js", "MongoDB"],
    },
    {
      year: 2025,
      role: { en: "Tech Lead", es: "Tech Lead" },
      company: "Architecture & delivery",
      summary: {
        en: "Took ownership of a multi-tenant React platform. Cut deploy time 4x, untangled an auth migration, and kept the team shipping every Friday.",
        es: "Tomé la propiedad de una plataforma multi-tenant en React. Reduje el tiempo de deploy 4x, desenredé una migración de auth y mantuve al equipo enviando cada viernes.",
      },
      stack: ["React", "Node.js", "Azure", "PostgreSQL"],
    },
    {
      year: 2026,
      role: { en: "Open to what's next", es: "Abierto a lo que sigue" },
      company: "Currently",
      summary: {
        en: "Five years in. Looking for high-trust teams building products that matter — globally distributed, technically ambitious.",
        es: "Cinco años en esto. Busco equipos de alta confianza construyendo productos que importan — distribuidos globalmente, técnicamente ambiciosos.",
      },
      stack: ["You?"],
    },
  ],

  stack: {
    Frontend: ["Angular", "Ionic", "React", "TypeScript"],
    Backend: [".NET", "Node.js", "Python", "Java"],
    Databases: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
    "Cloud & DevOps": ["Azure", "Azure DevOps", "GitHub Actions", "Docker"],
  },

  projects: [
    {
      id: 1,
      title: "Logística Móvil",
      blurb: {
        en: "Field-ops mobile app for warehouse drivers — offline-first sync, barcode scan, route optimization.",
        es: "App móvil para conductores de almacén — sync offline-first, escaneo de códigos y optimización de rutas.",
      },
      tags: ["Ionic", "Angular", "TypeScript", ".NET"],
      category: "Mobile",
      live: "#",
      source: "#",
      placeholder: "MOBILE / IONIC",
    },
    {
      id: 2,
      title: "Tenant Console",
      blurb: {
        en: "Admin surface for a multi-tenant SaaS. Role-based access, audit log, bulk operations on 10k+ records.",
        es: "Panel admin para un SaaS multi-tenant. Acceso por roles, log de auditoría, operaciones bulk sobre 10k+ registros.",
      },
      tags: ["React", "Node.js", "PostgreSQL", "Azure"],
      category: "Full-Stack",
      live: "#",
      source: "#",
      placeholder: "DASHBOARD / SAAS",
    },
    {
      id: 3,
      title: "Event Ledger",
      blurb: {
        en: "Append-only event store with Mongo change streams. Powers retroactive reporting across three product teams.",
        es: "Event store append-only con change streams de Mongo. Reportes retroactivos para tres equipos de producto.",
      },
      tags: ["Node.js", "MongoDB", "TypeScript"],
      category: "Backend",
      live: "#",
      source: "#",
      placeholder: "BACKEND / EVENTS",
    },
    {
      id: 4,
      title: "Pulse Dashboard",
      blurb: {
        en: "Realtime metrics dashboard fed by App Insights and a custom Python ETL. Used by ops every morning.",
        es: "Dashboard de métricas en tiempo real, alimentado por App Insights y un ETL en Python. Usado por ops cada mañana.",
      },
      tags: ["Angular", "Python", "Azure", "SQL Server"],
      category: "Full-Stack",
      live: "#",
      source: "#",
      placeholder: "DASHBOARD / METRICS",
    },
    {
      id: 5,
      title: "Onboarding Wizard",
      blurb: {
        en: "Multi-step onboarding that cut activation drop-off 38%. Form state machine, progress persistence, A/B-tested copy.",
        es: "Onboarding multi-paso que redujo el drop-off de activación 38%. State machine de formularios y copy A/B.",
      },
      tags: ["React", "TypeScript"],
      category: "Frontend",
      live: "#",
      source: "#",
      placeholder: "WEB / ONBOARDING",
    },
    {
      id: 6,
      title: "Doc Sign API",
      blurb: {
        en: "Java service for document signing — PKCS#7, audit trail, partner webhook fan-out.",
        es: "Servicio Java para firma de documentos — PKCS#7, trazabilidad de auditoría, fan-out de webhooks.",
      },
      tags: ["Java", "PostgreSQL", "Docker"],
      category: "Backend",
      live: "#",
      source: "#",
      placeholder: "API / SIGNING",
    },
    {
      id: 7,
      title: "Field Inventory",
      blurb: {
        en: "Cross-platform inventory app for retail audits. Camera, geo-tagged photos, conflict-resolved offline writes.",
        es: "App de inventario para auditorías retail. Cámara, fotos geo-etiquetadas y escrituras offline con resolución de conflictos.",
      },
      tags: ["Ionic", "Angular", "MySQL"],
      category: "Mobile",
      live: "#",
      source: "#",
      placeholder: "MOBILE / RETAIL",
    },
    {
      id: 8,
      title: "Marketing Site",
      blurb: {
        en: "Static marketing site with a tiny CMS. Page-load 96 PSI, animated hero, MDX-driven blog.",
        es: "Sitio de marketing estático con un mini CMS. PSI 96, hero animado, blog en MDX.",
      },
      tags: ["React", "TypeScript"],
      category: "Frontend",
      live: "#",
      source: "#",
      placeholder: "WEB / MARKETING",
    },
  ],
};

const TRANSLATIONS = {
  en: {
    nav: { about: "About", stack: "Stack", projects: "Projects", contact: "Contact" },
    hero: { available: "Available for new roles", scroll: "scroll", index: "INDEX" },
    sections: { about: "About", stack: "Tech Stack", projects: "Selected Projects", contact: "Get in touch" },
    about: {
      yearsLabel: "years shipping software",
      timelineLabel: "Career so far",
      activeLabel: "Currently",
    },
    stack: { categories: { Frontend: "Frontend", Backend: "Backend", Databases: "Databases", "Cloud & DevOps": "Cloud & DevOps" } },
    projects: {
      filterAll: "All",
      filters: { Frontend: "Frontend", Backend: "Backend", "Full-Stack": "Full-Stack", Mobile: "Mobile" },
      live: "Live demo",
      source: "Source",
      countLabel: "showing",
    },
    contact: {
      headline: "Have something to build?",
      sub: "I read every message. Reply usually within 24h.",
      name: "Your name",
      email: "Email",
      message: "What are you working on?",
      send: "Send message",
      sent: "Thanks — I'll be in touch.",
      orFind: "Or find me at",
    },
    footer: { built: "Built from scratch · No template · No framework lock-in" },
    tweaks: {
      title: "Tweaks",
      animations: "Animation intensity",
      density: "Density",
      typeface: "Body typeface",
      timeline: "Timeline style",
      hero: "Hero layout",
      accent: "Accent color",
      tagline: "Tagline variant",
      lang: "Language",
      mode: "Theme",
    },
  },
  es: {
    nav: { about: "Sobre mí", stack: "Stack", projects: "Proyectos", contact: "Contacto" },
    hero: { available: "Disponible para nuevos roles", scroll: "scroll", index: "ÍNDICE" },
    sections: { about: "Sobre mí", stack: "Tech Stack", projects: "Proyectos seleccionados", contact: "Contáctame" },
    about: {
      yearsLabel: "años enviando software",
      timelineLabel: "Carrera hasta hoy",
      activeLabel: "Actualmente",
    },
    stack: { categories: { Frontend: "Frontend", Backend: "Backend", Databases: "Bases de datos", "Cloud & DevOps": "Cloud & DevOps" } },
    projects: {
      filterAll: "Todos",
      filters: { Frontend: "Frontend", Backend: "Backend", "Full-Stack": "Full-Stack", Mobile: "Móvil" },
      live: "Ver demo",
      source: "Código",
      countLabel: "mostrando",
    },
    contact: {
      headline: "¿Tienes algo que construir?",
      sub: "Leo cada mensaje. Suelo responder en menos de 24h.",
      name: "Tu nombre",
      email: "Email",
      message: "¿En qué estás trabajando?",
      send: "Enviar mensaje",
      sent: "Gracias — te escribo pronto.",
      orFind: "O encuéntrame en",
    },
    footer: { built: "Hecho a mano · Sin templates · Sin lock-in" },
    tweaks: {
      title: "Tweaks",
      animations: "Intensidad de animación",
      density: "Densidad",
      typeface: "Tipografía del cuerpo",
      timeline: "Estilo de timeline",
      hero: "Layout del hero",
      accent: "Color de acento",
      tagline: "Variante de tagline",
      lang: "Idioma",
      mode: "Tema",
    },
  },
};

// Tech logo glyphs — drawn with simple SVG paths/letters, no copyrighted marks
const TECH_GLYPHS = {
  "Angular":      { letter: "A", hue: 0 },
  "Ionic":        { letter: "I", hue: 0 },
  "React":        { letter: "R", hue: 0 },
  "TypeScript":   { letter: "TS", hue: 0 },
  ".NET":         { letter: ".N", hue: 0 },
  "Node.js":      { letter: "N", hue: 0 },
  "Python":       { letter: "Py", hue: 0 },
  "Java":         { letter: "J", hue: 0 },
  "SQL Server":   { letter: "SQ", hue: 0 },
  "MySQL":        { letter: "My", hue: 0 },
  "MongoDB":      { letter: "M", hue: 0 },
  "PostgreSQL":   { letter: "Pg", hue: 0 },
  "Azure":        { letter: "Az", hue: 0 },
  "Azure DevOps": { letter: "AD", hue: 0 },
  "GitHub Actions":{ letter: "GA", hue: 0 },
  "Docker":       { letter: "Dk", hue: 0 },
  "REST":         { letter: "RE", hue: 0 },
  "C#":           { letter: "C#", hue: 0 },
  "App Insights": { letter: "AI", hue: 0 },
  "You?":         { letter: "?",  hue: 0 },
};

Object.assign(window, { SITE_DATA, TRANSLATIONS, TECH_GLYPHS });
