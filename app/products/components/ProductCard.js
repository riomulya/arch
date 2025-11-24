'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CurrencyDollarIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { generateSlug } from '@/app/lib/products';

export default function ProductCard({ product, index, onRequestQuote }) {
  const productImage = product.images?.[0] || product.image;
  const productThumbnails = product.images?.slice(1, 4) || [];
  const productSlug = product.slug || generateSlug(product.name);
  const quickSpecs = Object.entries(product.specifications || {}).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className='bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300'
    >
      {/* Product Image */}
      <div className='relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden'>
        <Image
          src={productImage}
          alt={product.name}
          fill
          className='object-contain p-6 transition-all duration-300 group-hover:scale-105'
          quality={90}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute top-4 left-4'>
          <span className='px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold shadow-lg border border-blue-100'>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-6 space-y-5'>
        <div>
          <p className='text-xs uppercase tracking-wide text-gray-500 mb-2 font-semibold'>
            {product.subcategory}
          </p>
          <h3 className='text-xl font-bold text-gray-900 mb-2 leading-tight'>
            {product.name}
          </h3>
          <p className='text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed'>
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        <div className='mb-5 bg-gray-50 rounded-xl p-4 border border-gray-100'>
          <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3'>
            Spesifikasi Utama
          </h4>
          <div className='space-y-2'>
            {quickSpecs.map(([key, value]) => (
              <div key={key} className='flex justify-between text-sm'>
                <span className='text-gray-600'>{key}:</span>
                <span className='font-semibold text-gray-900 text-right'>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        {product.applications?.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-5'>
            {product.applications.slice(0, 3).map((app) => (
              <span
                key={app}
                className='px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium border border-blue-100'
              >
                {app}
              </span>
            ))}
          </div>
        )}

        {/* Thumbnails */}
        {productThumbnails.length > 0 && (
          <div className='flex gap-2 mb-5'>
            {productThumbnails.map((img, idx) => (
              <div
                key={idx}
                className='relative h-16 w-16 rounded-xl overflow-hidden border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:border-blue-300 transition-colors'
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  fill
                  className='object-contain p-2'
                  quality={85}
                  sizes='64px'
                />
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-100'>
          <Link
            href={`/products/${productSlug}`}
            className='flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-4 py-3 hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg'
          >
            <InformationCircleIcon className='h-5 w-5' />
            Detail
          </Link>
          <button
            onClick={() => onRequestQuote(product)}
            className='flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold px-4 py-3 hover:bg-blue-50 transition-colors duration-200'
          >
            <CurrencyDollarIcon className='h-5 w-5' />
            Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
