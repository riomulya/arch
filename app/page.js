import HomeClient from './HomeClient';

export const metadata = {
  title:
    'PT ARCH CONTINENT TECH - Solusi Bahan Konstruksi & Perlengkapan Teknis',
  description:
    'PT ARCH CONTINENT TECH adalah perusahaan terpercaya yang bergerak di bidang perdagangan besar bahan konstruksi dan perlengkapan teknis. Produk unggulan: Plastik Core Tray untuk manajemen kabel.',
  alternates: {
    canonical: 'https://archcontinenttech.com',
  },
};

export default function Page() {
  return <HomeClient />;
}
