import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// UI
import { Button } from '@/components/ui/button';

/**
 * About page hero section
 * Displays company introduction with engineering excellence badge and call-to-action
 */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-muted/30 to-accent overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Calendar className="mr-2 h-4 w-4" />
                Engineering Excellence Since 2013
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                About <span className="text-primary">Vector Synergy</span>
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                For over a decade, we've been at the forefront of engineering innovation,
                transforming complex challenges into elegant solutions. Our journey began with a
                simple belief: that exceptional engineering can change the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center">
              <Image
                src="/images/1.png"
                alt="About Hero"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
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
