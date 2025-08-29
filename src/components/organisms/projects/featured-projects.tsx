import {
  Car,
  Plane,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Featured projects section for Projects page
 * Displays detailed case studies with metrics, results, and technologies
 */
export function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 'automotive-simulation',
      title: 'Automotive Simulation',
      subtitle: 'Advanced CFD & Structural Analysis',
      longDescription:
        'This comprehensive project involved the development of advanced simulation models for automotive components, focusing on aerodynamic efficiency and structural integrity. Our team utilized state-of-the-art CFD and FEA tools to optimize design parameters and reduce development time.',
      imagePlaceholder: 'Automotive CFD Analysis Visualization',
      icon: Car,
      tags: ['CFD', 'Automotive', 'Simulation', 'FEA'],
      challenge:
        'The client needed to improve fuel efficiency while maintaining structural safety standards for their new vehicle platform. Traditional testing methods were too time-consuming and expensive for the rapid development cycle required.',
      solution:
        'We implemented a comprehensive simulation-based approach using advanced CFD analysis for aerodynamic optimization and FEA for structural validation. Our team developed custom simulation workflows that reduced analysis time by 60% while improving accuracy.',
      results: [
        '25% improvement in aerodynamic efficiency',
        '40% reduction in development time',
        '30% cost savings in physical testing',
        'Successful validation through wind tunnel testing',
        'Patent filed for innovative design features',
      ],
      technologies: [
        'ANSYS Fluent CFD',
        'Abaqus FEA',
        'SolidWorks CAD',
        'MATLAB Optimization',
        'Wind Tunnel Validation',
      ],
      metrics: [
        { label: 'Drag Reduction', value: '25%', icon: TrendingUp },
        { label: 'Time Saved', value: '40%', icon: Calendar },
        { label: 'Cost Reduction', value: '30%', icon: Target },
      ],
    },
    {
      id: 'aerospace-prototyping',
      title: 'Aerospace Prototyping',
      subtitle: 'Precision Component Development',
      longDescription:
        'This project focused on the rapid prototyping and validation of critical aerospace components using additive manufacturing and precision machining. The project required meeting stringent aerospace standards while accelerating the development timeline.',
      imagePlaceholder: 'Aerospace Component Design & Testing',
      icon: Plane,
      tags: ['Aerospace', 'Prototyping', 'Testing', 'Materials'],
      challenge:
        'Development of lightweight, high-strength components for a new aircraft program with extremely tight tolerances and rigorous testing requirements. The components needed to meet FAA certification standards while reducing weight by 20%.',
      solution:
        'Our team developed an integrated approach combining advanced materials, additive manufacturing, and precision machining. We created comprehensive testing protocols and worked closely with certification authorities to ensure compliance.',
      results: [
        '22% weight reduction achieved',
        'All FAA certification requirements met',
        '6 months faster than traditional methods',
        'Successfully integrated into production aircraft',
        '100% pass rate on all testing protocols',
      ],
      technologies: [
        'Titanium Additive Manufacturing',
        '5-Axis CNC Machining',
        'Non-Destructive Testing',
        'Material Characterization',
        'Environmental Testing',
      ],
      metrics: [
        { label: 'Weight Reduction', value: '22%', icon: Zap },
        { label: 'Time Acceleration', value: '6 mo', icon: Calendar },
        { label: 'Test Success Rate', value: '100%', icon: Award },
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Featured Case Studies"
          title="Engineering Excellence in Action"
          description="Deep dive into our most impactful projects and the innovative solutions we delivered."
          className="mb-16"
        />

        <div className="space-y-24">
          {featuredProjects.map((project, _index) => (
            <div key={project.id} className="scroll-mt-24">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project Image Placeholder */}
                  <div className="bg-muted flex items-center justify-center rounded-r-2xl p-12 order-2 lg:order-1 overflow-hidden relative">
                    <Image
                      src="/images/1.png"
                      alt="About Hero"
                      fill
                      className="object-cover rounded-r-2xl"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 lg:p-12 order-1 lg:order-2">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-4">
                            {project.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-7 mb-6">
                            {project.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-4 bg-muted/50 rounded-lg">
                            <metric.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="w-full">
                        <Link href={`/projects/${project.id}`}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Detailed Project Information */}
              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Challenge & Solution */}
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground leading-7">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Our Solution</h4>
                        <p className="text-muted-foreground leading-7">{project.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results & Technologies */}
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Results</h4>
                        <div className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
