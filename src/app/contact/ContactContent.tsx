'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { faqData } from '@/data/faq';
import { EnquiryForm } from '@/components/enquiry/EnquiryForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronDown,
  Navigation,
  Compass,
} from 'lucide-react';

export const ContactContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialGrade = searchParams?.get('grade') || undefined;
  const initialSubject = searchParams?.get('subject') || undefined;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
      {/* Left Column: Contact Details & Location Card */}
      <div className="lg:col-span-5 space-y-8">
        {/* Contact Info Card */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-main">
              Direct Contact Channels
            </span>
            <h2 className="font-serif text-2xl font-bold text-indigo-main mt-1">
              Admissions & Help Desk
            </h2>
          </div>

          <div className="space-y-4">
            {/* Campus Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-main">Campus Address</h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">{siteConfig.address}</p>
                <p className="text-xs text-text-muted mt-0.5">City: {siteConfig.city}</p>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-main">Call Counsellor</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block text-sm font-semibold text-text-primary hover:text-amber-main transition-colors mt-1"
                >
                  {siteConfig.phoneFormatted}
                </a>
                <p className="text-xs text-text-muted mt-0.5">Available during institute hours</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-main">WhatsApp Admission Chat</h3>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-amber-main hover:underline mt-1"
                >
                  <span>Chat directly with admissions desk →</span>
                </a>
                <p className="text-xs text-text-muted mt-0.5">Average reply time: Under 15 mins</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-main">Email Correspondence</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sm font-semibold text-text-primary hover:text-amber-main transition-colors mt-1"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-indigo-main text-amber-main flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-main">Visiting & Class Hours</h3>
                <p className="text-xs text-text-secondary mt-1">
                  <strong>Weekdays:</strong> {siteConfig.operatingHours.weekdays}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  <strong>Sunday:</strong> {siteConfig.operatingHours.weekends}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map / Directions Placeholder Card */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6 shadow-xs overflow-hidden">
          <h3 className="font-serif text-lg font-bold text-indigo-main mb-3 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-main" />
            <span>Campus Directions</span>
          </h3>

          <div className="aspect-16/9 bg-canvas-subtle rounded-lg border border-border-subtle flex flex-col items-center justify-center p-6 text-center">
            <Navigation className="w-8 h-8 text-amber-main mb-2" />
            <p className="text-xs font-bold text-indigo-main uppercase tracking-wider">
              Interactive Map Frame
            </p>
            <p className="text-xs text-text-muted mt-1 max-w-xs">
              Configured for Google Maps Embed with landmark routing in {siteConfig.city}.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
            <span>Landmark: Near Main Metro/Bus Station</span>
            <span className="text-amber-main font-semibold">Parking Available</span>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-surface rounded-xl border border-border-subtle p-6 sm:p-8 shadow-xs">
          <h3 className="font-serif text-xl font-bold text-indigo-main mb-6 border-b border-border-subtle pb-3">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-border-subtle rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-3.5 bg-canvas-subtle hover:bg-border-subtle/50 flex items-center justify-between text-xs font-bold text-indigo-main transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-main transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-3.5 bg-surface text-xs text-text-secondary leading-relaxed border-t border-border-subtle">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: Admission Enquiry Form */}
      <div className="lg:col-span-7">
        <div className="sticky top-24">
          <EnquiryForm
            initialGrade={initialGrade}
            initialSubject={initialSubject}
            title="Book Your Diagnostic Assessment & Trial Seat"
            subtitle="Submit student details below to reserve an orientation session with our subject faculties."
          />
        </div>
      </div>
    </div>
  );
};
