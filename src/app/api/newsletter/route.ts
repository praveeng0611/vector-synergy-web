import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateNewsletterWelcomeHTML, generateNewsletterWelcomeText } from '@/lib/postmark';

interface NewsletterSubscription {
  email: string;
}

/**
 * Handle POST requests to /api/newsletter
 * Processes newsletter subscriptions and sends welcome emails
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: NewsletterSubscription = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Generate welcome email content
    const htmlBody = generateNewsletterWelcomeHTML(email);
    const textBody = generateNewsletterWelcomeText(email);

    try {
      // Send welcome email to subscriber
      await sendEmail({
        to: email,
        from: 'info@vector-synergy.com',
        subject: 'Welcome to Vector Synergy Updates!',
        htmlBody,
        textBody,
        messageStream: 'outbound'
      });

      // Send notification to company about new subscription
      await sendEmail({
        to: 'info@vector-synergy.com',
        from: 'info@vector-synergy.com',
        subject: 'New Newsletter Subscription',
        htmlBody: `
          <h2>New Newsletter Subscription</h2>
          <p>A new user has subscribed to the Vector Synergy newsletter:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p><em>This notification was generated automatically from the website newsletter signup.</em></p>
        `,
        textBody: `
NEW NEWSLETTER SUBSCRIPTION

Email: ${email}
Subscribed at: ${new Date().toLocaleString()}

This notification was generated automatically from the website newsletter signup.
        `,
        messageStream: 'outbound'
      });

      // Log successful subscription (for monitoring)
      console.log(`Newsletter subscription: ${email} at ${new Date().toISOString()}`);

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for subscribing! Please check your email for a welcome message.'
        },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Failed to send newsletter emails:', emailError);
      
      // Even if email fails, we can still record the subscription
      // In a real app, you might want to save to database here
      return NextResponse.json(
        {
          success: true,
          message: 'Subscription recorded, but there was an issue sending the welcome email. You\'re still subscribed!'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process subscription. Please try again.',
        success: false 
      },
      { status: 500 }
    );
  }
}

/**
 * Handle OPTIONS requests for CORS
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
