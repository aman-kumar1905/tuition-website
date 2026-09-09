import { Course } from '@/types/content';

export const coursesData: Course[] = [
  {
    id: 'secondary-foundation-9-10',
    title: 'Secondary Board Foundation (Classes 9 & 10)',
    gradeLevels: 'Classes 9 & 10',
    category: 'Secondary',
    subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'English'],
    description: 'Comprehensive curriculum focused on strong fundamental understanding, regular chapter-wise testing, and rigorous board exam answer-writing techniques.',
    duration: '1-Year & 2-Year Integrated Batches',
    batchSize: 'Small Batches (12–15 Students)',
    schedule: '3–4 days/week • 1.5 hrs/session',
    features: [
      'NCERT & Exemplar concept coverage',
      'Weekly diagnostic tests & error analysis',
      'Daily Practice Problem (DPP) sheets',
      'Dedicated one-on-one doubt resolution hours',
      'Term & Pre-Board mock examination series'
    ],
    isPopular: true,
  },
  {
    id: 'senior-secondary-science-11-12',
    title: 'Senior Secondary Science (Classes 11 & 12)',
    gradeLevels: 'Classes 11 & 12',
    category: 'Senior Secondary',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    description: 'In-depth analytical coaching tailored for Board exams as well as competitive entrance groundwork with rigorous problem-solving drills.',
    duration: 'Full Academic Year',
    batchSize: 'Focused Cohorts (10–12 Students)',
    schedule: '4–5 days/week • 2 hrs/session',
    features: [
      'Formula mastery and derivation clarity',
      'Numerical problem drills from basic to advanced',
      'Previous 10 years question paper discussions',
      'Formula sheets and summary mind maps provided',
      'Detailed monthly performance reports for parents'
    ],
    isPopular: true,
  },
  {
    id: 'commerce-excellence-11-12',
    title: 'Commerce & Economics Suite (Classes 11 & 12)',
    gradeLevels: 'Classes 11 & 12',
    category: 'Senior Secondary',
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Applied Mathematics'],
    description: 'Structured coaching for commerce students emphasising ledger balancing, conceptual economics diagrams, and board-standard presentation.',
    duration: 'Full Academic Year',
    batchSize: 'Limited Cohorts (12 Students)',
    schedule: '3 days/week • 2 hrs/session',
    features: [
      'Accountancy ledger working note clarity',
      'Macro & Microeconomics diagram workshops',
      'Case study solving framework for Business Studies',
      'Periodic revision tests with individual feedback',
      'Board moderation answer key analysis'
    ],
    isPopular: false,
  },
  {
    id: 'middle-school-mastery-6-8',
    title: 'Junior Foundation & STEM Fundamentals (Classes 6 – 8)',
    gradeLevels: 'Classes 6 – 8',
    category: 'Foundation',
    subjects: ['Mathematics', 'Integrated Science', 'English Grammar & Writing'],
    description: 'Building strong numeracy, scientific inquiry, and language foundations early to eliminate academic fear and inspire confidence.',
    duration: 'Academic Year',
    batchSize: 'Interactive Group (10–12 Students)',
    schedule: '3 days/week • 1 hr 15 mins/session',
    features: [
      'Activity-based concept explanation',
      'Mental arithmetic and speed-building drills',
      'Interactive quizzes and science demonstrations',
      'Homework completion & discipline guidance',
      'Continuous encouragement and mentorship'
    ],
    isPopular: false,
  },
  {
    id: 'crash-course-board-revision',
    title: 'Pre-Board & Board Intensive Revision Batch',
    gradeLevels: 'Classes 10 & 12',
    category: 'Competitive',
    subjects: ['Selected Core Subjects'],
    description: 'High-yield fast-track revision designed for the final 90 days before board exams, featuring full-syllabus papers and answer writing workshops.',
    duration: '90 Days Fast-Track',
    batchSize: 'Strict Cohort (15 Students)',
    schedule: 'Daily Sessions (Monday – Saturday)',
    features: [
      'Rapid recap of high-weightage topics',
      'Strict timed paper-solving simulations',
      'Line-by-line mark deduction analysis',
      'Time management and stress mitigation tips',
      'Emergency doubt desks leading up to exam eve'
    ],
    isPopular: false,
  },
];
