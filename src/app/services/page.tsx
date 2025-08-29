import React from 'react';
import type { Metadata } from 'next';
import { ServicesTemplate } from '@/components/templates/ServicesTemplate';

export const metadata: Metadata = {
  title: 'Engineering Services - CAD, Simulation, Prototyping & Manufacturing',
  description: 'Comprehensive engineering services including Product Design & CAD, E-R&D, Prototyping, CAE Simulation, Testing, Process Design, Cost Sourcing, and Contract Manufacturing.',
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
 