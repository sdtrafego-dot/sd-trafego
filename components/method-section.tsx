import { BarChart3, Megaphone, Search, Smartphone, Users } from 'lucide-react'
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

          {/* Pilar 05: Landing Pages & Plataformas Web */}
          <article className="group relative rounded-xl border border-primary/35 bg-card p-7 transition-colors hover:border-primary md:col-span-2 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tabular-nums text-primary">05.</span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Infraestrutura Proprietária • Multi-Nichos
                </span>
              </div>
              <Smartphone className="size-5 text-primary" aria-hidden />
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-bold">Landing Pages &amp; Plataformas Web Sob Medida</h3>
                <p className="mt-1 text-sm font-medium text-primary/90">
                  Diagnóstico de operação, 2 formatos de pagamento e posicionamento no Google &amp; IA
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Antes de escrever uma linha de código, mapeamos a fundo a sua operação: pontos de prioridade, gargalos
                  comerciais e o que é essencial para o seu cliente fechar rápido. Entregamos estruturas adaptáveis a
                  diversos nichos (varejo, delivery, distribuidoras, serviços locais, automotivo e B2B) com{' '}
                  <strong className="text-foreground">2 meios de pagamento</strong> — Pix direto com{' '}
                  <strong className="text-foreground">custo zero de plataforma</strong> ou{' '}
                  <strong className="text-foreground">Mercado Pago automático</strong> — além de otimização técnica para
                  aparecer nas <strong className="text-foreground">pesquisas do Google e nas respostas da IA do Google</strong>.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 border-t border-border pt-4 text-xs text-muted-foreground md:col-span-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-primary">✓</span>
                  <span>
                    <strong className="text-foreground">Análise de Operação:</strong> arquitetura desenhada nos pontos
                    essenciais do seu negócio
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-primary">✓</span>
                  <span>
                    <strong className="text-foreground">2 Meios de Pagamento:</strong> Pix direto com custo zero de taxa
                    ou Mercado Pago automático
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-primary">✓</span>
                  <span>
                    <strong className="text-foreground">Google &amp; IA do Google:</strong> estrutura semântica e
                    referências para ranquear na busca e nas recomendações de IA
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-primary">✓</span>
                  <span>
                    <strong className="text-foreground">Dados Nativos:</strong> Pixel, CAPI, GA4 e GTM prontos para
                    escalar tráfego
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}