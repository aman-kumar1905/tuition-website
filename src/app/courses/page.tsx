import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { CoursesClient } from './CoursesClient';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Academic Courses & Coaching Batches',
  description: `Explore structured coaching batches for Classes 6 to 12 at ${siteConfig.name} in ${siteConfig.city}. Small batch sizes, dedicated faculty, and weekly test series.`,
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Curriculum & Programs
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              Comprehensive Academic Programs
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Tailored for students in {siteConfig.city} aiming for top percentiles in board examinations and solid fundamentals for future competitive readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesClient />
        </div>
      </section>

      <CTASection />
    </>
  );
}
