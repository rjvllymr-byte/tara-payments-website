export default function CTASection() {
  return (
    <section
      className="py-28 relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #05b8b6 0%, #025eb2 100%)' }}
    >
      {/* Soft radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(255,255,255,.12) 0%, transparent 55%)' }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto px-6 reveal relative" style={{ maxWidth: 1320 }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,.7)' }}>
          Integrate Xendit Now!
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', fontWeight: 900 }}
        >
          Tara na.<br />
          <span style={{ color: 'rgba(255,255,255,.85)' }}>Start collecting.</span>
        </h2>
        <p
          className="text-base leading-relaxed mb-10 mx-auto"
          style={{ color: 'rgba(255,255,255,.75)', maxWidth: '44ch' }}
        >
          Install TaraPayments from the CRM Marketplace and accept your first Philippine payment today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold transition-all hover:opacity-90 active:scale-95"
            style={{
              background: 'white',
              color: '#025eb2',
              fontSize: '0.95rem',
              padding: '16px 32px',
              borderRadius: 16,
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v11M4 9l5 5 5-5" stroke="#025eb2" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Install on Your CRM — $39/mo
          </a>
        </div>
        <p className="mt-5 text-xs" style={{ color: 'rgba(255,255,255,.5)' }}>
          No setup fee · No contract · Cancel anytime
        </p>
      </div>
    </section>
  )
}
