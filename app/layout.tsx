import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AnimatedBackground } from '@/components/animated-background'
import CustomCursor from '@/components/custom-cursor'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Muhammad Syihabuddin |  Software Developer',
  description: 'Muhammad Syihabuddin is a skilled  Software Developer based in Surabaya, Indonesia. Software Developer at Lviors Jaya Sentosa, specializing in Next.js, Node.js, NestJS, and microservices architecture.',
  keywords: 'Muhammad Syihabuddin,  Developer, Backend Developer, Lviors Jaya Sentosa, Surabaya, React, Next.js, Node.js, NestJS, Web Developer Indonesia',
  generator: 'Next.js',
  authors: [{ name: 'Muhammad Syihabuddin', url: 'https://muhammadsyihabuddin.com' }],
  metadataBase: new URL('https://muhammadsyihabuddin.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Syihabuddin |  Software Developer',
    description: ' Software Developer based in Surabaya, Indonesia. Software Developer at Lviors Jaya Sentosa, specializing in building high-performance web applications.',
    url: 'https://muhammadsyihabuddin.com',
    siteName: 'Muhammad Syihabuddin Portfolio',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/placeholder-user.jpg',
        width: 800,
        height: 600,
        alt: 'Muhammad Syihabuddin Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Syihabuddin |  Software Developer',
    description: 'Software Developer based in Surabaya, Indonesia. Software Developer at Lviors Jaya Sentosa.',
    images: ['/placeholder-user.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Syihabuddin",
    "url": "https://muhammadsyihabuddin.com",
    "jobTitle": " Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Lviors Jaya Sentosa"
    },
    "description": " Software Developer based in Surabaya, Indonesia. Software Developer at Lviors Jaya Sentosa.",
    "image": "https://muhammadsyihabuddin.com/placeholder-user.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-syihabuddin",
      "https://github.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surabaya",
      "addressRegion": "East Java",
      "addressCountry": "Indonesia"
    }
  }

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <CustomCursor />
          <AnimatedBackground />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
