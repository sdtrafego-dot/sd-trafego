'use client'

import { useState } from 'react'
import { Maximize2, X } from 'lucide-react'

interface PrintItem {
  badge: string
  title: string
  subtitle: string
  src: string
  alt: string
}

function RealPrintFrame({
  item,
  onExpand,
}: {
  item: PrintItem
  onExpand: (item: PrintItem) => void
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between gap-2 border-b border-border/80 bg-secondary/40 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="ml-1 truncate rounded-md border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            {item.title}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary sm:inline-block">
            {item.badge}
          </span>
          <button
            type="button"
            onClick={() => onExpand(item)}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <Maximize2 className="h-3 w-3" />
            <span>Ampliar</span>
          </button>
        </div>
      </div>

      <div className="border-b border-border/60 bg-card/80 px-4 py-2.5">
        <p className="text-xs leading-relaxed text-muted-foreground">{item.subtitle}</p>
      </div>

      <div
        onClick={() => onExpand(item)}
        className="group relative flex-1 cursor-zoom-in bg-background p-3 sm:p-4"
      >
        <div className="overflow-hidden rounded-xl border border-border/80 bg-background">
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </div>
  )
}

export function ProofAndFunnelSection() {
  const [zoomedPrint, setZoomedPrint] = useState<PrintItem | null>(null)

  const metricasPrints: PrintItem[] = [
    {
      badge: 'Painel 01',
      title: 'Métricas Consolidadas • Operação Principal',
      subtitle:
        'Investimento, volume de leads, CPL, impressões, alcance, frequência e curva diária de performance.',
      src: '/images/painel-metricas-1.png',
      alt: 'Painel de métricas com investimento, leads, custo por lead e curva de performance',
    },
    {
      badge: 'Painel 02',
      title: 'Métricas Consolidadas • Operação Enxuta',
      subtitle:
        'Acompanhamento de eficiência de custo por lead e distribuição diária de alcance e conversas.',
      src: '/images/painel-metricas-2.png',
      alt: 'Painel de métricas com acompanhamento de custo por lead, alcance e frequência',
    },
  ]

  const funilPrint: PrintItem = {
    badge: 'CRM & Funil Kanban',
    title: 'Funil de Atendimento e Conversão • 8 Etapas',
    subtitle:
      'Visão completa das etapas comerciais (Sem Etiqueta, Agenda de Sábado, Agendado, Desqualificado, Em Atendimento, Follow-up, Já é Cliente e Lead Qualificado).',
    src: '/images/funil-vendas.jpeg',
    alt: 'Funil comercial em formato Kanban com 8 etapas de atendimento e conversão',
  }

  const portalPrints: PrintItem[] = [
    {
      badge: 'Portal • Aba 01',
      title: 'Dashboard & Visão Geral em Tempo Real',
      subtitle: 'Acesso direto ao investimento, leads gerados, custo por lead e gráfico diário.',
      src: '/images/portal-dashboard.jpeg',
      alt: 'Dashboard do Portal do Cliente com visão geral de métricas em tempo real',
    },
    {
      badge: 'Portal • Aba 02',
      title: 'Central de Aprovações',
      subtitle:
        'O cliente visualiza materiais, aprova com 1 clique ou solicita ajustes direto no portal.',
      src: '/images/portal-aprovacoes.jpeg',
      alt: 'Tela de aprovações no Portal do Cliente',
    },
    {
      badge: 'Portal • Aba 03',
      title: 'Calendário & Programação',
      subtitle: 'Visibilidade completa do cronograma mensal organizado por data e horário.',
      src: '/images/portal-calendario.jpeg',
      alt: 'Calendário mensal de programação no Portal do Cliente',
    },
    {
      badge: 'Portal • Aba 04',
      title: 'Fluxo de Solicitações (Kanban)',
      subtitle:
        'Controle organizado de demandas: Em aberto, Em andamento, Concluídas e Recusadas.',
      src: '/images/portal-solicitacoes.jpeg',
      alt: 'Quadro Kanban de solicitações no Portal do Cliente',
    },
  ]

  return (
    <section id="dados-funil" className="border-t border-border/70 bg-background py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
            Transparência &amp; Estrutura Real
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Acompanhe campanhas, funil de vendas e aprovações em tempo real.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sem achismo e sem relatórios escondidos: visualize os painéis de mídia, o funil de
            atendimento no WhatsApp e o Portal do Cliente por dentro.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-foreground">
            01 • Resultados de Campanhas &amp; Performance
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {metricasPrints.map((item) => (
              <RealPrintFrame key={item.src} item={item} onExpand={setZoomedPrint} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-foreground">
            02 • Funil Comercial &amp; Rastreamento de Leads (8 Etapas)
          </h3>
          <RealPrintFrame item={funilPrint} onExpand={setZoomedPrint} />
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-foreground">
            03 • Portal Exclusivo do Cliente (Gestão em Tempo Real)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {portalPrints.map((item) => (
              <RealPrintFrame key={item.src} item={item} onExpand={setZoomedPrint} />
            ))}
          </div>
        </div>
      </div>

      {zoomedPrint && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setZoomedPrint(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-2xl border border-border bg-card p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-border pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                  {zoomedPrint.badge}
                </span>
                <h3 className="mt-1 text-base font-bold text-foreground">{zoomedPrint.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setZoomedPrint(null)}
                className="rounded-lg border border-border bg-background p-2 text-muted-foreground transition hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <img
              src={zoomedPrint.src}
              alt={zoomedPrint.alt}
              className="mx-auto h-auto max-h-[75vh] w-auto rounded-xl border border-border"
            />
          </div>
        </div>
      )}
    </section>
  )
}