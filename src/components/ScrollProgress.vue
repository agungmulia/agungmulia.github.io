<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function onScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-[3px]">
    <div
      class="h-full bg-gradient-to-r from-accent-pink via-accent-violet to-accent-blue"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
