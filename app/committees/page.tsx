'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { committeeAPI } from '@/lib/api'
import { useAuth } from '@/lib/auth-context'
import type { Committee } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Download, Users } from 'lucide-react'

export default function CommitteesPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [committees, setCommittees] = useState<Committee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCommittees = async () => {
      setLoading(true)
      const response = await committeeAPI.getAllCommittees()

      if (response.success && response.data) {
        setCommittees(response.data)
        setError('')
      } else {
        setError(response.error?.message || 'Failed to load committees')
      }

      setLoading(false)
    }

    fetchCommittees()
  }, [])

  const handleRegisterClick = () => {
    if (isAuthenticated) {
      router.push('/dashboard')
    } else {
      router.push('/register')
    }
  }

  const getAcronym = (name: string): string => {
    const acronyms: { [key: string]: string } = {
      'Lok Sabha': 'LOKSABHA',
      'UNEA': 'UNEA',
      'UNHRC': 'UNHRC'
    }
    return acronyms[name] || name.toUpperCase()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-8 sm:py-12 md:py-16 lg:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 text-balance">
            Global Chambers
          </h1>
          <p className="font-serif text-sm sm:text-base md:text-lg text-muted-foreground">
            Committees in Session at SYGNET MUN
          </p>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading committees...</p>
            </div>
          ) : error ? (
            <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 rounded-lg text-center">
              <p className="font-semibold">Error loading committees</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : (
            <div className="space-y-16">
              {committees.map((committee, index) => (
                <div
                  key={committee._id}
                  className="border-t-4 border-foreground pt-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Committee Name */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                            {committee.name}
                          </h2>
                          {committee.doubleDelegationAllowed && (
                            <span className="inline-block px-2 py-1 bg-primary/10 border border-primary rounded text-xs font-semibold text-primary">
                              Double Delegation
                            </span>
                          )}
                        </div>
                        <p className="font-serif text-sm text-muted-foreground uppercase tracking-wider">
                          {getAcronym(committee.name)}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-serif text-sm text-muted-foreground uppercase tracking-wider mb-2">
                          Committee Overview
                        </p>
                        <p className="text-foreground leading-relaxed">
                          {committee.description}
                        </p>
                      </div>

                      {/* Agenda/Discussion Topics */}
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                          Discussion Topics
                        </h3>
                        <p className="text-foreground leading-relaxed">
                          {committee.agenda}
                        </p>
                      </div>

                      {/* Rules of Procedure */}
                      {committee.rulesOfProcedure && (
                        <div className="bg-card border border-border p-4 rounded">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold">Rules of Procedure:</span>{' '}
                            {committee.rulesOfProcedure}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">

                      {/* Committee Size */}
                      <div className="bg-card border-2 border-foreground p-4">
                        <p className="font-serif text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Committee Size
                        </p>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          <p className="font-serif text-xl font-bold text-foreground">
                            {committee.maxDelegates} Delegates
                          </p>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button
                        asChild
                        className="w-full bg-foreground text-background hover:bg-foreground/90"
                      >
                        <a
                          href={committee.brochureUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download Background Guide
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card border-t-4 border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Join a Committee?
          </h2>
          <p className="text-muted-foreground mb-8">
            Register now and select your preferred committee for SYGNET MUN
          </p>
          <Button
            onClick={handleRegisterClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Register as Delegate
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
