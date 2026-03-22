import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — TaraPayments',
  description: 'Terms and conditions governing the use of TaraPayments.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen" style={{ background: '#f8fafc' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #05b8b6 0%, #025eb2 100%)' }}>
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 860 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8"
            style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,.6)' }}>Legal</p>
          <h1 className="text-4xl font-black tracking-tighter text-white mb-3">Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '0.875rem' }}>Last updated: March 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-16" style={{ maxWidth: 860 }}>
        <div
          className="rounded-3xl p-10"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <Section title="1. Acceptance of terms">
            <p>By installing, accessing, or using TaraPayments ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms constitute a legally binding agreement between you ("User", "you") and TaraPayments ("we", "us", "our").</p>
          </Section>

          <Section title="2. Description of service">
            <p>TaraPayments is a GoHighLevel Marketplace application that enables Philippine-based businesses to accept local payment methods — including GCash, Maya, ShopeePay, GrabPay, QRPH, credit and debit cards, direct debit, over-the-counter payments, and Billease Buy Now Pay Later — through your GoHighLevel funnels, order pages, and forms.</p>
            <p>TaraPayments is powered by Xendit's BSP-regulated payment infrastructure. By using TaraPayments, you also agree to Xendit's applicable terms of service and are responsible for maintaining a valid, verified Xendit Philippines merchant account.</p>
          </Section>

          <Section title="3. Eligibility">
            <p>To use TaraPayments you must:</p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Have a valid GoHighLevel account</li>
              <li>Have a verified Xendit Philippines merchant account</li>
              <li>Be operating a lawful business in the Philippines or serving Philippine customers</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
          </Section>

          <Section title="4. Subscription and billing">
            <p>TaraPayments is offered at <strong>$39 USD per month</strong>, billed monthly through your GoHighLevel account. The following terms apply:</p>
            <ul>
              <li>Subscriptions begin on the date of installation and renew automatically each month</li>
              <li>You may cancel at any time; cancellation takes effect at the end of the current billing period</li>
              <li>No refunds are issued for partial months or unused subscription periods</li>
              <li>Transaction fees are separate from the subscription and are charged directly by Xendit per successful transaction</li>
              <li>We reserve the right to adjust pricing with 30 days' written notice</li>
            </ul>
          </Section>

          <Section title="5. Payment processing">
            <p>All payment transactions are processed by Xendit, a BSP-licensed payment service provider. TaraPayments acts as the integration layer between GoHighLevel and Xendit. Accordingly:</p>
            <ul>
              <li>Transaction fees are governed by Xendit's published rates and your Xendit merchant agreement</li>
              <li>Settlements are made directly to your registered bank account by Xendit</li>
              <li>TaraPayments does not hold, store, or process cardholder data or funds</li>
              <li>Dispute resolution for individual transactions is handled through Xendit's merchant support</li>
              <li>You are solely responsible for ensuring your use of the Service complies with BSP regulations</li>
            </ul>
          </Section>

          <Section title="6. Acceptable use">
            <p>You agree not to use TaraPayments to process payments for:</p>
            <ul>
              <li>Illegal goods or services under Philippine law</li>
              <li>Gambling, adult content, or firearms without appropriate licenses</li>
              <li>Pyramid schemes, Ponzi schemes, or fraudulent activities</li>
              <li>Any business or activity prohibited by Xendit's merchant terms</li>
            </ul>
            <p>We reserve the right to suspend or terminate your access immediately if we determine your use violates these restrictions.</p>
          </Section>

          <Section title="7. API keys and security">
            <p>You are responsible for the security of your Xendit API keys provided to TaraPayments. You must:</p>
            <ul>
              <li>Keep your API credentials confidential and not share them with unauthorized parties</li>
              <li>Notify us immediately at <a href="mailto:support@payments.taraai.ph" style={{ color: '#025eb2' }}>support@payments.taraai.ph</a> if you suspect unauthorized access</li>
              <li>Rotate your Xendit API keys promptly if you believe they have been compromised</li>
            </ul>
            <p>TaraPayments encrypts all stored API keys at rest. We will never request your API keys via email, chat, or phone.</p>
          </Section>

          <Section title="8. Intellectual property">
            <p>All content, branding, software, and materials associated with TaraPayments are the property of TaraPayments and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.</p>
            <p>GoHighLevel and Xendit are trademarks of their respective owners. TaraPayments is not affiliated with or endorsed by GoHighLevel or Xendit beyond the authorized integrations described herein.</p>
          </Section>

          <Section title="9. Limitation of liability">
            <p>To the maximum extent permitted by applicable law, TaraPayments shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of revenue, profits, or business opportunities</li>
              <li>Failures, delays, or errors caused by Xendit, GoHighLevel, or third-party payment networks</li>
              <li>Unauthorized access to your account resulting from your failure to maintain credential security</li>
            </ul>
            <p>Our total aggregate liability to you for any claims arising out of or related to these Terms shall not exceed the amount you paid to us in the three (3) months preceding the claim.</p>
          </Section>

          <Section title="10. Disclaimer of warranties">
            <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the Service is at your sole risk.</p>
          </Section>

          <Section title="11. Termination">
            <p>Either party may terminate these Terms at any time. We may suspend or terminate your access without notice if you violate these Terms, engage in fraudulent activity, or if required by law or regulation. Upon termination, your right to use the Service ceases immediately and you remain liable for all outstanding fees.</p>
          </Section>

          <Section title="12. Governing law">
            <p>These Terms are governed by the laws of the Republic of the Philippines. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Metro Manila, Philippines.</p>
          </Section>

          <Section title="13. Changes to these terms">
            <p>We may modify these Terms at any time. We will provide at least 14 days' notice of material changes via email or in-app notification. Continued use of the Service after the effective date constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="14. Contact us" last>
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-4 p-5 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <p className="font-semibold text-slate-900">TaraPayments</p>
              <p>Email: <a href="mailto:support@payments.taraai.ph" style={{ color: '#025eb2' }}>support@payments.taraai.ph</a></p>
              <p>Website: <a href="https://taraai.ph" style={{ color: '#025eb2' }}>taraai.ph</a></p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children, last = false }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div
      className="mb-10 pb-10"
      style={last ? {} : { borderBottom: '1px solid #f1f5f9' }}
    >
      <h2 className="text-xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-600 flex flex-col gap-3 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-teal-400">
        {children}
      </div>
    </div>
  )
}
