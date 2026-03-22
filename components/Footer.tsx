import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { href: '#payment-methods', label: 'Payment Methods' },
  { href: '#pricing',         label: 'Pricing' },
  { href: '#how-it-works',    label: 'How It Works' },
  { href: '#faq',             label: 'FAQ' },
  { href: 'mailto:support@payments.taraai.ph', label: 'Support' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms of Service' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="mx-auto px-6 py-14" style={{ maxWidth: 1320 }}>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/tarapaymentslogo.png"
                alt="TaraPayments"
                width={220}
                height={63}
                style={{ height: 160, width: 'auto' }}
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400" style={{ maxWidth: '36ch' }}>
              Philippine payment gateway for GoHighLevel. Powered by Xendit&apos;s BSP-regulated infrastructure.
            </p>
            <div className="mt-4 text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
              <p className="font-semibold text-slate-500">Tara AI Solutions Co.</p>
              <p>3rd Floor Unit F Westgate Tower</p>
              <p>1709 Investment Dr.</p>
              <p>Madrigal Business Park,</p>
              <p>Alabang Muntinlupa City, 1780</p>
              <p>NCR, Philippines</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs transition-colors hover:text-slate-900"
                style={{ color: '#94a3b8', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #e2e8f0' }}
        >
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TaraPayments. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs transition-colors hover:text-slate-600"
                style={{ color: '#94a3b8', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
