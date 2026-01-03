'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends Omit<ImageProps, 'ref'> {
  variant?: 'scale' | 'reveal' | 'blur' | 'slide';
  delay?: number;
  duration?: number;
  className?: string;
  containerClassName?: string;
  once?: boolean;
  threshold?: number;
  hoverEffect?: boolean;
}

/**
 * AnimatedImage - Image component with reveal animations and hover effects
 * Perfect for hero images, gallery images, and featured content
 */
export const AnimatedImage = forwardRef<HTMLDivElement, AnimatedImageProps>(
  ({
    variant = 'scale',
    delay = 0,
    duration = 0.8,
    className,
    containerClassName,
    once = true,
    threshold = 0.1,
    hoverEffect = true,
    ...imageProps
  }, ref) => {
    const variants = {
      scale: {
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.1 }
      },
      reveal: {
        initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
        exit: { opacity: 0, clipPath: 'inset(0 100% 0 0)' }
      },
      blur: {
        initial: { opacity: 0, filter: 'blur(10px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, filter: 'blur(10px)' }
      },
      slide: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40 }
      }
    };

    const selectedVariant = variants[variant];

    const hoverVariants = hoverEffect ? {
      whileHover: { 
        scale: 1.02,
        transition: { duration: 0.3 }
      }
    } : {};

    return (
      <motion.div
        ref={ref}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once, amount: threshold }}
        variants={selectedVariant}
        transition={{
          duration,
          delay,
          
          type: "tween"
        }}
        className={cn('overflow-hidden', containerClassName)}
        {...hoverVariants}
      >
        <Image
          {...imageProps}
          className={cn(
            'transition-transform duration-300',
            className
          )}
        />
      </motion.div>
    );
  }
);

AnimatedImage.displayName = 'AnimatedImage';