'use client'

import type { MouseEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { WHATSAPP_DESTINATION, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/site'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const

type TrackingParams = Partial<Record<(typeof TRACKING_PARAMS)[number], string>>

const STORAGE_KEY = 'sd_tracking_params'

function getTrackingParams(): TrackingParams {
  const search = new URLSearchParams(window.location.search)
  const fromUrl: TrackingParams = {}
  for (const key of TRACKING_PARAMS) {
    const value = search.get(key)
    if (value) fromUrl[key] = value
  }

  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
      return fromUrl
    }
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored ? (JSON.parse(stored) as TrackingParams) : {}
  } catch {
    return fromUrl
  }
}

function buildWhatsAppUrl(params: TrackingParams) {
  const origin = [params.utm_source, params.utm_medium, params.utm_campaign].filter(Boolean).join(' / ')
  const message = origin ? `${WHATSAPP_MESSAGE} (Ref: ${origin})` : WHATSAPP_MESSAGE
  return `${WHATSAPP_DESTINATION}?text=${encodeURIComponent(message)}`
}

type WhatsAppButtonProps = {
  id: string
  location: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function WhatsAppButton({ id, location, className, children, onClick }: WhatsAppButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const params = getTrackingParams()

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'clique_whatsapp',
      button_location: location,
      destination_url: WHATSAPP_DESTINATION,
      page_url: window.location.href,
      ...params,
    })

    // Updating href during the click lets the browser's native navigation open the link, so popup blockers never interfere.
    event.currentTarget.href = buildWhatsAppUrl(params)

    if (event.type === 'click') onClick?.()
  }

  function handleAuxClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button === 1) handleClick(event)
  }

  return (
    <a
      id={id}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-location={location}
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      className={cn('btn-whatsapp-lead', className)}
    >
      {children}
    </a>
  )
}
