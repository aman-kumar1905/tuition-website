import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/data/site-config';
import { Users2, Lightbulb, FileText, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Users2,
      title: 'Limited Batch Capacity (Max 12–15)',
      description: 'Unlike crowded coaching factories, our small batch sizes ensure the teacher knows every student’s learning curve, strengths, and specific bottlenecks.',
      highlight: 'Individual Eye Contact & Interaction',
    },
    {
      icon: Lightbulb,
      title: 'Concept-First Pedagogy',
      description: 'We prioritize the "why" and "how" behind every formula and theorem before introducing shortcut techniques, ensuring durable long-term retention.',
      highlight: 'Zero Rote Learning',
    },
    {
      icon: HelpCircle,
      title: 'Daily One-on-One Doubt Hours',
      description: 'Dedicated faculty desks before and after classes where students can sit individually and clear doubts without hesitation or peer pressure.',
      highlight: 'Zero Backlog Guarantee',
    },
    {
      icon: FileText,
      title: 'Weekly Diagnostic Tests & Analytics',
      description: 'Every Saturday, students undergo timed tests simulating board standards. Error analysis sheets pinpoint where marks were lost and how to fix them.',
      highlight: 'Transparent Parent Updates',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          badge="Structured Methodology"
          title={`Why Students Excel at ${siteConfig.name}`}
          subtitle="A disciplined academic system engineered to replace stress with consistency, clarity, and genuine confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface border border-border-subtle hover:border-amber-main transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-indigo-main mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-semibold text-indigo-main">
                  <CheckCircle className="w-4 h-4 text-amber-main" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-main hover:text-amber-main transition-colors"
          >
            <span>Learn more about our teaching process & classroom culture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
