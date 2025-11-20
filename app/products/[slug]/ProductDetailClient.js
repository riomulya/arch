'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  CogIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import siteConfig from '@/config/site';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ProductDetailClient({ product, relatedProducts }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleRequestQuote = () => {
    const specsText = Object.entries(product.specifications)
      .slice(0, 5)
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
- Harga dan minimum order quantity
- Lead time production
- Spesifikasi teknis lengkap

Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <>
      <div className='min-h-screen bg-white'>
        <Header />
        {/* Breadcrumb */}
        <section className='pt-20 pb-8 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-4'>
                <li>
                  <Link
                    href='/'
                    className='text-gray-500 hover:text-blue-600 transition-colors'
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <span className='text-gray-400'>/</span>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-gray-500 hover:text-blue-600 transition-colors'
                  >
                    Produk
                  </Link>
                </li>
                <li>
                  <span className='text-gray-400'>/</span>
                </li>
                <li>
                  <span className='text-gray-500'>{product.category}</span>
                </li>
                <li>
                  <span className='text-gray-400'>/</span>
                </li>
                <li>
                  <span className='text-blue-600 font-medium'>
                    {product.name}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className='py-12 bg-gradient-to-br from-blue-50 to-indigo-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Product Images */}
              <div className='space-y-4'>
                <div className='aspect-w-16 aspect-h-12 bg-white rounded-2xl shadow-xl overflow-hidden relative h-96'>
                  <Image
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                    priority={true}
                  />
                </div>
                {product.images.length > 1 && (
                  <div className='grid grid-cols-3 gap-4'>
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className='aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all relative h-24'
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} - View ${index + 1}`}
                          fill
                          className='object-cover'
                          loading='lazy'
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className='space-y-6'>
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full'>
                      {product.category}
                    </span>
                    <span className='px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full'>
                      {product.subcategory}
                    </span>
                  </div>
                  <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                    {product.name}
                  </h1>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    {product.description}
                  </p>
                </div>

                {/* Key Specifications */}
                <div className='bg-white rounded-xl p-6 shadow-lg'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Spesifikasi Utama
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    {Object.entries(product.specifications)
                      .slice(0, 6)
                      .map(([key, value]) => (
                        <div key={key} className='flex justify-between'>
                          <span className='text-gray-600'>{key}:</span>
                          <span className='font-medium text-gray-900'>
                            {value}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={handleRequestQuote}
                    className='flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg'
                  >
                    <CurrencyDollarIcon className='h-5 w-5' />
                    Minta Penawaran
                  </button>
                  <a
                    href={`https://wa.me/6289514024380?text=Halo, saya tertarik dengan ${encodeURIComponent(
                      product.name
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2'
                  >
                    <EnvelopeIcon className='h-5 w-5' />
                    Kontak Sales
                  </a>
                </div>

                {/* Quality Badges */}
                <div className='flex items-center gap-6 pt-4'>
                  <div className='flex items-center gap-2'>
                    <ShieldCheckIcon className='h-5 w-5 text-green-600' />
                    <span className='text-sm text-gray-600'>
                      ISO 9001 Certified
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <TruckIcon className='h-5 w-5 text-blue-600' />
                    <span className='text-sm text-gray-600'>
                      Pengiriman Aman
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircleIcon className='h-5 w-5 text-purple-600' />
                    <span className='text-sm text-gray-600'>
                      Garansi Kualitas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className='py-16 bg-white' aria-labelledby='details-heading'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 id='details-heading' className='sr-only'>
              Product Details
            </h2>
            <div className='grid lg:grid-cols-3 gap-12'>
              {/* Main Content */}
              <div className='lg:col-span-2 space-y-8'>
                {/* Description */}
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <InformationCircleIcon className='h-6 w-6 text-blue-600' />
                    Deskripsi Produk
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {product.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <CheckBadgeIcon className='h-6 w-6 text-blue-600' />
                    Fitur Unggulan
                  </h3>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-start gap-3 p-4 bg-green-50 rounded-lg'
                      >
                        <CheckCircleIcon className='h-5 w-5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-700'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <RocketLaunchIcon className='h-6 w-6 text-blue-600' />
                    Aplikasi Penggunaan
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className='px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg border border-blue-200'
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full Specifications */}
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <CogIcon className='h-6 w-6 text-blue-600' />
                    Spesifikasi Teknis Lengkap
                  </h3>
                  <div className='bg-gray-50 rounded-xl p-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-3'>
                          Spesifikasi Produk
                        </h4>
                        <div className='space-y-3'>
                          {Object.entries(product.specifications).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className='border-b border-gray-200 pb-2'
                              >
                                <div className='flex justify-between'>
                                  <span className='text-gray-600'>{key}:</span>
                                  <span className='font-medium text-gray-900'>
                                    {value}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-3'>
                          Informasi Tambahan
                        </h4>
                        <div className='space-y-3'>
                          {Object.entries(product.technicalData).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className='border-b border-gray-200 pb-2'
                              >
                                <div className='flex justify-between'>
                                  <span className='text-gray-600'>{key}:</span>
                                  <span className='font-medium text-gray-900'>
                                    {value}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className='space-y-6'>
                {/* Quick Quote */}
                <div className='bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white'>
                  <h3 className='text-xl font-bold mb-4'>
                    Butuh Penawaran Cepat?
                  </h3>
                  <p className='mb-6 opacity-90'>
                    Tim sales kami siap membantu Anda dengan informasi harga dan
                    ketersediaan produk.
                  </p>
                  <div className='space-y-3'>
                    <a
                      href={`tel:+6289514024380`}
                      className='flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3'
                    >
                      <PhoneIcon className='h-5 w-5' />
                      <span>+62 895-1402-4380</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className='flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg p-3'
                    >
                      <EnvelopeIcon className='h-5 w-5' />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                    <div className='flex items-center gap-3 bg-white/20 rounded-lg p-3'>
                      <MapPinIcon className='h-5 w-5' />
                      <span>{siteConfig.contact.address.city}, Indonesia</span>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className='bg-gray-50 rounded-xl p-6'>
                  <h3 className='font-semibold text-gray-900 mb-4'>
                    Unduh Dokumen
                  </h3>
                  <div className='space-y-3'>
                    <a
                      href='#'
                      className='flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow'
                    >
                      <span className='text-sm font-medium'>
                        Spesifikasi PDF
                      </span>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow'
                    >
                      <span className='text-sm font-medium'>
                        Safety Data Sheet
                      </span>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow'
                    >
                      <span className='text-sm font-medium'>
                        Catalog Produk
                      </span>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className='bg-yellow-50 rounded-xl p-6 border border-yellow-200'>
                  <h3 className='font-semibold text-gray-900 mb-3'>
                    Mengapa Kami?
                  </h3>
                  <ul className='space-y-2 text-sm text-gray-600'>
                    <li className='flex items-start gap-2'>
                      <CheckCircleIcon className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                      <span>15+ tahun pengalaman manufaktur</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircleIcon className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                      <span>Sertifikasi ISO 9001 & ISO 13485</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircleIcon className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                      <span>Akurasi presisi hingga ±0.01mm</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircleIcon className='h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                      <span>Garansi produk 2 tahun</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section
            className='py-16 bg-gray-50'
            aria-labelledby='related-heading'
          >
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
              <h2
                id='related-heading'
                className='text-3xl font-bold text-gray-900 text-center mb-12'
              >
                Produk Terkait
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                {relatedProducts.map((related) => (
                  <article
                    key={related.id}
                    className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
                  >
                    <div className='h-48 overflow-hidden bg-gray-100'>
                      <Image
                        src={related.images[0]}
                        alt={related.name}
                        fill
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        loading='lazy'
                      />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                        {related.name}
                      </h3>
                      <p className='text-gray-600 mb-4 line-clamp-2'>
                        {related.description}
                      </p>
                      <Link
                        href={`/products/${related.slug}`}
                        className='inline-flex items-center text-blue-600 font-semibold hover:text-blue-700'
                      >
                        Lihat Detail
                        <svg
                          className='w-4 h-4 ml-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Products */}
        <section className='py-12 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <Link
              href='/products'
              className='inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors'
            >
              <ArrowLeftIcon className='h-5 w-5 mr-2' />
              Kembali ke Katalog Produk
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
