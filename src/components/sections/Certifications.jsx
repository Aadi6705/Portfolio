// src/components/sections/Certifications.jsx — Phase 1 shell (filled in Phase 6)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-padding bg-paper border-t border-slate/10"
    >
      <div className="content-container">
        <SectionHeading id="certifications-heading">Certifications</SectionHeading>
        <p className="font-sans text-body text-slate">Certifications list — built in Phase 6.</p>
      </div>
    </section>
  )
}
