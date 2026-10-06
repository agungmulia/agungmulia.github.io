// Language-neutral portfolio data: names, links, images, tech tags.
// All translatable text lives in src/locales/*.js, keyed by each item's `id`
// and merged back together by composables/useContent.js.

export const profile = {
  firstName: 'Agung',
  lastName: 'Mulia',
  fullName: 'Agung Mulia Eko Putra',
  role: 'Full-stack Software Engineer',
  location: 'Batam, Indonesia',
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

export const stats = [{ id: 'experience' }, { id: 'companies' }, { id: 'stack' }]

export const services = [{ id: 'backend' }, { id: 'frontend' }, { id: 'ai' }]

export const skills = [
  { id: 'programming', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Python', 'Java'] },
  { id: 'frontend', items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'Angular', 'Tailwind CSS'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'Laravel', 'Spring Boot', 'RabbitMQ', 'Firebase'] },
  { id: 'database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { id: 'devops', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Cloudflare', 'Git', 'CI/CD'] },
  { id: 'ai', items: ['Claude Code', 'Codex', 'n8n', 'Ollama', 'Windsurf', 'Stitch', 'Zep', 'Open Router'] },
  { id: 'languages', items: ['English', 'Bahasa Indonesia'] },
]

export const projects = [
  {
    id: 'numpak',
    title: 'Numpak — Car Rental Platform',
    year: '2026',
    image: 'numpak-logo.svg',
    link: 'https://numpak-rental.vercel.app/',
    tags: ['Nuxt 4', 'NestJS', 'PostgreSQL', 'Vercel'],
  },
  {
    id: 'automation',
    title: 'Android App UI Automation API',
    year: '2025',
    link: 'https://github.com/agungmulia/uiautomator2-automation-script',
    tags: ['Python', 'uiautomator2', 'Flask'],
  },
  {
    id: 'chatbot',
    title: 'LLM Chatbot with Google Maps',
    year: '2025',
    link: 'https://github.com/agungmulia/ollama-openwebui-maps',
    tags: ['Ollama', 'OpenWebUI'],
  },
  {
    id: 'kartini',
    title: 'Kartini Attendance System',
    year: '2023',
    image: 'kartini.png',
    link: 'https://github.com/agungmulia/attendance-system-kartini',
    tags: ['Vue 3', 'Laravel', 'MySQL'],
  },
  {
    id: 'messenger',
    title: 'Facebook Messenger Chatbot',
    year: '2022',
    image: 'facebookbot.gif',
    link: 'https://github.com/agungmulia/FacebookMessengerChatbot-NodeJS-MongoDB',
    tags: ['Node.js', 'MongoDB'],
  },
  {
    id: 'rental-web',
    title: 'Atma Jaya Rental — Frontend',
    year: '2022',
    image: 'proj1.png',
    link: 'https://github.com/agungmulia/atmajayarental0426',
    tags: ['Vue 3', 'Tailwind'],
  },
  {
    id: 'rental-api',
    title: 'Atma Jaya Rental — Backend',
    year: '2022',
    image: 'laravel.png',
    link: 'https://github.com/agungmulia/atmajayarental0426-laravel',
    tags: ['Laravel 9'],
  },
  {
    id: 'rental-mobile',
    title: 'Atma Jaya Rental — Mobile',
    year: '2022',
    image: 'proj3.png',
    link: 'https://github.com/agungmulia/atmajayarental0426-mobile',
    tags: ['Java'],
  },
  {
    id: 'navier-stokes',
    title: 'Navier–Stokes Simulation',
    year: '2022',
    image: 'simulation.png',
    link: 'https://github.com/agungmulia/LidDrivenCaviti-NavierStokes-python',
    tags: ['Python'],
  },
]

export const experience = [
  { id: 'ezb', company: 'PT EZB Wisata Indonesia (EZBooking/Acetours)', role: 'Senior Frontend Developer' },
  { id: 'dap', company: 'DAP Asia Pacific (S) Pte. Ltd.', role: 'Backend Software Engineer' },
  { id: 'heypico', company: '30 Plus Group Pte. Ltd. (HeyPico AI)', role: 'Full-stack Software Engineer' },
  { id: 'grip', company: 'Grip Principle Pte. Ltd.', role: 'Backend Software Engineer' },
  { id: 'adakerja', company: 'AdaKerja (TrySteve Pte. Ltd.)', role: 'Software Engineer Intern' },
]

export const education = [
  { id: 'uajy', school: 'Universitas Atma Jaya Yogyakarta', image: 'uajy.png', year: '2019 — 2023' },
  { id: 'kartini', school: 'Kartini Vocational High School', image: 'kartini.png', year: '2016 — 2019' },
]

export const navLinks = [
  { id: 'home' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' },
]
