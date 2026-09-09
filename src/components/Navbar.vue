<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon } from '@lucide/vue'
import { navLinks, profile } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'

const { theme, toggle: toggleTheme } = useTheme()
const open = ref(false)
const active = ref('home')

function scrollTo(id) {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

let observer
onMounted(() => {
  const sections = navLinks
    .map((link) => document.getElementById(link.id))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) active.value = visible.target.id
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  sections.forEach((section) => observer.observe(section))
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line/5 bg-ink/70 backdrop-blur-lg">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <button class="font-display text-lg font-semibold text-heading" @click="scrollTo('home')">
        {{ profile.firstName }}<span class="text-gradient">{{ profile.lastName }}</span>
      </button>

      <ul class="hidden items-center gap-8 text-sm text-body sm:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="transition hover:text-heading"
            :class="{ 'text-heading': active === link.id }"
            @click="scrollTo(link.id)"
          >
            {{ link.name }}
          </button>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          class="rounded-full p-2 text-subtle transition hover:bg-chip/10 hover:text-heading"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <button
          class="hidden rounded-full border border-accent-pink/40 px-4 py-1.5 text-sm text-accent-pink transition hover:bg-accent-pink hover:text-white sm:block"
          @click="scrollTo('contact')"
        >
          Say Hi
        </button>

        <button class="sm:hidden" aria-label="Toggle menu" @click="open = !open">
          <span
            class="block h-0.5 w-6 bg-heading transition"
            :class="{ 'translate-y-1.5 rotate-45': open }"
          />
          <span class="my-1 block h-0.5 w-6 bg-heading transition" :class="{ 'opacity-0': open }" />
          <span
            class="block h-0.5 w-6 bg-heading transition"
            :class="{ '-translate-y-1.5 -rotate-45': open }"
          />
        </button>
      </div>
    </nav>

    <ul v-if="open" class="space-y-1 border-t border-line/5 bg-ink px-6 py-4 sm:hidden">
      <li v-for="link in navLinks" :key="link.id">
        <button class="block w-full py-2 text-left text-body" @click="scrollTo(link.id)">
          {{ link.name }}
        </button>
      </li>
    </ul>
  </header>
</template>
