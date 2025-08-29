/**
 * ClientLayout component - Client-side providers only
 */
'use client';

import { ProgressProvider } from '@bprogress/next/app';
import React, { ReactElement, ReactNode } from 'react';

import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';
import { RootLayout } from '@/components/layouts/RootLayout';

/**
 * ClientLayout component - Handles client-side providers and state
 * @param children - Child components
 * @returns ReactElement
 */
export function ClientLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <ErrorBoundary>
      <ProgressProvider height="2px" color="#0C3C78" options={{ showSpinner: false }}>
        <RootLayout>{children}</RootLayout>
      </ProgressProvider>
    </ErrorBoundary>
  );
}
