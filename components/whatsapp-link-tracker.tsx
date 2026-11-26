'use client'

import { useEffect } from 'react'

const WHATSAPP_HOSTS = ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com']

// Safety net for any WhatsApp link not rendered through <WhatsAppButton>, which tracks its own clicks.
export function WhatsAppLinkTracker() {
  useEffect(() => {
    function handle(event: MouseEvent) {
      if (event.type === 'auxclick' && event.button !== 1) return
      const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor || anchor.classList.contains('btn-whatsapp-lead')) return

      let url: URL
      try {
        url = new URL(anchor.href)
      } catch {
        return
      }
      if (!WHATSAPP_HOSTS.includes(url.hostname)) return

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'clique_whatsapp',
        button_location: anchor.id || anchor.dataset.location || 'link_generico',
        destination_url: `${url.origin}${url.pathname}`,
        page_url: window.location.href,
      })
    }

    document.addEventListener('click', handle, true)
    document.addEventListener('auxclick', handle, true)
    return () => {
      document.removeEventListener('click', handle, true)
      document.removeEventListener('auxclick', handle, true)
    }
  }, [])

  return null
}
