'use client'

import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { Harlekijn } from './icons/Harlekijn'

export default function Hero() {
  const harlekijnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger confetti animation after a short delay when component mounts
    const timer = setTimeout(() => {
      if (harlekijnRef.current) {
        const rect = harlekijnRef.current.getBoundingClientRect()
        const x = (rect.left + rect.width / 2) / window.innerWidth
        const y = (rect.top + rect.height / 2) / window.innerHeight

        // Create confetti burst from the harlekijn position
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x, y },
          colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
          gravity: 0.8,
          decay: 0.9,
        })

        // Additional smaller bursts for more festive effect
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: x - 0.1, y },
            colors: ['#FFD700', '#FF6B6B', '#4ECDC4'],
          })
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: x + 0.1, y },
            colors: ['#45B7D1', '#FFA07A', '#98D8C8'],
          })
        }, 250)
      }
    }, 500) // Small delay to ensure page is loaded

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-geel flex items-start px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32 relative w-full">
      <div className="flex flex-col lg:flex-row flex-1 gap-8 md:gap-16 items-center justify-center px-4 sm:px-8 md:px-16 py-0 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-8 items-start relative text-black w-full sm:min-w-[400px] max-w-[700px]">
          <h1 className="font-display text-fluid-h1 tracking-[1.92px] uppercase w-full">
            Heist viert Carnaval
          </h1>
          <p className="font-body font-normal text-fluid-body w-full">
            Heist is het kloppende carnavalscentrum van Knokke-Heist. Vier dagen lang wisselen kleurrijke stoeten, originele kostuums en sfeervolle evenementen elkaar in sneltempo af. De grote zondagstoet en de verlichte dinsdagavondstoet zijn de absolute hoogtepunten, waar talloze vrijwilligers hun passie tonen. Ook naast de stoeten bruist Heist in cafés en feestlocaties tot in de vroege uurtjes. Carnaval in Heist prikkelt je zintuigen van begin tot eind.
          </p>
        </div>
        <div 
          ref={harlekijnRef}
          className="aspect-[263/500] relative w-full max-w-[263px] lg:w-[263.313px] shrink-0"
        >
          <Harlekijn className="w-full h-full object-contain" aria-label="Groene Prins" />
        </div>
      </div>
    </section>
  )
}
