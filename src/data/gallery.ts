import { GalleryItem } from '@/types/content';

export const galleryCategories = ['All', 'Classrooms', 'Doubt Sessions', 'Seminars', 'Facilities'] as const;

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Smart Learning Classrooms',
    category: 'Classrooms',
    description: 'Ergonomic, well-lit learning environment with audiovisual teaching aids for small batch instruction.',
    placeholderColor: '#1B2A4A',
  },
  {
    id: 'gal-2',
    title: 'Dedicated One-on-One Doubt Desks',
    category: 'Doubt Sessions',
    description: 'Quiet mentoring spaces where faculty members sit individually with students to solve problem sets.',
    placeholderColor: '#2A3F6B',
  },
  {
    id: 'gal-3',
    title: 'Board Strategy & Motivation Seminars',
    category: 'Seminars',
    description: 'Interactive orientation sessions focusing on exam time management, memory recall, and stress mitigation.',
    placeholderColor: '#1B2A4A',
  },
  {
    id: 'gal-4',
    title: 'Reference Library & Self-Study Room',
    category: 'Facilities',
    description: 'Curated resource repository containing past 15 years board papers, NCERT exemplar collections, and reference books.',
    placeholderColor: '#2A3F6B',
  },
  {
    id: 'gal-5',
    title: 'Science Demonstration Desk',
    category: 'Classrooms',
    description: 'Hands-on experimental setup allowing students to visualize physics laws and chemical reaction dynamics.',
    placeholderColor: '#1B2A4A',
  },
  {
    id: 'gal-6',
    title: 'Weekly Diagnostic Test Hall',
    category: 'Facilities',
    description: 'Disciplined examination environment simulating real board exam conditions with invigilation.',
    placeholderColor: '#2A3F6B',
  },
  {
    id: 'gal-7',
    title: 'Parent-Teacher Counselling Area',
    category: 'Seminars',
    description: 'Private consultation area for periodic transparent review of student analytics and progress roadmaps.',
    placeholderColor: '#1B2A4A',
  },
  {
    id: 'gal-8',
    title: 'Interactive Group Problem Solving',
    category: 'Doubt Sessions',
    description: 'Collaborative peer learning sessions guided by senior subject mentors.',
    placeholderColor: '#2A3F6B',
  },
];
