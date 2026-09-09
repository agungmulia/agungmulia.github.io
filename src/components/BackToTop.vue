<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUp } from '@lucide/vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > window.innerHeight * 0.6
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-90"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-90"
  >
    <button
      v-if="visible"
      class="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line/10 bg-panel/80 text-subtle shadow-lg backdrop-blur-md transition-colors hover:border-accent-pink/40 hover:text-heading"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <ArrowUp :size="18" />
    </button>
  </Transition>
</template>
