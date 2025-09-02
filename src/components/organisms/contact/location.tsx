import { Building, Globe, Users, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Location section for Contact page
 * Displays office location details with facility information and visual placeholder
 */
export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              subtitle="Our Location"
              title="Engineering Excellence Center"
              description="Visit our state-of-the-art facility equipped with the latest engineering tools and technologies."
              centered={false}
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    K P Square, Off/609 Sr No, 127/1a,
                    <br />
                    Opp. Double Tree, Chinchwad East,
                    <br />
                    Pune, Pune City, Maharashtra,
                    <br />
                    India, 411019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Global Reach</h3>
                  <p className="text-muted-foreground">
                    While our headquarters is centrally located, we serve clients worldwide through
                    our network of partners and remote collaboration capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Facilities</h3>
                  <p className="text-muted-foreground">
                    Our facility features advanced prototyping equipment, testing labs,
                    collaborative workspaces, and meeting rooms for client consultations.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="https://maps.app.goo.gl/N56Guzx5J91WKHrJ8" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          {/* Location Image/Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4648953706815!2d73.79558677519469!3d18.64312298247439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cf1bf5a6c7%3A0xf733d14451e428f8!2sKP%20Square!5e0!3m2!1sen!2sin!4v1756826665090!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
