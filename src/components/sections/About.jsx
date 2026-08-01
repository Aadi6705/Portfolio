// src/components/sections/About.jsx
// Phase 3: About section presenting a clean, classic professional summary
// All content rendered strictly from content.js (Architecture.md §4)

import SectionHeading from '../ui/SectionHeading.jsx'
import { profile } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function About() {
  useScrollReveal('.about-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container">
        <SectionHeading id="about-heading">About Me</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start about-reveal">
          <div className="lg:col-span-8">
            <p className="font-sans text-body-mob md:text-body text-ink leading-relaxed">
              I am a third-year Computer Science &amp; Business Systems student at SRM Institute of Science and Technology, Chennai, with a strong foundation in software engineering, data science, and artificial intelligence.
            </p>
            <p className="mt-4 font-sans text-body-mob md:text-body text-slate leading-relaxed">
              My technical work spans end-to-end full-stack web application development and machine learning, with a focus on explainability and actionable metrics. I combine core computer science principles with business systems awareness to build reliable, high-performance systems that solve real-world problems cleanly and transparently.
            </p>
          </div>

          {/* Key Facts / Highlights Ledger Card */}
          <div className="lg:col-span-4">
            <div className="ledger-card bg-paper">
              <span className="mono-label">PROFILE · HIGHLIGHTS</span>
              <ul className="mt-4 space-y-3 list-none font-sans text-small text-ink">
                <li className="flex items-center gap-2.5">
                  <i className="ri-map-pin-line text-brass text-base" aria-hidden="true" />
                  <span>{profile.location}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-graduation-cap-line text-brass text-base" aria-hidden="true" />
                  <span>SRM IST — B.Tech CSBS (2027)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-award-line text-brass text-base" aria-hidden="true" />
                  <span>CGPA: 8.14 / 10 (0 Backlogs)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="ri-code-box-line text-brass text-base" aria-hidden="true" />
                  <span>Full-Stack &amp; ML Engineering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
