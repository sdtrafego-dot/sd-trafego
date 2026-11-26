import { ArrowRight, MapPin, Megaphone, Workflow } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { WhatsAppIcon } from '@/components/icons'

const INDICATORS = [
  { icon: Megaphone, label: 'Meta Ads & Google Ads' },
  { icon: MapPin, label: 'Google Meu Negócio Local' },
  { icon: Workflow, label: 'Rastreamento & CRM' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.14),transparent_65%)]"
      />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground sm:text-xs">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          ENGENHARIA DE AQUISIÇÃO &amp; DADOS • CASCAVEL - PR
        </p>

        <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
          Transforme investimento em anúncios em{' '}
          <span className="text-primary">previsibilidade de vendas</span> no seu caixa.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Unimos gestão estratégica de Meta Ads, Google Ads, presença local e rastreamento comercial para sua
          empresa parar de atrair curiosos e fechar com clientes prontos para comprar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            id="btn-whatsapp-hero"
            location="hero"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Falar com Especialista no WhatsApp
          </WhatsAppButton>
          <a
            href="#metodo"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            Conhecer o Método
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {INDICATORS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card/60 px-4 py-3.5 text-sm font-medium"
            >
              <Icon className="size-4 text-primary" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
