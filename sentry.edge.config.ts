// This file configures the initialization of Sentry for edge side rendering of pages.
// The config you add here will be used whenever a page is rendered at the edge.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV === 'development',
  
  // Configure release tracking
  release: process.env.SENTRY_RELEASE,
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,
  
  // Configure tags for better error organization
  initialScope: {
    tags: {
      component: 'edge',
      project: 'vector-synergy',
      runtime: 'edge',
    },
  },
  
  // Configure beforeSend to filter or modify events
  beforeSend(event, hint) {
    // Add edge runtime context
    event.tags = {
      ...event.tags,
      runtime: 'edge',
    };
    
    // Filter out certain edge runtime errors
    if (event.exception) {
      const error = hint.originalException;
      if (error && error instanceof Error) {
        // Don't report certain edge runtime errors in development
        if (process.env.NODE_ENV === 'development' && 
            error.message.includes('Dynamic Code Evaluation')) {
          return null;
        }
      }
    }
    
    return event;
  },
}); 