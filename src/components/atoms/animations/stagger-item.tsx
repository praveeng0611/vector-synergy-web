'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scale';
  className?: string;
}

const itemVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        
      }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        
      }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        
      }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        
      }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        
      }
    }
  }
};

/**
 * StaggerItem - A child component for StaggerContainer
 * Use inside StaggerContainer for automatic staggered animations
 */
export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({
    children,
    variant = 'fadeInUp',
    className,
    ...props
  }, ref) => {
      return (
    <motion.div
      ref={ref}
      variants={itemVariants[variant]}
      className={cn('h-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
  }
);

StaggerItem.displayName = 'StaggerItem';