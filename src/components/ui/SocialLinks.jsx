// src/components/ui/SocialLinks.jsx
// Renders social icon links from content.js socials array
// Placeholder links are marked muted and non-interactive (Rules.md §3, §6)
import { socials } from '../../data/content.js'

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-4 list-none ${className}`} aria-label="Social links">
      {socials.map((link) => (
        <li key={link.id}>
          {link.placeholder ? (
            <span
              className="inline-flex items-center justify-center w-9 h-9 text-slate opacity-50 cursor-not-allowed"
              title={`${link.label} — link coming soon`}
              aria-label={`${link.label} (not yet available)`}
              data-placeholder="true"
            >
              <i className={`${link.icon} text-xl`} aria-hidden="true" />
            </span>
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 text-slate hover:text-brass transition-colors duration-[150ms]"
              aria-label={link.label}
            >
              <i className={`${link.icon} text-xl`} aria-hidden="true" />
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}
