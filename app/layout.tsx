import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import FloatingActions from './components/FloatingActions'
import BackToTop from './components/BackToTop'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'OliveOak Design | Best Interior Designers in Hyderabad | Luxury Home & Office Interiors',
  description: 'OliveOak Design - Hyderabad\'s premier interior design company offering luxury residential & commercial interiors.',
  keywords: 'best interior designers Hyderabad, home interior designers Hyderabad, interior design company Hyderabad',
  openGraph: {
    title: 'OliveOak Design | Premium Interior Designers in Hyderabad',
    description: 'Hyderabad\'s best interior designers for luxury homes, offices, modular kitchens & complete turnkey interior solutions.',
    images: ['https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OliveOak Design | Hyderabad\'s Luxury Interior Designers',
    description: 'Professional interior design services in Hyderabad for homes, offices, and commercial spaces.',
    images: ['https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesignService",
              "name": "OliveOak Design",
              "description": "Hyderabad's premier interior design company",
              "url": "https://oliveoakdesign.com",
              "telephone": "+917780196804",
              "email": "info@oliveoakdesign.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className={archivo.className}>
        {children}
        <FloatingActions />
        <BackToTop />
      </body>
    </html>
  )
}