import { describe, it, expect } from 'vitest';
import { getWhatsAppUrl, getCourseWhatsAppUrl } from '../src/lib/whatsapp';
import { siteConfig } from '../src/data/site-config';

describe('WhatsApp Link Helper', () => {
  it('generates standard WhatsApp link with encoded default message', () => {
    const url = getWhatsAppUrl();
    expect(url).toContain('https://wa.me/');
    expect(url).toContain(siteConfig.whatsappNumber.replace(/[^0-9]/g, ''));
    expect(url).toContain(encodeURIComponent(siteConfig.whatsappMessage));
  });

  it('generates customized WhatsApp link with custom message', () => {
    const custom = 'Enquiring about Class 10 Foundation batch fees.';
    const url = getWhatsAppUrl(custom);
    expect(url).toContain(encodeURIComponent(custom));
  });

  it('generates course specific WhatsApp URL with title and grade', () => {
    const url = getCourseWhatsAppUrl('Secondary Board Foundation', 'Classes 9 & 10');
    expect(url).toContain('Secondary%20Board%20Foundation');
    expect(url).toContain('Classes%209%20%26%2010');
  });
});
