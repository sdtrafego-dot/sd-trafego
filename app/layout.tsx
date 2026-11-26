import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import { WhatsAppLinkTracker } from '@/components/whatsapp-link-tracker'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NWGP23CM'

const TITLE = 'SD Tráfego & Dados | Engenharia de Aquisição, Meta Ads e Google Ads'
const DESCRIPTION =
  'Gestão estratégica de Meta Ads, Google Ads, Google Meu Negócio e rastreamento comercial (Pixel, CAPI e CRM) para empresas locais e prestadores de serviço. Cascavel - PR e todo o Brasil.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'SD Tráfego & Dados',
  generator: 'v0.app',
  keywords: [
    'tráfego pago',
    'gestor de tráfego Cascavel',
    'Meta Ads',
    'Google Ads',
    'Google Meu Negócio',
    'API de Conversões',
    'CRM WhatsApp',
    'marketing para empresas locais',
    'Cascavel PR',
  ],
  authors: [{ name: 'SD Tráfego & Dados', url: SITE_URL }],
  creator: 'SD Tráfego & Dados',
  publisher: 'SD Tráfego & Dados',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'SD Tráfego & Dados',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SD Tráfego & Dados — Engenharia de Aquisição, Meta Ads e Google Ads',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
  other: {
    'facebook-domain-verification': 'COLE_SEU_CODIGO_META_AQUI',
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '192x192' }],
    shortcut: [{ url: '/icon.png', type: 'image/png', sizes: '192x192' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0D10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} bg-background`}>
      <head>
        {GTM_ID && (
          <script
            id="gtm-script"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(GTM_ID)});`,
            }}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(GTM_ID)}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {children}
        <WhatsAppLinkTracker />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
