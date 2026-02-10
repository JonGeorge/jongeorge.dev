import { getAllPosts } from '@/lib/writing'
import { HomePage } from '@/components/HomePage'

export default function Home() {
    const featuredPosts: number[] = [0, 3, 9, 10, 11];

    const recentPosts = getAllPosts()
        .filter((_, i) => featuredPosts.includes(i))
        .map((post) => ({
            slug: post.slug,
            title: post.frontmatter.title,
            date: new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
        }))

    return <HomePage recentPosts={recentPosts} />
}
