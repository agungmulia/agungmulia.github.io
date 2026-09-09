<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import {
  Search,
  ArrowRight,
  Mail,
  MessageCircle,
  Code2,
  Briefcase,
  Camera,
  FileText,
  SunMoon,
} from '@lucide/vue'
import { profile, navLinks } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'
import { useCvPreview } from '../composables/useCvPreview'

const { theme, toggle: toggleTheme } = useTheme()
const cvPreview = useCvPreview()

const dialog = ref(null)
const input = ref(null)
const query = ref('')
const activeIndex = ref(0)

const socialIcons = { GitHub: Code2, LinkedIn: Briefcase, Instagram: Camera }

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const commands = computed(() => [
  ...navLinks.map((link) => ({
    id: `nav-${link.id}`,
    label: link.name,
    hint: 'Jump to section',
    icon: ArrowRight,
    run: () => scrollTo(link.id),
  })),
  {
    id: 'cv',
    label: 'Preview CV',
    hint: 'Open resume',
    icon: FileText,
    run: () => cvPreview.open(),
  },
  {
    id: 'email',
    label: 'Email me',
    hint: profile.email,
    icon: Mail,
    run: () => {
      window.location.href = `mailto:${profile.email}`
    },
  },
  {
    id: 'whatsapp',
    label: 'Message on WhatsApp',
    hint: profile.whatsapp,
    icon: MessageCircle,
    run: () => window.open(profile.whatsappUrl, '_blank', 'noopener'),
  },
  ...profile.socials.map((social) => ({
    id: `social-${social.name}`,
    label: social.name,
    hint: social.url.replace('https://', ''),
    icon: socialIcons[social.name],
    run: () => window.open(social.url, '_blank', 'noopener'),
  })),
  {
    id: 'theme',
    label: theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    hint: 'Toggle theme',
    icon: SunMoon,
    run: () => toggleTheme(),
  },
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return commands.value
  return commands.value.filter(
    (cmd) => cmd.label.toLowerCase().includes(q) || cmd.hint?.toLowerCase().includes(q),
  )
})

watch(filtered, () => {
  activeIndex.value = 0
})

function openPalette() {
  query.value = ''
  activeIndex.value = 0
  dialog.value?.showModal()
  nextTick(() => input.value?.focus())
}

function closePalette() {
  dialog.value?.close()
}

function select(cmd) {
  if (!cmd) return
  closePalette()
  cmd.run()
}

function onKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % filtered.value.length
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value = (activeIndex.value - 1 + filtered.value.length) % filtered.value.length
  } else if (event.key === 'Enter') {
    event.preventDefault()
    select(filtered.value[activeIndex.value])
  }
}

function onGlobalKeydown(event) {
  const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'
  if (isShortcut) {
    event.preventDefault()
    openPalette()
  }
}

function onBackdropClick(event) {
  if (event.target === dialog.value) closePalette()
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <button
    class="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-line/10 bg-panel/80 px-4 py-2.5 text-xs text-subtle shadow-lg backdrop-blur-md transition hover:border-accent-pink/40 hover:text-heading sm:flex"
    aria-label="Open quick search"
    @click="openPalette"
  >
    <Search :size="14" />
    Quick search
    <kbd class="rounded border border-line/15 bg-chip/5 px-1.5 py-0.5 font-sans text-[10px]">⌘K</kbd>
  </button>

  <dialog
    ref="dialog"
    class="w-full max-w-xl rounded-2xl border border-line/10 bg-panel p-0 text-body backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    @click="onBackdropClick"
  >
    <div class="flex items-center gap-3 border-b border-line/10 px-5 py-4">
      <Search :size="18" class="shrink-0 text-subtle" />
      <input
        ref="input"
        v-model="query"
        type="text"
        placeholder="Jump to a section, or do something…"
        class="w-full bg-transparent text-sm text-heading placeholder:text-subtle focus:outline-none"
        @keydown="onKeydown"
      />
      <kbd class="shrink-0 rounded border border-line/15 px-1.5 py-0.5 text-[10px] text-subtle">esc</kbd>
    </div>

    <ul class="max-h-80 overflow-y-auto p-2">
      <li v-if="filtered.length === 0" class="px-3 py-6 text-center text-sm text-subtle">No matches</li>
      <li v-for="(cmd, index) in filtered" :key="cmd.id">
        <button
          type="button"
          class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition"
          :class="index === activeIndex ? 'bg-accent-pink/10 text-heading' : 'text-body hover:bg-chip/5'"
          @mouseenter="activeIndex = index"
          @click="select(cmd)"
        >
          <component :is="cmd.icon" :size="16" class="shrink-0 text-accent-pink" />
          <span class="flex-1">{{ cmd.label }}</span>
          <span class="text-xs text-subtle">{{ cmd.hint }}</span>
        </button>
      </li>
    </ul>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 10vh auto auto;
}
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
</style>
