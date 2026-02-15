'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { committeeAPI, countryAPI, registrationAPI, paymentAPI, userStorage } from '@/lib/api'
import type { Committee, Country, CountryPreference, AccommodationOption } from '@/lib/types'
import {
    User,
    Mail,
    Phone,
    GraduationCap,
    Building2,
    Calendar,
    Award,
    CreditCard,
    Globe,
    Edit2,
    Save,
    X,
    Upload,
    CheckCircle,
    QrCode
} from 'lucide-react'

export default function DashboardPage() {
    const router = useRouter()
    const { user: authUser, isAuthenticated, isLoading } = useAuth()
    const [user, setUser] = useState(authUser)

    // Committee selection state
    const [committees, setCommittees] = useState<Committee[]>([])
    const [countries, setCountries] = useState<Country[]>([])
    const [selectedCommittee, setSelectedCommittee] = useState<string>('')
    const [selectedCountries, setSelectedCountries] = useState<string[]>([])

    // Double delegation state
    const [doubleDelegationName, setDoubleDelegationName] = useState('')
    const [doubleDelegationPhone, setDoubleDelegationPhone] = useState('')
    const [doubleDelegationCountries, setDoubleDelegationCountries] = useState<string[]>([])

    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Payment state
    const [accommodationOption, setAccommodationOption] = useState<AccommodationOption>('without_stay')
    const [receiptFile, setReceiptFile] = useState<File | null>(null)
    const [receiptPreview, setReceiptPreview] = useState<string>('')
    const [uploadingReceipt, setUploadingReceipt] = useState(false)
    const [paymentLoading, setPaymentLoading] = useState(false)
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, isLoading, router])

    useEffect(() => {
        setUser(authUser)
    }, [authUser])

    useEffect(() => {
        const fetchCommittees = async () => {
            const response = await committeeAPI.getAllCommittees()
            if (response.success && response.data) {
                setCommittees(response.data)
            }
        }
        fetchCommittees()
    }, [])

    useEffect(() => {
        if (selectedCommittee) {
            const fetchCountries = async () => {
                const response = await countryAPI.getAvailableCountries(selectedCommittee)
                if (response.success && response.data) {
                    setCountries(response.data)
                }
            }
            fetchCountries()
        }
    }, [selectedCommittee])

    // Initialize editing state with existing data
    useEffect(() => {
        if (user?.committeeChoose && !isEditing) {
            setSelectedCommittee(user.committeeChoose)
        }
    }, [user, isEditing])

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

    const handleCommitteeChange = (committeeId: string) => {
        setSelectedCommittee(committeeId)
        setSelectedCountries([])
        setDoubleDelegationCountries([])
        setDoubleDelegationName('')
        setDoubleDelegationPhone('')
    }

    const handleCountryToggle = (countryId: string) => {
        setSelectedCountries(prev => {
            if (prev.includes(countryId)) {
                return prev.filter(id => id !== countryId)
            } else if (prev.length < 3) {
                return [...prev, countryId]
            }
            return prev
        })
    }

    const handleDoubleDelegationCountryToggle = (countryId: string) => {
        setDoubleDelegationCountries(prev => {
            if (prev.includes(countryId)) {
                return prev.filter(id => id !== countryId)
            } else if (prev.length < 3) {
                return [...prev, countryId]
            }
            return prev
        })
    }

    const handleSaveSelection = async () => {
        if (!selectedCommittee || selectedCountries.length === 0) {
            setError('Please select a committee and at least one country preference')
            return
        }

        const selectedCommitteeData = committees.find(c => c._id === selectedCommittee)
        const isDoubleDelegation = selectedCommitteeData?.doubleDelegationAllowed

        // Validate double delegation fields if required
        if (isDoubleDelegation) {
            if (!doubleDelegationName || !doubleDelegationPhone || doubleDelegationCountries.length === 0) {
                setError('Please fill in all double delegation partner details')
                return
            }
        }

        setLoading(true)
        setError('')
        setSuccess('')

        try {
            const countryPreference: CountryPreference[] = selectedCountries.map((countryId, index) => ({
                committeeId: selectedCommittee,
                countryId: countryId,
                priority: index + 1
            }))

            const payload: any = {
                committeeChoose: selectedCommittee,
                countryPreference
            }

            // Add double delegation data if applicable
            if (isDoubleDelegation) {
                payload.doubleDelegationName = doubleDelegationName
                payload.doubleDelegationPhoneNumber = doubleDelegationPhone
                payload.doubleDelegationCountryPreference = doubleDelegationCountries.map((countryId, index) => ({
                    committeeId: selectedCommittee,
                    countryId: countryId,
                    priority: index + 1
                }))
            }

            const response = await registrationAPI.registerCommittee(payload)

            if (response.success && response.data) {
                // Update local user data
                const updatedUser = response.data
                setUser(updatedUser)
                userStorage.saveUser(updatedUser)
                setSuccess('Committee and country preferences saved successfully!')
                setIsEditing(false)
            } else {
                setError(response.error?.message || 'Failed to save preferences')
            }
        } catch (err) {
            setError('An error occurred while saving preferences')
        } finally {
            setLoading(false)
        }
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
        setSelectedCommittee(user.committeeChoose || '')
        setSelectedCountries([])
        setDoubleDelegationName('')
        setDoubleDelegationPhone('')
        setDoubleDelegationCountries([])
        setError('')
        setSuccess('')
    }

    // Payment handlers
    const handleReceiptFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setReceiptFile(file)
            // Create preview
            const reader = new FileReader()
            reader.onloadend = () => {
                setReceiptPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const calculatePaymentAmount = () => {
        if (!user.committeeChoose) return 0
        const committee = committees.find(c => c._id === user.committeeChoose)
        if (!committee) return 0

        if (user.institution === 'NIT Hamirpur') {
            return committee.entryFee
        } else {
            return accommodationOption === 'with_stay'
                ? committee.entryFeeOutsideNitWithStay
                : committee.entryFeeOutsideNitWithoutStay
        }
    }

    const handleSubmitPayment = async () => {
        if (!receiptFile) {
            setPaymentError('Please upload payment receipt')
            return
        }

        setPaymentLoading(true)
        setPaymentError('')
        setPaymentSuccess('')

        try {
            // Upload receipt to Cloudinary
            setUploadingReceipt(true)
            const uploadResponse = await paymentAPI.uploadReceipt(receiptFile)
            setUploadingReceipt(false)

            if (!uploadResponse.success || !uploadResponse.data) {
                setPaymentError(uploadResponse.error?.message || 'Failed to upload receipt')
                setPaymentLoading(false)
                return
            }

            const receiptUrl = uploadResponse.data.url

            // Update payment status
            const paymentData = {
                paymentStatus: 'Completed' as const,
                amountPaid: calculatePaymentAmount(),
                amountReciptUrl: receiptUrl,
                ...(user.institution !== 'NIT Hamirpur' && { accommodationPreference: accommodationOption })
            }

            const response = await paymentAPI.updatePaymentStatus(paymentData)

            if (response.success && response.data) {
                const updatedUser = response.data
                setUser(updatedUser)
                userStorage.saveUser(updatedUser)
                setPaymentSuccess('Payment submitted successfully! Your registration is now complete.')
                setReceiptFile(null)
                setReceiptPreview('')
            } else {
                setPaymentError(response.error?.message || 'Failed to update payment status')
            }
        } catch (err) {
            setPaymentError('An error occurred while processing payment')
        } finally {
            setPaymentLoading(false)
        }
    }

    const canEdit = user.paymentStatus === 'Pending' || !user.committeeChoose

    const getCommitteeName = (committeeId: string) => {
        const committee = committees.find(c => c._id === committeeId)
        return committee?.name || committeeId
    }

    const getCountryName = (countryId: string) => {
        const country = countries.find(c => c._id === countryId)
        return country?.name || countryId
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

                {/* Error and Success Messages */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        {success}
                    </div>
                )}

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
                                        <p className="font-medium">{getCommitteeName(user.committeeChoose)}</p>
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

                {/* Committee and Country Selection */}
                <div className="mt-6 bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
                            <Globe className="w-6 h-6" />
                            Committee & Country Selection
                        </h2>
                        {user.committeeChoose && canEdit && !isEditing && (
                            <Button
                                onClick={() => setIsEditing(true)}
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-2"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit Selection
                            </Button>
                        )}
                    </div>

                    {!user.committeeChoose || isEditing ? (
                        <div className="space-y-6">
                            {/* Committee Selection */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Select Committee <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={selectedCommittee}
                                    onChange={(e) => handleCommitteeChange(e.target.value)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                                    disabled={loading}
                                >
                                    <option value="">Choose a committee...</option>
                                    {committees.map((committee) => (
                                        <option key={committee._id} value={committee._id}>
                                            {committee.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Country Selection */}
                            {selectedCommittee && (
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Select Country Preferences (up to 3, in order of preference) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        {countries.map((country) => {
                                            const isSelected = selectedCountries.includes(country._id)
                                            const priority = selectedCountries.indexOf(country._id) + 1
                                            return (
                                                <button
                                                    key={country._id}
                                                    onClick={() => handleCountryToggle(country._id)}
                                                    disabled={loading}
                                                    className={`p-3 border rounded-lg text-left transition-colors ${isSelected
                                                        ? 'border-primary bg-primary/10'
                                                        : 'border-border hover:border-primary/50'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">{country.name}</span>
                                                        {isSelected && (
                                                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                                                                #{priority}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">{country.code}</span>
                                                </button>
                                            )
                                        })}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Selected: {selectedCountries.length}/3
                                    </p>
                                </div>
                            )}

                            {/* Double Delegation Section */}
                            {selectedCommittee && committees.find(c => c._id === selectedCommittee)?.doubleDelegationAllowed && (
                                <div className="border-t pt-6 space-y-4">
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                        <p className="text-sm text-blue-800 font-medium">
                                            🤝 Double Delegation Required
                                        </p>
                                        <p className="text-sm text-blue-700 mt-1">
                                            This committee requires double delegation. Please provide your partner's details below.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Partner Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={doubleDelegationName}
                                            onChange={(e) => setDoubleDelegationName(e.target.value)}
                                            placeholder="Enter partner's full name"
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                                            disabled={loading}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Partner Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={doubleDelegationPhone}
                                            onChange={(e) => setDoubleDelegationPhone(e.target.value)}
                                            placeholder="Enter partner's phone number"
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                                            disabled={loading}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Partner's Country Preferences (up to 3) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                            {countries.map((country) => {
                                                const isSelected = doubleDelegationCountries.includes(country._id)
                                                const priority = doubleDelegationCountries.indexOf(country._id) + 1
                                                return (
                                                    <button
                                                        key={country._id}
                                                        onClick={() => handleDoubleDelegationCountryToggle(country._id)}
                                                        disabled={loading}
                                                        className={`p-3 border rounded-lg text-left transition-colors ${isSelected
                                                            ? 'border-accent bg-accent/10'
                                                            : 'border-border hover:border-accent/50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className="font-medium">{country.name}</span>
                                                            {isSelected && (
                                                                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                                                                    #{priority}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">{country.code}</span>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            Selected: {doubleDelegationCountries.length}/3
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <Button
                                    onClick={handleSaveSelection}
                                    disabled={loading || !selectedCommittee || selectedCountries.length === 0}
                                    className="flex items-center gap-2"
                                >
                                    <Save className="w-4 h-4" />
                                    {loading ? 'Saving...' : 'Save Selection'}
                                </Button>
                                {isEditing && (
                                    <Button
                                        onClick={handleCancelEdit}
                                        variant="outline"
                                        disabled={loading}
                                        className="flex items-center gap-2"
                                    >
                                        <X className="w-4 h-4" />
                                        Cancel
                                    </Button>
                                )}
                            </div>

                            {!canEdit && (
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                                    <p className="text-sm text-blue-800">
                                        Your selection is locked as payment has been completed. Contact support if you need to make changes.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Selected Committee</p>
                                <p className="font-medium text-lg">{getCommitteeName(user.committeeChoose)}</p>
                            </div>

                            {user.countryPreference && user.countryPreference.length > 0 && (
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">Country Preferences</p>
                                    <div className="space-y-2">
                                        {user.countryPreference
                                            .sort((a, b) => a.priority - b.priority)
                                            .map((pref, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-accent/10 rounded">
                                                    <span className="font-bold text-lg text-accent">#{pref.priority}</span>
                                                    <div>
                                                        <p className="font-medium">{getCountryName(pref.countryId)}</p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Payment Section */}
                {user.committeeChoose && user.paymentStatus === 'Pending' && (
                    <div className="mt-6 bg-card border border-border rounded-lg p-6">
                        <h2 className="font-serif text-2xl font-bold flex items-center gap-2 mb-4">
                            <CreditCard className="w-6 h-6" />
                            Payment
                        </h2>

                        <div className="space-y-6">
                            {/* Payment Amount */}
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                                <p className="text-sm text-muted-foreground mb-2">Amount to Pay</p>
                                <p className="text-3xl font-bold text-primary">₹{calculatePaymentAmount()}</p>
                                {user.institution !== 'NIT Hamirpur' && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {accommodationOption === 'with_stay' ? 'With Accommodation' : 'Without Accommodation'}
                                    </p>
                                )}
                            </div>

                            {/* Accommodation Selection for Non-NIT Students */}
                            {user.institution !== 'NIT Hamirpur' && (
                                <div>
                                    <label className="block text-sm font-medium mb-3">
                                        Accommodation Preference <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setAccommodationOption('without_stay')}
                                            className={`p-4 border rounded-lg text-left transition-colors ${accommodationOption === 'without_stay'
                                                ? 'border-primary bg-primary/10'
                                                : 'border-border hover:border-primary/50'
                                                }`}
                                        >
                                            <p className="font-medium">Without Accommodation</p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                ₹{committees.find(c => c._id === user.committeeChoose)?.entryFeeOutsideNitWithoutStay || 0}
                                            </p>
                                        </button>
                                        <button
                                            onClick={() => setAccommodationOption('with_stay')}
                                            className={`p-4 border rounded-lg text-left transition-colors ${accommodationOption === 'with_stay'
                                                ? 'border-primary bg-primary/10'
                                                : 'border-border hover:border-primary/50'
                                                }`}
                                        >
                                            <p className="font-medium">With Accommodation</p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                ₹{committees.find(c => c._id === user.committeeChoose)?.entryFeeOutsideNitWithStay || 0}
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* QR Code */}
                            <div className="bg-white border border-border rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <QrCode className="w-5 h-5" />
                                    <h3 className="font-semibold">Scan to Pay</h3>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://res.cloudinary.com/diozumpxo/image/upload/v1771101115/WhatsApp_Image_2026-02-15_at_01.37.26_xxl5ce.jpg"
                                        alt="Payment QR Code"
                                        className="w-64 h-64 object-contain border border-border rounded"
                                    />
                                    <p className="text-sm text-muted-foreground mt-4 text-center">
                                        Scan this QR code using PhonePe, Google Pay, or any UPI app
                                    </p>
                                </div>
                            </div>

                            {/* Receipt Upload */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Upload Payment Receipt <span className="text-red-500">*</span>
                                </label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6">
                                    {!receiptPreview ? (
                                        <div className="text-center">
                                            <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Upload a screenshot of your payment confirmation
                                            </p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleReceiptFileChange}
                                                className="hidden"
                                                id="receipt-upload"
                                            />
                                            <label htmlFor="receipt-upload">
                                                <Button variant="outline" className="cursor-pointer" asChild>
                                                    <span>Choose File</span>
                                                </Button>
                                            </label>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="relative">
                                                <img
                                                    src={receiptPreview}
                                                    alt="Receipt Preview"
                                                    className="max-h-64 mx-auto rounded"
                                                />
                                                <button
                                                    onClick={() => {
                                                        setReceiptFile(null)
                                                        setReceiptPreview('')
                                                    }}
                                                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-sm text-center text-muted-foreground mt-3">
                                                {receiptFile?.name}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Error and Success Messages */}
                            {paymentError && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
                                    {paymentError}
                                </div>
                            )}
                            {paymentSuccess && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800 flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 mt-0.5" />
                                    <span>{paymentSuccess}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                onClick={handleSubmitPayment}
                                disabled={!receiptFile || paymentLoading || uploadingReceipt}
                                className="w-full flex items-center justify-center gap-2"
                                size="lg"
                            >
                                {uploadingReceipt ? (
                                    <>Uploading Receipt...</>
                                ) : paymentLoading ? (
                                    <>Processing Payment...</>
                                ) : (
                                    <>
                                        <CreditCard className="w-5 h-5" />
                                        Submit Payment
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                )}

                {/* Payment Completed Status */}
                {user.paymentStatus === 'Completed' && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h3 className="font-semibold text-green-900">Payment Completed</h3>
                        </div>
                        <p className="text-sm text-green-800">
                            Your payment of ₹{user.amountPaid} has been received. Your registration is complete!
                        </p>
                        {user.amountReciptUrl && (
                            <a
                                href={user.amountReciptUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-green-700 underline mt-2 inline-block"
                            >
                                View Receipt
                            </a>
                        )}
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
