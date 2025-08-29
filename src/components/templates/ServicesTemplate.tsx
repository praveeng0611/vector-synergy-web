import React from 'react';

import { CTA } from '@/components/organisms/cta';
import { DetailedServices } from '@/components/organisms/services/detailed-services';
import { Hero } from '@/components/organisms/services/hero';
import { Process } from '@/components/organisms/services/process';
import { ServicesOverview } from '@/components/organisms/services/services-overview';

/**
 * Services page template that composes all services page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function ServicesTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesOverview />
      <DetailedServices />
      <Process />
      <CTA />
    </div>
  );
}
