import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { MethodSection } from '@/components/method-section'
import { ProofFunnelSection } from '@/components/proof-funnel-section'
import { WebShowcaseSection } from '@/components/web-showcase-section'
import { TimelineSection } from '@/components/timeline-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <ProofFunnelSection />
        <WebShowcaseSection />
        <TimelineSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}