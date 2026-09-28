import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl, getTelUrl } from '@/lib/whatsapp';
import { MapPin, Phone, Mail, Clock, MessageCircle, GraduationCap, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-main text-canvas border-t border-indigo-dark" aria-label="Site Footer">
      {/* Primary Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-md bg-canvas text-indigo-main flex items-center justify-center font-serif font-bold text-xl">
                <GraduationCap className="w-6 h-6 text-indigo-main" />
              </div>
              <span className="font-serif font-bold text-xl text-canvas tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-canvas/80 text-sm leading-relaxed">
              Dedicated academic tuition and mentoring institute in {siteConfig.city}. Fostering conceptual clarity, disciplined study habits, and board examination excellence.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-main hover:bg-amber-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-canvas tracking-wide uppercase mb-4 border-b border-canvas/20 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-canvas/80 hover:text-amber-main transition-colors">
                  About the Institute & Methodology
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-canvas/80 hover:text-amber-main transition-colors">
                  All Courses & Batches
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Faculty & Mentors
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Academic Results & Toppers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Campus & Study Desks Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h3 className="font-serif text-base font-semibold text-canvas tracking-wide uppercase mb-4 border-b border-canvas/20 pb-2">
              Courses & Batches
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses#secondary-foundation-9-10" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Class 9 & 10 Board Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses#senior-secondary-science-11-12" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Class 11 & 12 Science (PCM / PCB)
                </Link>
              </li>
              <li>
                <Link href="/courses#commerce-excellence-11-12" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Class 11 & 12 Commerce & Accounts
                </Link>
              </li>
              <li>
                <Link href="/courses#middle-school-mastery-6-8" className="text-canvas/80 hover:text-amber-main transition-colors">
                  Classes 6 – 8 Junior Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses#crash-course-board-revision" className="text-canvas/80 hover:text-amber-main transition-colors">
                  90-Day Pre-Board Revision Camp
                </Link>
              </li>
              <li>
                <Link href="/contact#enquire" className="text-amber-main hover:underline font-medium">
                  → Enquire About Custom Batch Timings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Centre Information */}
          <div>
            <h3 className="font-serif text-base font-semibold text-canvas tracking-wide uppercase mb-4 border-b border-canvas/20 pb-2">
              Centre Details
            </h3>
            <address className="not-italic space-y-3 text-sm text-canvas/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-main shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-main shrink-0" />
                <a href={getTelUrl()} className="hover:text-amber-main transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-main shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-main transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-main shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-canvas">{siteConfig.operatingHours.weekdays}</p>
                  <p className="text-xs text-canvas/70">{siteConfig.operatingHours.weekends}</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Client Placeholder Notice Banner */}
        <div className="mt-12 p-4 rounded-md bg-indigo-dark border border-indigo-light text-xs text-canvas/75 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-main shrink-0" />
          <div className="flex-1">
            <span className="font-semibold text-canvas">Verified Institutional Placeholder Architecture:</span>{' '}
            All institutional details, faculty records, student accomplishments, and addresses use strict placeholders ([Tuition Centre Name], [Teacher Name], [Phone Number], etc.) ready for official client details without unverified claims.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-canvas/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-canvas/70">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-canvas transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-canvas transition-colors">
              Terms of Enrolment
            </Link>
            <Link href="/contact#enquire" className="hover:text-canvas transition-colors">
              Admissions Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
