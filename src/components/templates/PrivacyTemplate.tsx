import React from 'react';

import { Hero } from '@/components/organisms/privacy/hero';
import { PrivacyContent } from '@/components/organisms/privacy/privacy-content';
import { CTA } from '@/components/organisms/cta';

/**
 * Privacy Policy page template that composes all privacy page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function PrivacyTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PrivacyContent />
      <CTA />
    </div>
  );
}
