import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

/**
 * ProcessStep molecule component
 * Reusable component for displaying process steps with number, title, and description
 */
interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}

export function ProcessStep({
  step,
  title,
  description,
  showArrow = false,
  className = '',
}: ProcessStepProps) {
  return (
    <div className={`relative ${className}`}>
      <Card className="h-full text-center">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {step}
            </div>
            <h3 className="font-semibold text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-6">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Arrow indicator */}
      {showArrow && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <div className="h-6 w-6 text-primary">→</div>
        </div>
      )}
    </div>
  );
}
