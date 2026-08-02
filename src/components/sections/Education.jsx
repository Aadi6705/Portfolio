// src/components/sections/Education.jsx
// Phase 3: Academic timeline section
// Design.md §5: Hairline timeline with small Brass dots (chronological)

import SectionHeading from '../ui/SectionHeading.jsx'
import { education } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function Education() {
  useScrollReveal('.edu-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container">
        <SectionHeading id="education-heading">Education</SectionHeading>

        <div className="relative max-w-4xl mx-auto mt-8 edu-reveal">
          {/* Vertical timeline hairline guide line */}
          <div
            className="absolute left-[11px] md:left-[15px] top-3 bottom-3 w-px bg-slate/30"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {education.map((item) => (
              <div key={item.id} className="relative flex items-start gap-6 md:gap-8 group">
                {/* Brass timeline dot marker */}
                <div
                  className="relative z-10 flex-shrink-0 w-[23px] h-[23px] md:w-[31px] md:h-[31px] rounded-full bg-paper border-2 border-brass flex items-center justify-center mt-1"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-brass" />
                </div>

                {/* Content ledger-card container */}
                <div className="flex-1 ledger-card bg-paper">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate/15 pb-3">
                    <div>
                      <span className="mono-label">{item.duration}</span>
                      <h3 className="font-serif text-h3-mob md:text-h3 text-ink mt-0.5 font-semibold">
                        {item.institution}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.arrears && (
                        <span className="inline-flex items-center gap-1 text-[12px] font-mono uppercase px-2.5 py-0.5 rounded bg-success/10 text-success font-medium border border-success/20">
                          <i className="ri-checkbox-circle-line text-xs" aria-hidden="true" />
                          {item.arrears}
                        </span>
                      )}
                      <span className="font-mono text-small md:text-body text-brass font-medium bg-brass/10 px-3 py-1 rounded border border-brass/20">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-small text-slate font-sans">
                    <p className="font-medium text-ink/90">{item.degree}</p>
                    <div className="flex items-center gap-3 text-caption font-mono">
                      {item.secondaryScore && <span>{item.secondaryScore}</span>}
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {item.semesters && item.semesters.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate/10">
                      <p className="font-mono text-[11px] text-slate uppercase tracking-wider mb-2">
                        Semester GPA Breakdown
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                        {item.semesters.map((s) => (
                          <div
                            key={s.sem}
                            className="flex flex-col items-center justify-center p-2 rounded bg-navy/5 border border-navy/10 hover:border-brass/30 transition-colors"
                          >
                            <span className="font-mono text-[11px] text-slate">{s.sem}</span>
                            <span className="font-mono text-small font-semibold text-navy mt-0.5">{s.gpa}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
