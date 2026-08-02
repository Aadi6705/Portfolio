// src/components/ui/Button.jsx
// Design.md — no gradients, no heavy shadows; transitions 150ms
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',  // 'primary' | 'secondary'
  download,
  external,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-sans text-small font-medium rounded-md shadow-xs active:scale-[0.98] transition-all duration-[150ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-navy text-paper border border-navy hover:bg-brass hover:border-brass',
    secondary:
      'bg-transparent text-navy border border-navy hover:bg-navy hover:text-paper',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
