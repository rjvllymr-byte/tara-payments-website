import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TaraPayments — Xendit CRM Integration for Philippine Payments',
  description:
    'The #1 Xendit CRM integration for the Philippines. Accept GCash, Maya, QRPH, credit cards, and every major Philippine payment method directly inside your CRM. Built for Filipino agencies and coaches.',
  keywords: [
    'xendit crm integration',
    'Xendit CRM Philippines',
    'CRM Philippine payments',
    'GCash payment gateway',
    'Maya payment gateway',
    'QRPH',
    'Philippines payment gateway',
    'xendit integration philippines',
    'CRM payments philippines',
    'Philippine payment gateway CRM',
  ],
  metadataBase: new URL('https://payments.taraai.ph'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TaraPayments — Xendit CRM Integration for Philippine Payments',
    description:
      'The #1 Xendit CRM integration. Accept GCash, Maya, QRPH, cards, and more inside your funnels. Built for Filipino agencies and coaches.',
    type: 'website',
    url: 'https://payments.taraai.ph',
    siteName: 'TaraPayments',
    images: [
      {
        url: '/tara-payments.png',
        width: 1200,
        height: 630,
        alt: 'TaraPayments — Xendit CRM Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaraPayments — Xendit CRM Integration for Philippine Payments',
    description:
      'The #1 Xendit CRM integration. Accept GCash, Maya, QRPH, cards, and more inside your funnels.',
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
