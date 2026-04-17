const benefits = [
  {
    title: 'BSP-Regulated Infrastructure',
    body: "Built on Xendit's Bangko Sentral ng Pilipinas regulated infrastructure. Your transactions are compliant, auditable, and protected.",
    icon: <ShieldIcon />,
    border: 'right bottom',
  },
  {
    title: 'CRM Workflow Triggers',
    body: 'Every successful payment fires a webhook to your CRM in real time — tagging contacts, enrolling in courses, or kicking off onboarding sequences automatically.',
    icon: <TriggerIcon />,
    border: 'right bottom',
  },
  {
    title: 'Same-Day Activation',
    body: 'No developer required. Install, link your Xendit account, and you are accepting payments the same day. Setup takes under 10 minutes.',
    icon: <ClockIcon />,
    border: 'bottom',
  },
  {
    title: 'Peso-First Checkout',
    body: 'Customers see ₱ peso pricing and familiar Filipino payment icons — no USD confusion, no currency conversion friction at checkout.',
    icon: <CardIcon />,
    border: 'right',
  },
  {
    title: 'Failed Payment Recovery',
    body: 'Automatic retry logic and payment-link re-sends via CRM SMS or email when a transaction does not complete on the first attempt.',
    icon: <RetryIcon />,
    border: 'right',
  },
  {
    title: 'Dedicated Support Team',
    body: 'Support from a team that understands Philippine banking nuances, local payment flows, and BSP regulations — in your timezone.',
    icon: <PersonIcon />,
    border: '',
  },
]

export default function WhyTaraPayments() {
  return (
    <section className="py-28" style={{ background: '#f0fbfb' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>

        <div className="mb-16 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>
            Why TaraPayments
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900">
            Built for Filipino<br />CRM users and businesses.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ border: '1px solid #e2e8f0', borderRadius: 24, overflow: 'hidden', background: 'white' }}
        >
          {benefits.map(({ title, body, icon, border }, i) => (
            <div
              key={title}
              className="p-8 reveal"
              style={{
                borderRight: border.includes('right') ? '1px solid #f1f5f9' : undefined,
                borderBottom: border.includes('bottom') ? '1px solid #f1f5f9' : undefined,
                transitionDelay: `${(i % 3) * 0.1}s`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(5,184,182,.1)' }}
              >
                {icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Icons ───────────────────────────────────── */
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 6.5v5.5c0 3.3 3 6 7 7 4-1 7-3.7 7-7V6.5L10 2z" stroke="#05b8b6" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
function TriggerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h14M10 3l7 7-7 7" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 6l-2 4 2 4" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#05b8b6" strokeWidth="1.5" />
      <path d="M10 6.5v4l2.5 2.5" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function CardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="12" rx="2" stroke="#05b8b6" strokeWidth="1.5" />
      <path d="M2 8.5h16M6.5 12.5h3M12 12.5h3.5" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function RetryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 10l4 4 8-8" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="8.5" stroke="#05b8b6" strokeWidth="1.5" strokeDasharray="2 3" />
    </svg>
  )
}
function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3" stroke="#05b8b6" strokeWidth="1.5" />
      <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#05b8b6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
