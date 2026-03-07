'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { blogAPI } from '@/lib/api'
import type { Blog } from '@/lib/types'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Calendar, ArrowLeft, Clock, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'

/** Rough reading-time estimate */
function readingTime(html: string): number {
    const words = html.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
}

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
                            <div className="h-6 bg-muted rounded w-1/4" />
                            <div className="h-12 bg-muted rounded w-3/4" />
                            <div className="h-5 bg-muted rounded w-1/3" />
                            <div className="h-72 bg-muted rounded" />
                            <div className="space-y-3 pt-4">
                                <div className="h-4 bg-muted rounded" />
                                <div className="h-4 bg-muted rounded" />
                                <div className="h-4 bg-muted rounded w-5/6" />
                                <div className="h-4 bg-muted rounded w-4/6" />
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
                        <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 inline-block mb-6">
                            {error || 'Blog not found'}
                        </div>
                        <br />
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

    const minRead = readingTime(blog.description)

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero / Header */}
            <section className="relative bg-card border-b-4 border-primary overflow-hidden">
                {/* Horizontal rule decoration */}
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

                {/* Featured image — full bleed with overlay */}
                {blog.imageURL && (
                    <div className="relative w-full h-64 md:h-96 overflow-hidden">
                        <img
                            src={blog.imageURL}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-card" />
                    </div>
                )}

                <div className={`max-w-4xl mx-auto px-6 relative ${blog.imageURL ? 'pb-10 -mt-6' : 'py-16 md:py-24'}`}>
                    {/* Back button */}
                    <Button
                        onClick={() => router.push('/blogs')}
                        variant="ghost"
                        className="mb-6 font-serif hover:text-accent pl-0"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to All Blogs
                    </Button>

                    {/* Label */}
                    <div className="flex items-center gap-2 mb-4">
                        <Newspaper className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent px-2 py-0.5">
                            SYGNET MUN
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 shrink-0" />
                            <time dateTime={blog.createdAt} className="font-serif text-sm">
                                {formatDate(blog.createdAt)}
                            </time>
                        </div>
                        <div className="w-px h-4 bg-border hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 shrink-0" />
                            <span className="font-serif text-sm">{minRead} min read</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Body */}
            <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <article className="bg-card border-l-4 border-accent p-8 md:p-12">
                        {/* Render HTML description */}
                        <div
                            className="
                                blog-content
                                font-serif
                                text-base md:text-lg
                                text-foreground
                                leading-relaxed
                                [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-primary [&_h1]:mt-8 [&_h1]:mb-4
                                [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-3
                                [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-2
                                [&_p]:mb-5 [&_p]:leading-relaxed
                                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-1
                                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-1
                                [&_li]:leading-relaxed
                                [&_strong]:font-bold [&_strong]:text-primary
                                [&_em]:italic
                                [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary
                                [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6
                                [&_hr]:border-border [&_hr]:my-8
                                [&_img]:max-w-full [&_img]:h-auto [&_img]:my-6 [&_img]:border-2 [&_img]:border-foreground
                                [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:my-6
                                [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono
                                [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
                                [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold
                                [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2
                            "
                            dangerouslySetInnerHTML={{ __html: blog.description }}
                        />
                    </article>

                    {/* Bottom navigation */}
                    <div className="mt-12 pt-8 border-t-2 border-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Button
                            onClick={() => router.push('/blogs')}
                            variant="outline"
                            className="font-serif border-2 border-foreground hover:border-accent hover:text-accent transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to All Blogs
                        </Button>

                        <div className="flex items-center gap-2 text-muted-foreground font-serif text-sm">
                            <Newspaper className="w-4 h-4" />
                            SYGNET MUN — {formatDate(blog.createdAt)}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
