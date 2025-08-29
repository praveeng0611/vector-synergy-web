import React from 'react';
// Ui
import { Skeleton } from '@/components/ui/skeleton';
// skeletons
import { SkeletonSection, SkeletonGrid } from '@/components/atoms/skeletons';

export function FeaturesSkeleton() {
  return (
    <section className="pt-24 sm:pt-32 bg-gradient-to-br from-muted/30 to-accent isolate relative skew-y-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 -skew-y-2">
        <SkeletonSection className="mb-16" />
        <SkeletonGrid columns={3} cardType="project" className="mb-12" />
        <div className="text-center">
          <Skeleton className="h-12 bg-muted rounded-md w-44 mx-auto" />
        </div>
      </div>
      <div className="mt-24 sm:mt-32 -mb-1 h-32" />
    </section>
  );
}
