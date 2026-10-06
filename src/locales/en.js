export default {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  navbar: {
    sayHi: 'Say Hi',
    toggleTheme: 'Toggle theme',
    toggleMenu: 'Toggle menu',
    switchLanguage: 'Switch language',
  },
  common: {
    close: 'Close',
    backToTop: 'Back to top',
  },
  profile: {
    tagline:
      'Full-stack software engineer with 4 years of professional experience building scalable backend services, e-commerce integrations, and responsive frontends. Proficient in Node.js, TypeScript, React, Vue, Docker, and microservices architecture — delivering production systems for SaaS, e-commerce, and AI-powered platforms across Singapore and Indonesia based companies.',
  },
  hero: {
    greeting: "Hi, I'm",
    contact: 'Contact Me',
    viewCv: 'View CV',
    scrollDown: 'Scroll down',
    imageAlt: 'Portrait of Agung Mulia',
  },
  stats: {
    experience: { label: 'Experience', value: '4+ Years' },
    companies: { label: 'Companies', value: '5' },
    stack: { label: 'Core Stack', value: 'Node.js + Vue' },
  },
  about: {
    title: 'About',
    accent: 'Me',
  },
  services: {
    backend: {
      title: 'Backend & Microservices',
      summary: 'Reliable, well-tested services that scale with order and event volume.',
      detail:
        'I design event-driven microservices with Node.js, NestJS, Docker, and RabbitMQ — including Shopee, Shopify, and TikTok Shop integrations handling thousands of daily order events.',
      points: [
        'REST APIs with Node.js, NestJS, Laravel, Spring Boot',
        'MongoDB, MySQL, PostgreSQL data layers',
        'Docker containerization and CI/CD pipelines',
        'RabbitMQ messaging, retry logic, and dead-letter queues',
      ],
    },
    frontend: {
      title: 'Frontend Engineering',
      summary: 'Pixel-accurate, high-performance interfaces from Figma to production.',
      detail:
        'I build responsive frontends with Vue, Nuxt, React, and Next, translating designs into reusable component libraries that speed up delivery across new features.',
      points: [
        'Vue 2/3, Nuxt 3, React, Next.js',
        'Tailwind CSS design systems',
        'Figma-to-component handoff',
        'Shared component libraries and patterns',
      ],
    },
    ai: {
      title: 'AI-Assisted Engineering',
      summary: 'Using AI tooling to ship clean, maintainable code faster.',
      detail:
        'I integrate LLM capabilities into production features and use AI-assisted workflows to automate repetitive work without sacrificing code quality.',
      points: [
        'Claude Code, Codex, Windsurf',
        'n8n automation and workflow pipelines',
        'Ollama and open-source LLM integrations',
        'AI-accelerated code review and implementation',
      ],
    },
  },
  journey: {
    title: 'Experience &',
    accent: 'Education',
    experience: 'Experience',
    education: 'Education',
  },
  experience: {
    ezb: {
      date: 'Aug 2025 — Present · Contract',
      highlight:
        'Built reusable Vue/React component libraries for a travel booking platform, standardizing design patterns across new features.',
      points: [
        'Built and maintained responsive, high-performance frontend interfaces using Next, Nuxt 3, React, Vue 2, Vue 3, and Tailwind CSS for a travel booking platform.',
        'Integrated RESTful backend APIs and translated Figma UI designs into pixel-accurate components, reducing designer-to-dev handoff time.',
        'Maintained code quality through structured code reviews and bug triage across frontend modules.',
        'Leveraged Claude as an AI-assisted development tool to accelerate implementation and code reviews while ensuring clean, maintainable code.',
        'Improved development workflows with AI-assisted tooling, automation, and reusable development patterns to reduce repetitive work.',
        'Built reusable component libraries in Vue and React, reducing UI development time across new features.',
      ],
    },
    dap: {
      date: 'May 2025 — Present · Freelance',
      highlight: 'Built an automated TikTok Shop OAuth + webhook integration, cutting integration setup time by ~40%.',
      points: [
        'Continued backend development from Grip Principle under DAP Asia Pacific, maintaining service continuity across the company transition.',
        'Created integration with TikTok Shop public app, reducing integration setup time by ~40% by engineering an automated OAuth flow and webhook handler in Node.js that synced product listings and order statuses in real time.',
        'Improved platform reliability for a Shopify public app serving tens of thousands of active merchants, achieving ~99% uptime on critical sync jobs by refactoring RabbitMQ consumers with retry logic, dead-letter queues, and structured error logging.',
        'Cut backend deployment time by ~50% across 3 microservices by containerizing services with Docker and standardizing environment configs across staging and production.',
        'Scaled backend services using Node.js, MongoDB, RabbitMQ, and Docker, supporting growing order volumes.',
      ],
    },
    heypico: {
      date: 'May 2025 — Aug 2025',
      highlight:
        'Architected NestJS backend APIs and n8n AI workflow pipelines, integrating LLM capabilities into production features.',
      points: [
        'Architected and maintained backend APIs using NestJS, containerized with Docker alongside Ollama, n8n, and PostgreSQL in a unified stack.',
        'Built mobile automation workflows in Python, improving operational efficiency for AI-driven processes.',
        'Designed and maintained AI workflow pipelines using n8n, integrating LLM capabilities into production features.',
        'Developed responsive React frontend components and conducted peer code reviews to uphold engineering standards.',
        'Integrated end-to-end workflows across backend services, automation pipelines, and end devices, from workflow triggers to device actions.',
      ],
    },
    grip: {
      date: 'Aug 2023 — May 2025',
      highlight:
        'Cut manual reconciliation effort ~60% with event-driven Shopee/Shopify integrations handling thousands of daily orders.',
      points: [
        'Delivered well-tested backend APIs using Node.js, MongoDB, and MySQL, supporting e-commerce operations for Shopee and Shopify merchants.',
        'Built microservices architecture with Docker and RabbitMQ, enabling reliable async inter-service communication across distributed systems.',
        'Improved document generation speed for server-side PDF/HTML reports by ~70% by architecting a headless rendering pipeline using EJS, Puppeteer, and Browserless on containerized infrastructure.',
        'Increased backend test coverage and API stability across 5+ services — reducing production bug reports by ~35% — with consistent API contracts, integration tests, and a shared error-handling middleware layer.',
        'Delivered a Shopee and Shopify integration system handling thousands of daily order events, reducing manual reconciliation effort by ~60% with event-driven microservices using RabbitMQ.',
      ],
    },
    adakerja: {
      date: 'Jun 2022 — Nov 2022',
      highlight: 'Shipped features and fixed bugs across the AdaKerja React Native app and Node.js backend.',
      points: [
        'Developed new features and fixed bugs in the AdaKerja mobile app using React Native, improving user-facing stability.',
        'Contributed to Node.js backend development, enhancing system features and stability for the job-matching platform.',
        'Integrated RESTful APIs with the React Native application and handled asynchronous data flows to deliver reliable mobile features.',
        'Conducted code reviews and provided feedback on implementation quality.',
        'Troubleshot and resolved application bugs across mobile and backend services, reducing recurring issues during development.',
      ],
    },
  },
  education: {
    uajy: {
      major: 'Informatics, Bachelor',
      note: '3.83/4.0 GPA · Full Bidikmisi scholarship',
      points: [
        '3.83/4.0 GPA, Informatics, Bachelor.',
        'Awarded full 4-year Bidikmisi government scholarship.',
        'Developed a website-based attendance system as part of the final thesis, using Vue.js and Laravel.',
      ],
    },
    kartini: {
      major: 'Multimedia',
      note: '90/100 GPA · 1st rank every semester',
      points: [
        '90/100 GPA, Multimedia major.',
        'Highest national exam score in the multimedia major.',
        'Tenaris excellence student award.',
        '1st rank in all semesters.',
      ],
    },
  },
  skills: {
    title: 'Skills &',
    accent: 'Tools',
    groups: {
      programming: 'Programming',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
      ai: 'AI Tools',
      languages: 'Languages',
    },
  },
  projects: {
    title: 'Recent',
    accent: 'Projects',
    descriptions: {
      numpak:
        'A rebuild of my earlier Atma Jaya Rental project on the latest stack and versions: a Nuxt 4 web app in English and Indonesian, a NestJS API, and a Turborepo monorepo. Customers book cars with or without a driver, while drivers and admins get their own areas.',
      automation:
        'Flask API running on-device via Termux that drives Grab, Gojek, and other Android apps through UI automation, orchestrated through n8n and exposed via a Cloudflare Tunnel.',
      chatbot: 'Location-aware chatbot built on Ollama and OpenWebUI, integrated with Google Maps.',
      kartini: 'Web-based attendance system for SMK Kartini Batam — also my bachelor thesis.',
      messenger: 'Chatbot that converses with users and calculates days until a given birth date.',
      'navier-stokes': 'Simulating and modelling the lid-driven cavity problem with Python.',
    },
  },
  contact: {
    title: "Let's Discuss Your",
    accent: 'Project',
    subtitle: "Have an idea, a role, or just want to say hi? I'd love to hear from you.",
    email: 'Email',
    emailCta: 'Send an email',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Message me',
  },
  cv: {
    title: 'Resume Preview',
    iframeTitle: 'CV preview',
    download: 'Download',
    openTab: 'Open in new tab',
  },
  palette: {
    open: 'Open quick search',
    button: 'Quick search',
    placeholder: 'Jump to a section, or do something…',
    empty: 'No matches',
    jump: 'Jump to section',
    previewCv: 'Preview CV',
    openResume: 'Open resume',
    emailMe: 'Email me',
    messageWhatsapp: 'Message on WhatsApp',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    toggleTheme: 'Toggle theme',
    switchLanguage: 'Switch to Bahasa Indonesia',
    languageHint: 'Change language',
  },
}
