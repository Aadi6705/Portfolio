// src/components/sections/Hero.jsx — Phase 1 shell (filled in Phase 2)
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-padding bg-paper min-h-[60vh] flex items-center"
    >
      <div className="content-container">
        <h1
          id="hero-heading"
          className="font-serif text-display text-navy leading-[1.15]"
        >
          Aditya Srivastava
        </h1>
        <p className="font-sans text-body text-slate mt-4">
          Hero section — built in Phase 2
        </p>
      </div>
    </section>
  )
}
