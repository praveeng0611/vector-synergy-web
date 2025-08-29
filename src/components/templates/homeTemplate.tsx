import React from 'react';

// All components are now server-side rendered for optimal performance
import { CTA } from '@/components/organisms/cta';
import { About } from '@/components/organisms/home/about';
import { Featured } from '@/components/organisms/home/featured';
import { Hero } from '@/components/organisms/home/hero';
import { Services } from '@/components/organisms/home/services';
import { Testimonials } from '@/components/organisms/home/testimonials';

export function HomeTemplate() {
  return (
    <div className="flex flex-col">
      {/* All components are now server-side rendered for optimal performance */}
      <Hero />
      <About />
      <Services />
      <Featured />
      <Testimonials />
      <CTA />
    </div>
  );
}
