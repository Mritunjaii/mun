// TypeScript types matching the backend API models

export interface User {
    _id: string
    name: string
    email: string
    classYear: string
    institution: string
    age: number
    phoneNumber: string
    munExperience: number
    countryPreference: CountryPreference[]
    paymentStatus: 'Pending' | 'Completed' | 'Failed' | 'Refunded' | 'Cancelled'
    amountPaid: number
    amountReciptUrl?: string
    accommodationPreference?: 'with_stay' | 'without_stay'
    committeeChoose?: string
    countryAssigned?: string
    createdAt: string
    updatedAt: string
}

export interface CountryPreference {
    committeeId: string
    countryId: string
    priority: number
}

export interface Blog {
    _id: string
    title: string
    description: string
    imageURL?: string
    createdAt: string
    updatedAt: string
}

export interface ApiResponse<T> {
    success: boolean
    message?: string
    data?: T
    error?: {
        message: string
        statusCode: number
    }
}

export interface AuthResponse {
    message: string
    user: User
    token: string
}

export interface Country {
    _id: string
    committeeId: string
    name: string
    code: string
    blocOrParty: string
    isAvailable: boolean
    createdAt: string
    updatedAt: string
}

export interface CommitteeRegistrationRequest {
    committeeChoose: string
    countryPreference: CountryPreference[]
    doubleDelegationName?: string
    doubleDelegationPhoneNumber?: string
    doubleDelegationCountryPreference?: CountryPreference[]
}

export type AccommodationOption = 'with_stay' | 'without_stay'

export interface PaymentStatusUpdate {
    paymentStatus: 'Completed' | 'Failed'
    amountPaid: number
    amountReciptUrl: string
    accommodationPreference?: AccommodationOption
}

export interface SendOTPRequest {
    email: string
}

export interface SignupRequest {
    email: string
    otp: string
    name: string
    password: string
    classYear: string
    institution: string
    age: number
    phoneNumber: string
    munExperience?: number
    countryPreference?: CountryPreference[]
    committeeChoose?: string
}

export interface LoginRequest {
    emailOrPhone: string
    password: string
}

export interface Committee {
    _id: string
    name: string
    description: string
    agenda: string
    maxDelegates: number
    rulesOfProcedure: string
    doubleDelegationAllowed: boolean
    entryFee: number
    entryFeeOutsideNitWithStay: number
    entryFeeOutsideNitWithoutStay: number
    brochureUrl: string
    createdAt: string
    updatedAt: string
}
