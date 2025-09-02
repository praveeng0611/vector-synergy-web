import React from 'react';
import type { Metadata } from 'next';
import { AboutTemplate } from '@/components/templates/AboutTemplate';

export const metadata: Metadata = {
  title: 'About Vector Synergy - Engineering Excellence',
  description: 'Learn about Vector Synergy\'s journey, mission, vision, and values. Discover how we\'ve been delivering engineering innovation for many sectors.',
};

export default function AboutPage() {
  return <AboutTemplate />;
}