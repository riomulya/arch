'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { MeshGradient } from '@paper-design/shaders-react';
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import PulsingCircle from './components/PulsingCircle';

export default function Home() {
  const valuePropositions = [
    {
      icon: CheckCircleIcon,
      title: 'Produk Berkualitas',
      description:
        'Semua produk telah melalui quality control ketat dan sesuai standar industri',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Harga Kompetitif',
      description:
        'Menawarkan harga terbaik dengan kualitas premium untuk semua kebutuhan konstruksi',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Layanan Terpercaya',
      description:
        'Didukung tim profesional dan pengalaman bertahun-tahun di industri konstruksi',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Legalitas Lengkap',
      description:
        'Perusahaan resmi dengan Akta Notaris dan izin usaha yang lengkap',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden'>
        {/* <MeshGradient
          width={1280}
          height={720}
          colors={['#e0eaff', '#241d9a', '#f75092', '#9f50d3']}
          distortion={0.8}
          swirl={0.1}
          grainMixer={0}
          grainOverlay={0}
          speed={1}
        /> */}
        {/* Background Pattern */}
        <div className='absolute inset-0 '>
          <MeshGradient
            className='absolute inset-0 w-full h-full'
            colors={['#e0eaff', '#b57c21', '#321e0b', '#9f917a']}
            distortion={0.8}
            swirl={0.1}
            grainMixer={0}
            grainOverlay={0}
            speed={1}
          />
          <div className="absolute inset-0 bg-[url('/construction-pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center'>
            <motion.h1
              className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Solusi Terpercaya untuk{' '}
              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
                Konstruksi & Teknis
              </span>
            </motion.h1>

            <motion.p
              className='text-xl sm:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              PT ARCH CONTINENT TECH menyediakan bahan konstruksi dan
              perlengkapan teknis berkualitas tinggi untuk mendukung proyek
              konstruksi Anda
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href='/products'
                className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-2'
              >
                <span>Lihat Produk Kami</span>
                <ArrowRightIcon className='h-5 w-5' />
              </Link>
              <Link
                href='/about'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105'
              >
                Tentang Perusahaan
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Tambahkan PulsingCircle di sudut kanan bawah Hero */}
        <PulsingCircle />
        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white rounded-full mt-2'></div>
          </div>
        </motion.div>
      </section>

      {/* Value Propositions */}
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
              Mengapa Memilih Kami?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Komitmen kami untuk memberikan yang terbaik dalam setiap aspek
              bisnis
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {valuePropositions.map((item, index) => (
              <motion.div
                key={item.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <item.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
