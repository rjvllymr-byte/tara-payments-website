'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#payment-methods', label: 'Payment Methods' },
  { href: '#pricing',         label: 'Pricing' },
  { href: '#how-it-works',    label: 'How It Works' },
  { href: '#faq',             label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { padding: 0 } : { padding: '16px 24px 0' }}
    >
      <nav
        className="mx-auto transition-all duration-300"
        style={scrolled ? {
          maxWidth: '100%',
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 0,
          border: 'none',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 2px 16px rgba(9,39,80,.08)',
        } : {
          maxWidth: 1280,
          background: 'white',
          borderRadius: 16,
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 12px rgba(9,39,80,.06)',
        }}
      >
        <div
          className="flex items-center gap-6 transition-all duration-300"
          style={scrolled
            ? { maxWidth: 1280, margin: '0 auto', padding: '10px 24px' }
            : { padding: '10px 24px' }
          }
        >

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/tarapaymentslogo.png"
              alt="TaraPayments"
              width={220}
              height={63}
              style={{ height: 72, width: 'auto' }}
              priority
            />
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="text-sm font-medium transition-colors duration-200 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
                style={{ color: '#64748b', padding: '7px 14px', whiteSpace: 'nowrap' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: Log in + CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#pricing"
              onClick={(e) => scrollTo(e, '#pricing')}
              className="text-sm font-bold transition-opacity hover:opacity-90 active:scale-95"
              style={{
                background: '#05b8b6',
                color: 'white',
                padding: '9px 20px',
                borderRadius: 10,
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Get Started — $39/mo
            </a>
          </div>

        </div>
      </nav>
    </div>
  )
}
