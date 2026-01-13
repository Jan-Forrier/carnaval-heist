'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const imgHarlekijnSticker1 = "https://www.figma.com/api/mcp/asset/cdeb4ae5-e0d0-4628-95c2-c282f1df436e"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      // Check if navigation links would overflow
      const header = document.querySelector('header')
      if (header) {
        const nav = header.querySelector('nav')
        if (nav) {
          const navRect = nav.getBoundingClientRect()
          const headerRect = header.getBoundingClientRect()
          // Show hamburger if nav would overflow or screen is less than 1024px
          setIsMobile(window.innerWidth < 1024 || navRect.width > headerRect.width - 200)
        }
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className="bg-geel flex gap-4 lg:gap-16 items-center px-4 lg:px-16 py-0 sticky top-0 z-50 w-full shadow-md">
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="flex gap-2 items-center relative flex-1 lg:flex-initial hover:opacity-90 transition-opacity cursor-pointer"
        aria-label="Ga naar bovenkant van de pagina"
      >
        <div className="relative shrink-0 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] aspect-square group">
          <Image 
            src={imgHarlekijnSticker1} 
            alt="Harlekijn Sticker" 
            fill 
            className="object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
            unoptimized 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <p className="font-display leading-[32px] lg:leading-[48px] text-[24px] lg:text-[40px] text-black text-center tracking-[1.2px] uppercase">
          Heist viert Carnaval
        </p>
      </a>
      
      {/* Desktop Navigation */}
      <nav 
        className={`${isMobile ? 'hidden' : 'flex'} flex-1 flex-row items-center justify-end`}
        role="navigation"
        aria-label="Hoofdnavigatie"
      >
        <div className="flex h-full items-center">
          <a 
            href="#programma" 
            className="flex h-full items-center p-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2"
            aria-label="Ga naar Programma sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Programma</p>
          </a>
          <a 
            href="#praktisch" 
            className="flex h-full items-center p-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2"
            aria-label="Ga naar Praktisch sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Praktisch</p>
          </a>
          <a 
            href="#kinderen" 
            className="flex h-full items-center p-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2"
            aria-label="Ga naar Kinderen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Kinderen</p>
          </a>
          <a 
            href="#carnavalstermen" 
            className="flex h-full items-center p-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2"
            aria-label="Ga naar Carnavalstermen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Carnavalstermen</p>
          </a>
          <a 
            href="#deelnemen" 
            className="flex h-full items-center p-5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2"
            aria-label="Ga naar Deelnemen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Deelnemen</p>
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 relative z-50 focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2 rounded"
          aria-label={isMenuOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <>
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeMenu()
              }}
              aria-hidden="true"
            />
          )}
          <nav
            id="mobile-menu"
            role="navigation"
            aria-label="Mobiel navigatiemenu"
            className={`fixed top-0 right-0 h-full w-80 bg-geel shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <a
                href="#programma"
                onClick={closeMenu}
                className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
                aria-label="Ga naar Programma sectie"
              >
                <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Programma</p>
              </a>
              <a
                href="#praktisch"
                onClick={closeMenu}
                className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
                aria-label="Ga naar Praktisch sectie"
              >
                <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Praktisch</p>
              </a>
              <a
                href="#kinderen"
                onClick={closeMenu}
                className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
                aria-label="Ga naar Kinderen sectie"
              >
                <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Kinderen</p>
              </a>
              <a
                href="#carnavalstermen"
                onClick={closeMenu}
                className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
                aria-label="Ga naar Carnavalstermen sectie"
              >
                <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Carnavalstermen</p>
              </a>
              <a
                href="#deelnemen"
                onClick={closeMenu}
                className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
                aria-label="Ga naar Deelnemen sectie"
              >
                <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Deelnemen</p>
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
