import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { statisticsOverview } from '@/data/results';
import { CheckCircle2, ArrowRight, MessageCircle, ShieldCheck, Users, BookOpen } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-canvas pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-light text-amber-main border border-amber-main/20 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Admissions Open for New Academic Batches in {siteConfig.city}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-main leading-[1.12] tracking-tight">
              Master Core Concepts.{' '}
              <span className="text-amber-main underline decoration-amber-main/40 decoration-4 underline-offset-6">
                Achieve Board
              </span>{' '}
              Excellence.
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
              At <strong className="text-indigo-main font-semibold">{siteConfig.name}</strong>, we replace rote memorization with foundational clarity, disciplined practice, and personalized mentoring for students in <strong className="text-indigo-main font-semibold">{siteConfig.city}</strong>.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-indigo-main font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-main shrink-0" />
                <span>Strict Cohort Limit (Max 12–15 Students)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-indigo-main font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-main shrink-0" />
                <span>Daily 1-on-1 Doubt Desks</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-indigo-main font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-main shrink-0" />
                <span>Weekly Diagnostic Tests & Error Analytics</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-indigo-main font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-main shrink-0" />
                <span>Complete NCERT & Board Exam Drill</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact#enquire"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-amber-main hover:bg-amber-hover rounded-md transition-all shadow-sm group"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-indigo-main bg-surface hover:bg-canvas-subtle rounded-md border border-border-strong transition-all shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-amber-main" />
                <span>WhatsApp Admission Desk</span>
              </a>
            </div>

            <p className="text-xs text-text-muted">
              * No upfront commitment required for diagnostic session. Available for Classes 6 through 12.
            </p>
          </div>

          {/* Right Column: Key Feature Highlights / Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-xl border border-border-subtle p-6 sm:p-8 shadow-sm relative">
              <div className="border-b border-border-subtle pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-main">Institute At A Glance</span>
                <h2 className="font-serif text-2xl font-bold text-indigo-main mt-1">
                  The Mentorship Advantage
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-main text-amber-main shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-indigo-main">Personalized Cohort Attention</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Every student is mentored by name, not batch number. Faculty closely track individual pace, homework completion, and exam technique.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-main text-amber-main shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-indigo-main">Concept-Driven Curriculum</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Deep root-cause understanding in Physics, Chemistry, Mathematics, and Accounts designed to eliminate fear and build lifelong clarity.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle flex items-start gap-3.5">
                  <div className="p-2 rounded-md bg-indigo-main text-amber-main shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-indigo-main">Systematic Board Exam Simulation</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Timed mock papers with step-by-step mark deduction evaluations teach students exactly how board evaluators allocate marks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                <span>Location: <strong>{siteConfig.city}</strong></span>
                <Link href="/about" className="text-amber-main hover:underline font-semibold">
                  Read Full Pedagogy →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Overview Bar */}
        <div className="mt-16 pt-10 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {statisticsOverview.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-indigo-main">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-text-primary">
                {stat.label}
              </span>
              <span className="block text-xs text-text-muted leading-normal">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
