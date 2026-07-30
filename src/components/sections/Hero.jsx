// src/components/sections/Hero.jsx
// Phase 2: Hero section with Typed.js, photo, and primary CTAs
// Design.md: Classic, professional, 2px Navy frame on photo (no circular crop), restrained motion

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { profile } from '../../data/content.js'
import Button from '../ui/Button.jsx'
import SocialLinks from '../ui/SocialLinks.jsx'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function Hero() {
  const typedElement = useRef(null)

  // Typed.js initialization (gated by prefers-reduced-motion)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      if (typedElement.current) {
        typedElement.current.innerHTML = profile.roles[0]
      }
      return
    }

    const typed = new Typed(typedElement.current, {
      strings: profile.roles,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      cursorChar: '|',
      autoInsertCss: true, // handles blinking cursor CSS
    })

    return () => {
      typed.destroy()
    }
  }, [])

  // Add scroll reveal animations
  useScrollReveal('.hero-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-paper min-h-[calc(100vh-64px)] flex items-center pt-8 pb-20 md:py-24"
    >
      <div className="content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Text Content (Left on desktop) ───────────────────────── */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1 hero-reveal">
            <h1
              id="hero-heading"
              className="font-serif text-h1-mob md:text-display text-ink leading-[1.15]"
            >
              Hi, I'm <span className="text-navy font-semibold">{profile.name}</span>
            </h1>
            
            <div className="mt-3 md:mt-4 h-[32px] md:h-[36px] flex items-center">
              <span
                ref={typedElement}
                className="font-sans text-[20px] md:text-h3 text-brass font-medium"
                aria-label={profile.roles.join(', ')}
              >
                {/* Fallback for noscript / pre-hydration */}
                <noscript>{profile.roles[0]}</noscript>
              </span>
            </div>

            <p className="mt-6 font-sans text-body-mob md:text-body text-slate max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button
                href={profile.resumeUrl}
                download
                variant="secondary"
              >
                <i className="ri-download-line text-[16px]" aria-hidden="true" />
                Download Resume
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-slate/20 w-fit">
              <SocialLinks />
            </div>
          </div>

          {/* ── Photo (Right on desktop) ────────────────────────────── */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end order-1 lg:order-2 hero-reveal">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Decorative offset frame per Design.md "Classic/Editorial" vibe */}
              <div 
                className="absolute inset-0 bg-transparent border-[2px] border-navy translate-x-4 translate-y-4"
                aria-hidden="true"
              />
              <img
                src={profile.photo}
                alt={`${profile.name} — Profile Photo`}
                className="absolute inset-0 w-full h-full object-cover shadow-sm bg-slate/10"
                loading="eager"
                width={320}
                height={320}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
