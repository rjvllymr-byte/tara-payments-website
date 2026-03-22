import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeTrustBar from '@/components/MarqueeTrustBar'
import PaymentMethods from '@/components/PaymentMethods'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import WhyTaraPayments from '@/components/WhyTaraPayments'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollObserver from '@/components/ScrollObserver'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://payments.taraai.ph/#website',
      url: 'https://payments.taraai.ph',
      name: 'TaraPayments',
      description: 'Xendit GoHighLevel integration for Philippine payments',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://payments.taraai.ph/#app',
      name: 'TaraPayments',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'TaraPayments is the leading Xendit GoHighLevel integration that lets Philippine businesses accept GCash, Maya, QRPH, credit cards, and more inside GoHighLevel funnels.',
      url: 'https://payments.taraai.ph',
      offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'USD',
        billingIncrement: 'P1M',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TaraPayments',
        url: 'https://payments.taraai.ph',
        logo: {
          '@type': 'ImageObject',
          url: 'https://payments.taraai.ph/tarapaymentslogo.png',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://payments.taraai.ph/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is TaraPayments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TaraPayments is a Xendit GoHighLevel integration that enables Philippine businesses to accept GCash, Maya, QRPH, credit cards, and other local payment methods directly inside GoHighLevel.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the Xendit GoHighLevel integration work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TaraPayments connects your Xendit merchant account to GoHighLevel, routing payments through Xendit\'s BSP-regulated infrastructure and triggering GHL automations on successful transactions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which Philippine payment methods are supported?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TaraPayments supports GCash, Maya, ShopeePay, GrabPay, QRPH, credit and debit cards, direct debit, over-the-counter payments, and Billease Buy Now Pay Later.',
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollObserver />
      <Nav />
      <main>
        <Hero />
        <MarqueeTrustBar />
        <PaymentMethods />
        <Pricing />
        <HowItWorks />
        <WhyTaraPayments />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
