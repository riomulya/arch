'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ShoppingCartIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  InformationCircleIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence } from 'framer-motion';

// Metadata will be handled by layout.js for this page

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Complete product catalog from documentation
  const productCategories = [
    {
      id: 'pertambangan',
      name: 'Pertambangan',
      description: 'Core Tray dan Core Box untuk pengelolaan inti bor',
      icon: '⛏️',
      products: [
        {
          id: 'core-tray-pq',
          name: 'Core Tray PQ',
          category: 'Pertambangan',
          subcategory: 'Plastik Core Tray',
          description:
            'Solusi premium untuk pengelolaan inti bor diameter PQ dengan desain presisi dan material berkualitas tinggi.',
          specifications: {
            'Overall Length': '1085 mm',
            Width: '390 mm',
            Height: '95 mm',
            'Core Capacity': '3 rows',
            Weight: '2.55 kg',
            Material: 'Plastik Presisi HDPE',
            Aplikasi: 'Inti bor diameter PQ (85 mm)',
            Standar: 'International Diamond Core Standards',
          },
          features: [
            'Presisi dimensi tinggi untuk identifikasi inti bor',
            'Material UV-resistant untuk outdoor applications',
            'Desain stackable untuk efisiensi penyimpanan',
            'Kapasitas 3 rows untuk organisasi systematic',
            'Durable construction untuk field conditions',
          ],
          applications: [
            'Eksplorasi geologi',
            'Pertambangan mineral',
            'Konstruksi sipil',
            'Penelitian geoteknik',
          ],
          image:
            'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'core-tray-hq',
          name: 'Core Tray HQ',
          category: 'Pertambangan',
          subcategory: 'Plastik Core Tray',
          description:
            'Core tray presisi untuk inti bor diameter HQ dengan kapasitas optimal dan desain yang efisien.',
          specifications: {
            'Overall Length': '1085 mm',
            Width: '390 mm',
            Height: '75 mm',
            'Core Capacity': '4 rows',
            Weight: '2.3 kg',
            Material: 'Plastik Presisi HDPE',
            Aplikasi: 'Inti bor diameter HQ (63.5 mm)',
            Standar: 'International Diamond Core Standards',
          },
          features: [
            'Kapasitas 4 rows untuk optimal organization',
            'Compact design untuk efficient handling',
            'High-precision molding untuk consistency',
            'Weather-resistant material untuk outdoor use',
            'Color-coded untuk easy identification',
          ],
          applications: [
            'Mineral exploration',
            'Core drilling operations',
            'Geotechnical investigations',
            'Mining sampling',
          ],
          image:
            'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'core-tray-nq',
          name: 'Core Tray NQ',
          category: 'Pertambangan',
          subcategory: 'Plastik Core Tray',
          description:
            'Core tray dengan kapasitas tertinggi untuk inti bor diameter NQ, dirancang untuk maksimalisasi ruang.',
          specifications: {
            'Overall Length': '1085 mm',
            Width: '390 mm',
            Height: '67 mm',
            'Core Capacity': '5 rows',
            Weight: '2.3 kg',
            Material: 'Plastik Presisi HDPE',
            Aplikasi: 'Inti bor diameter NQ (47.6 mm)',
            Standar: 'International Diamond Core Standards',
          },
          features: [
            'Kapasitas tertinggi (5 rows) untuk space optimization',
            'Slim profile untuk compact storage',
            'Reinforced structure untuk durability',
            'Easy-grip handles untuk convenient handling',
            'UV-stabilized untuk outdoor longevity',
          ],
          applications: [
            'High-density core sampling',
            'Space-constrained operations',
            'Extended drilling programs',
            'Core logging facilities',
          ],
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'core-box-galvalum-nq',
          name: 'Core Box Galvalum NQ',
          category: 'Pertambangan',
          subcategory: 'Core Box Metal',
          description:
            'Core box dari material Galvalum untuk durability maksimal dalam kondisi lingkungan yang keras.',
          specifications: {
            'Overall Length': '1000 mm',
            Width: '400 mm',
            Height: '80 mm',
            'Core Capacity': '6 rows',
            Weight: '1.7 kg',
            Material: 'Galvalum (Aluminum-Zinc Coated)',
            Aplikasi: 'Inti bor diameter NQ (47.6 mm)',
            Coating: 'Corrosion-resistant Galvalum',
          },
          features: [
            'Material Galvalum untuk superior corrosion resistance',
            'Kapasitas 6 rows untuk maximum storage',
            'Lightweight yet robust construction',
            'Stackable design untuk space efficiency',
            'Long-term outdoor storage capability',
          ],
          applications: [
            'Long-term core storage',
            'Harsh environment operations',
            'Marine and coastal projects',
            'Archival core storage',
          ],
          image:
            'https://images.unsplash.com/photo-1565391938248-3781e532e0b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
      ],
    },
    {
      id: 'automotif',
      name: 'Otomotif',
      description: 'Komponen interior dan trim untuk kendaraan',
      icon: '🚗',
      products: [
        {
          id: 'cover-steering-column',
          name: 'Cover Steering Column Upper/Lower',
          category: 'Otomotif',
          subcategory: 'Interior Components',
          description:
            'Komponen pelindung kolom kemudi dengan presisi tinggi untuk aplikasi OEM automotive.',
          specifications: {
            Material: 'High-impact ABS Plastic',
            Finish: 'Textured Surface',
            Color: 'Custom Match OEM',
            Tolerance: '±0.1mm',
            Temperature: '-40°C to +85°C',
            Certification: 'ISO/TS 16949',
            Application: 'Steering System Protection',
          },
          features: [
            'Precision-molded untuk perfect fit',
            'High-impact resistance untuk durability',
            'UV-stabilized untuk color retention',
            'OEM-quality finish untuk seamless integration',
            'Noise reduction properties',
          ],
          applications: [
            'Passenger vehicles',
            'Commercial vehicles',
            'Heavy-duty trucks',
            'Specialty vehicles',
          ],
          image:
            'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'trim-pillar',
          name: 'Trim Pillar',
          category: 'Otomotif',
          subcategory: 'Interior Trim',
          description:
            'Panel pilar interior dengan desain ergonomis dan material berkualitas tinggi.',
          specifications: {
            Material: 'Polypropylene Composite',
            Finish: 'Soft-touch Texture',
            Mounting: 'Clip-in System',
            Tolerance: '±0.15mm',
            Weight: 'Optimized Design',
            Certification: 'ISO 14001',
            Application: 'Interior Aesthetic',
          },
          features: [
            'Aesthetic design untuk interior enhancement',
            'Easy installation dengan clip system',
            'Durable construction untuk long life',
            'Color-matched untuk vehicle interior',
            'Acoustic dampening properties',
          ],
          applications: [
            'A-pillar trim',
            'B-pillar trim',
            'C-pillar applications',
            'Interior styling',
          ],
          image:
            'https://images.unsplash.com/photo-1549399835-9bb9727460f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'panel-console-epb',
          name: 'Panel Console RR Upper EPB',
          category: 'Otomotif',
          subcategory: 'Console Components',
          description:
            'Panel konsol belakang untuk electronic parking brake dengan integrasi kontrol yang presisi.',
          specifications: {
            Material: 'Reinforced PC/ABS',
            Function: 'EPB Control Integration',
            Buttons: 'Integrated Switches',
            Illumination: 'LED Backlighting',
            Connectivity: 'Wiring Harness Ready',
            Certification: 'ECE R10',
            Application: 'Parking Brake Control',
          },
          features: [
            'Integrated electronic controls',
            'LED illumination untuk visibility',
            'Ergonomic button placement',
            'Durable switch mechanisms',
            'Seamless OEM integration',
          ],
          applications: [
            'Electronic parking brakes',
            'Center console controls',
            'Multi-function panels',
            'Driver interface systems',
          ],
          image:
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
      ],
    },
    {
      id: 'telekomunikasi',
      name: 'Telekomunikasi',
      description: 'Komponen untuk infrastruktur jaringan telekomunikasi',
      icon: '📡',
      products: [
        {
          id: 'odp-terminal',
          name: 'ODP (Optical Distribution Point)',
          category: 'Telekomunikasi',
          subcategory: 'Fiber Optic Equipment',
          description:
            'Terminal distribusi optik yang tahan cuaca untuk jaringan fiber optic outdoor.',
          specifications: {
            Material: 'UV-resistant Polycarbonate',
            'IP Rating': 'IP67',
            Temperature: '-40°C to +85°C',
            Ports: 'Up to 24 fiber connections',
            Mounting: 'Pole/Wall Mountable',
            Standard: 'ITU-T G.652 compliant',
            Application: 'Fiber Distribution',
          },
          features: [
            'Weatherproof design untuk outdoor deployment',
            'High-density port configuration',
            'Easy splice access untuk maintenance',
            'Secure locking mechanisms',
            'Cable management system',
          ],
          applications: [
            'FTTH networks',
            'Fiber to the building',
            'Rural broadband deployment',
            'Urban fiber networks',
          ],
          image:
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'splice-tray',
          name: 'Splice Tray & Dudukan Tray',
          category: 'Telekomunikasi',
          subcategory: 'Fiber Management',
          description:
            'Sistem splice tray untuk manajemen koneksi fiber optic yang terorganisir.',
          specifications: {
            Material: 'Flame-retardant ABS',
            Capacity: '12-24 fiber splices',
            'Tray Type': 'Sliding/Removable',
            Protection: 'Splice holder clips',
            Compatibility: 'Standard fusion splices',
            Standard: 'IEC 60793',
            Application: 'Fiber Splice Organization',
          },
          features: [
            'Organized fiber management',
            'Secure splice protection',
            'Modular tray system',
            'Clear identification system',
            'Easy access untuk splicing',
          ],
          applications: [
            'Fiber optic splicing',
            'Network termination points',
            'Distribution frames',
            'Maintenance operations',
          ],
          image:
            'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
      ],
    },
    {
      id: 'medical',
      name: 'Alat Kesehatan',
      description: 'Komponen medis dengan standar kualitas internasional',
      icon: '🏥',
      products: [
        {
          id: 'cassette-diagnostic',
          name: 'Cassette Diagnostik (Multi-Parameter)',
          category: 'Medical Devices',
          subcategory: 'Diagnostic Components',
          description:
            'Cassette diagnostik untuk berbagai parameter testing dengan presisi tinggi.',
          specifications: {
            Material: 'Medical-grade Polystyrene',
            Variants: '1P, 2P, 3P, 5P, 6P, 7P',
            Configuration: 'Single/Two Hole options',
            Compliance: 'ISO 13485',
            Sterilization: 'EO compatible',
            Quality: 'Medical grade certification',
            Application: 'In Vitro Diagnostics',
          },
          features: [
            'Multi-parameter detection capability',
            'Precision molding untuk consistency',
            'Medical-grade material safety',
            'Various hole configurations',
            'Quality controlled manufacturing',
          ],
          applications: [
            'Point-of-care testing',
            'Laboratory diagnostics',
            'Clinical testing',
            'Rapid diagnostic tests',
          ],
          image:
            'https://images.unsplash.com/photo-1534531187661-9410395f58d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'baby-scale',
          name: 'Baby Scale Components',
          category: 'Medical Devices',
          subcategory: 'Medical Equipment',
          description:
            'Komponen lengkap untuk timbangan bayi dengan akurasi tinggi dan desain yang aman.',
          specifications: {
            Components: 'Baki, Top Cover, Back Cover, Battery Cover, LCD Cover',
            Material: 'Medical-grade ABS',
            Accuracy: '±10 grams',
            Capacity: 'Up to 20kg',
            Safety: 'Rounded edges, non-toxic',
            Certification: 'CE, ISO 13485',
            Application: 'Pediatric Weighing',
          },
          features: [
            'Complete component set',
            'Child-safe design',
            'High accuracy weighing',
            'Durable construction',
            'Easy assembly design',
          ],
          applications: [
            'Hospital nurseries',
            'Pediatric clinics',
            'Home healthcare',
            'Mobile medical units',
          ],
          image:
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 'infantometer',
          name: 'Infantometer / Length Board',
          category: 'Medical Devices',
          subcategory: 'Measurement Devices',
          description:
            'Papan pengukur panjang bayi dengan akurasi tinggi untuk monitoring pertumbuhan.',
          specifications: {
            Material: 'Medical-grade Components',
            Measurement: '0-100 cm range',
            Accuracy: '±1mm',
            Components: 'Length Board, Manual Slider, Locking Slider',
            Safety: 'Smooth edges, non-toxic finish',
            Standard: 'WHO Growth Standards',
            Application: 'Infant Measurement',
          },
          features: [
            'High precision measurement',
            'Smooth sliding mechanism',
            'Secure locking system',
            'Durable construction',
            'Easy-read measurement scale',
          ],
          applications: [
            'Growth monitoring',
            'Pediatric assessments',
            'Public health programs',
            'Research studies',
          ],
          image:
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Kualitas Terjamin',
      description:
        'Standar kualitas internasional dengan sertifikasi ISO 9001, ISO 13485, dan ISO/TS 16949',
    },
    {
      icon: TruckIcon,
      title: 'Kemampuan Produksi',
      description:
        'Fasilitas manufactur lengkap dengan 14 mesin injeksi (75-800 ton) dan CNC precision',
    },
    {
      icon: CheckCircleIcon,
      title: 'Teknologi Presisi',
      description:
        'Mesin CNC kelas dunia (Makino, Kasuga) dengan akurasi ±0.01mm untuk toleransi ketat',
    },
  ];

  // Get all products or filtered by category
  const getAllProducts = () => {
    if (selectedCategory === 'all') {
      return productCategories.flatMap((cat) => cat.products);
    }
    const category = productCategories.find(
      (cat) => cat.id === selectedCategory
    );
    return category ? category.products : [];
  };

  const handleRequestQuote = (product) => {
    const specsText = Object.entries(product.specifications)
      .slice(0, 4)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    const message = `Halo, saya tertarik dengan produk berikut:

Produk: ${product.name}
Kategori: ${product.category}
Subkategori: ${product.subcategory}

Spesifikasi Utama:
${specsText}

Mohon informasi lebih lanjut mengenai:
- Ketersediaan produk
- Minimum order quantity
- Lead time production
- Spesifikasi teknis lengkap

Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const ProductDetailModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className='fixed inset-0 z-50 overflow-y-auto'>
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity'
          onClick={onClose}
        />

        <div className='relative min-h-screen flex items-center justify-center p-4'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden'
          >
            {/* Header */}
            <div className='relative h-64 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover opacity-30 mix-blend-overlay'
              />

              <button
                onClick={onClose}
                className='absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors'
              >
                <XMarkIcon className='h-6 w-6' />
              </button>

              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-start gap-3'>
                  <span className='px-3 py-1 bg-white/90 text-blue-600 text-sm font-semibold rounded-full'>
                    {product.category}
                  </span>
                  <span className='px-3 py-1 bg-blue-500/90 text-white text-sm font-semibold rounded-full'>
                    {product.subcategory}
                  </span>
                </div>
                <h2 className='text-3xl font-bold text-white mt-3'>
                  {product.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-16rem)]'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {/* Main Info */}
                <div className='lg:col-span-2 space-y-6'>
                  {/* Description */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                      <InformationCircleIcon className='h-5 w-5 text-blue-600' />
                      Deskripsi Produk
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                      <CheckBadgeIcon className='h-5 w-5 text-blue-600' />
                      Fitur Unggulan
                    </h3>
                    <div className='grid sm:grid-cols-2 gap-3'>
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className='flex items-start gap-3 p-3 bg-green-50 rounded-lg'
                        >
                          <CheckCircleIcon className='h-5 w-5 text-green-600 mt-0.5 flex-shrink-0' />
                          <span className='text-sm text-gray-700'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                      <RocketLaunchIcon className='h-5 w-5 text-blue-600' />
                      Aplikasi Penggunaan
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {product.applications.map((app, index) => (
                        <span
                          key={index}
                          className='px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200'
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                      <CogIcon className='h-5 w-5 text-blue-600' />
                      Spesifikasi Teknis
                    </h3>
                    <div className='bg-gray-50 rounded-xl p-4 space-y-3'>
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className='border-b border-gray-200 pb-2 last:border-0'
                          >
                            <div className='flex justify-between items-start'>
                              <span className='text-sm font-medium text-gray-600'>
                                {key}
                              </span>
                              <span className='text-sm font-semibold text-gray-900 text-right ml-2'>
                                {value}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Quality Info */}
                  <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Standar Kualitas
                    </h4>
                    <ul className='space-y-1 text-sm text-gray-600'>
                      <li className='flex items-center gap-2'>
                        <CheckCircleIcon className='h-4 w-4 text-blue-600' />
                        ISO 9001 Certified
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircleIcon className='h-4 w-4 text-blue-600' />
                        Quality Control Checked
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircleIcon className='h-4 w-4 text-blue-600' />
                        International Standards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className='border-t bg-gray-50 px-6 py-4'>
              <div className='flex flex-col sm:flex-row gap-3 justify-between items-center'>
                <div className='flex items-center gap-4 text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <ShieldCheckIcon className='h-4 w-4 text-green-600' />
                    <span>Garansi Kualitas</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <TruckIcon className='h-4 w-4 text-blue-600' />
                    <span>Pengiriman Aman</span>
                  </div>
                </div>
                <div className='flex gap-3 w-full sm:w-auto'>
                  <button
                    onClick={() => {
                      handleRequestQuote(product);
                      onClose();
                    }}
                    className='flex-1 sm:flex-none btn-primary px-6 py-2'
                  >
                    <CurrencyDollarIcon className='h-5 w-5 mr-2' />
                    Request Penawaran
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb */}
      <section className='pt-20 pb-8 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='flex items-center space-x-4'>
              <li>
                <Link
                  href='/'
                  className='text-gray-500 hover:text-blue-600 transition-colors'
                >
                  Beranda
                </Link>
              </li>
              <li>
                <span className='text-gray-400'>/</span>
              </li>
              <li>
                <span className='text-blue-600 font-medium'>Produk</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className='py-16 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Katalog Produk{' '}
              <span className='text-blue-600'>PT Arch Continent Tech</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Solusi manufaktur presisi untuk berbagai industri dengan standar
              kualitas internasional dan teknologi CNC modern.
            </p>

            {/* Company Stats */}
            <div className='grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>14+</div>
                <div className='text-gray-600'>Mesin Injeksi</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>4</div>
                <div className='text-gray-600'>Sektor Industri</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  ±0.01
                </div>
                <div className='text-gray-600'>mm Akurasi CNC</div>
              </div>
              <div className='bg-white rounded-xl p-6 shadow-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>ISO</div>
                <div className='text-gray-600'>Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 bg-white border-b'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Produk
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {getAllProducts().map((product, index) => (
              <motion.div
                key={product.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Product Header with Image */}
                <div className='relative'>
                  <div className='h-48 overflow-hidden bg-gray-100 relative group'>
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category} - ${product.subcategory}`}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      priority={index < 6}
                      placeholder='blur'
                      blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                      <div className='absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                        <p className='text-white text-sm font-medium drop-shadow-lg'>
                          Lihat Detail Produk
                        </p>
                        <p className='text-white/80 text-xs drop-shadow'>
                          Klik untuk spesifikasi lengkap
                        </p>
                      </div>
                    </div>

                    {/* Loading skeleton overlay */}
                    <div className='absolute inset-0 bg-gray-200 animate-pulse opacity-0 pointer-events-none'></div>
                  </div>

                  {/* Category Badge */}
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg'>
                      {product.subcategory}
                    </span>
                  </div>

                  {/* Company Watermark */}
                  <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg'>
                      <Image
                        src='/logo_transparent.png'
                        alt='ACT'
                        width={100}
                        height={100}
                        className='p-2'
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {product.name}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                      Spesifikasi Utama:
                    </h4>
                    <div className='space-y-1'>
                      {Object.entries(product.specifications)
                        .slice(0, 3)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className='flex justify-between text-sm'
                          >
                            <span className='text-gray-500'>{key}:</span>
                            <span className='text-gray-900 font-medium'>
                              {value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                      Aplikasi:
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {product.applications.slice(0, 2).map((app, i) => (
                        <span
                          key={i}
                          className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'
                        >
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 2 && (
                        <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                          +{product.applications.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3 mt-6'>
                    <button
                      onClick={() => handleViewDetails(product)}
                      className='flex-1 btn-outline text-sm py-2.5 group hover:shadow-md transition-all duration-300'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <InformationCircleIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                        Lihat Detail
                      </span>
                    </button>
                    <button
                      onClick={() => handleRequestQuote(product)}
                      className='flex-1 btn-primary text-sm py-2.5 group hover:shadow-lg transition-all duration-300'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <CurrencyDollarIcon className='h-4 w-4 group-hover:scale-110 transition-transform' />
                        Request Penawaran
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Kapabilitas Manufaktur Presisi
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Fasilitas produksi lengkap dengan teknologi terkini untuk memenuhi
              standar kualitas tertinggi
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Mesin & Peralatan
              </h3>
              <div className='space-y-4'>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    CNC Milling
                  </h4>
                  <p className='text-gray-600'>
                    Makino, Feeler, Campro, Kasuga dengan akurasi ±0.01mm
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Plastic Injection
                  </h4>
                  <p className='text-gray-600'>
                    14 unit mesin 75-800 ton (Cai Feng, Hwamda, Beston)
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    EDM Processing
                  </h4>
                  <p className='text-gray-600'>
                    ZNC-SKM dan CNC Charmiles SE-1 untuk mold kompleks
                  </p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    Support Equipment
                  </h4>
                  <p className='text-gray-600'>
                    Surface Grinding, Radial Drill, Band Saw
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Lokasi Fasilitas
              </h3>
              <div className='space-y-4'>
                <div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    🏭 Plant 1 - Citeureup, Bogor
                  </h4>
                  <p className='text-gray-600 mb-3'>
                    Pusat Tooling dan Injeksi Volume Tinggi
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• Mesin CNC berkapasitas besar</li>
                    <li>• Mesin injeksi hingga 800 ton</li>
                    <li>• Produksi mold presisi</li>
                    <li>• Komponen otomotif besar</li>
                  </ul>
                </div>
                <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
                  <h4 className='font-semibold text-gray-900 mb-2'>
                    🏭 Plant 2 - Cibinong, Bogor
                  </h4>
                  <p className='text-gray-600 mb-3'>
                    Pusat Precision Machining dan Perakitan
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• CNC Milling high-speed (20,000 rpm)</li>
                    <li>• CNC Bubut presisi tinggi</li>
                    <li>• Perakitan komponen medis</li>
                    <li>• Produksi aksesori motor</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Mengapa Memilih PT Arch Continent Tech?
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <benefit.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Standar Kualitas & Sertifikasi
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Komitmen kami terhadap kualitas diimplementasikan melalui standar
              internasional
            </p>
          </motion.div>

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              {
                title: 'ISO 9001',
                desc: 'Quality Management System',
                icon: '🏆',
              },
              {
                title: 'ISO 13485',
                desc: 'Medical Device Quality',
                icon: '🏥',
              },
              { title: 'ISO/TS 16949', desc: 'Automotive Quality', icon: '🚗' },
              {
                title: 'ISO 14001',
                desc: 'Environmental Management',
                icon: '🌱',
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className='bg-gray-50 p-6 rounded-xl text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl mb-3'>{cert.icon}</div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {cert.title}
                </h3>
                <p className='text-sm text-gray-600'>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold mb-4'>
              Siap Berkolaborasi dengan Kami?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Hubungi tim teknis kami untuk konsultasi produk dan solusi
              manufaktur yang tepat untuk kebutuhan Anda
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20PT%20Arch%20Continent%20Tech`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300'
              >
                Konsultasi Teknis Gratis
              </a>
              <Link
                href='/contact'
                className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300'
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
