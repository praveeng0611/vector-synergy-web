import { ArrowRight, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// UI
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Location & Contact section for About page
 * Displays office information and facility details with visual placeholder
 */
export function Location() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Location Info */}
          <div className="space-y-8">
            <SectionHeading
              subtitle="Our Location"
              title="Engineering Excellence Center"
              description="Visit us at our state-of-the-art facility equipped with the latest engineering tools and technologies."
              centered={false}
            />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Engineering Excellence Center
                    <br />
                    Vector Synergy Headquarters
                    <br />
                    Innovation District, Tech City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Team</h3>
                  <p className="text-muted-foreground">
                    Our diverse team of engineers, designers, and specialists work collaboratively
                    to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Office Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
              <Image
                src="/images/4.png"
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
