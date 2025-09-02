import { Award, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export function About() {
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
          {/* About Image */}
          <div className="relative animate-scale-in animate-delay-200">
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center isolate relative">
              <div className="w-full h-full rounded-2xl bg-secondary/20 absolute top-4 -right-4 -z-1"></div>
              <Image
                src="/images/1.jpg"
                alt="Vector Synergy Engineering Team"
                width={600}
                height={450}
                className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up animate-delay-100">
            <div>
              <SectionHeading
                subtitle="About Vector Synergy"
                title="Your Trusted Engineering Partner"
                description="With managment experience of over a decade of engineering excellence, we transform complex challenges into innovative solutions."
                centered={false}
                textColor="text-white"
              />
            </div>

            <div className="space-y-4 animate-delay-500">
              <div className="flex items-start gap-3 animate-slide-in-left animate-delay-600">
                <Target className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Mission</h3>
                  <p className="text-white/80">
                    Our mission at Vector Synergy is to deliver innovative, reliable, and sustainable engineering solutions that drive progress across industries. We aim to be a trusted partner in transforming ideas into reality by leveraging deep technical expertise, advanced tools, and a collaborative approach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slide-in-left animate-delay-700">
                <Award className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Vision</h3>
                  <p className="text-white/80">
                    To be a global leader in engineering innovation, shaping the future through transformative design, sustainable development, and integrated technology solutions. We envision a world where engineering excellence drives progress, enhances quality of life, and fosters a smarter, safer, and more sustainable planet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slide-in-left animate-delay-800">
                <Users className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Values</h3>
                  <p className="text-white/80">
                    Excellence, innovation, integrity, and collaborative partnership in every
                    project we undertake.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-800">
              <Button
                asChild
                variant="accent-outline"
                className="hover-scale transition-all duration-200"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
