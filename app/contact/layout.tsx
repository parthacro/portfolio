import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Hexaloop | IT Company Indore',
  description:
    'Contact Hexaloop for website design, mobile app development, SEO, digital marketing, custom software, cloud solutions, AI and IT consulting. Visit us at 309, Bansiwala Tower, Agrasen Square, Indore, MP 452001. Call +91-887 117 1445.',
  keywords: [
    'contact Hexaloop',
    'IT company Indore contact',
    'web development company Indore contact',
    'Hexaloop phone number',
    'Hexaloop address Indore',
    'IT company near me Indore',
    'website development company near me',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Hexaloop - IT Company Indore',
    description:
      'Get in touch with Hexaloop. 309, Bansiwala Tower, Agrasen Square, Indore, MP 452001. Phone: +91-887 117 1445. We respond within 24 hours.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
