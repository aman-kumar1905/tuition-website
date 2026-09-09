'use client';

import React, { useState } from 'react';
import { enquirySchema, EnquiryFormData } from '@/lib/schema';
import { siteConfig } from '@/data/site-config';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { CheckCircle2, AlertCircle, Loader2, Send, MessageCircle, RefreshCw } from 'lucide-react';

interface EnquiryFormProps {
  initialSubject?: string;
  initialGrade?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const availableGrades = [
  'Classes 6 – 8 (Junior Foundation)',
  'Class 9 (Secondary Foundation)',
  'Class 10 (Secondary Board Preparation)',
  'Class 11 (Science - PCM / PCB)',
  'Class 11 (Commerce & Economics)',
  'Class 12 (Science - PCM / PCB)',
  'Class 12 (Commerce & Economics)',
  'Custom / Other Requirements',
];

const availableSubjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Science (Integrated 9-10)',
  'Accountancy',
  'Economics',
  'Business Studies',
  'English Core',
];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialSubject,
  initialGrade,
  className = '',
  title = 'Request a Free Demo Class & Admission Counselling',
  subtitle = 'Fill out the form below. Our academic counsellor will review your learning goals and reach out within 24 hours.',
}) => {
  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: initialGrade || 'Class 10 (Secondary Board Preparation)',
    subjects: initialSubject ? [initialSubject] : ['Mathematics', 'Science (Integrated 9-10)'],
    preferredBatch: 'evening',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubjectToggle = (subj: string) => {
    const current = formData.subjects || [];
    if (current.includes(subj)) {
      if (current.length > 1) {
        setFormData({ ...formData, subjects: current.filter((s) => s !== subj) });
      }
    } else {
      setFormData({ ...formData, subjects: [...current, subj] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side Zod validation
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      const responseData = await response.json();

      if (!response.ok || !responseData.success) {
        if (responseData.errors) {
          const formatted: Record<string, string> = {};
          Object.entries(responseData.errors).forEach(([k, v]) => {
            if (Array.isArray(v) && v.length > 0) {
              formatted[k] = v[0] as string;
            }
          });
          setErrors(formatted);
        }
        throw new Error(responseData.message || 'Submission failed. Please try again.');
      }

      setSubmittedData(result.data);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Unable to submit enquiry at this time.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setServerError(null);
    setErrors({});
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      grade: 'Class 10 (Secondary Board Preparation)',
      subjects: ['Mathematics'],
      preferredBatch: 'evening',
      message: '',
    });
  };

  if (submittedData) {
    const followUpWhatsAppMessage = `Hello ${siteConfig.name}, I have just submitted an online admission enquiry for ${submittedData.studentName} (${submittedData.grade}). Please confirm receipt and share batch timings.`;
    const followUpUrl = getWhatsAppUrl(followUpWhatsAppMessage);

    return (
      <div className={`p-8 sm:p-10 rounded-xl bg-surface border-2 border-amber-main/30 text-center shadow-sm ${className}`}>
        <div className="w-16 h-16 rounded-full bg-amber-light text-amber-main flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-indigo-main mb-3">
          Admission Enquiry Received!
        </h3>
        <p className="text-text-secondary max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-indigo-main">{submittedData.studentName}</strong>. Our academic mentor will review your subject preferences ({submittedData.subjects.join(', ')}) and contact you shortly at <strong className="text-indigo-main">{submittedData.phone}</strong>.
        </p>

        <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle max-w-lg mx-auto text-left text-xs text-text-secondary space-y-1 mb-8">
          <p><span className="font-semibold text-indigo-main">Enrolled Grade:</span> {submittedData.grade}</p>
          <p><span className="font-semibold text-indigo-main">Preferred Timing:</span> <span className="capitalize">{submittedData.preferredBatch} Batch</span></p>
          <p><span className="font-semibold text-indigo-main">Institute:</span> {siteConfig.name} ({siteConfig.city})</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={followUpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-amber-main hover:bg-amber-hover text-white font-semibold transition-all shadow-xs"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Connect on WhatsApp Instantly</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-canvas-subtle hover:bg-border-subtle text-indigo-main font-semibold border border-border-strong transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-10 rounded-xl bg-surface border border-border-subtle shadow-sm ${className}`} id="enquiry-form">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-indigo-main mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">{serverError}</p>
            <p className="mt-1 text-xs">
              You can also contact us directly on WhatsApp at{' '}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="underline font-bold text-red-900">
                {siteConfig.phoneFormatted}
              </a>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="studentName" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
              Student Full Name <span className="text-amber-main">*</span>
            </label>
            <input
              id="studentName"
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.studentName || ''}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-indigo-main bg-canvas focus:bg-surface transition-colors ${
                errors.studentName ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border-strong focus:border-amber-main'
              }`}
              aria-invalid={!!errors.studentName}
              aria-describedby={errors.studentName ? 'studentName-error' : undefined}
            />
            {errors.studentName && (
              <p id="studentName-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.studentName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
              Parent / Guardian Name <span className="text-text-muted font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id="parentName"
              type="text"
              placeholder="e.g. Robert Doe"
              value={formData.parentName || ''}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-border-strong text-sm text-indigo-main bg-canvas focus:bg-surface focus:border-amber-main transition-colors"
            />
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
              Contact Phone / WhatsApp <span className="text-amber-main">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-indigo-main bg-canvas focus:bg-surface transition-colors ${
                errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border-strong focus:border-amber-main'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
              Email Address <span className="text-amber-main">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="e.g. student@example.com"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-indigo-main bg-canvas focus:bg-surface transition-colors ${
                errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-border-strong focus:border-amber-main'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Grade / Class Selection */}
        <div>
          <label htmlFor="grade" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
            Student Class / Current Grade <span className="text-amber-main">*</span>
          </label>
          <select
            id="grade"
            value={formData.grade || ''}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-border-strong text-sm text-indigo-main bg-canvas focus:bg-surface focus:border-amber-main transition-colors"
          >
            {availableGrades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        {/* Subjects of Interest (Interactive Pills) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-2">
            Subjects of Interest (Select all that apply) <span className="text-amber-main">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {availableSubjects.map((subj) => {
              const isSelected = (formData.subjects || []).includes(subj);
              return (
                <button
                  type="button"
                  key={subj}
                  onClick={() => handleSubjectToggle(subj)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-indigo-main text-canvas border-indigo-main shadow-xs'
                      : 'bg-canvas text-text-primary border-border-strong hover:bg-canvas-subtle'
                  }`}
                  aria-pressed={isSelected}
                >
                  {subj}
                </button>
              );
            })}
          </div>
          {errors.subjects && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.subjects}</p>
          )}
        </div>

        {/* Preferred Batch Timing */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-2">
            Preferred Batch Timing <span className="text-amber-main">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'morning', label: 'Morning', time: 'Before School' },
              { id: 'evening', label: 'Evening', time: '4:00 PM – 7:30 PM' },
              { id: 'weekend', label: 'Weekend', time: 'Sat & Sun Batches' },
              { id: 'flexible', label: 'Flexible', time: 'Any Available' },
            ].map((timing) => {
              const isSelected = formData.preferredBatch === timing.id;
              return (
                <button
                  type="button"
                  key={timing.id}
                  onClick={() => setFormData({ ...formData, preferredBatch: timing.id as EnquiryFormData['preferredBatch'] })}
                  className={`p-3 rounded-md text-left border transition-all ${
                    isSelected
                      ? 'border-amber-main bg-amber-light text-indigo-main shadow-xs'
                      : 'border-border-strong bg-canvas text-text-primary hover:bg-canvas-subtle'
                  }`}
                >
                  <span className="block text-xs font-bold">{timing.label}</span>
                  <span className="block text-[11px] text-text-muted mt-0.5">{timing.time}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-indigo-main mb-1.5">
            Academic Background or Specific Questions <span className="text-text-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            maxLength={500}
            placeholder="Tell us about your previous score, target goals, or specific topics you need help with..."
            value={formData.message || ''}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-border-strong text-sm text-indigo-main bg-canvas focus:bg-surface focus:border-amber-main transition-colors"
          />
        </div>

        {/* Submit Button & Fast WhatsApp CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-amber-main hover:bg-amber-hover text-white font-semibold text-sm transition-all shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Admission Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry & Book Free Trial</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-canvas-subtle hover:bg-border-subtle text-indigo-main font-semibold text-sm border border-border-strong transition-all"
          >
            <MessageCircle className="w-4 h-4 text-amber-main" />
            <span>Or WhatsApp Us Directly</span>
          </a>
        </div>
      </form>
    </div>
  );
};
