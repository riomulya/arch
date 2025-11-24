'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import { MeshGradient } from '@paper-design/shaders-react';
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  ArrowRightIcon,
  CogIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import PulsingCircle from './components/PulsingCircle';
import { PointerHighlight } from './components/ui/PointerHighlight';
import { HeroHighlight, Highlight } from './components/ui/HeroHighlight';
// import ChatBot from './components/ChatBot';

// Featured products data structure based on documentation
const featuredProducts = [
  {
    id: 'plastic-core-tray',
    title: 'Plastik Core Tray & Perlengkapan Pertambangan',
    slug: '/products/mining-core-tray',
    image_path: '/cur/core_tray.webp',
    description:
      'Solusi manajemen inti bor yang presisi, tahan benturan, dan ringan untuk efisiensi lapangan.',
    icon: CubeIcon,
  },
  {
    id: 'precision-injection',
    title: 'Komponen Injeksi Plastik Presisi ',
    slug: '/products/precision-components',
    image_path: '/cur/cnc_mahine.webp',
    description:
      'Memproduksi komponen otomotif, telekomunikasi, dan alat kesehatan dengan akurasi tinggi (hingga ±0.01 mm).',
    icon: CogIcon,
  },
  {
    id: 'manufacturing-services',
    title: 'Jasa Machining, Molding & Reverse Engineering',
    slug: '/services/manufacturing',
    image_path: '/cur/laser_cutter.webp',
    description:
      'Layanan terintegrasi untuk prototipe cepat dan produksi massal dengan teknologi terkini.',
    icon: WrenchScrewdriverIcon,
  },
];

// Services & Capabilities
const services = [
  {
    id: 'molding',
    title: 'Molding Services',
    description:
      'Layanan pembuatan mold presisi dengan teknologi terkini untuk produksi massal berkualitas tinggi',
    images: [
      '/USAHA_DAN_JASA/MOLDING/MOLDING_ASSEMBLING.jpg',
      '/USAHA_DAN_JASA/MOLDING/MOLDING_FINISHING.jpg',
      '/USAHA_DAN_JASA/MOLDING/MOLDING_POLESHING.jpg',
    ],
    features: [
      'Precision Assembling',
      'Professional Finishing',
      'Expert Polishing',
    ],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'machining',
    title: 'CNC Machining',
    description:
      'Proses machining presisi dengan CNC EDM & Milling untuk komponen berkualitas tinggi',
    images: [
      '/USAHA_DAN_JASA/PROSES_MACHINING/PROSES_MACHINING_EDM_CNC.jpg',
      '/USAHA_DAN_JASA/PROSES_MACHINING/PROSES_MACHINING_MILLING_CNC.jpg',
      '/USAHA_DAN_JASA/PROSES_MACHINING/PROSES_MACHINING_MILLING_CNC1.jpg',
      '/USAHA_DAN_JASA/PROSES_MACHINING/PROSES_MACHINING_MILLING_CNC2.jpg',
    ],
    features: [
      'CNC EDM',
      'CNC Milling',
      'High Precision',
      'Complex Geometries',
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'plastic-injection',
    title: 'Plastic Injection',
    description:
      'Produksi komponen plastik dengan mesin injeksi modern hingga 800 ton kapasitas',
    images: [
      '/USAHA_DAN_JASA/PLASTIC_INEJCTION/PLASTIC_INEJCTION_PRODUKSI1.jpg',
      '/USAHA_DAN_JASA/PLASTIC_INEJCTION/PLASTIC_INEJCTION_PRODUKSI2.jpg',
    ],
    features: ['Mass Production', '800+ Ton Capacity', 'Quality Control'],
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    description:
      'Instalasi mesin dan sistem listrik dengan teknisi berpengalaman',
    images: [
      '/USAHA_DAN_JASA/MECHANICAL_ENGINEERING/MECHANICAL_ENGINEERING_INSTALASI_MESIN.jpg',
      '/USAHA_DAN_JASA/MECHANICAL_ENGINEERING/MECHANICAL_ENGINEERING_INSTALASI_LISTRIK.jpg',
    ],
    features: ['Machine Installation', 'Electrical Systems', 'Maintenance'],
    gradient: 'from-orange-600 to-red-600',
  },
];

// Customer logos - 28 customers
const customerLogos = Array.from({ length: 28 }, (_, i) => ({
  id: `customer-${i + 1}`,
  image: `/OUR_CUSTOMER/CUST_${i + 1}.jpg`,
  name: `Customer ${i + 1}`,
}));

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
        {/* Background Pattern */}
        <div className='absolute inset-0 '>
          <MeshGradient
            className='absolute inset-0 w-full h-full'
            colors={['#e0eaff', '#241d9a', '#4145b4', '#4e60d4']}
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
            <PointerHighlight>
              <motion.h1
                className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Mitra Solusi Manufaktur Presisi{' '}
                <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
                  Kualitas Konsisten, Pengiriman Andal
                </span>
              </motion.h1>
            </PointerHighlight>
            <motion.p
              className='text-xl sm:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {' '}
              <Highlight>PT ARCH CONTINENT TECH</Highlight> menyediakan{' '}
              <Highlight>Plastik Core Tray</Highlight> dan{' '}
              <Highlight>Komponen Injeksi Presisi</Highlight> untuk mendukung
              proyek industri Anda dengan akurasi tinggi dan kualitas terjamin
            </motion.p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href='/contact'
                className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-2'
              >
                <span>Minta Penawaran Sekarang</span>
                <ArrowRightIcon className='h-5 w-5' />
              </Link>
              <Link
                href='/products'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105'
              >
                Lihat Produk Lengkap
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

      {/* Services & Capabilities Section */}
      <section className='py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6'>
              <SparklesIcon className='h-5 w-5' />
              <span className='font-semibold'>Layanan Unggulan Kami</span>
            </div>
            <h2 className='text-4xl sm:text-6xl font-bold text-gray-900 mb-4'>
              Usaha & Jasa Profesional
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Solusi manufaktur end-to-end dengan teknologi modern dan tim
              berpengalaman
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className='space-y-24'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className='relative'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      className={`inline-block bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-lg mb-4 font-semibold`}
                    >
                      Service #{index + 1}
                    </div>
                    <h3 className='text-4xl font-bold text-gray-900 mb-4'>
                      {service.title}
                    </h3>
                    <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                      {service.description}
                    </p>
                    <div className='flex flex-wrap gap-3 mb-6'>
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className='bg-white border-2 border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href='/contact'
                      className='inline-flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group'
                    >
                      <span>Konsultasi Sekarang</span>
                      <ArrowRightIcon className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                  </div>

                  {/* Images */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div
                      className={`grid ${
                        service.images.length > 2
                          ? 'grid-cols-2'
                          : 'grid-cols-1'
                      } gap-4`}
                    >
                      {service.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className={`relative overflow-hidden rounded-2xl shadow-2xl group ${
                            service.images.length === 3 && imgIndex === 0
                              ? 'col-span-2'
                              : ''
                          } ${
                            service.images.length === 4 && imgIndex < 2
                              ? 'col-span-1'
                              : ''
                          }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className='aspect-w-16 aspect-h-12 relative h-64'>
                            <Image
                              src={image}
                              alt={`${service.title} - ${imgIndex + 1}`}
                              fill
                              className='object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className='py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute inset-0 opacity-10'>
          <div className="absolute inset-0 bg-[url('/construction-pattern.svg')] bg-repeat"></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6'>
              <CheckCircleIcon className='h-5 w-5' />
              <span className='font-semibold'>Dipercaya Oleh</span>
            </div>
            <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
              Klien & Mitra Kami
            </h2>
            <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
              Dipercaya oleh perusahaan-perusahaan terkemuka di berbagai
              industri
            </p>
          </motion.div>

          {/* Customer Logos Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
            {customerLogos.map((customer, index) => (
              <motion.div
                key={customer.id}
                className='bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-2xl transition-all duration-300 group'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className='relative w-full h-16'>
                  <Image
                    src={customer.image}
                    alt={customer.name}
                    fill
                    className='object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='text-center'>
              <div className='text-5xl font-bold text-white mb-2'>28+</div>
              <div className='text-blue-200'>Klien Aktif</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-white mb-2'>800+</div>
              <div className='text-blue-200'>Ton Kapasitas</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-white mb-2'>±0.01mm</div>
              <div className='text-blue-200'>Presisi</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-white mb-2'>14+</div>
              <div className='text-blue-200'>Mesin Injeksi</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6'>
              <SparklesIcon className='h-5 w-5' />
              <span className='font-semibold'>Produk Unggulan Kami</span>
            </div>
            <h2 className='text-4xl sm:text-6xl font-bold text-gray-900 mb-4'>
              Portfolio Produk Berkualitas Tinggi
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Menyediakan solusi manufaktur presisi untuk berbagai industri —
              dari pertambangan hingga alat kesehatan
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {/* Core Tray PQ - Mining */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100'>
                <Image
                  src='/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.png'
                  alt='Core Tray PQ'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Pertambangan
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  Core Tray PQ
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Plastik core tray presisi untuk inti bor diameter PQ dengan
                  material HDPE UV-stabilized
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    3 Rows
                  </span>
                  <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    UV Resistant
                  </span>
                  <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    1085mm
                  </span>
                </div>
                <Link
                  href='/products/core-tray-pq'
                  className='inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Core Tray HQ - Mining */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100'>
                <Image
                  src='/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.png'
                  alt='Core Tray HQ'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Pertambangan
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors'>
                  Core Tray HQ
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Core tray presisi untuk inti bor diameter HQ dengan sistem
                  drainase terintegrasi
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    4 Rows
                  </span>
                  <span className='bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Drainage System
                  </span>
                  <span className='bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    HQ 63.5mm
                  </span>
                </div>
                <Link
                  href='/products/core-tray-hq'
                  className='inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Core Tray NQ - Mining */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100'>
                <Image
                  src='/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_NQ.png'
                  alt='Core Tray NQ'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Pertambangan
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors'>
                  Core Tray NQ
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Core tray kapasitas tertinggi untuk inti bor diameter NQ
                  dengan profil ramping
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    5 Rows
                  </span>
                  <span className='bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Slim Profile
                  </span>
                  <span className='bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    NQ 47.6mm
                  </span>
                </div>
                <Link
                  href='/products/core-tray-nq'
                  className='inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Handle Grip Assist - Automotive */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100'>
                <Image
                  src='/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_PRODUCT.png'
                  alt='Handle Grip Assist'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Otomotif
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors'>
                  Handle Grip Assist
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Handle grip ergonomis dual-material dengan tekstur anti-slip
                  untuk kenyamanan maksimal
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    TPE + Nylon
                  </span>
                  <span className='bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Anti-Slip
                  </span>
                  <span className='bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Ergonomic
                  </span>
                </div>
                <Link
                  href='/products/handle-grip-assist'
                  className='inline-flex items-center text-purple-600 font-bold hover:text-purple-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Knob Shift Level - Automotive */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100'>
                <Image
                  src='/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_PRODUCT.png'
                  alt='Knob Shift Level'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Otomotif
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors'>
                  Knob Shift Level Assembly
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Knob transmisi premium dengan finishing metallic dan presisi
                  tinggi untuk AT/CVT
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    PC/ABS + Zinc
                  </span>
                  <span className='bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Metallic Finish
                  </span>
                  <span className='bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Premium
                  </span>
                </div>
                <Link
                  href='/products/knob-shift-level-assembly'
                  className='inline-flex items-center text-pink-600 font-bold hover:text-pink-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* ODP - Telekomunikasi */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100'>
                <Image
                  src='/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_PRODUCT.png'
                  alt='ODP Optical Distribution Point'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Telekomunikasi
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors'>
                  ODP Terminal Box
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Terminal distribusi optik tahan cuaca untuk jaringan fiber
                  optic outdoor FTTH
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    IP67
                  </span>
                  <span className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    24 Port
                  </span>
                  <span className='bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    UV Resistant
                  </span>
                </div>
                <Link
                  href='/products/odp-optical-distribution-point'
                  className='inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Cassette Diagnostic - Medical */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100'>
                <Image
                  src='/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_SINGLE.png'
                  alt='Cassette Diagnostic'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Alat Kesehatan
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors'>
                  Cassette Diagnostik
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Cassette diagnostik multi-parameter medical-grade untuk
                  testing laboratorium presisi
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    ISO 13485
                  </span>
                  <span className='bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Medical Grade
                  </span>
                  <span className='bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    1P-7P
                  </span>
                </div>
                <Link
                  href='/products/cassette-diagnostik-multi-parameter'
                  className='inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Baby Scale - Medical */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-red-100 to-rose-100'>
                <Image
                  src='/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE.png'
                  alt='Baby Scale Components'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Alat Kesehatan
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors'>
                  Baby Scale Components
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Komponen lengkap timbangan bayi medical-grade dengan akurasi
                  ±10 gram
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    CE Certified
                  </span>
                  <span className='bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    ±10g Accuracy
                  </span>
                  <span className='bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Child-Safe
                  </span>
                </div>
                <Link
                  href='/products/baby-scale-components'
                  className='inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>

            {/* Motor Accessory Kit - Automotive */}
            <motion.div
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className='relative h-64 overflow-hidden bg-gradient-to-br from-violet-100 to-purple-100'>
                <Image
                  src='/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_1.png'
                  alt='Motorcycle Accessory Kit'
                  fill
                  className='object-contain p-6 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Otomotif
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors'>
                  Motorcycle Accessory Kit
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  Set aksesori lengkap untuk motor dengan custom color matching
                  dan finishing premium
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  <span className='bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Custom Color
                  </span>
                  <span className='bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    OEM Quality
                  </span>
                  <span className='bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold'>
                    Bolt-On
                  </span>
                </div>
                <Link
                  href='/products/motorcycle-accessory-kit'
                  className='inline-flex items-center text-violet-600 font-bold hover:text-violet-700 transition-colors group/link'
                >
                  <span>Lihat Detail</span>
                  <ArrowRightIcon className='h-4 w-4 ml-2 group-hover/link:translate-x-2 transition-transform' />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href='/products'
              className='inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl'
            >
              <span>Lihat Semua Produk</span>
              <ArrowRightIcon className='h-5 w-5 ml-2' />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Credibility/Value Proposition */}
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
              Keunggulan Kompetitif Kami
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            <motion.div
              className='text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className='w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CubeIcon className='h-10 w-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Infrastruktur Skala Besar
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Kapasitas produksi massal dengan dukungan 14 unit mesin injeksi
                hingga 800 ton untuk memenuhi kebutuhan industri besar
              </p>
              <div className='text-3xl font-bold text-blue-600'>800+ Ton</div>
            </motion.div>

            <motion.div
              className='text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className='w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CogIcon className='h-10 w-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Presisi Teknik Tinggi
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Jaminan akurasi reposisi hingga ±0.01 mm untuk komponen dengan
                toleransi ketat dan spesifikasi teknis tinggi
              </p>
              <div className='text-3xl font-bold text-green-600'>±0.01 mm</div>
            </motion.div>

            <motion.div
              className='text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className='w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                <WrenchScrewdriverIcon className='h-10 w-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Layanan Terintegrasi
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Menawarkan Reverse Engineering dan Design Product untuk solusi
                end-to-end dari konsep hingga produk jadi
              </p>
              <div className='text-lg font-semibold text-orange-600'>
                End-to-End Solution
              </div>
            </motion.div>
          </div>
        </div>
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
