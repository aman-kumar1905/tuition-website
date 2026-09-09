import { z } from 'zod';

export const enquirySchema = z.object({
  studentName: z
    .string()
    .min(2, { message: 'Student name must be at least 2 characters.' })
    .max(100, { message: 'Student name must not exceed 100 characters.' })
    .trim(),
  parentName: z
    .string()
    .max(100, { message: 'Parent name must not exceed 100 characters.' })
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid phone number (at least 10 digits).' })
    .max(15, { message: 'Phone number is too long.' })
    .regex(/^[0-9+\s\-()]+$/, { message: 'Phone number contains invalid characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .trim()
    .toLowerCase(),
  grade: z
    .string()
    .min(1, { message: 'Please select student grade/class.' }),
  subjects: z
    .array(z.string())
    .min(1, { message: 'Please select at least one subject of interest.' }),
  preferredBatch: z.enum(['morning', 'evening', 'weekend', 'flexible'], {
    message: 'Please select a preferred batch timing.',
  }),
  message: z
    .string()
    .max(500, { message: 'Message cannot exceed 500 characters.' })
    .optional()
    .or(z.literal('')),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
