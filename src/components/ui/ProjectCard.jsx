// src/components/ui/ProjectCard.jsx — Phase 0 shell (built in Phase 5)
export default function ProjectCard({ project }) {
  return (
    <article className="ledger-card" aria-label={`Project: ${project?.name}`}>
      {/* Phase 5: full card content */}
      <p className="mono-label">{project?.tabLabel}</p>
      <h3 className="font-serif text-h3 text-ink mt-2">{project?.name}</h3>
    </article>
  )
}
