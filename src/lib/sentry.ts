/**
 * Sentry utility functions for error handling and reporting
 */
import * as Sentry from '@sentry/nextjs';

/**
 * Capture an exception with additional context
 * @param error - The error to capture
 * @param context - Additional context information
 */
export const captureException = (error: Error, context?: {
  tags?: Record<string, string>;
  extra?: Record<string, any>;
  user?: Sentry.User;
  level?: Sentry.SeverityLevel;
}) => {
  Sentry.captureException(error, {
    tags: {
      project: 'vector-synergy',
      ...context?.tags,
    },
    extra: context?.extra,
    user: context?.user,
    level: context?.level || 'error',
  });
};

/**
 * Capture a message with additional context
 * @param message - The message to capture
 * @param level - The severity level
 * @param context - Additional context information
 */
export const captureMessage = (
  message: string, 
  level: Sentry.SeverityLevel = 'info',
  context?: {
    tags?: Record<string, string>;
    extra?: Record<string, any>;
    user?: Sentry.User;
  }
) => {
  Sentry.captureMessage(message, {
    level,
    tags: {
      project: 'vector-synergy',
      ...context?.tags,
    },
    extra: context?.extra,
    user: context?.user,
  });
};

/**
 * Set user context for error reporting
 * @param user - User information
 */
export const setUser = (user: {
  id?: string;
  email?: string;
  username?: string;
  name?: string;
  company?: string;
}) => {
  Sentry.setUser(user);
};

/**
 * Set additional tags for error context
 * @param tags - Tags to set
 */
export const setTags = (tags: Record<string, string>) => {
  Sentry.setTags(tags);
};

/**
 * Set additional context for error reporting
 * @param context - Context information
 */
export const setContext = (key: string, context: Record<string, any>) => {
  Sentry.setContext(key, context);
};

/**
 * Add breadcrumb for error tracking
 * @param message - Breadcrumb message
 * @param category - Breadcrumb category
 * @param level - Breadcrumb level
 * @param data - Additional data
 */
export const addBreadcrumb = (
  message: string,
  category: string = 'custom',
  level: Sentry.SeverityLevel = 'info',
  data?: Record<string, any>
) => {
  Sentry.addBreadcrumb({
    message,
    category,
    level,
    data,
    timestamp: Date.now() / 1000,
  });
};

/**
 * Start a new span for performance monitoring
 * @param name - Span name
 * @param op - Operation name
 * @returns Span instance
 */
export const startSpan = (name: string, op: string = 'custom') => {
  return Sentry.startSpan({
    name,
    op,
    attributes: {
      project: 'vector-synergy',
    },
  }, (span) => span);
};

/**
 * Wrap a function with error capturing
 * @param fn - Function to wrap
 * @param context - Additional context for errors
 * @returns Wrapped function
 */
export const withErrorCapture = <T extends (...args: any[]) => any>(
  fn: T,
  context?: {
    tags?: Record<string, string>;
    extra?: Record<string, any>;
  }
): T => {
  return ((...args: Parameters<T>) => {
    try {
      const result = fn(...args);
      
      // Handle async functions
      if (result instanceof Promise) {
        return result.catch((error) => {
          captureException(error, context);
          throw error;
        });
      }
      
      return result;
    } catch (error) {
      captureException(error as Error, context);
      throw error;
    }
  }) as T;
};

/**
 * Track a custom event
 * @param eventName - Name of the event
 * @param properties - Event properties
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  addBreadcrumb(
    `Event: ${eventName}`,
    'event',
    'info',
    properties
  );
  
  // You can also send to analytics services here
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
};

/**
 * Initialize Sentry with user context from authentication
 * @param user - User information
 */
export const initializeSentryUser = (user: {
  id?: string;
  email?: string;
  name?: string;
  company?: string;
  role?: string;
}) => {
  setUser({
    id: user.id,
    email: user.email,
    username: user.email,
    name: user.name,
    company: user.company,
  });
  
  setTags({
    userRole: user.role || 'unknown',
    company: user.company || 'unknown',
  });
  
  addBreadcrumb(
    'User authenticated',
    'auth',
    'info',
    {
      userId: user.id,
      company: user.company,
    }
  );
}; 