import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Contact information section for Contact page
 * Displays contact cards with phone, email, LinkedIn, and office info
 */
export function ContactInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 (9765210570)',
      link: 'tel:+91-9765210570',
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@vector-synergy.com',
      link: 'mailto:info@vector-synergy.com',
      description: 'Send us your project details',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: '/company/vector-synergy',
      link: 'https://linkedin.com/company/vector-synergy',
      description: 'Connect with us professionally',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Engineering Excellence Center',
      link: '#location',
      description: 'Visit our state-of-the-art facility',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Information"
          description="Multiple ways to reach our engineering team for your project needs."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.title}
                    </h3>
                    <Link
                      href={contact.link}
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contact.details}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
