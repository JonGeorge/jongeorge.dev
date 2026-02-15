import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/writing'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()

    const writingPages = posts.map((post) => ({
        url: `https://jg.dev/writing/${post.slug}`,
        lastModified: post.frontmatter.updated || post.frontmatter.date,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: 'https://jg.dev',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://jg.dev/writing',
            lastModified: posts[0]?.frontmatter.updated || posts[0]?.frontmatter.date,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...writingPages,
    ]
}
