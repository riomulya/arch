'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  BuildingOffice2Icon,
  DocumentTextIcon,
  CalendarDaysIcon,
  MapPinIcon,
  UserGroupIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function About() {
  const companyInfo = [
    {
      icon: BuildingOffice2Icon,
      title: 'Nama Perusahaan',
      description: 'PT ARCH CONTINENT TECH',
    },
    {
      icon: CalendarDaysIcon,
      title: 'Tahun Berdiri',
      description: '2025',
    },
    {
      icon: MapPinIcon,
      title: 'Lokasi Pendirian',
      description: 'Cirebon, Jawa Barat',
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Pendirian Perusahaan',
      description:
        'PT ARCH CONTINENT TECH resmi didirikan pada tanggal 03 Juli 2025 di Cirebon.',
    },
    {
      year: '2025',
      title: 'Peluncuran Produk Pertama',
      description:
        'Memulai bisnis dengan produk unggulan Plastik Core Tray untuk solusi manajemen kabel.',
    },
    {
      year: '2025',
      title: 'Ekspansi Pasar',
      description:
        'Memperluas jangkauan pasar ke seluruh Indonesia dengan fokus pada kualitas dan pelayanan.',
    },
  ];

  const values = [
    {
      icon: TrophyIcon,
      title: 'Kualitas',
      description:
        'Berkomitmen memberikan produk berkualitas tinggi yang memenuhi standar industri.',
    },
    {
      icon: UserGroupIcon,
      title: 'Kepercayaan',
      description:
        'Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi.',
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Profesionalisme',
      description:
        'Menjalankan bisnis dengan profesional dan berintegritas tinggi.',
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
              Tentang Kami
            </motion.h1>
            <motion.p
              className='text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mengenal lebih dekat PT ARCH CONTINENT TECH dan perjalanan kami
              dalam industri konstruksi
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
                Profil Perusahaan
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                PT ARCH CONTINENT TECH adalah perusahaan yang bergerak di bidang
                perdagangan besar bahan konstruksi, perlengkapan teknis, dan
                jasa real estat. Kami berkomitmen untuk menyediakan produk
                berkualitas tinggi dengan harga yang kompetitif.
              </p>

              {/* Company Info Grid */}
              <div className='grid md:grid-cols-2 gap-6'>
                {companyInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className='flex items-start space-x-3'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <item.icon className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-gray-600'>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
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
                  <h3 className='text-3xl font-bold mb-6'>Alamat Kantor</h3>
                  <div className='space-y-4'>
                    <p className='text-lg'>JL WR SUPRATMAN GG SUKUN</p>
                    <p className='text-lg'>RT 003/RW 006, Cempaka Putih</p>
                    <p className='text-lg'>Ciputat Timur</p>
                    <p className='text-lg'>Tangerang Selatan, Banten 15141</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
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
              Visi & Misi
            </h2>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <motion.div
              className='bg-white p-8 rounded-2xl shadow-lg'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6'>
                <TrophyIcon className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Visi</h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Menjadi perusahaan terdepan dalam penyediaan bahan konstruksi
                dan perlengkapan teknis berkualitas tinggi di Indonesia, dengan
                fokus pada inovasi, kualitas, dan kepuasan pelanggan.
              </p>
            </motion.div>

            <motion.div
              className='bg-white p-8 rounded-2xl shadow-lg'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-6'>
                <UserGroupIcon className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Misi</h3>
              <ul className='text-lg text-gray-600 leading-relaxed space-y-2'>
                <li>
                  • Menyediakan produk berkualitas tinggi dengan harga
                  kompetitif
                </li>
                <li>• Memberikan pelayanan terbaik kepada setiap pelanggan</li>
                <li>
                  • Membangun kemitraan jangka panjang yang saling menguntungkan
                </li>
                <li>
                  • Berkontribusi pada pembangunan infrastruktur Indonesia
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Perjalanan Perusahaan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Melihat kembali milestone penting dalam perjalanan PT ARCH
              CONTINENT TECH
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${index}`}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className='flex-1 px-6'>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div className='text-2xl font-bold text-blue-600 mb-2'>
                        {item.year}
                      </div>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>
                        {item.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className='w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10'></div>

                  <div className='flex-1 px-6'></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Nilai-Nilai Perusahaan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Prinsip-prinsip yang menjadi fondasi dalam setiap kegiatan bisnis
              kami
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <value.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
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
              Legalitas Perusahaan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Informasi resmi mengenai status hukum perusahaan
            </p>
          </motion.div>

          <motion.div
            className='max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-bold mb-4'>Status Legal</h3>
                <div className='space-y-3'>
                  <p>
                    <strong>Nama Perusahaan:</strong> PT ARCH CONTINENT TECH
                  </p>
                  <p>
                    <strong>Tanggal Pendirian:</strong> 03 Juli 2025
                  </p>
                  <p>
                    <strong>Tempat Pendirian:</strong> Cirebon
                  </p>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-4'>Bidang Usaha</h3>
                <div className='space-y-2'>
                  <p>• Perdagangan Besar Bahan Konstruksi</p>
                  <p>• Perdagangan Besar Perlengkapan Teknis</p>
                  <p>• Jasa Real Estat</p>
                  <p>• Jasa Konsultasi Teknis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
