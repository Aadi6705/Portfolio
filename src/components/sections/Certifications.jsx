// src/components/sections/Certifications.jsx
// Phase 6: Certifications Section
// Design.md §4 & Memory.md: Vertical stack of three ledger cards, no carousel.

import SectionHeading from '../ui/SectionHeading.jsx'
import { certifications } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function Certifications() {
  useScrollReveal('.cert-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container">
        <SectionHeading id="certifications-heading">Certifications</SectionHeading>

        <div className="mt-8 md:mt-12 max-w-3xl mx-auto space-y-6 cert-reveal">
          {certifications.map((cert) => (
            <article key={cert.id} className="ledger-card bg-paper group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="mono-label">{cert.tabLabel}</span>
                    <span className="font-mono text-[10px] text-slate/70 bg-slate/5 px-1.5 py-0.5 rounded uppercase border border-slate/10">
                      {cert.platform}
                    </span>
                  </div>
                  <h3 className="font-serif text-h3-mob md:text-h3 text-ink leading-tight mt-2">
                    {cert.program}
                  </h3>
                  <p className="font-sans text-small text-slate mt-1.5">
                    Issued by <span className="font-medium text-ink/90">{cert.issuer}</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate/80 bg-slate/5 px-2 py-1 rounded-sm">
                      <i className="ri-calendar-line text-[13px]" aria-hidden="true" />
                      {cert.year}
                    </span>
                    
                    {cert.credentialId && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate/80 bg-slate/5 px-2 py-1 rounded-sm">
                        <i className="ri-profile-line text-[13px]" aria-hidden="true" />
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>

                {/* External Link Button */}
                <div className="mt-2 sm:mt-0 flex-shrink-0">
                  {!cert.credentialUrlPlaceholder && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 font-mono text-small text-navy bg-navy/5 border border-navy/20 hover:bg-brass hover:border-brass hover:text-navy transition-all duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                      aria-label={`Verify ${cert.program} credential`}
                    >
                      Verify Credential
                      <i className="ri-external-link-line" aria-hidden="true" />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
