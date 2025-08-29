'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HoverScaleProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

/**
 * HoverScale - A micro-interaction component for hover and tap effects
 * Perfect for cards, buttons, images, and interactive elements
 */
export const HoverScale = forwardRef<HTMLDivElement, HoverScaleProps>(
  ({
    children,
    scale = 1.02,
    duration = 0.2,
    className,
    whileHover,
    whileTap,
    ...props
  }, ref) => {
    const defaultHover = {
      scale,
      transition: {
        duration,
        
      }
    };

    const defaultTap = {
      scale: 0.98,
      transition: {
        duration: 0.1,
        
      }
    };

    return (
      <motion.div
        ref={ref}
        whileHover={whileHover || defaultHover}
        whileTap={whileTap || defaultTap}
        className={cn('cursor-pointer h-full', className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

HoverScale.displayName = 'HoverScale';