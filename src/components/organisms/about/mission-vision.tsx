import { Target, Award, Users } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Mission, Vision & Purpose section for About page
 * Displays three-column layout with company's foundational principles
 */
export function MissionVision() {
  const principles = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To accelerate innovation through comprehensive engineering solutions that bridge the gap between concept and reality, empowering businesses to achieve breakthrough results.',
    },
    {
      icon: Award,
      title: 'Vision',
      description: 'To be the leading global partner for engineering innovation, recognized for our technical excellence, collaborative approach, and commitment to sustainable solutions.',
    },
    {
      icon: Users,
      title: 'Purpose',
      description: 'To create meaningful impact through engineering excellence, fostering innovation that improves lives, advances industries, and shapes a better future for all.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Foundation"
          title="Mission, Vision & Purpose"
          description="The guiding principles that drive everything we do at Vector Synergy."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Card key={index} className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-7">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
