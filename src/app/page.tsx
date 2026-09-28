import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CoursePreview } from '@/components/home/CoursePreview';
import { ResultHighlights } from '@/components/home/ResultHighlights';
import { FacultyPreview } from '@/components/home/FacultyPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Board & Foundation Tuition Classes in ${siteConfig.city}`,
  },
  description: `Join ${siteConfig.name} in ${siteConfig.city}. Structured small cohorts (12-15 students), concept-first curriculum, daily doubt clearing, and weekly board mock tests for Classes 6-12.`,
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: `${siteConfig.name} | Premier Academic Mentorship in ${siteConfig.city}`,
    description: `Small batch tuition for Classes 6 to 12 in ${siteConfig.city}. Daily 1-on-1 doubt desks and verified board exam preparation.`,
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Core Methodology & Pillars */}
      <WhyChooseUs />

      {/* 3. Featured Courses & Batches */}
      <CoursePreview />

      {/* 4. Academic Results & Milestones */}
      <ResultHighlights />

      {/* 5. Faculty & Mentors */}
      <FacultyPreview />

      {/* 6. Testimonials & Community Feedback */}
      <Testimonials />

      {/* 7. Direct Quick Enquiry Container */}
      <section className="py-16 sm:py-24 bg-canvas border-b border-border-subtle scroll-mt-24" id="enquire">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Fast-Track Enrolment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-indigo-main tracking-tight">
              Ready to Strengthen Your Academic Foundation?
            </h2>
            <p className="mt-3 text-base text-text-secondary max-w-xl mx-auto">
              Schedule a personalized diagnostic consultation with our mentors at {siteConfig.name}.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* 8. Bottom High-Impact CTA */}
      <CTASection />
    </>
  );
}
