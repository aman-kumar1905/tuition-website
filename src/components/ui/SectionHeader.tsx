import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-light text-amber-main border border-amber-main/20 ${centered ? 'mx-auto' : ''}`}>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-indigo-main tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-amber-main mt-4 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
