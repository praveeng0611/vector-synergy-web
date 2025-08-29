import React from 'react';
import type { Metadata } from 'next';
import { PrivacyTemplate } from '@/components/templates/PrivacyTemplate';

export const metadata: Metadata = {
  title: 'Privacy Policy - Vector Synergy Data Protection',
  description: 'Learn how Vector Synergy collects, uses, and protects your personal information. Our comprehensive privacy policy outlines your rights and our data practices.',
};

export default function PrivacyPage() {
  return <PrivacyTemplate />;
}
