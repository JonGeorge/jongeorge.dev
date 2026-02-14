import Link from 'next/link'
import { getAllPosts } from '@/lib/writing'
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Writing — Jon George",
  description: "Writing about the stuff that matters when you're building software: security, architecture, and making good decisions under constraints.",
}

export default function WritingIndex() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2">
        Writing
      </h1>
      <p className="text-[var(--color-text-muted)] mb-5">
        Thinking out loud about building software, architecture decisions, security, developer tools, and lessons learned.
      </p>

      <div>
        {posts.map((post, i) => {
          const date = post.frontmatter.updated ? new Date(post.frontmatter.updated).toLocaleDateString(
            'en-US',
            { year: 'numeric', month: 'short', day: 'numeric' }
          ) :
              new Date(post.frontmatter.date).toLocaleDateString(
            'en-US',
            { year: 'numeric', month: 'short', day: 'numeric' }
          )

          return (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className={`group block py-5 transition-colors duration-200 ${i < posts.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}
            >
              <h2 className="font-serif text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                {post.frontmatter.title}
              </h2>
              {post.frontmatter.description && (
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  {post.frontmatter.description}
                </p>
              )}
              <span className="font-mono text-xs text-[var(--color-text-muted)] mt-1.5 block">
                {date}
                {post.frontmatter.category && (
                  <> &middot; {post.frontmatter.category}</>
                )}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
