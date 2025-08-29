// This file configures the initialization of Sentry on the browser side.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV === 'development',
  
  replaysOnErrorSampleRate: 1.0,
  
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0.1,
  
  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Additional Feedback configuration goes in here, for example:
      colorScheme: 'light',
    }),
  ],
  
  // Configure release tracking
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV,
  
  // Configure tags for better error organization
  initialScope: {
    tags: {
      component: 'client',
      project: 'vector-synergy',
    },
  },
  
  // Configure beforeSend to filter or modify events
  beforeSend(event, hint) {
    // Filter out specific errors that shouldn't be reported
    if (event.exception) {
      const error = hint.originalException;
      if (error && error instanceof Error) {
        // Don't report certain development errors
        if (process.env.NODE_ENV === 'development' && 
            (error.message.includes('ChunkLoadError') || 
             error.message.includes('Loading chunk'))) {
          return null;
        }
      }
    }
    
    // Add user context if available
    if (typeof window !== 'undefined') {
      event.tags = {
        ...event.tags,
        url: window.location.href,
        userAgent: navigator.userAgent,
      };
    }
    
    return event;
  },
}); 