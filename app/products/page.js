import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Katalog Produk - PT ARCH CONTINENT TECH',
  description:
    'Jelajahi katalog lengkap produk kami: Plastik Core Tray, Komponen Injeksi Presisi, dan Perlengkapan Teknis lainnya untuk industri pertambangan, otomotif, dan telekomunikasi.',
  alternates: {
    canonical: 'https://archcontinenttech.com/products',
  },
};

export default function Page() {
  return <ProductsClient />;
}
