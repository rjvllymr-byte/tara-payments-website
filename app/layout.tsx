import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TaraPayments — Philippine Payments for GoHighLevel',
  description:
    'Accept GCash, Maya, QRPH, credit cards, and every major Philippine payment method directly inside GoHighLevel. Built for Filipino agencies and coaches.',
  keywords: [
    'GoHighLevel Philippine payments',
    'GCash payment gateway',
    'Maya payment gateway',
    'QRPH',
    'Philippines payment gateway',
    'GHL Philippines',
    'Xendit GoHighLevel',
  ],
  openGraph: {
    title: 'TaraPayments — Philippine Payments for GoHighLevel',
    description:
      'The only payment gateway built for Filipino GHL users. Accept GCash, Maya, QRPH, cards, and more inside your funnels.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-white text-slate-900 font-sans">{children}</body>
    </html>
  )
}
