// Centralized Site Configuration
// Change these values when deploying to different domains

const isDevelopment = process.env.NODE_ENV === 'development';
const isPreview = process.env.VERCEL_ENV === 'preview';

// Base URL Configuration
export const siteConfig = {
  // Update this URL when deploying to production
  baseUrl: isDevelopment
    ? 'http://localhost:3001'
    : isPreview
    ? 'https://arch-continent-tech.vercel.app'
    : process.env.NEXT_PUBLIC_SITE_URL || 'https://archcontinenttech.com',

  // Site Information
  name: 'PT ARCH CONTINENT TECH',
  legalName: 'PT ARCH CONTINENT TECH',
  title: 'PT ARCH CONTINENT TECH - Solusi Manufaktur Presisi Indonesia',
  description:
    'PT ARCH CONTINENT TECH menyediakan Plastik Core Tray dan Komponen Injeksi Presisi untuk mendukung proyek industri Anda dengan akurasi tinggi dan kualitas terjamin. Mitra solusi manufaktur terpercaya di Indonesia.',

  // SEO Keywords
  keywords: [
    'plastic core tray indonesia',
    'komponen injeksi presisi',
    'jasa machining indonesia',
    'manufacturing services',
    'solusi manufaktur',
    'injection molding indonesia',
    'reverse engineering',
    'precision components',
    'mining equipment indonesia',
    'technical supply',
    'bahan konstruksi',
    'perlengkapan teknik',
    'industrial components',
    'b2b manufacturing indonesia',
  ],

  // Contact Information
  contact: {
    phone: '+62-21-12345678',
    email: 'info@archcontinenttech.com',
    address: {
      country: 'ID',
      city: 'Jakarta',
      // Add more address details as needed
    },
  },

  // Social Media
  social: {
    twitter: '@archcontinenttech',
    linkedin: 'https://www.linkedin.com/company/pt-arch-continent-tech',
    instagram: 'https://www.instagram.com/archcontinenttech',
    // Add more social media as needed
  },

  // Business Information
  business: {
    foundingDate: '2020-01-01',
    category: 'Manufacturing, Industrial Supply, Technical Services',
    subCategory:
      'Industrial Components, Construction Supply, Real Estate Services',
    areaServed: 'Indonesia',
    // ISO Certifications
    certifications: ['ISO 9001'],

    // Partner Information
    partner: {
      name: 'PT Hoshi Manufacturing Indonesia',
      shortName: 'HMI',
    },
  },

  // SEO Configuration
  seo: {
    separator: '|',
    author: 'PT ARCH CONTINENT TECH',
    creator: 'PT ARCH CONTINENT TECH',
    publisher: 'PT ARCH CONTINENT TECH',
    classification: 'Manufacturing, Industrial Supply, Technical Services',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },

  // Open Graph Configuration
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'PT ARCH CONTINENT TECH',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT ARCH CONTINENT TECH - Solusi Manufaktur Presisi Indonesia',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Card Configuration
  twitter: {
    card: 'summary_large_image',
  },

  // Structured Data Configuration
  structuredData: {
    organization: {
      '@type': 'Organization',
      additionalType: ['Manufacturing', 'IndustrialSupplyCompany'],
    },
    product: {
      '@type': ['Product', 'Service'],
      category: 'Industrial Manufacturing',
      serviceType: 'Manufacturing Services',
    },
    webpage: {
      '@type': 'WebPage',
    },
  },

  // Analytics (Add your tracking IDs here)
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    microsoftClarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
    // Meta Pixel ID
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  },
};

// Helper function to get full URL
export function getFullUrl(path = '') {
  return new URL(path, siteConfig.baseUrl).href;
}

// Helper function for generating structured data
export function generateStructuredData(type, data) {
  const baseConfig = siteConfig.structuredData[type] || {};

  return {
    '@context': 'https://schema.org',
    ...baseConfig,
    ...data,
  };
}

// Export default for easy importing
export default siteConfig;
