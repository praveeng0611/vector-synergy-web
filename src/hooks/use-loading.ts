import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  /**
   * Delay before setting loading to false (in milliseconds)
   */
  delay?: number;
  /**
   * Initial loading state
   */
  initialLoading?: boolean;
}

/**
 * Custom hook for managing loading states with optional delay
 * Perfect for simulating API calls or content loading
 */
export function useLoading(options: UseLoadingOptions = {}) {
  const { delay = 1000, initialLoading = true } = options;
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (!initialLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, initialLoading]);

  return {
    isLoading,
    setIsLoading,
    /**
     * Manually trigger loading state
     */
    startLoading: () => setIsLoading(true),
    /**
     * Manually stop loading state
     */
    stopLoading: () => setIsLoading(false),
  };
}