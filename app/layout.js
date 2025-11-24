import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://archcontinenttech.com'),
  title: {
    default:
      'PT ARCH CONTINENT TECH - Solusi Bahan Konstruksi & Perlengkapan Teknis',
    template: '%s | PT ARCH CONTINENT TECH',
  },
  description:
    'PT ARCH CONTINENT TECH adalah perusahaan terpercaya yang bergerak di bidang perdagangan besar bahan konstruksi dan perlengkapan teknis. Produk unggulan: Plastik Core Tray untuk manajemen kabel.',
  keywords: [
    'bahan konstruksi',
    'perlengkapan teknis',
    'plastik core tray',
    'cable management',
    'konstruksi',
    'PT ARCH CONTINENT TECH',
    'mining core tray',
    'plastic injection',
    'cnc machining',
  ],
  authors: [
    { name: 'PT ARCH CONTINENT TECH', url: 'https://archcontinenttech.com' },
  ],
  creator: 'PT ARCH CONTINENT TECH',
  publisher: 'PT ARCH CONTINENT TECH',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://archcontinenttech.com',
    siteName: 'PT ARCH CONTINENT TECH',
    title:
      'PT ARCH CONTINENT TECH - Solusi Bahan Konstruksi & Perlengkapan Teknis',
    description:
      'Perusahaan terpercaya yang menyediakan bahan konstruksi dan perlengkapan teknis berkualitas. Produk unggulan: Plastik Core Tray.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT ARCH CONTINENT TECH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'PT ARCH CONTINENT TECH - Solusi Bahan Konstruksi & Perlengkapan Teknis',
    description:
      'Perusahaan terpercaya yang menyediakan bahan konstruksi dan perlengkapan teknis berkualitas.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'EwEVGxZ_pN-_aneRHJCq3oVQVVJYvg3JQVwTaET0FLo',
  },
};

// Structured Data for Local Business
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PT ARCH CONTINENT TECH',
  image: 'https://archcontinenttech.com/logo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'JL WR SUPRATMAN GG SUKUN, RT 003/RW 006, Cempaka Putih',
    addressLocality: 'Ciputat Timur',
    addressRegion: 'Tangerang Selatan, Banten',
    postalCode: '15141',
    addressCountry: 'ID',
  },
  telephone: '+6289514024380',
  email: 'ptarchcontinenttech@gmail.com',
  url: 'https://archcontinenttech.com',
  description:
    'Perusahaan yang bergerak di bidang perdagangan besar bahan konstruksi, perlengkapan teknis, dan jasa real estat',
  foundingDate: '2025-07-03',
  legalName: 'PT ARCH CONTINENT TECH',
  sameAs: [
    'https://www.instagram.com/ptarchcontinenttech',
    'https://www.linkedin.com/company/ptarchcontinenttech',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='id'
      className='scroll-smooth bg-white text-gray-900'
      suppressHydrationWarning
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel='canonical' href='https://archcontinenttech.com' />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
