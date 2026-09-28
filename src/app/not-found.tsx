import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Home, BookOpen, MessageCircle, AlertTriangle } from 'lucide-react';


export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-full bg-amber-light text-amber-main flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-light text-amber-main border border-amber-main/20 mb-3">
          Error 404 • Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo-main tracking-tight mb-3">
          Page Not Located
        </h1>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
          The requested page could not be found or may have been updated. Please use the navigation links below or contact the admissions desk at {siteConfig.name}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-main hover:bg-indigo-light text-canvas text-sm font-semibold transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-amber-main hover:bg-amber-hover text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Courses</span>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-surface hover:bg-canvas-subtle text-indigo-main border border-border-strong text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-amber-main" />
            <span>WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
