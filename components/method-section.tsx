import { BarChart3, Megaphone, Search, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const PILLARS = [
  {
    number: '01',
    icon: Megaphone,
    title: 'Meta Ads',
    subtitle: 'Geração de Desejo & Remarketing',
    text: 'Campanhas estruturadas no Instagram e Facebook para construir autoridade regional, gerar demanda e reimpactar quem já demonstrou interesse.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Google Ads & Google Meu Negócio',
    subtitle: 'Intenção de busca local',
    text: 'Posicionamento estratégico nas pesquisas locais e no mapa para capturar quem já está procurando o seu serviço agora.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Rastreamento & Inteligência de Dados',
    subtitle: 'Pixel, CAPI e UTMs',
    text: 'Configuração de Pixel, API de Conversões (CAPI), UTMs e painéis de acompanhamento com total transparência.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Apoio ao Funil Comercial & CRM',
    subtitle: 'Atendimento que converte',
    text: 'Alinhamento direto com o seu atendimento no WhatsApp para melhorar a triagem e aumentar a taxa de conversão.',
  },
]

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="O Método SD • Sinergia de Aquisição"
          title="Um ecossistema conectado da primeira impressão ao fechamento."
        />
        <div id="solucoes" className="mt-12 grid scroll-mt-24 gap-5 md:grid-cols-2">
          {PILLARS.map(({ number, icon: Icon, title, subtitle, text }) => (
            <article
              key={number}
              className="group relative rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/40 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-bold tabular-nums text-primary">{number}.</span>
                <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-1 text-sm font-medium text-primary/90">{subtitle}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
