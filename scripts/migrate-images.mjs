#!/usr/bin/env node

import { readdir, readFile, writeFile, mkdir, rename, stat } from 'fs/promises'
import { join, extname } from 'path'

const CONTENT_DIR = 'src/content/writing'
const PUBLIC_DIR = 'public/images/writing'

const ALIAS_MAP = {
  'secure-software-development-using-zero-trust': 'zero-trust-in-code',
}

async function main() {
  const slugs = await readdir(CONTENT_DIR)
  const validSlugs = new Set()

  // Collect all valid slugs
  for (const slug of slugs) {
    const slugPath = join(CONTENT_DIR, slug)
    const s = await stat(slugPath)
    if (s.isDirectory()) validSlugs.add(slug)
  }

  let movedCount = 0
  let rewrittenCount = 0

  for (const slug of validSlugs) {
    const slugDir = join(CONTENT_DIR, slug)
    const files = await readdir(slugDir)

    const mdFile = files.find((f) => f.endsWith('.md'))
    const imageFiles = files.filter((f) => !f.endsWith('.md'))

    // 1. Move non-.md files to public/images/writing/[slug]/
    if (imageFiles.length > 0) {
      const destDir = join(PUBLIC_DIR, slug)
      await mkdir(destDir, { recursive: true })

      for (const img of imageFiles) {
        const src = join(slugDir, img)
        const dest = join(destDir, img)
        await rename(src, dest)
        movedCount++
        console.log(`  Moved: ${src} → ${dest}`)
      }
    }

    // 2-4. Rewrite markdown content
    if (mdFile) {
      const mdPath = join(slugDir, mdFile)
      let content = await readFile(mdPath, 'utf-8')
      const original = content

      // 2. Rewrite featuredImage frontmatter
      content = content.replace(
        /^(featuredImage:\s*"?)([^"\n/][^"\n]*?)("?)$/m,
        (match, pre, filename, post) => {
          if (filename.startsWith('/') || filename.startsWith('http')) return match
          return `${pre}/images/writing/${slug}/${filename}${post}`
        }
      )

      // 3. Rewrite inline ![](filename) — only bare filenames, not URLs or absolute paths
      content = content.replace(
        /!\[([^\]]*)\]\(([^)\s]+)\)/g,
        (match, alt, src) => {
          if (src.startsWith('/') || src.startsWith('http') || src.startsWith('#')) return match
          return `![${alt}](/images/writing/${slug}/${src})`
        }
      )

      // 4. Rewrite internal links ](/some-slug/) to ](/writing/some-slug)
      content = content.replace(
        /\]\(\/([a-z0-9-]+)\/?(\))/g,
        (match, linkSlug, close) => {
          const resolvedSlug = ALIAS_MAP[linkSlug] || linkSlug
          if (validSlugs.has(resolvedSlug)) {
            return `](/writing/${resolvedSlug})`
          }
          return match
        }
      )

      if (content !== original) {
        await writeFile(mdPath, content, 'utf-8')
        rewrittenCount++
        console.log(`  Rewrote: ${mdPath}`)
      }
    }
  }

  // 5. Verify no non-.md files remain
  let remaining = 0
  for (const slug of validSlugs) {
    const slugDir = join(CONTENT_DIR, slug)
    const files = await readdir(slugDir)
    const nonMd = files.filter((f) => !f.endsWith('.md'))
    if (nonMd.length > 0) {
      console.warn(`  WARNING: Non-.md files remain in ${slugDir}: ${nonMd.join(', ')}`)
      remaining += nonMd.length
    }
  }

  console.log('\n--- Summary ---')
  console.log(`Images moved: ${movedCount}`)
  console.log(`Markdown files rewritten: ${rewrittenCount}`)
  console.log(`Remaining non-.md files: ${remaining}`)
}

main().catch(console.error)
