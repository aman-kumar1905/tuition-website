import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { facultyData } from '@/data/faculty';
import { CTASection } from '@/components/home/CTASection';
import { UserCheck, Award, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Faculty & Mentors | Academic Specialists',
  description: `Meet the expert educators and subject specialists at ${siteConfig.name} in ${siteConfig.city}. Disciplined classroom delivery and personal mentoring.`,
  alternates: {
    canonical: '/faculty',
  },
  openGraph: {
    title: `Faculty & Mentors | Academic Specialists | ${siteConfig.name}`,
    description: `Meet the expert educators and subject specialists at ${siteConfig.name} in ${siteConfig.city}. Disciplined classroom delivery and personal mentoring.`,
    url: '/faculty',
  },
};


export default function FacultyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Department Faculty
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              Experienced Faculty Committed to Conceptual Clarity
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Our teachers are passionate subject mentors who prioritize foundational understanding over rote cramming, helping every student build genuine self-assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-surface rounded-xl border border-border-subtle hover:border-amber-main/50 p-7 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  {/* Faculty Badge & Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-xl bg-indigo-main text-canvas flex items-center justify-center font-serif font-bold text-2xl border border-indigo-dark shrink-0 shadow-xs">
                      <UserCheck className="w-8 h-8 text-amber-main" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-indigo-main leading-tight">
                        {faculty.name}
                      </h2>
                      <p className="text-xs text-amber-main font-semibold mt-1">
                        {faculty.role}
                      </p>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="space-y-2 py-3 border-y border-border-subtle text-xs text-text-secondary mb-5">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-main shrink-0" />
                      <span><strong>Experience:</strong> {faculty.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-main shrink-0" />
                      <span><strong>Qualifications:</strong> {faculty.qualifications}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {faculty.bio}
                  </p>

                  {/* Pedagogical Accomplishments */}
                  {faculty.achievements && faculty.achievements.length > 0 && (
                    <div className="mb-6 space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-indigo-main">
                        Teaching Highlights:
                      </span>
                      {faculty.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-main shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border-subtle">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-indigo-main mb-2">
                    Teaches Subjects:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {faculty.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs bg-canvas-subtle text-text-primary border border-border-subtle font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(faculty.subjects[0] || '')}#enquire`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-canvas-subtle hover:bg-amber-light hover:text-amber-main text-indigo-main text-xs font-semibold border border-border-strong transition-colors"
                  >
                    <span>Request Demo Class with Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Recruitment / Faculty Verification Note */}
          <div className="mt-12 p-6 rounded-xl bg-surface border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-indigo-main mb-1">
                Rigorous Educator Selection Criteria
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                All faculty at {siteConfig.name} undergo subject competency tests, live classroom demo assessments, and student communication reviews before joining our mentorship team.
              </p>
            </div>
            <Link
              href="/contact#enquire"
              className="px-5 py-2.5 rounded-md bg-amber-main hover:bg-amber-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
            >
              Meet Our Academic Head
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
