import React from 'react';

/**
 * Privacy Policy content section
 * Simple, clean layout with essential privacy information
 */
export function PrivacyContent() {
  const privacyData = [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, request services, or contact us.",
        "Personal information may include your name, email address, phone number, company information, and project details.",
        "We automatically collect certain information about your device and usage of our services, including IP address, browser type, and pages visited."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use your information to provide, maintain, and improve our engineering services.",
        "To communicate with you about projects, updates, and respond to your inquiries.",
        "To process transactions and send you related information including confirmations and invoices.",
        "To send you technical notices, security alerts, and administrative messages."
      ]
    },
    {
      title: "3. Information Sharing",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.",
        "We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.",
        "We may disclose information if required by law or to protect our rights, property, or safety."
      ]
    },
    {
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information.",
        "We use encryption, secure servers, and other security measures to safeguard your data.",
        "Access to personal information is restricted to authorized personnel who need it to perform their job functions.",
        "Regular security assessments are conducted to identify and address potential vulnerabilities."
      ]
    },
    {
      title: "5. Data Retention",
      content: [
        "We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.",
        "Project-related information may be retained for the duration of the project and for a reasonable period thereafter for legal and business purposes.",
        "You may request deletion of your personal information, subject to certain legal and contractual obligations."
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You may opt out of receiving promotional communications from us at any time.",
        "You can request a copy of the personal information we hold about you.",
        "You have the right to object to or restrict certain processing of your information."
      ]
    },
    {
      title: "7. Cookies and Tracking",
      content: [
        "We use cookies and similar technologies to enhance your experience on our website.",
        "Cookies help us understand how you use our services and improve functionality.",
        "You can control cookie preferences through your browser settings.",
        "Some features of our services may not function properly if cookies are disabled."
      ]
    },
    {
      title: "8. Third-Party Services",
      content: [
        "Our website may contain links to third-party websites or services that are not operated by us.",
        "We are not responsible for the privacy practices of third-party websites.",
        "We encourage you to review the privacy policies of any third-party services you access.",
        "Integration with third-party tools is done in accordance with their respective privacy policies."
      ]
    },
    {
      title: "9. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your own.",
        "We ensure appropriate safeguards are in place when transferring data internationally.",
        "Data transfers comply with applicable data protection laws and regulations.",
        "We maintain the same level of protection regardless of where your data is processed."
      ]
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
        "We will notify you of any material changes by posting the updated policy on our website.",
        "Your continued use of our services after changes are posted constitutes acceptance of the updated policy.",
        "We encourage you to review this policy periodically to stay informed about how we protect your information."
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Privacy Policy List */}
        <div className="space-y-12">
          {privacyData.map((section, index) => (
            <div key={index} className="border-b border-border/20 pb-8 last:border-b-0">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Privacy Questions or Concerns?
            </h4>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:privacy@vector-synergy.com" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                privacy@vector-synergy.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="tel:+1-555-VECTOR" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +1 (555) VECTOR
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Vector Synergy Data Protection Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
