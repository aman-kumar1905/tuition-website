import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site-config';

export const alt = `${siteConfig.name} - Premier Academic Tuition & Coaching`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1B2A4A',
          padding: '60px 70px',
          color: '#FAF9F6',
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#E8873A',
              color: '#FFFFFF',
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Admissions Open • {siteConfig.city}
          </div>
          <div style={{ display: 'flex', color: '#FAF9F6', fontSize: 20, opacity: 0.8 }}>
            Classes 6 – 12 • CBSE & State Boards
          </div>
        </div>

        {/* Centre Brand & Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#FAF9F6',
              lineHeight: 1.15,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#FAF9F6',
              opacity: 0.9,
              maxWidth: 950,
              lineHeight: 1.4,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            borderTop: '2px solid rgba(250, 249, 246, 0.2)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 18, color: '#E8873A', fontWeight: 600 }}>
            • Small Batches (Max 12–15)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 18, color: '#E8873A', fontWeight: 600 }}>
            • Daily 1-on-1 Doubt Hours
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 18, color: '#E8873A', fontWeight: 600 }}>
            • Weekly Diagnostic Tests
          </div>

        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
