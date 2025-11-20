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
        fullDescription:
          'Tray PQ berkapasitas tiga baris ini diproduksi dari HDPE UV-stabilized dengan penopang rusuk rapat sehingga aman ditumpuk pada area pengeboran outdoor. Bidang labeling ekstra lebar membantu tim geolog membuat catatan inti yang rapi dan konsisten.',
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
        technicalData: {
          'Material Grade': 'UV Stabilized HDPE',
          'Wall Thickness': '4.5 mm rata',
          'Temperature Range': '-20°C s/d 80°C',
          'Stacking Capacity': 'Hingga 15 tray',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.jpg',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.jpg',
        ],
      },
      {
        id: 'core-tray-hq',
        name: 'Core Tray HQ',
        category: 'Pertambangan',
        subcategory: 'Plastik Core Tray',
        description:
          'Core tray presisi untuk inti bor diameter HQ dengan kapasitas optimal dan desain yang efisien.',
        fullDescription:
          'Core Tray HQ menghadirkan empat baris penyimpanan dengan drainase built-in sehingga inti bor terjaga kering dan mudah diinspeksi. Kami menambahkan bidang label dua sisi dan pegangan ergonomis agar operator dapat memindahkan tray sepanjang shift tanpa kelelahan.',
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
        technicalData: {
          'Material Grade': 'Outdoor HDPE',
          'Drainage System': 'Integrated channel',
          'Weight Capacity': '120 kg static load',
          'Color Options': 'Slate Grey & Safety Yellow',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.jpg',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.jpg',
        ],
      },
      {
        id: 'core-tray-nq',
        name: 'Core Tray NQ',
        category: 'Pertambangan',
        subcategory: 'Plastik Core Tray',
        description:
          'Core tray dengan kapasitas tertinggi untuk inti bor diameter NQ, dirancang untuk maksimalisasi ruang.',
        fullDescription:
          'Versi NQ menampung lima baris inti dengan profil ramping sehingga cocok untuk rig eksplorasi dengan ruang terbatas. Setiap tray melewati proses QC dimensi ±0.3 mm agar kompatibel dengan rak penyimpanan standar dan memudahkan dokumentasi jangka panjang.',
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
        technicalData: {
          'Material Grade': 'Fiber Reinforced HDPE',
          'Wall Thickness': '4.0 mm',
          'Operating Temperature': '-20°C s/d 70°C',
          'Label Window': '55 mm x 90 mm',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_NQ.jpg',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_NQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.jpg',
        ],
      },
      {
        id: 'core-box-galvalum-nq',
        name: 'Core Box Galvalum NQ',
        category: 'Pertambangan',
        subcategory: 'Core Box Metal',
        description:
          'Core box dari material Galvalum untuk durability maksimal dalam kondisi lingkungan yang keras.',
        fullDescription:
          'Core box galvalum memberikan proteksi maksimal terhadap korosi serta benturan saat pengiriman inti bor. Panel luar dipotong CNC untuk memastikan tutup terkunci rapat, sedangkan sisi dalam diberi marking pengukuran agar teknisi tidak perlu alat tambahan ketika melakukan logging.',
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
        technicalData: {
          Material: 'Galvalum 0.5 mm',
          Coating: 'AZ150 anti-korosi',
          'Stacking Capacity': 'Hingga 20 box',
          Fastening: 'Slide lock + rivet',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_NQ.jpg',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_NQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_PQ.jpg',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.jpg',
        ],
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
        fullDescription:
          'Cover steering column dibuat dengan proses injeksi multi-cavity untuk memastikan permukaan halus dan konsistensi warna OEM. Struktur bagian dalam ditopang ribbing untuk meredam getaran, sedangkan snap-fit dirancang agar proses perakitan berlangsung cepat di lini produksi.',
        specifications: {
          Material: 'High-impact ABS Plastic',
          Finish: 'Textured Surface',
          Color: 'Custom Match OEM',
          Tolerance: '±0.1mm',
          Temperature: '-40°C to +85°C',
          Certification: 'ISO/TS 16949',
          Application: 'Steering System Protection',
        },
        technicalData: {
          Material: 'ABS High Impact',
          'Surface Finish': 'Texture 1200 grit',
          'Mold Cavity': '2+2 multi-cavity',
          'Color Control': 'Delta E < 1.5',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.jpg',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.jpg',
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_PRODUCT.jpg',
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_PRODUCT.jpg',
        ],
      },
      {
        id: 'trim-pillar',
        name: 'Trim Pillar',
        category: 'Otomotif',
        subcategory: 'Interior Trim',
        description:
          'Panel pilar interior dengan desain ergonomis dan material berkualitas tinggi.',
        fullDescription:
          'Trim pilar dibuat dari komposit polypropylene dengan filler talc yang memberikan kekakuan tanpa menambah berat. Garis clip didesain ulang agar teknisi bisa memasang panel hanya dengan satu dorongan sambil tetap mempertahankan sealer akustik.',
        specifications: {
          Material: 'Polypropylene Composite',
          Finish: 'Soft-touch Texture',
          Mounting: 'Clip-in System',
          Tolerance: '±0.15mm',
          Weight: 'Optimized Design',
          Certification: 'ISO 14001',
          Application: 'Interior Aesthetic',
        },
        technicalData: {
          Material: 'PP + Talc 20%',
          Mounting: 'Clip-in & screw boss',
          Coating: 'Soft-touch UV resistant',
          'Part Weight': '0.46 kg',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_PLUG_NUT.jpg',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_PLUG_NUT.jpg',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_WHEEL_CAP.jpg',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_HANDLE_GRIP.jpg',
        ],
      },
      {
        id: 'panel-console-epb',
        name: 'Panel Console RR Upper EPB',
        category: 'Otomotif',
        subcategory: 'Console Components',
        description:
          'Panel konsol belakang untuk electronic parking brake dengan integrasi kontrol yang presisi.',
        fullDescription:
          'Panel konsol EPB dibuat dari PC/ABS dengan finishing piano black opsional. Titik pemasangan metal insert memastikan stabilitas saat switch ditekan, sedangkan jalur cahaya LED sudah dioptimalkan untuk menghindari hotspot.',
        specifications: {
          Material: 'Reinforced PC/ABS',
          Function: 'EPB Control Integration',
          Buttons: 'Integrated Switches',
          Illumination: 'LED Backlighting',
          Connectivity: 'Wiring Harness Ready',
          Certification: 'ECE R10',
          Application: 'Parking Brake Control',
        },
        technicalData: {
          Material: 'PC/ABS UL94 V0',
          Illumination: 'Integrated light guide',
          Electronics: 'EPB switch ready',
          Assembly: 'Snap fit + screw',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_KNOB_SUB_ASSY_LEVEL.jpg',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_KNOB_SUB_ASSY_LEVEL.jpg',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.jpg',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_HANDLE_GRIP.jpg',
        ],
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
        fullDescription:
          'ODP generasi terbaru ini dibangun dari polycarbonate UV-resistant dengan sistem sealing dua lapis sehingga aman terhadap hujan tropis. Tata letak port modular memudahkan teknisi melakukan ekspansi jaringan tanpa mengganti enclosure.',
        specifications: {
          Material: 'UV-resistant Polycarbonate',
          'IP Rating': 'IP67',
          Temperature: '-40°C to +85°C',
          Ports: 'Up to 24 fiber connections',
          Mounting: 'Pole/Wall Mountable',
          Standard: 'ITU-T G.652 compliant',
          Application: 'Fiber Distribution',
        },
        technicalData: {
          'Ingress Protection': 'IP67',
          'Port Density': '24 core SC/LC',
          'Mounting Options': 'Pole / Wall bracket',
          'Cable Entry': '3 gland + 1 mid-span',
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
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_PRODUCT.jpg',
        images: [
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_PRODUCT.jpg',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_BODY_BOX_KECIL.jpg',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_TUTUP_BESAR.jpg',
        ],
      },
      {
        id: 'splice-tray',
        name: 'Splice Tray & Dudukan Tray',
        category: 'Telekomunikasi',
        subcategory: 'Fiber Management',
        description:
          'Sistem splice tray untuk manajemen koneksi fiber optic yang terorganisir.',
        fullDescription:
          'Tray splice modular dengan dudukan ini memaksimalkan radius pembengkokan fiber dan menyediakan retainer transparan sehingga proses inspeksi berlangsung cepat. Dudukan dapat ditumpuk sehingga cocok untuk kabinet high-density.',
        specifications: {
          Material: 'Flame-retardant ABS',
          Capacity: '12-24 fiber splices',
          'Tray Type': 'Sliding/Removable',
          Protection: 'Splice holder clips',
          Compatibility: 'Standard fusion splices',
          Standard: 'IEC 60793',
          Application: 'Fiber Splice Organization',
        },
        technicalData: {
          Capacity: '24 core',
          'Material Grade': 'ABS V-0 flame retardant',
          Dimensions: '175 x 110 x 12 mm',
          'Routing Radius': '≥30 mm',
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
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE.jpg',
        images: [
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE.jpg',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE2.jpg',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_DUDUKAN_TRAY.jpg',
        ],
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
        fullDescription:
          'Cassette diagnostik multi-parameter mendukung konfigurasi 1P hingga 7P dengan jalur fluida yang stabil. Permukaan luar dirancang halus sehingga mudah diberi label maupun kode QR untuk traceability laboratorium.',
        specifications: {
          Material: 'Medical-grade Polystyrene',
          Variants: '1P, 2P, 3P, 5P, 6P, 7P',
          Configuration: 'Single/Two Hole options',
          Compliance: 'ISO 13485',
          Sterilization: 'EO compatible',
          Quality: 'Medical grade certification',
          Application: 'In Vitro Diagnostics',
        },
        technicalData: {
          Material: 'Medical PS',
          'Detection Window': '1-7 parameter',
          'Shelf Life': '24 bulan',
          Sterilization: 'Ethylene Oxide compatible',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_SINGLE.jpg',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_SINGLE.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETTE_TWO_HOLE.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_FOR_DUO_PARAMETER.jpg',
        ],
      },
      {
        id: 'baby-scale',
        name: 'Baby Scale Components',
        category: 'Medical Devices',
        subcategory: 'Medical Equipment',
        description:
          'Komponen lengkap untuk timbangan bayi dengan akurasi tinggi dan desain yang aman.',
        fullDescription:
          'Satu set komponen baby scale mencakup baki ergonomis, top cover aerodinamis, dan pelindung baterai untuk memudahkan proses perakitan OEM. Material ABS medical grade memastikan permukaan higienis dan mudah dibersihkan.',
        specifications: {
          Components: 'Baki, Top Cover, Back Cover, Battery Cover, LCD Cover',
          Material: 'Medical-grade ABS',
          Accuracy: '±10 grams',
          Capacity: 'Up to 20kg',
          Safety: 'Rounded edges, non-toxic',
          Certification: 'CE, ISO 13485',
          Application: 'Pediatric Weighing',
        },
        technicalData: {
          Components: '13 pcs injection set',
          Accuracy: '±10 gram',
          Finish: 'Matte antibacterial coating',
          Power: '2x AA battery housing',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE.jpg',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE_TOP_COVER.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE_BACK_COVER.jpg',
        ],
      },
      {
        id: 'infantometer',
        name: 'Infantometer / Length Board',
        category: 'Medical Devices',
        subcategory: 'Measurement Devices',
        description:
          'Papan pengukur panjang bayi dengan akurasi tinggi untuk monitoring pertumbuhan.',
        fullDescription:
          'Infantometer dengan slider ganda ini mengikuti standar WHO untuk memastikan pembacaan panjang bayi yang konsisten. Komponen dikirim dalam kit knock-down sehingga memudahkan distribusi dan pemasangan di fasilitas kesehatan.',
        specifications: {
          Material: 'Medical-grade Components',
          Measurement: '0-100 cm range',
          Accuracy: '±1mm',
          Components: 'Length Board, Manual Slider, Locking Slider',
          Safety: 'Smooth edges, non-toxic finish',
          Standard: 'WHO Growth Standards',
          Application: 'Infant Measurement',
        },
        technicalData: {
          Material: 'ABS Medical + aluminium rail',
          'Measurement Range': '10-100 cm',
          'Scale Printing': 'UV cured black',
          'Lock Mechanism': 'Dual slider lock',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD.jpg',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD_SLIDER_INFANTOMETER.jpg',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD_LOCKING_SLIDER.jpg',
        ],
      },
    ],
  },
];

// Generate slug from product name
export function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeProduct(product) {
  const images = product.images?.length
    ? product.images
    : product.image
    ? [product.image]
    : [];

  const technicalData =
    product.technicalData && Object.keys(product.technicalData).length > 0
      ? product.technicalData
      : product.specifications || {};

  return {
    ...product,
    image: images[0] ?? product.image,
    images,
    slug: product.slug ?? generateSlug(product.name),
    fullDescription: product.fullDescription ?? product.description,
    technicalData,
  };
}

// Get all products
export function getAllProducts() {
  return productCategories.flatMap((cat) =>
    cat.products.map((product) => normalizeProduct(product))
  );
}

// Get product by ID
export function getProductById(id) {
  return getAllProducts().find((product) => product.id === id);
}

// Get product by slug
export function getProductBySlug(slug) {
  const products = getAllProducts();
  return products.find(
    (product) => product.slug === slug || generateSlug(product.name) === slug
  );
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
