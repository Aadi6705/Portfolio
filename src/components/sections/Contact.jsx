// src/components/sections/Contact.jsx — Phase 1 shell (filled in Phase 7)
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-paper border-t border-slate/10"
    >
      <div className="content-container">
        <SectionHeading id="contact-heading">Contact</SectionHeading>
        <p className="font-sans text-body text-slate">Contact form and links — built in Phase 7.</p>
      </div>
    </section>
  )
}
