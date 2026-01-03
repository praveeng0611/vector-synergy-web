'use client';

import React, { forwardRef } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  parallax?: boolean;
  parallaxOffset?: number;
}

/**
 * ScrollReveal - Advanced scroll-triggered animations with parallax support
 * Perfect for hero sections, images, and sections that need scroll-based effects
 */
export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({
    children,
    direction = 'up',
    distance = 50,
    duration = 0.6,
    className,
    once = true,
    threshold = 0.1,
    parallax = false,
    parallaxOffset = 50,
    ...props
  }, ref) => {
    const { scrollYProgress } = useScroll();
    
    // Parallax transform
    const y = useTransform(
      scrollYProgress,
      [0, 1],
      [parallax ? parallaxOffset : 0, parallax ? -parallaxOffset : 0]
    );

    // Direction-based initial values
    const getInitialValues = () => {
      switch (direction) {
        case 'up':
          return { opacity: 0, y: distance };
        case 'down':
          return { opacity: 0, y: -distance };
        case 'left':
          return { opacity: 0, x: distance };
        case 'right':
          return { opacity: 0, x: -distance };
        default:
          return { opacity: 0, y: distance };
      }
    };

    const getAnimateValues = () => {
      switch (direction) {
        case 'up':
        case 'down':
          return { opacity: 1, y: 0 };
        case 'left':
        case 'right':
          return { opacity: 1, x: 0 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={getInitialValues()}
        whileInView={getAnimateValues()}
        viewport={{ once, amount: threshold }}
        transition={{
          duration,
          
          type: "tween"
        }}
        style={parallax ? { y } : undefined}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';