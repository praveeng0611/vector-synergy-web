import type { LucideIcon } from 'lucide-react';
import React from 'react';

/**
 * MetricCard molecule component
 * Reusable component for displaying project metrics with icon, value, and label
 */
interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ icon: Icon, value, label, className = '' }: MetricCardProps) {
  return (
    <div className={`text-center p-4 bg-muted/50 rounded-lg ${className}`}>
      <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
      <div className="text-2xl font-bold text-foreground">
        {value}
      </div>
      <div className="text-xs text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
