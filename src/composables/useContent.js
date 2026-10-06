import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import * as data from '../data/portfolio'

// Merges the language-neutral data in data/portfolio.js with the active
// locale's text. t()/tm() read the locale ref, so every computed updates on switch.
export function useContent() {
  const { t, te, tm, rt } = useI18n()
  const list = (key) => tm(key).map((message) => rt(message))

  const stats = computed(() => {
    return data.stats.map(({ id }) => ({ id, label: t(`stats.${id}.label`), value: t(`stats.${id}.value`) }))
  })

  const services = computed(() => {
    return data.services.map(({ id }) => ({
      id,
      title: t(`services.${id}.title`),
      summary: t(`services.${id}.summary`),
      detail: t(`services.${id}.detail`),
      points: list(`services.${id}.points`),
    }))
  })

  const skills = computed(() => {
    return data.skills.map((group) => ({ ...group, label: t(`skills.groups.${group.id}`) }))
  })

  const projects = computed(() => {
    return data.projects.map((project) => {
      const key = `projects.descriptions.${project.id}`
      return { ...project, description: te(key) ? t(key) : undefined }
    })
  })

  const experience = computed(() => {
    return data.experience.map((job) => ({
      ...job,
      date: t(`experience.${job.id}.date`),
      highlight: t(`experience.${job.id}.highlight`),
      points: list(`experience.${job.id}.points`),
    }))
  })

  const education = computed(() => {
    return data.education.map((school) => ({
      ...school,
      major: t(`education.${school.id}.major`),
      note: t(`education.${school.id}.note`),
      points: list(`education.${school.id}.points`),
    }))
  })

  const navLinks = computed(() => {
    return data.navLinks.map(({ id }) => ({ id, name: t(`nav.${id}`) }))
  })

  return { stats, services, skills, projects, experience, education, navLinks }
}
