'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Message submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-16 md:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
            Correspondence Desk
          </h1>
          <p className="font-serif text-lg text-muted-foreground">
            Get in Touch with the SYGNET MUN Team
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b-2 border-foreground">
            {/* Email */}
            <article className="bg-card border-l-4 border-accent p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                Email
              </h3>
              <p className="font-serif text-lg text-foreground mb-2">
                sygnetmun@nith.ac.in
              </p>
              <p className="font-serif text-sm text-muted-foreground">
                For general inquiries and registration support
              </p>
            </article>

            {/* Phone */}
            <article className="bg-card border-l-4 border-accent p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                Phone
              </h3>
              <p className="font-serif text-lg text-foreground mb-2">
                +91-9876543210
              </p>
              <p className="font-serif text-sm text-muted-foreground">
                Available during business hours
              </p>
            </article>

            {/* Location */}
            <article className="bg-card border-l-4 border-accent p-4 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 sm:mb-2">
                Location
              </h3>
              <p className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">
                NIT Hamirpur
              </p>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                Himachal Pradesh, India
              </p>
            </article>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 pb-8 sm:pb-12 md:pb-16 border-b-2 border-foreground">
            {[
              { title: 'Registrations & Payments', description: 'Questions about registration, fees, or payment methods' },
              { title: 'Committee Assignments', description: 'Inquiries regarding committee placements or preferences' },
              { title: 'Accommodation & Logistics', description: 'Travel, lodging, and event logistics' },
              { title: 'General Inquiries', description: 'Any other questions about SYGNET MUN' }
            ].map((category, idx) => (
              <div key={idx} className="bg-card border-2 border-foreground p-4 sm:p-6">
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2 text-balance">
                  {category.title}
                </h3>
                <p className="font-serif text-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  {category.description}
                </p>
                <button className="font-serif font-bold text-xs sm:text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent">
                  Send Email →
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-foreground">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 text-balance">
                Send us a Message
              </h2>
              <p className="font-serif text-xs sm:text-sm md:text-base text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                  placeholder="What is your inquiry about?"
                />
              </div>

              <div>
                <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="font-serif font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base bg-primary text-card hover:bg-accent hover:text-primary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="bg-card border-2 border-foreground p-8">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Connect on Social Media
            </h2>
            <div className="flex gap-6">
              <a href="#" className="font-serif font-bold text-primary hover:text-accent transition-colors text-lg">
                Twitter / X
              </a>
              <a href="#" className="font-serif font-bold text-primary hover:text-accent transition-colors text-lg">
                Instagram
              </a>
              <a href="#" className="font-serif font-bold text-primary hover:text-accent transition-colors text-lg">
                Facebook
              </a>
              <a href="#" className="font-serif font-bold text-primary hover:text-accent transition-colors text-lg">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-16 border-t-2 border-foreground">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Response Time
                </h3>
                <p className="font-serif text-foreground">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our phone line.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Office Hours
                </h3>
                <div className="font-serif space-y-2 text-foreground">
                  <p>Monday - Friday: 10:00 AM - 6:00 PM IST</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For urgent inquiries outside office hours, please send an email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 pt-16 border-t-2 border-foreground">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Venue Location
            </h2>
            <div className="bg-secondary border-2 border-foreground p-12 text-center">
              <p className="font-serif text-lg font-bold text-primary">
                National Institute of Technology Hamirpur
              </p>
              <p className="font-serif text-foreground mt-2">
                Himachal Pradesh, India
              </p>
              <p className="font-serif text-sm text-muted-foreground mt-4">
                [Map would be displayed here]
              </p>
              <button className="mt-6 font-serif font-bold py-2 px-6 bg-primary text-card hover:bg-accent hover:text-primary transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
