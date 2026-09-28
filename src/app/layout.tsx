import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site-config';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

import { JsonLd } from '@/components/seo/JsonLd';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tuition-l2.vercel.app';

export const viewport: Viewport = {
  themeColor: '#1B2A4A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Premier Coaching & Academic Mentorship in ${siteConfig.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Tuition Centre',
    'Coaching Institute',
    'CBSE Board Preparation',
    'State Board Coaching',
    'Class 9 and 10 Tuition',
    'Class 11 and 12 Science PCM PCB',
    'Commerce and Accounts Coaching',
    siteConfig.city,
    'Doubt Clearing Batches',
    'Small Batch Coaching',
    'Academic Mentorship',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: `${siteConfig.name} - Academic Excellence in ${siteConfig.city}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Coaching & Mentorship`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <JsonLd type="organization" siteUrl={siteUrl} />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-amber-light selection:text-amber-main">
        {/* Skip to content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-main text-white font-semibold rounded-md shadow-md"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

