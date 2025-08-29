'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'scale' | 'lift' | 'pulse' | 'glow';
  className?: string;
}

/**
 * AnimatedButton - Enhanced button with micro-interactions
 * Perfect for CTAs, form buttons, and interactive elements
 */
export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({
    children,
    variant = 'scale',
    className,
    ...props
  }, ref) => {
    const variants = {
      scale: {
        whileHover: { 
          scale: 1.02,
          transition: { duration: 0.2 }
        },
        whileTap: { 
          scale: 0.98,
          transition: { duration: 0.1 }
        }
      },
      lift: {
        whileHover: { 
          y: -2,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.2 }
        },
        whileTap: { 
          y: 0,
          transition: { duration: 0.1 }
        }
      },
      pulse: {
        whileHover: { 
          scale: [1, 1.02, 1],
          transition: { 
            duration: 0.6, 
            repeat: Infinity
          }
        },
        whileTap: { 
          scale: 0.98,
          transition: { duration: 0.1 }
        }
      },
      glow: {
        whileHover: { 
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        },
        whileTap: { 
          scale: 0.98,
          transition: { duration: 0.1 }
        }
      }
    };

    const selectedVariant = variants[variant];

    return (
      <motion.button
        ref={ref}
        whileHover={selectedVariant.whileHover}
        whileTap={selectedVariant.whileTap}
        className={cn(
          'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2',
          'transition-colors duration-200',
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';