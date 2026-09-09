<script setup>
import { ref } from 'vue'
import { Briefcase, GraduationCap, Maximize2 } from '@lucide/vue'
import { experience, education } from '../data/portfolio'
import Modal from './Modal.vue'

function initials(name) {
  const words = name.replace(/\(.*?\)/g, '').trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

const selected = ref(null)

function openJob(job) {
  selected.value = { type: 'job', ...job }
}

function openSchool(school) {
  selected.value = { type: 'school', ...school }
}

function close() {
  selected.value = null
}
</script>

<template>
  <section id="experience" class="bg-surface py-16 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <h2 data-reveal class="text-center font-display text-3xl font-semibold text-heading md:text-4xl">
        Experience & <span class="text-gradient">Education</span>
      </h2>

      <div class="mt-10 sm:mt-16">
        <h3
          class="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-accent-pink"
        >
          <Briefcase :size="16" /> Experience
        </h3>
        <div class="mt-6 space-y-3 sm:space-y-4">
          <button
            v-for="job in experience"
            :key="job.company"
            type="button"
            data-reveal
            class="group flex w-full gap-3 rounded-2xl border border-line/10 bg-panel/60 p-4 text-left transition hover:-translate-y-1 hover:border-accent-pink/40 sm:gap-5 sm:p-6"
            @click="openJob(job)"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20 font-display text-xs font-semibold text-accent-pink sm:h-12 sm:w-12 sm:text-sm"
            >
              {{ initials(job.company) }}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <p class="font-display text-base font-semibold text-heading sm:text-lg">{{ job.role }}</p>
                <span class="shrink-0 rounded-full bg-chip/5 px-3 py-1 text-xs text-muted">
                  {{ job.date }}
                </span>
              </div>
              <p class="text-sm font-medium text-accent-pink">{{ job.company }}</p>
              <p class="mt-2 text-sm text-muted">{{ job.highlight }}</p>
            </div>
            <Maximize2
              :size="16"
              class="mt-1 shrink-0 self-start text-faint opacity-50 transition group-hover:opacity-100 sm:opacity-0"
            />
          </button>
        </div>
      </div>

      <div class="mt-10 sm:mt-16">
        <h3
          class="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-accent-blue"
        >
          <GraduationCap :size="16" /> Education
        </h3>
        <div class="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
          <button
            v-for="school in education"
            :key="school.school"
            type="button"
            data-reveal
            class="group flex w-full gap-3 rounded-2xl border border-line/10 bg-panel/60 p-4 text-left transition hover:-translate-y-1 hover:border-accent-blue/40 sm:gap-4 sm:p-6"
            @click="openSchool(school)"
          >
            <img
              :src="`./img/${school.image}`"
              :alt="school.school"
              class="h-10 w-10 shrink-0 rounded-xl object-cover sm:h-12 sm:w-12"
            />
            <div class="min-w-0 flex-1">
              <p class="font-display text-base font-semibold text-heading">{{ school.school }}</p>
              <p class="text-sm font-medium text-accent-blue">{{ school.major }}</p>
              <p class="text-xs text-subtle">{{ school.year }}</p>
              <p class="mt-2 text-sm text-muted">{{ school.note }}</p>
            </div>
            <Maximize2
              :size="16"
              class="mt-1 shrink-0 self-start text-faint opacity-50 transition group-hover:opacity-100 sm:opacity-0"
            />
          </button>
        </div>
      </div>
    </div>

    <Modal :open="selected !== null" @close="close">
      <template v-if="selected">
        <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-subtle">
          <component :is="selected.type === 'job' ? Briefcase : GraduationCap" :size="14" />
          {{ selected.type === 'job' ? 'Experience' : 'Education' }}
        </div>
        <h3 class="mt-2 font-display text-2xl font-semibold text-heading">
          {{ selected.type === 'job' ? selected.role : selected.school }}
        </h3>
        <p
          class="text-sm font-medium"
          :class="selected.type === 'job' ? 'text-accent-pink' : 'text-accent-blue'"
        >
          {{ selected.type === 'job' ? selected.company : selected.major }}
        </p>
        <p class="mt-1 text-xs text-subtle">{{ selected.date || selected.year }}</p>
        <ul class="mt-5 space-y-3 text-sm text-muted">
          <li v-for="point in selected.points" :key="point" class="flex gap-2">
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
            {{ point }}
          </li>
        </ul>
      </template>
    </Modal>
  </section>
</template>
