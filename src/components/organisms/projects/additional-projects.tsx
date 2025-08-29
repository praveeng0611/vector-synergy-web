import Image from 'next/image';
import React from 'react';

import { ProjectCard } from '@/components/ui/project-card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Additional projects section for Projects page
 * Displays grid of additional project cards across different industries
 */
export function AdditionalProjects() {
  const additionalProjects = [
    {
      title: 'Medical Device Validation',
      description: 'Comprehensive testing and validation of next-generation medical devices ensuring regulatory compliance and patient safety.',
      imagePlaceholder: 'Medical Device Testing Setup',
      img: '/images/3.png',
      href: '/projects/medical-device-validation',
      tags: ['Medical', 'Validation', 'FDA'],
    },
    {
      title: 'Industrial Automation System',
      description: 'Design and implementation of automated manufacturing systems improving efficiency and reducing operational costs.',
      imagePlaceholder: 'Automation System Design',
      img: '/images/4.png',
      href: '/projects/industrial-automation',
      tags: ['Automation', 'Manufacturing', 'IoT'],
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'Advanced simulation and optimization of wind turbine blade designs for maximum energy efficiency and durability.',
      imagePlaceholder: 'Wind Turbine Simulation',
      img: '/images/5.png',
      href: '/projects/renewable-energy',
      tags: ['Renewable', 'Simulation', 'Optimization'],
    },
    {
      title: 'Consumer Electronics Design',
      description: 'Complete product development cycle for innovative consumer electronics from concept to mass production.',
      imagePlaceholder: 'Electronics Design Process',
      img: '/images/6.png',
      href: '/projects/consumer-electronics',
      tags: ['Electronics', 'Design', 'Manufacturing'],
    },
  ];

  return (
    <section className="py-24 sm:py-32 min-h-[100dvh] bg-gradient-to-br from-muted/30 to-accent isolate relative animate-fade-in flex items-center justify-center">
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover mb-24 sm:mb-32 -mt-1"
        loading="lazy"
      /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="More Projects"
          title="Diverse Engineering Solutions"
          description="Explore our wide range of engineering projects across different industries and applications."
          className="mb-16"
          // textColor="text-white"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {additionalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.img}
              imagePlaceholder={project.imagePlaceholder}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
