export const SITE_URL = 'https://sdtrafego.com.br'

export const WHATSAPP_DESTINATION = 'https://wa.me/5545988156637'

export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site sdtrafego.com.br e gostaria de agendar um diagnóstico para minha empresa.'

export const WHATSAPP_URL = `${WHATSAPP_DESTINATION}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const NAV_LINKS = [
  { href: '#problema', label: 'O Problema' },
  { href: '#metodo', label: 'Método SD' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#como-funciona', label: 'Como Funciona' },
] as const
