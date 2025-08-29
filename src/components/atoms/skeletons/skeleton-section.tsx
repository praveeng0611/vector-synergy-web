import React from 'react';
import { cn } from '@/lib/utils';
// Ui
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonSectionProps {
  className?: string;
  hasSubtitle?: boolean;
  hasDescription?: boolean;
  titleWidth?: string;
}

/**
 * SkeletonSection - Skeleton loader for section headers
 * Perfect for SectionHeading component loading states
 */
export function SkeletonSection({
  className,
  hasSubtitle = true,
  hasDescription = true,
  titleWidth = 'w-3/4',
}: SkeletonSectionProps) {
  return (
    <div className={cn('animate-pulse text-center space-y-4', className)}>
      {/* Subtitle */}
      {hasSubtitle && <Skeleton className="h-5 bg-muted rounded-md w-32 mx-auto" />}

      {/* Title */}
      <Skeleton className={cn('h-8 bg-muted rounded-md mx-auto', titleWidth)} />

      {/* Description */}
      {hasDescription && (
        <div className="space-y-2 max-w-2xl mx-auto">
          <Skeleton className="h-4 bg-muted rounded-md w-full" />
          <Skeleton className="h-4 bg-muted rounded-md w-4/5 mx-auto" />
        </div>
      )}
    </div>
  );
}
