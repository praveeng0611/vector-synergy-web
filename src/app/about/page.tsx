import React from 'react';
import type { Metadata } from 'next';
import { AboutTemplate } from '@/components/templates/AboutTemplate';

export const metadata: Metadata = {
  title: 'About Vector Synergy - Engineering Excellence Since 2013',
  description: 'Learn about Vector Synergy\'s journey, mission, vision, and values. Discover how we\'ve been delivering engineering innovation for over a decade.',
};

export default function AboutPage() {
  return <AboutTemplate />;
} 