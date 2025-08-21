'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ShoppingCartIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Products() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('standard');

  const product = {
    name: 'Plastik Core Tray Premium',
    price: 125000,
    originalPrice: 150000,
    rating: 4.8,
    reviews: 24,
    description:
      'Solusi profesional untuk organisasi dan manajemen kabel di data center, industri, dan bangunan komersial. Dibuat dari material plastik berkualitas tinggi yang tahan lama dan mudah dipasang.',
    features: [
      'Material plastik ABS berkualitas tinggi',
      'Tahan korosi dan cuaca ekstrem',
      'Mudah dipasang dan dipelihara',
      'Desain modular yang fleksibel',
      'Tersedia berbagai ukuran',
      'Garansi 2 tahun',
    ],
    specifications: {
      material: 'ABS Plastic',
      thickness: '2mm',
      color: 'Abu-abu',
      weight: '1.2 kg/meter',
      temperature: '-40°C hingga +85°C',
      certification: 'SNI, ISO 9001',
    },
    sizes: [
      { id: 'small', name: '100mm x 50mm', price: 125000 },
      { id: 'standard', name: '200mm x 100mm', price: 150000 },
      { id: 'large', name: '300mm x 150mm', price: 200000 },
    ],
    images: [
      '/products/core-tray-1.jpg',
      '/products/core-tray-2.jpg',
      '/products/core-tray-3.jpg',
      '/products/core-tray-4.jpg',
    ],
  };

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Kualitas Terjamin',
      description:
        'Material berkualitas tinggi dengan sertifikasi SNI dan ISO 9001',
    },
    {
      icon: TruckIcon,
      title: 'Pengiriman Cepat',
      description: 'Pengiriman ke seluruh Indonesia dengan packaging aman',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Harga Kompetitif',
      description: 'Harga terbaik dengan kualitas premium dan garansi resmi',
    },
  ];

  const handleAddToCart = () => {
    const selectedProduct = product.sizes.find(
      (size) => size.id === selectedSize
    );
    console.log('Added to cart:', {
      product: product.name,
      size: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity,
      total: selectedProduct.price * quantity,
    });
    // Here you would typically add to cart state or send to API
    alert(
      `${product.name} (${selectedProduct.name}) x${quantity} ditambahkan ke keranjang!`
    );
  };

  const handleBuyNow = () => {
    const selectedProduct = product.sizes.find(
      (size) => size.id === selectedSize
    );
    console.log('Buy now:', {
      product: product.name,
      size: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity,
      total: selectedProduct.price * quantity,
    });
    // Redirect to checkout or WhatsApp
    const message = `Halo, saya ingin membeli ${product.name} (${
      selectedProduct.name
    }) sebanyak ${quantity} unit. Total: Rp ${(
      selectedProduct.price * quantity
    ).toLocaleString('id-ID')}`;
    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const selectedProduct = product.sizes.find(
    (size) => size.id === selectedSize
  );

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

      {/* Product Detail */}
      <section className='py-12 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='space-y-4'>
                <div className='aspect-square bg-gray-100 rounded-2xl overflow-hidden'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center'>
                        <span className='text-white text-2xl font-bold'>
                          PCT
                        </span>
                      </div>
                      <p className='text-gray-500'>Gambar Produk Utama</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className='aspect-square bg-gray-100 rounded-lg flex items-center justify-center'
                    >
                      <span className='text-gray-400 text-sm'>Foto {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
            >
              <div>
                <h1 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
                  {product.name}
                </h1>

                {/* Rating */}
                <div className='flex items-center space-x-2 mb-4'>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-gray-600'>
                    ({product.reviews} ulasan)
                  </span>
                </div>

                {/* Price */}
                <div className='flex items-center space-x-4 mb-6'>
                  <span className='text-3xl font-bold text-blue-600'>
                    Rp {selectedProduct?.price.toLocaleString('id-ID')}
                  </span>
                  {selectedProduct?.price < product.originalPrice && (
                    <span className='text-xl text-gray-500 line-through'>
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>

                <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  Pilih Ukuran:
                </h3>
                <div className='grid grid-cols-1 gap-3'>
                  {product.sizes.map((size) => (
                    <label
                      key={size.id}
                      className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedSize === size.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className='flex items-center space-x-3'>
                        <input
                          type='radio'
                          name='size'
                          value={size.id}
                          checked={selectedSize === size.id}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className='text-blue-600'
                        />
                        <span className='font-medium'>{size.name}</span>
                      </div>
                      <span className='font-bold text-blue-600'>
                        Rp {size.price.toLocaleString('id-ID')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  Jumlah:
                </h3>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center border border-gray-300 rounded-lg'>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='p-2 hover:bg-gray-100 transition-colors'
                    >
                      <MinusIcon className='h-5 w-5' />
                    </button>
                    <span className='px-4 py-2 font-medium'>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className='p-2 hover:bg-gray-100 transition-colors'
                    >
                      <PlusIcon className='h-5 w-5' />
                    </button>
                  </div>
                  <span className='text-gray-600'>
                    Total: Rp{' '}
                    {(selectedProduct?.price * quantity).toLocaleString(
                      'id-ID'
                    )}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={handleAddToCart}
                  className='flex-1 btn-outline flex items-center justify-center space-x-2'
                >
                  <ShoppingCartIcon className='h-5 w-5' />
                  <span>Tambah ke Keranjang</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className='flex-1 btn-primary flex items-center justify-center'
                >
                  Beli Sekarang
                </button>
              </div>

              {/* Contact for Quote */}
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Butuh Jumlah Besar?
                </h3>
                <p className='text-gray-600 mb-4'>
                  Dapatkan harga khusus untuk pembelian dalam jumlah besar.
                </p>
                <Link
                  href='/contact'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
                >
                  Minta Penawaran Khusus →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Keunggulan Produk
              </h2>
              <div className='space-y-4'>
                {product.features.map((feature, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <CheckCircleIcon className='h-6 w-6 text-green-500 flex-shrink-0' />
                    <span className='text-gray-700'>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Spesifikasi Teknis
              </h2>
              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='space-y-4'>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className='flex justify-between py-2 border-b border-gray-100 last:border-b-0'
                      >
                        <span className='font-medium text-gray-900 capitalize'>
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                        </span>
                        <span className='text-gray-600'>{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Mengapa Memilih Produk Kami?
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
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
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

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-4'>
              Siap Memesan Plastik Core Tray?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran
              terbaik
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20Plastik%20Core%20Tray`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300'
              >
                Konsultasi Gratis
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
