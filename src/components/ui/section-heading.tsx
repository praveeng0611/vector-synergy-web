/**
 * SectionHeading component
 */
import React, { ReactElement } from 'react';
// lib
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  textColor?: string;
}

/**
 * SectionHeading component for consistent section headers
 * @param props SectionHeadingProps
 * @returns ReactElement
 */
export function SectionHeading({ 
  title, 
  subtitle, 
  description,
  centered = true,
  className = '',
  textColor,
}: SectionHeadingProps): ReactElement {
  const textAlign = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`space-y-4 ${textAlign} ${className}`}>
      {subtitle && (
        <p className={cn("text-sm font-semibold text-primary uppercase tracking-wide", textColor ? textColor : 'text-primary')}>
          {subtitle}
        </p>
      )}
      
      <h2 className={cn("text-3xl font-bold tracking-tight text-foreground sm:text-4xl", textColor ? textColor : 'text-foreground')}>
        {title}
      </h2>
      
      {description && (
        <p className={cn("text-lg text-muted-foreground max-w-3xl mx-auto", textColor ? textColor : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </div>
  );
} 