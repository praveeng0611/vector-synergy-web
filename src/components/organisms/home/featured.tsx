import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// UI
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/project-card';
import { SectionHeading } from '@/components/ui/section-heading';
// content
import { projects } from '@/content';

export function Featured() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-muted/30 to-accent isolate relative animate-fade-in flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-in-up animate-delay-100 mb-16">
          <SectionHeading
            subtitle="Featured Projects"
            title="Engineering Excellence in Action"
            description="Discover how we've helped clients achieve breakthrough results through innovative engineering solutions."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-delay-${Math.min(300 + index * 200, 700)} hover-scale`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imagePlaceholder={project.imagePlaceholder}
                image={project.img}
                href={project.href}
                tags={project.tags}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animate-delay-800">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hover-scale transition-all duration-200"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover rotate-180 mt-24 sm:mt-32 -mb-1"
        loading="lazy"
      /> */}
    </section>
  );
}
