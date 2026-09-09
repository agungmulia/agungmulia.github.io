<script setup>
import { Terminal, Monitor, Server, Database, Cloud, Bot } from '@lucide/vue'
import { skills } from '../data/portfolio'

const icons = {
  Programming: Terminal,
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  'AI Tools': Bot,
}

function tilt(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  card.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 14}deg) rotateY(${(x - 0.5) * 14}deg) scale3d(1.02, 1.02, 1.02)`
  card.style.setProperty('--mx', `${x * 100}%`)
  card.style.setProperty('--my', `${y * 100}%`)
}

function resetTilt(event) {
  event.currentTarget.style.transform = ''
}
</script>

<template>
  <section id="skills" class="relative overflow-hidden bg-surface py-16 sm:py-24 lg:py-28">
    <div
      class="absolute -left-24 top-0 h-[28rem] w-[28rem] animate-breathe rounded-full blur-2xl"
      style="background: radial-gradient(circle, rgb(236 72 153 / 0.28), transparent 70%)"
    />
    <div
      class="absolute -right-24 bottom-0 h-[30rem] w-[30rem] animate-breathe rounded-full blur-2xl [animation-delay:-2.5s]"
      style="background: radial-gradient(circle, rgb(139 92 246 / 0.24), transparent 70%)"
    />
    <div
      class="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full blur-2xl [animation-delay:-4s]"
      style="background: radial-gradient(circle, rgb(59 130 246 / 0.16), transparent 70%)"
    />

    <div class="relative mx-auto max-w-6xl px-6">
      <h2 data-reveal class="text-center font-display text-3xl font-semibold text-heading md:text-4xl">
        Skills & <span class="text-gradient">Tools</span>
      </h2>

      <div class="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in skills"
          :key="group.group"
          data-reveal
          class="glass-card rounded-2xl p-6"
          @pointermove="tilt"
          @pointerleave="resetTilt"
        >
          <div class="glass-card-content">
            <h3
              class="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent-pink"
            >
              <component :is="icons[group.group]" :size="16" />
              {{ group.group }}
            </h3>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="item in group.items"
                :key="item"
                class="rounded-full border border-line/10 px-3 py-1 text-xs text-body"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  position: relative;
  overflow: hidden;
  background: rgb(var(--color-panel) / 0.5);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgb(var(--color-line) / 0.14);
  border-bottom-color: rgb(var(--color-line) / 0.05);
  border-right-color: rgb(var(--color-line) / 0.08);
  box-shadow: 0 20px 40px -24px rgb(0 0 0 / 0.35), inset 0 1px 0 rgb(255 255 255 / 0.12);
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
  will-change: transform;
}

.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    420px circle at var(--mx, 50%) var(--my, 30%),
    rgb(255 255 255 / 0.14),
    transparent 55%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.glass-card:hover::before {
  opacity: 1;
}

.glass-card:hover {
  box-shadow: 0 30px 54px -20px rgb(0 0 0 / 0.4), inset 0 1px 0 rgb(255 255 255 / 0.16);
}

.glass-card-content {
  transform: translateZ(24px);
}

@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transition: none;
  }
}
</style>
