'use client'

import Image from 'next/image'
import { ArrowRight, Camera } from 'lucide-react'

const GLIMPSE_IMAGES = [
  { src: '/IMG_8842.JPG', alt: 'UNHRC Executive Board at the dais' },
  { src: '/IMG_9021.JPG', alt: 'Delegate raising a point of order' },
  { src: '/IMG_9040.JPG', alt: 'Delegates collaborating during unmoderated caucus' },
  { src: '/IMG_9439.JPG', alt: 'Lively voting and placard raising during session' },
  { src: '/IMG_9133.JPG', alt: 'Delegate addressing the committee floor' },
  { src: '/IMG_9179.JPG', alt: 'Lok Sabha Speaker reviewing proceedings' },
  { src: '/IMG_9184.JPG', alt: 'Delegate presenting her point of view' },
  { src: '/IMG_9202.JPG', alt: 'Delegate raising issues with committee members' },
  { src: '/IMG_9403.JPG', alt: 'Delegate raising placard to seek the floor' },
  { src: '/IMG_9774.JPG', alt: 'Special Mention award presentation' },
  { src: '/IMG_9775.JPG', alt: 'Delegate receiving certification' },
  { src: '/IMG_9749.JPG', alt: 'Delegate receiving recognition from Executive Board' }
]

export function SygnetGlimpse() {
  return (
    <section className="py-16 md:py-24 bg-card border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="mb-12 pb-8 border-b-2 border-foreground flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-serif text-xs sm:text-sm font-bold text-accent uppercase tracking-widest mb-2 flex items-center gap-2">
              <Camera className="w-4 h-4" /> Photo Gallery
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight">
              SYGNET MUN 2026 GLIMPSE
            </h2>
            <p className="font-serif text-sm sm:text-base md:text-lg text-muted-foreground mt-2 max-w-2xl">
              Capturing moments of intense debate, strategic diplomacy, and global leadership from our conference.
            </p>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/17QsgK6XmXfm6CpqnCSUxGnLoD1nHJeC2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-serif font-bold text-sm uppercase px-6 py-3 border-2 border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
            >
              View Full Drive Folder
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {GLIMPSE_IMAGES.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-background border-2 border-foreground p-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-foreground/20">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Modern vintage dark overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="mt-3 pt-2 border-t border-foreground/30 flex justify-between items-center text-xs font-serif italic text-muted-foreground">
                <span>{img.alt}</span>
                <span className="font-sans font-bold text-[10px] uppercase text-accent tracking-wider bg-accent/10 px-1.5 py-0.5 rounded-none">
                  #{1000 + index}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="border-t-2 border-foreground pt-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">
              Want to see more memories?
            </h3>
            <p className="font-serif text-muted-foreground">
              We have compiled all high-resolution pictures from the committee sessions, social events, and ceremonies in our official Drive repository.
            </p>
            <div className="pt-2">
              <a
                href="https://drive.google.com/drive/folders/17QsgK6XmXfm6CpqnCSUxGnLoD1nHJeC2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-serif font-black text-lg px-8 py-4 border-4 border-foreground bg-background text-primary hover:bg-foreground hover:text-background transition-all duration-300"
              >
                ACCESS ALL PHOTOS
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
