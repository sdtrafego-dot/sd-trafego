import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { MethodSection } from '@/components/method-section'
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
        <TimelineSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
