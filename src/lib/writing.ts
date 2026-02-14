import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/writing')

export interface PostFrontmatter {
  title: string
  date: string
  updated?: string
  author: string
  featuredImage?: string
  featuredImageAlt?: string
  description?: string
  category?: string
  tags?: string[]
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.updated || b.frontmatter.date).getTime() -
        new Date(a.frontmatter.updated || a.frontmatter.date).getTime()
    )
}

export function getAdjacentPosts(slug: string): {
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
} {
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }

  const newer = index > 0 ? posts[index - 1] : null
  const older = index < posts.length - 1 ? posts[index + 1] : null

  return {
    prev: older ? { slug: older.slug, title: older.frontmatter.title } : null,
    next: newer ? { slug: newer.slug, title: newer.frontmatter.title } : null,
  }
}
