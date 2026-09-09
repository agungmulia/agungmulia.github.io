<script setup>
import { Download, ExternalLink } from '@lucide/vue'
import { profile } from '../data/portfolio'
import { useCvPreview } from '../composables/useCvPreview'
import Modal from './Modal.vue'

const { isOpen, close } = useCvPreview()
</script>

<template>
  <Modal :open="isOpen" panel-class="max-w-2xl" @close="close">
    <h3 class="pr-8 font-display text-xl font-semibold text-heading">Resume Preview</h3>
    <div class="mt-4 overflow-hidden rounded-xl border border-line/10 bg-ink">
      <iframe :src="profile.cvUrl" title="CV preview" class="h-[65vh] w-full"></iframe>
    </div>
    <div class="mt-4 flex flex-wrap gap-3">
      <a
        :href="profile.cvUrl"
        download
        class="flex items-center gap-2 rounded-full bg-accent-pink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-500"
      >
        <Download :size="16" />
        Download
      </a>
      <a
        :href="profile.cvUrl"
        target="_blank"
        rel="noopener"
        class="flex items-center gap-2 rounded-full border border-line/15 px-5 py-2.5 text-sm font-medium text-heading transition hover:border-line/40"
      >
        <ExternalLink :size="16" />
        Open in new tab
      </a>
    </div>
  </Modal>
</template>
