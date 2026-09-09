<script setup>
import { defineAsyncComponent } from 'vue'
import { ArrowRight, Download } from '@lucide/vue'
import { profile, stats } from '../data/portfolio'
import { useCvPreview } from '../composables/useCvPreview'

const cvPreview = useCvPreview()

const ThreeBackground = defineAsyncComponent(() => import('./ThreeBackground.vue'))

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function tilt(event) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.04, 1.04, 1.04)`
}

function resetTilt(event) {
  event.currentTarget.style.transform = ''
}
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden bg-grid bg-grid-fade pt-20 sm:pt-24"
  >
    <ThreeBackground />

    <div class="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-6 sm:gap-12 md:grid-cols-2 md:items-center">
      <div data-reveal>
        <p class="mb-4 text-xs uppercase tracking-[0.2em] text-accent-pink sm:text-sm sm:tracking-[0.3em]">
          {{ profile.role }}
          <span class="mt-1 block text-subtle sm:mt-0 sm:inline">· {{ profile.location }}</span>
        </p>
        <h1 class="font-display text-4xl font-semibold leading-tight text-heading sm:text-5xl md:text-6xl">
          Hi, I'm
          <span class="text-gradient">{{ profile.fullName }}</span>
        </h1>
        <p class="mt-6 max-w-lg text-muted">{{ profile.tagline }}</p>

        <div class="mt-8 flex flex-wrap gap-4">
          <button
            class="group flex items-center gap-2 rounded-full bg-accent-pink px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-pink/20 transition hover:bg-pink-500"
            @click="scrollTo('contact')"
          >
            Contact Me
            <ArrowRight :size="16" class="transition group-hover:translate-x-1" />
          </button>
          <button
            class="flex items-center gap-2 rounded-full border border-line/15 px-6 py-3 text-sm font-medium text-heading transition hover:border-line/40"
            @click="cvPreview.open()"
          >
            <Download :size="16" />
            View CV
          </button>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-4 border-t border-line/10 pt-8 sm:mt-14 sm:gap-6">
          <div v-for="stat in stats" :key="stat.label">
            <p class="font-display text-xl font-semibold text-heading sm:text-2xl">{{ stat.value }}</p>
            <p class="mt-1 text-xs text-subtle">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div data-reveal class="relative mx-auto flex max-w-xs justify-center md:max-w-md">
        <div
          class="absolute inset-0 m-auto h-44 w-44 animate-breathe rounded-full bg-gradient-to-br from-accent-pink/30 via-accent-violet/20 to-accent-blue/30 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"
        />
        <div class="w-full animate-float">
          <img
            :src="`./img/${profile.heroImage}`"
            alt="Agung Mulia"
            class="relative z-10 w-full max-w-[220px] object-contain transition-transform duration-500 ease-out will-change-transform sm:max-w-[320px] md:max-w-md"
            @pointermove="tilt"
            @pointerleave="resetTilt"
          />
        </div>
      </div>
    </div>

    <button
      class="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-subtle md:block"
      aria-label="Scroll down"
      @click="scrollTo('about')"
    >
      ↓
    </button>
  </section>
</template>
