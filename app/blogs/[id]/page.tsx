'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { blogAPI } from '@/lib/api'
import type { Blog } from '@/lib/types'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BlogDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [blog, setBlog] = useState<Blog | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchBlog = async () => {
            if (!params.id) return

            setLoading(true)
            const response = await blogAPI.getBlogById(params.id as string)

            if (response.success && response.data) {
                setBlog(response.data)
            } else {
                setError(response.error?.message || 'Failed to load blog')
            }

            setLoading(false)
        }

        fetchBlog()
    }, [params.id])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    if (loading) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navigation />
                <section className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="animate-pulse space-y-6">
                            <div className="h-12 bg-muted rounded w-3/4"></div>
                            <div className="h-6 bg-muted rounded w-1/4"></div>
                            <div className="h-64 bg-muted rounded"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-muted rounded"></div>
                                <div className="h-4 bg-muted rounded"></div>
                                <div className="h-4 bg-muted rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    if (error || !blog) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navigation />
                <section className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 rounded-lg inline-block mb-6">
                            {error || 'Blog not found'}
                        </div>
                        <Button onClick={() => router.push('/blogs')} variant="outline">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blogs
                        </Button>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Blog Header */}
            <section className="bg-card py-12 md:py-16 border-b-4 border-primary">
                <div className="max-w-4xl mx-auto px-6">
                    <Button
                        onClick={() => router.push('/blogs')}
                        variant="ghost"
                        className="mb-6 font-serif hover:text-accent"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to All Blogs
                    </Button>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-5 h-5" />
                        <time dateTime={blog.createdAt} className="font-serif text-lg">
                            {formatDate(blog.createdAt)}
                        </time>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="bg-card border-l-4 border-accent p-8">
                        {blog.imageURL && (
                            <div className="mb-8">
                                <img
                                    src={blog.imageURL}
                                    alt={blog.title}
                                    className="w-full h-auto object-cover border-2 border-foreground"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg max-w-none">
                            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-wrap">
                                {blog.description}
                            </p>
                        </div>
                    </article>

                    {/* Bottom Navigation */}
                    <div className="mt-12 pt-8 border-t-2 border-foreground text-center">
                        <Button
                            onClick={() => router.push('/blogs')}
                            size="lg"
                            className="font-serif bg-primary hover:bg-accent"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            View All Blogs
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
