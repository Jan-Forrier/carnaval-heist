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
