'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  DocumentTextIcon,
  BuildingOffice2Icon,
  ScaleIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  MapPinIcon,
  IdentificationIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Legal() {
  const legalDocuments = [
    {
      icon: DocumentTextIcon,
      title: 'Akta Notaris',
      details: [
        'Nomor: 25',
        'Tanggal: 03 Juli 2025',
        'Tempat: Cirebon',
        'Status: Aktif',
      ],
    },
    {
      icon: IdentificationIcon,
      title: 'NPWP Perusahaan',
      details: [
        'Status: Terdaftar',
        'Klasifikasi: Badan Usaha',
        'Kewajiban Pajak: Aktif',
      ],
    },
    {
      icon: ScaleIcon,
      title: 'Izin Usaha',
      details: [
        'NIB (Nomor Induk Berusaha)',
        'OSS (Online Single Submission)',
        'Status: Berlaku',
      ],
    },
    {
      icon: BanknotesIcon,
      title: 'Modal Disetor',
      details: [
        'Status: Lunas',
        'Verifikasi: Lengkap',
        'Dokumentasi: Tersedia',
      ],
    },
  ];

  const businessFields = [
    {
      kbli: '46901',
      title: 'Perdagangan Besar Berbagai Macam Barang',
      description:
        'Kegiatan perdagangan besar yang mencakup berbagai jenis barang konstruksi dan teknis',
    },
    {
      kbli: '46630',
      title: 'Perdagangan Besar Bahan Konstruksi',
      description:
        'Spesialisasi dalam distribusi bahan konstruksi untuk berbagai kebutuhan pembangunan',
    },
    {
      kbli: '46190',
      title: 'Perdagangan Besar Atas Dasar Balas Jasa (Fee) atau Kontrak',
      description:
        'Jasa agen dan komisioner untuk produk-produk teknis dan konstruksi',
    },
    {
      kbli: '68109',
      title: 'Real Estat Lainnya',
      description:
        'Jasa konsultasi dan layanan terkait real estat dan properti',
    },
  ];

  const companyProfile = {
    fullName: 'PT ARCH CONTINENT TECH',
    establishmentDate: '03 Juli 2025',
    notaryAct: 'No. 25',
    establishmentPlace: 'Cirebon',
    address:
      'JL WR SUPRATMAN GG SUKUN, RT 003/RW 006, Cempaka Putih, Ciputat Timur, Tangerang Selatan, Banten 15141',
    phone: '+62 895-1402-4380',
    email: 'ptarchcontinenttech@gmail.com',
  };

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Sistem Manajemen Mutu',
      status: 'Dalam Proses',
    },
    {
      title: 'SNI Compliance',
      description: 'Standar Nasional Indonesia',
      status: 'Aktif',
    },
    {
      title: 'CSMS Certification',
      description: 'Contractor Safety Management System',
      status: 'Dalam Proses',
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
              Legalitas Perusahaan
            </motion.h1>
            <motion.p
              className='text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Informasi lengkap mengenai status hukum dan legalitas PT ARCH
              CONTINENT TECH
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Legal Status */}
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
              Status Legal Perusahaan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              PT ARCH CONTINENT TECH adalah perusahaan yang sah dan terdaftar
              secara resmi
            </p>
          </motion.div>

          {/* Company Profile Card */}
          <motion.div
            className='max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>
                  Identitas Perusahaan
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <BuildingOffice2Icon className='h-6 w-6 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-semibold'>Nama Perusahaan</p>
                      <p className='text-blue-100'>{companyProfile.fullName}</p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <DocumentTextIcon className='h-6 w-6 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-semibold'>Akta Notaris</p>
                      <p className='text-blue-100'>
                        {companyProfile.notaryAct}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <CalendarDaysIcon className='h-6 w-6 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-semibold'>Tanggal Pendirian</p>
                      <p className='text-blue-100'>
                        {companyProfile.establishmentDate}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <MapPinIcon className='h-6 w-6 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-semibold'>Tempat Pendirian</p>
                      <p className='text-blue-100'>
                        {companyProfile.establishmentPlace}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Informasi Kontak</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='font-semibold mb-2'>Alamat Kantor</p>
                    <p className='text-blue-100 leading-relaxed'>
                      {companyProfile.address}
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold'>Telepon</p>
                    <p className='text-blue-100'>{companyProfile.phone}</p>
                  </div>
                  <div>
                    <p className='font-semibold'>Email</p>
                    <p className='text-blue-100'>{companyProfile.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal Documents */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={doc.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <doc.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {doc.title}
                </h3>
                <div className='space-y-1'>
                  {doc.details.map((detail, idx) => (
                    <p key={idx} className='text-gray-600 text-sm'>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Fields */}
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
              Bidang Usaha
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Berdasarkan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 2020
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {businessFields.map((field, index) => (
              <motion.div
                key={field.kbli}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-gray-900 flex-1 pr-4'>
                    {field.title}
                  </h3>
                  <span className='text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full flex-shrink-0'>
                    KBLI {field.kbli}
                  </span>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  {field.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Sertifikasi & Standar
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Komitmen kami terhadap kualitas dan standar internasional
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <ShieldCheckIcon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {cert.title}
                </h3>
                <p className='text-gray-600 mb-3'>{cert.description}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Aktif'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
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
              Kepatuhan Hukum
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Komitmen penuh terhadap peraturan dan undang-undang yang berlaku
            </p>
          </motion.div>

          <div className='max-w-4xl mx-auto'>
            <motion.div
              className='bg-white p-8 rounded-2xl shadow-lg'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                    Peraturan yang Dipatuhi
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700'>
                        UU No. 40 Tahun 2007 tentang Perseroan Terbatas
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700'>
                        UU No. 8 Tahun 1997 tentang Dokumen Perusahaan
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700'>
                        UU No. 36 Tahun 2008 tentang Pajak Penghasilan
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700'>
                        Peraturan Menteri Perdagangan terkait
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      <span className='text-gray-700'>
                        Standar Keselamatan dan Kesehatan Kerja
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                    Komitmen Perusahaan
                  </h3>
                  <div className='space-y-4'>
                    <p className='text-gray-600 leading-relaxed'>
                      PT ARCH CONTINENT TECH berkomitmen penuh untuk mematuhi
                      seluruh peraturan perundang-undangan yang berlaku di
                      Indonesia.
                    </p>
                    <p className='text-gray-600 leading-relaxed'>
                      Kami secara konsisten memperbarui dokumen legal dan
                      memastikan kepatuhan terhadap regulasi terbaru dalam
                      industri konstruksi dan perdagangan.
                    </p>
                    <p className='text-gray-600 leading-relaxed'>
                      Transparansi dan akuntabilitas adalah nilai utama dalam
                      setiap aspek operasional perusahaan.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
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
              Butuh Informasi Legal?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto leading-relaxed'>
              Untuk pertanyaan terkait legalitas perusahaan atau dokumen resmi,
              silakan hubungi tim kami
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='mailto:ptarchcontinenttech@gmail.com'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl'
              >
                Email Resmi
              </a>
              <a
                href='tel:+6289514024380'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105'
              >
                Telepon Langsung
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
