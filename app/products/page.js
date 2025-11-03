'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
} from '@heroicons/react/24/outline';

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
          description: 'Solusi premium untuk pengelolaan inti bor diameter PQ dengan desain presisi dan material berkualitas tinggi.',
          specifications: {
            'Overall Length': '1085 mm',
            'Width': '390 mm',
            'Height': '95 mm',
            'Core Capacity': '3 rows',
            'Weight': '2.55 kg',
            'Material': 'Plastik Presisi HDPE',
            'Aplikasi': 'Inti bor diameter PQ (85 mm)',
            'Standar': 'International Diamond Core Standards'
          },
          features: [
            'Presisi dimensi tinggi untuk identifikasi inti bor',
            'Material UV-resistant untuk outdoor applications',
            'Desain stackable untuk efisiensi penyimpanan',
            'Kapasitas 3 rows untuk organisasi systematic',
            'Durable construction untuk field conditions'
          ],
          applications: [
            'Eksplorasi geologi',
            'Pertambangan mineral',
            'Konstruksi sipil',
            'Penelitian geoteknik'
          ],
          image: '/products/core-tray-pq.jpg'
        },
        {
          id: 'core-tray-hq',
          name: 'Core Tray HQ',
          category: 'Pertambangan',
          subcategory: 'Plastik Core Tray',
          description: 'Core tray presisi untuk inti bor diameter HQ dengan kapasitas optimal dan desain yang efisien.',
          specifications: {
            'Overall Length': '1085 mm',
            'Width': '390 mm',
            'Height': '75 mm',
            'Core Capacity': '4 rows',
            'Weight': '2.3 kg',
            'Material': 'Plastik Presisi HDPE',
            'Aplikasi': 'Inti bor diameter HQ (63.5 mm)',
            'Standar': 'International Diamond Core Standards'
          },
          features: [
            'Kapasitas 4 rows untuk optimal organization',
            'Compact design untuk efficient handling',
            'High-precision molding untuk consistency',
            'Weather-resistant material untuk outdoor use',
            'Color-coded untuk easy identification'
          ],
          applications: [
            'Mineral exploration',
            'Core drilling operations',
            'Geotechnical investigations',
            'Mining sampling'
          ],
          image: '/products/core-tray-hq.jpg'
        },
        {
          id: 'core-tray-nq',
          name: 'Core Tray NQ',
          category: 'Pertambangan',
          subcategory: 'Plastik Core Tray',
          description: 'Core tray dengan kapasitas tertinggi untuk inti bor diameter NQ, dirancang untuk maksimalisasi ruang.',
          specifications: {
            'Overall Length': '1085 mm',
            'Width': '390 mm',
            'Height': '67 mm',
            'Core Capacity': '5 rows',
            'Weight': '2.3 kg',
            'Material': 'Plastik Presisi HDPE',
            'Aplikasi': 'Inti bor diameter NQ (47.6 mm)',
            'Standar': 'International Diamond Core Standards'
          },
          features: [
            'Kapasitas tertinggi (5 rows) untuk space optimization',
            'Slim profile untuk compact storage',
            'Reinforced structure untuk durability',
            'Easy-grip handles untuk convenient handling',
            'UV-stabilized untuk outdoor longevity'
          ],
          applications: [
            'High-density core sampling',
            'Space-constrained operations',
            'Extended drilling programs',
            'Core logging facilities'
          ],
          image: '/products/core-tray-nq.jpg'
        },
        {
          id: 'core-box-galvalum-nq',
          name: 'Core Box Galvalum NQ',
          category: 'Pertambangan',
          subcategory: 'Core Box Metal',
          description: 'Core box dari material Galvalum untuk durability maksimal dalam kondisi lingkungan yang keras.',
          specifications: {
            'Overall Length': '1000 mm',
            'Width': '400 mm',
            'Height': '80 mm',
            'Core Capacity': '6 rows',
            'Weight': '1.7 kg',
            'Material': 'Galvalum (Aluminum-Zinc Coated)',
            'Aplikasi': 'Inti bor diameter NQ (47.6 mm)',
            'Coating': 'Corrosion-resistant Galvalum'
          },
          features: [
            'Material Galvalum untuk superior corrosion resistance',
            'Kapasitas 6 rows untuk maximum storage',
            'Lightweight yet robust construction',
            'Stackable design untuk space efficiency',
            'Long-term outdoor storage capability'
          ],
          applications: [
            'Long-term core storage',
            'Harsh environment operations',
            'Marine and coastal projects',
            'Archival core storage'
          ],
          image: '/products/core-box-nq.jpg'
        }
      ]
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
          description: 'Komponen pelindung kolom kemudi dengan presisi tinggi untuk aplikasi OEM automotive.',
          specifications: {
            'Material': 'High-impact ABS Plastic',
            'Finish': 'Textured Surface',
            'Color': 'Custom Match OEM',
            'Tolerance': '±0.1mm',
            'Temperature': '-40°C to +85°C',
            'Certification': 'ISO/TS 16949',
            'Application': 'Steering System Protection'
          },
          features: [
            'Precision-molded untuk perfect fit',
            'High-impact resistance untuk durability',
            'UV-stabilized untuk color retention',
            'OEM-quality finish untuk seamless integration',
            'Noise reduction properties'
          ],
          applications: [
            'Passenger vehicles',
            'Commercial vehicles',
            'Heavy-duty trucks',
            'Specialty vehicles'
          ],
          image: '/products/cover-steering.jpg'
        },
        {
          id: 'trim-pillar',
          name: 'Trim Pillar',
          category: 'Otomotif',
          subcategory: 'Interior Trim',
          description: 'Panel pilar interior dengan desain ergonomis dan material berkualitas tinggi.',
          specifications: {
            'Material': 'Polypropylene Composite',
            'Finish': 'Soft-touch Texture',
            'Mounting': 'Clip-in System',
            'Tolerance': '±0.15mm',
            'Weight': 'Optimized Design',
            'Certification': 'ISO 14001',
            'Application': 'Interior Aesthetic'
          },
          features: [
            'Aesthetic design untuk interior enhancement',
            'Easy installation dengan clip system',
            'Durable construction untuk long life',
            'Color-matched untuk vehicle interior',
            'Acoustic dampening properties'
          ],
          applications: [
            'A-pillar trim',
            'B-pillar trim',
            'C-pillar applications',
            'Interior styling'
          ],
          image: '/products/trim-pillar.jpg'
        },
        {
          id: 'panel-console-epb',
          name: 'Panel Console RR Upper EPB',
          category: 'Otomotif',
          subcategory: 'Console Components',
          description: 'Panel konsol belakang untuk electronic parking brake dengan integrasi kontrol yang presisi.',
          specifications: {
            'Material': 'Reinforced PC/ABS',
            'Function': 'EPB Control Integration',
            'Buttons': 'Integrated Switches',
            'Illumination': 'LED Backlighting',
            'Connectivity': 'Wiring Harness Ready',
            'Certification': 'ECE R10',
            'Application': 'Parking Brake Control'
          },
          features: [
            'Integrated electronic controls',
            'LED illumination untuk visibility',
            'Ergonomic button placement',
            'Durable switch mechanisms',
            'Seamless OEM integration'
          ],
          applications: [
            'Electronic parking brakes',
            'Center console controls',
            'Multi-function panels',
            'Driver interface systems'
          ],
          image: '/products/panel-epb.jpg'
        }
      ]
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
          description: 'Terminal distribusi optik yang tahan cuaca untuk jaringan fiber optic outdoor.',
          specifications: {
            'Material': 'UV-resistant Polycarbonate',
            'IP Rating': 'IP67',
            'Temperature': '-40°C to +85°C',
            'Ports': 'Up to 24 fiber connections',
            'Mounting': 'Pole/Wall Mountable',
            'Standard': 'ITU-T G.652 compliant',
            'Application': 'Fiber Distribution'
          },
          features: [
            'Weatherproof design untuk outdoor deployment',
            'High-density port configuration',
            'Easy splice access untuk maintenance',
            'Secure locking mechanisms',
            'Cable management system'
          ],
          applications: [
            'FTTH networks',
            'Fiber to the building',
            'Rural broadband deployment',
            'Urban fiber networks'
          ],
          image: '/products/odp-terminal.jpg'
        },
        {
          id: 'splice-tray',
          name: 'Splice Tray & Dudukan Tray',
          category: 'Telekomunikasi',
          subcategory: 'Fiber Management',
          description: 'Sistem splice tray untuk manajemen koneksi fiber optic yang terorganisir.',
          specifications: {
            'Material': 'Flame-retardant ABS',
            'Capacity': '12-24 fiber splices',
            'Tray Type': 'Sliding/Removable',
            'Protection': 'Splice holder clips',
            'Compatibility': 'Standard fusion splices',
            'Standard': 'IEC 60793',
            'Application': 'Fiber Splice Organization'
          },
          features: [
            'Organized fiber management',
            'Secure splice protection',
            'Modular tray system',
            'Clear identification system',
            'Easy access untuk splicing'
          ],
          applications: [
            'Fiber optic splicing',
            'Network termination points',
            'Distribution frames',
            'Maintenance operations'
          ],
          image: '/products/splice-tray.jpg'
        }
      ]
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
          description: 'Cassette diagnostik untuk berbagai parameter testing dengan presisi tinggi.',
          specifications: {
            'Material': 'Medical-grade Polystyrene',
            'Variants': '1P, 2P, 3P, 5P, 6P, 7P',
            'Configuration': 'Single/Two Hole options',
            'Compliance': 'ISO 13485',
            'Sterilization': 'EO compatible',
            'Quality': 'Medical grade certification',
            'Application': 'In Vitro Diagnostics'
          },
          features: [
            'Multi-parameter detection capability',
            'Precision molding untuk consistency',
            'Medical-grade material safety',
            'Various hole configurations',
            'Quality controlled manufacturing'
          ],
          applications: [
            'Point-of-care testing',
            'Laboratory diagnostics',
            'Clinical testing',
            'Rapid diagnostic tests'
          ],
          image: '/products/cassette-medical.jpg'
        },
        {
          id: 'baby-scale',
          name: 'Baby Scale Components',
          category: 'Medical Devices',
          subcategory: 'Medical Equipment',
          description: 'Komponen lengkap untuk timbangan bayi dengan akurasi tinggi dan desain yang aman.',
          specifications: {
            'Components': 'Baki, Top Cover, Back Cover, Battery Cover, LCD Cover',
            'Material': 'Medical-grade ABS',
            'Accuracy': '±10 grams',
            'Capacity': 'Up to 20kg',
            'Safety': 'Rounded edges, non-toxic',
            'Certification': 'CE, ISO 13485',
            'Application': 'Pediatric Weighing'
          },
          features: [
            'Complete component set',
            'Child-safe design',
            'High accuracy weighing',
            'Durable construction',
            'Easy assembly design'
          ],
          applications: [
            'Hospital nurseries',
            'Pediatric clinics',
            'Home healthcare',
            'Mobile medical units'
          ],
          image: '/products/baby-scale.jpg'
        },
        {
          id: 'infantometer',
          name: 'Infantometer / Length Board',
          category: 'Medical Devices',
          subcategory: 'Measurement Devices',
          description: 'Papan pengukur panjang bayi dengan akurasi tinggi untuk monitoring pertumbuhan.',
          specifications: {
            'Material': 'Medical-grade Components',
            'Measurement': '0-100 cm range',
            'Accuracy': '±1mm',
            'Components': 'Length Board, Manual Slider, Locking Slider',
            'Safety': 'Smooth edges, non-toxic finish',
            'Standard': 'WHO Growth Standards',
            'Application': 'Infant Measurement'
          },
          features: [
            'High precision measurement',
            'Smooth sliding mechanism',
            'Secure locking system',
            'Durable construction',
            'Easy-read measurement scale'
          ],
          applications: [
            'Growth monitoring',
            'Pediatric assessments',
            'Public health programs',
            'Research studies'
          ],
          image: '/products/infantometer.jpg'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Kualitas Terjamin',
      description: 'Standar kualitas internasional dengan sertifikasi ISO 9001, ISO 13485, dan ISO/TS 16949',
    },
    {
      icon: TruckIcon,
      title: 'Kemampuan Produksi',
      description: 'Fasilitas manufactur lengkap dengan 14 mesin injeksi (75-800 ton) dan CNC precision',
    },
    {
      icon: CheckCircleIcon,
      title: 'Teknologi Presisi',
      description: 'Mesin CNC kelas dunia (Makino, Kasuga) dengan akurasi ±0.01mm untuk toleransi ketat',
    },
  ];

  // Get all products or filtered by category
  const getAllProducts = () => {
    if (selectedCategory === 'all') {
      return productCategories.flatMap(cat => cat.products);
    }
    const category = productCategories.find(cat => cat.id === selectedCategory);
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
              Katalog Produk <span className='text-blue-600'>PT Arch Continent Tech</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Solusi manufaktur presisi untuk berbagai industri dengan standar kualitas internasional dan teknologi CNC modern.
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
                <div className='text-3xl font-bold text-blue-600 mb-2'>±0.01</div>
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
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Product Header */}
                <div className='relative'>
                  <div className='h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mx-auto mb-3 flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>ACT</span>
                      </div>
                      <p className='text-gray-500 text-sm'>{product.category}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full'>
                      {product.subcategory}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{product.name}</h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>{product.description}</p>

                  {/* Key Specifications */}
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>Spesifikasi Utama:</h4>
                    <div className='space-y-1'>
                      {Object.entries(product.specifications)
                        .slice(0, 3)
                        .map(([key, value]) => (
                          <div key={key} className='flex justify-between text-sm'>
                            <span className='text-gray-500'>{key}:</span>
                            <span className='text-gray-900 font-medium'>{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-2'>Aplikasi:</h4>
                    <div className='flex flex-wrap gap-1'>
                      {product.applications.slice(0, 2).map((app, i) => (
                        <span key={i} className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
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
                  <div className='flex gap-3'>
                    <button
                      onClick={() => handleViewDetails(product)}
                      className='flex-1 btn-outline text-sm py-2'
                    >
                      Lihat Detail
                    </button>
                    <button
                      onClick={() => handleRequestQuote(product)}
                      className='flex-1 btn-primary text-sm py-2'
                    >
                      Request Penawaran
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
              Fasilitas produksi lengkap dengan teknologi terkini untuk memenuhi standar kualitas tertinggi
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
                  <h4 className='font-semibold text-gray-900 mb-2'>CNC Milling</h4>
                  <p className='text-gray-600'>Makino, Feeler, Campro, Kasuga dengan akurasi ±0.01mm</p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>Plastic Injection</h4>
                  <p className='text-gray-600'>14 unit mesin 75-800 ton (Cai Feng, Hwamda, Beston)</p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>EDM Processing</h4>
                  <p className='text-gray-600'>ZNC-SKM dan CNC Charmiles SE-1 untuk mold kompleks</p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 mb-2'>Support Equipment</h4>
                  <p className='text-gray-600'>Surface Grinding, Radial Drill, Band Saw</p>
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
                  <p className='text-gray-600 mb-3'>Pusat Tooling dan Injeksi Volume Tinggi</p>
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
                  <p className='text-gray-600 mb-3'>Pusat Precision Machining dan Perakitan</p>
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
              Komitmen kami terhadap kualitas diimplementasikan melalui standar internasional
            </p>
          </motion.div>

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              { title: 'ISO 9001', desc: 'Quality Management System', icon: '🏆' },
              { title: 'ISO 13485', desc: 'Medical Device Quality', icon: '🏥' },
              { title: 'ISO/TS 16949', desc: 'Automotive Quality', icon: '🚗' },
              { title: 'ISO 14001', desc: 'Environmental Management', icon: '🌱' }
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
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{cert.title}</h3>
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
              Hubungi tim teknis kami untuk konsultasi produk dan solusi manufaktur yang tepat untuk kebutuhan Anda
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
    </div>
  );
}
