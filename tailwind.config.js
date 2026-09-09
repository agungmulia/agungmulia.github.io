/** @type {import('tailwindcss').Config} */

// Reads a CSS variable holding "R G B" (space-separated) so Tailwind's
// opacity modifiers (e.g. bg-panel/60) keep working across themes.
function themedColor(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined ? `rgb(var(${variable}))` : `rgb(var(${variable}) / ${opacityValue})`
}

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: themedColor('--color-ink'),
        surface: themedColor('--color-surface'),
        panel: themedColor('--color-panel'),
        heading: themedColor('--color-heading'),
        body: themedColor('--color-body'),
        muted: themedColor('--color-muted'),
        subtle: themedColor('--color-subtle'),
        faint: themedColor('--color-faint'),
        line: themedColor('--color-line'),
        chip: themedColor('--color-chip'),
        accent: {
          violet: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgb(var(--color-ink))), linear-gradient(90deg, rgb(var(--color-line) / 0.06) 1px, transparent 1px), linear-gradient(rgb(var(--color-line) / 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '100% 100%, 42px 42px, 42px 42px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.08)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
