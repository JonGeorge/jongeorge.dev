import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

interface ProjectCardProps {
  title: string
  description: string
  href?: string
  image?: StaticImageData | string
  tags?: string[]
  featured?: boolean
}

export function ProjectCard({ title, description, href, image, tags, featured }: ProjectCardProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href
    ? { href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={clsx(
        'group block rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-surface)]',
        href && 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--color-accent)]',
        featured && 'md:col-span-2'
      )}
    >
      {image && (
        <div className="overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={800}
            height={450}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
          {href && (
            <span className="inline-block ml-1.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              &#x2197;
            </span>
          )}
        </h3>
        <p className="text-[var(--color-text-muted)] mb-3 leading-relaxed">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-sans px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
}
