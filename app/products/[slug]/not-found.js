import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductNotFound() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <div className='mb-8'>
              <h1 className='text-9xl font-bold text-gray-300 mb-4'>404</h1>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Produk Tidak Ditemukan
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Maaf, produk yang Anda cari tidak tersedia atau telah dipindahkan.
              </p>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
              <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <DocumentTextIcon className='h-12 w-12 text-gray-400' />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Apa yang bisa Anda lakukan?
              </h3>
              <p className='text-gray-600 mb-6'>
                Coba telusuri katalog produk lengkap kami atau hubungi tim sales
                untuk bantuan mencari produk yang tepat untuk kebutuhan Anda.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/products'
                  className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors'
                >
                  <HomeIcon className='h-5 w-5 mr-2' />
                  Katalog Produk
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors'
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className='text-center'>
              <Link
                href='/'
                className='inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors'
              >
                <ArrowLeftIcon className='h-5 w-5 mr-2' />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}