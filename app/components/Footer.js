'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Produk', href: '/products' },
    { name: 'Layanan', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/contact' },
  ];

  const services = [
    'Perdagangan Besar Bahan Konstruksi',
    'Distribusi Perlengkapan Teknis',
    'Jasa Agen & Komisioner',
    'Konsultasi Real Estat',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ACT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PT ARCH CONTINENT TECH</h3>
                <p className="text-gray-400 text-sm">Solusi Konstruksi & Teknis Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Perusahaan terpercaya yang bergerak di bidang perdagangan besar bahan konstruksi, 
              perlengkapan teknis, dan jasa real estat. Didirikan berdasarkan Akta Notaris No. 25 
              tanggal 03 Juli 2025.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  JL WR SUPRATMAN GG SUKUN, RT 003/RW 006<br />
                  Cempaka Putih, Ciputat Timur<br />
                  Tangerang Selatan, Banten 15141
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+6289514024380" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +62 895-1402-4380
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:ptarchcontinenttech@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ptarchcontinenttech@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/ptarchcontinenttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white text-xs font-bold">IG</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/ptarchcontinenttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white text-xs font-bold">LI</span>
                </a>
                <a
                  href={`https://wa.me/6289514024380?text=Halo,%20saya%20tertarik%20dengan%20produk%20PT%20ARCH%20CONTINENT%20TECH`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white text-xs font-bold">WA</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PT ARCH CONTINENT TECH. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                Legalitas
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <ChevronUpIcon className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
