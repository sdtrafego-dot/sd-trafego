import Image from 'next/image'
import { FacebookIcon, InstagramIcon } from '@/components/icons'
import { WhatsAppButton } from '@/components/whatsapp-button'

const SOCIALS = [
  { href: 'https://instagram.com/sdtrafego', label: 'Instagram @sdtrafego', icon: InstagramIcon },
  { href: 'https://facebook.com/sdtrafego', label: 'Facebook @sdtrafego', icon: FacebookIcon },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Image
            src="/images/logo-sd-stacked.png"
            alt="SD Tráfego & Dados"
            width={509}
            height={480}
            className="h-24 w-auto"
          />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">SD Tráfego &amp; Dados • Cascavel - PR • Atendimento para todo o Brasil</p>
            <p>
              WhatsApp:{' '}
              <WhatsAppButton id="btn-whatsapp-footer" location="footer" className="hover:text-primary">
                (45) 98815-6637
              </WhatsAppButton>{' '}
              <span aria-hidden>|</span> E-mail:{' '}
              <a href="mailto:contato@sdtrafego.com.br" className="hover:text-primary">
                contato@sdtrafego.com.br
              </a>
            </p>
          </div>
        </div>

        <ul className="flex items-center gap-3">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © 2026 SD Tráfego &amp; Dados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
