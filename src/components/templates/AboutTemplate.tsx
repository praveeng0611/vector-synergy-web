import React from 'react';

import { Capabilities } from '@/components/organisms/about/capabilities';
import { Hero } from '@/components/organisms/about/hero';
import { Location } from '@/components/organisms/about/location';
import { MissionVision } from '@/components/organisms/about/mission-vision';
import { Timeline } from '@/components/organisms/about/timeline';
import { Values } from '@/components/organisms/about/values';

/**
 * About page template that composes all about page organisms
 * Follows the Atomic Design pattern by organizing page-level layout
 */
export function AboutTemplate() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MissionVision />
      <Timeline />
      <Values />
      <Capabilities />
      <Location />
    </div>
  );
}
