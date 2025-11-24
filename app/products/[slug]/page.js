import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from '../../lib/products';
import siteConfig from '@/config/site';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Produk tidak ditemukan | PT ARCH CONTINENT TECH',
    };
  }

  const canonicalUrl = `/products/${product.slug}`;
  const image = product.images?.[0] || product.image || '/logo.png';

  return {
    title: `${product.name} | PT ARCH CONTINENT TECH`,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | PT ARCH CONTINENT TECH`,
      description: product.description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product, 3);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images?.[0] || product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'PT ARCH CONTINENT TECH',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      url: `${siteConfig.baseUrl}/products/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
