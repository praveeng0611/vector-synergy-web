import React from 'react';
import { cn } from '@/lib/utils';
// UI
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonHeroProps {
  className?: string;
}

/**
 * SkeletonHero - Skeleton loader for Hero carousel slides
 * Matches the Hero section layout structure
 */
export function SkeletonHero({ className }: SkeletonHeroProps) {
  return (
    <div className={cn('animate-pulse', className)}>
      <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center py-10 lg:py-20">
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <Skeleton className="w-48 h-8 bg-muted rounded-full" />

              {/* Title */}
              <div className="space-y-3">
                <Skeleton className="h-12 bg-muted rounded-md w-full" />
                <Skeleton className="h-12 bg-muted rounded-md w-4/5" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-4 bg-muted rounded-md w-full" />
                <Skeleton className="h-4 bg-muted rounded-md w-full" />
                <Skeleton className="h-4 bg-muted rounded-md w-3/4" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-4">
              <Skeleton className="h-12 bg-muted rounded-md w-32" />
              <Skeleton className="h-12 bg-muted rounded-md w-36" />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Skeleton className="aspect-3/2 bg-muted rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
