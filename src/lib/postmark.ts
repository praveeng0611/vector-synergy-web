/**
 * Postmark email service utility
 * Handles all email sending functionality through Postmark API
 */

interface PostmarkEmailOptions {
  to: string;
  from?: string;
  subject: string;
  htmlBody: string;
  textBody?: string;
  messageStream?: string;
}

interface PostmarkResponse {
  to: string;
  submittedAt: string;
  messageId: string;
  errorCode: number;
  message: string;
}

/**
 * Send email using Postmark API
 */
export async function sendEmail(options: PostmarkEmailOptions): Promise<PostmarkResponse> {
  const postmarkKey = process.env.POSTMARK_KEY;
  
  if (!postmarkKey) {
    throw new Error('POSTMARK_KEY environment variable is not set');
  }

  const {
    to,
    from = 'info@vector-synergy.com',
    subject,
    htmlBody,
    textBody,
    messageStream = 'outbound'
  } = options;

  const payload = {
    From: from,
    To: to,
    Subject: subject,
    HtmlBody: htmlBody,
    TextBody: textBody,
    MessageStream: messageStream,
  };

  try {
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Postmark API error: ${errorData.message || response.statusText}`);
    }

    const result: PostmarkResponse = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

/**
 * Generate HTML template for contact form submissions
 */
export function generateContactEmailHTML(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  timeline?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Inquiry - Vector Synergy</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #1a365d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1a365d; display: block; margin-bottom: 5px; }
        .value { background: #f7f9fc; padding: 10px; border-radius: 4px; border-left: 4px solid #3182ce; }
        .footer { background: #f7f9fc; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Project Inquiry</h1>
          <p>Vector Synergy Contact Form Submission</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Contact Information</span>
            <div class="value">
              <strong>${data.firstName} ${data.lastName}</strong><br>
              Email: <a href="mailto:${data.email}">${data.email}</a><br>
              ${data.phone ? `Phone: ${data.phone}<br>` : ''}
              ${data.company ? `Company: ${data.company}` : ''}
            </div>
          </div>

          <div class="field">
            <span class="label">Project Type</span>
            <div class="value">${data.projectType}</div>
          </div>

          ${data.timeline ? `
          <div class="field">
            <span class="label">Timeline</span>
            <div class="value">${data.timeline}</div>
          </div>
          ` : ''}

          <div class="field">
            <span class="label">Project Description</span>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>

        <div class="footer">
          <p>This inquiry was submitted through the Vector Synergy website contact form.</p>
          <p><strong>Next Steps:</strong> Please respond within 24 hours as promised on the website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text version for contact form submissions
 */
export function generateContactEmailText(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  timeline?: string;
}) {
  return `
NEW PROJECT INQUIRY - Vector Synergy

Contact Information:
${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}

Project Type: ${data.projectType}
${data.timeline ? `Timeline: ${data.timeline}` : ''}

Project Description:
${data.message}

---
This inquiry was submitted through the Vector Synergy website contact form.
Please respond within 24 hours as promised on the website.
  `;
}

/**
 * Generate HTML template for newsletter subscription confirmations
 */
export function generateNewsletterWelcomeHTML(email: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Vector Synergy Updates</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #1a365d; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 30px; }
        .welcome-box { background: #f0f9ff; padding: 20px; border-radius: 6px; border-left: 4px solid #3182ce; margin: 20px 0; }
        .footer { background: #f7f9fc; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
        .button { display: inline-block; background: #3182ce; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Vector Synergy!</h1>
          <p>Thank you for subscribing to our newsletter</p>
        </div>
        
        <div class="content">
          <div class="welcome-box">
            <h2>🎉 You're all set!</h2>
            <p>Thank you for subscribing to Vector Synergy updates. You'll now receive:</p>
            <ul>
              <li>Engineering insights and industry trends</li>
              <li>Project case studies and success stories</li>
              <li>New service announcements</li>
              <li>Company news and updates</li>
            </ul>
          </div>

          <p>We're excited to share our engineering expertise with you and keep you updated on the latest innovations in product design, prototyping, and manufacturing.</p>

          <p><strong>What's Next?</strong></p>
          <ul>
            <li>Explore our services at <a href="https://vector-synergy.com/services">vector-synergy.com/services</a></li>
            <li>Check out our recent projects at <a href="https://vector-synergy.com/projects">vector-synergy.com/projects</a></li>
            <li>Have a project in mind? <a href="https://vector-synergy.com/contact">Get in touch!</a></li>
          </ul>
        </div>

        <div class="footer">
          <p>You're receiving this email because you subscribed to updates at vector-synergy.com</p>
          <p>Vector Synergy | Engineering Excellence Center</p>
          <p><a href="mailto:info@vector-synergy.com">info@vector-synergy.com</a> | +91 9765210570</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text version for newsletter welcome
 */
export function generateNewsletterWelcomeText(email: string) {
  return `
WELCOME TO VECTOR SYNERGY!

Thank you for subscribing to our newsletter, ${email}!

You're all set! You'll now receive:
• Engineering insights and industry trends
• Project case studies and success stories  
• New service announcements
• Company news and updates

We're excited to share our engineering expertise with you and keep you updated on the latest innovations in product design, prototyping, and manufacturing.

WHAT'S NEXT?
• Explore our services: https://vector-synergy.com/services
• Check out recent projects: https://vector-synergy.com/projects  
• Have a project in mind? Contact us: https://vector-synergy.com/contact

---
Vector Synergy | Engineering Excellence Center
info@vector-synergy.com | +91 9765210570

You're receiving this email because you subscribed to updates at vector-synergy.com
  `;
}
