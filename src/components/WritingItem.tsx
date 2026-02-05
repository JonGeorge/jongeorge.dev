interface WritingItemProps {
  title: string
  year: string
  href: string
}

export function WritingItem({ title, year, href }: WritingItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-4 py-3 border-b border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)]"
    >
      <span className="font-sans text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </span>
      <span className="font-sans text-sm text-[var(--color-text-muted)] shrink-0">
        {year}
      </span>
    </a>
  )
}
