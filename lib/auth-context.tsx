'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { authAPI, userStorage } from './api'
import type { User, LoginRequest, SignupRequest } from './types'

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (data: LoginRequest) => Promise<{ success: boolean; error?: string }>
    signup: (data: SignupRequest) => Promise<{ success: boolean; error?: string }>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Check for existing user on mount
    useEffect(() => {
        const savedUser = userStorage.getUser()
        if (savedUser) {
            setUser(savedUser)
        }
        setIsLoading(false)
    }, [])

    const login = async (data: LoginRequest) => {
        try {
            const response = await authAPI.login(data)

            if (response.success && response.data) {
                const userData = response.data.user
                setUser(userData)
                userStorage.saveUser(userData)
                return { success: true }
            } else {
                return {
                    success: false,
                    error: response.error?.message || 'Login failed'
                }
            }
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'An error occurred'
            }
        }
    }

    const signup = async (data: SignupRequest) => {
        try {
            const response = await authAPI.signup(data)

            if (response.success && response.data) {
                const userData = response.data.user
                setUser(userData)
                userStorage.saveUser(userData)
                return { success: true }
            } else {
                return {
                    success: false,
                    error: response.error?.message || 'Signup failed'
                }
            }
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'An error occurred'
            }
        }
    }

    const logout = () => {
        setUser(null)
        userStorage.removeUser()
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: user !== null,
                isLoading,
                login,
                signup,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
