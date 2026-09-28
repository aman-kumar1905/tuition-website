'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData } from '@/data/courses';
import { getCourseWhatsAppUrl } from '@/lib/whatsapp';
import { Check, Clock, Users, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

const categories = ['All', 'Secondary', 'Senior Secondary', 'Foundation', 'Competitive'] as const;

export const CoursesClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCourses = selectedCategory === 'All'
    ? coursesData
    : coursesData.filter((c) => c.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                isSelected
                  ? 'bg-indigo-main text-canvas border border-indigo-main shadow-xs'
                  : 'bg-surface text-text-secondary border border-border-strong hover:bg-canvas-subtle hover:text-indigo-main'
              }`}
              aria-pressed={isSelected}
            >
              {cat === 'All' ? 'All Batches' : `${cat} Batches`}
            </button>
          );
        })}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            id={course.id}
            className="bg-surface rounded-xl border border-border-subtle hover:border-border-strong flex flex-col justify-between overflow-hidden shadow-xs transition-shadow scroll-mt-28"
          >
            <div className="p-7 sm:p-8">
              {/* Top Tags */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-main text-canvas">
                  {course.gradeLevels}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-canvas-subtle text-text-secondary border border-border-subtle">
                  {course.category}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-indigo-main mb-3 leading-snug">
                {course.title}
              </h2>

              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Subjects Covered */}
              <div className="mb-6">
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-2">
                  Subjects Included:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {course.subjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs bg-amber-light text-indigo-main font-medium border border-amber-main/20"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Course Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-border-subtle text-xs text-text-secondary mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-main shrink-0" />
                  <span><strong>Batch Size:</strong> {course.batchSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-main shrink-0" />
                  <span><strong>Schedule:</strong> {course.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-main shrink-0" />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-2">
                  Key Curriculum Deliverables:
                </span>
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <Check className="w-4 h-4 text-amber-main shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 bg-canvas-subtle border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={`/contact?subject=${encodeURIComponent(course.title)}&course=${encodeURIComponent(course.title)}&grade=${encodeURIComponent(course.gradeLevels)}#enquire`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-amber-main hover:bg-amber-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Book Free Demo Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={getCourseWhatsAppUrl(course.title, course.gradeLevels)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-surface hover:bg-canvas text-indigo-main border border-border-strong text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber-main" />
                <span>WhatsApp Details</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
