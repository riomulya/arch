'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
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
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { productCategories, generateSlug } from '../lib/products';

// Metadata will be handled by layout.js for this page

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const searchInputRef = useRef(null);

  // Debounce search query untuk performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K atau Cmd+K untuk focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      // Escape untuk clear search
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery]);

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

  const featuredProduct = productCategories[0]?.products?.[0];
  const featuredImage =
    featuredProduct?.images?.[0] || featuredProduct?.image || '/logo.png';
  const heroStats = [
    { label: 'Mesin Injeksi', value: '14+' },
    { label: 'Sektor Industri', value: '4' },
    { label: 'Akurasi CNC', value: '±0.01 mm' },
    { label: 'ISO Certified', value: 'ISO' },
  ];

  // Search function - multi-field search
  const searchProducts = (products, query) => {
    if (!query.trim()) return products;

    const searchLower = query.toLowerCase();

    return products.filter((product) => {
      // Search in product name
      if (product.name.toLowerCase().includes(searchLower)) return true;

      // Search in category
      if (product.category.toLowerCase().includes(searchLower)) return true;
      if (product.subcategory.toLowerCase().includes(searchLower)) return true;

      // Search in description
      if (product.description?.toLowerCase().includes(searchLower)) return true;

      // Search in specifications
      const specsMatch = Object.entries(product.specifications || {}).some(
        ([key, value]) =>
          key.toLowerCase().includes(searchLower) ||
          String(value).toLowerCase().includes(searchLower)
      );
      if (specsMatch) return true;

      // Search in features
      const featuresMatch = product.features?.some((f) =>
        f.toLowerCase().includes(searchLower)
      );
      if (featuresMatch) return true;

      // Search in applications
      const appsMatch = product.applications?.some((a) =>
        a.toLowerCase().includes(searchLower)
      );
      return appsMatch;
    });
  };

  // Get all products or filtered by category
  const getFilteredProducts = () => {
    if (selectedCategory === 'all') {
      return productCategories.flatMap((cat) => cat.products);
    }
    const category = productCategories.find(
      (cat) => cat.id === selectedCategory
    );
    return category ? category.products : [];
  };

  // Apply search filter
  const filteredProducts = useMemo(() => {
    const categoryFiltered = getFilteredProducts();
    return searchProducts(categoryFiltered, debouncedSearch);
  }, [selectedCategory, debouncedSearch]);

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
      <section className='py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className='text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-4'>
                Precision Manufacturing Partner
              </p>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                Katalog Produk{' '}
                <span className='text-blue-600'>PT Arch Continent Tech</span>
              </h1>
              <p className='text-xl text-gray-600 mb-8 max-w-2xl'>
                Solusi manufaktur presisi untuk sektor pertambangan,
                telekomunikasi, otomotif, dan alat kesehatan dengan dukungan
                fasilitas injeksi berkapasitas besar.
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className='bg-white rounded-2xl p-5 shadow-lg border border-white/70'
                  >
                    <div className='text-3xl font-bold text-blue-600'>
                      {stat.value}
                    </div>
                    <div className='text-gray-600'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {featuredProduct && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className='relative'
              >
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-transparent rounded-3xl blur-3xl'></div>
                <div className='relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100'>
                  <div className='relative h-80 bg-gradient-to-br from-gray-50 via-white to-gray-100'>
                    <Image
                      src={featuredImage}
                      alt={featuredProduct.name}
                      fill
                      className='object-contain p-8'
                      quality={95}
                      sizes='(max-width: 768px) 100vw, 40vw'
                      priority
                    />
                    <div className='absolute top-4 left-4 flex gap-2'>
                      <span className='px-4 py-1 rounded-full bg-white/90 text-blue-700 text-xs font-semibold shadow'>
                        Produk Unggulan
                      </span>
                      <span className='px-4 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold shadow'>
                        {featuredProduct.subcategory}
                      </span>
                    </div>
                    <div className='absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6'>
                      <p className='text-sm text-white/70 uppercase tracking-wide'>
                        Plastik Core Tray
                      </p>
                      <h3 className='text-2xl font-semibold text-white'>
                        {featuredProduct.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Confidence Bar */}
      <section className='py-6 bg-white border-b border-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap gap-6 justify-center'>
            {[
              {
                title: 'Lead Time Produksi',
                desc: 'Mulai 21 hari kerja untuk order OEM',
              },
              {
                title: 'Custom Tooling',
                desc: 'Engineering support & reverse engineering',
              },
              {
                title: 'Quality Assurance',
                desc: 'QC berlapis & laporan inspeksi lengkap',
              },
            ].map((item) => (
              <div
                key={item.title}
                className='flex items-center gap-4 bg-gray-50 px-5 py-3 rounded-2xl shadow-sm border border-gray-100'
              >
                <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold'>
                  ✓
                </div>
                <div>
                  <p className='text-sm font-semibold text-gray-900'>
                    {item.title}
                  </p>
                  <p className='text-xs text-gray-500'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className='py-8 bg-white border-b'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-3xl mx-auto'
          >
            <div className='relative'>
              <MagnifyingGlassIcon className='absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none z-10' />
              <input
                ref={searchInputRef}
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Cari produk berdasarkan nama, kategori, spesifikasi, atau aplikasi...'
                className='w-full pl-14 pr-32 py-4 text-base text-gray-900 placeholder:text-gray-500 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-white shadow-sm hover:shadow-md'
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className='absolute right-24 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
                  aria-label='Clear search'
                >
                  <XMarkIcon className='h-5 w-5 text-gray-500' />
                </button>
              )}
              <div className='absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-900 border border-gray-200'>
                <kbd className='font-mono'>⌘</kbd>
                <span>+</span>
                <kbd className='font-mono'>K</kbd>
              </div>
            </div>
            {debouncedSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-4 text-center'
              >
                <p className='text-sm text-gray-900'>
                  Ditemukan{' '}
                  <span className='font-bold text-blue-600'>
                    {filteredProducts.length}
                  </span>{' '}
                  produk untuk &quot;{debouncedSearch}&quot;
                </p>
              </motion.div>
            )}
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
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
          {filteredProducts.length === 0 && debouncedSearch ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className='text-center py-20'
            >
              <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6'>
                <MagnifyingGlassIcon className='h-10 w-10 text-gray-400' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                Produk tidak ditemukan
              </h3>
              <p className='text-gray-600 mb-6 max-w-md mx-auto'>
                Tidak ada produk yang cocok dengan pencarian &quot;
                {debouncedSearch}&quot;. Coba kata kunci lain atau hapus filter
                kategori.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className='px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200'
              >
                Reset Pencarian
              </button>
            </motion.div>
          ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProducts.map((product, index) => {
                const productImage = product.images?.[0] || product.image;
                const productThumbnails = product.images?.slice(1, 4) || [];
                return (
                  <motion.div
                    key={product.id}
                    className='bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden cursor-pointer group'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    {/* Product Header with Image */}
                    <Link href={`/products/${generateSlug(product.name)}`}>
                      <div className='relative'>
                        <div className='relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden'>
                          <Image
                            src={productImage}
                            alt={`${product.name} - ${product.category} - ${product.subcategory}`}
                            fill
                            className='object-contain p-6 transition-all duration-300 group-hover:scale-105'
                            quality={90}
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            priority={index < 6}
                          />

                          {/* Category Badge */}
                          <div className='absolute top-4 left-4 z-10 flex flex-col gap-2'>
                            <span className='px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full shadow-md border border-blue-100'>
                              {product.category}
                            </span>
                            <span className='px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full shadow-lg'>
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
                          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            <div className='absolute bottom-4 left-4 right-4 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                              <p className='text-white text-sm font-semibold drop-shadow-lg'>
                                Lihat Detail Produk
                              </p>
                              <p className='text-white/90 text-xs drop-shadow-md'>
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
                      <h3 className='text-xl font-bold text-gray-900 mb-2 leading-tight'>
                        {product.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed'>
                        {product.description}
                      </p>

                      {/* Key Specifications */}
                      <div className='mb-5 bg-gray-50 rounded-xl p-4 border border-gray-100'>
                        <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
                          Spesifikasi Utama
                        </h4>
                        <div className='space-y-2'>
                          {Object.entries(product.specifications)
                            .slice(0, 3)
                            .map(([key, value]) => (
                              <div
                                key={key}
                                className='flex justify-between text-sm items-start'
                              >
                                <span className='text-gray-600 text-xs'>
                                  {key}:
                                </span>
                                <span className='text-gray-900 font-semibold text-xs text-right ml-2'>
                                  {value}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className='mb-5'>
                        <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2'>
                          Aplikasi
                        </h4>
                        <div className='flex flex-wrap gap-1.5'>
                          {product.applications.slice(0, 2).map((app, i) => (
                            <span
                              key={i}
                              className='px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium border border-blue-100'
                            >
                              {app}
                            </span>
                          ))}
                          {product.applications.length > 2 && (
                            <span className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium border border-gray-200'>
                              +{product.applications.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {productThumbnails.length > 0 && (
                        <div className='mt-4 flex gap-2'>
                          {productThumbnails.map((thumb, thumbIndex) => (
                            <div
                              key={`${product.id}-thumb-${thumbIndex}`}
                              className='relative h-16 w-16 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-50 hover:border-blue-400 transition-all duration-200 cursor-pointer'
                            >
                              <Image
                                src={thumb}
                                alt={`${product.name} preview ${
                                  thumbIndex + 1
                                }`}
                                fill
                                className='object-contain p-1'
                                sizes='64px'
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className='flex gap-3 mt-6'>
                        <Link
                          href={`/products/${generateSlug(product.name)}`}
                          className='flex-1 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all duration-200 text-center group'
                        >
                          <span className='flex items-center justify-center gap-2'>
                            <InformationCircleIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                            Detail
                          </span>
                        </Link>
                        <button
                          onClick={() => handleRequestQuote(product)}
                          className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-200 group'
                        >
                          <span className='flex items-center justify-center gap-2'>
                            <CurrencyDollarIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                            Penawaran
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
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
