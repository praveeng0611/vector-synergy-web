import React from 'react';
import type { Metadata } from 'next';
import { TnCTemplate } from '@/components/templates/TnCTemplate';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Vector Synergy Legal Terms',
  description: 'Read Vector Synergy\'s Terms and Conditions governing our engineering services, intellectual property rights, and client responsibilities.',
};

export default function TermsAndConditionsPage() {
  return <TnCTemplate />;
}
