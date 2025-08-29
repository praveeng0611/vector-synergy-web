import React from 'react';

import { Hero } from '@/components/organisms/tnc/hero';
import { TermsContent } from '@/components/organisms/tnc/terms-content';
import { CTA } from '@/components/organisms/cta';

/**
 * Terms and Conditions page template that composes all TnC page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function TnCTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TermsContent />
      <CTA />
    </div>
  );
}
