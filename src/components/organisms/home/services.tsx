import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { services } from '@/content';

export function Services() {
  return (
    <section className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-in-up animate-delay-100 mb-16">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Engineering Solutions"
            description="From initial concept to final production, we provide end-to-end engineering services to bring your vision to life."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-delay-${Math.min(300 + index * 100, 800)} hover-scale`}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animate-delay-800">
          <Button
            asChild
            size="lg"
            className="hover-scale transition-all duration-200 hover:shadow-lg"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
