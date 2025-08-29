import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// UI
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Capabilities section for About page
 * Displays core capabilities and technical expertise with visual placeholder
 */
export function Capabilities() {
  const capabilities = [
    'Advanced CAD/CAE Software Expertise',
    'Multi-Industry Domain Knowledge',
    'Agile Project Management',
    'Quality Assurance & Testing',
    'Regulatory Compliance',
    'Cost Optimization Strategies',
    'Sustainable Design Practices',
    'Digital Twin Development',
    'Rapid Prototyping Technologies',
    'Supply Chain Management',
  ];

  return (
    <section className="py-24 sm:py-32 min-h-[100dvh] bg-gradient-to-br from-primary to-secondary isolate relative animate-fade-in flex items-center justify-center">
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover mb-24 sm:mb-32 -mt-1"
        loading="lazy"
      /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              subtitle="Our Expertise"
              title="Core Capabilities & Strengths"
              description="The technical expertise and domain knowledge that enable us to deliver exceptional results."
              centered={false}
              textColor="text-white"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-sm font-medium text-white">{capability}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Capabilities Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
              <Image
                src="/images/2.png"
                alt="About Hero"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
