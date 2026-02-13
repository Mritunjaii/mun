'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { blogAPI } from '@/lib/api'
import type { Blog } from '@/lib/types'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar } from 'lucide-react'

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true)
            const response = await blogAPI.getAllBlogs()

            if (response.success && response.data) {
                setBlogs(response.data)
            } else {
                setError(response.error?.message || 'Failed to load blogs')
            }

            setLoading(false)
        }

        fetchBlogs()
    }, [])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.slice(0, maxLength) + '...'
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Page Header */}
            <section className="bg-card py-16 md:py-24 border-b-4 border-primary">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
                        MUN Chronicles
                    </h1>
                    <p className="font-serif text-lg text-muted-foreground">
                        Latest updates and insights from SYGNET MUN
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-5xl mx-auto px-6">
                    {loading && (
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="border-l-4 border-accent bg-card p-6 animate-pulse">
                                    <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                                    <div className="h-4 bg-muted rounded mb-2"></div>
                                    <div className="h-4 bg-muted rounded w-5/6 mb-4"></div>
                                    <div className="h-4 bg-muted rounded w-1/3"></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 rounded-lg inline-block">
                                {error}
                            </div>
                        </div>
                    )}

                    {!loading && !error && blogs.length === 0 && (
                        <div className="bg-card border-2 border-foreground p-12 text-center">
                            <h2 className="font-serif text-3xl font-bold text-primary mb-3">
                                No Blogs Yet
                            </h2>
                            <p className="font-serif text-lg text-muted-foreground">
                                Check back soon for updates and insights from SYGNET MUN.
                            </p>
                        </div>
                    )}

                    {!loading && !error && blogs.length > 0 && (
                        <div className="space-y-6">
                            {blogs.map((blog, idx) => (
                                <Link key={blog._id} href={`/blogs/${blog._id}`}>
                                    <article
                                        className="border-l-4 border-accent bg-card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                                    {blog.title}
                                                </h2>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                                    <Calendar className="w-4 h-4" />
                                                    <time dateTime={blog.createdAt}>
                                                        {formatDate(blog.createdAt)}
                                                    </time>
                                                </div>
                                            </div>

                                            <p className="font-serif text-base md:text-lg text-foreground leading-relaxed">
                                                {blog.description}
                                            </p>

                                            {blog.imageURL && (
                                                <div className="mt-2">
                                                    <img
                                                        src={blog.imageURL}
                                                        alt={blog.title}
                                                        className="w-full max-w-2xl h-auto object-cover border-2 border-foreground"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Divider at bottom */}
                    {!loading && !error && blogs.length > 0 && (
                        <div className="mt-16 pt-16 border-t-2 border-foreground">
                            <div className="bg-card border-2 border-foreground p-8 text-center">
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Stay Updated
                                </h3>
                                <p className="font-serif text-lg text-foreground">
                                    More updates coming soon. Follow SYGNET MUN for the latest news and announcements.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
