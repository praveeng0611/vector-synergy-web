import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateContactEmailHTML, generateContactEmailText } from '@/lib/postmark';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  timeline?: string;
}

/**
 * Handle POST requests to /api/contact
 * Processes contact form submissions and sends emails via Postmark
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { firstName, lastName, email, projectType, message } = body;
    
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Generate email content
    const htmlBody = generateContactEmailHTML(body);
    const textBody = generateContactEmailText(body);

    // Send email to company
    await sendEmail({
      to: 'info@vector-synergy.com',
      from: 'info@vector-synergy.com',
      subject: `New Project Inquiry: ${projectType} - ${firstName} ${lastName}`,
      htmlBody,
      textBody,
      messageStream: 'outbound'
    });

    // Log successful submission (for monitoring)
    console.log(`Contact form submitted by ${firstName} ${lastName} (${email}) for ${projectType}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We\'ll respond within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Return generic error message to avoid exposing internal details
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly.',
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
