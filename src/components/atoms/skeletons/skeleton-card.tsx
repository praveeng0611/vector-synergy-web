import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonCardProps {
  className?: string;
  hasImage?: boolean;
  hasTitle?: boolean;
  hasDescription?: boolean;
  hasIcon?: boolean;
  hasTags?: boolean;
  descriptionLines?: number;
}

/**
 * SkeletonCard - Reusable skeleton for card-based content
 * Perfect for service cards, project cards, testimonials, etc.
 */
export function SkeletonCard({
  className,
  hasImage = true,
  hasTitle = true,
  hasDescription = true,
  hasIcon = false,
  hasTags = false,
  descriptionLines = 3,
}: SkeletonCardProps) {
  return (
    <div className={cn(
      'animate-pulse bg-card rounded-xl p-6 border border-border',
      className
    )}>
      {/* Icon */}
      {hasIcon && (
        <div className="w-12 h-12 bg-muted rounded-lg mb-4" />
      )}

      {/* Image */}
      {hasImage && (
        <div className="w-full aspect-[4/3] bg-muted rounded-lg mb-4" />
      )}

      {/* Tags */}
      {hasTags && (
        <div className="flex gap-2 mb-3">
          <div className="h-5 bg-muted rounded-full w-16" />
          <div className="h-5 bg-muted rounded-full w-20" />
          <div className="h-5 bg-muted rounded-full w-14" />
        </div>
      )}

      {/* Title */}
      {hasTitle && (
        <div className="h-6 bg-muted rounded-md mb-3 w-3/4" />
      )}

      {/* Description */}
      {hasDescription && (
        <div className="space-y-2">
          {Array.from({ length: descriptionLines }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-4 bg-muted rounded-md',
                index === descriptionLines - 1 ? 'w-2/3' : 'w-full'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}