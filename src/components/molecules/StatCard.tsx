import React from 'react';

/**
 * StatCard molecule component
 * Reusable card for displaying statistics with value and label
 */
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}
