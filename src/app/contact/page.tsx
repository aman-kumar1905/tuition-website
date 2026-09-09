import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { ContactContent } from './ContactContent';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Admission Enquiries',
  description: `Contact ${siteConfig.name} in ${siteConfig.city}. Book a free demo class, check batch schedules, and consult with our academic head.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              Admissions & Help Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              Get in Touch with Our Academic Mentors
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Have questions regarding batch schedules, subjects, or fee structures? Reach us via phone, WhatsApp, or the online enquiry form below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-canvas" id="enquire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="py-20 flex flex-col items-center justify-center text-text-muted">
                <Loader2 className="w-8 h-8 animate-spin text-amber-main mb-3" />
                <p className="text-sm">Loading Admissions Portal...</p>
              </div>
            }
          >
            <ContactContent />
          </Suspense>
        </div>
      </section>
    </>
  );
}
