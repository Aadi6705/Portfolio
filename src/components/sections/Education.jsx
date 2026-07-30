// src/components/sections/Education.jsx — Phase 1 shell (filled in Phase 3)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-padding bg-paper border-t border-slate/10"
    >
      <div className="content-container">
        <SectionHeading id="education-heading">Education</SectionHeading>
        <p className="font-sans text-body text-slate">Education timeline — built in Phase 3.</p>
      </div>
    </section>
  )
}
