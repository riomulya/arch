Tentu, saya akan membuatkan Dokumen Persyaratan Produk (PRD) dan Spesifikasi Teknis (Tech Specs) untuk Halaman Utama situs web Anda, dengan mengintegrasikan informasi mengenai **PT ARCH CONTINENT TECH**, produk **Plastik Core Tray**, dan kapabilitas manufaktur presisi dari mitra strategis (PT Hoshi Manufacturing Indonesia/HMI) yang terdapat dalam berkas yang Anda unggah.

Dokumen ini memposisikan Halaman Utama sebagai jembatan antara profil perusahaan B2B yang kredibel dan katalog produk Anda.

---

## **1\. Dokumen Persyaratan Produk (Product Requirements Document \- PRD) Halaman Utama**

| Atribut | Detail |
| :---- | :---- |
| **Judul Proyek** | Halaman Utama Situs Web E-commerce B2B dan Profil Perusahaan |
| **Perusahaan** | PT ARCH CONTINENT TECH |
| **Tujuan Utama** | Membangun kredibilitas perusahaan, menampilkan kategori produk utama, dan mengkonversi pengunjung B2B menjadi permintaan penawaran (RFQ). |
| **Pengguna Target** | Manajer Pengadaan, Insinyur Proyek, dan Pengambil Keputusan B2B dari sektor Otomotif, Telekomunikasi, Alat Kesehatan, dan Pertambangan. |

### **1.1 Visi & Sasaran**

* **Visi:** Menjadi sumber daya utama daring bagi klien B2B yang mencari solusi manufaktur presisi dan produk industri berkualitas tinggi di Indonesia.  
* **Sasaran Kinerja Utama (KPIs):**  
  1. Rasio Klik-Tayang (CTR) tombol **"Minta Penawaran Sekarang"** harus mencapai minimal X%.  
  2. Pengguna harus dapat menemukan kategori produk utama dalam waktu 5 detik.  
  3. Tingkat pentalan (*Bounce Rate*) halaman utama di bawah 30%.

### **1.2 Persyaratan Fungsional (Fitur Utama)**

Halaman Utama harus disusun dalam bagian-bagian berikut untuk mencapai tujuan bisnis:

#### **A. *Hero Section* (Bagian Atas)**

* **Fungsi:** Menarik perhatian dan mengkomunikasikan nilai perusahaan secara instan.  
* **Konten:**  
  * *Headline* yang kuat: Misal, **"Mitra Solusi Manufaktur Presisi B2B: Kualitas Konsisten, Pengiriman Andal."**  
  * *Sub-headline:* Menekankan produk unggulan: **Plastik Core Tray** dan **Komponen Injeksi Presisi**.  
  * **Tombol CTA Primer:** **"Minta Penawaran Sekarang"** (Mengarah ke halaman kontak/formulir RFQ).  
  * Menampilkan logo PT ARCH CONTINENT TECH dan PT Hoshi Manufacturing Indonesia (HMI) sebagai mitra strategis untuk kredibilitas.

#### **B. *Product Category Highlight***

* **Fungsi:** Menyediakan akses cepat ke berbagai produk yang ditawarkan.  
* **Konten:** Tiga hingga empat kartu interaktif (*card*) yang mewakili kategori produk inti, berdasarkan kapabilitas manufaktur HMI:  
  1. **Plastik Core Tray & Perlengkapan Pertambangan**  
  2. **Komponen Injeksi Plastik Presisi** (untuk Otomotif, Telekomunikasi, dll.)  
  3. Jasa Machining, Molding, & Reverse Engineering  
     Setiap kartu harus memiliki efek hover yang halus (Framer Motion).

#### **C. *Company Credibility/Value Proposition***

* **Fungsi:** Membangun kepercayaan dengan menampilkan keunggulan yang didukung data teknis.  
* **Konten:**  
  * Judul: **"Keunggulan Kompetitif Kami"**  
  * Tiga pilar utama (berdasarkan PRDbase.md):  
    * **Infrastruktur Skala Besar:** Kapasitas produksi massal, didukung 14 unit mesin injeksi hingga 800 ton.  
    * **Presisi Teknik Tinggi:** Jaminan akurasi reposisi hingga $\\pm 0.01$ mm.  
    * **Layanan Terintegrasi:** Menawarkan *Reverse Engineering* dan *Design Product*.

#### **D. Bagian *Call-to-Action* Sekunder**

* **Fungsi:** Mendorong pengguna untuk mempelajari lebih lanjut tentang proyek atau portofolio.  
* **Tombol CTA Sekunder:** **"Lihat Portofolio Lengkap"** (Mengarah ke halaman Katalog Produk).

---

## **2\. Spesifikasi Teknis (Tech Specs) Halaman Utama**

### **2.1 Tech Stack dan Arsitektur**

| Spesifikasi | Detail Teknis | Keterangan |
| :---- | :---- | :---- |
| **Framework** | Next.js (App Router) | Untuk performa, SEO, dan *Server-Side Rendering*. |
| **Styling** | Tailwind CSS | Untuk pengembangan UI yang cepat dan responsif. |
| **Animasi** | Framer Motion | Digunakan untuk transisi halaman dan efek *micro-interaction* pada *Hero Section* dan *Product Card*. |
| **Optimasi Gambar** | Komponen \<Image\> Next.js | Menggunakan format **WebP** sebagai prioritas untuk kecepatan. |
| **Sistem Konten** | Headless CMS/JSON Files | Untuk data produk dan konten perusahaan agar mudah diperbarui. |

### **2.2 Spesifikasi Front-end & Performa**

| Spesifikasi | Implementasi |
| :---- | :---- |
| **Responsif** | Desain harus *pixel-perfect* di semua ukuran layar (Mobile, Tablet, Desktop) menggunakan utilitas responsif Tailwind CSS. |
| **SEO Teknis** | **Metadata:** Judul dan Deskripsi Meta unik dan kaya kata kunci (*Plastik Core Tray, Manufaktur Presisi, B2B*). |
|  | **Struktur Data:** Implementasi JSON-LD Organization dan Product/Service untuk alamat dan detail perusahaan. |
| **Performa** | Penggunaan *Code Splitting* Next.js, dan pemuatan *lazy loading* pada bagian yang tidak berada di atas lipatan (*below the fold*) untuk mencapai skor Lighthouse \>90. |
| **Aksesibilitas (A11Y)** | Memastikan kontras warna yang memadai dan navigasi keyboard yang berfungsi penuh (terutama pada tombol dan *card*). |

### **2.3 Simulasi Struktur Data (Untuk Bagian Produk)**

Data yang ditampilkan di bagian **Product Category Highlight** harus dimuat secara dinamis, menggunakan struktur data sederhana seperti berikut:

JavaScript

1. const featuredProducts \= \[  
2.   {  
3.     "id": "plastic-core-tray",  
4.     "title": "Plastik Core Tray & Perlengkapan Pertambangan",  
5.     "slug": "/products/mining-core-tray",  
6.     "image\_path": "/images/core-tray-webp", // Menggunakan format WebP  
7.     "description": "Solusi manajemen inti bor yang presisi, tahan benturan, dan ringan untuk efisiensi lapangan.",  
8.     "icon": "⛏️"  
9.   },  
10.   {  
11.     "id": "precision-injection",  
12.     "title": "Komponen Injeksi Plastik Presisi B2B",  
13.     "slug": "/products/precision-components",  
14.     "image\_path": "/images/injection-parts-webp",  
15.     "description": "Memproduksi komponen otomotif, telekomunikasi, dan alat kesehatan dengan akurasi tinggi (hingga ±0.01 mm).",  
16.     "icon": "⚙️"  
17.   },  
18.   // ... kategori lainnya  
19. \];

### **2.4 Integrasi Konten Statis**

Halaman Utama akan menggunakan konten statis dari file yang Anda sediakan:

* **Alamat Kontak:** Jl. WR SUPRATMAN GG SUKUN, RT 003/RW 006, Cempaka Putih, Ciputat Timur, Tangerang Selatan, Banten 15141\. (Dari base.md)  
* **Nomor Telepon:** \+6289514024380. (Dari base.md)  
20. 