'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function EmptyState({ searchQuery, onReset }) {
  return (
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
        Tidak ada produk yang cocok dengan pencarian &quot;{searchQuery}&quot;.
        Coba kata kunci lain atau hapus filter kategori.
      </p>
      <button
        onClick={onReset}
        className='px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200'
      >
        Reset Pencarian
      </button>
    </motion.div>
  );
}
