'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import clsx from 'clsx'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
  first?: boolean
}

export function Section({ id, title, children, className, first }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' })

  return (
    <section
      id={id}
      ref={ref}
      className={clsx(first ? 'pb-16' : 'py-16', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {title && (
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-8">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  )
}
