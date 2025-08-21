'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  BuildingStorefrontIcon,
  TruckIcon,
  UserGroupIcon,
  HomeIcon,
  CogIcon,
  ChartBarIcon,
  PhoneIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Services() {
  const mainServices = [
    {
      icon: BuildingStorefrontIcon,
      title: 'Perdagangan Besar Berbagai Macam Barang',
      description:
        'Menyediakan berbagai macam produk konstruksi dan teknis dalam skala besar untuk memenuhi kebutuhan proyek-proyek besar.',
      features: [
        'Distribusi skala nasional',
        'Stok produk yang lengkap',
        'Harga kompetitif untuk pembelian grosir',
        'Sistem logistik terintegrasi',
      ],
      kbli: 'KBLI 46901',
    },
    {
      icon: TruckIcon,
      title: 'Distribusi Bahan Konstruksi',
      description:
        'Spesialisasi dalam distribusi bahan konstruksi berkualitas tinggi untuk mendukung pembangunan infrastruktur.',
      features: [
        'Material konstruksi bersertifikat',
        'Pengiriman tepat waktu',
        'Quality control ketat',
        'Dukungan teknis',
      ],
      kbli: 'KBLI 46630',
    },
    {
      icon: UserGroupIcon,
      title: 'Jasa Agen/Komisioner untuk Produk Teknis',
      description:
        'Melayani sebagai agen dan komisioner untuk berbagai produk teknis dari supplier terpercaya.',
      features: [
        'Representasi produk internasional',
        'Negosiasi harga terbaik',
        'Manajemen supply chain',
        'After-sales support',
      ],
      kbli: 'KBLI 46190',
    },
    {
      icon: HomeIcon,
      title: 'Konsultasi Real Estat',
      description:
        'Memberikan layanan konsultasi profesional untuk investasi dan pengembangan properti.',
      features: [
        'Analisis investasi properti',
        'Konsultasi pengembangan',
        'Market research',
        'Legal assistance',
      ],
      kbli: 'KBLI 68109',
    },
  ];

  const additionalServices = [
    {
      icon: CogIcon,
      title: 'Konsultasi Teknis',
      description:
        'Bantuan teknis untuk pemilihan produk dan solusi konstruksi yang tepat',
    },
    {
      icon: ChartBarIcon,
      title: 'Analisis Kebutuhan Proyek',
      description:
        'Evaluasi komprehensif kebutuhan material untuk proyek konstruksi',
    },
    {
      icon: PhoneIcon,
      title: 'Support 24/7',
      description: 'Dukungan pelanggan yang siap membantu kapan saja',
    },
    {
      icon: DocumentTextIcon,
      title: 'Dokumentasi Lengkap',
      description: 'Penyediaan sertifikat dan dokumentasi produk yang lengkap',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Konsultasi Awal',
      description: 'Diskusi kebutuhan dan spesifikasi proyek Anda',
    },
    {
      step: '02',
      title: 'Analisis & Penawaran',
      description: 'Analisis kebutuhan dan penyusunan penawaran terbaik',
    },
    {
      step: '03',
      title: 'Pengadaan',
      description: 'Procurement produk sesuai spesifikasi dan timeline',
    },
    {
      step: '04',
      title: 'Pengiriman',
      description: 'Pengiriman dengan packaging aman dan tepat waktu',
    },
    {
      step: '05',
      title: 'Support',
      description: 'Dukungan purna jual dan maintenance',
    },
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
              Layanan Kami
            </motion.h1>
            <motion.p
              className='text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solusi komprehensif untuk kebutuhan konstruksi dan teknis Anda
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
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
              Layanan Utama
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Berdasarkan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 2020
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='flex items-start space-x-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <service.icon className='h-8 w-8 text-white' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='text-xl font-bold text-gray-900'>
                        {service.title}
                      </h3>
                      <span className='text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full'>
                        {service.kbli}
                      </span>
                    </div>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                      {service.description}
                    </p>
                    <ul className='space-y-2'>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center space-x-2'>
                          <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                          <span className='text-gray-700 text-sm'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Layanan Tambahan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Dukungan komprehensif untuk memastikan kesuksesan proyek Anda
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <service.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Proses Kerja Kami
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Langkah-langkah sistematis untuk memastikan kepuasan pelanggan
            </p>
          </motion.div>

          <div className='relative'>
            {/* Process Line */}
            <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-y-1/2 z-0'></div>

            <div className='grid md:grid-cols-5 gap-8 relative z-10'>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className='text-center'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
                    <span className='text-white font-bold text-lg'>
                      {step.step}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                Mengapa Memilih Layanan Kami?
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Pengalaman Terpercaya
                    </h3>
                    <p className='text-gray-600'>
                      Tim berpengalaman dengan track record yang solid di
                      industri konstruksi
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Legalitas Lengkap
                    </h3>
                    <p className='text-gray-600'>
                      Perusahaan resmi dengan akta notaris dan izin usaha yang
                      lengkap
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Jaringan Luas
                    </h3>
                    <p className='text-gray-600'>
                      Kemitraan dengan supplier terpercaya di seluruh Indonesia
                      dan luar negeri
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Komitmen Kualitas
                    </h3>
                    <p className='text-gray-600'>
                      Standar kualitas tinggi dalam setiap aspek layanan yang
                      kami berikan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden'>
                <div className='absolute inset-0 bg-black opacity-20'></div>
                <div className='relative z-10 p-8 h-full flex flex-col justify-center text-white'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Siap Berkolaborasi?
                  </h3>
                  <p className='text-lg leading-relaxed mb-6'>
                    Hubungi kami untuk konsultasi gratis dan diskusikan
                    kebutuhan proyek Anda
                  </p>
                  <div className='space-y-3'>
                    <p className='flex items-center space-x-2'>
                      <PhoneIcon className='h-5 w-5' />
                      <span>+62 895-1402-4380</span>
                    </p>
                    <p className='flex items-center space-x-2'>
                      <DocumentTextIcon className='h-5 w-5' />
                      <span>ptarchcontinenttech@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Butuh Layanan Profesional?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto leading-relaxed'>
              Tim ahli kami siap membantu mewujudkan proyek konstruksi Anda
              dengan solusi terbaik
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl'
              >
                Konsultasi Gratis
              </Link>
              <a
                href={`https://wa.me/6289514024380?text=Halo,%20saya%20tertarik%20dengan%20layanan%20PT%20ARCH%20CONTINENT%20TECH`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl'
              >
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
