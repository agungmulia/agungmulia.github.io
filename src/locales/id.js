export default {
  nav: {
    home: 'Beranda',
    about: 'Tentang',
    experience: 'Pengalaman',
    skills: 'Keahlian',
    projects: 'Proyek',
    contact: 'Kontak',
  },
  navbar: {
    sayHi: 'Sapa Saya',
    toggleTheme: 'Ganti tema',
    toggleMenu: 'Buka/tutup menu',
    switchLanguage: 'Ganti bahasa',
  },
  common: {
    close: 'Tutup',
    backToTop: 'Kembali ke atas',
  },
  profile: {
    tagline:
      'Software engineer full-stack dengan 4 tahun pengalaman profesional membangun layanan backend yang skalabel, integrasi e-commerce, dan frontend yang responsif. Mahir dalam Node.js, TypeScript, React, Vue, Docker, dan arsitektur microservices — menghadirkan sistem produksi untuk platform SaaS, e-commerce, dan berbasis AI di perusahaan-perusahaan Singapura dan Indonesia.',
  },
  hero: {
    greeting: 'Halo, saya',
    contact: 'Hubungi Saya',
    viewCv: 'Lihat CV',
    scrollDown: 'Gulir ke bawah',
    imageAlt: 'Potret Agung Mulia',
  },
  stats: {
    experience: { label: 'Pengalaman', value: '4+ Tahun' },
    companies: { label: 'Perusahaan', value: '5' },
    stack: { label: 'Teknologi Utama', value: 'Node.js + Vue' },
  },
  about: {
    title: 'Tentang',
    accent: 'Saya',
  },
  services: {
    backend: {
      title: 'Backend & Microservices',
      summary: 'Layanan andal dan teruji yang skalabel mengikuti volume pesanan dan event.',
      detail:
        'Saya merancang microservices berbasis event dengan Node.js, NestJS, Docker, dan RabbitMQ — termasuk integrasi Shopee, Shopify, dan TikTok Shop yang menangani ribuan event pesanan setiap hari.',
      points: [
        'REST API dengan Node.js, NestJS, Laravel, Spring Boot',
        'Lapisan data MongoDB, MySQL, PostgreSQL',
        'Containerisasi Docker dan pipeline CI/CD',
        'Messaging RabbitMQ, logika retry, dan dead-letter queue',
      ],
    },
    frontend: {
      title: 'Rekayasa Frontend',
      summary: 'Antarmuka yang presisi dan berperforma tinggi, dari Figma hingga produksi.',
      detail:
        'Saya membangun frontend responsif dengan Vue, Nuxt, React, dan Next, mengubah desain menjadi pustaka komponen yang dapat dipakai ulang sehingga pengerjaan fitur baru lebih cepat.',
      points: [
        'Vue 2/3, Nuxt 3, React, Next.js',
        'Design system dengan Tailwind CSS',
        'Serah terima Figma ke komponen',
        'Pustaka komponen dan pola bersama',
      ],
    },
    ai: {
      title: 'Rekayasa Berbantuan AI',
      summary: 'Memanfaatkan perangkat AI untuk menghasilkan kode yang bersih dan mudah dirawat dengan lebih cepat.',
      detail:
        'Saya mengintegrasikan kemampuan LLM ke dalam fitur produksi dan memakai alur kerja berbantuan AI untuk mengotomatiskan pekerjaan berulang tanpa mengorbankan kualitas kode.',
      points: [
        'Claude Code, Codex, Windsurf',
        'Otomasi n8n dan pipeline alur kerja',
        'Integrasi Ollama dan LLM open-source',
        'Code review dan implementasi yang dipercepat AI',
      ],
    },
  },
  journey: {
    title: 'Pengalaman &',
    accent: 'Pendidikan',
    experience: 'Pengalaman',
    education: 'Pendidikan',
  },
  experience: {
    ezb: {
      date: 'Agu 2025 — Sekarang · Kontrak',
      highlight:
        'Membangun pustaka komponen Vue/React yang dapat dipakai ulang untuk platform pemesanan perjalanan, menstandarkan pola desain di seluruh fitur baru.',
      points: [
        'Membangun dan merawat antarmuka frontend yang responsif dan berperforma tinggi menggunakan Next, Nuxt 3, React, Vue 2, Vue 3, dan Tailwind CSS untuk platform pemesanan perjalanan.',
        'Mengintegrasikan RESTful API backend dan menerjemahkan desain UI Figma menjadi komponen yang presisi, sehingga mempersingkat waktu serah terima dari desainer ke developer.',
        'Menjaga kualitas kode melalui code review terstruktur dan triase bug di seluruh modul frontend.',
        'Memanfaatkan Claude sebagai alat pengembangan berbantuan AI untuk mempercepat implementasi dan code review sambil menjaga kode tetap bersih dan mudah dirawat.',
        'Meningkatkan alur kerja pengembangan dengan perangkat berbantuan AI, otomasi, dan pola pengembangan yang dapat dipakai ulang untuk mengurangi pekerjaan berulang.',
        'Membangun pustaka komponen yang dapat dipakai ulang di Vue dan React, sehingga mengurangi waktu pengembangan UI untuk fitur-fitur baru.',
      ],
    },
    dap: {
      date: 'Mei 2025 — Sekarang · Freelance',
      highlight:
        'Membangun integrasi otomatis OAuth + webhook TikTok Shop, memangkas waktu penyiapan integrasi sekitar 40%.',
      points: [
        'Melanjutkan pengembangan backend dari Grip Principle di bawah DAP Asia Pacific, menjaga kesinambungan layanan selama transisi perusahaan.',
        'Membuat integrasi dengan aplikasi publik TikTok Shop, mengurangi waktu penyiapan integrasi sekitar 40% dengan merancang alur OAuth otomatis dan webhook handler di Node.js yang menyinkronkan daftar produk dan status pesanan secara real time.',
        'Meningkatkan keandalan platform untuk aplikasi publik Shopify yang melayani puluhan ribu merchant aktif, mencapai uptime ~99% pada job sinkronisasi kritis dengan merefaktor consumer RabbitMQ menggunakan logika retry, dead-letter queue, dan pencatatan error terstruktur.',
        'Memangkas waktu deployment backend sekitar 50% pada 3 microservices dengan melakukan containerisasi layanan menggunakan Docker dan menstandarkan konfigurasi environment di staging dan produksi.',
        'Meningkatkan skala layanan backend menggunakan Node.js, MongoDB, RabbitMQ, dan Docker untuk mendukung volume pesanan yang terus bertumbuh.',
      ],
    },
    heypico: {
      date: 'Mei 2025 — Agu 2025',
      highlight:
        'Merancang API backend NestJS dan pipeline alur kerja AI n8n, mengintegrasikan kemampuan LLM ke dalam fitur produksi.',
      points: [
        'Merancang dan merawat API backend menggunakan NestJS, dikemas dengan Docker bersama Ollama, n8n, dan PostgreSQL dalam satu stack terpadu.',
        'Membangun alur kerja otomasi mobile dengan Python, meningkatkan efisiensi operasional untuk proses berbasis AI.',
        'Merancang dan merawat pipeline alur kerja AI menggunakan n8n, mengintegrasikan kemampuan LLM ke dalam fitur produksi.',
        'Mengembangkan komponen frontend React yang responsif dan melakukan code review antar rekan untuk menjaga standar engineering.',
        'Mengintegrasikan alur kerja end-to-end antara layanan backend, pipeline otomasi, dan perangkat akhir, dari pemicu alur kerja hingga aksi pada perangkat.',
      ],
    },
    grip: {
      date: 'Agu 2023 — Mei 2025',
      highlight:
        'Memangkas upaya rekonsiliasi manual ~60% lewat integrasi Shopee/Shopify berbasis event yang menangani ribuan pesanan per hari.',
      points: [
        'Menghadirkan API backend yang teruji dengan Node.js, MongoDB, dan MySQL, mendukung operasional e-commerce untuk merchant Shopee dan Shopify.',
        'Membangun arsitektur microservices dengan Docker dan RabbitMQ, memungkinkan komunikasi asinkron antar layanan yang andal pada sistem terdistribusi.',
        'Meningkatkan kecepatan pembuatan dokumen laporan PDF/HTML di sisi server sekitar 70% dengan merancang pipeline rendering headless menggunakan EJS, Puppeteer, dan Browserless pada infrastruktur terkontainerisasi.',
        'Meningkatkan cakupan pengujian backend dan stabilitas API di 5+ layanan — mengurangi laporan bug produksi sekitar 35% — dengan kontrak API yang konsisten, integration test, dan lapisan middleware penanganan error bersama.',
        'Menghadirkan sistem integrasi Shopee dan Shopify yang menangani ribuan event pesanan per hari, mengurangi upaya rekonsiliasi manual sekitar 60% dengan microservices berbasis event menggunakan RabbitMQ.',
      ],
    },
    adakerja: {
      date: 'Jun 2022 — Nov 2022',
      highlight: 'Merilis fitur dan memperbaiki bug pada aplikasi React Native dan backend Node.js AdaKerja.',
      points: [
        'Mengembangkan fitur baru dan memperbaiki bug pada aplikasi mobile AdaKerja menggunakan React Native, meningkatkan stabilitas yang dirasakan pengguna.',
        'Berkontribusi pada pengembangan backend Node.js, meningkatkan fitur dan stabilitas sistem untuk platform pencocokan kerja.',
        'Mengintegrasikan RESTful API dengan aplikasi React Native dan menangani aliran data asinkron untuk menghadirkan fitur mobile yang andal.',
        'Melakukan code review dan memberikan masukan terkait kualitas implementasi.',
        'Menelusuri dan menyelesaikan bug aplikasi di layanan mobile dan backend, mengurangi masalah berulang selama pengembangan.',
      ],
    },
  },
  education: {
    uajy: {
      major: 'Informatika, Sarjana',
      note: 'IPK 3,83/4,0 · Beasiswa penuh Bidikmisi',
      points: [
        'IPK 3,83/4,0, Informatika, Sarjana.',
        'Meraih beasiswa penuh pemerintah Bidikmisi selama 4 tahun.',
        'Mengembangkan sistem absensi berbasis website sebagai tugas akhir, menggunakan Vue.js dan Laravel.',
      ],
    },
    kartini: {
      major: 'Multimedia',
      note: 'Nilai rata-rata 90/100 · Peringkat 1 setiap semester',
      points: [
        'Nilai rata-rata 90/100, jurusan Multimedia.',
        'Nilai ujian nasional tertinggi di jurusan multimedia.',
        'Penghargaan siswa berprestasi dari Tenaris.',
        'Peringkat 1 di semua semester.',
      ],
    },
  },
  skills: {
    title: 'Keahlian &',
    accent: 'Perangkat',
    groups: {
      programming: 'Pemrograman',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      devops: 'DevOps',
      ai: 'Perangkat AI',
      languages: 'Bahasa',
    },
  },
  projects: {
    title: 'Proyek',
    accent: 'Terbaru',
    descriptions: {
      numpak:
        'Pembangunan ulang proyek Atma Jaya Rental saya sebelumnya dengan stack dan versi terbaru: aplikasi web Nuxt 4 dalam bahasa Inggris dan Indonesia, API NestJS, dan monorepo Turborepo. Pelanggan memesan mobil dengan atau tanpa sopir, sementara sopir dan admin punya area masing-masing.',
      automation:
        'API Flask yang berjalan di perangkat lewat Termux untuk mengendalikan Grab, Gojek, dan aplikasi Android lain melalui otomasi UI, diorkestrasi dengan n8n dan diekspos melalui Cloudflare Tunnel.',
      chatbot: 'Chatbot yang sadar lokasi, dibangun di atas Ollama dan OpenWebUI, terintegrasi dengan Google Maps.',
      kartini: 'Sistem absensi berbasis web untuk SMK Kartini Batam — sekaligus skripsi saya.',
      messenger: 'Chatbot yang berinteraksi dengan pengguna dan menghitung jumlah hari menuju tanggal lahir tertentu.',
      'navier-stokes': 'Simulasi dan pemodelan masalah lid-driven cavity dengan Python.',
    },
  },
  contact: {
    title: 'Mari Diskusikan',
    accent: 'Proyek Anda',
    subtitle: 'Punya ide, lowongan, atau sekadar ingin menyapa? Saya senang mendengar kabar dari Anda.',
    email: 'Email',
    emailCta: 'Kirim email',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Kirim pesan',
  },
  cv: {
    title: 'Pratinjau CV',
    iframeTitle: 'Pratinjau CV',
    download: 'Unduh',
    openTab: 'Buka di tab baru',
  },
  palette: {
    open: 'Buka pencarian cepat',
    button: 'Pencarian cepat',
    placeholder: 'Lompat ke bagian, atau lakukan sesuatu…',
    empty: 'Tidak ada hasil',
    jump: 'Lompat ke bagian',
    previewCv: 'Pratinjau CV',
    openResume: 'Buka CV',
    emailMe: 'Kirim email',
    messageWhatsapp: 'Pesan lewat WhatsApp',
    toLight: 'Ganti ke mode terang',
    toDark: 'Ganti ke mode gelap',
    toggleTheme: 'Ganti tema',
    switchLanguage: 'Switch to English',
    languageHint: 'Ganti bahasa',
  },
}
