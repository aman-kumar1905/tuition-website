import { describe, it, expect } from 'vitest';
import { enquirySchema } from '../src/lib/schema';

describe('enquirySchema Validation', () => {
  const validData = {
    studentName: 'Aarav Sharma',
    parentName: 'Ramesh Sharma',
    phone: '9876543210',
    email: 'aarav@example.com',
    grade: 'Class 10 (Secondary Board Preparation)',
    subjects: ['Mathematics', 'Science (Integrated 9-10)'],
    preferredBatch: 'evening' as const,
    message: 'Interested in weekend doubt desk.',
  };

  it('validates a complete valid enquiry payload', () => {
    const result = enquirySchema.safeParse(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.studentName).toBe('Aarav Sharma');
      expect(result.data.phone).toBe('9876543210');
    }
  });

  it('validates when optional parentName and message are empty strings', () => {
    const payload = {
      ...validData,
      parentName: '',
      message: '',
    };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(true);
  });

  it('fails if studentName is less than 2 characters', () => {
    const payload = { ...validData, studentName: 'A' };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.studentName).toBeDefined();
    }
  });

  it('fails if phone number is less than 10 digits', () => {
    const payload = { ...validData, phone: '12345' };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.phone).toBeDefined();
    }
  });

  it('fails if phone number contains letters', () => {
    const payload = { ...validData, phone: '98765abcde' };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
  });

  it('fails if email address is malformed', () => {
    const payload = { ...validData, email: 'not-an-email' };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it('fails if subjects array is empty', () => {
    const payload = { ...validData, subjects: [] };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.subjects).toBeDefined();
    }
  });

  it('fails if preferredBatch is invalid', () => {
    const payload = { ...validData, preferredBatch: 'midnight' };
    const result = enquirySchema.safeParse(payload);
    expect(result.success).toBe(false);
  });
});
