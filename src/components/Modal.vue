<script setup>
import { ref, watch } from 'vue'
import { X } from '@lucide/vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  panelClass: { type: String, default: 'max-w-lg' },
})
const emit = defineEmits(['close'])

const dialog = ref(null)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) dialog.value?.showModal()
    else dialog.value?.close()
  },
)

function onBackdropClick(event) {
  if (event.target === dialog.value) emit('close')
}
</script>

<template>
  <dialog
    ref="dialog"
    class="w-full rounded-2xl border border-line/10 bg-panel p-0 text-body backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    :class="panelClass"
    @click="onBackdropClick"
    @close="emit('close')"
  >
    <div class="relative max-h-[80vh] overflow-y-auto p-8">
      <button
        class="absolute right-6 top-6 text-subtle transition hover:text-heading"
        aria-label="Close"
        @click="emit('close')"
      >
        <X :size="20" />
      </button>
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}
</style>
