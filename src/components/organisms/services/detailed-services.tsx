import {
  Cog,
  Cpu,
  Wrench,
  BarChart3,
  TestTube,
  Settings,
  DollarSign,
  Factory,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Detailed services section for Services page
 * Displays in-depth information about each service with features and industries served
 */
export function DetailedServices() {
  const services = [
    {
      id: 'cad',
      icon: Cog,
      title: 'Product Design & CAD',
      description:
        'Our product design and CAD services transform your ideas into detailed, manufacturable designs. We utilize the latest CAD software and design methodologies to create comprehensive 3D models, technical drawings, and documentation.',
      features: [
        'Conceptual Design & Ideation',
        '3D CAD Modeling & Assembly',
        'Technical Drawing & Documentation',
        'Design for Manufacturing (DFM)',
        'Material Selection & Optimization',
        'Design Review & Validation',
      ],
      industries: ['Automotive', 'Aerospace', 'Consumer Products', 'Industrial Equipment'],
    },
    {
      id: 'erd',
      icon: Cpu,
      title: 'E-R&D',
      description:
        'Our Engineering Research & Development services help you stay ahead of the competition through cutting-edge research, technology development, and innovation strategies tailored to your industry needs.',
      features: [
        'Technology Research & Analysis',
        'Innovation Strategy Development',
        'Proof of Concept Development',
        'Patent Research & Analysis',
        'Technology Transfer Support',
        'R&D Project Management',
      ],
      industries: ['Technology', 'Healthcare', 'Energy', 'Defense'],
    },
    {
      id: 'prototyping',
      icon: Wrench,
      title: 'Prototyping',
      description:
        'From concept validation to functional prototypes, we provide comprehensive prototyping services using advanced manufacturing techniques and materials to bring your designs to life quickly and cost-effectively.',
      features: [
        'Rapid Prototyping & 3D Printing',
        'CNC Machining & Fabrication',
        'Functional Prototype Development',
        'Design Iteration & Optimization',
        'Material Testing & Validation',
        'Prototype Documentation',
      ],
      industries: ['Medical Devices', 'Automotive', 'Electronics', 'Aerospace'],
    },
    {
      id: 'simulation',
      icon: BarChart3,
      title: 'CAE Simulation',
      description:
        'Our CAE simulation services provide detailed analysis of your designs under real-world conditions, helping you optimize performance, reduce costs, and minimize risks before physical testing or production.',
      features: [
        'Finite Element Analysis (FEA)',
        'Computational Fluid Dynamics (CFD)',
        'Thermal Analysis & Simulation',
        'Vibration & Modal Analysis',
        'Fatigue & Durability Testing',
        'Multi-Physics Simulation',
      ],
      industries: ['Aerospace', 'Automotive', 'Energy', 'Manufacturing'],
    },
    {
      id: 'testing',
      icon: TestTube,
      title: 'Testing & Validation',
      description:
        'Our testing and validation services ensure your products meet all performance, safety, and regulatory requirements through comprehensive testing protocols and quality assurance procedures.',
      features: [
        'Performance Testing & Analysis',
        'Regulatory Compliance Testing',
        'Quality Assurance Protocols',
        'Environmental Testing',
        'Reliability & Durability Testing',
        'Certification Support',
      ],
      industries: ['Medical Devices', 'Aerospace', 'Automotive', 'Electronics'],
    },
    {
      id: 'process',
      icon: Settings,
      title: 'Process Design & Automation',
      description:
        'We design and implement efficient manufacturing processes and automation solutions that reduce costs, improve quality, and increase productivity while maintaining flexibility for future growth.',
      features: [
        'Process Flow Design & Optimization',
        'Automation System Design',
        'Lean Manufacturing Implementation',
        'Quality Control Systems',
        'Production Line Setup',
        'Continuous Improvement Programs',
      ],
      industries: ['Manufacturing', 'Food & Beverage', 'Pharmaceuticals', 'Chemicals'],
    },
    {
      id: 'sourcing',
      icon: DollarSign,
      title: 'Strategic Cost Sourcing',
      description:
        'Our strategic sourcing services help you identify the best suppliers, negotiate favorable terms, and establish robust supply chains that reduce costs while maintaining quality and reliability.',
      features: [
        'Supplier Identification & Evaluation',
        'Cost Analysis & Optimization',
        'Supply Chain Strategy',
        'Vendor Management',
        'Risk Assessment & Mitigation',
        'Contract Negotiation Support',
      ],
      industries: ['Manufacturing', 'Automotive', 'Electronics', 'Industrial'],
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Contract Manufacturing',
      description:
        'Our contract manufacturing services provide complete production solutions from small batch runs to high-volume manufacturing, ensuring consistent quality and on-time delivery.',
      features: [
        'Low to High Volume Production',
        'Quality Management Systems',
        'Supply Chain Management',
        'Assembly & Integration',
        'Packaging & Logistics',
        'Regulatory Compliance',
      ],
      industries: ['Electronics', 'Medical Devices', 'Consumer Products', 'Industrial'],
    },
  ];

  return (
    <section className="py-24 sm:py-32 min-h-[100dvh] bg-gradient-to-br from-muted/30 to-accent isolate relative animate-fade-in flex items-center justify-center">
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover mb-24 sm:mb-32 -mt-1"
        loading="lazy"
      /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Service Details"
          title="Deep Dive into Our Expertise"
          description="Explore each service in detail to understand how we can support your specific needs."
          className="mb-16"
          // textColor="text-white"
        />

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-sm text-primary font-medium">
                            Service #{String(index + 1).padStart(2, '0')}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-7">{service.description}</p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Industries Served:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, industryIndex) => (
                            <span
                              key={industryIndex}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="bg-muted flex items-center justify-center rounded-l-2xl p-12 overflow-hidden relative">
                    <Image
                      src="/images/1.png"
                      alt="About Hero"
                      fill
                      className="object-cover rounded-l-2xl"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
