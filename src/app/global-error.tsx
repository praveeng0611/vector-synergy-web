'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to monitoring service
    console.error('Global Application Error:', error);

    // Report error to Sentry with additional context
    import('@/lib/sentry').then(({ captureException }) => {
      captureException(error, {
        tags: {
          component: 'GlobalErrorBoundary',
          errorBoundary: 'true',
          global: 'true',
          page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
        },
        extra: {
          errorDigest: error.digest,
          errorStack: error.stack,
          timestamp: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
        },
        level: 'fatal', // Global errors are more severe
      });
    });
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl w-full">
            <Card className="border-destructive/20">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Application Error
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-7">
                    A critical error has occurred that prevented the application from loading properly.
                    Our engineering team has been automatically notified and is working to resolve the issue.
                  </p>

                  {process.env.NODE_ENV === 'development' && (
                    <div className="mt-4 p-4 bg-muted rounded-lg text-left">
                      <p className="text-sm font-medium text-foreground mb-2">
                        Error Details (Development Mode):
                      </p>
                      <pre className="text-xs text-muted-foreground overflow-auto whitespace-pre-wrap">
                        {error.message}
                      </pre>
                      {error.digest && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Error ID: {error.digest}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Button onClick={() => {
                    // Clear any cached data and reset
                    if (typeof window !== 'undefined') {
                      window.location.reload();
                    } else {
                      reset();
                    }
                  }} className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reload Application
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go to Homepage
                    </Link>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-foreground">
                      Need immediate assistance?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild variant="ghost" size="sm">
                        <Link href="tel:+1-555-VECTOR">
                          <Phone className="mr-2 h-4 w-4" />
                          Emergency: +91 (9765210570)
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="mailto:emergency@vector-synergy.com">
                          <Mail className="mr-2 h-4 w-4" />
                          Critical Support
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-xs text-muted-foreground">
                    Vector Synergy - Engineering Innovation. Delivered.<br />
                    Error ID: {error.digest || 'N/A'} | Time: {new Date().toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </html>
  );
}