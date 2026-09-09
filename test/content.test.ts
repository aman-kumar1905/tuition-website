import { describe, it, expect } from 'vitest';
import { siteConfig } from '../src/data/site-config';
import { facultyData } from '../src/data/faculty';
import { coursesData } from '../src/data/courses';
import { academicResultsData, testimonialsData } from '../src/data/results';
import { galleryData } from '../src/data/gallery';

describe('Content Modules & Placeholders', () => {
  it('siteConfig preserves required client information placeholders', () => {
    expect(siteConfig.name).toContain('[Tuition Centre Name]');
    expect(siteConfig.city).toContain('[City]');
    expect(siteConfig.phoneFormatted).toContain('[Phone Number]');
    expect(siteConfig.address).toContain('[Address');
  });

  it('facultyData uses [Teacher Name] placeholders and verified credential structures', () => {
    expect(facultyData.length).toBeGreaterThanOrEqual(4);
    facultyData.forEach((fac) => {
      expect(fac.name).toContain('[Teacher Name');
      expect(fac.experience).toContain('Experience]');
      expect(fac.subjects.length).toBeGreaterThan(0);
    });
  });

  it('coursesData contains valid courses across secondary and senior secondary categories', () => {
    expect(coursesData.length).toBeGreaterThanOrEqual(4);
    coursesData.forEach((course) => {
      expect(course.title).toBeTruthy();
      expect(course.subjects.length).toBeGreaterThan(0);
      expect(course.features.length).toBeGreaterThan(0);
      expect(course.batchSize).toBeTruthy();
    });
  });

  it('academicResultsData uses [Student Name] placeholders and structured badge info', () => {
    expect(academicResultsData.length).toBeGreaterThanOrEqual(4);
    academicResultsData.forEach((res) => {
      expect(res.studentName).toContain('[Student Name]');
      expect(res.scoreOrRank).toBeTruthy();
    });
  });

  it('testimonialsData preserves client feedback placeholders', () => {
    expect(testimonialsData.length).toBeGreaterThanOrEqual(3);
    testimonialsData.forEach((t) => {
      expect(t.quote).toContain('Testimonial placeholder');
      expect(t.author).toContain('Name]');
    });
  });

  it('galleryData contains categorized learning environments', () => {
    expect(galleryData.length).toBeGreaterThanOrEqual(6);
    const categories = new Set(galleryData.map((g) => g.category));
    expect(categories.has('Classrooms')).toBe(true);
    expect(categories.has('Doubt Sessions')).toBe(true);
    expect(categories.has('Facilities')).toBe(true);
  });
});
