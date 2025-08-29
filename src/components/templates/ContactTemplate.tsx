import React from 'react';

import { ContactForm } from '@/components/organisms/contact/contact-form';
import { ContactInfo } from '@/components/organisms/contact/contact-info';
import { Hero } from '@/components/organisms/contact/hero';
import { Location } from '@/components/organisms/contact/location';
import { CTA } from '@/components/organisms/cta';

/**
 * Contact page template that composes all contact page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function ContactTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ContactInfo />
      <ContactForm />
      <Location />
      <CTA />
    </div>
  );
}
