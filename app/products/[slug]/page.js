'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  getProductBySlug,
  generateSlug,
  getRelatedProducts,
  getAllProducts,
} from '../../lib/products';
import {
  ShoppingCartIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = getProductBySlug(params.slug);
    if (!foundProduct) {
      notFound();
    }
    setProduct(foundProduct);
    setRelatedProducts(getRelatedProducts(foundProduct, 3));
  }, [params.slug]);

  if (!product) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Memuat produk...</p>
        </div>
      </div>
    );
  }

  const handleRequestQuote = () => {
    const specsText = Object.entries(product.specifications)
      .slice(0, 4)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    const message = `Halo, saya tertarik dengan produk berikut:

Produk: ${product.name}
Kategori: ${product.category}
Subkategori: ${product.subcategory}

Spesifikasi Utama:
${specsText}

Mohon informasi lebih lanjut mengenai:
- Ketersediaan produk
- Minimum order quantity
- Lead time production
- Spesifikasi teknis lengkap

Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'PT Arch Continent Tech',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      url: typeof window !== 'undefined' 
        ? `${window.location.origin}/products/${params.slug}`
        : `https://archcontinenttech.com/products/${params.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className='min-h-screen bg-white'>
        <Header />

        {/* Breadcrumb */}
        <section className='pt-20 pb-6 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex items-center space-x-2 text-sm' aria-label='Breadcrumb'>
              <Link
                href='/'
                className='text-gray-500 hover:text-blue-600 transition-colors'
              >
                Beranda
              </Link>
              <span className='text-gray-400'>/</span>
              <Link
                href='/products'
                className='text-gray-500 hover:text-blue-600 transition-colors'
              >
                Produk
              </Link>
              <span className='text-gray-400'>/</span>
              <Link
                href={`/products?category=${product.category.toLowerCase().replace(/\s+/g, '-')}`}
                className='text-gray-500 hover:text-blue-600 transition-colors'
              >
                {product.category}
              </Link>
              <span className='text-gray-400'>/</span>
              <span className='text-blue-600 font-medium truncate max-w-xs'>
                {product.name}
              </span>
            </nav>
          </div>
        </section>

        {/* Back Button */}
        <section className='pb-4 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <Link
              href='/products'
              className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors'
            >
              <ArrowLeftIcon className='h-5 w-5' />
              Kembali ke Katalog Produk
            </Link>
          </div>
        </section>

        {/* Hero Section with Product Image */}
        <section className='py-8 bg-gradient-to-br from-blue-50 to-indigo-100'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-8 items-center'>
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='relative'
              >
                <div className='relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100'>
                  {/* Placeholder Background - Simple and Clean */}
                  <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100'>
                    <div className='text-center'>
                      <div className='w-24 h-24 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center'>
                        <svg
                          className='w-12 h-12 text-blue-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1.5}
                            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                          />
                        </svg>
                      </div>
                      <p className='text-gray-500 text-xs font-medium'>
                        Product Image
                      </p>
                    </div>
                  </div>
                  
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-contain p-8'
                    sizes='(max-width: 768px) 100vw, 400px'
                    priority
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                {/* Category Badges */}
                <div className='flex gap-2 mt-4 justify-center'>
                  <span className='px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full'>
                    {product.category}
                  </span>
                  <span className='px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-full'>
                    {product.subcategory}
                  </span>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='space-y-6'
              >
                <div>
                  <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                    {product.name}
                  </h1>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    {product.description}
                  </p>
                </div>

                {/* Quick Specs */}
                <div className='bg-white rounded-xl p-6 shadow-lg'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                    <CogIcon className='h-5 w-5 text-blue-600' />
                    Spesifikasi Cepat
                  </h3>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    {Object.entries(product.specifications)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div key={key} className='border-b border-gray-200 pb-2'>
                          <div className='text-sm text-gray-500 mb-1'>{key}</div>
                          <div className='text-base font-semibold text-gray-900'>
                            {value}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={handleRequestQuote}
                    className='flex-1 btn-primary py-4 text-lg font-semibold group hover:shadow-xl transition-all duration-300'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      <CurrencyDollarIcon className='h-6 w-6 group-hover:scale-110 transition-transform' />
                      Request Penawaran
                    </span>
                  </button>
                  <a
                    href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(product.name)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 btn-outline py-4 text-lg font-semibold group hover:shadow-lg transition-all duration-300'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      <ShoppingCartIcon className='h-6 w-6 group-hover:scale-110 transition-transform' />
                      Chat WhatsApp
                    </span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className='flex flex-wrap gap-4 pt-4'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <ShieldCheckIcon className='h-5 w-5 text-green-600' />
                    <span>Garansi Kualitas</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <TruckIcon className='h-5 w-5 text-blue-600' />
                    <span>Pengiriman Aman</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <CheckCircleIcon className='h-5 w-5 text-green-600' />
                    <span>ISO Certified</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Main Content */}
              <div className='lg:col-span-2 space-y-8'>
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <InformationCircleIcon className='h-6 w-6 text-blue-600' />
                    Deskripsi Produk
                  </h2>
                  <div className='bg-gray-50 rounded-xl p-6'>
                    <p className='text-gray-700 leading-relaxed text-lg'>
                      {product.description}
                    </p>
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <CheckBadgeIcon className='h-6 w-6 text-blue-600' />
                    Fitur Unggulan
                  </h2>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    {product.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200'
                      >
                        <CheckCircleIcon className='h-5 w-5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-700'>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Applications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <RocketLaunchIcon className='h-6 w-6 text-blue-600' />
                    Aplikasi Penggunaan
                  </h2>
                  <div className='flex flex-wrap gap-3'>
                    {product.applications.map((app, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className='px-5 py-2.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors'
                      >
                        {app}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Specifications */}
              <div className='space-y-6'>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className='bg-gray-50 rounded-xl p-6 sticky top-24'
                >
                  <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <CogIcon className='h-6 w-6 text-blue-600' />
                    Spesifikasi Teknis
                  </h3>
                  <div className='space-y-4'>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className='border-b border-gray-200 pb-3 last:border-0'
                      >
                        <div className='flex flex-col'>
                          <span className='text-sm font-medium text-gray-600 mb-1'>
                            {key}
                          </span>
                          <span className='text-base font-semibold text-gray-900'>
                            {value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quality Standards */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200'
                >
                  <h4 className='font-bold text-gray-900 mb-4 text-lg'>
                    Standar Kualitas
                  </h4>
                  <ul className='space-y-2 text-sm text-gray-700'>
                    <li className='flex items-center gap-2'>
                      <CheckCircleIcon className='h-5 w-5 text-blue-600 flex-shrink-0' />
                      <span>ISO 9001 Certified</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircleIcon className='h-5 w-5 text-blue-600 flex-shrink-0' />
                      <span>Quality Control Checked</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircleIcon className='h-5 w-5 text-blue-600 flex-shrink-0' />
                      <span>International Standards</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircleIcon className='h-5 w-5 text-blue-600 flex-shrink-0' />
                      <span>Precision Manufacturing</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className='py-16 bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center mb-12'
              >
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                  Produk Terkait
                </h2>
                <p className='text-gray-600'>
                  Produk lain dalam kategori {product.category}
                </p>
              </motion.div>

              <div className='grid md:grid-cols-3 gap-6'>
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/products/${generateSlug(relatedProduct.name)}`}
                      className='block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group'
                    >
                      <div className='relative h-48 overflow-hidden'>
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className='object-cover transition-transform duration-500 group-hover:scale-110'
                          sizes='(max-width: 768px) 100vw, 33vw'
                        />
                      </div>
                      <div className='p-6'>
                        <h3 className='text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                          {relatedProduct.name}
                        </h3>
                        <p className='text-gray-600 text-sm line-clamp-2'>
                          {relatedProduct.description}
                        </p>
                        <div className='mt-4 flex items-center gap-2 text-blue-600 font-medium text-sm'>
                          Lihat Detail
                          <ArrowLeftIcon className='h-4 w-4 rotate-180' />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center text-white'
            >
              <h2 className='text-3xl font-bold mb-4'>
                Tertarik dengan Produk Ini?
              </h2>
              <p className='text-xl mb-8 max-w-2xl mx-auto'>
                Hubungi tim teknis kami untuk konsultasi dan penawaran harga
                terbaik
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={handleRequestQuote}
                  className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300'
                >
                  Request Penawaran
                </button>
                <Link
                  href='/contact'
                  className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300'
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

