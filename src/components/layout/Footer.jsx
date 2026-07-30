// src/components/layout/Footer.jsx
// Phase 1: quick links, copyright, back-to-top, social icons
// Design.md: Deep Navy background, Slate secondary text, Brass hover accent

import { profile } from '../../data/content.js'
import SocialLinks from '../ui/SocialLinks.jsx'

const FOOTER_LINKS = [
  { label: 'About',          href: '#about'          },
  { label: 'Education',      href: '#education'      },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
]

export default function Footer() {
  return (
    <footer className="bg-deep-navy" role="contentinfo">
      {/* ── Top divider hairline ──────────────────────────────── */}
      <div className="border-t border-slate/20" />

      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* ── Col 1: Wordmark + tagline ────────────────────── */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-[20px] font-semibold text-paper tracking-tight">
              Aditya Srivastava
            </span>
            <p className="font-sans text-small text-slate leading-relaxed">
              B.Tech Computer Science &amp; Business Systems
              <br />SRM Institute of Science and Technology
            </p>
            <div className="mt-2">
              <SocialLinks />
            </div>
          </div>

          {/* ── Col 2: Quick links ───────────────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="mono-label text-[11px]">Navigation</p>
            <ul className="flex flex-col gap-2 list-none" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-small text-slate hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact quick-links ──────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="mono-label text-[11px]">Contact</p>
            <ul className="flex flex-col gap-2 list-none" role="list">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 font-sans text-small text-slate hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                >
                  <i className="ri-mail-line text-[15px]" aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 font-sans text-small text-slate hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                >
                  <i className="ri-download-line text-[15px]" aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar: copyright + back-to-top ─────────────── */}
        <div className="mt-10 pt-6 border-t border-slate/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-caption text-slate">
            &copy; {new Date().getFullYear()} Aditya Srivastava. All rights reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 font-mono text-caption uppercase tracking-widest text-slate hover:text-brass transition-colors duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
            aria-label="Back to top"
          >
            Back to top
            <i className="ri-arrow-up-line text-[14px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
