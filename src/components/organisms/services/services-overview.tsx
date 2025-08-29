import {
  Cog,
  Cpu,
  Wrench,
  BarChart3,
  TestTube,
  Settings,
  DollarSign,
  Factory,
} from 'lucide-react';
import React from 'react';

import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';

/**
 * Services overview section for Services page
 * Displays grid of service cards showing all engineering offerings
 */
export function ServicesOverview() {
  const services = [
    {
      icon: Cog,
      title: 'Product Design & CAD',
      shortDescription: 'Comprehensive product design solutions from concept to detailed CAD modeling using industry-leading tools.',
    },
    {
      icon: Cpu,
      title: 'E-R&D',
      shortDescription: 'Engineering Research & Development services to drive innovation and technological advancement.',
    },
    {
      icon: Wrench,
      title: 'Prototyping',
      shortDescription: 'Rapid prototyping and iterative development to validate concepts and accelerate time-to-market.',
    },
    {
      icon: BarChart3,
      title: 'CAE Simulation',
      shortDescription: 'Computer-Aided Engineering simulation and analysis for optimal design performance and validation.',
    },
    {
      icon: TestTube,
      title: 'Testing & Validation',
      shortDescription: 'Comprehensive testing protocols and validation services to ensure product reliability and compliance.',
    },
    {
      icon: Settings,
      title: 'Process Design & Automation',
      shortDescription: 'Streamlined process design and automation solutions to enhance efficiency and reduce operational costs.',
    },
    {
      icon: DollarSign,
      title: 'Strategic Cost Sourcing',
      shortDescription: 'Cost-effective sourcing strategies and supplier management for optimized procurement processes.',
    },
    {
      icon: Factory,
      title: 'Contract Manufacturing',
      shortDescription: 'End-to-end contract manufacturing services with quality assurance and scalable production capabilities.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Do"
          title="Complete Engineering Solutions"
          description="Our integrated approach ensures seamless project delivery from concept to completion."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
