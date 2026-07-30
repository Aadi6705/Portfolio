// src/hooks/useScrollReveal.js
// Wrapper around ScrollReveal, gated behind prefers-reduced-motion (Design.md §8)
import { useEffect } from 'react'

/**
 * useScrollReveal(targets, options)
 *
 * @param {string | string[]} targets  - CSS selector(s) to reveal
 * @param {object}            options  - ScrollReveal config overrides
 *
 * Usage: call inside a section component's useEffect, or via this hook.
 */
export function useScrollReveal(targets, options = {}) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return

    let sr
    ;(async () => {
      const ScrollReveal = (await import('scrollreveal')).default
      sr = ScrollReveal()

      const defaultOptions = {
        distance: '8px',
        duration: 300,
        easing: 'ease-out',
        origin: 'bottom',
        opacity: 0,
        reset: false,
        ...options,
      }

      const selectors = Array.isArray(targets) ? targets : [targets]
      selectors.forEach((selector) => sr.reveal(selector, defaultOptions))
    })()

    return () => {
      if (sr) sr.destroy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
