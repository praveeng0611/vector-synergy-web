/**
 * ProjectCard component
 */
import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
  href: string;
  image?: string;
  tags?: string[];
  className?: string;
}

/**
 * ProjectCard component for displaying projects
 * @param props ProjectCardProps
 * @returns ReactElement
 */
export function ProjectCard({
  title,
  description,
  imagePlaceholder,
  href,
  image,
  tags = [],
  className = '',
}: ProjectCardProps): ReactElement {
  return (
    <Card
      className={`group py-0 gap-0 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}
    >
      <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground overflow-hidden">
        {image ? (
          <Image src={image} alt={imagePlaceholder} width={100} height={100} className='w-full h-full object-cover' />
        ) : (
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xs font-medium text-primary">IMG</span>
            </div>
            <p className="text-sm">{imagePlaceholder}</p>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-1">
        <div className="h-full flex flex-col gap-4">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground leading-6 flex-1">{description}</p>

          <Button asChild variant="link" className="w-fit group px-0">
            <Link href={href}>
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
