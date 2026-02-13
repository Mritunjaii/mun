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
