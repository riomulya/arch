'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CalendarDaysIcon,
  UserIcon,
  ClockIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';

export default function BlogPostClient({ post, relatedPosts }) {
  if (!post) return null;

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Header */}
      <div className='relative h-[60vh] bg-gray-900'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10'></div>

        {/* Background Image Placeholder - In real app use post.image */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-50'></div>

        <div className='absolute inset-0 z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href='/blog'
              className='inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors'
            >
              <ArrowLeftIcon className='h-4 w-4 mr-2' />
              Kembali ke Blog
            </Link>

            <div className='flex flex-wrap items-center gap-4 mb-4 text-sm text-blue-200'>
              <span className='bg-blue-600/80 text-white px-3 py-1 rounded-full backdrop-blur-sm'>
                {post.category}
              </span>
              <div className='flex items-center'>
                <CalendarDaysIcon className='h-4 w-4 mr-1' />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className='flex items-center'>
                <ClockIcon className='h-4 w-4 mr-1' />
                {post.readTime}
              </div>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight'>
              {post.title}
            </h1>

            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className='text-white font-medium'>{post.author}</p>
                  <p className='text-blue-300 text-xs'>Penulis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col lg:flex-row gap-12'>
          {/* Main Content */}
          <motion.article
            className='lg:w-2/3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='prose prose-lg max-w-none prose-blue prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600'>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className='mt-12 pt-8 border-t border-gray-100'>
              <div className='flex items-center gap-2 flex-wrap'>
                <TagIcon className='h-5 w-5 text-gray-400' />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className='mt-8 flex items-center justify-between bg-gray-50 p-6 rounded-xl'>
              <span className='font-bold text-gray-900'>
                Bagikan artikel ini:
              </span>
              <div className='flex space-x-4'>
                <button className='p-2 bg-white rounded-full shadow-sm hover:shadow-md text-blue-600 transition-all'>
                  <ShareIcon className='h-5 w-5' />
                </button>
                {/* Add social media share buttons here if needed */}
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className='lg:w-1/3 space-y-8'>
            {/* Related Posts */}
            <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24'>
              <h3 className='text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100'>
                Artikel Terkait
              </h3>
              <div className='space-y-6'>
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className='group block'
                  >
                    <div className='flex gap-4'>
                      <div className='w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden'>
                        <div className='w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl'>
                          📄
                        </div>
                      </div>
                      <div>
                        <h4 className='font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm mb-2'>
                          {related.title}
                        </h4>
                        <div className='flex items-center text-xs text-gray-500'>
                          <CalendarDaysIcon className='h-3 w-3 mr-1' />
                          {new Date(related.date).toLocaleDateString('id-ID')}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
