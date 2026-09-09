import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { academicResultsData, statisticsOverview, testimonialsData } from '@/data/results';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTASection } from '@/components/home/CTASection';
import { Award, Quote, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academic Results & Student Achievements',
  description: `View board examination results, topper highlights, and parent testimonials from ${siteConfig.name} in ${siteConfig.city}.`,
};

export default function ResultsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Track Record & Success
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              Academic Milestones Built on Consistency
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Every score represents disciplined weekly testing, rigorous error correction, and dedicated doubt solving at {siteConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate Statistics */}
      <section className="py-12 bg-canvas-subtle border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {statisticsOverview.map((stat, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl border border-border-subtle shadow-xs">
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-indigo-main mb-1">
                  {stat.value}
                </span>
                <span className="block text-sm font-bold text-text-primary">
                  {stat.label}
                </span>
                <span className="block text-xs text-text-muted mt-1 leading-normal">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Student Scores Grid */}
      <section className="py-16 sm:py-20 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Top Performers"
            title="Board Examination & Olympiad Achievers"
            subtitle="Celebrating individual achievements and notable turnaround transformations across secondary and senior secondary cohorts."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {academicResultsData.map((res) => (
              <div
                key={res.id}
                className="bg-surface rounded-xl border border-border-subtle hover:border-amber-main p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-light text-amber-main border border-amber-main/20">
                      {res.badge || 'Merit Rank'}
                    </span>
                    <span className="text-xs font-medium text-text-muted">
                      {res.year}
                    </span>
                  </div>

                  <div className="my-4">
                    <span className="block font-serif text-4xl font-bold text-indigo-main">
                      {res.scoreOrRank}
                    </span>
                    <span className="block text-base font-bold text-text-primary mt-1">
                      {res.studentName}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {res.exam}
                  </p>
                </div>

                {res.subjectOrStream && (
                  <div className="pt-4 border-t border-border-subtle flex items-start gap-2 text-xs text-text-muted">
                    <Award className="w-4 h-4 text-amber-main shrink-0 mt-0.5" />
                    <span>{res.subjectOrStream}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Institutional Compliance Notice */}
          <div className="mt-12 p-4 rounded-lg bg-canvas-subtle border border-border-subtle text-xs text-text-muted flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-main shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong>Data Verification Protocol:</strong> Results are recorded with explicit student/parent verification upon publication of official board exam marksheets.
            </p>
          </div>
        </div>
      </section>

      {/* Parent & Student Testimonials Section */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            badge="Verified Feedback"
            title="What Parents & Alumni Say"
            subtitle="Read genuine perspectives on our small-batch teaching methodology, doubt resolution, and exam preparation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-surface rounded-xl border border-border-subtle p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-border-strong transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-main/30 mb-4" />
                  <p className="font-serif italic text-text-primary text-base sm:text-lg leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-indigo-main">
                      {item.author}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.relationship}
                    </p>
                  </div>
                  {item.studentGrade && (
                    <span className="px-2.5 py-1 rounded text-xs bg-canvas-subtle text-text-secondary border border-border-subtle font-medium">
                      {item.studentGrade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact#enquire"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-main hover:bg-amber-hover text-white text-sm font-semibold transition-all shadow-xs"
            >
              Enrol Your Child for the Upcoming Batch
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
