import type { Metadata } from 'next'
import { Londrina_Solid, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

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
  title: 'Heist viert Carnaval',
  description: 'Heist is het kloppende carnavalscentrum van Knokke-Heist',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${londrina.variable} ${hanken.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
