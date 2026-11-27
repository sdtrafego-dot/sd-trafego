'use client'

import { useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type PrintItem = {
  badge: string
  title: string
  subtitle: string
  src: string
  alt: string
}

const METRIC_PRINTS: PrintItem[] = [
  {
    badge: 'Painel 01',
    title: 'Métricas Consolidadas • Operação Principal',
    subtitle:
      'Investimento, volume de leads, CPL, impressões, alcance, frequência e curva diária de performance.',
    src: '/images/painel-metricas-1.jpeg',
    alt: 'Dashboard de métricas com investimento, total de leads, custo por lead e gráfico diário',
  },
  {
    badge: 'Painel 02',
    title: 'Métricas Consolidadas • Operação Enxuta',
    subtitle:
      'Acompanhamento de eficiência de custo por lead e distribuição diária de alcance e conversas.',
    src: '/images/painel-metricas-2.jpeg',
    alt: 'Dashboard de métricas com acompanhamento de CPL, alcance, frequência e conversas',
  },
]

const FUNNEL_PRINT: PrintItem = {
  badge: 'CRM & Funil Kanban',
  title: 'Funil de Atendimento e Conversão • Todas as Etapas',
  subtitle:
    'Visão completa das 8 etapas do funil (Sem Etiqueta, Agenda de Sábado, Agendado, Desqualificado, Em Atendimento, Follow-up, Já é Cliente e Lead Qualificado).',
  src: '/images/funil-vendas.jpeg',
  alt: 'Funil comercial em formato Kanban com 8 etapas de triagem, agendamento, follow-up e fechamento',
}

const PORTAL_PRINTS: PrintItem[] = [
  {
    badge: 'Portal • Aba 01',
    title: 'Dashboard & Visão Geral em Tempo Real',
    subtitle: 'Acesso direto ao investimento, leads gerados, custo por lead e gráfico diário.',
    src: '/images/portal-dashboard.jpeg',
    alt: 'Visão geral do Portal do Cliente com métricas de anúncios e performance em tempo real',
  },
  {
    badge: 'Portal • Aba 02',
    title: 'Central de Aprovações',
    subtitle: 'O cliente visualiza materiais, aprova com 1 clique ou solicita ajustes direto no portal.',
    src: '/images/portal-aprovacoes.jpeg',
    alt: 'Tela de aprovação de conteúdos e materiais no Portal do Cliente',
  },
  {
    badge: 'Portal • Aba 03',
    title: 'Calendário & Programação',
    subtitle: 'Visibilidade completa do cronograma mensal organizado por data e horário.',
    src: '/images/portal-calendario.jpeg',
    alt: 'Calendário mensal de programação dentro do Portal do Cliente',
  },
  {
    badge: 'Portal • Aba 04',
    title: 'Fluxo de Solicitações (Kanban)',
    subtitle: 'Controle organizado de demandas: Em aberto, Em andamento, Concluídas e Recusadas.',
    src: '/images/portal-solicitacoes.jpeg',
    alt: 'Quadro Kanban de solicitações entre cliente e operação no Portal do Cliente',
  },
]

function PrintCard({
  item,
  onExpand,
}: {
  item: PrintItem
  onExpand: (item: PrintItem) => void
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/40">
      <div className="flex items-center justify-between gap-2 border-b border-border/80 bg-background/80 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </div>
          <span className="ml-1 truncate rounded-md border border-border bg-card px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
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
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <Maximize2 className="size-3" aria-hidden />
            <span>Ampliar</span>
          </button>
        </div>
      </div>

      <div className="border-b border-border/60 bg-card/60 px-4 py-2.5">
        <p className="text-xs leading-relaxed text-muted-foreground">{item.subtitle}</p>
      </div>

      <div
        onClick={() => onExpand(item)}
        className="group relative flex-1 cursor-zoom-in bg-background p-3 sm:p-4"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-black/40">
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

export function ProofFunnelSection() {
  const [zoomed, setZoomed] = useState<PrintItem | null>(null)

  return (
    <section id="dados-funil" className="scroll-mt-24 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Transparência & Estrutura Real"
            title="Acompanhe campanhas, funil de vendas e aprovações em tempo real."
          />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sem achismo e sem relatórios escondidos: visualize os painéis de mídia, o funil de
            atendimento no WhatsApp e o Portal do Cliente por dentro.
          </p>
        </div>

        {/* 01 • Métricas Reais */}
        <div className="mt-12">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-foreground">
            01 • Resultados de Campanhas &amp; Performance
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {METRIC_PRINTS.map((item) => (
              <PrintCard key={item.src} item={item} onExpand={setZoomed} />
            ))}
          </div>
        </div>

        {/* 02 • Funil Kanban */}
        <div className="mt-12">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-foreground">
            02 • Funil Comercial &amp; Rastreamento de Leads (8 Etapas)
          </h3>
          <PrintCard item={FUNNEL_PRINT} onExpand={setZoomed} />
        </div>

        {/* 03 • Portal do Cliente */}
        <div className="mt-12">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-foreground">
            03 • Portal Exclusivo do Cliente (Gestão em Tempo Real)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {PORTAL_PRINTS.map((item) => (
              <PrintCard key={item.src} item={item} onExpand={setZoomed} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox para ampliar */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-2xl border border-border bg-card p-4 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-border pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                  {zoomed.badge}
                </span>
                <h3 className="mt-1 text-base font-bold text-foreground">{zoomed.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setZoomed(null)}
                aria-label="Fechar imagem ampliada"
                className="rounded-lg border border-border bg-background p-2 text-muted-foreground transition hover:text-foreground"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <img
              src={zoomed.src}
              alt={zoomed.alt}
              className="mx-auto h-auto max-h-[75vh] w-auto rounded-xl border border-border"
            />
          </div>
        </div>
      )}
    </section>
  )
}