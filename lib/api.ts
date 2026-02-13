// API client for mun-b backend

import type {
    ApiResponse,
    AuthResponse,
    SendOTPRequest,
    SignupRequest,
    LoginRequest,
    Blog,
    User
} from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

// Helper function for API calls
async function apiCall<T>(
    endpoint: string,
    options?: RequestInit
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        })

        const data = await response.json()

        if (!response.ok) {
            return {
                success: false,
                error: {
                    message: data.error?.message || data.message || 'An error occurred',
                    statusCode: response.status,
                },
            }
        }

        return {
            success: true,
            ...data,
        }
    } catch (error) {
        return {
            success: false,
            error: {
                message: error instanceof Error ? error.message : 'Network error',
                statusCode: 500,
            },
        }
    }
}

// Auth API calls
export const authAPI = {
    sendOTP: async (data: SendOTPRequest) => {
        return apiCall<{ message: string }>('/v1/auth/send-otp', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    signup: async (data: SignupRequest) => {
        return apiCall<AuthResponse>('/v1/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },

    login: async (data: LoginRequest) => {
        return apiCall<AuthResponse>('/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
        })
    },
}

// Blog API calls
export const blogAPI = {
    getAllBlogs: async () => {
        return apiCall<Blog[]>('/v1/blogs', {
            method: 'GET',
        })
    },

    getBlogById: async (id: string) => {
        return apiCall<Blog>(`/v1/blogs/${id}`, {
            method: 'GET',
        })
    },
}

// User helper functions
export const userStorage = {
    saveUser: (user: User) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user))
        }
    },

    getUser: (): User | null => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user')
            return userStr ? JSON.parse(userStr) : null
        }
        return null
    },

    removeUser: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user')
        }
    },

    isAuthenticated: (): boolean => {
        return userStorage.getUser() !== null
    },
}
