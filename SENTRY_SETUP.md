# Sentry Setup Guide for Vector Synergy

This guide will help you set up Sentry error monitoring and performance tracking for the Vector Synergy website.

## 🚀 Quick Setup

### 1. Create a Sentry Account and Project

1. Go to [sentry.io](https://sentry.io) and create an account
2. Create a new project and select "Next.js" as the platform
3. Follow the setup wizard to get your DSN

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# =============================================================================
# SENTRY CONFIGURATION (Required)
# =============================================================================

# Sentry DSN for error reporting
SENTRY_DSN=https://your-dsn@o0.ingest.sentry.io/0000000
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@o0.ingest.sentry.io/0000000

# Sentry Organization and Project (for source map uploads)
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=vector-synergy

# Sentry Auth Token (for source map uploads during build)
SENTRY_AUTH_TOKEN=your-auth-token

# =============================================================================
# SENTRY CONFIGURATION (Optional)
# =============================================================================

# Environment name
SENTRY_ENVIRONMENT=production
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production

# Release version (auto-generated if not set)
SENTRY_RELEASE=1.0.0
NEXT_PUBLIC_SENTRY_RELEASE=1.0.0

# Enable Sentry in development (default: false)
ENABLE_SENTRY=false
```

### 3. Deploy to Vercel

When deploying to Vercel, add these environment variables in your Vercel dashboard:

**Production Environment Variables:**
- `SENTRY_DSN` (secret)
- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_ORG` (secret)
- `SENTRY_PROJECT` (secret)
- `SENTRY_AUTH_TOKEN` (secret)
- `SENTRY_ENVIRONMENT` = `production`
- `NEXT_PUBLIC_SENTRY_ENVIRONMENT` = `production`

## 📋 Features Included

### ✅ Error Monitoring
- **Client-side errors** - JavaScript errors in the browser
- **Server-side errors** - API routes and server-side rendering errors
- **Edge runtime errors** - Middleware and edge function errors
- **Error boundaries** - React error boundary integration

### ✅ Performance Monitoring
- **Core Web Vitals** - LCP, FID, CLS tracking
- **Page load performance** - Route-level performance monitoring
- **API performance** - Server-side request tracking
- **Custom spans** - Track specific functions or operations

### ✅ User Context
- **Session replay** - Visual reproduction of user sessions (when errors occur)
- **User feedback** - In-app feedback widget for users to report issues
- **Breadcrumbs** - Track user actions leading to errors
- **Custom tags** - Organize errors by component, page, user type, etc.

### ✅ Security & Privacy
- **Data filtering** - Sensitive data is automatically filtered out
- **Source map privacy** - Source maps are uploaded securely and not exposed
- **GDPR compliance** - User data handling follows privacy regulations
- **CSP integration** - Content Security Policy headers included

## 🛠️ Usage Examples

### Basic Error Capture

```typescript
import { captureException } from '@/lib/sentry';

try {
  // Your code here
  await riskyOperation();
} catch (error) {
  captureException(error as Error, {
    tags: {
      component: 'ContactForm',
      action: 'submit',
    },
    extra: {
      formData: sanitizedFormData,
    },
  });
  
  // Handle the error gracefully
  showErrorMessage('Something went wrong. Please try again.');
}
```

### Custom Message Logging

```typescript
import { captureMessage } from '@/lib/sentry';

// Log important events
captureMessage('User completed project inquiry', 'info', {
  tags: {
    component: 'ContactForm',
    event: 'inquiry_submitted',
  },
  extra: {
    projectType: 'automotive-simulation',
    estimatedBudget: '$50k-100k',
  },
});
```

### User Context

```typescript
import { initializeSentryUser } from '@/lib/sentry';

// When user logs in or identifies themselves
initializeSentryUser({
  id: '12345',
  email: 'john.doe@techcorp.com',
  name: 'John Doe',
  company: 'TechCorp Industries',
  role: 'engineering_manager',
});
```

### Performance Tracking

```typescript
import { startSpan } from '@/lib/sentry';

// Track custom operations
const span = startSpan('cad_file_processing', 'processing');
try {
  await processCADFile(file);
  span.setStatus({ code: 2 }); // Success
} catch (error) {
  span.setStatus({ code: 2, message: error.message }); // Error
  throw error;
} finally {
  span.finish();
}
```

## 🔧 Configuration Details

### Client-side Configuration (`sentry.client.config.ts`)
- **Session Replay** - Records user sessions when errors occur
- **User Feedback** - In-app widget for user error reports
- **Performance Monitoring** - Core Web Vitals and page performance
- **Error Filtering** - Filters out development and non-critical errors

### Server-side Configuration (`sentry.server.config.ts`)
- **API Monitoring** - Tracks server-side API performance
- **Server Error Capture** - Captures unhandled server errors
- **Request Context** - Adds request information to error reports
- **Performance Profiling** - Server-side performance monitoring

### Edge Runtime Configuration (`sentry.edge.config.ts`)
- **Middleware Monitoring** - Tracks edge function performance
- **Edge Error Capture** - Captures edge runtime errors
- **Minimal Configuration** - Optimized for edge runtime constraints

## 📊 Monitoring Dashboard

Once set up, you'll have access to:

1. **Issues Dashboard** - All errors organized by frequency and impact
2. **Performance Dashboard** - Page load times, API response times, Core Web Vitals
3. **Releases Dashboard** - Track errors by deployment version
4. **User Feedback** - Direct feedback from users when they encounter errors
5. **Alerts** - Email/Slack notifications for critical errors or performance degradation

## 🚨 Production Considerations

### Release Tracking
The configuration automatically tracks releases using:
- Git commit SHA (in CI/CD environments)
- Environment variables (manual override)
- Package.json version (fallback)

### Source Maps
- Source maps are automatically uploaded during build
- Source maps are hidden from production bundles
- Debugging information is available in Sentry dashboard

### Performance Impact
- Minimal performance impact (< 1% overhead)
- Smart sampling rates (lower in production)
- Efficient bundling with tree-shaking

### Data Privacy
- PII is automatically scrubbed from error reports
- User consent can be implemented for session replay
- GDPR-compliant data handling

## 🔍 Troubleshooting

### Common Issues

1. **No errors appearing in Sentry**
   - Check that `SENTRY_DSN` is set correctly
   - Verify the DSN is for the correct project
   - Check browser console for Sentry initialization errors

2. **Source maps not working**
   - Ensure `SENTRY_AUTH_TOKEN` has the correct permissions
   - Check that `SENTRY_ORG` and `SENTRY_PROJECT` match your Sentry setup
   - Verify the build process is uploading source maps

3. **Too many errors**
   - Adjust sampling rates in the configuration files
   - Add more specific error filtering in `beforeSend` functions
   - Use release health to identify problematic deployments

### Support Contacts

For technical issues with this setup:
- **Development Team**: dev@vector-synergy.com
- **Sentry Documentation**: https://docs.sentry.io/platforms/javascript/guides/nextjs/
- **Emergency Support**: Call +1 (555) VECTOR

---

**Vector Synergy - Engineering Innovation. Delivered.** 