<script setup>
import { projects } from '../data/portfolio'

function tilt(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  card.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`
}

function resetTilt(event) {
  event.currentTarget.style.transform = ''
}
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
    <h2 data-reveal class="text-center font-display text-3xl font-semibold text-heading md:text-4xl">
      Recent <span class="text-gradient">Projects</span>
    </h2>

    <div class="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.link"
        target="_blank"
        rel="noopener"
        data-reveal
        class="group overflow-hidden rounded-2xl border border-line/10 bg-panel/60 transition-shadow hover:shadow-2xl hover:shadow-accent-violet/10"
        style="transition: transform 0.15s ease"
        @pointermove="tilt"
        @pointerleave="resetTilt"
      >
        <div class="aspect-video overflow-hidden bg-chip/5">
          <img
            v-if="project.image"
            :src="`./img/${project.image}`"
            :alt="project.title"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-violet/20 via-accent-pink/10 to-accent-blue/20 font-display text-3xl text-heading/20 transition duration-500 group-hover:text-heading/30"
          >
            {{ project.tags[0] }}
          </div>
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-base font-semibold text-heading">{{ project.title }}</h3>
            <span class="shrink-0 text-xs text-subtle">{{ project.year }}</span>
          </div>
          <p v-if="project.description" class="mt-2 text-sm text-subtle">{{ project.description }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-chip/5 px-2.5 py-1 text-xs text-muted"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
