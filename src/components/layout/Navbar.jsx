// src/components/layout/Navbar.jsx
// Phase 1: sticky nav, hamburger under 768px, resume download, anchor links
// Design.md: Navy background, Paper text, Brass active/hover accent
// FR-2, FR-3, FR-11

import { useState, useEffect } from 'react'
import { profile } from '../../data/content.js'
import Button from '../ui/Button.jsx'

const NAV_LINKS = [
  { label: 'About',          href: '#about'          },
  { label: 'Education',      href: '#education'      },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('')
  const [scrolled, setScrolled]   = useState(false)

  // Detect scroll to add a subtle border-bottom at scroll > 0
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection Observer — highlight active section in nav
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-[150ms] ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(107,116,128,0.25)]' : ''
      }`}
      role="banner"
    >
      <div className="content-container">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Primary navigation"
        >
          {/* ── Wordmark / logo ─────────────────────────────── */}
          <a
            href="#hero"
            className="font-serif text-[20px] font-semibold text-paper tracking-tight hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
            aria-label="Aditya Srivastava — back to top"
          >
            Aditya Srivastava
          </a>

          {/* ── Desktop nav links ───────────────────────────── */}
          <ul
            className="hidden md:flex items-center gap-8 list-none"
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1) // strip '#'
              const isActive = activeId === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`font-sans text-small font-medium transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 ${
                      isActive
                        ? 'text-brass'
                        : 'text-paper/80 hover:text-brass'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ── Desktop resume button ────────────────────────── */}
          <div className="hidden md:flex items-center">
            <Button
              href={profile.resumeUrl}
              download
              variant="secondary"
              className="text-paper border-paper/50 hover:bg-paper hover:text-navy hover:border-paper text-[13px] px-4 py-2"
            >
              <i className="ri-download-line text-[15px]" aria-hidden="true" />
              Resume
            </Button>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────── */}
          <button
            id="hamburger-btn"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 rounded"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {/* Three-bar → X animation */}
            <span
              className={`block w-5 h-[1.5px] bg-paper transition-all duration-[200ms] origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-paper transition-all duration-[200ms] ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-paper transition-all duration-[200ms] origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      {/* ── Mobile menu panel ─────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden bg-navy border-t border-slate/20 overflow-hidden transition-all duration-[200ms] ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="content-container py-4 flex flex-col gap-1 list-none" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = activeId === id
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className={`block py-3 px-2 font-sans text-[15px] font-medium border-b border-slate/10 transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 ${
                    isActive ? 'text-brass' : 'text-paper/80 hover:text-brass'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
          {/* Resume download in mobile menu */}
          <li className="pt-3">
            <a
              href={profile.resumeUrl}
              download
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-paper/70 hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
            >
              <i className="ri-download-line" aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
