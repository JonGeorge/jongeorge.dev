import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  isActive: boolean
  children: ReactNode
}

export function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-3 font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
        isActive
          ? 'text-(--color-text-primary)'
          : 'text-(--color-text-muted) hover:text-(--color-text-primary)'
      }`}
    >
      <span
        className={`block h-px transition-all duration-200 ${
          isActive
            ? 'w-16 bg-(--color-text-primary)'
            : 'w-8 bg-(--color-text-muted) group-hover:w-16 group-hover:bg-(--color-text-primary)'
        }`}
      />
      {children}
    </a>
  )
}
