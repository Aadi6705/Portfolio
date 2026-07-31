// src/components/sections/Skills.jsx
// Phase 4: Skills section with ledger-card grouping per category
// Design.md: Clean ledger-card structure, no neon gradients, accessible keyboard order

import SectionHeading from '../ui/SectionHeading.jsx'
import { skills } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

// Mapping categories to distinct Remix Icons for visual readability
const CATEGORY_ICONS = {
  Languages: 'ri-code-s-slash-line',
  'Data & ML': 'ri-line-chart-line',
  Web: 'ri-layout-3-line',
  Tools: 'ri-tools-line',
}

export default function Skills() {
  useScrollReveal('.skills-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container">
        <SectionHeading id="skills-heading">Technical Skills</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 skills-reveal">
          {skills.map((group) => {
            const iconClass = CATEGORY_ICONS[group.category] || 'ri-checkbox-circle-line'
            return (
              <div key={group.category} className="ledger-card bg-paper flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate/15 pb-3 mb-4">
                    <span className="mono-label flex items-center gap-2">
                      <i className={`${iconClass} text-brass text-base`} aria-hidden="true" />
                      {group.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-caption text-slate">
                      {group.items.length} Skills
                    </span>
                  </div>

                  <ul
                    className="flex flex-wrap gap-2.5 list-none"
                    aria-label={`Skills in ${group.category}`}
                  >
                    {group.items.map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex items-center px-3 py-1.5 font-mono text-small text-ink bg-paper border border-slate/25 rounded-xs hover:border-brass hover:text-navy transition-colors duration-150">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
