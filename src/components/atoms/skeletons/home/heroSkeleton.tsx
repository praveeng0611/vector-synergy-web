import React from 'react';
// UI
import { Skeleton } from '@/components/ui/skeleton';
// skeletons
import { SkeletonHero } from '@/components/atoms/skeletons';

export function HeroSkeleton() {
  return (
    <section className="relative w-full overflow-hidden pb-10 lg:pb-20">
      <SkeletonHero />
      {/* Skeleton Navigation */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Skeleton key={index} className="bg-muted w-2 h-2 rounded-full" />
        ))}
      </div>
    </section>
  );
}
