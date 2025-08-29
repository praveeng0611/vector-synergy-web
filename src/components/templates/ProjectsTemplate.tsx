import React from 'react';

import { CTA } from '@/components/organisms/cta';
import { AdditionalProjects } from '@/components/organisms/projects/additional-projects';
import { FeaturedProjects } from '@/components/organisms/projects/featured-projects';
import { Hero } from '@/components/organisms/projects/hero';
import { Stats } from '@/components/organisms/projects/stats';

/**
 * Projects page template that composes all projects page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function ProjectsTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects />
      <AdditionalProjects />
      <Stats />
      <CTA />
    </div>
  );
}
