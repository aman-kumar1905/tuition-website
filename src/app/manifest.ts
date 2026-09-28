import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Tuition & Coaching`,
    short_name: siteConfig.shortName || siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#1B2A4A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
