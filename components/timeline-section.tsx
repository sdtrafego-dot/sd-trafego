import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    day: 'Dia 01',
    title: 'Kickoff & Diagnóstico',
    text: 'Alinhamento de metas, margem, público-alvo e liberação de acessos.',
  },
  {
    day: 'Dia 02',
    title: 'Portal, CRM & Rastreamento',
    text: 'Configuração de contas, Pixel/CAPI, Google Meu Negócio, Portal de Métricas e CRM WhatsApp.',
  },
  {
    day: 'Dia 03',
    title: 'Funil, Ofertas & Alinhamento',
    text: 'Validação dos criativos enviados pela empresa, organização das etapas de triagem e feedback loop.',
  },
  {
    day: 'Dia 04/05',
    title: 'Ativação & Otimização',
    text: 'Subida oficial das campanhas e acompanhamento contínuo de performance em tempo real.',
  },
]

export function TimelineSection() {
  return (
    <section id="como-funciona" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Como Funciona o Início" title="Os primeiros 5 dias de trabalho." />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6 md:before:absolute md:before:top-5 md:before:right-0 md:before:left-0 md:before:h-px md:before:bg-border md:before:content-['']">
          {STEPS.map((step, i) => (
            <li key={step.day} className="relative flex gap-5 md:flex-col md:gap-0">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background text-sm font-bold text-primary">
                {i + 1}
              </span>
              <div className="md:mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{step.day}</p>
                <h3 className="mt-1.5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}