import { Shield, Calendar } from 'lucide-react';
import React from 'react';

/**
 * Privacy Policy page hero section
 * Simple, clean introduction without imagery
 */
export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="mr-2 h-4 w-4" />
            Privacy & Data Protection
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <Calendar className="h-4 w-4" />
            <span>Last updated: Aug 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
