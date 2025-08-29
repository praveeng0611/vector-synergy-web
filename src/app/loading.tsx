import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/0 rounded-2xl flex items-center justify-center mx-auto">
          <Image 
            src="/images/bouncing-circles.svg"
            alt="loading..."
            width={128}
            height={128}
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Loading...</h2>
          <p className="text-sm text-muted-foreground">
            Vector Synergy Engineering Solutions
          </p>
        </div>
      </div>
    </div>
  );
} 