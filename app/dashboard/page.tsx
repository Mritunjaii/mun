'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
    User,
    Mail,
    Phone,
    GraduationCap,
    Building2,
    Calendar,
    Award,
    CreditCard,
    Globe
} from 'lucide-react'

export default function DashboardPage() {
    const router = useRouter()
    const { user, isAuthenticated, isLoading } = useAuth()

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, isLoading, router])

    if (isLoading) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navigation />
                <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
                    <div className="text-center">
                        <p className="text-muted-foreground">Loading...</p>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    if (!user) {
        return null
    }

    const getPaymentStatusColor = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800 border-green-300'
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300'
            case 'Failed':
                return 'bg-red-100 text-red-800 border-red-300'
            case 'Refunded':
                return 'bg-blue-100 text-blue-800 border-blue-300'
            case 'Cancelled':
                return 'bg-gray-100 text-gray-800 border-gray-300'
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300'
        }
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
                <div className="mb-8">
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
                        Welcome, {user.name}
                    </h1>
                    <p className="text-muted-foreground">
                        Your SYGNET MUN Dashboard
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Profile Information Card */}
                    <div className="bg-card border border-border rounded-lg p-6">
                        <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                            <User className="w-6 h-6" />
                            Profile Information
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <User className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Full Name</p>
                                    <p className="font-medium">{user.name}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">{user.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone Number</p>
                                    <p className="font-medium">{user.phoneNumber}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Building2 className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Institution</p>
                                    <p className="font-medium">{user.institution}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <GraduationCap className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Class/Year</p>
                                    <p className="font-medium">{user.classYear}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Age</p>
                                    <p className="font-medium">{user.age} years</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-muted-foreground mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">MUN Experience</p>
                                    <p className="font-medium">
                                        {user.munExperience} {user.munExperience === 1 ? 'MUN' : 'MUNs'} attended
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Status Card */}
                    <div className="bg-card border border-border rounded-lg p-6">
                        <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                            <CreditCard className="w-6 h-6" />
                            Registration Status
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Payment Status</p>
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getPaymentStatusColor(user.paymentStatus)}`}>
                                    {user.paymentStatus}
                                </span>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">Amount Paid</p>
                                <p className="font-medium text-2xl">₹{user.amountPaid}</p>
                            </div>

                            {user.committeeChoose && (
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Committee Chosen</p>
                                        <p className="font-medium">{user.committeeChoose}</p>
                                    </div>
                                </div>
                            )}

                            {user.countryAssigned && (
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Country Assigned</p>
                                        <p className="font-medium">{user.countryAssigned}</p>
                                    </div>
                                </div>
                            )}

                            {user.paymentStatus === 'Pending' && (
                                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                                    <p className="text-sm text-yellow-800">
                                        Your registration is pending payment. Please complete the payment to confirm your participation.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Country Preferences */}
                {user.countryPreference && user.countryPreference.length > 0 && (
                    <div className="mt-6 bg-card border border-border rounded-lg p-6">
                        <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                            <Globe className="w-6 h-6" />
                            Country Preferences
                        </h2>

                        <div className="space-y-3">
                            {user.countryPreference
                                .sort((a, b) => a.priority - b.priority)
                                .map((pref, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/10 rounded">
                                        <span className="font-bold text-lg text-accent">#{pref.priority}</span>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Committee ID: {pref.committeeId}</p>
                                            <p className="text-sm text-muted-foreground">Country ID: {pref.countryId}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* Registration Date */}
                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>Registered on {new Date(user.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
