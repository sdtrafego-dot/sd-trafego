'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const menuLinks = [
    ...NAV_LINKS,
    { href: '#dados-funil', label: 'Dados & Portal' },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-4 px-5 pt-4 pb-3 md:h-20 md:py-0">
        <a href="#inicio" aria-label="SD Tráfego & Dados — voltar ao início" className="shrink-0">
          <Image
            src="/images/logo-sd-horizontal.png"
            alt="SD Tráfego & Dados"
            width={754}
            height={192}
            priority
            className="h-8 w-auto sm:h-9 md:h-10"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <WhatsAppButton
            id="btn-whatsapp-header"
            location="header"
            className="hidden rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Agendar Diagnóstico
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navegação móvel" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <WhatsAppButton
                id="btn-whatsapp-header-mobile"
                location="header_mobile"
                onClick={() => setOpen(false)}
                className="flex w-full justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Agendar Diagnóstico
              </WhatsAppButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}