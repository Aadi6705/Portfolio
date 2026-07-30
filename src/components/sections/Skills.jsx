// src/components/sections/Skills.jsx — Phase 1 shell (filled in Phase 4)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding bg-paper border-t border-slate/10"
    >
      <div className="content-container">
        <SectionHeading id="skills-heading">Skills</SectionHeading>
        <p className="font-sans text-body text-slate">Grouped skill categories — built in Phase 4.</p>
      </div>
    </section>
  )
}
