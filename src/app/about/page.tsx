import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTASection } from '@/components/home/CTASection';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { CheckCircle2, Target, HeartHandshake, Compass, BookOpen, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Institute & Educational Philosophy',
  description: `Learn about the pedagogical foundations, small-cohort teaching system, and academic mentorship at ${siteConfig.name} in ${siteConfig.city}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-canvas py-12 sm:py-16 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
              About {siteConfig.name}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-main tracking-tight leading-tight">
              A Disciplined Environment Dedicated to Real Understanding
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Founded in {siteConfig.city} to provide an alternative to crowded, impersonal coaching setups, {siteConfig.name} focuses on small cohorts, conceptual clarity, and structured diagnostic feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-xl font-bold text-indigo-main mb-3">
                  Our Mission
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To eliminate academic anxiety by instilling core conceptual mastery, logical reasoning, and structured exam writing discipline in every enrolled student.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs font-semibold text-indigo-main flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-main" />
                <span>Concept-First Focus</span>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-xl font-bold text-indigo-main mb-3">
                  Our Core Values
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Transparency with parents, zero tolerance for rote shortcuts, dedicated individual doubt resolution, and mutual respect between mentors and learners.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs font-semibold text-indigo-main flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-main" />
                <span>Transparent Progress</span>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-surface border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-xl font-bold text-indigo-main mb-3">
                  Our Pedagogy
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Interactive lecture delivery followed by daily problem solving, step-by-step NCERT coverage, and weekly timed examinations with line-by-line correction.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle text-xs font-semibold text-indigo-main flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-main" />
                <span>Systematic Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Culture & Batch Limits */}
      <section className="py-16 sm:py-24 bg-canvas border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Classroom Discipline"
                title="Small Cohorts. Uncompromised Mentorship."
                subtitle="Why we strictly cap our batches at 12 to 15 students."
              />

              <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                <p>
                  In large classrooms, hesitant students easily fade into the background when they encounter difficult concepts. Doubts accumulate quietly until exam week, leading to panic and suboptimal scores.
                </p>
                <p>
                  At <strong className="text-indigo-main">{siteConfig.name}</strong>, our faculty conducts classes with active questioning. Every student is regularly invited to explain formulas, solve sample problems on the board, and clarify misunderstandings immediately.
                </p>
                <p>
                  We believe that consistent academic discipline, regular attendance tracking, and immediate remedial sessions can transform any average student into a confident achiever.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact#enquire"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-amber-main hover:bg-amber-hover text-white text-sm font-semibold transition-all shadow-xs"
                >
                  <span>Attend an Orientation Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-surface text-indigo-main border border-border-strong text-sm font-semibold transition-all hover:bg-canvas-subtle"
                >
                  <MessageCircle className="w-4 h-4 text-amber-main" />
                  <span>Speak With a Mentor</span>
                </a>
              </div>
            </div>

            {/* Infrastructure Highlights */}
            <div className="bg-surface rounded-xl border border-border-subtle p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-indigo-main border-b border-border-subtle pb-3">
                Learning Infrastructure Standards
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-canvas-subtle text-amber-main shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-indigo-main">Curated Reference Library</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      Comprehensive stock of board exemplar books, previous years exam compilations, and subject-specific competitive notes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-canvas-subtle text-amber-main shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-indigo-main">Dedicated Test Environment</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      A quiet, exam-hall setup for weekly invigilated tests to build time management and real board-exam mental stamina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-canvas-subtle text-amber-main shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-indigo-main">Parent Consultation Desk</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      Scheduled monthly meetings to review student analytics, attendance, and step-by-step marks distribution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle text-xs text-text-secondary">
                <strong>Location:</strong> {siteConfig.address} ({siteConfig.city})
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
