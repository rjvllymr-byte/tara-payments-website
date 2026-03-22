const features = [
  'All Philippine payment methods',
  'Native GoHighLevel integration',
  'Funnel Checkout Pages',
  'Invoice Generation',
  'Payment Links for Easy Transactions',
  'Supports One-Time and Recurring Payments',
  'Automatic GHL workflow triggers',
  'GHL contact tagging on payment',
  'Real-time transaction dashboard',
  'Detailed transaction reports & exports',
  'Payment receipts & failed-payment retry',
  'Instant payment confirmation emails',
  'One-click refunds',
  'Custom Branding',
  'Sub-account management',
  'Priority support',
  'No transaction volume caps',
]

type RateRow = { label: string; rate: string; note?: string }
type RateGroup = { category: string; color: string; rows: RateRow[] }

const rateGroups: RateGroup[] = [
  {
    category: 'E-Wallets',
    color: '#05b8b6',
    rows: [
      { label: 'GCash',      rate: '2.3%' },
      { label: 'GrabPay',   rate: '2.0%' },
      { label: 'ShopeePay', rate: '2.0%' },
      { label: 'Maya',      rate: '1.8%' },
    ],
  },
  {
    category: 'Credit & Debit Cards',
    color: '#025eb2',
    rows: [
      { label: 'Local cards', rate: '3.2% + ₱10' },
    ],
  },
  {
    category: 'QR Code',
    color: '#7c3aed',
    rows: [
      { label: 'QRPH', rate: '1.4% or ₱15', note: 'Whichever is higher' },
    ],
  },
  {
    category: 'Direct Debit',
    color: '#025eb2',
    rows: [
      { label: 'BPI · UnionBank · RCBC · Chinabank', rate: '1% or ₱15', note: 'Whichever is higher' },
    ],
  },
  {
    category: 'Over-the-Counter',
    color: '#c2410c',
    rows: [
      { label: 'Cebuana · LBC', rate: '₱25 flat' },
    ],
  },
  {
    category: 'Buy Now Pay Later',
    color: '#16a34a',
    rows: [
      { label: 'Billease', rate: '1.5%' },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28" style={{ background: '#f8fafc' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900 mb-5">
            One plan.<br />All payment methods.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed" style={{ maxWidth: '50ch' }}>
            A flat monthly subscription gives you every payment channel. Transaction fees are Xendit's published rates — you only pay when payments succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Plan card ── */}
          <div className="lg:col-span-4 reveal d100">
            <div
              className="rounded-3xl p-9 relative overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #05b8b6 0%, #025eb2 100%)', border: 'none' }}
            >
              {/* Glow blob */}
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: 220, height: 220,
                  background: 'radial-gradient(circle, rgba(5,184,182,.1) 0%, transparent 70%)',
                  transform: 'translate(30%,-30%)',
                }}
              />

              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
                style={{ background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)' }}
              >
                <span className="text-xs font-bold text-white">TaraPayments Pro</span>
              </div>

              <div className="mb-9">
                <div className="flex items-start gap-1">
                  <span className="text-xl font-bold text-white mt-2">$</span>
                  <span className="rate font-black text-white" style={{ fontSize: '4.5rem', lineHeight: 1, letterSpacing: '-.04em' }}>
                    39
                  </span>
                </div>
                <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,.4)' }}>per month, billed monthly</p>
              </div>

              <ul className="flex flex-col gap-3.5 mb-9">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,.2)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-white">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block w-full text-center font-bold text-sm transition-opacity hover:opacity-90 active:scale-95"
                style={{
                  background: 'white',
                  color: '#025eb2',
                  padding: '16px 0',
                  borderRadius: 14,
                  textDecoration: 'none',
                }}
              >
                Install from GHL Marketplace
              </a>
              <p className="text-xs text-center mt-3" style={{ color: 'rgba(255,255,255,.3)' }}>
                Cancel anytime · No long-term contracts
              </p>
            </div>
          </div>

          {/* ── Rates table ── */}
          <div className="lg:col-span-8 reveal d200">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(9,39,80,.07)' }}
            >
              <div className="px-8 py-6" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <h3 className="text-lg font-bold text-slate-900">Transaction Fees</h3>
                <p className="text-sm text-slate-400 mt-1">Per successful payment only. Failed transactions are never charged.</p>
              </div>

              {rateGroups.map(({ category, color, rows }, gi) => (
                <div key={category} style={gi > 0 ? { borderTop: '1px solid #f1f5f9' } : {}}>
                  {/* Category header */}
                  <div className="px-8 py-3 flex items-center gap-2.5" style={{ background: '#f8fafc' }}>
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{category}</span>
                  </div>
                  {/* Rate rows */}
                  {rows.map(({ label, rate, note }, ri) => (
                    <div
                      key={label}
                      className="px-8 py-4 flex items-center justify-between"
                      style={ri < rows.length - 1 ? { borderBottom: '1px solid #f8fafc' } : {}}
                    >
                      <p className="text-sm text-slate-600 pr-4">{label}</p>
                      <div className="text-right shrink-0">
                        <span className="rate font-black text-base" style={{ color: '#092750' }}>{rate}</span>
                        {note && <p className="text-xs text-slate-400 mt-0.5">{note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <div className="px-8 py-4 flex items-start gap-2.5" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="#94a3b8" strokeWidth="1.1" />
                  <path d="M7 4.5v3.5M7 10v.5" stroke="#94a3b8" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rates are Xendit&apos;s published standard pricing — powered by their BSP-regulated infrastructure. Volume discounts may apply.{' '}
                  <a
                    href="https://www.xendit.co/en-ph/pricing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#025eb2', textDecoration: 'underline' }}
                  >
                    Verify current rates at xendit.co
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
