// src/components/sections/Projects.jsx — Phase 1 shell (filled in Phase 5)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding bg-paper border-t border-slate/10"
    >
      <div className="content-container">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <p className="font-sans text-body text-slate">Project ledger cards — built in Phase 5.</p>
      </div>
    </section>
  )
}
