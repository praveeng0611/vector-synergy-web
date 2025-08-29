import React from 'react';
import type { Metadata } from 'next';
import { ProjectsTemplate } from '@/components/templates/ProjectsTemplate';

export const metadata: Metadata = {
  title: 'Engineering Projects - Automotive Simulation & Aerospace Prototyping',
  description: 'Explore Vector Synergy\'s featured engineering projects including advanced automotive CFD simulation and precision aerospace component prototyping.',
};

export default function ProjectsPage() {
  return <ProjectsTemplate />;
}
 