'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Core Tray PQ - Plastik Premium',
      category: 'Pertambangan',
      specifications: {
        panjang: '1085 mm',
        lebar: '390 mm',
        tinggi: '95 mm',
        kapasitas: '3 rows',
        berat: '2.55 kg',
        material: 'Plastik Presisi HDPE',
        aplikasi: 'Inti bor diameter PQ (85 mm)',
      },
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Core Tray HQ - Plastik Premium',
      category: 'Pertambangan',
      specifications: {
        panjang: '1085 mm',
        lebar: '390 mm',
        tinggi: '75 mm',
        kapasitas: '4 rows',
        berat: '2.3 kg',
        material: 'Plastik Presisi HDPE',
        aplikasi: 'Inti bor diameter HQ (63.5 mm)',
      },
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Cassette 3P - Alat Kesehatan',
      category: 'Medical Devices',
      specifications: {
        material: 'Plastik Medis Grade',
        kompatibilitas: 'Parameter Laboratorium',
        fungsi: 'Diagnostic Testing',
        standar: 'ISO 13485 Compliant',
        fitur: 'Multi-parameter detection',
        keamanan: 'Medical grade plastic',
      },
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1534531187661-9410395f58d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCategories = [...new Set(cartItems.map((item) => item.category))]
    .length;

  const handleCheckout = () => {
    const orderDetails = cartItems
      .map((item) => {
        const specs = Object.entries(item.specifications)
          .slice(0, 3) // Show first 3 key specifications
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
        return `${item.name} x${item.quantity}\nKategori: ${item.category}\nSpesifikasi: ${specs}`;
      })
      .join('\n\n');

    const message = `Halo, saya ingin melanjutkan pembelian produk dari PT Arch Continent Tech:

${orderDetails}

Total Items: ${totalItems} produk
Total Kategori: ${totalCategories} kategori

Mohon bantuan untuk proses penawaran dan informasi lebih lanjut. Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-white'>
        <Header />

        <section className='pt-20 pb-16 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center py-20'>
              <ShoppingCartIcon className='h-24 w-24 text-gray-400 mx-auto mb-6' />
              <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                Keranjang Belanja Kosong
              </h1>
              <p className='text-gray-600 mb-8'>
                Anda belum menambahkan produk apapun ke keranjang belanja.
              </p>
              <Link
                href='/products'
                className='btn-primary inline-flex items-center space-x-2'
              >
                <span>Mulai Belanja</span>
                <ArrowRightIcon className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

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
                <span className='text-blue-600 font-medium'>
                  Keranjang Belanja
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>
              Keranjang Belanja
            </h1>
            <p className='text-gray-600'>
              {totalItems} produk dari {totalCategories} kategori dalam
              keranjang Anda
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Cart Items */}
            <motion.div
              className='lg:col-span-2 space-y-4'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className='space-y-4'>
                    {/* Header */}
                    <div className='flex items-start justify-between'>
                      <div className='flex items-center space-x-4'>
                        {/* Product Image */}
                        <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-200 relative'>
                          <Image
                            src={item.image}
                            alt={`${item.name} - ${item.category}`}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-300'
                            sizes='(max-width: 80px) 100vw, 80px'
                            style={{ objectFit: 'cover' }}
                            placeholder='blur'
                            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A'
                          />
                        </div>

                        {/* Product Info */}
                        <div>
                          <div className='flex items-center space-x-2 mb-1'>
                            <h3 className='text-lg font-bold text-gray-900'>
                              {item.name}
                            </h3>
                            <span className='px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full'>
                              {item.category}
                            </span>
                          </div>
                          <p className='text-sm text-gray-500'>
                            Kode Produk: CT-
                            {item.id.toString().padStart(4, '0')}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className='p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors'
                      >
                        <TrashIcon className='h-5 w-5' />
                      </button>
                    </div>

                    {/* Specifications Grid */}
                    <div className='bg-gray-50 rounded-lg p-4'>
                      <h4 className='text-sm font-semibold text-gray-700 mb-3'>
                        Spesifikasi Teknis:
                      </h4>
                      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                        {Object.entries(item.specifications).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className='bg-white rounded-md p-2 border border-gray-200'
                            >
                              <p className='text-xs text-gray-500 capitalize mb-1'>
                                {key.replace(/_/g, ' ')}:
                              </p>
                              <p className='text-sm font-medium text-gray-900'>
                                {value}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                      {/* Quantity Controls */}
                      <div className='flex items-center space-x-3'>
                        <span className='text-sm text-gray-600'>Jumlah:</span>
                        <div className='flex items-center space-x-2'>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50'
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon className='h-4 w-4' />
                          </button>
                          <span className='font-medium w-8 text-center text-gray-900'>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors'
                          >
                            <PlusIcon className='h-4 w-4' />
                          </button>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className='px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium'>
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary */}
            <motion.div
              className='lg:col-span-1'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='bg-white p-6 rounded-xl shadow-lg sticky top-24'>
                <h2 className='text-xl font-bold text-gray-900 mb-6'>
                  Ringkasan Pesanan
                </h2>

                {/* Order Summary Statistics */}
                <div className='space-y-4 mb-6'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Total Produk</span>
                    <span className='font-medium text-gray-900'>
                      {totalItems} Items
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Kategori Produk</span>
                    <span className='font-medium text-gray-900'>
                      {totalCategories} Kategori
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Jenis Produk</span>
                    <span className='font-medium text-gray-900'>
                      {cartItems.length} Tipe
                    </span>
                  </div>
                </div>

                {/* Product Categories Summary */}
                <div className='border-t pt-4 mb-6'>
                  <h3 className='text-sm font-semibold text-gray-700 mb-3'>
                    Ringkasan Kategori:
                  </h3>
                  <div className='space-y-2'>
                    {[...new Set(cartItems.map((item) => item.category))].map(
                      (category, index) => {
                        const categoryCount = cartItems.filter(
                          (item) => item.category === category
                        ).length;
                        const categoryItems = cartItems
                          .filter((item) => item.category === category)
                          .reduce((sum, item) => sum + item.quantity, 0);
                        return (
                          <div
                            key={index}
                            className='flex justify-between items-center text-sm'
                          >
                            <span className='text-gray-600'>{category}</span>
                            <span className='font-medium'>
                              {categoryItems} produk
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className='w-full btn-primary mb-4'
                >
                  Request Penawaran
                </button>

                <Link
                  href='/products'
                  className='w-full btn-outline block text-center'
                >
                  Tambah Produk
                </Link>

                {/* Company Info */}
                <div className='mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    PT Arch Continent Tech
                  </h3>
                  <div className='text-sm text-gray-600 space-y-1'>
                    <p>• Spesialisasi: Tooling & Precision</p>
                    <p>• Konsultasi produk gratis</p>
                    <p>• Support teknis 24/7</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Hubungi Kami
                  </h3>
                  <div className='text-sm text-gray-600 space-y-1'>
                    <p>📱 WhatsApp: +62 895-1402-4380</p>
                    <p>🏭 Plant 1: Citeureup, Bogor</p>
                    <p>🏭 Plant 2: Cibinong, Bogor</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
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
              Produk Lainnya
            </h2>
            <p className='text-gray-600'>
              Mungkin Anda juga tertarik dengan produk-produk ini
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                name: 'Core Tray NQ - Plastik Premium',
                category: 'Pertambangan',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                specifications: {
                  panjang: '1085 mm',
                  lebar: '390 mm',
                  tinggi: '67 mm',
                  kapasitas: '5 rows',
                  aplikasi: 'Inti bor diameter NQ (47.6 mm)',
                },
                highlight: 'Kapasitas tertinggi',
              },
              {
                name: 'ODP - Optical Distribution Point',
                category: 'Telekomunikasi',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                specifications: {
                  material: 'UV Resistant Plastic',
                  fungsi: 'Fiber Optic Management',
                  aplikasi: 'Jaringan Telekomunikasi',
                  fitur: 'Weatherproof Design',
                },
                highlight: 'Tahan cuaca',
              },
              {
                name: 'Baby Scale - Timbangan Bayi',
                category: 'Medical Devices',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                specifications: {
                  fungsi: 'Medical Weighing',
                  akurasi: 'High Precision',
                  sertifikasi: 'Medical Grade',
                  fitur: 'Digital Display',
                },
                highlight: 'Akurasi tinggi',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Product Header */}
                <div className='mb-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full'>
                      {product.category}
                    </span>
                    <span className='text-xs text-gray-500 font-medium'>
                      {product.highlight}
                    </span>
                  </div>
                  <div className='w-full h-32 rounded-lg overflow-hidden border border-gray-200 relative group'>
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category}`}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                </div>

                <h3 className='font-bold text-gray-900 mb-3'>{product.name}</h3>

                {/* Key Specifications */}
                <div className='space-y-2 mb-4'>
                  {Object.entries(product.specifications)
                    .slice(0, 3)
                    .map(([key, value]) => (
                      <div key={key} className='flex items-start space-x-2'>
                        <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0'></div>
                        <div className='text-sm'>
                          <span className='text-gray-500 capitalize text-xs'>
                            {key.replace(/_/g, ' ')}:
                          </span>
                          <span className='text-gray-900 ml-1'>{value}</span>
                        </div>
                      </div>
                    ))}
                </div>

                <Link
                  href='/products'
                  className='btn-outline w-full block text-center'
                >
                  Lihat Detail Produk
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
