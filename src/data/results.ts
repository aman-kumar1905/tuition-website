import { AcademicResult, Testimonial } from '@/types/content';

export const academicResultsData: AcademicResult[] = [
  {
    id: 'res-1',
    studentName: '[Student Name]',
    scoreOrRank: '[98.6%]',
    exam: 'CBSE Class 10 Board Examination',
    year: '[Academic Year]',
    subjectOrStream: 'School Topper • 100/100 in Mathematics',
    badge: 'City Exemplar',
  },
  {
    id: 'res-2',
    studentName: '[Student Name]',
    scoreOrRank: '[97.8%]',
    exam: 'Class 12 Senior Secondary Board',
    year: '[Academic Year]',
    subjectOrStream: 'Science Stream (PCM) • 99/100 in Physics',
    badge: 'Top 1% Percentile',
  },
  {
    id: 'res-3',
    studentName: '[Student Name]',
    scoreOrRank: '[97.2%]',
    exam: 'Class 12 Senior Secondary Board',
    year: '[Academic Year]',
    subjectOrStream: 'Commerce Stream • 100/100 in Accountancy',
    badge: 'Subject Centum',
  },
  {
    id: 'res-4',
    studentName: '[Student Name]',
    scoreOrRank: '[96.5%]',
    exam: 'CBSE Class 10 Board Examination',
    year: '[Academic Year]',
    subjectOrStream: '99/100 in Science',
    badge: 'Distinction',
  },
  {
    id: 'res-5',
    studentName: '[Student Name]',
    scoreOrRank: '[State Rank X]',
    exam: 'Olympiad & Competitive Foundation',
    year: '[Academic Year]',
    subjectOrStream: 'Junior Science & Math Olympiad',
    badge: 'Gold Merit',
  },
  {
    id: 'res-6',
    studentName: '[Student Name]',
    scoreOrRank: '[+28% Score Gain]',
    exam: 'Board Progression Metric',
    year: '[Academic Year]',
    subjectOrStream: 'Improved from 68% in Half-Yearly to 96% in Board Exam',
    badge: 'Turnaround Star',
  },
];

export const statisticsOverview = [
  { label: 'Board Pass Rate', value: '[100%]', subtext: 'Consistent across all enrolled batches' },
  { label: 'Students Scoring > 90%', value: '[X% / XX+]', subtext: 'In recent secondary & senior board cycles' },
  { label: 'Average Score Improvement', value: '[+22%]', subtext: 'Measured between initial diagnostic & final exam' },
  { label: 'Average Batch Size', value: '[12-15]', subtext: 'Guaranteed individual attention & doubt clearing' },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: '[Testimonial placeholder: The structured weekly tests and individual attention helped my child build real confidence in Mathematics. The teachers are always accessible for questions.]',
    author: '[Parent Name]',
    relationship: 'Parent of Class 10 Student',
    studentGrade: 'Class 10 Board Batch',
    year: '[Academic Year]',
  },
  {
    id: 't-2',
    quote: '[Testimonial placeholder: Concepts in Physics that previously felt intimidating became straightforward once explained through practical demonstrations and step-by-step problem sets.]',
    author: '[Student Name]',
    relationship: 'Class 12 Science Alumnus',
    studentGrade: 'Class 12 Science',
    year: '[Academic Year]',
  },
  {
    id: 't-3',
    quote: '[Testimonial placeholder: The teachers at [Tuition Centre Name] treat every student individually. They identified my son\'s weak areas early and provided targeted remedial sessions.]',
    author: '[Parent Name]',
    relationship: 'Parent of Class 9 Student',
    studentGrade: 'Class 9 Foundation',
    year: '[Academic Year]',
  },
  {
    id: 't-4',
    quote: '[Testimonial placeholder: The disciplined study environment and regular parent-teacher interactions kept us completely updated with our daughter\'s academic progress.]',
    author: '[Parent Name]',
    relationship: 'Parent of Class 12 Commerce Student',
    studentGrade: 'Class 12 Commerce',
    year: '[Academic Year]',
  },
];
