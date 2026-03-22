import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28" style={{ background: '#ffffff' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>

        <div className="mb-16 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>Setup</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900">
            Running in minutes,<br />not months.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Step 1 — tall left card */}
          <div className="md:col-span-5 reveal d100">
            <div className="rounded-3xl p-9 h-full" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <StepBadge n={1} color="#05b8b6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Install from the Marketplace</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-7">
                Search "TaraPayments" inside your GoHighLevel account&apos;s Marketplace tab. Click install — no code, no developer required.
              </p>
              {/* GHL card mockup */}
              <div className="rounded-2xl p-4" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: '#092750' }}>
                    <Image src="/logos/highlevel.png" alt="GoHighLevel" width={44} height={44} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 10 }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">GoHighLevel Marketplace</p>
                    <p className="text-xs text-slate-400 mt-0.5">TaraPayments · Philippine Payments</p>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-lg text-xs font-bold shrink-0"
                    style={{ background: '#05b8b6', color: '#092750' }}
                  >
                    Install
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps 2 & 3 stacked right */}
          <div className="md:col-span-7 flex flex-col gap-5">

            <div className="reveal d200">
              <div className="rounded-3xl p-9 flex items-start gap-7" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                <StepBadge n={2} color="#025eb2" className="mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Link your Xendit account</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Connect your existing Xendit Philippines merchant account — or create a free one. TaraPayments routes all
                    transactions directly through Xendit&apos;s BSP-regulated infrastructure. No new bank accounts required.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal d300">
              <div className="rounded-3xl p-9 flex items-start gap-7" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <StepBadge n={3} color="#16a34a" className="mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Add to your funnels and collect</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Select TaraPayments as your payment provider in any GHL funnel, form, or order page. Customers instantly see
                    all Philippine payment options at checkout — GCash, cards, QRPH, and more.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function StepBadge({ n, color, className = '' }: { n: number; color: string; className?: string }) {
  return (
    <div
      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg text-white mb-7 shrink-0 ${className}`}
      style={{ background: color }}
    >
      {n}
    </div>
  )
}
