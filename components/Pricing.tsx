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
    category: 'Buy Now Pay Later',
    color: '#16a34a',
    rows: [
      { label: 'Billease', rate: '1.5%' },
    ],
  },
]

type PlanFeature = string
type Plan = {
  name: string
  price: string
  priceSub: string
  description: string
  features: PlanFeature[]
  cta: string
  ctaHref: string
  highlight: boolean
}

const plans: Plan[] = [
  {
    name: 'TaraPayments Free',
    price: '$0',
    priceSub: 'forever',
    description: 'Get started with Philippine payments inside your CRM — no upfront cost.',
    features: [
      'E-Wallets and Direct Debit',
      'Native CRM integration',
      'Supports One-Time and Recurring Payments',
      'One-click refunds (E-Wallets only)',
    ],
    cta: 'Install Free',
    ctaHref: 'https://marketplace.gohighlevel.com/integration/69d23c194b99ed3612dcfd84/versions/69d23c194b99ed3612dcfd84',
    highlight: false,
  },
  {
    name: 'TaraPayments Pro',
    price: '$39',
    priceSub: '/month',
    description: 'The full TaraPayments suite for growing businesses running on CRM.',
    features: [
      'Everything in Free, and:',
      'Credit Card / Debit Cards, PayLater* payments',
      'Priority support',
      'No transaction volume caps',
      'Custom Branding',
    ],
    cta: 'Get Started',
    ctaHref: 'https://marketplace.gohighlevel.com/integration/69d23c194b99ed3612dcfd84/versions/69d23c194b99ed3612dcfd84',
    highlight: true,
  },
  {
    name: 'TaraPayments Agency Plan',
    price: 'Let\'s talk',
    priceSub: '',
    description: 'Built for agencies managing multiple client sub-accounts at scale.',
    features: [
      'Includes all from Pro',
      'Works with SaaS Configurator',
      'Can Enable Rebilling',
    ],
    cta: 'Talk to Us',
    ctaHref: 'https://api.leadconnectorhq.com/widget/booking/cbnYq671Xb3JFvCfmYMh',
    highlight: false,
  },
]

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28" style={{ background: '#f8fafc' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900 mb-5">
            Simple, transparent<br />pricing.
          </h2>
          <p className="text-base text-slate-500 leading-relaxed" style={{ maxWidth: '50ch' }}>
            Start free and scale up as you grow. Transaction fees are Xendit&apos;s published rates — you only pay when payments succeed.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 reveal d100">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl p-8 relative overflow-hidden flex flex-col"
              style={
                plan.highlight
                  ? { background: 'linear-gradient(145deg, #05b8b6 0%, #025eb2 100%)' }
                  : { background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(9,39,80,.07)' }
              }
            >
              {plan.highlight && (
                <>
                  {/* Glow blob */}
                  <div
                    className="absolute top-0 right-0 pointer-events-none"
                    style={{
                      width: 200, height: 200,
                      background: 'radial-gradient(circle, rgba(5,184,182,.15) 0%, transparent 70%)',
                      transform: 'translate(30%,-30%)',
                    }}
                  />
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 self-start"
                    style={{ background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.3)' }}
                  >
                    <span className="text-xs font-bold text-white">Most Popular</span>
                  </div>
                </>
              )}

              <p
                className="text-sm font-bold mb-4"
                style={{ color: plan.highlight ? 'rgba(255,255,255,.7)' : '#05b8b6' }}
              >
                {plan.name}
              </p>

              <div className="flex items-end gap-1 mb-2">
                <span
                  className="font-black leading-none"
                  style={{
                    fontSize: '2.75rem',
                    letterSpacing: '-.04em',
                    color: plan.highlight ? 'white' : '#092750',
                  }}
                >
                  {plan.price}
                </span>
                {plan.priceSub && (
                  <span
                    className="text-sm font-medium pb-1"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,.6)' : '#94a3b8' }}
                  >
                    {plan.priceSub}
                  </span>
                )}
              </div>

              <p
                className="text-sm leading-relaxed mb-7"
                style={{ color: plan.highlight ? 'rgba(255,255,255,.7)' : '#64748b' }}
              >
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={
                        plan.highlight
                          ? { background: 'rgba(255,255,255,.2)', color: 'white' }
                          : { background: '#f0fdf9', color: '#05b8b6' }
                      }
                    >
                      <CheckIcon />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: plan.highlight ? 'white' : '#475569' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block w-full text-center font-bold text-sm transition-opacity hover:opacity-90 active:scale-95"
                style={
                  plan.highlight
                    ? { background: 'white', color: '#025eb2', padding: '15px 0', borderRadius: 12, textDecoration: 'none' }
                    : { background: 'linear-gradient(135deg, #05b8b6, #025eb2)', color: 'white', padding: '15px 0', borderRadius: 12, textDecoration: 'none' }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Transaction rates table */}
        <div className="reveal d200">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(9,39,80,.07)' }}
          >
            <div className="px-8 py-6" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <h3 className="text-lg font-bold text-slate-900">Transaction Fees</h3>
              <p className="text-sm text-slate-400 mt-1">Per successful payment only. Failed transactions are never charged.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {rateGroups.map(({ category, color, rows }, gi) => (
                <div
                  key={category}
                  style={{ borderRight: gi < rateGroups.length - 1 ? '1px solid #f1f5f9' : undefined }}
                >
                  <div className="px-6 py-3 flex items-center gap-2" style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{category}</span>
                  </div>
                  {rows.map(({ label, rate, note }) => (
                    <div key={label} className="px-6 py-4">
                      <p className="text-sm text-slate-500 mb-1">{label}</p>
                      <span className="font-black text-base" style={{ color: '#092750' }}>{rate}</span>
                      {note && <p className="text-xs text-slate-400 mt-0.5">{note}</p>}
                    </div>
                  ))}
                </div>
              ))}
            </div>

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
          <p className="text-xs text-slate-400 mt-4">
            * PayLater availability subject to Xendit merchant approval.
          </p>
        </div>

      </div>
    </section>
  )
}
