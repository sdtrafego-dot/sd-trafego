import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { MethodSection } from '@/components/method-section'
import { WebShowcaseSection } from '@/components/web-showcase-section'
import { TimelineSection } from '@/components/timeline-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <div className="border-b border-border/80 bg-card/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-2.5 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/40 bg-primary/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
              Novo • Full-Stack Acquisition
            </span>
            <span className="text-muted-foreground">
              Agora também criamos <strong className="text-foreground">Landing Pages &amp; Plataformas Web</strong> com{' '}
              <strong className="text-primary">Pix Direto (Custo Zero) ou Mercado Pago</strong> +{' '}
              <strong className="text-foreground">Google &amp; IA do Google</strong>.
            </span>
          </div>
          <a href="#infraestrutura-web" className="font-bold text-primary hover:underline">
            Ver como funciona →
          </a>
        </div>
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <WebShowcaseSection />
        <TimelineSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}