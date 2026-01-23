import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookieverklaring',
  description: 'Bekijk welke cookies we gebruiken op de Heist viert Carnaval website en beheer uw cookievoorkeuren.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookieverklaring | Heist viert Carnaval',
    description: 'Bekijk welke cookies we gebruiken op de Heist viert Carnaval website en beheer uw cookievoorkeuren.',
    type: 'website',
  },
}

export default function CookieVerklaringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
