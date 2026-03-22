import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TaraPayments — Xendit GoHighLevel Integration for Philippine Payments',
  description:
    'The #1 Xendit GoHighLevel integration for the Philippines. Accept GCash, Maya, QRPH, credit cards, and every major Philippine payment method directly inside GoHighLevel. Built for Filipino agencies and coaches.',
  keywords: [
    'xendit gohighlevel integration',
    'Xendit GoHighLevel',
    'GoHighLevel Philippine payments',
    'GCash payment gateway',
    'Maya payment gateway',
    'QRPH',
    'Philippines payment gateway',
    'GHL Philippines',
    'xendit integration philippines',
    'gohighlevel payments philippines',
    'GCash GoHighLevel',
    'Philippine payment gateway GoHighLevel',
  ],
  metadataBase: new URL('https://payments.taraai.ph'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TaraPayments — Xendit GoHighLevel Integration for Philippine Payments',
    description:
      'The #1 Xendit GoHighLevel integration. Accept GCash, Maya, QRPH, cards, and more inside your funnels. Built for Filipino agencies and coaches.',
    type: 'website',
    url: 'https://payments.taraai.ph',
    siteName: 'TaraPayments',
    images: [
      {
        url: '/tara-payments.png',
        width: 1200,
        height: 630,
        alt: 'TaraPayments — Xendit GoHighLevel Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaraPayments — Xendit GoHighLevel Integration for Philippine Payments',
    description:
      'The #1 Xendit GoHighLevel integration. Accept GCash, Maya, QRPH, cards, and more inside your funnels.',
    images: ['/tara-payments.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-white text-slate-900 font-sans">{children}</body>
    </html>
  )
}
