import Link from 'next/link'

interface WritingItemProps {
  title: string
  date: string
  href: string
}

export function WritingItem({ title, date, href }: WritingItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-baseline justify-between gap-4 py-3 border-b border-[var(--color-border)] transition-colors"
    >
      <span className="font-sans text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </span>
      <span className="font-sans text-sm text-[var(--color-text-muted)] shrink-0">
        {date}
      </span>
    </Link>
  )
}
