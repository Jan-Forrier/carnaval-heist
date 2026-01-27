'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HarlekijnSticker } from './icons/HarlekijnSticker'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(80)

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
        // Update header height
        setHeaderHeight(header.getBoundingClientRect().height)
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

  // Close menu on Escape key and prevent body scroll when menu is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
    <header className="bg-geel flex gap-4 lg:gap-16 items-center justify-between px-4 lg:px-16 py-0 sticky top-0 z-50 w-full shadow-md">
      <Link 
        href="/"
        className="flex gap-2 items-center relative flex-shrink-0 hover:opacity-90 transition-opacity cursor-pointer"
        aria-label="Ga naar homepage"
      >
        <div className="relative shrink-0 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] aspect-square group">
          <HarlekijnSticker className="w-full h-full transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </div>
        <p className="font-display text-black text-center uppercase whitespace-nowrap text-fluid-header-title">
          Heist viert Carnaval
        </p>
      </Link>
      
      {/* Desktop Navigation */}
      <nav 
        className={`${isMobile ? 'hidden' : 'flex'} flex-1 flex-row items-center justify-end`}
        role="navigation"
        aria-label="Hoofdnavigatie"
      >
        <div className="flex h-full items-center gap-4">
          <Link 
            href="/#programma"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('programma')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Programma sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Programma</p>
          </Link>
          <Link 
            href="/#stoeten"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('stoeten')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Stoeten sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Stoeten</p>
          </Link>
          <Link 
            href="/#praktisch"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('praktisch')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Praktisch sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Praktisch</p>
          </Link>
          <Link 
            href="/#kinderen"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('kinderen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Kinderen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Kinderen</p>
          </Link>
          <Link 
            href="/#carnavalstermen"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('carnavalstermen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Carnavalstermen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Carnavalstermen</p>
          </Link>
          <Link 
            href="/#deelnemen"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('deelnemen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="nav-link flex h-full items-center py-2 relative focus:outline-none focus-visible:after:scale-x-100"
            aria-label="Ga naar Deelnemen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px] text-center">Deelnemen</p>
          </Link>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 relative z-50 focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-offset-2 rounded flex-shrink-0"
          aria-label={isMenuOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#28271b] transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      )}
    </header>
    
    {/* Mobile Menu - Outside header, slides down from top */}
    {isMobile && (
      <nav
        id="mobile-menu"
        role="navigation"
        aria-label="Mobiel navigatiemenu"
        style={{ top: `${headerHeight}px` }}
        className={`fixed left-0 right-0 w-full bg-geel shadow-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col pt-6 pb-8 px-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link
            href="/#programma"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('programma')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Programma sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Programma</p>
          </Link>
          <Link
            href="/#stoeten"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('stoeten')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Stoeten sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Stoeten</p>
          </Link>
          <Link
            href="/#praktisch"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('praktisch')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Praktisch sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Praktisch</p>
          </Link>
          <Link
            href="/#kinderen"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('kinderen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Kinderen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Kinderen</p>
          </Link>
          <Link
            href="/#carnavalstermen"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('carnavalstermen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Carnavalstermen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Carnavalstermen</p>
          </Link>
          <Link
            href="/#deelnemen"
            onClick={(e) => {
              closeMenu()
              if (isHomePage) {
                e.preventDefault()
                const element = document.getElementById('deelnemen')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="py-4 border-b border-[rgba(73,91,110,0.2)] hover:bg-licht-geel transition-colors focus:outline-none focus:ring-2 focus:ring-[#28271b] focus:ring-inset"
            aria-label="Ga naar Deelnemen sectie"
          >
            <p className="font-body font-normal leading-normal text-[#28271b] text-[20px]">Deelnemen</p>
          </Link>
        </div>
      </nav>
    )}
    </>
  )
}
