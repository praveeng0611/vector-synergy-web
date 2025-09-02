import React from 'react';

/**
 * Terms and Conditions content section
 * Simple, clean layout with essential terms
 */
export function TermsContent() {
  const termsData = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using Vector Synergy's services, you accept and agree to be bound by these Terms and Conditions.",
        "If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time with reasonable notice."
      ]
    },
    {
      title: "2. Services Description",
      content: [
        "Vector Synergy provides comprehensive engineering services including product design, CAD services, simulation, prototyping, and manufacturing support.",
        "All services are provided subject to availability and our technical capabilities.",
        "Service specifications will be detailed in separate project agreements or statements of work."
      ]
    },
    {
      title: "3. Intellectual Property",
      content: [
        "All intellectual property rights in our proprietary methodologies, tools, and processes remain with Vector Synergy.",
        "Client retains ownership of their original intellectual property and project-specific deliverables as specified in project agreements.",
        "Any improvements or derivative works will be handled according to the specific terms outlined in each project contract."
      ]
    },
    {
      title: "4. Client Responsibilities",
      content: [
        "Clients must provide accurate and complete project requirements and specifications.",
        "Timely feedback and approvals are required to maintain project schedules.",
        "Clients are responsible for ensuring they have the right to use any materials or specifications they provide to us."
      ]
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "Vector Synergy's liability is limited to the total amount paid for the specific service in question.",
        "We are not liable for indirect, consequential, or punitive damages.",
        "Our liability does not extend to third-party products or services integrated with our deliverables."
      ]
    },
    {
      title: "6. Privacy & Confidentiality",
      content: [
        "We are committed to protecting your privacy and maintaining the confidentiality of your project information.",
        "Separate non-disclosure agreements may be executed for sensitive projects.",
        "We collect and use personal information only as necessary to provide our services and as outlined in our Privacy Policy."
      ]
    },
    {
      title: "7. Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements.",
        "Late payments may incur additional charges as specified in contracts.",
        "All fees are exclusive of applicable taxes unless otherwise stated."
      ]
    },
    {
      title: "8. Project Delivery",
      content: [
        "Delivery schedules are estimates and may be adjusted based on project complexity.",
        "Force majeure events may affect delivery timelines.",
        "Final deliverables are subject to agreed-upon acceptance criteria."
      ]
    },
    {
      title: "9. Termination",
      content: [
        "Either party may terminate services with reasonable notice as specified in project agreements.",
        "Termination does not affect obligations that have already accrued.",
        "Upon termination, clients will receive deliverables completed up to the termination date."
      ]
    },
    {
      title: "10. Governing Law",
      content: [
        "These terms are governed by the laws of the jurisdiction where Vector Synergy is incorporated.",
        "Any disputes will be resolved through binding arbitration or courts of competent jurisdiction.",
        "If any provision is found unenforceable, the remainder of these terms remain in effect."
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Terms List */}
        <div className="space-y-12">
          {termsData.map((section, index) => (
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
              Questions About These Terms?
            </h4>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="mailto:legal@vector-synergy.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                legal@vector-synergy.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a
                href="tel:+91-9765210570"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                +91-9765210570
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
