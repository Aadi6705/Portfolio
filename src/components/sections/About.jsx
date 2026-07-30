// src/components/sections/About.jsx — Phase 1 shell (filled in Phase 3)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-paper"
    >
      <div className="content-container">
        <SectionHeading id="about-heading">About</SectionHeading>
        <p className="font-sans text-body text-slate">About section — built in Phase 3.</p>
      </div>
    </section>
  )
}
