'use client';

import { useEffect, useMemo, useState } from 'react';
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
  SparklesIcon,
} from '@heroicons/react/24/outline';
import siteConfig from '@/config/site';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ProductDetailClient({ product, relatedProducts }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = useMemo(() => {
    if (product?.images?.length) return product.images;
    if (product?.image) return [product.image];
    return ['/construction-pattern.svg'];
  }, [product]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  const selectedImage = galleryImages[selectedImageIndex] ?? galleryImages[0];
  const specsEntries = Object.entries(product?.specifications || {});
  const quickSpecs = specsEntries.slice(0, 6);
  const technicalEntries = Object.entries(product?.technicalData || {});
  const description = product.fullDescription || product.description;

  const handleRequestQuote = () => {
    const specsText = specsEntries
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
- Lead time produksi
- Spesifikasi teknis lengkap

Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='pt-20 pb-8 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex text-sm text-gray-500' aria-label='Breadcrumb'>
            <ol className='flex items-center gap-2 flex-wrap'>
              <li>
                <Link
                  href='/'
                  className='hover:text-blue-600 transition-colors'
                >
                  Beranda
                </Link>
              </li>
              <li className='text-gray-400'>/</li>
              <li>
                <Link
                  href='/products'
                  className='hover:text-blue-600 transition-colors'
                >
                  Produk
                </Link>
              </li>
              <li className='text-gray-400'>/</li>
              <li className='capitalize'>{product.category}</li>
              <li className='text-gray-400'>/</li>
              <li className='text-blue-600 font-semibold truncate max-w-[220px] sm:max-w-none'>
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className='py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            <motion.div {...fadeUp} className='space-y-6'>
              <div className='relative bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200'>
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-600/3 to-transparent z-0'></div>
                <div className='relative aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-gray-100'>
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className='object-contain p-8'
                    quality={95}
                    sizes='(max-width: 768px) 100vw, 50vw'
                    priority
                  />
                </div>
                <div className='absolute top-4 left-4 flex gap-2 z-10'>
                  <span className='px-3 py-1.5 text-xs font-semibold rounded-full bg-white/95 backdrop-blur-sm text-blue-700 shadow-lg border border-blue-100'>
                    {product.category}
                  </span>
                  <span className='px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'>
                    {product.subcategory}
                  </span>
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className='grid grid-cols-3 sm:grid-cols-4 gap-3'>
                  {galleryImages.map((image, index) => (
                    <button
                      key={image}
                      type='button'
                      onClick={() => setSelectedImageIndex(index)}
                      className={`group relative aspect-square rounded-xl border-2 transition-all duration-200 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${
                        selectedImageIndex === index
                          ? 'border-blue-600 ring-2 ring-blue-200 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-blue-400 hover:shadow-md hover:scale-102'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - view ${index + 1}`}
                        fill
                        className='object-contain p-2'
                        quality={85}
                        sizes='120px'
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className='space-y-8'
            >
              <div>
                <div className='flex flex-wrap gap-3 mb-5'>
                  <span className='inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold'>
                    <SparklesIcon className='h-4 w-4' />
                    Premium Quality
                  </span>
                  <span className='inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold'>
                    <ShieldCheckIcon className='h-4 w-4' />
                    ISO Ready
                  </span>
                </div>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4'>
                  {product.name}
                </h1>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  {product.description}
                </p>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-xl border border-gray-100'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center'>
                    <CogIcon className='h-5 w-5 text-blue-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Spesifikasi Utama
                  </h3>
                </div>
                <div className='grid sm:grid-cols-2 gap-4'>
                  {quickSpecs.map(([key, value]) => (
                    <div key={key}>
                      <p className='text-sm text-gray-500'>{key}</p>
                      <p className='text-base font-semibold text-gray-900'>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={handleRequestQuote}
                  className='flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all duration-200'
                >
                  <CurrencyDollarIcon className='h-5 w-5' />
                  Request Penawaran
                </button>
                <a
                  href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20berkonsultasi%20tentang%20${encodeURIComponent(
                    product.name
                  )}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-blue-600 text-blue-600 font-semibold py-4 hover:bg-blue-50 transition-colors'
                >
                  <TruckIcon className='h-5 w-5' />
                  Chat WhatsApp
                </a>
              </div>

              <div className='flex flex-wrap gap-4'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <ShieldCheckIcon className='h-5 w-5 text-green-600' />
                  Garansi Kualitas
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <CheckCircleIcon className='h-5 w-5 text-blue-600' />
                  Sertifikasi ISO
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <SparklesIcon className='h-5 w-5 text-indigo-600' />
                  Kustomisasi OEM
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='lg:col-span-2 space-y-12'>
              <motion.div {...fadeUp}>
                <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  <InformationCircleIcon className='h-6 w-6 text-blue-600' />
                  Deskripsi Produk
                </h2>
                <p className='text-gray-600 text-lg leading-relaxed bg-gray-50 rounded-2xl p-6'>
                  {description}
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                  <CheckBadgeIcon className='h-6 w-6 text-blue-600' />
                  Fitur Unggulan
                </h2>
                <div className='grid sm:grid-cols-2 gap-4'>
                  {product.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ y: -4 }}
                      className='flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm'
                    >
                      <div className='w-10 h-10 rounded-full bg-green-50 flex items-center justify-center'>
                        <CheckCircleIcon className='h-5 w-5 text-green-600' />
                      </div>
                      <p className='text-gray-700'>{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                  <RocketLaunchIcon className='h-6 w-6 text-blue-600' />
                  Aplikasi Penggunaan
                </h2>
                <div className='flex flex-wrap gap-3'>
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className='px-5 py-2.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium'
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className='bg-gray-50 rounded-3xl p-8'
              >
                <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                  <CogIcon className='h-6 w-6 text-blue-600' />
                  Spesifikasi Teknis Lengkap
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    {specsEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className='bg-white rounded-2xl p-4 shadow-sm border border-gray-100'
                      >
                        <p className='text-sm uppercase tracking-wide text-gray-400'>
                          {key}
                        </p>
                        <p className='text-lg font-semibold text-gray-900'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className='space-y-4'>
                    {technicalEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className='bg-white rounded-2xl p-4 shadow-sm border border-gray-100'
                      >
                        <p className='text-sm uppercase tracking-wide text-gray-400'>
                          {key}
                        </p>
                        <p className='text-lg font-semibold text-gray-900'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className='space-y-6'>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 }}
                className='bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl p-6 shadow-xl'
              >
                <h3 className='text-xl font-bold mb-3'>
                  Konsultasi Teknis Cepat
                </h3>
                <p className='text-sm text-white/80 mb-6'>
                  Tim kami siap membantu perhitungan MOQ, opsi material, dan
                  kustomisasi khusus proyek Anda.
                </p>
                <div className='space-y-3'>
                  <a
                    href='tel:+6289514024380'
                    className='flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-2xl p-3 transition-colors'
                  >
                    <PhoneIcon className='h-5 w-5' />
                    <span>+62 895-1402-4380</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className='flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-2xl p-3 transition-colors'
                  >
                    <EnvelopeIcon className='h-5 w-5' />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <div className='flex items-center gap-3 bg-white/10 rounded-2xl p-3'>
                    <MapPinIcon className='h-5 w-5' />
                    <span>{siteConfig.contact.address.city}, Indonesia</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className='bg-white rounded-3xl p-6 border border-gray-100 shadow-sm'
              >
                <h3 className='font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <SparklesIcon className='h-5 w-5 text-blue-600' />
                  Keunggulan PT ARCH CONTINENT TECH
                </h3>
                <ul className='space-y-3 text-sm text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <CheckCircleIcon className='h-4 w-4 text-green-600 mt-0.5' />
                    Manufaktur terintegrasi dengan 14 mesin injeksi
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircleIcon className='h-4 w-4 text-green-600 mt-0.5' />
                    Standar kualitas ISO 9001 & ISO 13485
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircleIcon className='h-4 w-4 text-green-600 mt-0.5' />
                    Engineering support untuk redesign & tooling
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircleIcon className='h-4 w-4 text-green-600 mt-0.5' />
                    Lead time produksi kompetitif untuk projek B2B
                  </li>
                </ul>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                className='bg-gray-50 rounded-3xl p-6 border border-gray-100'
              >
                <h3 className='font-semibold text-gray-900 mb-4'>
                  Dokumen Pendukung
                </h3>
                <div className='space-y-3'>
                  {[
                    'Spesifikasi Teknis',
                    'Safety Data Sheet',
                    'Katalog Produk',
                  ].map((doc) => (
                    <button
                      key={doc}
                      type='button'
                      className='w-full flex items-center justify-between rounded-2xl bg-white p-3 border border-gray-100 hover:border-blue-200 hover:text-blue-600 transition-colors'
                    >
                      <span className='text-sm font-medium'>{doc}</span>
                      <ArrowLeftIcon className='h-4 w-4 rotate-180' />
                    </button>
                  ))}
                </div>
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
              {...fadeUp}
              className='text-center max-w-2xl mx-auto mb-12'
            >
              <p className='text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2'>
                Produk Terkait
              </p>
              <h2 className='text-3xl font-bold text-gray-900'>
                Solusi Lain di Kategori {product.category}
              </h2>
            </motion.div>
            <div className='grid md:grid-cols-3 gap-8'>
              {relatedProducts.map((related, index) => {
                const relatedImage =
                  related.images?.[0] || related.image || selectedImage;
                return (
                  <motion.article
                    key={related.id}
                    {...fadeUp}
                    transition={{
                      ...fadeUp.transition,
                      delay: 0.05 * index,
                    }}
                    className='bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300'
                  >
                    <div className='relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
                      <Image
                        src={relatedImage}
                        alt={related.name}
                        fill
                        className='object-contain p-6 transition-transform duration-300 group-hover:scale-105'
                        quality={90}
                        sizes='(max-width: 768px) 100vw, 33vw'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    <div className='p-6 space-y-4'>
                      <div>
                        <p className='text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2'>
                          {related.subcategory}
                        </p>
                        <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight'>
                          {related.name}
                        </h3>
                      </div>
                      <p className='text-sm text-gray-600 line-clamp-2 leading-relaxed'>
                        {related.description}
                      </p>
                      <Link
                        href={`/products/${related.slug}`}
                        className='inline-flex items-center text-blue-600 font-semibold hover:gap-3 transition-all duration-200'
                      >
                        Detail Produk
                        <ArrowLeftIcon className='ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform' />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to catalog */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center'>
          <Link
            href='/products'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            Kembali ke Katalog Produk
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
