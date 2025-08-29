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
                    Vector Synergy Headquarters
                    <br />
                    Engineering Excellence Center
                    <br />
                    Innovation District, Tech City
                    <br />
                    TC 12345, United States
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
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.760057309692!2d77.22260516602375!3d28.609074898776004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1753987011380!5m2!1sen!2sin"
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
