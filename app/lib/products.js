// Product data catalog
export const productCategories = [
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

// Get all products
export function getAllProducts() {
  return productCategories.flatMap((cat) => cat.products);
}

// Get product by ID
export function getProductById(id) {
  return getAllProducts().find((product) => product.id === id);
}

// Generate slug from product name
export function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Get product by slug
export function getProductBySlug(slug) {
  const products = getAllProducts();
  return products.find((product) => generateSlug(product.name) === slug);
}

// Get related products (same category, exclude current product)
export function getRelatedProducts(currentProduct, limit = 3) {
  const allProducts = getAllProducts();
  return allProducts
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, limit);
}

