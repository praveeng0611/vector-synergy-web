/**
 * ServiceCard component
 */
import React, { ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * ServiceCard component for displaying services
 * @param props ServiceCardProps
 * @returns ReactElement
 */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  className = '',
}: ServiceCardProps): ReactElement {
  return (
    <Card
      className={`group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <CardContent className="p-6 h-full">
        <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-transparent bg-clip-text bg-gradient-to-br from-primary from-70% to-secondary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-6">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
