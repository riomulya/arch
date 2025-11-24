'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ShieldCheckIcon,
  TruckIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { getAllProducts } from '../lib/products';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load all products for the bulk order list
  useEffect(() => {
    const allProducts = getAllProducts();
    // Initialize all products with quantity 0
    const initialItems = allProducts.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setCartItems(initialItems);
    setIsLoading(false);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    updateQuantity(id, 0);
  };

  // Calculate totals based on selected items (quantity > 0)
  const selectedItems = cartItems.filter((item) => item.quantity > 0);
  const totalItems = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalCategories = [
    ...new Set(selectedItems.map((item) => item.category)),
  ].length;

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert('Silakan pilih minimal satu produk untuk memesan.');
      return;
    }

    const orderDetails = selectedItems
      .map((item) => {
        const specs = item.specifications
          ? Object.entries(item.specifications)
              .slice(0, 3)
              .map(([key, value]) => `${key}: ${value}`)
              .join(', ')
          : '-';
        return `*${item.name}*\nJumlah: ${item.quantity}\nKategori: ${item.category}\nSpesifikasi: ${specs}`;
      })
      .join('\n\n');

    const message = `Halo PT Arch Continent Tech, saya ingin meminta penawaran untuk produk berikut:\n\n${orderDetails}\n\nTotal Items: ${totalItems} produk\nTotal Kategori: ${totalCategories} kategori\n\nMohon informasi ketersediaan dan harga terbaik. Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (isLoading) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      <Header />

      {/* Breadcrumb */}
      <div className='bg-white border-b border-gray-200 pt-20 pb-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex text-sm' aria-label='Breadcrumb'>
            <ol className='flex items-center space-x-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-500 hover:text-blue-600 transition-colors'
                >
                  Beranda
                </Link>
              </li>
              <li className='text-gray-400'>/</li>
              <li>
                <span className='text-blue-600 font-medium'>
                  Form Pemesanan
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className='py-8 lg:py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Left Column: Product List */}
            <div className='lg:w-2/3 space-y-6'>
              <div className='flex items-center justify-between mb-2'>
                <h1 className='text-2xl font-bold text-gray-900'>
                  Katalog Produk ({cartItems.length})
                </h1>
                <p className='text-sm text-gray-500'>
                  Atur jumlah pada produk yang ingin dipesan
                </p>
              </div>

              <AnimatePresence>
                {cartItems.map((item) => {
                  const isSelected = item.quantity > 0;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-xl shadow-sm border overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-200 shadow-md ring-1 ring-blue-200'
                          : 'bg-white border-gray-100 hover:shadow-md'
                      }`}
                    >
                      <div className='p-6 flex flex-col sm:flex-row gap-6'>
                        {/* Product Image */}
                        <div className='w-full sm:w-32 h-32 bg-white rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200 p-2'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-contain'
                            sizes='(max-width: 640px) 100vw, 128px'
                          />
                        </div>

                        {/* Product Details */}
                        <div className='flex-grow'>
                          <div className='flex justify-between items-start mb-2'>
                            <div>
                              <span className='inline-block px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-md mb-2'>
                                {item.category}
                              </span>
                              <h3 className='text-lg font-bold text-gray-900 leading-tight'>
                                <Link
                                  href={`/products/${item.slug}`}
                                  className='hover:text-blue-600 transition-colors'
                                >
                                  {item.name}
                                </Link>
                              </h3>
                            </div>
                            {isSelected && (
                              <button
                                onClick={() => removeItem(item.id)}
                                className='text-gray-400 hover:text-red-500 p-1 transition-colors'
                                title='Reset jumlah'
                              >
                                <TrashIcon className='h-5 w-5' />
                              </button>
                            )}
                          </div>

                          {/* Specs Preview */}
                          <div className='mb-4'>
                            <div className='grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600'>
                              {item.specifications &&
                                Object.entries(item.specifications)
                                  .slice(0, 2)
                                  .map(([key, value]) => (
                                    <div
                                      key={key}
                                      className='flex items-center'
                                    >
                                      <span className='w-1.5 h-1.5 bg-gray-300 rounded-full mr-2'></span>
                                      <span className='capitalize truncate'>
                                        {key.replace(/_/g, ' ')}: {value}
                                      </span>
                                    </div>
                                  ))}
                            </div>
                          </div>

                          {/* Controls */}
                          <div className='flex items-center justify-between pt-4 border-t border-gray-200/50'>
                            <div className='flex items-center bg-white border border-gray-200 rounded-lg p-1'>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 0}
                                className='p-1.5 rounded-md hover:bg-gray-100 text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent transition-all'
                              >
                                <MinusIcon className='h-4 w-4' />
                              </button>
                              <span
                                className={`w-10 text-center font-medium text-sm ${
                                  isSelected ? 'text-blue-600' : 'text-gray-400'
                                }`}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className='p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-all'
                              >
                                <PlusIcon className='h-4 w-4' />
                              </button>
                            </div>

                            <Link
                              href={`/products/${item.slug}`}
                              className='text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline'
                            >
                              Lihat Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Column: Summary */}
            <div className='lg:w-1/3'>
              <div className='sticky top-24 space-y-6'>
                <div className='bg-white rounded-xl shadow-lg border border-gray-100 p-6'>
                  <h2 className='text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100'>
                    Ringkasan Pesanan
                  </h2>

                  <div className='space-y-4 mb-8'>
                    <div className='flex justify-between text-gray-600'>
                      <span>Total Produk Dipilih</span>
                      <span className='font-medium text-gray-900'>
                        {totalItems} unit
                      </span>
                    </div>
                    <div className='flex justify-between text-gray-600'>
                      <span>Kategori Terpilih</span>
                      <span className='font-medium text-gray-900'>
                        {totalCategories} kategori
                      </span>
                    </div>
                  </div>

                  {/* Selected Items List (Mini) */}
                  {selectedItems.length > 0 && (
                    <div className='mb-6 max-h-40 overflow-y-auto pr-2 space-y-2 custom-scrollbar'>
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className='flex justify-between text-sm'
                        >
                          <span className='text-gray-600 truncate w-2/3'>
                            {item.name}
                          </span>
                          <span className='font-medium text-gray-900'>
                            x{item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={handleCheckout}
                    disabled={totalItems === 0}
                    className={`w-full btn-primary flex items-center justify-center gap-2 mb-4 group ${
                      totalItems === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>Request Penawaran</span>
                    <ArrowRightIcon className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
                  </button>

                  <p className='text-xs text-gray-500 text-center leading-relaxed'>
                    Pilih produk di sebelah kiri untuk ditambahkan ke penawaran.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className='bg-blue-50 rounded-xl p-6 border border-blue-100'>
                  <h3 className='font-semibold text-gray-900 mb-4'>
                    Kenapa Memilih Kami?
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-start gap-3'>
                      <ShieldCheckIcon className='h-6 w-6 text-blue-600 flex-shrink-0' />
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          Jaminan Kualitas
                        </p>
                        <p className='text-xs text-gray-600'>
                          Produk bersertifikasi standar industri.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <TruckIcon className='h-6 w-6 text-blue-600 flex-shrink-0' />
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          Pengiriman Aman
                        </p>
                        <p className='text-xs text-gray-600'>
                          Logistik terpercaya ke seluruh Indonesia.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <PhoneIcon className='h-6 w-6 text-blue-600 flex-shrink-0' />
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          Support Ahli
                        </p>
                        <p className='text-xs text-gray-600'>
                          Konsultasi teknis gratis 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
