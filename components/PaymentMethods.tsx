import Image from 'next/image'

// Static col-span map — prevents Tailwind from purging dynamic class strings
const colsMap: Record<number, string> = {
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  8: 'md:col-span-8',
}

export default function PaymentMethods() {
  return (
    <section id="payment-methods" className="py-28" style={{ background: '#ffffff' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1320 }}>

        {/* Header — left aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>
              Payment Methods
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900 mb-5">
              Every Filipino<br />payment, covered.
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6" style={{ maxWidth: '52ch' }}>
              From GCash to Cebuana, your customers pay how they prefer. One integration gives you
              access to all local Philippine payment channels.
            </p>
            <div
              className="inline-flex items-start gap-3 px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(5,184,182,.08)', border: '1px solid rgba(5,184,182,.2)' }}
            >
              <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="#05b8b6" strokeWidth="1.2" />
                <path d="M8 5v4M8 10.5v.5" stroke="#05b8b6" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <p className="text-sm font-medium" style={{ color: '#047370' }}>
                No extra charges from us — all transaction rates shown are Xendit&apos;s standard published rates, passed directly to you.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* E-Wallets — 8 cols, dark */}
          <BentoCard cols={8} delay="d100" style={{ background: 'linear-gradient(135deg, #05b8b6 0%, #025eb2 100%)', border: 'none' }}>
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: 280, height: 280, background: 'radial-gradient(circle, rgba(5,184,182,.1) 0%, transparent 70%)', transform: 'translate(35%,-35%)' }} />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(5,184,182,.6)' }}>E-Wallets</p>
                <h3 className="text-2xl font-bold text-white leading-tight">GCash, Maya,<br />ShopeePay &amp; GrabPay</h3>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-right">
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,.35)' }}>from</p>
                  <span className="rate text-3xl font-black" style={{ color: '#05b8b6' }}>1.8%</span>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,.35)' }}>per transaction</p>
                </div>
              </div>
            </div>

            {/* Real logos in white pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { src: '/logos/gcash.png', alt: 'GCash', w: 80 },
                { src: '/logos/maya.png', alt: 'Maya', w: 64 },
                { src: '/logos/shopeepay.png', alt: 'ShopeePay', w: 80 },
                { src: '/logos/grabpay.png', alt: 'GrabPay', w: 86 },
              ].map(({ src, alt, w }) => (
                <div key={alt} className="flex items-center justify-center px-3 py-2 rounded-2xl" style={{ background: 'white', minWidth: 100 }}>
                  <Image src={src} alt={alt} width={w} height={28} style={{ height: 22, width: 'auto', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
              {[['GCash','2.3%'],['GrabPay','2.0%'],['ShopeePay','2.0%'],['Maya','1.8%']].map(([name, rate]) => (
                <p key={name} className="text-xs" style={{ color: 'rgba(255,255,255,.35)' }}>
                  {name} <span className="font-bold" style={{ color: 'rgba(255,255,255,.55)' }}>{rate}</span>
                </p>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,.5)' }}>Xendit published rates · inclusive of applicable taxes</p>
          </BentoCard>

          {/* QRPH — 4 cols */}
          <BentoCard cols={4} delay="d200" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#05b8b6' }}>QR Payments</p>
            <div className="mb-5">
              <Image src="/logos/qrph.png" alt="QRPh" width={120} height={40} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8" style={{ maxWidth: '30ch' }}>
              Scan-to-pay from any PH bank or e-wallet. Fully interoperable — no wallet lock-in.
            </p>
            <span className="rate text-4xl font-black" style={{ color: '#025eb2' }}>1.4%</span>
            <p className="text-xs text-slate-400 mt-1">or ₱15 · whichever is higher</p>
          </BentoCard>

          {/* Credit/Debit Cards — 5 cols */}
          <BentoCard cols={5} delay="d300" style={{ background: 'linear-gradient(145deg,#025eb2 0%,#092750 100%)', border: '1px solid rgba(255,255,255,.08)' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(5,184,182,.65)' }}>Cards</p>
            <h3 className="text-2xl font-bold text-white mb-4">Credit &amp; Debit</h3>
            <div className="flex items-center gap-3 mb-6">
              {[
                { src: '/logos/visa.png',       alt: 'Visa',       w: 72 },
                { src: '/logos/mastercard.png', alt: 'Mastercard', w: 56 },
                { src: '/logos/jcb.png',        alt: 'JCB',        w: 48 },
              ].map(({ src, alt, w }) => (
                <div key={alt} className="flex items-center justify-center px-3 py-2 rounded-xl" style={{ background: 'white' }}>
                  <Image src={src} alt={alt} width={w} height={36} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="rate text-3xl font-black text-white">3.2%</span>
              <span className="text-lg font-semibold" style={{ color: 'rgba(255,255,255,.45)' }}>+ ₱10</span>
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>local cards · intl from 4.2% + ₱10</p>
          </BentoCard>

          {/* Direct Debit — 4 cols */}
          <BentoCard cols={4} delay="d400" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#025eb2' }}>Direct Debit</p>
            <h3 className="text-xl font-bold text-slate-900 mb-5">Bank account</h3>

            {/* Bank logos inline */}
            <div className="flex gap-2 mb-6">
              {[
                { src: '/logos/bpi.png', alt: 'BPI', w: 48 },
                { src: '/logos/rcbc.png', alt: 'RCBC', w: 44 },
                { src: '/logos/unionbank.png', alt: 'UnionBank', w: 68 },
                { src: '/logos/chinabank.png', alt: 'Chinabank', w: 56 },
              ].map(({ src, alt, w }) => (
                <div key={alt} className="flex items-center justify-center px-2 py-2 rounded-xl shrink-0" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
                  <Image src={src} alt={alt} width={w} height={20} style={{ height: 18, width: 'auto', objectFit: 'contain' }} />
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="rate text-4xl font-black" style={{ color: '#025eb2' }}>1%</span>
              <span className="text-lg font-medium text-slate-400">or ₱15</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Whichever is higher</p>
          </BentoCard>

          {/* Buy Now Pay Later — 3 cols */}
          <BentoCard cols={3} delay="d500" style={{ background: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #bbf7d0' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#16a34a' }}>Buy Now, Pay Later</p>
            <div className="inline-flex items-center px-3 py-2 rounded-xl mb-5" style={{ background: 'white', border: '1px solid #bbf7d0' }}>
              <Image src="/logos/billease.png" alt="Billease" width={100} height={28} style={{ height: 22, width: 'auto', objectFit: 'contain' }} />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Customers pay in installments. You get paid upfront — zero collection risk.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="rate text-4xl font-black" style={{ color: '#16a34a' }}>1.5%</span>
              <span className="text-lg font-medium text-slate-400">per txn</span>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}

/* ── Reusable bento card ─────────────────────── */
function BentoCard({
  cols, delay, children, style, dark = false,
}: {
  cols: number; delay: string; children: React.ReactNode; style?: React.CSSProperties; dark?: boolean
}) {
  return (
    <div
      className={`${colsMap[cols]} reveal ${delay} rounded-3xl p-9 relative overflow-hidden bento-card ${dark ? 'bento-card-dark' : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}
