import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-indigo-main text-canvas py-16 sm:py-20 border-b border-indigo-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-light text-amber-main border border-amber-main/30 text-xs font-semibold uppercase tracking-wider">
            <span>Limited Cohort Admissions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas leading-tight">
            Give Your Child the Advantage of Small-Batch Mentorship
          </h2>

          <p className="text-canvas/85 text-base sm:text-lg leading-relaxed">
            Reserve a seat for a complimentary diagnostic session and experience firsthand how our concept-first methodology strengthens board exam performance.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-canvas/80 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-main" /> Max 12–15 Students
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-main" /> One-on-One Doubt Hours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-main" /> Weekly Progress Reports
            </span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#enquire"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-amber-main hover:bg-amber-hover rounded-md transition-all shadow-sm group"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-canvas bg-indigo-light hover:bg-indigo-light/80 rounded-md border border-indigo-light transition-all"
            >
              <MessageCircle className="w-5 h-5 text-amber-main" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-canvas hover:text-amber-main transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-main" />
              <span>{siteConfig.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
