<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Journey from './components/Journey.vue'
import Contact from './components/Contact.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <Navbar />
  <main class="min-h-screen bg-ink">
    <Hero />
    <About />
    <Journey />
    <Skills />
    <Projects />
    <Contact />
  </main>
</template>
