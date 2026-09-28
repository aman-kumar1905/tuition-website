import React from 'react';
import { siteConfig } from '@/data/site-config';
import { coursesData } from '@/data/courses';
import { faqData } from '@/data/faq';

interface JsonLdProps {
  type: 'organization' | 'courses' | 'faq';
  siteUrl?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, siteUrl }) => {
  const baseUrl = siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://tuition-l2.vercel.app';

  let schema: Record<string, unknown> | null = null;

  if (type === 'organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      name: siteConfig.name,
      description: siteConfig.description,
      url: baseUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressLocality: siteConfig.city,
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '10:00',
          closes: '14:00',
        },
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Net Banking, Cheque',
      areaServed: {
        '@type': 'City',
        name: siteConfig.city,
      },
    };
  } else if (type === 'courses') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Academic Courses and Coaching Batches at ${siteConfig.name}`,
      itemListElement: coursesData.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: course.title,
          description: course.description,
          provider: {
            '@type': 'EducationalOrganization',
            name: siteConfig.name,
            url: baseUrl,
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            courseSchedule: course.schedule,
            duration: course.duration,
          },
        },
      })),
    };
  } else if (type === 'faq') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
