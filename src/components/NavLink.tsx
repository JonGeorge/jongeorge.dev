interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

export function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-3 font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
        isActive
          ? 'text-[var(--color-text-primary)]'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
      }`}
    >
      <span
        className={`block h-px transition-all duration-200 ${
          isActive
            ? 'w-16 bg-[var(--color-text-primary)]'
            : 'w-8 bg-[var(--color-text-muted)] group-hover:w-16 group-hover:bg-[var(--color-text-primary)]'
        }`}
      />
      {children}
    </a>
  )
}
