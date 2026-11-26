import { WhatsAppButton } from '@/components/whatsapp-button'
import { WhatsAppIcon } from '@/components/icons'

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-2xl border border-primary/30 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.10),transparent_70%)] bg-card px-6 py-14 text-center md:px-14 md:py-16">
          <h2 id="cta-title" className="mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Pronto para estruturar a aquisição de clientes da sua empresa?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Solicite uma análise rápida da sua presença digital atual e descubra onde estão as maiores
            oportunidades de venda na sua região.
          </p>
          <WhatsAppButton
            id="btn-whatsapp-cta"
            location="cta_final"
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <WhatsAppIcon className="size-5" />
            Solicitar Diagnóstico no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
