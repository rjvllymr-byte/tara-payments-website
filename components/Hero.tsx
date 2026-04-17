import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="flex items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #f0fbfb 0%, #ffffff 55%, #eff6ff 100%)', minHeight: '100dvh' }}
    >
      {/* Soft radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 72% 38%, rgba(5,184,182,.12) 0%, transparent 50%), radial-gradient(ellipse at 18% 75%, rgba(2,94,178,.08) 0%, transparent 50%)',
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.4,
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto px-6 pt-28 pb-20 w-full" style={{ maxWidth: 1320 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left copy ── */}
          <div>
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full mb-9 reveal"
              style={{ background: 'rgba(5,184,182,.1)', border: '1px solid rgba(5,184,182,.3)' }}
            >
              <span
                className="pulse-dot relative w-2 h-2 rounded-full shrink-0"
                style={{ background: '#05b8b6', display: 'inline-block' }}
              />
              <span className="text-xs font-semibold" style={{ color: '#05b8b6' }}>
                Now live on the CRM Marketplace
              </span>
            </div>

            <h1
              className="font-black tracking-tighter leading-none text-slate-900 mb-7 reveal d100"
              style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900 }}
            >
              Philippine<br />payments,<br />
              <span style={{ color: '#05b8b6' }}>inside your CRM.</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 reveal d200"
              style={{ color: '#64748b', maxWidth: '52ch' }}
            >
              Meet TaraPayments, a payment gateway built for CRM users in the Philippines. Accept GCash,
              Maya, QRPH, credit cards, and more — right inside your funnels and order pages.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-11 reveal d300">
              {[
                'GCash, Maya, ShopeePay & GrabPay',
                'QRPH, Credit & Debit Cards',
                'Direct Debit — BPI, RCBC, UnionBank & Chinabank',
                'Billease Buy Now Pay Later',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 reveal d400">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 font-bold text-sm transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: '#05b8b6', color: 'white', padding: '14px 28px', borderRadius: 14 }}
              >
                <ArrowRight />
                Install on Your CRM
              </a>
              <a
                href="#payment-methods"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:border-slate-400"
                style={{
                  border: '1px solid #cbd5e1',
                  color: '#475569',
                  padding: '14px 24px',
                  borderRadius: 14,
                }}
              >
                See payment methods
              </a>
            </div>

            <p className="mt-5 text-xs reveal d500" style={{ color: '#94a3b8' }}>
              $39/month · No setup fee · Cancel anytime
            </p>
          </div>

          {/* ── Right: Checkout mockup ── */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full" style={{ maxWidth: 420 }}>

              {/* Browser card */}
              <div
                className="rounded-3xl overflow-hidden reveal d200"
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 32px 64px -16px rgba(5,184,182,.2)',
                }}
              >
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-5 py-3.5" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ background: '#e2e8f0' }} />
                    ))}
                  </div>
                  <div className="flex-1 mx-4">
                    <div
                      className="rounded-md py-1 px-3 text-xs"
                      style={{ background: '#f1f5f9', color: '#94a3b8' }}
                    >
                      checkout.taraai.ph
                    </div>
                  </div>
                </div>

                {/* Payment UI */}
                <div className="p-7">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#94a3b8' }}>
                    Complete Your Order
                  </p>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-slate-900 font-semibold text-sm">Digital Marketing Masterclass</span>
                    <span className="font-black text-lg" style={{ color: '#025eb2' }}>₱4,997</span>
                  </div>
                  <div style={{ borderTop: '1px solid #f1f5f9' }} className="mb-5" />

                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#94a3b8' }}>
                    Select Payment Method
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <MethodBtn label="GCash" logoSrc="/logos/gcash.png"  active />
                    <MethodBtn label="Maya"  logoSrc="/logos/maya.png"         />
                    <CardMethodBtn />
                    <MethodBtn label="QRPH"  logoSrc="/logos/qrph.png"         />
                  </div>

                  {/* Pay button */}
                  <button
                    className="w-full py-3.5 rounded-2xl font-bold text-sm"
                    style={{ background: '#05b8b6', color: 'white', letterSpacing: '-.01em' }}
                  >
                    Pay ₱4,997 with GCash
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-4">
                    <ShieldIcon />
                    <span className="text-xs" style={{ color: '#94a3b8' }}>Secured by TaraPayments</span>
                  </div>
                </div>
              </div>

              {/* Floating: Payment confirmed */}
              <div className="absolute float-a" style={{ top: 56, right: -28, zIndex: 10 }}>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 16px 40px rgba(5,184,182,.18)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(5,184,182,.12)' }}
                  >
                    <CheckSmall />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900" style={{ lineHeight: 1.2 }}>Payment confirmed</p>
                    <p className="text-xs text-slate-400" style={{ lineHeight: 1.2 }}>₱4,997 via GCash</p>
                  </div>
                </div>
              </div>

              {/* Floating: Revenue stats */}
              <div className="absolute float-b" style={{ bottom: 48, left: -32, zIndex: 10 }}>
                <div
                  className="px-4 py-3.5 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 16px 40px rgba(2,94,178,.12)',
                  }}
                >
                  <p className="text-xs mb-1 text-slate-400">Today's revenue</p>
                  <p className="text-xl font-black rate" style={{ color: '#025eb2' }}>₱83,142</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: '#05b8b6' }}>+24.7% vs. yesterday</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Small inline components ─────────────────── */
function CheckCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="9" fill="rgba(5,184,182,.15)" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#05b8b6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path d="M2 8.5h13M8.5 2l6.5 6.5-6.5 6.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1L2 3.5v4c0 2.8 2 4.9 4.5 5.5C9 12.4 11 10.3 11 7.5v-4L6.5 1z" stroke="#cbd5e1" strokeWidth="1.1" />
    </svg>
  )
}

function CheckSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7l3 3 5-5" stroke="#05b8b6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CardMethodBtn() {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
    >
      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md shrink-0" style={{ background: 'white', border: '1px solid #f1f5f9' }}>
        <Image src="/logos/visa.png" alt="Visa" width={28} height={14} style={{ height: 12, width: 'auto', objectFit: 'contain' }} />
        <Image src="/logos/mastercard.png" alt="Mastercard" width={18} height={14} style={{ height: 14, width: 'auto', objectFit: 'contain' }} />
        <Image src="/logos/jcb.png" alt="JCB" width={16} height={14} style={{ height: 14, width: 'auto', objectFit: 'contain' }} />
      </div>
      Card
    </div>
  )
}

function MethodBtn({ label, logoSrc, active = false, logoHeight = 14 }: { label: string; logoSrc: string; active?: boolean; logoHeight?: number }) {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold"
      style={
        active
          ? { background: 'rgba(5,184,182,.1)', border: '1.5px solid #05b8b6', color: '#025eb2' }
          : { background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }
      }
    >
      <div className="shrink-0 flex items-center justify-center rounded-md px-1" style={{ background: 'white', border: '1px solid #f1f5f9', height: logoHeight + 8, minWidth: 32 }}>
        <Image src={logoSrc} alt={label} width={60} height={logoHeight} style={{ height: logoHeight, width: 'auto', objectFit: 'contain' }} />
      </div>
      {label}
    </div>
  )
}
