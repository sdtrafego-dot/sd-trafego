import { EyeOff, MessageSquareX, Split } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const PROBLEMS = [
  {
    icon: EyeOff,
    title: 'Gestão no Escuro',
    text: 'Impulsionar posts ou rodar campanhas sem rastreamento impede saber qual anúncio realmente gerou venda no caixa.',
  },
  {
    icon: MessageSquareX,
    title: 'Leads Perdidos no WhatsApp',
    text: 'Sem processo comercial e organização de atendimento, oportunidades quentes esfriam e fecham com o concorrente.',
  },
  {
    icon: Split,
    title: 'Dependência de um Único Canal',
    text: 'Focar só em rede social ou ignorar as buscas locais do Google deixa as vendas mais urgentes na mesa.',
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="O Cenário Atual"
          title="Por que muitos anúncios geram mensagens, mas não geram lucro?"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl border border-border bg-background p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
