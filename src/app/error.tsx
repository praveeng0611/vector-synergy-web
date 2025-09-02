'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to monitoring service
    console.error('Application Error:', error);

    // Report error to Sentry with additional context
    import('@/lib/sentry').then(({ captureException }) => {
      captureException(error, {
        tags: {
          component: 'ErrorBoundary',
          errorBoundary: 'true',
          page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
        },
        extra: {
          errorDigest: error.digest,
          errorStack: error.stack,
          timestamp: new Date().toISOString(),
        },
        level: 'error',
      });
    });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl w-full">
        <Card className="border-destructive/20">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl text-foreground">
              Something went wrong
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground leading-7">
                We apologize for the inconvenience. An unexpected error has occurred while
                processing your request. Our engineering team has been notified and is
                working to resolve the issue.
              </p>

              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 p-4 bg-muted rounded-lg text-left">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Error Details (Development Mode):
                  </p>
                  <pre className="text-xs text-muted-foreground overflow-auto">
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
              <Button onClick={reset} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
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
                    <Link href="tel:+91-9765210570">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 9765210570
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="mailto:support@vector-synergy.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Technical Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Quick Navigation:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link
                    href="/about"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/projects"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-muted-foreground">
                Vector Synergy - Engineering Innovation. Delivered.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}