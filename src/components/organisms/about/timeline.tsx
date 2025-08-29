import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Company timeline section for About page
 * Displays major milestones in company history since 2013
 */
export function Timeline() {
  const milestones = [
    {
      year: '2013',
      title: 'Company Founded',
      description:
        'Vector Synergy was established with a vision to revolutionize engineering solutions and bridge the gap between innovation and implementation.',
    },
    {
      year: '2015',
      title: 'First Major Contract',
      description:
        'Secured our first major automotive simulation project, establishing our reputation in the CAE simulation industry.',
    },
    {
      year: '2018',
      title: 'Expansion into Aerospace',
      description:
        'Expanded our services to include aerospace prototyping and testing, working with leading aviation companies.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description:
        'Implemented cutting-edge digital workflows and remote collaboration tools, enabling seamless global project delivery.',
    },
    {
      year: '2022',
      title: '500+ Projects Milestone',
      description:
        'Celebrated the successful completion of over 500 engineering projects across diverse industries and applications.',
    },
    {
      year: '2024',
      title: 'Innovation Hub Launch',
      description:
        'Opened our state-of-the-art Engineering Excellence Center, featuring advanced prototyping and testing facilities.',
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
          subtitle="Our Journey"
          title="A Decade of Engineering Excellence"
          description="From a small startup to a trusted global partner, here's how we've grown and evolved."
          className="mb-16"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary border border-white rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="flex-1 min-h-8">
                  <Card className="h-full bg-primary">
                    <CardContent className="px-6 py-2">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 leading-6">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
