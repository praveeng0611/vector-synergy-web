/**
 * RootLayout component
 */
import React from 'react';
import type { Metadata, Viewport } from 'next';
// fonts
import { Poppins, Inter } from 'next/font/google';
// styles
import './globals.css';
// layouts
import { ClientLayout } from '@/components/layouts/ClientLayout';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

/**
 * Root font
 */
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
});

/**
 * Root metadata
 */
export const metadata: Metadata = {
  title: {
    default: 'Vector Synergy - Engineering Innovation. Delivered.',
    template: '%s | Vector Synergy'
  },
  description: 'Vector Synergy delivers comprehensive engineering solutions from product design and CAD to prototyping, simulation, testing, and manufacturing. Your trusted partner for end-to-end engineering innovation.',
  keywords: ['engineering', 'CAD design', 'prototyping', 'simulation', 'manufacturing', 'product development', 'R&D', 'automation'],
  authors: [{ name: 'Vector Synergy' }],
  creator: 'Vector Synergy',
  publisher: 'Vector Synergy',
  metadataBase: new URL('https://vector-synergy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vector-synergy.com',
    title: 'Vector Synergy - Engineering Innovation. Delivered.',
    description: 'Comprehensive engineering solutions from design to manufacturing. Trusted partner for product development, CAD, prototyping, simulation, and process automation.',
    siteName: 'Vector Synergy',
    images: [
      {
        url: '/logo-full.svg',
        width: 1200,
        height: 630,
        alt: 'Vector Synergy - Engineering Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vector Synergy - Engineering Innovation. Delivered.',
    description: 'Comprehensive engineering solutions from design to manufacturing.',
    images: ['/logo-full.svg'],
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

/**
 * Viewport configuration
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * RootLayout component
 * @param props RootLayoutProps
 * @returns ReactElement
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#FFDFB5" />

        {/* Preload critical resources for LCP optimization */}
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/6.png" as="image" type="image/png" />
        <link rel="preload" href="/images/layered-slants.svg" as="image" type="image/svg+xml" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//vercel.com" />

        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical CSS fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          as="style" 
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased w-full h-full`}
        suppressHydrationWarning={true}
      >
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
