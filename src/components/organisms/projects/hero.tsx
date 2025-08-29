import { Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

/**
 * Projects page hero section
 * Displays projects introduction with engineering excellence showcase
 */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-muted/30 to-accent overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="mr-2 h-4 w-4" />
              Engineering Excellence Showcased
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our{' '}
              <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped industry leaders achieve breakthrough results
              through innovative engineering solutions. Each project demonstrates our
              commitment to excellence and technical expertise.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover mt-16 sm:mt-16 -mb-1 rotate-180"
        loading="lazy"
      /> */}
    </section>
  );
}
