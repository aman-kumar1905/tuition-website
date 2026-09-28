import React from 'react';
import Link from 'next/link';
import { coursesData } from '@/data/courses';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getCourseWhatsAppUrl } from '@/lib/whatsapp';
import { Check, Clock, Users, ArrowRight, MessageCircle } from 'lucide-react';

export const CoursePreview: React.FC = () => {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-canvas border-b border-border-subtle scroll-mt-24" id="courses-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Academic Programs"
            title="Featured Coaching & Foundation Batches"
            subtitle="Curated curriculum plans designed to build conceptual depth, answer presentation techniques, and consistent scoring habits."
            className="mb-0"
          />
          <Link
            href="/courses"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-indigo-main hover:text-amber-main transition-colors shrink-0"
          >
            <span>View All Courses & Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-surface rounded-xl border border-border-subtle hover:border-border-strong flex flex-col justify-between overflow-hidden shadow-xs transition-shadow"
            >
              <div className="p-6 sm:p-7">
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-main text-canvas">
                    {course.gradeLevels}
                  </span>
                  {course.isPopular && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-light text-amber-main border border-amber-main/30">
                      Popular Choice
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-indigo-main mb-3 leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Cohort Meta */}
                <div className="space-y-2 py-3 border-y border-border-subtle text-xs text-text-muted mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-main shrink-0" />
                    <span>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-main shrink-0" />
                    <span>{course.schedule}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6">
                  <span className="block text-xs font-bold uppercase tracking-wider text-indigo-main">
                    Included Highlights:
                  </span>
                  {course.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                      <Check className="w-3.5 h-3.5 text-amber-main shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 bg-canvas-subtle border-t border-border-subtle flex flex-col sm:flex-row items-stretch gap-2.5">
                <Link
                  href={`/contact?grade=${encodeURIComponent(course.gradeLevels)}#enquire`}
                  className="flex-1 text-center py-2.5 px-3 rounded-md bg-amber-main hover:bg-amber-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Book Demo
                </Link>
                <a
                  href={getCourseWhatsAppUrl(course.title, course.gradeLevels)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2.5 rounded-md bg-surface hover:bg-canvas text-indigo-main border border-border-strong text-xs font-semibold transition-colors"
                  aria-label={`Enquire on WhatsApp about ${course.title}`}
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4 text-amber-main" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
