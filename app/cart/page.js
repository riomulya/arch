'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
      name: 'Plastik Core Tray Premium',
      size: '200mm x 100mm',
      price: 150000,
      quantity: 2,
      image: '/products/core-tray-1.jpg',
    },
    {
      id: 2,
      name: 'Plastik Core Tray Premium',
      size: '300mm x 150mm',
      price: 200000,
      quantity: 1,
      image: '/products/core-tray-2.jpg',
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

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500000 ? 0 : 50000; // Free shipping over 500k
  const total = subtotal + shipping;

  const handleCheckout = () => {
    const orderDetails = cartItems
      .map(
        (item) =>
          `${item.name} (${item.size}) x${item.quantity} = Rp ${(
            item.price * item.quantity
          ).toLocaleString('id-ID')}`
      )
      .join('\n');

    const message = `Halo, saya ingin melanjutkan pembelian:

${orderDetails}

Subtotal: Rp ${subtotal.toLocaleString('id-ID')}
Ongkir: Rp ${shipping.toLocaleString('id-ID')}
Total: Rp ${total.toLocaleString('id-ID')}

Mohon bantuan untuk proses selanjutnya. Terima kasih.`;

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
              {cartItems.length} item dalam keranjang Anda
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
                  className='bg-white p-6 rounded-xl shadow-lg'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className='flex items-center space-x-6'>
                    {/* Product Image */}
                    <div className='w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <span className='text-gray-500 text-xs'>Produk</span>
                    </div>

                    {/* Product Info */}
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold text-gray-900 mb-1'>
                        {item.name}
                      </h3>
                      <p className='text-gray-600 mb-2'>{item.size}</p>
                      <p className='text-blue-600 font-bold'>
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex items-center space-x-3'>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors'
                      >
                        <MinusIcon className='h-4 w-4' />
                      </button>
                      <span className='font-medium w-8 text-center'>
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

                    {/* Item Total */}
                    <div className='text-right'>
                      <p className='text-lg font-bold text-gray-900'>
                        Rp{' '}
                        {(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className='p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors'
                    >
                      <TrashIcon className='h-5 w-5' />
                    </button>
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

                <div className='space-y-4 mb-6'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Subtotal</span>
                    <span className='font-medium'>
                      Rp {subtotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Ongkos Kirim</span>
                    <span className='font-medium'>
                      {shipping === 0
                        ? 'Gratis'
                        : `Rp ${shipping.toLocaleString('id-ID')}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className='text-sm text-green-600'>
                      🎉 Selamat! Anda mendapat gratis ongkir
                    </p>
                  )}
                  <div className='border-t pt-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-lg font-bold text-gray-900'>
                        Total
                      </span>
                      <span className='text-xl font-bold text-blue-600'>
                        Rp {total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className='w-full btn-primary mb-4'
                >
                  Lanjut ke Checkout
                </button>

                <Link
                  href='/products'
                  className='w-full btn-outline block text-center'
                >
                  Lanjut Belanja
                </Link>

                {/* Shipping Info */}
                <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Informasi Pengiriman
                  </h3>
                  <div className='text-sm text-gray-600 space-y-1'>
                    <p>• Gratis ongkir untuk pembelian ≥ Rp 500.000</p>
                    <p>• Pengiriman 1-3 hari kerja</p>
                    <p>• Garansi produk 2 tahun</p>
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
                name: 'Plastik Core Tray Standard',
                price: 125000,
                size: '150mm x 75mm',
              },
              {
                name: 'Plastik Core Tray Large',
                price: 250000,
                size: '400mm x 200mm',
              },
              {
                name: 'Plastik Core Tray Custom',
                price: 300000,
                size: 'Custom Size',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>
                    Produk {index + 1}
                  </span>
                </div>
                <h3 className='font-bold text-gray-900 mb-2'>{product.name}</h3>
                <p className='text-gray-600 mb-3'>{product.size}</p>
                <p className='text-blue-600 font-bold mb-4'>
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
                <Link
                  href='/products'
                  className='btn-outline w-full block text-center'
                >
                  Lihat Detail
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
