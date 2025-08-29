import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

/**
 * ContactCard molecule component
 * Reusable card for displaying contact information with icon, title, details, and description
 */
interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string;
  link: string;
  description: string;
  className?: string;
}

export function ContactCard({
  icon: Icon,
  title,
  details,
  link,
  description,
  className = '',
}: ContactCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 text-center ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              {title}
            </h3>
            <Link
              href={link}
              className="text-primary hover:text-primary/80 transition-colors font-medium"
              target={link.startsWith('http') ? '_blank' : undefined}
              rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {details}
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
