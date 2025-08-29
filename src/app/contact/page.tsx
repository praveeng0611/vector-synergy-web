import React from 'react';
import type { Metadata } from 'next';
import { ContactTemplate } from '@/components/templates/ContactTemplate';

export const metadata: Metadata = {
  title: 'Contact Vector Synergy - Get Started Today',
  description: 'Contact Vector Synergy for your engineering project needs. Reach out via phone, email, or our contact form. Located at our Engineering Excellence Center.',
};

export default function ContactPage() {
  return <ContactTemplate />;
} 