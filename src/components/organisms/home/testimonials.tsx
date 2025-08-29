import { Quote } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { testimonials } from '@/content';

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-in-up animate-delay-100 mb-16">
          <SectionHeading
            subtitle="Client Testimonials"
            title="What Our Partners Say"
            description="Hear from industry leaders who have experienced the Vector Synergy difference."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-delay-${Math.min(300 + index * 150, 700)} hover-scale`}
            >
              <Card className="relative h-full transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <blockquote className="text-muted-foreground leading-7 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-border/40 pt-6">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
