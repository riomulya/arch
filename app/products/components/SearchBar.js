'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  debouncedSearch,
  resultCount,
  searchInputRef,
}) {
  return (
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
              className='w-full pl-14 pr-32 py-4 text-base rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 outline-none bg-white shadow-sm hover:shadow-md'
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
            <div className='absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 border border-gray-200'>
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
              <p className='text-sm text-gray-600'>
                Ditemukan{' '}
                <span className='font-bold text-blue-600'>{resultCount}</span>{' '}
                produk untuk &quot;{debouncedSearch}&quot;
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
