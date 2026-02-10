'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    delegateType: 'delegate',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    country: '',
    committee: '',
    experience: 'beginner'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-16 md:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
            Delegate Registration
          </h1>
          <p className="font-serif text-lg text-muted-foreground">
            Secure Your Place at SYGNET MUN
          </p>
        </div>
      </section>

      {/* Registration Info & Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Info Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b-2 border-foreground">
            <div className="bg-card border-l-4 border-accent p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Early Bird Registration
              </h3>
              <p className="font-serif text-lg font-bold text-accent mb-2">
                INR 2,500
              </p>
              <p className="font-serif text-sm text-muted-foreground">
                Valid until February 28, 2025
              </p>
            </div>

            <div className="bg-card border-l-4 border-accent p-4 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                Regular Registration
              </h3>
              <p className="font-serif text-base sm:text-lg font-bold text-accent mb-1 sm:mb-2">
                INR 3,500
              </p>
              <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                Valid until March 31, 2025
              </p>
            </div>

            <div className="bg-card border-l-4 border-accent p-4 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                Includes
              </h3>
              <ul className="font-serif text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <li>✓ Conference Passes</li>
                <li>✓ Background Guides</li>
                <li>✓ Meals & Refreshments</li>
                <li>✓ Certificate</li>
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-3xl">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-foreground">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 text-balance">
                Registration Form
              </h2>
              <p className="font-serif text-xs sm:text-sm md:text-base text-muted-foreground">
                Fill out the details below to register for SYGNET MUN
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Participant Type */}
              <div>
                <label className="font-serif font-bold text-primary mb-2 sm:mb-3 block text-sm sm:text-base">
                  Registration Type *
                </label>
                <div className="space-y-2">
                  {['delegate', 'press', 'chair'].map((type) => (
                    <label key={type} className="flex items-center gap-3 font-serif cursor-pointer text-xs sm:text-sm">
                      <input
                        type="radio"
                        name="delegateType"
                        value={type}
                        checked={formData.delegateType === type}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="capitalize">{type === 'chair' ? 'Committee Chair' : type === 'press' ? 'International Press' : 'Delegate'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
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
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Institution & Country */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    School / Institution *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="Your institution name"
                  />
                </div>
                <div>
                  <label className="font-serif font-bold text-primary mb-1 sm:mb-2 block text-xs sm:text-sm">
                    Country of Representation *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-2 sm:p-3 font-serif text-sm sm:text-base focus:outline-none focus:border-accent"
                    placeholder="e.g., India, France, Japan"
                  />
                </div>
              </div>

              {/* Committee & Experience */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="font-serif font-bold text-primary mb-2 block">
                    Preferred Committee *
                  </label>
                  <select
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-foreground p-3 font-serif focus:outline-none focus:border-accent bg-background"
                  >
                    <option value="">Select a committee</option>
                    <option value="unsc">UN Security Council</option>
                    <option value="unga">UN General Assembly</option>
                    <option value="ecosoc">ECOSOC</option>
                    <option value="hrc">Human Rights Council</option>
                  </select>
                </div>
                <div>
                  <label className="font-serif font-bold text-primary mb-2 block">
                    MUN Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full border-2 border-foreground p-3 font-serif focus:outline-none focus:border-accent bg-background"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 border-t-2 border-foreground">
                <button
                  type="submit"
                  className="w-full font-serif font-bold py-4 px-6 bg-primary text-card hover:bg-accent hover:text-primary transition-colors text-lg"
                >
                  Complete Registration
                </button>
                <p className="font-serif text-sm text-center text-muted-foreground mt-4">
                  After registration, you will receive a confirmation email with further instructions.
                </p>
              </div>
            </form>
          </div>

          {/* FAQs */}
          <div className="mt-16 pt-16 border-t-2 border-foreground">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8 pb-4 border-b-2 border-foreground">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  What is the registration deadline?
                </h3>
                <p className="font-serif text-foreground">
                  Regular registration closes on March 31, 2025. However, early bird registration (discounted) is available until February 28, 2025.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Can I change my committee after registration?
                </h3>
                <p className="font-serif text-foreground">
                  Yes, committee changes are permitted until 2 weeks before the conference. Contact the Secretariat for assistance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Is accommodation provided?
                </h3>
                <p className="font-serif text-foreground">
                  SYGNET MUN takes place over 3 days at NIT Hamirpur. Accommodation can be arranged on request. Please contact us for details.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  What documents are required?
                </h3>
                <p className="font-serif text-foreground">
                  Upon registration, you will need to submit proof of enrollment from your institution. More details will be sent via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
