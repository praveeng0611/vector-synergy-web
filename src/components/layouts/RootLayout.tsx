/**
 * RootLayout component - Server-side layout wrapper
 */
import React, { ReactElement, ReactNode } from 'react';

// parts
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

/**
 * RootLayout - Server-side layout wrapper with static elements
 * @param children - Child components
 * @returns ReactElement
 */
export function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="relative w-full h-full">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="w-full h-auto">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
