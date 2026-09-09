<script setup>
import { Server, Monitor, Sparkles } from '@lucide/vue'
import { profile, services } from '../data/portfolio'

const icons = {
  'Backend & Microservices': Server,
  'Frontend Engineering': Monitor,
  'AI-Assisted Engineering': Sparkles,
}
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
    <div data-reveal class="mx-auto max-w-2xl text-center">
      <h2 class="font-display text-3xl font-semibold text-heading md:text-4xl">
        About <span class="text-gradient">Me</span>
      </h2>
      <p class="mt-4 text-left text-muted sm:text-center">{{ profile.tagline }}</p>
    </div>

    <div class="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.title"
        data-reveal
        class="rounded-2xl border border-line/10 bg-panel/60 p-6 transition hover:border-accent-pink/40 hover:-translate-y-1 sm:p-8"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20 text-accent-pink"
        >
          <component :is="icons[service.title]" :size="20" />
        </div>
        <h3 class="mt-4 font-display text-xl font-semibold text-heading">{{ service.title }}</h3>
        <p class="mt-3 text-sm text-muted">{{ service.summary }}</p>
        <p class="mt-4 text-sm text-subtle">{{ service.detail }}</p>
        <ul class="mt-5 space-y-2 text-sm text-muted">
          <li v-for="point in service.points" :key="point" class="flex items-start gap-2">
            <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-pink" />
            {{ point }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
