'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

/**
 * FadeInUp - A reusable fade-in-up animation component
 * Perfect for individual elements like headings, paragraphs, cards, etc.
 */
export const FadeInUp = forwardRef<HTMLDivElement, FadeInUpProps>(
  ({
    children,
    delay = 0,
    duration = 0.5,
    y = 30,
    className,
    once = true,
    threshold = 0.1,
    ...props
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: threshold }}
        transition={{
          duration,
          delay,
          
          type: "tween"
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeInUp.displayName = 'FadeInUp';