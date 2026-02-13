'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth()

    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!emailOrPhone || !password) {
            setError('Please fill in all fields')
            return
        }

        setLoading(true)

        const result = await login({ emailOrPhone, password })

        if (result.success) {
            router.push('/dashboard')
        } else {
            setError(result.error || 'Login failed')
        }

        setLoading(false)
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="max-w-md mx-auto px-4 py-12 sm:py-16">
                <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-center text-muted-foreground mb-8">
                        Login to access your dashboard
                    </p>

                    {error && (
                        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="emailOrPhone">Email or Phone Number</Label>
                            <Input
                                id="emailOrPhone"
                                type="text"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                placeholder="your.email@example.com or phone"
                                required
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="mt-1"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-accent hover:underline font-medium">
                            Register here
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
