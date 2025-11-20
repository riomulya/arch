'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

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

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/archcontinenttech/',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
      gradient: 'from-pink-500 via-purple-500 to-pink-600',
      hoverGlow: 'hover:shadow-lg hover:shadow-pink-500/50',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ptarchcontinenttech',
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-700',
      hoverGlow: 'hover:shadow-lg hover:shadow-blue-500/50',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/6289514024380?text=Halo,%20saya%20tertarik%20dengan%20produk%20PT%20ARCH%20CONTINENT%20TECH`,
      icon: (
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
      hoverGlow: 'hover:shadow-lg hover:shadow-green-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white overflow-hidden'>
      {/* Decorative Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className='lg:col-span-2'>
            <div className='flex items-start space-x-4 mb-6'>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 p-2 flex-shrink-0'
              >
                <div className='relative w-full h-full bg-transparent backdrop-blur-sm rounded-xl flex items-center justify-center'>
                  <Image
                    src='/logo.png'
                    width={64}
                    height={64}
                    alt='PT ARCH CONTINENT TECH Logo'
                    className='object-contain'
                  />
                </div>
              </motion.div>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                  PT ARCH CONTINENT TECH
                </h3>
                <p className='text-gray-400 text-sm font-medium'>
                  Solusi Konstruksi & Teknis Terpercaya
                </p>
              </div>
            </div>

            <p className='text-gray-300 mb-8 leading-relaxed text-base max-w-lg'>
              Perusahaan terpercaya yang bergerak di bidang perdagangan besar
              bahan konstruksi, perlengkapan teknis, dan jasa real estate dengan
              komitmen memberikan solusi terbaik untuk kebutuhan Anda.
            </p>

            {/* Contact Info */}
            <div className='space-y-4'>
              <motion.a
                href='https://maps.google.com/?q=JL+WR+SUPRATMAN+GG+SUKUN,+RT+003/RW+006,+Cempaka+Putih,+Ciputat+Timur,+Tangerang+Selatan,+Banten+15141'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ x: 4 }}
                className='flex items-start space-x-4 group'
              >
                <div className='mt-1 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors'>
                  <MapPinIcon className='h-5 w-5 text-blue-400 shrink-0' />
                </div>
                <p className='text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors'>
                  JL WR SUPRATMAN GG SUKUN, RT 003/RW 006
                  <br />
                  Cempaka Putih, Ciputat Timur
                  <br />
                  Tangerang Selatan, Banten 15141
                </p>
              </motion.a>

              <motion.a
                href='tel:+6289514024380'
                whileHover={{ x: 4 }}
                className='flex items-center space-x-4 group'
              >
                <div className='p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors'>
                  <PhoneIcon className='h-5 w-5 text-green-400 shrink-0' />
                </div>
                <span className='text-gray-300 group-hover:text-white transition-colors font-medium'>
                  +62 895-1402-4380
                </span>
              </motion.a>

              <motion.a
                href='mailto:ptarchcontinenttech@gmail.com'
                whileHover={{ x: 4 }}
                className='flex items-center space-x-4 group'
              >
                <div className='p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors'>
                  <EnvelopeIcon className='h-5 w-5 text-purple-400 shrink-0' />
                </div>
                <span className='text-gray-300 group-hover:text-white transition-colors font-medium break-all'>
                  ptarchcontinenttech@gmail.com
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold mb-6 text-white relative inline-block'>
              Menu Utama
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500'></span>
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className='group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium'
                  >
                    <span className='w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-0 group-hover:mr-2 transition-all duration-300'></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services & Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-bold mb-6 text-white relative inline-block'>
              Layanan Kami
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500'></span>
            </h3>
            <ul className='space-y-3 mb-8'>
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className='flex items-start'
                >
                  <span className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 shrink-0'></span>
                  <span className='text-gray-300 text-sm leading-relaxed'>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className='text-sm font-bold mb-4 text-gray-200'>
                Ikuti Kami
              </h4>
              <div className='flex space-x-3'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-11 h-11 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white ${social.hoverGlow} transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.icon}
                    </motion.div>
                    <span className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-gray-800/50 mt-16 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {new Date().getFullYear()} PT ARCH CONTINENT TECH. All rights
              reserved.
            </p>
            <div className='flex items-center space-x-6'>
              <Link
                href='/legal'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-300 font-medium relative group'
              >
                Legalitas
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
              <Link
                href='/privacy'
                className='text-gray-400 hover:text-white text-sm transition-colors duration-300 font-medium relative group'
              >
                Kebijakan Privasi
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group'
                aria-label='Scroll to top'
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ChevronUpIcon className='h-5 w-5 text-white' />
                </motion.div>
                <span className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300'></span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
