import { onMounted, onUnmounted } from 'vue'

/**
 * Adds `.in-view` to any element with a `data-reveal` attribute once it
 * scrolls into the viewport. Pair with the `[data-reveal]` CSS in style.css.
 */
export function useReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
