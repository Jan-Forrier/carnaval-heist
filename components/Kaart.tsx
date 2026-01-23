'use client'

import { useState } from 'react'

export default function Kaart() {
  const [isInteractive, setIsInteractive] = useState(false)

  return (
    <section className="bg-licht-geel flex flex-col items-start px-0 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex gap-0 items-start overflow-hidden px-4 sm:px-8 md:px-16 py-0 relative w-full max-w-[1440px] mx-auto">
        <div className="flex flex-1 flex-col gap-8 md:gap-16 items-start relative w-full">
          <div className="flex flex-col gap-4 items-start relative text-black text-center w-full">
            <h2 className="font-display text-fluid-display tracking-[1.92px] uppercase w-full">
              Kaart
            </h2>
            <p className="font-decorative font-normal text-fluid-body-lg w-full">
              Ontdek alle belangrijke locaties en het parcours van de stoeten in Heist
            </p>
          </div>
          <div className="flex gap-0 items-start relative w-full">
            <div className="aspect-[1312/984] bg-[#d9d9d9] flex-1 min-h-0 min-w-0 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=10d99canM10G_xwi2DzQYYSx7wQi5pho&hl=nl&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: isInteractive ? 'auto' : 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Maps kaart met alle belangrijke locaties en het parcours van de stoeten in Heist"
              />
              {!isInteractive && (
                <button
                  onClick={() => setIsInteractive(true)}
                  className="absolute inset-0 w-full h-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Klik om kaart te activeren"
                >
                  <span className="font-body font-normal text-fluid-body text-black bg-white/90 px-4 py-2 rounded-lg shadow-md">
                    Klik om kaart te activeren
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
