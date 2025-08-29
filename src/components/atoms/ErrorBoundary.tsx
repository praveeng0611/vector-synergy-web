/* eslint-disable max-len */
'use client';

import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import React, { Component, ReactNode, ErrorInfo } from 'react';

import { cn } from '@/lib/utils';

// Types for error boundary state and props
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  eventId: string | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  className?: string;
}

// Error severity levels for better categorization
type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

interface ErrorDetails {
  severity: ErrorSeverity;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
}

/**
 * Global Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 *
 * Features:
 * - Production-ready error handling
 * - Sentry integration for error reporting
 * - Accessible fallback UI
 * - Performance optimized
 * - Prevents layout shifts
 * - User-friendly error messages
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryCount = 0;
  private readonly maxRetries = 3;

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      eventId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    const errorDetails: ErrorDetails = {
      severity: this.getErrorSeverity(error),
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
    };

    // Update state with error info
    this.setState({
      errorInfo,
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Details:', errorDetails);
      console.error('Component Stack:', errorInfo.componentStack);
      console.groupEnd();
    }

    // Report to Sentry in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      this.reportToSentry(error, errorInfo, errorDetails);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  private getErrorSeverity(error: Error): ErrorSeverity {
    const errorMessage = error.message.toLowerCase();

    // Critical errors that break core functionality
    if (
      errorMessage.includes('chunk') ||
      errorMessage.includes('network') ||
      errorMessage.includes('failed to fetch')
    ) {
      return 'critical';
    }

    // High severity errors
    if (
      errorMessage.includes('reference') ||
      errorMessage.includes('type') ||
      errorMessage.includes('null')
    ) {
      return 'high';
    }

    // Medium severity errors
    if (
      errorMessage.includes('render') ||
      errorMessage.includes('prop')
    ) {
      return 'medium';
    }

    return 'low';
  }

  private async reportToSentry(error: Error, errorInfo: ErrorInfo, details: ErrorDetails) {
    try {
      // Dynamic import to reduce bundle size
      const Sentry = await import('@sentry/react');

      // Map our severity to Sentry's severity levels
      const sentryLevel = this.mapToSentryLevel(details.severity);

      Sentry.withScope((scope) => {
        scope.setTag('errorBoundary', true);
        scope.setLevel(sentryLevel);
        scope.setContext('errorInfo', {
          componentStack: errorInfo.componentStack,
          ...details,
        });

        const eventId = Sentry.captureException(error);
        this.setState({ eventId });
      });
    } catch (sentryError) {
      console.warn('Failed to report error to Sentry:', sentryError);
    }
  }

  private mapToSentryLevel(severity: ErrorSeverity): 'debug' | 'info' | 'warning' | 'error' | 'fatal' {
    switch (severity) {
      case 'low': return 'info';
      case 'medium': return 'warning';
      case 'high': return 'error';
      case 'critical': return 'fatal';
      default: return 'error';
    }
  }

  public handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        eventId: null,
      });
    }
  };

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  private handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  private renderErrorUI() {
    const { error, eventId } = this.state;
    const { showDetails = false } = this.props;

    const canRetry = this.retryCount < this.maxRetries;
    const isChunkError = error?.message.includes('chunk') || error?.message.includes('Loading chunk');

    return (
      <div className={cn(
        'min-h-screen flex items-center justify-center p-4 bg-background',
        this.props.className,
      )}
      >
        <div className="max-w-2xl w-full">
          {/* Error Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            {/* Error Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground">
                  Something went wrong
                </h1>
                <p className="text-muted-foreground mt-1">
                  {isChunkError
                    ? 'Failed to load application resources. This usually happens after an update.'
                    : 'An unexpected error occurred while rendering this page.'
                  }
                </p>
              </div>
            </div>

            {/* Error Message */}
            {error && showDetails && (
              <div className="mb-6 p-4 bg-muted rounded-md">
                <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Bug className="w-4 h-4" aria-hidden="true" />
                  Error Details
                </h3>
                <p className="text-sm text-muted-foreground font-mono break-all">
                  {error.message}
                </p>
                {eventId && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Error ID: {eventId}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-4 py-2',
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                    'rounded-md font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    'disabled:opacity-50 disabled:pointer-events-none',
                  )}
                  aria-label="Try again"
                >
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  Try Again
                </button>
              )}

              <button
                onClick={this.handleReload}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-4 py-2',
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                  'rounded-md font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
                aria-label="Reload page"
              >
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-4 py-2',
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                  'rounded-md font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                )}
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                Go Home
              </button>
            </div>

            {/* Additional Help */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                If this problem persists, please try:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                <li>• Clearing your browser cache and cookies</li>
                <li>• Disabling browser extensions temporarily</li>
                <li>• Using a different browser or incognito mode</li>
                {isChunkError && (
                  <li>• Hard refreshing the page (Ctrl+F5 or Cmd+Shift+R)</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return this.renderErrorUI();
    }

    return this.props.children;
  }
}

// Functional wrapper for easier usage with hooks
interface ErrorBoundaryWrapperProps extends Omit<ErrorBoundaryProps, 'onError'> {
  onError?: (error: Error, errorInfo: ErrorInfo, retry: () => void) => void;
}

// eslint-disable-next-line react/function-component-definition
export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
  children,
  onError,
  ...props
}) => {
  const errorBoundaryRef = React.useRef<ErrorBoundary>(null);

  const handleError = React.useCallback((error: Error, errorInfo: ErrorInfo) => {
    const retry = () => errorBoundaryRef.current?.handleRetry();
    onError?.(error, errorInfo, retry);
  }, [onError]);

  return (
    <ErrorBoundary
      ref={errorBoundaryRef}
      onError={handleError}
      {...props}
    >
      {children}
    </ErrorBoundary>
  );
};

// Hook for programmatic error handling
export const useErrorHandler = () => React.useCallback((error: Error, _errorInfo?: Partial<ErrorInfo>) => {
    // Re-throw the error to be caught by error boundary
    setTimeout(() => {
      throw error;
    }, 0);
  }, []);

// Default export
export default ErrorBoundary;
