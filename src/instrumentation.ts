/**
 * Instrumentation file for Next.js 14
 * This file is used to register instrumentation hooks that will be called when a new Node.js instance is created.
 * https://nextjs.org/docs/pages/building-your-application/optimizing/instrumentation
 */

export async function register() {
  // Only register Sentry in production or when explicitly enabled
  if (process.env.NODE_ENV === 'production' || process.env.ENABLE_SENTRY === 'true') {
    // Register Sentry based on the runtime
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      // Server-side instrumentation
      await import('../sentry.server.config');
    }
    
    if (process.env.NEXT_RUNTIME === 'edge') {
      // Edge runtime instrumentation
      await import('../sentry.edge.config');
    }
  }
  
  // You can add other instrumentation here
  // For example, OpenTelemetry, DataDog, etc.
} 