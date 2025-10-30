'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MeshGradient } from '@paper-design/shaders-react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Produk', href: '/products' },
    { name: 'Layanan', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/contact' },
    { name: 'Legalitas', href: '/legal' },
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 lg:h-20'>
          {/* Logo */}
          <motion.div
            className='flex-shrink-0'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-16 h-16 bg-gradient-to-r  rounded-lg flex items-center justify-center'>
                <Image
                  src='/logo.png'
                  width={500}
                  height={500}
                  alt='PT ARCH CONTINENT TECH'
                />
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-lg font-bold text-gray-900'>
                  PT ARCH CONTINENT TECH
                </h1>
                <p className='text-xs text-gray-600'>
                  Solusi Konstruksi & Teknis
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group'
                >
                  {item.name}
                  <span className='absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cart and Mobile menu button */}
          <div className='flex items-center space-x-4'>
            {/* Shopping Cart */}
            <Link
              href='/cart'
              className='relative p-2 text-black hover:text-blue-600 transition-colors'
            >
              <ShoppingCartIcon className='h-6 w-6' />
              {cartItems > 0 && (
                <motion.span
                  className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {cartItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-black hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300'
              >
                {isMenuOpen ? (
                  <XMarkIcon className='h-6 w-6' />
                ) : (
                  <Bars3Icon className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-white-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
