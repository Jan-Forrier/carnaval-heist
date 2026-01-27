'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Array of 9 images from local folder
const images = [
  { id: 1, src: '/images/fotogalerij/DSC08081.jpg', alt: 'Carnaval foto 1' },
  { id: 2, src: '/images/fotogalerij/Carnaval-3.jpg', alt: 'Carnaval foto 2' },
  { id: 3, src: '/images/fotogalerij/Carnaval-10.jpg', alt: 'Carnaval foto 3' },
  { id: 4, src: '/images/fotogalerij/Carnaval-70.jpg', alt: 'Carnaval foto 4' },
  { id: 5, src: '/images/fotogalerij/Carnaval-85.jpg', alt: 'Carnaval foto 5' },
  { id: 6, src: '/images/fotogalerij/Carnaval-267.jpg', alt: 'Carnaval foto 6' },
  { id: 7, src: '/images/fotogalerij/DSC00301.jpg', alt: 'Carnaval foto 7' },
  { id: 8, src: '/images/fotogalerij/DSC00310.jpg', alt: 'Carnaval foto 8' },
  { id: 9, src: '/images/fotogalerij/DSC09896.jpg', alt: 'Carnaval foto 9' },
]

export default function Fotogalerij() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const carouselRef = useRef<HTMLDivElement>(null)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate items per view based on screen size
  const itemsPerView = isMobile ? 1 : 3
  const totalSlides = Math.ceil(images.length / itemsPerView)

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)))
  }

  const goToPrevious = () => {
    goToSlide(currentIndex - 1)
  }

  const goToNext = () => {
    goToSlide(currentIndex + 1)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Get visible images for current slide
  const getVisibleImages = () => {
    const start = currentIndex * itemsPerView
    return images.slice(start, start + itemsPerView)
  }

  return (
    <section className="bg-licht-geel flex items-start px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex flex-col items-start relative shrink-0 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          <div className="flex gap-4 items-start justify-center relative shrink-0 w-full">
            <h2 className="font-display text-fluid-display text-black tracking-[1.92px] uppercase text-center">
              Fotogalerij
            </h2>
          </div>
          <p className="font-decorative font-normal text-fluid-body-lg text-black text-center w-full">
            Herbeleef hier de zotste momenten van Carnaval Heist , gegarandeerd glimlachen verzekerd!
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="flex items-center gap-4 w-full mt-8">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="flex-shrink-0 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all"
            aria-label="Vorige foto's"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Images Grid/Carousel */}
          <div
            ref={carouselRef}
            className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-3 relative w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {getVisibleImages().map((image, idx) => {
              const hasError = imageErrors[image.id] || false
              
              return (
                <div key={image.id} className="flex flex-col aspect-[4/3] items-start justify-self-stretch relative shrink-0">
                  <div className="flex-1 min-h-0 min-w-0 relative w-full overflow-hidden rounded-lg bg-gray-200">
                    {!hasError ? (
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        fill 
                        className="object-cover transition-transform duration-300 hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        quality={85}
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [image.id]: true }))
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={currentIndex === totalSlides - 1}
            className="flex-shrink-0 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all"
            aria-label="Volgende foto's"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mt-6 w-full">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all p-2"
              aria-label={`Ga naar slide ${index + 1} van ${totalSlides}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <span
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-black'
                    : 'w-2 h-2 bg-black/30'
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
