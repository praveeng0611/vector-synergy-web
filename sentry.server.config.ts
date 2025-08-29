// This file configures the initialization of Sentry on the server side.
// The config you add here will be used whenever the server handles a request.
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
      component: 'server',
      project: 'vector-synergy',
    },
  },
  
  // Configure beforeSend to filter or modify events
  beforeSend(event, hint) {
    // Add server context
    event.tags = {
      ...event.tags,
      runtime: 'nodejs',
      platform: process.platform,
      nodeVersion: process.version,
    };
    
    // Filter out certain errors
    if (event.exception) {
      const error = hint.originalException;
      if (error && error instanceof Error) {
        // Don't report certain server errors in development
        if (process.env.NODE_ENV === 'development' && 
            (error.message.includes('ENOENT') || 
             error.message.includes('ECONNREFUSED'))) {
          return null;
        }
      }
    }
    
    return event;
  },
  
  // Configure integrations
  integrations: [
    // Add additional server-side integrations here
    Sentry.httpIntegration(),
  ],
  
  // Configure performance monitoring
  profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
}); 