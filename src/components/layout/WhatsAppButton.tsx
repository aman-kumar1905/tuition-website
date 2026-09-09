'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const url = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text on hover/focus */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-md bg-indigo-main text-canvas text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-indigo-light">
        Chat with Admissions Desk
      </div>

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Admission Enquiry"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-4 focus-visible:ring-amber-main focus-visible:outline-none"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="sr-only">Direct WhatsApp Chat</span>
      </a>
    </div>
  );
};
