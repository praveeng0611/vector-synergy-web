import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

/**
 * Emergency contact section for Contact page
 * Displays urgent assistance contact information with prominent call-to-action
 */
export function Emergency() {
  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Need Immediate Assistance?
          </h2>
          <p className="text-muted-foreground">
            For urgent engineering support or emergency consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="tel:+1-555-VECTOR">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:emergency@vector-synergy.com">
                <Mail className="mr-2 h-5 w-5" />
                Emergency Email
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
