import { Shield, Calendar } from 'lucide-react';
import React from 'react';

/**
 * Terms and Conditions page hero section
 * Simple, clean introduction without imagery
 */
export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="mr-2 h-4 w-4" />
            Legal Terms & Compliance
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services. These terms govern your relationship with Vector Synergy.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <Calendar className="h-4 w-4" />
            <span>Last updated: January 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
