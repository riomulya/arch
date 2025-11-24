'use client';

import { motion } from 'framer-motion';

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className='py-8 bg-white border-b'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap gap-3 justify-center'>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Semua Produk
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
