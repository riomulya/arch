# PT ARCH CONTINENT TECH - Company Website

Sebuah website company profile dan e-commerce yang profesional untuk PT ARCH CONTINENT TECH, dibangun dengan Next.js 15, Tailwind CSS v4, dan Framer Motion.

## 🚀 Fitur Utama

### Company Profile

- **Homepage** dengan hero section yang menarik
- **About Us** dengan informasi lengkap perusahaan dan legalitas
- **Services** berdasarkan KBLI 2020
- **Legal** dengan informasi Akta Notaris dan status hukum
- **Contact** dengan form dan informasi kontak

### E-commerce

- **Product Page** untuk Plastik Core Tray
- **Shopping Cart** dengan fungsi add/remove items
- **Checkout** terintegrasi dengan WhatsApp
- **Product Gallery** dan spesifikasi detail

### SEO & Performance

- **SEO Optimized** dengan meta tags dan structured data
- **Sitemap.xml** dan robots.txt otomatis
- **Fast Loading** dengan optimasi Next.js
- **Responsive Design** untuk semua device
- **Framer Motion** untuk animasi yang smooth

### Blog System

- **Blog Page** untuk artikel SEO
- **Category System** dan tag management
- **Newsletter Subscription** placeholder

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Language**: JavaScript (React)

## 📦 Instalasi

1. **Clone repository**

```bash
git clone <repository-url>
cd arch
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
npm start
```

## 🏗 Struktur Project

```
arch/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.js       # Navigation header
│   │   └── Footer.js       # Footer component
│   ├── about/              # About page
│   ├── products/           # Products page
│   ├── services/           # Services page
│   ├── contact/            # Contact page
│   ├── legal/              # Legal information
│   ├── blog/               # Blog system
│   ├── cart/               # Shopping cart
│   ├── sitemap.xml/        # Dynamic sitemap
│   ├── robots.txt/         # SEO robots file
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── public/                 # Static assets
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Kustomisasi

### Colors & Branding

Primary colors sudah diset dalam Tailwind config:

- **Primary**: Blue (600-900)
- **Secondary**: Purple (600)
- **Accent**: Yellow/Orange untuk CTA

### Content Management

Untuk mengupdate konten:

1. **Company Info**: Edit di `app/layout.js` untuk SEO metadata
2. **Product Info**: Edit di `app/products/page.js`
3. **Contact Info**: Edit di `app/contact/page.js`
4. **Blog Posts**: Edit array di `app/blog/page.js`

### Images

Tambahkan gambar ke folder `public/` dan update path di komponen terkait.

## 🚀 Deployment

### Vercel (Recommended)

1. Push ke GitHub repository
2. Connect ke Vercel
3. Deploy otomatis

### Manual Deployment

```bash
npm run build
# Upload folder .next dan public ke hosting
```

## 📱 Fitur Responsif

Website ini fully responsive dengan breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Environment Variables

Buat file `.env.local` untuk konfigurasi:

```env
NEXT_PUBLIC_SITE_URL=https://archcontinenttech.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6289514024380
NEXT_PUBLIC_EMAIL=ptarchcontinenttech@gmail.com
```

## 📞 Integrasi WhatsApp

WhatsApp integration sudah disetup untuk:

- **Product Inquiry** dari halaman produk
- **Contact Form** alternatif
- **Cart Checkout** untuk pembelian langsung

## 🎯 SEO Features

- **Meta Tags** untuk setiap halaman
- **Open Graph** tags untuk social media
- **Structured Data** (JSON-LD) untuk Google
- **Sitemap.xml** dinamis
- **Robots.txt** untuk crawler
- **Fast loading** dengan Next.js optimizations

## 🔄 Future Enhancements

Fitur yang bisa ditambahkan:

- [ ] CMS Integration (Contentful/Strapi)
- [ ] Payment Gateway (Midtrans/Xendit)
- [ ] User Authentication
- [ ] Product Reviews System
- [ ] Multi-language Support
- [ ] Analytics Integration (Google Analytics)
- [ ] Live Chat System

## 📄 License

© 2025 PT ARCH CONTINENT TECH. All rights reserved.

## 👥 Support

Untuk support teknis atau pertanyaan:

- **Email**: ptarchcontinenttech@gmail.com
- **WhatsApp**: +62 895-1402-4380

---

**Built with ❤️ by AI Assistant for PT ARCH CONTINENT TECH**
