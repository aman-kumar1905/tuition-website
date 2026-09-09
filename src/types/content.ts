export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  operatingHours: {
    weekdays: string;
    weekends: string;
  };
  socials?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface Course {
  id: string;
  title: string;
  gradeLevels: string; // e.g., "Classes 9 - 10" or "Classes 11 - 12"
  category: 'Secondary' | 'Senior Secondary' | 'Competitive' | 'Foundation';
  subjects: string[];
  description: string;
  duration: string;
  batchSize: string; // e.g., "Max 15 students"
  schedule: string;
  features: string[];
  isPopular?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  qualifications: string;
  experience: string;
  bio: string;
  achievements?: string[];
}

export interface AcademicResult {
  id: string;
  studentName: string;
  scoreOrRank: string;
  exam: string; // e.g., "CBSE Class 10 Board", "State Board Class 12", "JEE Main"
  year: string;
  subjectOrStream?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  relationship: string; // e.g., "Parent of Class 10 Student" or "Class 12 Alumnus"
  studentGrade?: string;
  year?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classrooms' | 'Doubt Sessions' | 'Seminars' | 'Facilities';
  description: string;
  placeholderColor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
