<script setup>
import { Mail, MessageCircle, ArrowRight, Code2, Briefcase, Camera } from '@lucide/vue'
import { profile } from '../data/portfolio'

const contactMethods = [
  { name: 'Email', value: profile.email, href: `mailto:${profile.email}`, cta: 'Send an email', icon: Mail },
  {
    name: 'WhatsApp',
    value: profile.whatsapp,
    href: profile.whatsappUrl,
    cta: 'Message me',
    icon: MessageCircle,
  },
]

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Briefcase,
  Instagram: Camera,
}
</script>

<template>
  <footer id="contact" class="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-28">
    <div data-reveal class="text-center">
      <h2 class="font-display text-3xl font-semibold text-heading md:text-4xl">
        Let's Discuss Your <span class="text-gradient">Project</span>
      </h2>
      <p class="mx-auto mt-4 max-w-md text-muted">
        Have an idea, a role, or just want to say hi? I'd love to hear from you.
      </p>
    </div>

    <div data-reveal class="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
      <a
        v-for="method in contactMethods"
        :key="method.name"
        :href="method.href"
        target="_blank"
        rel="noopener"
        class="group rounded-2xl border border-line/10 bg-panel/60 p-5 transition hover:border-accent-pink/40 sm:p-6"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-violet/20 text-accent-pink"
        >
          <component :is="method.icon" :size="18" />
        </div>
        <p class="mt-4 text-xs uppercase tracking-widest text-subtle">{{ method.name }}</p>
        <p class="mt-1 break-all text-base text-heading sm:text-lg">{{ method.value }}</p>
        <span class="mt-4 flex items-center gap-1 text-sm text-accent-pink">
          {{ method.cta }}
          <ArrowRight :size="14" class="transition group-hover:translate-x-1" />
        </span>
      </a>
    </div>

    <div class="mt-10 flex flex-col items-center gap-6 border-t border-line/10 pt-8 sm:mt-16 sm:flex-row sm:justify-between">
      <p class="text-sm text-subtle">© {{ new Date().getFullYear() }} {{ profile.fullName }}</p>
      <div class="flex gap-5 text-sm text-muted">
        <a
          v-for="social in profile.socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-1.5 transition hover:text-heading"
        >
          <component :is="socialIcons[social.name]" :size="15" />
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>
