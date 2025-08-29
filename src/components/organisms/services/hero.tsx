import { Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

/**
 * Services page hero section
 * Displays services introduction with comprehensive solutions focus
 */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-muted/30 to-accent overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Lightbulb className="mr-2 h-4 w-4" />
              Comprehensive Engineering Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our{' '}
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              From initial concept to final production, we provide end-to-end engineering
              services that transform your vision into reality. Our comprehensive suite
              of services covers every aspect of the product development lifecycle.
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
              <Link href="/projects">View Our Work</Link>
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
