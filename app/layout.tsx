import type { Metadata } from 'next'
import { Londrina_Solid, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { CookieConsentProvider } from '@/components/cookie-consent/cookie-context'
import CookieBanner from '@/components/cookie-consent/cookie-banner'
import CookiePreferences from '@/components/cookie-consent/cookie-preferences'
import GTMProvider from '@/components/gtm-provider'

const londrina = Londrina_Solid({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-londrina',
})

const hanken = Hanken_Grotesk({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hanken',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://heistcarnaval.be'),
  title: {
    default: 'Heist viert Carnaval',
    template: '%s | Heist viert Carnaval',
  },
  description: 'Heist is het kloppende carnavalscentrum van Knokke-Heist. Vier dagen lang wisselen kleurrijke stoeten, originele kostuums en sfeervolle evenementen elkaar in sneltempo af. Ontdek het volledige programma, praktische info en doe mee aan het carnaval!',
  keywords: ['carnaval', 'Heist', 'Knokke-Heist', 'stoet', 'carnavalstoet', 'verlichte stoet', 'carnavalsfeest', 'België', 'West-Vlaanderen'],
  authors: [{ name: 'Gemeente Knokke-Heist' }],
  creator: 'Gemeente Knokke-Heist',
  publisher: 'Gemeente Knokke-Heist',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: '/',
    siteName: 'Heist viert Carnaval',
    title: 'Heist viert Carnaval',
    description: 'Heist is het kloppende carnavalscentrum van Knokke-Heist. Vier dagen lang wisselen kleurrijke stoeten, originele kostuums en sfeervolle evenementen elkaar in sneltempo af.',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Heist viert Carnaval logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heist viert Carnaval',
    description: 'Heist is het kloppende carnavalscentrum van Knokke-Heist. Ontdek het volledige programma en doe mee!',
    images: ['/icon-512x512.png'],
    creator: '@heistcarnaval',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon-180x180.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${londrina.variable} ${hanken.variable} antialiased`}>
        <CookieConsentProvider>
          {children}
          <CookieBanner />
          <CookiePreferences />
          <GTMProvider />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
