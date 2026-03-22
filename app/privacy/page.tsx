import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — TaraPayments',
  description: 'How TaraPayments collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-black tracking-tighter text-white mb-3">Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '0.875rem' }}>Last updated: March 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-16" style={{ maxWidth: 860 }}>
        <div
          className="rounded-3xl p-10"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <Section title="1. Introduction">
            <p>TaraPayments ("we", "our", or "us") is a Philippine payment gateway integration built for GoHighLevel users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. Please read this policy carefully. If you disagree with its terms, please discontinue use of the service.</p>
          </Section>

          <Section title="2. Information we collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Account information</strong> — Name, email address, business name, and GoHighLevel account details provided during onboarding.</li>
              <li><strong>Payment credentials</strong> — Your Xendit API keys, which are encrypted at rest and never exposed client-side.</li>
              <li><strong>Transaction data</strong> — Payment amounts, method used, timestamps, and transaction status forwarded from Xendit's infrastructure.</li>
              <li><strong>Usage data</strong> — Log data, IP addresses, browser type, and pages accessed within the TaraPayments dashboard.</li>
              <li><strong>Customer data</strong> — Information about your end customers that passes through payment flows (name, email, phone) as necessary to process transactions.</li>
            </ul>
          </Section>

          <Section title="3. How we use your information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and route payments through Xendit's BSP-regulated infrastructure</li>
              <li>Trigger GoHighLevel automations and workflow events on successful payments</li>
              <li>Send payment receipts and transaction notifications</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Monitor service performance, detect fraud, and ensure security</li>
              <li>Comply with applicable Philippine laws and BSP regulations</li>
              <li>Improve our service through aggregated, anonymized analytics</li>
            </ul>
          </Section>

          <Section title="4. How we share your information">
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li><strong>Xendit</strong> — Our payment infrastructure partner. All transactions are processed through Xendit's BSP-licensed platform. Xendit's own privacy policy governs their data handling.</li>
              <li><strong>GoHighLevel</strong> — Payment events and contact data are transmitted to your GHL account via webhooks per your configuration.</li>
              <li><strong>Service providers</strong> — Third-party vendors who assist with hosting, monitoring, and support, bound by confidentiality agreements.</li>
              <li><strong>Legal authorities</strong> — When required by law, court order, or BSP/government directive.</li>
            </ul>
          </Section>

          <Section title="5. Data security">
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li>Xendit API keys are encrypted at rest using AES-256 encryption</li>
              <li>All data in transit is protected via TLS 1.2 or higher</li>
              <li>Server access is restricted to authorized personnel only</li>
              <li>We do not store full card numbers, CVVs, or raw payment credentials</li>
            </ul>
            <p>No method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
          </Section>

          <Section title="6. Data retention">
            <p>We retain your account and transaction data for as long as your subscription is active and for a period of five (5) years thereafter, as required by Philippine financial regulations. You may request deletion of your personal data by contacting us, subject to our legal retention obligations.</p>
          </Section>

          <Section title="7. Your rights">
            <p>Under applicable Philippine data privacy laws (Republic Act 10173 — Data Privacy Act of 2012), you have the right to:</p>
            <ul>
              <li>Be informed about how your data is processed</li>
              <li>Access a copy of your personal data we hold</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request erasure of your data (subject to legal limitations)</li>
              <li>Object to or restrict certain types of processing</li>
              <li>Lodge a complaint with the National Privacy Commission (NPC)</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:support@payments.taraai.ph" style={{ color: '#025eb2' }}>support@payments.taraai.ph</a>.</p>
          </Section>

          <Section title="8. Cookies and tracking">
            <p>TaraPayments uses essential cookies to maintain session state and authentication. We do not use third-party advertising or tracking cookies. You may disable cookies in your browser settings, though this may affect service functionality.</p>
          </Section>

          <Section title="9. Third-party links">
            <p>Our service may contain links to third-party websites including GoHighLevel and Xendit. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.</p>
          </Section>

          <Section title="10. Children's privacy">
            <p>TaraPayments is a business-to-business service and is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a prominent notice in the dashboard. Continued use of the service after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact us" last>
            <p>For privacy-related questions or requests, contact us at:</p>
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
