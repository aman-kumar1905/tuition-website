import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { academicResultsData } from '@/data/results';
import { Award, ArrowRight, TrendingUp } from 'lucide-react';

export const ResultHighlights: React.FC = () => {
  const displayResults = academicResultsData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Academic Track Record"
            title="Consistent Board Examination Excellence"
            subtitle="Verified academic achievements showcasing concept mastery, consistent effort, and individual score improvement."
            className="mb-0"
          />
          <Link
            href="/results"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-indigo-main hover:text-amber-main transition-colors shrink-0"
          >
            <span>View All Student Results & Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayResults.map((res) => (
            <div
              key={res.id}
              className="bg-surface rounded-xl border border-border-subtle p-6 hover:border-amber-main transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-light text-amber-main border border-amber-main/20">
                    {res.badge || 'Excellence'}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    {res.year}
                  </span>
                </div>

                <div className="my-3">
                  <span className="block font-serif text-3xl font-bold text-indigo-main">
                    {res.scoreOrRank}
                  </span>
                  <span className="block text-sm font-bold text-text-primary mt-1">
                    {res.studentName}
                  </span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {res.exam}
                </p>
              </div>

              {res.subjectOrStream && (
                <div className="pt-3 border-t border-border-subtle flex items-start gap-1.5 text-xs text-text-muted">
                  <Award className="w-3.5 h-3.5 text-amber-main shrink-0 mt-0.5" />
                  <span>{res.subjectOrStream}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note on Verified Results */}
        <div className="mt-8 p-4 rounded-lg bg-surface border border-border-subtle text-xs text-text-muted flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-main" />
            <span>Scores reflect genuine student milestones under our structured curriculum and diagnostic test series.</span>
          </div>
          <Link href="/contact#enquire" className="text-amber-main hover:underline font-semibold">
            Join Upcoming Batch →
          </Link>
        </div>
      </div>
    </section>
  );
};
