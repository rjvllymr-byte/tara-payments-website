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

export default function Home() {
  return (
    <>
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
