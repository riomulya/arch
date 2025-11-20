'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { productCategories, generateSlug } from '../lib/products';

// Metadata will be handled by layout.js for this page

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Kualitas Terjamin',
      description:
        'Standar kualitas internasional dengan sertifikasi ISO 9001, ISO 13485, dan ISO/TS 16949',
    },
    {
      icon: TruckIcon,
      title: 'Kemampuan Produksi',
      description:
        'Fasilitas manufactur lengkap dengan 14 mesin injeksi (75-800 ton) dan CNC precision',
    },
    {
      icon: CheckCircleIcon,
      title: 'Teknologi Presisi',
      description:
        'Mesin CNC kelas dunia (Makino, Kasuga) dengan akurasi ±0.01mm untuk toleransi ketat',
    },
  ];

  // Get all products or filtered by category
  const getAllProducts = () => {
    if (selectedCategory === 'all') {
      return productCategories.flatMap((cat) => cat.products);
    }
    const category = productCategories.find(
      (cat) => cat.id === selectedCategory
    );
    return category ? category.products : [];
  };

  const handleRequestQuote = (product) => {
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


  return (
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
                <span className='text-blue-600 font-medium'>Produk</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Katalog Produk{' '}
              <span className='text-blue-600'>PT Arch Continent Tech</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Solusi manufaktur presisi untuk berbagai industri dengan standar
              kualitas internasional dan teknologi CNC modern.
            </p>

            {/* Company Stats */}
            <div className='grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>14+</div>
                <div className='text-gray-600'>Mesin Injeksi</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>4</div>
                <div className='text-gray-600'>Sektor Industri</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  ±0.01
                </div>
                <div className='text-gray-600'>mm Akurasi CNC</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>ISO</div>
                <div className='text-gray-600'>Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 bg-white border-b'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Produk
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {getAllProducts().map((product, index) => (
              <motion.div
                key={product.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Product Header with Image */}
                <Link href={`/products/${generateSlug(product.name)}`}>
                  <div className='relative'>
                    <div className='h-48 overflow-hidden bg-gray-100 relative group cursor-pointer'>
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${product.category} - ${product.subcategory}`}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        priority={index < 6}
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A'
                      />
                      
                      {/* Category Badge */}
                      <div className='absolute top-4 left-4 z-10'>
                        <span className='px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg'>
                          {product.subcategory}
                        </span>
                      </div>

                      {/* Company Watermark */}
                      <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                        <div className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg'>
                          <Image
                            src='/logo_transparent.png'
                            alt='ACT'
                            width={100}
                            height={100}
                            className='p-2'
                          />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                          <p className='text-white text-sm font-medium drop-shadow-lg'>
                            Lihat Detail Produk
                          </p>
                          <p className='text-white/80 text-xs drop-shadow'>
                            Klik untuk spesifikasi lengkap
                          </p>
                        </div>
                      </div>

                      {/* Loading skeleton overlay */}
                      <div className='absolute inset-0 bg-gray-200 animate-pulse opacity-0 pointer-events-none'></div>
                    </div>
                  </div>
                </Link>

                {/* Product Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {product.name}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                      Spesifikasi Utama:
                    </h4>
                    <div className='space-y-1'>
                      {Object.entries(product.specifications)
                        .slice(0, 3)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className='flex justify-between text-sm'
                          >
                            <span className='text-gray-500'>{key}:</span>
                            <span className='text-gray-900 font-medium'>
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                      Aplikasi:
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {product.applications.slice(0, 2).map((app, i) => (
                        <span
                          key={i}
                          className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'
                        >
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 2 && (
                        <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                          +{product.applications.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3 mt-6'>
                    <Link
                      href={`/products/${generateSlug(product.name)}`}
                      className='flex-1 btn-outline text-sm py-2.5 group hover:shadow-md transition-all duration-300 text-center'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <InformationCircleIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                        Lihat Detail
                      </span>
                    </Link>
                    <button
                      onClick={() => handleRequestQuote(product)}
                      className='flex-1 btn-primary text-sm py-2.5 group hover:shadow-lg transition-all duration-300'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <CurrencyDollarIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                        Request Penawaran
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Kapabilitas Manufaktur Presisi
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Fasilitas produksi lengkap dengan teknologi terkini untuk memenuhi
              standar kualitas tertinggi
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Mesin & Peralatan
              </h3>
              <div className='space-y-4'>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    CNC Milling
                  </h4>
                  <p className='text-gray-600'>
                    Makino, Feeler, Campro, Kasuga dengan akurasi ±0.01mm
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Plastic Injection
                  </h4>
                  <p className='text-gray-600'>
                    14 unit mesin 75-800 ton (Cai Feng, Hwamda, Beston)
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    EDM Processing
                  </h4>
                  <p className='text-gray-600'>
                    ZNC-SKM dan CNC Charmiles SE-1 untuk mold kompleks
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Support Equipment
                  </h4>
                  <p className='text-gray-600'>
                    Surface Grinding, Radial Drill, Band Saw
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Lokasi Fasilitas
              </h3>
              <div className='space-y-4'>
                <div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    🏭 Plant 1 - Citeureup, Bogor
                  </h4>
                  <p className='text-gray-600 mb-3'>
                    Pusat Tooling dan Injeksi Volume Tinggi
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• Mesin CNC berkapasitas besar</li>
                    <li>• Mesin injeksi hingga 800 ton</li>
                    <li>• Produksi mold presisi</li>
                    <li>• Komponen otomotif besar</li>
                  </ul>
                </div>
                <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    🏭 Plant 2 - Cibinong, Bogor
                  </h4>
                  <p className='text-gray-600 mb-3'>
                    Pusat Precision Machining dan Perakitan
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• CNC Milling high-speed (20,000 rpm)</li>
                    <li>• CNC Bubut presisi tinggi</li>
                    <li>• Perakitan komponen medis</li>
                    <li>• Produksi aksesori motor</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Mengapa Memilih PT Arch Continent Tech?
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <benefit.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Standar Kualitas & Sertifikasi
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Komitmen kami terhadap kualitas diimplementasikan melalui standar
              internasional
            </p>
          </motion.div>

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              {
                title: 'ISO 9001',
                desc: 'Quality Management System',
                icon: '🏆',
              },
              {
                title: 'ISO 13485',
                desc: 'Medical Device Quality',
                icon: '🏥',
              },
              { title: 'ISO/TS 16949', desc: 'Automotive Quality', icon: '🚗' },
              {
                title: 'ISO 14001',
                desc: 'Environmental Management',
                icon: '🌱',
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className='bg-gray-50 p-6 rounded-xl text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl mb-3'>{cert.icon}</div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {cert.title}
                </h3>
                <p className='text-sm text-gray-600'>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-4'>
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Hubungi tim teknis kami untuk konsultasi produk dan solusi
              manufaktur yang tepat untuk kebutuhan Anda
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20PT%20Arch%20Continent%20Tech`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300'
              >
                Konsultasi Teknis Gratis
              </a>
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
  );
}
