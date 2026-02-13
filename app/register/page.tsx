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
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function RegisterPage() {
    const router = useRouter()
    const { signup } = useAuth()

    // Step management
    const [step, setStep] = useState<1 | 2>(1)

    // Step 1: Email & OTP
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [otpLoading, setOtpLoading] = useState(false)

    // Step 2: Registration form
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [classYear, setClassYear] = useState('')
    const [institutionType, setInstitutionType] = useState<'nit' | 'other'>('nit')
    const [otherInstitution, setOtherInstitution] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [munExperience, setMunExperience] = useState('0')

    // Error and loading states
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSendOTP = async () => {
        if (!email) {
            setError('Please enter your email')
            return
        }

        setOtpLoading(true)
        setError('')

        const response = await authAPI.sendOTP({ email })

        if (response.success) {
            setOtpSent(true)
            setError('')
        } else {
            setError(response.error?.message || 'Failed to send OTP')
        }

        setOtpLoading(false)
    }

    const handleVerifyOTP = () => {
        if (!otp) {
            setError('Please enter the OTP')
            return
        }

        if (otp.length !== 6) {
            setError('OTP must be 6 digits')
            return
        }

        setError('')
        setStep(2)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        // Validation
        if (!name || !password || !confirmPassword || !classYear || !age || !phoneNumber) {
            setError('Please fill in all required fields')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        if (institutionType === 'other' && !otherInstitution) {
            setError('Please enter your institution name')
            return
        }

        const institution = institutionType === 'nit' ? 'NIT Hamirpur' : otherInstitution

        setLoading(true)

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
        }

        setLoading(false)
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
                        {step === 1 ? 'Verify your email to get started' : 'Complete your registration'}
                    </p>

                    {error && (
                        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    {step === 1 ? (
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@example.com"
                                    disabled={otpSent}
                                    className="mt-1"
                                />
                            </div>

                            {!otpSent ? (
                                <Button
                                    onClick={handleSendOTP}
                                    disabled={otpLoading}
                                    className="w-full"
                                >
                                    {otpLoading ? 'Sending...' : 'Send OTP'}
                                </Button>
                            ) : (
                                <>
                                    <div className="bg-accent/50 border border-accent px-4 py-3 rounded">
                                        <p className="text-sm">
                                            OTP has been sent to <strong>{email}</strong>. Please check your inbox.
                                        </p>
                                    </div>

                                    <div>
                                        <Label htmlFor="otp">Enter OTP</Label>
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

                                    <Button
                                        onClick={handleVerifyOTP}
                                        className="w-full"
                                    >
                                        Verify & Continue
                                    </Button>

                                    <Button
                                        onClick={() => setOtpSent(false)}
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Change Email
                                    </Button>
                                </>
                            )}
                        </div>
                    ) : (
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

                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep(1)}
                                    className="flex-1"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1"
                                >
                                    {loading ? 'Registering...' : 'Complete Registration'}
                                </Button>
                            </div>
                        </form>
                    )}

                    <div className="mt-6 text-center text-sm">
                        Already have an account?{' '}
                        <Link href="/login" className="text-accent hover:underline font-medium">
                            Login here
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
