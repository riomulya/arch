'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Blog() {
  const featuredPost = {
    slug: 'pentingnya-cable-management-dengan-core-tray',
    title: 'Pentingnya Cable Management dengan Core Tray di Data Center Modern',
    excerpt:
      'Pelajari mengapa manajemen kabel yang baik menggunakan core tray sangat penting untuk efisiensi operasional data center dan bagaimana memilih produk yang tepat.',
    image: '/blog/cable-management.jpg',
    author: 'Tim PT ARCH CONTINENT TECH',
    date: '2025-01-15',
    readTime: '8 menit',
    category: 'Teknologi',
    tags: ['Cable Management', 'Core Tray', 'Data Center'],
  };

  const blogPosts = [
    {
      slug: 'cara-memilih-bahan-konstruksi-berkualitas',
      title: 'Cara Memilih Bahan Konstruksi Berkualitas untuk Proyek Anda',
      excerpt:
        'Panduan lengkap dalam memilih bahan konstruksi yang tepat, termasuk faktor-faktor yang harus dipertimbangkan dan tips praktis dari ahli.',
      image: '/blog/construction-materials.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-12',
      readTime: '6 menit',
      category: 'Konstruksi',
      tags: ['Bahan Konstruksi', 'Tips', 'Kualitas'],
    },
    {
      slug: 'profil-pt-arch-continent-tech',
      title:
        'Mengenal PT ARCH CONTINENT TECH: Mitra Terpercaya di Industri Konstruksi',
      excerpt:
        'Sejarah, visi misi, dan komitmen PT ARCH CONTINENT TECH dalam menyediakan solusi terbaik untuk kebutuhan konstruksi dan teknis.',
      image: '/blog/company-profile.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-10',
      readTime: '5 menit',
      category: 'Perusahaan',
      tags: ['Company Profile', 'Sejarah', 'Visi Misi'],
    },
    {
      slug: 'tren-teknologi-konstruksi-2025',
      title: 'Tren Teknologi Konstruksi 2025: Inovasi yang Mengubah Industri',
      excerpt:
        'Eksplorasi teknologi terbaru dalam industri konstruksi dan bagaimana inovasi ini mempengaruhi cara kita membangun di masa depan.',
      image: '/blog/construction-tech.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-08',
      readTime: '7 menit',
      category: 'Teknologi',
      tags: ['Teknologi', 'Inovasi', 'Konstruksi'],
    },
    {
      slug: 'panduan-instalasi-core-tray',
      title: 'Panduan Lengkap Instalasi Core Tray untuk Pemula',
      excerpt:
        'Step-by-step guide untuk instalasi core tray yang benar, termasuk tools yang dibutuhkan dan best practices dari profesional.',
      image: '/blog/installation-guide.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-05',
      readTime: '10 menit',
      category: 'Tutorial',
      tags: ['Tutorial', 'Instalasi', 'Core Tray'],
    },
    {
      slug: 'keunggulan-plastik-core-tray',
      title: 'Keunggulan Plastik Core Tray Dibanding Material Lain',
      excerpt:
        'Analisis komprehensif tentang mengapa plastik core tray menjadi pilihan utama untuk cable management dibanding material tradisional.',
      image: '/blog/plastic-advantages.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-03',
      readTime: '6 menit',
      category: 'Produk',
      tags: ['Plastik', 'Core Tray', 'Perbandingan'],
    },
    {
      slug: 'tips-maintenance-core-tray',
      title: 'Tips Maintenance Core Tray untuk Daya Tahan Maksimal',
      excerpt:
        'Cara merawat dan maintenance core tray agar tahan lama dan berfungsi optimal, termasuk jadwal perawatan yang direkomendasikan.',
      image: '/blog/maintenance-tips.jpg',
      author: 'Tim PT ARCH CONTINENT TECH',
      date: '2025-01-01',
      readTime: '5 menit',
      category: 'Maintenance',
      tags: ['Maintenance', 'Tips', 'Perawatan'],
    },
  ];

  const categories = [
    { name: 'Semua', count: blogPosts.length + 1 },
    { name: 'Teknologi', count: 2 },
    { name: 'Konstruksi', count: 1 },
    { name: 'Tutorial', count: 1 },
    { name: 'Produk', count: 1 },
    { name: 'Perusahaan', count: 1 },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-white'>
            <motion.h1
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Blog & Artikel
            </motion.h1>
            <motion.p
              className='text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Insights dan tips terbaru seputar konstruksi, teknologi, dan
              industri
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Artikel Terbaru
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Baca artikel terbaru dan terpopuler dari kami
            </p>
          </motion.div>

          <motion.div
            className='max-w-4xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='grid lg:grid-cols-2 gap-0'>
                <div className='aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center'>
                  <div className='text-center p-8'>
                    <div className='w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center'>
                      <span className='text-white text-2xl font-bold'>📡</span>
                    </div>
                    <p className='text-gray-500'>Featured Image</p>
                  </div>
                </div>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                      {featuredPost.category}
                    </span>
                    <div className='flex items-center space-x-2 text-gray-500 text-sm'>
                      <CalendarDaysIcon className='h-4 w-4' />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString(
                          'id-ID'
                        )}
                      </span>
                    </div>
                  </div>
                  <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
                    {featuredPost.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {featuredPost.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4 text-sm text-gray-500'>
                      <div className='flex items-center space-x-1'>
                        <UserIcon className='h-4 w-4' />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <ClockIcon className='h-4 w-4' />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className='inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium'
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRightIcon className='h-4 w-4' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-12'>
            {/* Main Content */}
            <div className='flex-1'>
              <motion.div
                className='grid md:grid-cols-2 gap-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className='aspect-video bg-gray-200 flex items-center justify-center'>
                      <div className='text-center p-4'>
                        <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center'>
                          <TagIcon className='h-8 w-8 text-white' />
                        </div>
                        <p className='text-gray-500 text-sm'>Article Image</p>
                      </div>
                    </div>
                    <div className='p-6'>
                      <div className='flex items-center space-x-4 mb-3'>
                        <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
                          {post.category}
                        </span>
                        <div className='flex items-center space-x-1 text-gray-500 text-xs'>
                          <CalendarDaysIcon className='h-3 w-3' />
                          <span>
                            {new Date(post.date).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                      </div>
                      <h3 className='text-lg font-bold text-gray-900 mb-3 line-clamp-2'>
                        {post.title}
                      </h3>
                      <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                        {post.excerpt}
                      </p>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-1 text-xs text-gray-500'>
                          <ClockIcon className='h-3 w-3' />
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className='text-blue-600 hover:text-blue-700 text-sm font-medium'
                        >
                          Baca →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className='lg:w-80'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Categories */}
              <div className='bg-white p-6 rounded-xl shadow-lg mb-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  Kategori
                </h3>
                <div className='space-y-2'>
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className='flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors'
                    >
                      <span className='text-gray-700'>{category.name}</span>
                      <span className='text-gray-500 text-sm'>
                        ({category.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className='bg-white p-6 rounded-xl shadow-lg mb-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  Tag Populer
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Cable Management',
                    'Core Tray',
                    'Konstruksi',
                    'Teknologi',
                    'Tutorial',
                    'Tips',
                    'Maintenance',
                    'Instalasi',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className='bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white'>
                <h3 className='text-lg font-bold mb-3'>Newsletter</h3>
                <p className='text-blue-100 text-sm mb-4'>
                  Dapatkan artikel terbaru dan tips konstruksi langsung ke email
                  Anda.
                </p>
                <div className='space-y-3'>
                  <input
                    type='email'
                    placeholder='Email Anda'
                    className='w-full px-3 py-2 rounded-lg text-gray-900 text-sm'
                  />
                  <button className='w-full bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors text-sm'>
                    Berlangganan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
