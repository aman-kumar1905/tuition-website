'use client';

import React, { useState } from 'react';
import { galleryData, galleryCategories } from '@/data/gallery';
import { GalleryItem } from '@/types/content';
import { Camera, Eye, X, BookOpen, Users, Presentation, Building } from 'lucide-react';

const categoryIcons = {
  Classrooms: BookOpen,
  'Doubt Sessions': Users,
  Seminars: Presentation,
  Facilities: Building,
};

export const GalleryClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem]);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                isSelected
                  ? 'bg-indigo-main text-canvas border border-indigo-main shadow-xs'
                  : 'bg-surface text-text-secondary border border-border-strong hover:bg-canvas-subtle hover:text-indigo-main'
              }`}
              aria-pressed={isSelected}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const Icon = categoryIcons[item.category] || Camera;
          return (
            <div
              key={item.id}
              className="bg-surface rounded-xl border border-border-subtle overflow-hidden flex flex-col justify-between hover:border-amber-main transition-all group shadow-xs cursor-pointer"
              onClick={() => setActiveModalItem(item)}
            >
              {/* Media Card Placeholder Frame */}
              <div className="relative aspect-4/3 bg-indigo-main flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="w-14 h-14 rounded-xl bg-indigo-light text-amber-main flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-canvas/80 bg-indigo-dark/60 px-2.5 py-1 rounded">
                  {item.category}
                </span>

                <div className="absolute inset-0 bg-indigo-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-canvas text-xs font-semibold">
                  <Eye className="w-4 h-4 text-amber-main" />
                  <span>View Details</span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-indigo-main leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted">
                  <span>Photo Placeholder</span>
                  <span className="text-amber-main font-semibold group-hover:underline">Inspect →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image / Item Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-indigo-dark/80 backdrop-blur-none flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-surface rounded-xl max-w-lg w-full border border-border-subtle overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border-subtle bg-canvas-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-main">
                {activeModalItem.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-md text-text-muted hover:text-indigo-main hover:bg-canvas"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Placeholder */}
            <div className="aspect-16/9 bg-indigo-main flex flex-col items-center justify-center text-canvas p-6 text-center">
              <div className="w-16 h-16 rounded-xl bg-indigo-light text-amber-main flex items-center justify-center mb-3">
                <Camera className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-canvas">Verified Facility Asset Frame</p>
              <p className="text-xs text-canvas/70 max-w-xs mt-1">
                Client photography for {activeModalItem.title} will be loaded here.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-indigo-main mb-2">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {activeModalItem.description}
              </p>
              <div className="p-3 rounded-md bg-canvas-subtle border border-border-subtle text-xs text-text-muted">
                <strong>Facility Note:</strong> Maintained under strict cleanliness, safety, and acoustic standards to ensure distraction-free study hours.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
