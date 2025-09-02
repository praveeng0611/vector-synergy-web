// icons
import { ArrowRight } from 'lucide-react';
// next
import Link from 'next/link';
import React from 'react';

// UI
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export function CTA() {
  return (
    <section className="relative px-6 py-12 sm:py-16 animate-scale-in">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16 rounded-xl relative isolate overflow-hidden"
        style={{
          background:
            'url(/images/wavey-fingerprint.svg), linear-gradient(to right, #000000, #000000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95 -z-1"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="animate-fade-in-up animate-delay-200">
              <SectionHeading
                title="Ready to Start Your Project?"
                description="Let's discuss how Vector Synergy can help accelerate your engineering innovation and bring your vision to life."
                textColor="text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="animate-fade-in-up animate-delay-400">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="hover-scale transition-all duration-200 hover:shadow-lg"
                >
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="animate-fade-in-up animate-delay-500">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-scale transition-all duration-200"
                >
                  <Link href="tel:+91-9765210570">Call +91 9765210570</Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-600">
              <div className="pt-8 border-t border-border/20 flex justify-center items-center gap-2">
                <a
                  href="mailto:info@vector-synergy.com"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  📧 info@vector-synergy.com
                </a>
                <span className="text-sm text-white/80">•</span>
                <a
                  href="/company/vector-synergy"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  🔗 LinkedIn: /company/vector-synergy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
