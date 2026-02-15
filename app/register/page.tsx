'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { authAPI } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function RegisterPage() {
    const router = useRouter()
    const { signup } = useAuth()

    // Form fields
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [classYear, setClassYear] = useState('')
    const [institutionType, setInstitutionType] = useState<'nit' | 'other'>('nit')
    const [otherInstitution, setOtherInstitution] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [munExperience, setMunExperience] = useState('0')

    // OTP states
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [showOtpDialog, setShowOtpDialog] = useState(false)
    const [otpLoading, setOtpLoading] = useState(false)

    // Error and loading states
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const validateEmail = (email: string, institution: string) => {
        if (institution === 'NIT Hamirpur') {
            return email.endsWith('@nith.ac.in')
        }
        return true
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSendOTP = async () => {
        setError('')

        // Validate all required fields
        if (!name || !email || !password || !confirmPassword || !classYear || !age || !phoneNumber) {
            setError('Please fill in all required fields')
            scrollToTop()
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            scrollToTop()
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            scrollToTop()
            return
        }

        if (institutionType === 'other' && !otherInstitution) {
            setError('Please enter your institution name')
            scrollToTop()
            return
        }

        const institution = institutionType === 'nit' ? 'NIT Hamirpur' : otherInstitution

        // Validate email domain for NIT Hamirpur
        if (!validateEmail(email, institution)) {
            setError('For NIT Hamirpur, email must end with @nith.ac.in')
            scrollToTop()
            return
        }

        setOtpLoading(true)

        const response = await authAPI.sendOTP({ email })

        if (response.success) {
            setOtpSent(true)
            setShowOtpDialog(true)
            setError('')
        } else {
            setError(response.error?.message || 'Failed to send OTP')
            scrollToTop()
        }

        setOtpLoading(false)
    }

    const handleVerifyOTP = async () => {
        if (!otp) {
            setError('Please enter the OTP')
            return
        }

        if (otp.length !== 6) {
            setError('OTP must be 6 digits')
            return
        }

        setError('')
        setShowOtpDialog(false)
        setLoading(true)

        const institution = institutionType === 'nit' ? 'NIT Hamirpur' : otherInstitution

        const result = await signup({
            email,
            otp,
            name,
            password,
            classYear,
            institution,
            age: parseInt(age),
            phoneNumber,
            munExperience: parseInt(munExperience),
        })

        if (result.success) {
            router.push('/dashboard')
        } else {
            setError(result.error || 'Registration failed')
            scrollToTop()
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission is now handled by Send OTP button
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
                <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-2">
                        Register for SYGNET MUN
                    </h1>
                    <p className="text-center text-muted-foreground mb-8">
                        Complete your registration details
                    </p>

                    {error && (
                        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                required
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                required
                                className="mt-1"
                            />
                            {institutionType === 'nit' && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    For NIT Hamirpur, email must end with @nith.ac.in
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="password">Password *</Label>
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
                            <div>
                                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="mt-1"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="classYear">Class/Year *</Label>
                            <Select value={classYear} onValueChange={setClassYear} required>
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select your class/year" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="9th">9th Grade</SelectItem>
                                    <SelectItem value="10th">10th Grade</SelectItem>
                                    <SelectItem value="11th">11th Grade</SelectItem>
                                    <SelectItem value="12th">12th Grade</SelectItem>
                                    <SelectItem value="1st Year">1st Year (College)</SelectItem>
                                    <SelectItem value="2nd Year">2nd Year (College)</SelectItem>
                                    <SelectItem value="3rd Year">3rd Year (College)</SelectItem>
                                    <SelectItem value="4th Year">4th Year (College)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label>Institution *</Label>
                            <RadioGroup
                                value={institutionType}
                                onValueChange={(value) => setInstitutionType(value as 'nit' | 'other')}
                                className="mt-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="nit" id="nit" />
                                    <Label htmlFor="nit" className="font-normal cursor-pointer">
                                        NIT Hamirpur
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other" className="font-normal cursor-pointer">
                                        Other
                                    </Label>
                                </div>
                            </RadioGroup>

                            {institutionType === 'other' && (
                                <Input
                                    type="text"
                                    value={otherInstitution}
                                    onChange={(e) => setOtherInstitution(e.target.value)}
                                    placeholder="Enter your institution name"
                                    required
                                    className="mt-2"
                                />
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="age">Age *</Label>
                                <Input
                                    id="age"
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="18"
                                    min="10"
                                    max="100"
                                    required
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phoneNumber">Phone Number *</Label>
                                <Input
                                    id="phoneNumber"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="+91 9876543210"
                                    required
                                    className="mt-1"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="munExperience">MUN Experience (number of MUNs attended)</Label>
                            <Input
                                id="munExperience"
                                type="number"
                                value={munExperience}
                                onChange={(e) => setMunExperience(e.target.value)}
                                placeholder="0"
                                min="0"
                                className="mt-1"
                            />
                        </div>

                        <Button
                            type="button"
                            onClick={handleSendOTP}
                            disabled={otpLoading || otpSent || loading}
                            className="w-full"
                        >
                            {otpLoading ? 'Sending OTP...' : loading ? 'Registering...' : otpSent ? 'OTP Sent - Check Your Email' : 'Send OTP'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        Already have an account?{' '}
                        <Link href="/login" className="text-accent hover:underline font-medium">
                            Login here
                        </Link>
                    </div>
                </div>
            </div>

            {/* OTP Dialog */}
            <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter OTP</DialogTitle>
                        <DialogDescription>
                            We've sent a 6-digit OTP to <strong>{email}</strong>. Please enter it below.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div>
                            <Label htmlFor="otp">OTP</Label>
                            <Input
                                id="otp"
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                placeholder="000000"
                                maxLength={6}
                                className="mt-1 text-center text-2xl tracking-widest"
                            />
                        </div>

                        {error && (
                            <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded text-sm">
                                {error}
                            </div>
                        )}

                        <div className="flex gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowOtpDialog(false)}
                                disabled={loading}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                onClick={handleVerifyOTP}
                                disabled={loading}
                                className="flex-1"
                            >
                                {loading ? 'Verifying & Registering...' : 'Verify OTP'}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </main>
    )
}
