import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'writing')
const OUT_PATH = path.join(ROOT, 'public', 'sitemap.xml')

const SITE = 'https://jg.dev'

const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))

const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const lastmod = data.updated || data.date
    return { slug, lastmod: new Date(lastmod).toISOString().split('T')[0] }
})

const today = new Date().toISOString().split('T')[0]
const latestPost = posts.sort((a, b) => b.lastmod.localeCompare(a.lastmod))[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE}/writing</loc>
    <lastmod>${latestPost?.lastmod || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${posts
    .map(
        (p) => `  <url>
    <loc>${SITE}/writing/${p.slug}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n')}
</urlset>`

fs.writeFileSync(OUT_PATH, xml)
console.log(`Sitemap written to public/sitemap.xml (${posts.length} posts)`)
