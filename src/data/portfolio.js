// Single source of truth for all portfolio content.
// Update your info here — components just render this data.

export const profile = {
  firstName: 'Agung',
  lastName: 'Mulia',
  fullName: 'Agung Mulia Eko Putra',
  role: 'Full-stack Software Engineer',
  location: 'Batam, Indonesia',
  tagline:
    'Full-stack software engineer with 4 years of professional experience building scalable backend services, e-commerce integrations, and responsive frontends. Proficient in Node.js, TypeScript, React, Vue, Docker, and microservices architecture — delivering production systems for SaaS, e-commerce, and AI-powered platforms across Singapore and Indonesia based companies.',
  email: 'agungmulia.business@gmail.com',
  whatsapp: '0812-6808-9926',
  whatsappUrl: 'https://wa.me/6281268089926',
  cvUrl: './cv/Agung-Mulia-Eko-Putra-CV.pdf',
  heroImage: 'hero-portrait.png',
  socials: [
    { name: 'GitHub', url: 'https://github.com/agungmulia' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/agungmulia/' },
    { name: 'Instagram', url: 'https://www.instagram.com/agungdanmulia' },
  ],
}

export const stats = [
  { label: 'Experience', value: '4+ Years' },
  { label: 'Companies', value: '5' },
  { label: 'Core Stack', value: 'Node.js + Vue' },
]

export const services = [
  {
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
  {
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
  {
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
]

export const skills = [
  { group: 'Programming', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Python', 'Java'] },
  { group: 'Frontend', items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'Angular', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Laravel', 'Spring Boot', 'RabbitMQ', 'Firebase'] },
  { group: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { group: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Cloudflare', 'CI/CD'] },
  { group: 'AI Tools', items: ['Claude Code', 'Codex', 'n8n', 'Ollama', 'Windsurf'] },
]

export const projects = [
  {
    title: 'Android App UI Automation API',
    year: '2025',
    description:
      'Flask API running on-device via Termux that drives Grab, Gojek, and other Android apps through UI automation, orchestrated through n8n and exposed via a Cloudflare Tunnel.',
    link: 'https://github.com/agungmulia/uiautomator2-automation-script',
    tags: ['Python', 'uiautomator2', 'Flask'],
  },
  {
    title: 'LLM Chatbot with Google Maps',
    year: '2025',
    description: 'Location-aware chatbot built on Ollama and OpenWebUI, integrated with Google Maps.',
    link: 'https://github.com/agungmulia/ollama-openwebui-maps',
    tags: ['Ollama', 'OpenWebUI'],
  },
  {
    title: 'Kartini Attendance System',
    year: '2023',
    description: 'Web-based attendance system for SMK Kartini Batam — also my bachelor thesis.',
    image: 'kartini.png',
    link: 'https://github.com/agungmulia/attendance-system-kartini',
    tags: ['Vue 3', 'Laravel', 'MySQL'],
  },
  {
    title: 'Facebook Messenger Chatbot',
    year: '2022',
    description: 'Chatbot that converses with users and calculates days until a given birth date.',
    image: 'facebookbot.gif',
    link: 'https://github.com/agungmulia/FacebookMessengerChatbot-NodeJS-MongoDB',
    tags: ['Node.js', 'MongoDB'],
  },
  {
    title: 'Atma Jaya Rental — Frontend',
    year: '2022',
    image: 'proj1.png',
    link: 'https://github.com/agungmulia/atmajayarental0426',
    tags: ['Vue 3', 'Tailwind'],
  },
  {
    title: 'Atma Jaya Rental — Backend',
    year: '2022',
    image: 'laravel.png',
    link: 'https://github.com/agungmulia/atmajayarental0426-laravel',
    tags: ['Laravel 9'],
  },
  {
    title: 'Atma Jaya Rental — Mobile',
    year: '2022',
    image: 'proj3.png',
    link: 'https://github.com/agungmulia/atmajayarental0426-mobile',
    tags: ['Java'],
  },
  {
    title: 'Navier–Stokes Simulation',
    year: '2022',
    description: 'Simulating and modelling the lid-driven cavity problem with Python.',
    image: 'simulation.png',
    link: 'https://github.com/agungmulia/LidDrivenCaviti-NavierStokes-python',
    tags: ['Python'],
  },
]

export const experience = [
  {
    company: 'PT EZB Wisata Indonesia (EZBooking/Acetours)',
    role: 'Senior Frontend Developer',
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
  {
    company: 'DAP Asia Pacific (S) Pte. Ltd.',
    role: 'Backend Software Engineer',
    date: 'May 2025 — Present · Freelance',
    highlight:
      'Built an automated TikTok Shop OAuth + webhook integration, cutting integration setup time by ~40%.',
    points: [
      'Continued backend development from Grip Principle under DAP Asia Pacific, maintaining service continuity across the company transition.',
      'Created integration with TikTok Shop public app, reducing integration setup time by ~40% by engineering an automated OAuth flow and webhook handler in Node.js that synced product listings and order statuses in real time.',
      'Improved platform reliability for a Shopify public app serving tens of thousands of active merchants, achieving ~99% uptime on critical sync jobs by refactoring RabbitMQ consumers with retry logic, dead-letter queues, and structured error logging.',
      'Cut backend deployment time by ~50% across 3 microservices by containerizing services with Docker and standardizing environment configs across staging and production.',
      'Scaled backend services using Node.js, MongoDB, RabbitMQ, and Docker, supporting growing order volumes.',
    ],
  },
  {
    company: '30 Plus Group Pte. Ltd. (HeyPico AI)',
    role: 'Full-stack Software Engineer',
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
  {
    company: 'Grip Principle Pte. Ltd.',
    role: 'Backend Software Engineer',
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
  {
    company: 'AdaKerja (TrySteve Pte. Ltd.)',
    role: 'Software Engineer Intern',
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
]

export const education = [
  {
    school: 'Universitas Atma Jaya Yogyakarta',
    image: 'uajy.png',
    major: 'Informatics, Bachelor',
    year: '2019 — 2023',
    note: '3.83/4.0 GPA · Full Bidikmisi scholarship',
    points: [
      '3.83/4.0 GPA, Informatics, Bachelor.',
      'Awarded full 4-year Bidikmisi government scholarship.',
      'Developed a website-based attendance system as part of the final thesis, using Vue.js and Laravel.',
    ],
  },
  {
    school: 'Kartini Vocational High School',
    image: 'kartini.png',
    major: 'Multimedia',
    year: '2016 — 2019',
    note: '90/100 GPA · 1st rank every semester',
    points: [
      '90/100 GPA, Multimedia major.',
      'Highest national exam score in the multimedia major.',
      'Tenaris excellence student award.',
      '1st rank in all semesters.',
    ],
  },
]

export const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]
