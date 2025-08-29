import { Award, Lightbulb, Shield, Users, TrendingUp, Globe } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Company values section for About page
 * Displays grid of core values that shape company culture and decisions
 */
export function Values() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and set industry standards.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to drive innovation and create breakthrough solutions.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards, maintaining transparency and honesty in all our business relationships.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with clients to achieve shared goals and mutual success.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We are committed to continuous learning and improvement, staying ahead of industry trends and technological advances.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We aim to make a positive impact on the world through sustainable engineering solutions and responsible innovation.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Values"
          title="What Drives Us Forward"
          description="The core values that shape our culture, guide our decisions, and define our relationships."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-6">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
