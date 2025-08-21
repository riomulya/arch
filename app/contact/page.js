'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

// Metadata will be handled by layout.js for this page

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Alamat Kantor',
      details: [
        'JL WR SUPRATMAN GG SUKUN',
        'RT 003/RW 006, Cempaka Putih',
        'Ciputat Timur',
        'Tangerang Selatan, Banten 15141',
      ],
    },
    {
      icon: PhoneIcon,
      title: 'Telepon',
      details: ['+62 895-1402-4380'],
      action: 'tel:+6289514024380',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['ptarchcontinenttech@gmail.com'],
      action: 'mailto:ptarchcontinenttech@gmail.com',
    },
    {
      icon: ClockIcon,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 08:00 - 17:00',
        'Sabtu: 08:00 - 15:00',
        'Minggu: Tutup',
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleWhatsAppContact = () => {
    const message = `Halo, saya ${formData.name || '[Nama]'} dari ${
      formData.company || '[Perusahaan]'
    }. 

Saya tertarik dengan produk/layanan PT ARCH CONTINENT TECH.

${formData.message ? `Pesan: ${formData.message}` : ''}

Mohon informasi lebih lanjut. Terima kasih.`;

    window.open(
      `https://wa.me/6289514024380?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-white'>
            <motion.h1
              className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hubungi Kami
            </motion.h1>
            <motion.p
              className='text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Siap membantu mewujudkan proyek konstruksi Anda dengan solusi
              terbaik
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className='text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <info.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {info.title}
                </h3>
                <div className='space-y-1'>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className='text-gray-600'>
                      {info.action ? (
                        <a
                          href={info.action}
                          className='hover:text-blue-600 transition-colors'
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='bg-white p-8 rounded-2xl shadow-lg'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                        placeholder='Masukkan nama lengkap'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Nomor Telepon *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                        placeholder='08xxxxxxxxxx'
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Email *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                        placeholder='nama@email.com'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Perusahaan
                      </label>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                        placeholder='Nama perusahaan'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Subjek *
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors'
                    >
                      <option value=''>Pilih subjek</option>
                      <option value='product-inquiry'>Pertanyaan Produk</option>
                      <option value='quotation'>Permintaan Penawaran</option>
                      <option value='partnership'>Kemitraan</option>
                      <option value='technical-support'>Dukungan Teknis</option>
                      <option value='other'>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Pesan *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows='6'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical'
                      placeholder='Deskripsikan kebutuhan atau pertanyaan Anda...'
                    ></textarea>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='flex-1 btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      <PaperAirplaneIcon className='h-5 w-5' />
                      <span>
                        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                      </span>
                    </button>
                    <button
                      type='button'
                      onClick={handleWhatsAppContact}
                      className='flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2'
                    >
                      <ChatBubbleLeftRightIcon className='h-5 w-5' />
                      <span>Chat WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              {/* Google Maps Embed */}
              <div className='bg-white p-8 rounded-2xl shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Lokasi Kantor
                </h3>
                <div className='aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <div className='text-center'>
                      <MapPinIcon className='h-16 w-16 text-gray-400 mx-auto mb-2' />
                      <p className='text-gray-500'>
                        Google Maps akan ditampilkan di sini
                      </p>
                      <p className='text-sm text-gray-400 mt-2'>
                        JL WR SUPRATMAN GG SUKUN, Ciputat Timur
                        <br />
                        Tangerang Selatan, Banten 15141
                      </p>
                    </div>
                  </div>
                </div>
                <p className='text-gray-600 text-sm'>
                  Klik pada peta untuk membuka di Google Maps dan mendapatkan
                  petunjuk arah.
                </p>
              </div>

              {/* Quick Contact */}
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white'>
                <h3 className='text-2xl font-bold mb-4'>Butuh Respon Cepat?</h3>
                <p className='mb-6 leading-relaxed'>
                  Untuk pertanyaan mendesak atau konsultasi langsung, hubungi
                  kami melalui WhatsApp atau telepon.
                </p>
                <div className='space-y-4'>
                  <a
                    href='tel:+6289514024380'
                    className='flex items-center space-x-3 text-white hover:text-yellow-300 transition-colors'
                  >
                    <PhoneIcon className='h-6 w-6' />
                    <span className='text-lg font-medium'>
                      +62 895-1402-4380
                    </span>
                  </a>
                  <a
                    href={`https://wa.me/6289514024380?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20PT%20ARCH%20CONTINENT%20TECH`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-3 text-white hover:text-yellow-300 transition-colors'
                  >
                    <ChatBubbleLeftRightIcon className='h-6 w-6' />
                    <span className='text-lg font-medium'>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className='bg-white p-8 rounded-2xl shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Jam Operasional
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                    <span className='font-medium text-gray-900'>
                      Senin - Jumat
                    </span>
                    <span className='text-gray-600'>08:00 - 17:00</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                    <span className='font-medium text-gray-900'>Sabtu</span>
                    <span className='text-gray-600'>08:00 - 15:00</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='font-medium text-gray-900'>Minggu</span>
                    <span className='text-red-600 font-medium'>Tutup</span>
                  </div>
                </div>
                <p className='text-sm text-gray-500 mt-4'>
                  * Untuk emergency, hubungi kami melalui WhatsApp 24/7
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
              Pertanyaan Umum
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <div className='max-w-3xl mx-auto space-y-6'>
            {[
              {
                question: 'Berapa minimum order untuk Plastik Core Tray?',
                answer:
                  'Minimum order adalah 10 unit. Untuk pembelian dalam jumlah besar, kami memberikan harga khusus yang lebih kompetitif.',
              },
              {
                question: 'Apakah ada garansi untuk produk?',
                answer:
                  'Ya, semua produk kami dilengkapi dengan garansi 2 tahun untuk kerusakan manufaktur dan 1 tahun untuk kerusakan akibat pemakaian normal.',
              },
              {
                question: 'Berapa lama waktu pengiriman?',
                answer:
                  'Untuk area Jabodetabek 1-2 hari kerja, luar Jabodetabek 3-5 hari kerja. Pengiriman express tersedia dengan biaya tambahan.',
              },
              {
                question: 'Apakah bisa custom order sesuai spesifikasi?',
                answer:
                  'Ya, kami menerima custom order dengan minimum quantity tertentu. Silakan hubungi tim kami untuk konsultasi lebih lanjut.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className='bg-gray-50 p-6 rounded-xl'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className='font-bold text-gray-900 mb-2'>{faq.question}</h3>
                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
