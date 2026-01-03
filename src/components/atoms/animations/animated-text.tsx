'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  text: string;
  variant?: 'word' | 'char' | 'line';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

/**
 * AnimatedText - Text animation component with character, word, or line-based reveals
 * Perfect for headings, taglines, and important text content
 */
export const AnimatedText = forwardRef<HTMLDivElement, AnimatedTextProps>(
  ({
    text,
    variant = 'word',
    delay = 0,
    duration = 0.5,
    staggerDelay = 0.05,
    className,
    once = true,
    threshold = 0.1,
    as = 'div',
    ...props
  }, ref) => {
    const MotionComponent = motion[as] as any;

    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: staggerDelay,
          
        }
      }
    };

    const child = {
      hidden: { 
        opacity: 0, 
        y: 20,
        skewY: 10,
      },
      visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
          duration,
          
        }
      }
    };

    const splitText = () => {
      switch (variant) {
        case 'char':
          return text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </motion.span>
          ));
        case 'word':
          return text.split(' ').map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ));
        case 'line':
          return text.split('\n').map((line, index) => (
            <motion.span
              key={index}
              variants={child}
              className="block"
            >
              {line}
            </motion.span>
          ));
        default:
          return text;
      }
    };

    return (
      <MotionComponent
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: threshold }}
        className={cn(className)}
        {...props}
      >
        {splitText()}
      </MotionComponent>
    );
  }
);

AnimatedText.displayName = 'AnimatedText';