import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Process section for Services page
 * Displays 5-step process workflow showing how the company delivers excellence
 */
export function Process() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your requirements, challenges, and objectives through detailed consultation and analysis.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our team develops a customized strategy and approach tailored to your specific needs and industry requirements.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the project using proven methodologies, advanced tools, and rigorous quality control processes.',
    },
    {
      step: '04',
      title: 'Validation & Testing',
      description: 'Comprehensive testing and validation ensure that all deliverables meet specifications and performance requirements.',
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'We deliver complete solutions with documentation and provide ongoing support to ensure long-term success.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Process"
          title="How We Deliver Excellence"
          description="Our proven methodology ensures consistent results and exceeds expectations on every project."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-6">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
