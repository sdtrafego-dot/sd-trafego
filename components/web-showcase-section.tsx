import { ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { WhatsAppButton } from '@/components/whatsapp-button'

const DELIVERY_STEPS = [
  {
    step: '01. Diagnóstico',
    title: 'Mapeamento da Operação',
    text: 'Análise dos pontos essenciais, prioridades comerciais e estrutura ideal para o seu nicho.',
  },
  {
    step: '02. Google & IA',
    title: 'Busca Orgânica & IA Google',
    text: 'Otimização semântica e referências estruturadas para aparecer no Google e nas respostas de IA.',
  },
  {
    step: '03. Pagamentos',
    title: 'Custo Zero ou Mercado Pago',
    text: 'Receba via Pix direto sem taxas na plataforma ou com baixa automática pelo Mercado Pago.',
  },
  {
    step: '04. Rastreamento',
    title: 'GTM, GA4 & Meta CAPI',
    text: 'Cada clique e venda rastreados desde o primeiro dia para escalar suas campanhas.',
  },
]

export function WebShowcaseSection() {
  return (
    <section id="infraestrutura-web" className="scroll-mt-24 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-primary/35 bg-card p-6 shadow-2xl shadow-black/50 sm:p-10">
          {/* Selo Superior: Serviço à Parte */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" aria-hidden />
              <span>05 • Infraestrutura Proprietária • Serviço à Parte</span>
            </div>
            <span className="rounded-lg border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
              Contratado separadamente do plano de tráfego
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="Sites, Landing Pages & App Sites Sob Medida • Adaptável a Diversos Nichos"
                title="Do diagnóstico da sua operação à página rodando com pagamentos, Google & IA."
              />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Para empresas que precisam de uma estrutura web ou app site próprio para vender e operar melhor,
                desenvolvemos o projeto sob medida como <strong className="text-foreground">serviço à parte</strong> —
                sem misturar com a entrada mensal de tráfego e dados. Trabalhamos com{' '}
                <strong className="text-foreground">dois modelos de pagamento</strong> (
                <strong className="text-foreground">Pix direto com custo zero na plataforma</strong> ou{' '}
                <strong className="text-foreground">integração automática via Mercado Pago</strong>) e dados
                estruturados para <strong className="text-foreground">pesquisas e IA do Google</strong>.
              </p>
            </div>

            <WhatsAppButton
              id="btn-whatsapp-web-showcase"
              location="infraestrutura_web"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              <span>Solicitar Projeto Web / App à Parte</span>
              <ArrowRight className="size-4" aria-hidden />
            </WhatsAppButton>
          </div>

          {/* 4 Etapas do Diagnóstico & Entrega */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DELIVERY_STEPS.map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-background/80 p-4">
                <span className="text-[11px] font-extrabold uppercase text-primary">{item.step}</span>
                <h4 className="mt-1 text-sm font-bold text-foreground">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* 3 Mockups de Celular Lado a Lado (Originais Preservados) */}
          <div className="mt-12 rounded-2xl border border-border/80 bg-background/70 p-6 sm:p-8">
            <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Projeto Real em Operação • Vitrine Mobile, Painel Administrativo &amp; Inteligência de Reposição
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {/* CELULAR 1: VITRINE MOBILE DE ALTA CONVERSÃO */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[295px] rounded-[2.6rem] border-[6px] border-zinc-800 bg-[#0B0B0E] p-2.5 shadow-2xl">
                  <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-black" />
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0E]">
                    <div className="bg-[#FFCC00] px-2 py-1 text-center text-[8px] font-extrabold text-black">
                      🛵 Entrega local • Pix Direto • 25–40 min
                    </div>
                    <div className="space-y-2.5 p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFCC00] text-[10px] font-black text-black">
                            🎙️
                          </div>
                          <div>
                            <div className="text-[11px] font-black italic leading-none text-[#FFCC00]">
                              POD PAH{' '}
                              <span className="rounded bg-rose-600 px-1 text-[7px] not-italic text-white">18+</span>
                            </div>
                            <div className="mt-0.5 text-[8px] text-emerald-400">● Cascavel - PR • Aberto</div>
                          </div>
                        </div>
                        <span className="rounded-lg border border-white/10 bg-zinc-900 px-2 py-1 text-[9px] font-bold text-white">
                          🛍️ Sacola <span className="rounded-full bg-[#FFCC00] px-1 text-black">0</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1 text-[8px]">
                        <div className="rounded-lg border border-white/10 bg-zinc-900/90 p-1.5">
                          <div className="font-bold text-white">⚡ 25-40m</div>
                          <div className="text-zinc-400">Motoboy</div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-zinc-900/90 p-1.5">
                          <div className="font-bold text-[#FFCC00]">🔥 Leve 2</div>
                          <div className="text-zinc-400">Desconto</div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-zinc-900/90 p-1.5">
                          <div className="font-bold text-emerald-400">💎 Pix</div>
                          <div className="text-zinc-400">Sem taxa</div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#FFCC00]/50 bg-gradient-to-br from-purple-950/60 via-zinc-900 to-black p-3">
                        <span className="inline-block rounded-full bg-[#FFCC00] px-2 py-0.5 text-[7px] font-black uppercase text-black">
                          🔥 Drop Destaque
                        </span>
                        <div className="mt-1.5 text-sm font-black leading-tight text-white">
                          IGNITE <span className="text-[#FFCC00]">V500</span> • 50K PUFFS
                        </div>
                        <div className="mt-1 text-[9px] text-zinc-300">Unitário R$ 134,99 ou combo:</div>
                        <div className="mt-1.5 inline-block rounded-lg border border-[#FFCC00]/50 bg-[#FFCC00]/15 px-2.5 py-1 text-xs font-black text-[#FFCC00]">
                          2 POR R$ 250,00
                        </div>
                        <div className="mt-2 rounded-lg bg-[#FFCC00] py-1.5 text-center text-[9px] font-black uppercase text-black">
                          Escolher Sabores →
                        </div>
                      </div>

                      <div className="pt-1">
                        <div className="mb-1.5 text-[9px] font-black uppercase text-white">
                          🔥 Mais Pedidos em Cascavel
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="rounded-xl border border-white/10 bg-zinc-900 p-2">
                            <div className="text-[7px] font-bold text-[#FFCC00]">IGNITE</div>
                            <div className="text-[9px] font-extrabold text-white">IGNITE V300</div>
                            <div className="mt-0.5 text-[9px] font-bold text-zinc-300">R$ 109,99</div>
                            <div className="text-[7px] text-emerald-400">2 por R$ 209,99</div>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-zinc-900 p-2">
                            <div className="text-[7px] font-bold text-[#FFCC00]">LIFE POD</div>
                            <div className="text-[9px] font-extrabold text-white">GOLD 40K</div>
                            <div className="mt-0.5 text-[9px] font-bold text-zinc-300">R$ 119,99</div>
                            <div className="text-[7px] text-emerald-400">2 por R$ 220,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 max-w-[280px] text-center">
                  <span className="text-xs font-bold text-primary">01 • Vitrine &amp; Checkout</span>
                  <h3 className="mt-1 text-base font-bold text-foreground">Pix Custo Zero ou Mercado Pago</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Layout mobile-first com regras de oferta automática, Pix direto sem taxa de plataforma ou checkout
                    Mercado Pago.
                  </p>
                </div>
              </div>

              {/* CELULAR 2: PAINEL DE CONTROLE & ESTOQUE */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[295px] rounded-[2.6rem] border-[6px] border-zinc-800 bg-[#0B0B0E] p-2.5 shadow-2xl">
                  <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-black" />
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0E]">
                    <div className="bg-[#FFCC00] px-2 py-1 text-center text-[8px] font-extrabold text-black">
                      Painel Administrativo • Acesso Restrito
                    </div>
                    <div className="space-y-2.5 p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-black italic text-[#FFCC00]">
                          POD PAH <span className="text-[8px] not-italic text-zinc-400">ADMIN</span>
                        </div>
                        <span className="rounded-lg bg-zinc-800 px-2 py-0.5 text-[8px] font-bold text-white">
                          ← Ver Vitrine
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-2.5">
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Modelos Ativos</div>
                          <div className="mt-0.5 text-lg font-black text-[#FFCC00]">14</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-2.5">
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Estoque Total</div>
                          <div className="mt-0.5 text-lg font-black text-emerald-400">477 un.</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-2.5">
                        <div>
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Volume por Período</div>
                          <div className="mt-0.5 text-base font-black text-white">R$ 4.890,00</div>
                        </div>
                        <span className="rounded-md border border-zinc-700 bg-black px-2 py-0.5 text-[8px] font-bold text-[#FFCC00]">
                          7 dias ▾
                        </span>
                      </div>

                      <div className="space-y-2 rounded-xl border border-white/10 bg-zinc-900/90 p-2.5">
                        <div className="text-[7px] font-bold uppercase text-[#FFCC00]">Painel de Controle</div>
                        <div className="text-[11px] font-extrabold leading-tight text-white">
                          Gestão de Catálogo, Estoque e Pedidos
                        </div>
                        <div className="text-[8px] text-zinc-400">
                          Alterações atualizam a vitrine do cliente em tempo real.
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="rounded-lg bg-[#FFCC00] px-2.5 py-1 text-[8px] font-black text-black">
                            Produtos &amp; Estoque
                          </span>
                          <span className="rounded-lg bg-zinc-800 px-2.5 py-1 text-[8px] font-bold text-white">
                            Pedidos
                          </span>
                          <span className="rounded-lg bg-zinc-800 px-2.5 py-1 text-[8px] font-bold text-zinc-200">
                            📊 Relatórios
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-2.5">
                        <div>
                          <div className="text-[9px] font-bold text-white">+ Cadastrar Novo Modelo</div>
                          <div className="text-[8px] text-zinc-400">Upload de foto, preços e sabores</div>
                        </div>
                        <span className="text-[9px] font-bold text-[#FFCC00]">Abrir ▾</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 max-w-[280px] text-center">
                  <span className="text-xs font-bold text-primary">02 • Gestão em Tempo Real</span>
                  <h3 className="mt-1 text-base font-bold text-foreground">Painel Administrativo Próprio</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Autonomia total para o cliente atualizar preços, ofertas, fotos e disponibilidade direto pelo
                    celular.
                  </p>
                </div>
              </div>

              {/* CELULAR 3: INTELIGÊNCIA DE COMPRAS & REPOSIÇÃO */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[295px] rounded-[2.6rem] border-[6px] border-zinc-800 bg-[#0B0B0E] p-2.5 shadow-2xl">
                  <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-black" />
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0E]">
                    <div className="bg-[#FFCC00] px-2 py-1 text-center text-[8px] font-extrabold text-black">
                      Inteligência de Dados &amp; Reposição
                    </div>
                    <div className="space-y-2.5 p-3">
                      <div className="space-y-2 rounded-xl border border-white/10 bg-zinc-900 p-2.5">
                        <div className="text-[7px] font-extrabold uppercase text-[#FFCC00]">Inteligência de Compras</div>
                        <div className="text-[11px] font-extrabold leading-tight text-white">
                          Relatório de Saída &amp; Sugestão de Reposição
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                          <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/15 py-1.5 text-center text-[8px] font-extrabold text-emerald-300">
                            📋 Lista Fornecedor
                          </div>
                          <div className="rounded-lg bg-[#FFCC00] py-1.5 text-center text-[8px] font-extrabold text-black">
                            ⬇ Exportar Excel
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 rounded-xl border border-white/10 bg-zinc-900/90 p-2.5">
                        <div>
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Período</div>
                          <div className="mt-0.5 rounded-lg border border-zinc-700 bg-black px-2 py-1 text-[9px] font-bold text-[#FFCC00]">
                            Últimos 7 dias ▾
                          </div>
                        </div>
                        <div>
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Marca</div>
                          <div className="mt-0.5 rounded-lg border border-zinc-700 bg-black px-2 py-1 text-[9px] font-bold text-white">
                            Todas as marcas ▾
                          </div>
                        </div>
                        <div>
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Produto / Modelo</div>
                          <div className="mt-0.5 rounded-lg border border-zinc-700 bg-black px-2 py-1 text-[9px] font-bold text-white">
                            Todos os modelos ▾
                          </div>
                        </div>
                        <div>
                          <div className="text-[7px] font-bold uppercase text-zinc-400">Sabor</div>
                          <div className="mt-0.5 rounded-lg border border-zinc-700 bg-black px-2 py-1 text-[9px] font-bold text-white">
                            Todos os sabores ▾
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-sky-500/30 bg-sky-500/10 p-2 text-[8px] text-sky-200">
                        <span>Cálculo automático de giro</span>
                        <span className="font-black text-sky-300">CSV / WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 max-w-[280px] text-center">
                  <span className="text-xs font-bold text-primary">03 • Dados &amp; Escala</span>
                  <h3 className="mt-1 text-base font-bold text-foreground">Inteligência de Saída &amp; Métricas</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Relatórios por período, produto e categoria com exportação instantânea para decisões orientadas por
                    dados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nota de Escopo sobre Criativos */}
          <p className="mt-6 border-t border-border/70 pt-5 text-xs text-muted-foreground">
            * A produção de artes, vídeos e criativos de anúncios permanece sob responsabilidade da empresa
            contratante ou parceiro.
          </p>
        </div>
      </div>
    </section>
  )
}