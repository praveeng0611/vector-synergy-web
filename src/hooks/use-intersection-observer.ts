'use client';

import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * Only trigger once when element comes into view
   * @default true
   */
  once?: boolean;
}

/**
 * Lightweight intersection observer hook for scroll animations
 * Replaces heavy Framer Motion with native browser API
 */
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const { once = true, threshold = 0.1, rootMargin = '0px', ...restOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If once is true and already intersected, don't observe again
    if (once && hasIntersected) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && once) {
          setHasIntersected(true);
        }
      },
      {
        threshold,
        rootMargin,
        ...restOptions,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, once, hasIntersected, restOptions]);

  return once && hasIntersected ? true : isIntersecting;
}

/**
 * Multiple elements intersection observer hook
 */
export function useMultipleIntersectionObserver(
  refs: RefObject<Element>[],
  options: UseIntersectionObserverOptions = {}
): boolean[] {
  const [intersectionStates, setIntersectionStates] = useState<boolean[]>(
    new Array(refs.length).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    refs.forEach((ref, index) => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersectionStates(prev => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        {
          threshold: 0.1,
          ...options,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [refs, options]);

  return intersectionStates;
}