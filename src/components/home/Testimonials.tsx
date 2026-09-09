import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonialsData } from '@/data/results';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          badge="Community Voices"
          title="Parent & Student Feedback"
          subtitle="Real reflections on classroom culture, academic discipline, and personal mentoring support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl border border-border-subtle p-7 sm:p-8 flex flex-col justify-between hover:border-border-strong transition-colors shadow-xs relative"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-main/30 mb-4" />
                <p className="font-serif italic text-text-primary text-base sm:text-lg leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-indigo-main">
                    {item.author}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {item.relationship}
                  </p>
                </div>
                {item.year && (
                  <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-canvas-subtle text-text-secondary border border-border-subtle">
                    {item.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
