import React from 'react';
import { cn } from '@/lib/utils';
// Skeletons
import { SkeletonCard } from './skeleton-card';

interface SkeletonGridProps {
  className?: string;
  columns?: number;
  rows?: number;
  cardType?: 'service' | 'project' | 'testimonial' | 'basic';
}

/**
 * SkeletonGrid - Grid of skeleton cards
 * Perfect for services, projects, testimonials grids
 */
export function SkeletonGrid({
  className,
  columns = 3,
  rows = 1,
  cardType = 'basic',
}: SkeletonGridProps) {
  const totalCards = columns * rows;

  const getCardProps = () => {
    switch (cardType) {
      case 'service':
        return {
          hasImage: false,
          hasIcon: true,
          hasTitle: true,
          hasDescription: true,
          descriptionLines: 2,
        };
      case 'project':
        return {
          hasImage: true,
          hasTitle: true,
          hasDescription: true,
          hasTags: true,
          descriptionLines: 2,
        };
      case 'testimonial':
        return {
          hasImage: false,
          hasTitle: false,
          hasDescription: true,
          descriptionLines: 4,
        };
      default:
        return {
          hasImage: true,
          hasTitle: true,
          hasDescription: true,
          descriptionLines: 3,
        };
    }
  };

  const gridCols =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={cn('grid gap-8', gridCols, className)}>
      {Array.from({ length: totalCards }).map((_, index) => (
        <SkeletonCard key={index} {...getCardProps()} />
      ))}
    </div>
  );
}
