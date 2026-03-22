import Image from 'next/image'

const items = [
  { label: 'GCash',            src: '/logos/gcash.png',                  w: 72,  h: 18 },
  { label: 'Maya',             src: '/logos/maya.png',                   w: 56,  h: 18 },
  { label: 'ShopeePay',        src: '/logos/shopeepay.png',              w: 80,  h: 18 },
  { label: 'GrabPay',          src: '/logos/grabpay.png',                w: 76,  h: 18 },
  { label: 'QRPH',             src: '/logos/qrph.png',                   w: 56,  h: 18 },
  { label: 'Visa',             src: '/logos/visa.png',                   w: 56,  h: 20 },
  { label: 'Mastercard',       src: '/logos/mastercard.png',             w: 44,  h: 28 },
  { label: 'JCB',              src: '/logos/jcb.png',                    w: 36,  h: 28 },
  { label: 'BPI',              src: '/logos/bpi.png',                    w: 52,  h: 18 },
  { label: 'RCBC',             src: '/logos/rcbc.png',                   w: 52,  h: 18 },
  { label: 'UnionBank',        src: '/logos/unionbank.png',              w: 80,  h: 18 },
  { label: 'Chinabank',        src: '/logos/chinabank.png',              w: 80,  h: 18 },
  { label: 'Cebuana Lhuillier',src: '/logos/cebuana-lhuillier.png',     w: 88,  h: 18 },
  { label: 'LBC',              src: '/logos/lbc.png',                    w: 44,  h: 18 },
  { label: 'Billease',         src: '/logos/billease.png',               w: 72,  h: 18 },
]

export default function MarqueeTrustBar() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden"
      style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '18px 0',
      }}
    >
      <div className="marquee-track flex items-center gap-10 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map(({ label, src, w, h }, i) => (
          <div key={i} className="flex items-center justify-center px-3 py-1.5 rounded-xl shrink-0" style={{ background: 'white', border: '1px solid #e2e8f0', minWidth: 80 }}>
            <Image
              src={src}
              alt={label}
              width={w}
              height={h}
              style={{ height: h, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
