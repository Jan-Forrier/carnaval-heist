'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programma from '@/components/Programma'
import Kaart from '@/components/Kaart'
import Praktisch from '@/components/Praktisch'
import Kinderen from '@/components/Kinderen'
import LekkerGenieten from '@/components/LekkerGenieten'
import Carnavalstermen from '@/components/Carnavalstermen'
import Deelnemen from '@/components/Deelnemen'
import Fotogalerij from '@/components/Fotogalerij'
import Stoeten from '@/components/Stoeten'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from another page
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1) // Remove the # symbol
        const element = document.getElementById(id)
        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }

    // Check if we have a hash in the URL
    if (window.location.hash) {
      handleHashNavigation()
    }

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation)
    return () => window.removeEventListener('hashchange', handleHashNavigation)
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Heist viert Carnaval',
            description: 'Heist is het kloppende carnavalscentrum van Knokke-Heist. Vier dagen lang wisselen kleurrijke stoeten, originele kostuums en sfeervolle evenementen elkaar in sneltempo af.',
            location: {
              '@type': 'Place',
              name: 'Heist',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Knokke-Heist',
                addressCountry: 'BE',
              },
            },
            organizer: {
              '@type': 'Organization',
              name: 'Gemeente Knokke-Heist',
              url: 'https://www.knokke-heist.be/',
            },
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://heistcarnaval.be',
            image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://heistcarnaval.be'}/icon-512x512.png`,
          }),
        }}
      />
      <div className="flex flex-col items-start relative w-full min-h-screen">
        <Header />
        <main className="bg-white flex flex-col items-start w-full">
          <Hero />
          <Programma />
          <Kaart />
          <Stoeten />
          <Praktisch />
          <Kinderen />
          <LekkerGenieten />
          <Carnavalstermen />
          <Deelnemen />
          <Fotogalerij />
        </main>
        <Footer />
      </div>
    </>
  )
}
