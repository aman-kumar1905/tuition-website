import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CoursePreview } from '@/components/home/CoursePreview';
import { ResultHighlights } from '@/components/home/ResultHighlights';
import { FacultyPreview } from '@/components/home/FacultyPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import { siteConfig } from '@/data/site-config';

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
      <section className="py-16 sm:py-24 bg-canvas border-b border-border-subtle" id="enquire">
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
