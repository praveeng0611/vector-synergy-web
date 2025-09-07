/**
 * ClientLayout component - Client-side providers only
 */
'use client';

import { ProgressProvider } from '@bprogress/next/app';
import React, { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

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
        <Toaster
          position="top-right"
          containerStyle={{
            top: 80,
            right: 20,
          }}
          toastOptions={{
            duration: 4000,
            style: {
              background: 'transparent',
              boxShadow: 'none',
              padding: 0,
              margin: 0,
              maxWidth: '420px',
            },
            success: {
              duration: 4000,
              style: {
                background: 'transparent',
                boxShadow: 'none',
                padding: 0,
              },
            },
            error: {
              duration: 5000,
              style: {
                background: 'transparent',
                boxShadow: 'none',
                padding: 0,
              },
            },
            loading: {
              duration: Infinity,
              style: {
                background: 'transparent',
                boxShadow: 'none',
                padding: 0,
              },
            },
          }}
        />
        <style jsx global>{`
          @keyframes enter {
            from {
              transform: translate3d(100%, 0, 0) scale(0.9);
              opacity: 0;
            }
            to {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 1;
            }
          }

          @keyframes leave {
            from {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 1;
            }
            to {
              transform: translate3d(100%, 0, 0) scale(0.9);
              opacity: 0;
            }
          }

          .animate-enter {
            animation: enter 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-leave {
            animation: leave 0.2s cubic-bezier(0.4, 0, 1, 1);
          }
        `}</style>
      </ProgressProvider>
    </ErrorBoundary>
  );
}
