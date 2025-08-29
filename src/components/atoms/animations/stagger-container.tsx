'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

/**
 * StaggerContainer - A container that staggers the animation of its children
 * Perfect for grids of cards, lists, navigation items, etc.
 */
export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({
    children,
    staggerDelay = 0.1,
    initialDelay = 0,
    className,
    once = true,
    threshold = 0.1,
    ...props
  }, ref) => {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: initialDelay,
          staggerChildren: staggerDelay,
          
        }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: threshold }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = 'StaggerContainer';