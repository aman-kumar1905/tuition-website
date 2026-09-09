'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Phone, MessageCircle, Menu, X, GraduationCap, Clock, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/results', label: 'Results & Success' },
  { href: '/gallery', label: 'Campus & Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/95 backdrop-blur-none border-b border-border-subtle">
      {/* Top Notification / Info Strip */}
      <div className="bg-indigo-main text-canvas text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-main" />
              <span>{siteConfig.city}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-canvas/80">
              <Clock className="w-3.5 h-3.5 text-amber-main" />
              <span>{siteConfig.operatingHours.weekdays}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-main transition-colors text-canvas/90"
              aria-label={`Call ${siteConfig.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-main" />
              <span>{siteConfig.phoneFormatted}</span>
            </a>
            <span className="text-canvas/30">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-main hover:underline font-semibold"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${scrolled ? 'py-3 shadow-xs' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-amber-main rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-md bg-indigo-main text-amber-main flex items-center justify-center font-serif font-bold text-xl border border-indigo-dark shadow-xs group-hover:bg-indigo-light transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-indigo-main leading-tight tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-sans text-text-muted uppercase tracking-widest">
                Academic Coaching & Mentorship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-main bg-amber-light font-semibold'
                      : 'text-text-primary hover:text-indigo-main hover:bg-canvas-subtle'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact#enquire"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-amber-main hover:bg-amber-hover rounded-md transition-all shadow-xs"
            >
              Book Free Demo / Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-indigo-main hover:bg-canvas-subtle focus-visible:ring-2 focus-visible:ring-amber-main"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 z-50 bg-canvas border-t border-border-subtle flex flex-col p-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-light text-amber-main font-semibold'
                      : 'text-text-primary hover:bg-canvas-subtle'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col gap-3">
            <Link
              href="/contact#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 text-base font-semibold text-white bg-amber-main hover:bg-amber-hover rounded-md shadow-xs"
            >
              Book Free Demo / Enquire
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-4 text-base font-semibold text-indigo-main bg-surface border border-border-strong rounded-md inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-amber-main" />
              <span>WhatsApp Admission Desk</span>
            </a>

            <div className="mt-4 p-4 rounded-md bg-canvas-subtle text-xs text-text-secondary">
              <p className="font-semibold text-indigo-main mb-1">Campus Location:</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
