import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { facultyData } from '@/data/faculty';
import { UserCheck, Award, ArrowRight, BookOpen } from 'lucide-react';

export const FacultyPreview: React.FC = () => {
  const previewFaculty = facultyData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="Expert Educators"
            title="Learn Under Dedicated Subject Specialists"
            subtitle="Our faculty members bring disciplined classroom pedagogy, deep syllabus mastery, and genuine commitment to student growth."
            className="mb-0"
          />
          <Link
            href="/faculty"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-indigo-main hover:text-amber-main transition-colors shrink-0"
          >
            <span>View All Department Mentors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-surface rounded-xl border border-border-subtle hover:border-border-strong p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-colors"
            >
              <div>
                {/* Avatar Placeholder with Initials and Department Icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-lg bg-indigo-main text-canvas flex items-center justify-center font-serif font-bold text-xl border border-indigo-dark shrink-0">
                    <UserCheck className="w-7 h-7 text-amber-main" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-indigo-main leading-tight">
                      {faculty.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 font-medium">
                      {faculty.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-border-subtle text-xs text-text-secondary mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-main shrink-0" />
                    <span><strong>Experience:</strong> {faculty.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-main shrink-0" />
                    <span><strong>Education:</strong> {faculty.qualifications}</span>
                  </div>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {faculty.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-indigo-main mb-2">
                  Specialized Subjects:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {faculty.subjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] bg-canvas-subtle text-text-primary border border-border-subtle"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
