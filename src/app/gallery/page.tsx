import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { GalleryClient } from './GalleryClient';
import { CTASection } from '@/components/home/CTASection';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus & Facilities Gallery',
  description: `Tour the classrooms, doubt desks, reference library, and test halls at ${siteConfig.name} in ${siteConfig.city}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Campus Tour
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              Study Environment & Infrastructure
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Take a visual tour of our learning spaces at {siteConfig.name}, equipped with smart classrooms, private doubt clearing desks, and structured test halls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient />

          <div className="mt-12 p-4 rounded-lg bg-canvas-subtle border border-border-subtle text-xs text-text-muted flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-main shrink-0" />
            <p>
              <strong>Asset Placement Guarantee:</strong> All media modules are configured with responsive container dimensions, ready for seamless deployment of high-resolution campus photography.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
