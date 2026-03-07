'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { blogAPI } from '@/lib/api'
import type { Blog } from '@/lib/types'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, ArrowRight, BookOpen, Newspaper } from 'lucide-react'

/** Strip HTML tags to get plain-text preview */
function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim()
}

function truncateText(text: string, maxLength: number): string {
    const plain = stripHtml(text)
    if (plain.length <= maxLength) return plain
    return plain.slice(0, maxLength) + '…'
}

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

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Page Header */}
            <section className="relative bg-card py-20 md:py-28 border-b-4 border-primary overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 28px,
                            hsl(0 0% 20%) 28px,
                            hsl(0 0% 20%) 29px
                        )`
                    }}
                />
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-accent" />
                        <Newspaper className="w-5 h-5 text-accent" />
                        <div className="h-px w-12 bg-accent" />
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4 tracking-tight">
                        MUN Chronicles
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6" />
                    <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                        Latest updates and insights from SYGNET MUN
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-5xl mx-auto px-6">
                    {loading && (
                        <div className="space-y-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-card border border-border animate-pulse overflow-hidden">
                                    <div className="h-48 bg-muted" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-7 bg-muted rounded w-3/4" />
                                        <div className="h-4 bg-muted rounded w-1/4" />
                                        <div className="h-4 bg-muted rounded" />
                                        <div className="h-4 bg-muted rounded w-5/6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 inline-block">
                                {error}
                            </div>
                        </div>
                    )}

                    {!loading && !error && blogs.length === 0 && (
                        <div className="bg-card border-2 border-foreground p-16 text-center">
                            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h2 className="font-serif text-3xl font-bold text-primary mb-3">
                                No Blogs Yet
                            </h2>
                            <p className="font-serif text-lg text-muted-foreground">
                                Check back soon for updates and insights from SYGNET MUN.
                            </p>
                        </div>
                    )}

                    {!loading && !error && blogs.length > 0 && (
                        <div className="space-y-10">
                            {blogs.map((blog, idx) => (
                                <Link key={blog._id} href={`/blogs/${blog._id}`}>
                                    <article
                                        className="group bg-card border border-border hover:border-accent transition-all duration-300 overflow-hidden hover:shadow-xl cursor-pointer"
                                    >
                                        {/* Featured image */}
                                        {blog.imageURL ? (
                                            <div className="relative overflow-hidden h-56 md:h-72 bg-muted">
                                                <img
                                                    src={blog.imageURL}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            </div>
                                        ) : (
                                            <div className="h-2 bg-primary group-hover:bg-accent transition-colors duration-300" />
                                        )}

                                        <div className="p-6 md:p-8">
                                            {/* Issue number / index badge */}
                                            <div className="flex items-start justify-between mb-4 gap-4">
                                                <div className="flex-1">
                                                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent border border-accent px-2 py-0.5 mb-3">
                                                        Issue #{String(blogs.length - idx).padStart(2, '0')}
                                                    </span>
                                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-200 leading-snug">
                                                        {blog.title}
                                                    </h2>
                                                </div>
                                                <div className="shrink-0 w-10 h-10 border-2 border-primary group-hover:border-accent group-hover:bg-accent transition-all duration-200 flex items-center justify-center mt-1">
                                                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-200" />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                                <Calendar className="w-4 h-4 shrink-0" />
                                                <time dateTime={blog.createdAt}>
                                                    {formatDate(blog.createdAt)}
                                                </time>
                                            </div>

                                            {/* Plain-text preview stripped from HTML */}
                                            <p className="font-serif text-base md:text-lg text-foreground leading-relaxed line-clamp-3 border-t border-border pt-4">
                                                {truncateText(blog.description, 280)}
                                            </p>

                                            <div className="mt-5 flex items-center gap-2 text-accent font-serif text-sm font-semibold">
                                                Read full article
                                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Bottom CTA */}
                    {!loading && !error && blogs.length > 0 && (
                        <div className="mt-20 pt-16 border-t-2 border-foreground">
                            <div className="bg-card border-2 border-foreground p-10 text-center">
                                <div className="w-12 h-1 bg-accent mx-auto mb-5" />
                                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                                    Stay Updated
                                </h3>
                                <p className="font-serif text-lg text-foreground max-w-md mx-auto">
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
