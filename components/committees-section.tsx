'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { committeeAPI } from '@/lib/api'
import type { Committee } from '@/lib/types'
import { ArrowRight } from 'lucide-react'

export function CommitteesSection() {
  const [committees, setCommittees] = useState<Committee[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const response = await committeeAPI.getAllCommittees()
        if (response.success && response.data) {
          setCommittees(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch committees:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommittees()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
            Committees in Session
          </h2>
          <p className="text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Global Chambers
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : committees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div
                key={committee._id}
                className="group relative bg-background border-2 border-primary p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(var(--primary),0.1)]"
              >
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {committee.name}
                  </h3>
                  <div className="h-1 w-12 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 font-serif">
                  {committee.description}
                </p>

                <Link
                  href="/committees"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
                >
                  Know More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block px-8 py-4 bg-accent text-card border-4 border-primary">
              <p className="font-serif text-2xl md:text-3xl font-bold">
                Announce Soon
              </p>
            </div>
            <p className="font-serif text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
              Committee details, agendas, and background guides will be announced shortly. Stay tuned for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
