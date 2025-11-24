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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.png',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_PQ.png',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_NQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_NQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_TRAY_HQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_UNIVERSAL_COVER_CORE_TRAY.png',
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
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_NQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_NQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_PQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.png',
        ],
      },
      {
        id: 'core-box-galvalum-hq',
        name: 'Core Box Galvalum HQ',
        category: 'Pertambangan',
        subcategory: 'Core Box Metal',
        description:
          'Core box galvalum untuk inti bor HQ dengan konstruksi kokoh dan perlindungan korosi superior.',
        fullDescription:
          'Core Box Galvalum HQ dirancang khusus untuk penyimpanan inti bor diameter HQ (63.5mm) dengan material galvalum yang tahan korosi ekstrim. Desain 5 rows memberikan kapasitas penyimpanan optimal sambil menjaga portabilitas untuk operasi lapangan yang dinamis.',
        specifications: {
          'Overall Length': '1000 mm',
          Width: '400 mm',
          Height: '75 mm',
          'Core Capacity': '5 rows',
          Weight: '1.6 kg',
          Material: 'Galvalum (Aluminum-Zinc Coated)',
          Aplikasi: 'Inti bor diameter HQ (63.5 mm)',
          Coating: 'Corrosion-resistant Galvalum',
        },
        technicalData: {
          Material: 'Galvalum 0.5 mm',
          Coating: 'AZ150 anti-korosi',
          'Stacking Capacity': 'Hingga 22 box',
          Fastening: 'Slide lock + rivet',
        },
        features: [
          'Material Galvalum untuk superior corrosion resistance',
          'Kapasitas 5 rows untuk optimal storage HQ cores',
          'Lightweight design untuk easy handling',
          'Weather-resistant untuk outdoor long-term storage',
          'CNC precision cutting untuk perfect lid fit',
        ],
        applications: [
          'HQ core drilling operations',
          'Long-term core storage',
          'Coastal and marine environments',
          'Mining exploration archives',
        ],
        image:
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_HQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_HQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_NQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.png',
        ],
      },
      {
        id: 'core-box-galvalum-pq',
        name: 'Core Box Galvalum PQ',
        category: 'Pertambangan',
        subcategory: 'Core Box Metal',
        description:
          'Core box galvalum heavy-duty untuk inti bor PQ dengan kapasitas besar dan durabilitas maksimal.',
        fullDescription:
          'Core Box Galvalum PQ adalah solusi penyimpanan premium untuk inti bor diameter PQ (85mm) yang memerlukan proteksi maksimal. Dengan kapasitas 4 rows dan konstruksi galvalum reinforced, box ini ideal untuk proyek eksplorasi skala besar dengan kebutuhan arsip jangka panjang.',
        specifications: {
          'Overall Length': '1000 mm',
          Width: '400 mm',
          Height: '95 mm',
          'Core Capacity': '4 rows',
          Weight: '1.9 kg',
          Material: 'Galvalum (Aluminum-Zinc Coated)',
          Aplikasi: 'Inti bor diameter PQ (85 mm)',
          Coating: 'Corrosion-resistant Galvalum',
        },
        technicalData: {
          Material: 'Galvalum 0.5 mm',
          Coating: 'AZ150 anti-korosi',
          'Stacking Capacity': 'Hingga 18 box',
          Fastening: 'Reinforced slide lock + rivet',
        },
        features: [
          'Heavy-duty construction untuk large diameter cores',
          'Material Galvalum dengan enhanced corrosion protection',
          'Kapasitas 4 rows untuk PQ core management',
          'Reinforced edges untuk extra durability',
          'Internal measurement markings untuk logging',
        ],
        applications: [
          'Large diameter core drilling',
          'Major mining exploration projects',
          'Archival core storage facilities',
          'Harsh environment operations',
        ],
        image:
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_PQ.png',
        images: [
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_PQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_CORE_BOX_GALVANUM_HQ.png',
          '/PRODUCT/PRODUCT_PERTAMBANGAN/PRODUCT_PERTAMBANGAN_COVER_CORE_BOX_GALVANUM_UNIVERSAL.png',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.png',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.png',
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_PRODUCT.png',
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_PRODUCT.png',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_PLUG_NUT.png',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_PLUG_NUT.png',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_WHEEL_CAP.png',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_HANDLE_GRIP.png',
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
        image: '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_KNOB_SUB_ASSY_LEVEL.png',
        images: [
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_KNOB_SUB_ASSY_LEVEL.png',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_BOX_CONSOLE.png',
          '/PRODUCT/PRODUCT_OTOMOTIF/OTOMOTIF_HANDLE_GRIP.png',
        ],
      },
      {
        id: 'handle-grip-assist',
        name: 'Handle Grip Assist',
        category: 'Otomotif',
        subcategory: 'Driver Assistance',
        description:
          'Handle grip ergonomis dengan tekstur anti-slip untuk meningkatkan kenyamanan berkendara jarak jauh.',
        fullDescription:
          'Handle grip assist dirancang dengan kontur telapak tangan dan jalur alur drainase sehingga tetap nyaman walau digunakan pada perjalanan panjang. Proses finishing two-shot memastikan tekstur lembut di bagian luar dan struktur kuat di bagian dalam.',
        specifications: {
          Material: 'TPE + Reinforced Nylon Core',
          Finish: 'Textured micro diamond',
          Length: '125 mm',
          Diameter: 'Ø 32 mm',
          Insert: 'Aluminium sleeve',
          Compatibility: 'Universal 22 mm handle bar',
        },
        technicalData: {
          ShoreHardness: '60 ±3 A',
          GripDesign: 'Dual-density ergonomic',
          Coating: 'UV & sweat resistant',
          EndCap: 'Closed with logo emboss',
        },
        features: [
          'Dual-material untuk kombinasi kenyamanan dan stiffness',
          'Tekstur anti-slip yang tetap nyaman saat cuaca panas',
          'Easy lock design untuk pemasangan cepat',
          'Opsional laser marking untuk branding OEM',
          'Tahan terhadap minyak dan chemical ringan',
        ],
        applications: [
          'Motor touring',
          'Skuter premium',
          'Sepeda listrik',
          'Aksesori aftermarket OEM',
        ],
        image:
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_PRODUCT.png',
        images: [
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_PRODUCT.png',
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_3D_DESIGN.png',
          '/PRODUCT/PRODUCT_HANDLE_GRIP_ASSIST/HANDLE_GRIP_ASSIST_SKECTH.png',
        ],
      },
      {
        id: 'knob-shift-level',
        name: 'Knob Shift Level Assembly',
        category: 'Otomotif',
        subcategory: 'Interior Components',
        description:
          'Knob transmisi dengan desain premium dan presisi tinggi untuk kendaraan automatic maupun CVT.',
        fullDescription:
          'Knob shift level diproduksi dengan kombinasi injection PC/ABS dan painting metallic sehingga memberikan nuansa mewah pada interior. Bagian internal diperkuat insert zinc untuk memastikan umur pakai mekanisme shifting.',
        specifications: {
          Material: 'PC/ABS + Zinc Diecast',
          Surface: 'High-gloss metallic',
          Mounting: 'Threaded insert M6',
          Button: 'Integrated release button',
          Weight: '210 ±5 gram',
          Compliance: 'ISO/TS 16949',
        },
        technicalData: {
          FinishProcess: 'UV coating + clear coat',
          DurabilityTest: '100,000 cycle actuation',
          Lighting: 'Optional side illumination',
          Packaging: 'Individual foam blister',
        },
        features: [
          'Desain modular kompatibel dengan beberapa transmisi',
          'Pilihan finishing chrome, satin, atau piano black',
          'Tersedia opsi emblem custom',
          'Internal damper untuk mengurangi NVH',
          'System locking anti putar',
        ],
        applications: [
          'Passenger car AT/CVT',
          'Commercial van interior',
          'Luxury interior refresh program',
          'Aftermarket personalization',
        ],
        image: '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_PRODUCT.png',
        images: [
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_PRODUCT.png',
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_3D_DESIGN1.png',
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_3D_DESIGN2.png',
          '/PRODUCT/PRODUCT_KNOB_SHIFT_LEVEL/KNOB_SHIFT_LEVEL_SKECTH.png',
        ],
      },
      {
        id: 'motor-accessory-kit',
        name: 'Motorcycle Accessory Kit',
        category: 'Otomotif',
        subcategory: 'Aksesori Kendaraan',
        description:
          'Set aksesori lengkap untuk motor harian meliputi cover, bracket, dan komponen dekoratif.',
        fullDescription:
          'Kit aksesori motor mencakup serangkaian part injeksi seperti cover radiator, tutup CVT, hingga pelindung bodi kecil yang dapat disesuaikan warna dan tekstur permukaannya. Cocok untuk kebutuhan OEM maupun kebutuhan modifikasi fleet.',
        specifications: {
          Material: 'ABS / PP Copolymer',
          Finishing: 'Matte & Gloss dual tone',
          Mounting: 'Bolt-on & clip-on',
          Color: 'Custom Pantone matching',
          Production: 'Multi-cavity tooling',
        },
        technicalData: {
          UVResistance: '800 hr Xenon test',
          PaintProcess: 'Wet paint / hydrographic',
          Packaging: 'Set kit dengan foam insert',
          MOQ: '500 set per warna',
        },
        features: [
          'Komposisi kit dapat disesuaikan model motor',
          'Tersedia opsi logo emboss/deboss',
          'Kompatibel dengan standar OEM Jepang',
          'Proses QC 100% visual dan dimensional',
          'Siap integrasi reflective sticker',
        ],
        applications: [
          'Motor commuter 110-160cc',
          'Program limited edition dealer',
          'Brand activation kit',
          'Fleet customization',
        ],
        image:
          '/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_1.png',
        images: [
          '/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_1.png',
          '/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_2.png',
          '/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_4.png',
          '/PRODUCT/PRODUCT_AKSESORIES_MOTOR/PRODUCT_AKSESORIES_MOTOR_5.png',
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
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_PRODUCT.png',
        images: [
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_PRODUCT.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_BODY_BOX_KECIL.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/ODP(OPTICAL_DISTRIBUTION_POINT)/ODP_TUTUP_BESAR.png',
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
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE.png',
        images: [
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE2.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_DUDUKAN_TRAY.png',
        ],
      },
      {
        id: 'dtc-joint',
        name: 'Joint Closure DTC Connection',
        category: 'Telekomunikasi',
        subcategory: 'Outdoor Fiber Hardware',
        description:
          'Joint closure tahan cuaca untuk pelindung sambungan fiber optic dengan kapasitas distribusi besar.',
        fullDescription:
          'Joint DTC dibuat dari material engineering plastic tahan UV dengan sistem seal silika gel. Desain dua bagian memudahkan teknisi melakukan maintenance tanpa melepas kabel utama dan mendukung konfigurasi bottom/top connection.',
        specifications: {
          Material: 'UV Stabilized Polycarbonate',
          'Port Configuration': 'Bottom & top entry',
          Capacity: '96 core fusion splice',
          Seal: 'Silica gel + stainless clamp',
          Rating: 'IP68',
          Mounting: 'Pole / aerial suspension',
        },
        technicalData: {
          TensileStrength: '1000 N axial',
          PressureResist: '100 kPa',
          OperatingTemp: '-40°C hingga 80°C',
          Reentry: 'Tool-less hinge mechanism',
        },
        features: [
          'Sistem buckle stainless untuk keamanan tambahan',
          'Tray internal bertingkat untuk routing rapi',
          'Kompatibel dengan splitter mini 1:4 / 1:8',
          'Marking area untuk identifikasi lapangan',
          'Opsional bracket grounding',
        ],
        applications: [
          'FTTH distribution',
          'Backbone aerial network',
          'Telekom hub outdoor',
          'Industrial fiber deployment',
        ],
        image:
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_JOINT_BOTTOM_DTC_CONNECTION.png',
        images: [
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_JOINT_BOTTOM_DTC_CONNECTION.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_JOINT_UPPER_DTC_CONNECTION.png',
          '/PRODUCT/PRODUCT_TELEKOMUNIKASI/PRODUCT_TELEKOMUNIKASI_SPLICE_TRAY_HOLE2.png',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_SINGLE.png',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_SINGLE.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETTE_TWO_HOLE.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/CASSETE/PRODUCT_ALAT_KESEHATAN_CASSETE_FOR_DUO_PARAMETER.png',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE.png',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE_TOP_COVER.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/BABY_SCALE/PRODUCT_ALAT_KESEHATAN_BABY_SCALE_BACK_COVER.png',
        ],
      },
      {
        id: 'urine-cup',
        name: 'Cup Urine Plastik Steril',
        category: 'Medical Devices',
        subcategory: 'Diagnostic Consumables',
        description:
          'Wadah urine plastik dengan tutup rapat dan indikator volume untuk kebutuhan laboratorium klinik.',
        fullDescription:
          'Cup urine plastik diproduksi dari polypropylene medical grade dengan skala cetak tahan larutan kimia. Tutup ulir anti bocor memastikan sampel tetap aman selama transportasi, sementara pilihan warna tutup memudahkan identifikasi parameter tes.',
        specifications: {
          Material: 'Medical-grade Polypropylene',
          Capacity: '60 ml & 100 ml',
          Graduation: '5 ml increment',
          CapType: 'Screw cap with seal',
          Sterilization: 'EO / Gamma ready',
          ColorOptions: 'Blue, red, yellow',
        },
        technicalData: {
          LeakTest: 'Pressure 95 kPa, 15 min',
          Printing: 'Food-grade ink double side',
          Packaging: 'Individual PE pouch',
          ShelfLife: '3 tahun',
        },
        features: [
          'Skala cetak jelas dan tidak mudah pudar',
          'Tutup ulir ergonomis dengan tekstur anti slip',
          'Pilihan label sticker untuk barcode',
          'Bebas BPA dan memenuhi standar medis',
          'Didesain untuk penggunaan sekali pakai',
        ],
        applications: [
          'Laboratorium klinik',
          'Rumah sakit & puskesmas',
          'Program medical check-up',
          'Pengujian toksikologi',
        ],
        image:
          '/PRODUCT/PRODUCT_CUP_URINE_PLASTIK/CUP_URINE_PLASTIK_PRODUCT.png',
        images: [
          '/PRODUCT/PRODUCT_CUP_URINE_PLASTIK/CUP_URINE_PLASTIK_PRODUCT.png',
          '/PRODUCT/PRODUCT_CUP_URINE_PLASTIK/CUP_URINE_PLASTIK_SAMPLE.png',
          '/PRODUCT/PRODUCT_CUP_URINE_PLASTIK/CUP_URINE_PLASTIK_REDRAWING_3D.png',
          '/PRODUCT/PRODUCT_CUP_URINE_PLASTIK/CUP_URINE_PLASTIK_DRAWING_PART_2D.png',
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
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD.png',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD_SLIDER_INFANTOMETER.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/INFANTOBOARD/PRODUCT_ALAT_KESEHATAN_INFANTOBOARD_LOCKING_SLIDER.png',
        ],
      },
      {
        id: 'exam-lamp',
        name: 'Examination Lamp / Surgical Light',
        category: 'Medical Devices',
        subcategory: 'Medical Equipment',
        description:
          'Lampu pemeriksaan medis dengan pencahayaan LED berkualitas tinggi untuk prosedur medis dan bedah.',
        fullDescription:
          'Examination lamp ini dirancang sebagai solusi pencahayaan medis yang dapat disesuaikan dengan berbagai posisi. Dilengkapi dengan sistem kaki bintang stabil, handle ergonomis, dan lens holder presisi sehingga teknisi medis mendapat fokus cahaya optimal saat pemeriksaan pasien atau tindakan bedah minor.',
        specifications: {
          Material: 'Medical-grade ABS + Polycarbonate',
          LightSource: 'LED high-brightness',
          'Color Temperature': '4500-5500K daylight',
          Adjustment: '360° rotation + tilt mechanism',
          BaseType: 'Star base with caster wheels',
          Power: 'AC adapter 12V / battery option',
          Application: 'Medical Examination',
        },
        technicalData: {
          Components:
            'Front Cover, Rear Cover, Lens Holder, Handle, Star Base, Fitting Lamp',
          Illuminance: '50,000 Lux @ 50 cm',
          LampLife: '50,000 hours LED',
          Mobility: '5-star base + lockable caster',
        },
        features: [
          'Pencahayaan LED hemat energi dengan umur pakai panjang',
          'Desain modular untuk perawatan mudah',
          'Handle anti-slip untuk positioning cepat',
          'Lens holder dengan fokus adjustable',
          'Kaki bintang stabil dengan roda lockable',
          'Material medical-grade mudah disterilisasi',
        ],
        applications: [
          'Ruang pemeriksaan klinik',
          'Operasi bedah minor',
          'Dental examination',
          'Veterinary clinics',
          'Laboratory work',
        ],
        image:
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/EXAM_LAMP/PRODUCT_ALAT_KESEHATAN_EXAM_LAMP.png',
        images: [
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/EXAM_LAMP/PRODUCT_ALAT_KESEHATAN_EXAM_LAMP.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/EXAM_LAMP/PRODUCT_ALAT_KESEHATAN_EXAM_LAMP_FRONT_COVER.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/EXAM_LAMP/PRODUCT_ALAT_KESEHATAN_EXAM_LAMP_HANDLE.png',
          '/PRODUCT/PRODUCT_ALAT_KESEHATAN/EXAM_LAMP/PRODUCT_ALAT_KESEHATAN_EXAM_LAMP_KAKI_BINTANG.png',
        ],
      },
    ],
  },
  {
    id: 'rubber',
    name: 'Komponen Karet Teknik',
    description:
      'Solusi elastomer untuk industri pertambangan, otomotif, dan umum',
    icon: '🧱',
    products: [
      {
        id: 'rubber-bushing-heavy',
        name: 'Heavy Duty Rubber Bushing',
        category: 'Komponen Karet',
        subcategory: 'Vibration Control',
        description:
          'Bushing karet berdaya tahan tinggi untuk meredam getaran dan shock load pada alat berat.',
        fullDescription:
          'Diproduksi dari campuran natural rubber dengan reinforcement kain sintetis, bushing ini menjaga kestabilan alat berat pada kondisi ekstrim tambang maupun konstruksi. Desain flensa menjaga alignment saat pemasangan.',
        specifications: {
          Material: 'Natural Rubber + Fabric Reinforcement',
          Hardness: '70 ±5 Shore A',
          Diameter: 'Ø 80 mm',
          Length: '95 mm',
          Insert: 'Sleeve steel plating zinc',
        },
        technicalData: {
          CompressionSet: '<15% @ 70°C, 24h',
          TemperatureRange: '-30°C sampai 90°C',
          AgingTest: '168h ozone chamber',
          Packaging: 'Pair in corrugated box',
        },
        features: [
          'Meredam getaran hingga 60%',
          'Tahan minyak dan lumpur',
          'Flange stopper untuk pemasangan presisi',
          'Ready untuk custom diameter/slot',
        ],
        applications: [
          'Dump truck tambang',
          'Excavator attachment',
          'Generator skid',
          'Peredam mesin industri',
        ],
        image: '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER1.png',
        images: [
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER1.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER2.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER3.png',
        ],
      },
      {
        id: 'rubber-seal-precision',
        name: 'Precision Rubber Seal',
        category: 'Komponen Karet',
        subcategory: 'Sealing Components',
        description:
          'Seal karet presisi dengan permukaan halus untuk mencegah kebocoran fluida dan debu.',
        fullDescription:
          'Seal ini menggunakan compound NBR dengan proses vulkanisasi terkontrol sehingga memiliki ketahanan tekanan tinggi serta kompatibilitas dengan oli hidrolik. Cocok untuk housing aluminium maupun baja.',
        specifications: {
          Material: 'NBR 70 Shore',
          Profile: 'Custom lip double action',
          Diameter: 'Ø 45-120 mm',
          Pressure: 'Hingga 16 bar',
          Color: 'Black / customized',
        },
        technicalData: {
          SurfaceFinish: 'Ra 0.4 μm molded',
          TensileStrength: '12 MPa',
          Elongation: '250%',
          StorageLife: '24 bulan',
        },
        features: [
          'Kompatibel dengan minyak mineral & sintetik',
          'Bibir ganda untuk sealing ganda',
          'Tersedia opsi food grade',
          'Dukungan sertifikasi material lengkap',
        ],
        applications: [
          'Silinder hidrolik',
          'Gearbox industri',
          'Peralatan food processing',
          'Perangkat HVAC',
        ],
        image: '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER4.png',
        images: [
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER4.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER5.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER6.png',
        ],
      },
      {
        id: 'rubber-prototype-kit',
        name: 'Custom Rubber Prototype Kit',
        category: 'Komponen Karet',
        subcategory: 'Rapid Prototyping',
        description:
          'Layanan prototyping karet multi-varian untuk validasi desain cepat.',
        fullDescription:
          'Kit prototipe memungkinkan tim R&D mendapatkan sampel karet dalam waktu singkat dengan variasi hardness dan warna berbeda. Data dimensi dicatat digital untuk mempercepat iterasi tooling produksi.',
        specifications: {
          Material: 'NR / EPDM / Silicone options',
          HardnessRange: '40 - 80 Shore A',
          LeadTime: '7-10 hari kerja',
          Color: 'Custom RAL/Pantone',
          MaxSize: '300 x 300 x 50 mm',
        },
        technicalData: {
          Process: 'Vacuum casting + compression mold',
          Documentation: 'Dimensional report & COC',
          MOQ: '10 pcs per variant',
          Finishing: 'Talc / PTFE coating',
        },
        features: [
          'Iterasi desain cepat tanpa biaya tooling besar',
          'Pilihan material lengkap termasuk silicone food grade',
          'Dukungan engineering untuk simulasi load',
          'Pengujian sifat mekanik optional',
        ],
        applications: [
          'Pengembangan produk OEM',
          'Line trial manufaktur',
          'Prototipe aksesoris otomotif',
          'Perangkat medis & consumer goods',
        ],
        image: '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER7.png',
        images: [
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER7.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER8.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER9.png',
          '/PRODUCT/PRODUCT_RUBBER/SAMPLE_PRODUCT_RUBBER10.png',
        ],
      },
    ],
  },
  {
    id: 'kabel',
    name: 'Kabel',
    description:
      'Solusi kabel lengkap untuk berbagai kebutuhan industri dan infrastruktur',
    icon: '🔌',
    products: [
      // A. KABEL TEGANGAN RENDAH (Low Voltage ≤1 kV)
      {
        id: 'nya-nyaf-series',
        name: 'NYA/NYAF Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description: 'Kabel fleksibel indoor untuk wiring rumah dan gedung.',
        fullDescription:
          'Kabel fleksibel indoor untuk wiring rumah dan gedung. Harga paling kompetitif, tersedia 0,5-400 mm².',
        specifications: {
          Voltage: '≤1 kV',
          Size: '0.5-400 mm²',
          Type: 'Flexible Indoor',
          Conductor: 'Copper',
        },
        technicalData: {
          Voltage: '≤1 kV',
          Standard: 'SNI',
        },
        features: [
          'Harga paling kompetitif',
          'Fleksibel mudah diinstal',
          'Tersedia berbagai ukuran',
        ],
        applications: ['Wiring rumah', 'Wiring gedung', 'Panel listrik'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nym-series',
        name: 'NYM Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description: 'Standar nasional untuk instalasi dalam rumah.',
        fullDescription:
          'Standar nasional untuk instalasi dalam rumah dengan 3 lapisan isolasi proteksi, kode warna internasional.',
        specifications: {
          Layers: '3 lapisan isolasi',
          Standard: 'Nasional (SNI)',
          ColorCode: 'International',
        },
        technicalData: {
          Insulation: 'PVC',
          Voltage: '300/500V',
        },
        features: [
          '3 lapisan isolasi proteksi',
          'Kode warna internasional',
          'Aman untuk instalasi tetap',
        ],
        applications: ['Instalasi rumah', 'Gedung perkantoran'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nymhy-series',
        name: 'NYMHY Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description:
          'Kabel semi-portable medium-heavy untuk aplikasi dengan pergerakan terbatas.',
        fullDescription:
          'Kabel semi-portable medium-heavy untuk aplikasi dengan pergerakan terbatas, ukuran 0,75-2,5 mm².',
        specifications: {
          Size: '0.75-2.5 mm²',
          Type: 'Semi-portable Medium-Heavy',
          Flexibility: 'High',
        },
        technicalData: {
          Voltage: '300/500V',
          Conductor: 'Stranded Copper',
        },
        features: [
          'Tahan terhadap pergerakan terbatas',
          'Fleksibel',
          'Cocok untuk alat elektronik portable',
        ],
        applications: ['Peralatan elektronik', 'Extension cord'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nyyhy-series',
        name: 'NYYHY Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description: 'Heavy duty fleksibel untuk mesin berat dan manufaktur.',
        fullDescription:
          'Heavy duty fleksibel untuk mesin berat, lini manufaktur, sistem AC dengan tahan tekanan mekanik ekstrem.',
        specifications: {
          Type: 'Heavy Duty Flexible',
          Resistance: 'Mechanical Pressure',
          Application: 'Industrial',
        },
        technicalData: {
          Voltage: '450/750V',
          Sheath: 'PVC Heavy Duty',
        },
        features: [
          'Tahan tekanan mekanik ekstrem',
          'Durabilitas tinggi',
          'Cocok untuk lingkungan industri',
        ],
        applications: ['Mesin berat', 'Lini manufaktur', 'Sistem AC'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nyy-nayy-series',
        name: 'NYY/NAYY Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description: 'Kabel power utama untuk instalasi underground dan duct.',
        fullDescription:
          'Kabel power utama untuk instalasi underground dan duct dengan tegangan 0,6/1 kV, tersedia hingga 500 mm².',
        specifications: {
          Voltage: '0.6/1 kV',
          Size: 'Up to 500 mm²',
          Application: 'Underground/Duct',
        },
        technicalData: {
          Conductor: 'Copper (NYY) / Aluminium (NAYY)',
          Insulation: 'PVC',
        },
        features: [
          'Tahan tanam langsung (dengan pelindung)',
          'Kapasitas arus besar',
          'Tersedia opsi konduktor aluminium',
        ],
        applications: ['Distribusi daya utama', 'Instalasi bawah tanah'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nyfgby-series',
        name: 'NYFGBY Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description:
          'Kabel dengan armour baja berlapis untuk perlindungan maksimal.',
        fullDescription:
          'Kabel dengan armour baja berlapis untuk perlindungan maksimal di area berbahaya dan underground dengan tekanan tinggi.',
        specifications: {
          Protection: 'Steel Armour (Flat/Round)',
          Application: 'Hazardous Areas/Underground',
          Voltage: '0.6/1 kV',
        },
        technicalData: {
          Armour: 'Galvanized Steel',
          Sheath: 'PVC',
        },
        features: [
          'Perlindungan mekanis maksimal',
          'Tahan tekanan tinggi',
          'Aman untuk area berbahaya',
        ],
        applications: ['Area pertambangan', 'Instalasi tanam langsung'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'nfa2x-series',
        name: 'NFA2X Series',
        category: 'Kabel',
        subcategory: 'Low Voltage Cables',
        description:
          'Khusus service drop dari kotak distribusi ke rumah konsumen.',
        fullDescription:
          'Khusus service drop dari kotak distribusi ke rumah konsumen. Kabel twisted pair aluminium untuk saluran udara.',
        specifications: {
          Application: 'Service Drop',
          Conductor: 'Aluminium',
          Type: 'Twisted Cable',
        },
        technicalData: {
          Voltage: '0.6/1 kV',
          Insulation: 'XLPE',
        },
        features: [
          'Ringan dan kuat',
          'Tahan cuaca',
          'Khusus distribusi PLN ke rumah',
        ],
        applications: ['Service drop PLN', 'Penerangan jalan umum'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },

      // B. KABEL TEGANGAN MENENGAH (Medium Voltage 1-35 kV)
      {
        id: 'n2xsey-na2xsey-series',
        name: 'N2XSEY/NA2XSEY Series',
        category: 'Kabel',
        subcategory: 'Medium Voltage Cables',
        description: 'Isolasi XLPE berkualitas tinggi untuk transmisi daya.',
        fullDescription:
          'Isolasi XLPE berkualitas tinggi (tembaga atau aluminium) untuk transmisi daya dan gardu induk.',
        specifications: {
          Insulation: 'XLPE',
          Conductor: 'Copper/Aluminium',
          Voltage: '1-35 kV',
        },
        technicalData: {
          Screen: 'Copper Tape/Wire',
          Sheath: 'PVC/PE',
        },
        features: [
          'High quality XLPE insulation',
          'Low dielectric loss',
          'Reliable for medium voltage',
        ],
        applications: ['Gardu induk', 'Distribusi industri', 'Power plant'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'overhead-transmission-lines',
        name: 'Overhead Transmission Lines',
        category: 'Kabel',
        subcategory: 'Medium Voltage Cables',
        description:
          'AAC, AAAC, ACSR untuk saluran transmisi udara jarak jauh.',
        fullDescription:
          'Kabel konduktor telanjang (AAC, AAAC, ACSR) dirancang untuk saluran transmisi udara jarak jauh dengan kekuatan tarik tinggi.',
        specifications: {
          Type: 'AAC, AAAC, ACSR',
          Application: 'Overhead Transmission',
          Voltage: 'High Voltage',
        },
        technicalData: {
          Material: 'Aluminium / Aluminium Alloy / Steel Reinforced',
        },
        features: [
          'Kekuatan tarik tinggi (ACSR)',
          'Ringan dan konduktivitas baik',
          'Tahan korosi (AAAC)',
        ],
        applications: ['Saluran transmisi udara (SUTM/SUTT)'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'lead-sheathed-cables',
        name: 'Lead Sheathed Cables',
        category: 'Kabel',
        subcategory: 'Medium Voltage Cables',
        description: 'Untuk sistem lama yang masih beroperasi.',
        fullDescription:
          'Kabel dengan pelindung timbal (lead sheath) untuk perlindungan ekstra terhadap kelembaban dan bahan kimia, sering digunakan pada sistem lama.',
        specifications: {
          Protection: 'Lead Sheath',
          Application: 'Legacy Systems / Chemical Environment',
        },
        technicalData: {
          Sheath: 'Lead Alloy',
        },
        features: [
          'Impermeable to water and chemicals',
          'Excellent corrosion resistance',
          'Proven durability',
        ],
        applications: [
          'Kilang minyak',
          'Industri kimia',
          'Sistem bawah tanah lama',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },

      // C. KABEL TAHAN API (Fire Resistant Cable - FRC)
      {
        id: 'fire-resistant-cable',
        name: 'Fire Resistant Cable (FRC)',
        category: 'Kabel',
        subcategory: 'Fire Resistant Cables',
        description: 'Produk unggulan untuk keselamatan kebakaran.',
        fullDescription:
          'Teknologi berlapis 3 layer proteksi: Mica Glass Tape (MGT), XLPE Insulation, Low Smoke Zero Halogen (LSZH). Tahan hingga 750-950°C selama 3 jam tetap menghantarkan listrik.',
        specifications: {
          'Temp Resistance': '750-950°C (3 hours)',
          Voltage: '300/500V - 1 kV',
          Standard: 'IEC 60331, BS 6387',
          Core: 'Various sizes',
        },
        technicalData: {
          Layer1: 'Mica Glass Tape (MGT)',
          Layer2: 'XLPE Insulation (90°C)',
          Layer3: 'LSZH Sheath',
        },
        features: [
          'Tetap menghantarkan listrik saat kebakaran',
          'Low Smoke Zero Halogen (tidak beracun)',
          'Tahan panas ekstrem',
        ],
        applications: [
          'Sistem alarm kebakaran',
          'Pencahayaan darurat',
          'Rumah sakit & Data center',
          'Gedung pencakar langit',
          'Jalur evakuasi',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },

      // D. KABEL INSTRUMENTATION & CONTROL
      {
        id: 'instrumentation-cables',
        name: 'Instrumentation Cables (OS/IS)',
        category: 'Kabel',
        subcategory: 'Instrumentation & Control',
        description: 'Armoured & non-armoured untuk SCADA dan sensor industri.',
        fullDescription:
          'Kabel instrumentasi (Overall Screen / Individual Screen) tersedia dalam varian armoured dan non-armoured untuk sistem SCADA, sensor industri, dan monitoring RTU.',
        specifications: {
          Type: 'OS (Overall Screen) / IS (Individual Screen)',
          Protection: 'Armoured / Non-armoured',
          Application: 'Signal Transmission',
        },
        technicalData: {
          Screen: 'Aluminium Foil / Copper Tape',
          Conductor: 'Tinned Copper',
        },
        features: [
          'Perlindungan terhadap interferensi sinyal (EMI)',
          'Akurasi transmisi data tinggi',
          'Tersedia opsi armoured untuk perlindungan mekanis',
        ],
        applications: ['SCADA systems', 'Sensor industri', 'RTU monitoring'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'control-cables',
        name: 'Control Cables',
        category: 'Kabel',
        subcategory: 'Instrumentation & Control',
        description: 'Multi-core untuk PLC, relay logic, dan motor starter.',
        fullDescription:
          'Kabel kontrol multi-core fleksibel untuk menghubungkan PLC, relay logic, motor starter, dan switching mesin.',
        specifications: {
          Core: 'Multi-core',
          Application: 'Control System',
          Flexibility: 'Flexible',
        },
        technicalData: {
          Voltage: '300/500V',
          Insulation: 'PVC',
        },
        features: [
          'Identifikasi core dengan nomor/warna',
          'Fleksibel untuk instalasi panel',
          'Tahan minyak (opsional)',
        ],
        applications: [
          'PLC wiring',
          'Relay logic',
          'Motor starter',
          'Machine switching',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },

      // E. KABEL KHUSUS (SPECIALTY CABLES)
      {
        id: 'marine-cables',
        name: 'Marine Cables',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description:
          'Untuk kapal dan platform offshore, tahan korosi air asin.',
        fullDescription:
          'Kabel khusus marine grade untuk aplikasi di kapal dan platform offshore, dirancang tahan terhadap korosi air asin ekstrem, minyak, dan getaran.',
        specifications: {
          Application: 'Marine & Offshore',
          Resistance: 'Salt water, Oil, Vibration',
          Standard: 'IEC 60092',
        },
        technicalData: {
          Sheath: 'SHF1 / SHF2 (Low Smoke)',
          FlameRetardant: 'IEC 60332',
        },
        features: [
          'Tahan korosi air laut',
          'Flame retardant & Low smoke',
          'Sertifikasi marine class',
        ],
        applications: ['Kapal laut', 'Platform offshore', 'Dermaga'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'fiber-optic-cables',
        name: 'Fiber Optic Cables',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description: 'Bandwidth unlimited hingga terabit/detik, jarak jauh.',
        fullDescription:
          'Kabel Fiber Optic untuk transmisi data kecepatan tinggi dengan bandwidth unlimited hingga terabit/detik. Mampu menjangkau jarak 80+ km tanpa repeater.',
        specifications: {
          Type: 'Single Mode / Multi Mode',
          Bandwidth: 'Unlimited (Terabit/s)',
          Distance: '80+ km without repeater',
        },
        technicalData: {
          Core: 'Glass Fiber',
          Protection: 'Aramid Yarn / Steel Armour',
        },
        features: [
          'Kecepatan transmisi cahaya',
          'Tidak terpengaruh interferensi elektromagnetik',
          'Kapasitas data sangat besar',
        ],
        applications: [
          'Backbone internet',
          'Jaringan 5G',
          'Data center interconnect',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'solar-pv-cable',
        name: 'Solar PV Cable',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description: 'Untuk sistem surya dengan rated voltage 1000-1500V DC.',
        fullDescription:
          'Kabel khusus panel surya (PV) dengan rated voltage 1000-1500V DC. Tahan sinar UV dan cuaca ekstrem hingga 25+ tahun penggunaan outdoor.',
        specifications: {
          Voltage: '1000-1500V DC',
          LifeSpan: '25+ years',
          Resistance: 'UV & Weather',
        },
        technicalData: {
          Insulation: 'Cross-linked Polyolefin',
          Conductor: 'Tinned Copper',
        },
        features: [
          'Tahan sinar UV ekstrem',
          'Tahan suhu tinggi',
          'Umur pakai panjang (25+ tahun)',
        ],
        applications: [
          'PLTS (Pembangkit Listrik Tenaga Surya)',
          'Rooftop solar panel',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'telecom-cable',
        name: 'Telecom Cable',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description:
          'Twisted pair copper atau fiber optic untuk jaringan telekomunikasi.',
        fullDescription:
          'Kabel telekomunikasi tembaga (Twisted Pair) atau Fiber Optic untuk infrastruktur jaringan suara dan data.',
        specifications: {
          Type: 'Twisted Pair / FO',
          Application: 'Telecommunication',
        },
        technicalData: {
          Pairs: 'Multi-pair',
        },
        features: [
          'Standar telekomunikasi',
          'Kualitas transmisi suara jernih',
          'Reliabilitas tinggi',
        ],
        applications: ['PSTN', 'PBX', 'Corporate network'],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'airfield-lighting-cable',
        name: 'Airfield Lighting Cable',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description: 'Untuk runway dan taxiway dengan sertifikasi FAA/ICAO.',
        fullDescription:
          'Kabel primer dan sekunder untuk sistem penerangan lapangan terbang (runway, taxiway, approach lighting). Memenuhi sertifikasi FAA/ICAO.',
        specifications: {
          Application: 'Airfield Lighting',
          Certification: 'FAA / ICAO',
          Voltage: '5 kV',
        },
        technicalData: {
          Insulation: 'XLPE / EPR',
          Sheath: 'PCP / CSP',
        },
        features: [
          'Tahan bahan kimia aviasi',
          'Reliabilitas tinggi untuk keselamatan penerbangan',
          'Tahan cuaca bandara',
        ],
        applications: [
          'Runway lighting',
          'Taxiway lighting',
          'Approach lighting',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'oil-gas-subsea-cable',
        name: 'Oil & Gas Subsea Cable',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description: 'Untuk well completion dan deepwater drilling.',
        fullDescription:
          'Kabel umbilical dan power subsea untuk aplikasi pengeboran lepas pantai dalam (deepwater drilling) dan well completion. Tahan tekanan ribuan PSI.',
        specifications: {
          Application: 'Subsea / Deepwater',
          Resistance: 'High Pressure (Thousands PSI)',
          Type: 'Umbilical / Power',
        },
        technicalData: {
          Armour: 'High Tensile Steel',
          WaterBlock: 'Yes',
        },
        features: [
          'Tahan tekanan hidrostatik ekstrem',
          'Desain custom sesuai kedalaman',
          'Integrasi power dan data',
        ],
        applications: [
          'Well completion',
          'Deepwater drilling',
          'Subsea control',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
      },
      {
        id: 'metal-corrugated-cable',
        name: 'Metal Corrugated Cable',
        category: 'Kabel',
        subcategory: 'Specialty Cables',
        description:
          'Fleksibilitas tinggi dengan perlindungan korosi maksimal.',
        fullDescription:
          'Kabel dengan pelindung metal bergelombang (corrugated metal armour) yang memberikan kombinasi fleksibilitas tinggi dan perlindungan mekanis/korosi maksimal.',
        specifications: {
          Protection: 'Corrugated Metal Armour',
          Flexibility: 'High',
          Application: 'Industrial / Hazardous',
        },
        technicalData: {
          Armour: 'Corrugated Aluminium / Copper / Steel',
        },
        features: [
          'Sangat fleksibel namun kuat',
          'Perlindungan 100% terhadap cairan dan gas',
          'Ringan dibanding steel wire armour',
        ],
        applications: [
          'Industri petrokimia',
          'Instalasi dengan radius belok sempit',
        ],
        image: '/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png',
        images: ['/PRODUCT/PLACEHOLDER/CABLE_PLACEHOLDER.png'],
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
