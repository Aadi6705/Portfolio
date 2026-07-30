// src/components/sections/Projects.jsx
// Phase 5: Projects Section displaying flagship projects using reusable ProjectCard

import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/content.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

export default function Projects() {
  useScrollReveal('.projects-reveal', { distance: '12px', duration: 400 })

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding bg-paper border-t border-slate/15"
    >
      <div className="content-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading id="projects-heading">Selected Projects</SectionHeading>
          
          <a
            href="https://github.com/Aadi6705"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-mono text-small text-navy hover:text-brass transition-colors duration-150 mb-1"
            aria-label="View all my projects on GitHub"
          >
            View GitHub Profile
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </a>
        </div>

        {/* Responsive Grid: 1 column mobile, 2 columns desktop (Design.md §4) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 projects-reveal">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile-only GitHub link */}
        <div className="mt-10 flex justify-center md:hidden projects-reveal">
          <a
            href="https://github.com/Aadi6705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-small text-navy hover:text-brass transition-colors duration-150"
            aria-label="View all my projects on GitHub"
          >
            View GitHub Profile
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
