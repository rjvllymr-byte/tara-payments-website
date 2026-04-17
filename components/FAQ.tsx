const faqs = [
  {
    q: 'Do I need a Xendit account to use TaraPayments?',
    a: "Yes. TaraPayments is built on Xendit's Philippine payment infrastructure. You need a verified Xendit Philippines merchant account — signing up is free, and you only pay when transactions succeed.",
  },
  {
    q: 'Is TaraPayments officially listed on the CRM Marketplace?',
    a: 'Yes. TaraPayments is a verified app in the CRM Marketplace. Search "TaraPayments" inside your CRM account to install it — no external redirects, no manual configuration.',
  },
  {
    q: 'How does payment triggering work with CRM automations?',
    a: 'Every successful payment fires a real-time webhook into your CRM, which you can use to trigger any automation — tag a contact, enroll in a course, send a receipt email, start an onboarding sequence, or update a pipeline stage.',
  },
  {
    q: 'What currency do customers pay in?',
    a: 'All checkout transactions are in Philippine Peso (₱ PHP). Settlements go directly to your Philippine bank account via Xendit. The $39/month subscription is charged in USD through your CRM.',
  },
  {
    q: 'Are there transaction volume limits?',
    a: 'TaraPayments imposes no volume caps. Standard Xendit limits apply based on your merchant verification tier. Full verification typically unlocks higher limits within 3–5 business days.',
  },
  {
    q: 'Does TaraPayments work with CRM sub-accounts?',
    a: 'Yes. Agency owners can install TaraPayments at the agency level and configure it per sub-account. Each sub-account can link its own Xendit credentials for separate settlements.',
  },
  {
    q: 'How do you handle my API keys, are they safe?',
    a: 'Yes. Your Xendit API keys are encrypted at rest and never exposed to the client or logged. TaraPayments uses server-side key handling exclusively — your credentials are only used to authenticate requests directly with Xendit\'s infrastructure and are never shared with third parties.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-28" style={{ background: '#ffffff' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left label */}
          <div className="lg:col-span-4 reveal">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>FAQ</p>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 leading-none mb-5">
              Common<br />questions.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Did not find your answer? Our team responds within one business day.
            </p>
            <a
              href="mailto:support@payments.taraai.ph"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#025eb2' }}
            >
              Contact support
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="#025eb2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* FAQ items */}
          <div className="lg:col-span-8" style={{ borderTop: '1px solid #f1f5f9' }}>
            {faqs.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group reveal d${(i % 6 + 1) * 100}`}
                style={{ borderBottom: '1px solid #f1f5f9' }}
              >
                <summary className="flex items-center justify-between py-6 gap-4 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900">{q}</span>
                  <svg
                    className="faq-chevron shrink-0 text-slate-400"
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                  >
                    <path d="M5 7l5 5 5-5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="text-sm text-slate-500 leading-relaxed pb-6" style={{ maxWidth: '58ch' }}>{a}</p>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
