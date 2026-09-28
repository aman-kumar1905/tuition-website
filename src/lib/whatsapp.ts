import { siteConfig } from '@/data/site-config';

/**
 * Builds a direct WhatsApp click-to-chat URL with pre-filled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const message = customMessage || siteConfig.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds WhatsApp URL specifically inquiring about a particular course
 */
export function getCourseWhatsAppUrl(courseTitle: string, gradeLevel: string): string {
  const message = `Hello ${siteConfig.name}, I am interested in admission details for the "${courseTitle}" (${gradeLevel}). Please share batch timings and fee structure.`;
  return getWhatsAppUrl(message);
}

/**
 * Builds RFC 3966 compliant click-to-call tel: URL removing spaces and unsupported characters
 */
export function getTelUrl(phone?: string): string {
  const raw = phone || siteConfig.phone;
  return `tel:${raw.replace(/[^0-9+]/g, '')}`;
}

