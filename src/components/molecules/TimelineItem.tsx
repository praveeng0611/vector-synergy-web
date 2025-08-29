import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

/**
 * TimelineItem molecule component
 * Reusable component for displaying timeline milestones with year, title, and description
 */
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  className?: string;
}

export function TimelineItem({ year, title, description, className = '' }: TimelineItemProps) {
  return (
    <div className={`relative flex items-start gap-8 ${className}`}>
      {/* Timeline dot */}
      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
        {year}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-16">
        <Card className="h-full">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground leading-6">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
