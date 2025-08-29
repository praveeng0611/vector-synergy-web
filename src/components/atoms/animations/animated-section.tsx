'use client';

import React, { forwardRef } from 'react';
import { motion, MotionProps, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  variant?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  }
};

/**
 * AnimatedSection - A reusable section wrapper with scroll-triggered animations
 * Perfect for main sections like Hero, About, Services, etc.
 */
export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({
    children,
    variant = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    className,
    once = true,
    threshold = 0.1,
    ...props
  }, ref) => {
    const selectedVariant = variants[variant];

    return (
      <motion.section
        ref={ref}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once, amount: threshold }}
        variants={selectedVariant}
        transition={{
          duration,
          delay,
          // Default easing
          type: "tween"
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';