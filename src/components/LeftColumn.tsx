'use client'

import { NavLink } from '@/components/NavLink'
import { SocialIcons } from '@/components/SocialIcons'
import { ThemeToggle } from '@/components/ThemeToggle'

interface LeftColumnProps {
  activeSection: string
  photo?: React.ReactNode
}

const NAV_ITEMS = [
  { id: 'now', label: 'Now' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
] as const

export function LeftColumn({ activeSection, photo }: LeftColumnProps) {
  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-[45%] lg:w-[40%] md:flex md:flex-col md:justify-between md:py-24 px-6 pt-16 pb-8 md:px-0">
      <div>
        {photo && (
          <div className="mb-8">
            {photo}
          </div>
        )}

        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
          Jon George
        </h1>

        <p className="font-sans text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
          Technical leader. Building{' '}
          <a
            href="https://softwaredb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            SoftwareDB
          </a>
          .
        </p>

        <nav className="hidden md:flex flex-col gap-4" aria-label="In-page navigation">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              isActive={activeSection === item.id}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <SocialIcons />
        <ThemeToggle className="ml-auto md:ml-4" />
      </div>
    </aside>
  )
}
