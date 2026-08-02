// src/components/ui/ProjectCard.jsx
// Phase 5: Reusable ProjectCard UI
// Design.md §5: Ledger Cards (hairline top rule, mono label tab, slate borders)
// FR-6: name, one-line description, tech tags, highlight bullets, metrics, GitHub link

export default function ProjectCard({ project }) {
  return (
    <article className="ledger-card flex flex-col h-full group" aria-label={`Project: ${project.name}`}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2">
        <span className="mono-label">{project.tabLabel}</span>
        <div className="flex items-start justify-between gap-4 mt-2">
          <h3 className="font-serif text-h3 text-ink leading-tight">{project.name}</h3>
          
          {/* External Links */}
          <div className="flex items-center gap-3 mt-1">
            {project.githubPlaceholder ? (
              <span
                className="text-slate opacity-50 cursor-not-allowed inline-flex items-center"
                title="GitHub repository coming soon"
              >
                <i className="ri-github-line text-xl" aria-hidden="true" />
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-brass transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                aria-label={`View ${project.name} repository on GitHub`}
              >
                <i className="ri-github-line text-xl" aria-hidden="true" />
              </a>
            )}
            
            {project.liveUrl && !project.livePlaceholder && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-brass transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2"
                aria-label={`View live demo of ${project.name}`}
              >
                <i className="ri-external-link-line text-[22px]" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Summary & Stack Tags ──────────────────────────────── */}
      <div className="mt-4">
        <p className="font-sans text-body text-slate leading-relaxed">
          {project.summary}
        </p>
        <ul className="flex flex-wrap gap-2 mt-5 list-none" aria-label={`Technologies used in ${project.name}`}>
          {project.stack.map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center px-3 py-1 font-mono text-[12px] text-navy bg-navy/5 border border-navy/15 rounded-full font-medium">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Visual (Screenshot / Placeholder) ─────────────────── */}
      <div className="mt-8 relative w-full aspect-[16/9] border border-slate/20 bg-slate/5 rounded-xl flex items-center justify-center overflow-hidden shadow-inner group-hover:border-brass/40 transition-colors duration-300">
        {project.hasImage ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover p-2 rounded-xl group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate/60 p-4 text-center">
            <i className="ri-image-line text-3xl" aria-hidden="true" />
            <p className="font-mono text-caption uppercase tracking-widest text-slate/80">
              Visual Placeholder
            </p>
            <p className="font-sans text-[11px]">
              Awaiting {project.name} screenshot
            </p>
          </div>
        )}
      </div>

      {/* ── Highlights & Metrics ──────────────────────────────── */}
      <div className="mt-8 flex-1 flex flex-col justify-between">
        <ul className="space-y-2.5 list-none" aria-label={`Highlights of ${project.name}`}>
          {project.highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 font-sans text-small text-slate">
              <i className="ri-checkbox-circle-fill text-brass text-base flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 pt-5 border-t border-slate/15 flex flex-wrap gap-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-h3 text-navy">{metric.value}</span>
                <span className="font-mono text-caption text-slate mt-1 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* View Code CTA Button */}
        {project.githubUrl && !project.githubPlaceholder && (
          <div className="mt-6 pt-4 border-t border-slate/10 flex justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium text-navy bg-navy/5 border border-navy/15 rounded-md hover:bg-navy hover:text-paper hover:border-navy transition-all duration-200"
              aria-label={`View ${project.name} repository on GitHub`}
            >
              <i className="ri-github-fill text-base" aria-hidden="true" />
              View Source Code
              <i className="ri-arrow-right-up-line text-sm" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
