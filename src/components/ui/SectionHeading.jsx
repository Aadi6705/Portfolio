// src/components/ui/SectionHeading.jsx
// Reusable section heading with a brass hairline accent
export default function SectionHeading({ id, children }) {
  return (
    <div className="mb-12">
      <h2
        id={id}
        className="font-serif text-h2 text-navy leading-tight"
      >
        {children}
      </h2>
      {/* Brass hairline rule — Design.md §5 */}
      <div className="mt-3 w-12 h-px bg-brass" aria-hidden="true" />
    </div>
  )
}
