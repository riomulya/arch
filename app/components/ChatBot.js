'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Website knowledge base for AI
const websiteKnowledge = `
PT ARCH CONTINENT TECH - Company Information:
- Website: Company website
- Email: info@archcontinent.tech
- Phone: +62 852-1544-2024
- WhatsApp: +62 852-1544-2024
- Address: [Company Address]

PRODUCTS:
1. PLASTIK CORE TRAY & PERLENGKAPAN PERTAMBANGAN
   - Category: Mining Equipment
   - Features: Tahan benturan dan impact, Material berkualitas tinggi, Ringan dan mudah dibawa, Standar industri pertambangan
   - URL: /products/mining-core-tray
   - Price: Hubungi untuk penawaran

2. KOMPONEN INJEKSI PLASTIK PRESISI
   - Category: Precision Components
   - Applications: Otomotif, Telekomunikasi, Alat kesehatan, Elektronik
   - Features: Akurasi hingga ±0.01 mm, Berbagai ukuran dan spesifikasi, Material berkualitas premium, Sertifikasi ISO standard
   - URL: /products/precision-components
   - Price: Hubungi untuk penawaran

3. JASA MACHINING, MOLDING & REVERSE ENGINEERING
   - Category: Services
   - Services: CNC Machining, Injection Molding, Reverse Engineering, Product Design, Prototipe Cepat, Produksi Massal
   - Capabilities: Desain produk 3D, Pembuatan mould/cetakan, Produksi massal, Quality control
   - URL: /services/manufacturing
   - Price: Hubungi untuk konsultasi

COMPANY CAPACITY:
- Injection Machines: 14 units
- Maximum Tonage: 800 tons
- Precision: ±0.01 mm
- Partnership: PT Hoshi Manufacturing Indonesia (HMI)
- Services: End-to-End Solution

COMPANY ADVANTAGES:
- Produk berkualitas dengan QC ketat
- Harga kompetitif
- Layanan terpercaya
- Legalitas lengkap (Akta Notaris, izin usaha)
- Didukung PT Hoshi Manufacturing Indonesia (HMI)

RESPONSE GUIDELINES:
- Be friendly, professional, and helpful
- Use Indonesian language primarily
- For product inquiries, provide detailed information
- Always offer to connect to WhatsApp for direct consultation
- Include relevant emojis to make conversation engaging
- Format responses with proper markdown for readability
`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: `Halo! 👋 Saya adalah asisten AI PT ARCH CONTINENT TECH.

Saya siap membantu Anda menemukan informasi tentang:
- **Plastik Core Tray** & perlengkapan pertambangan
- **Komponen injeksi plastik presisi**
- **Jasa machining, molding & reverse engineering**
- **Informasi harga dan penawaran**
- **Kontak dan konsultasi**

Apa yang bisa saya bantu hari ini?`,
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI response with streaming effect
  const generateAIResponse = useCallback(async (userMessage) => {
    const input = userMessage.toLowerCase();

    // Create a smart response based on the input
    let response = '';

    // Product-specific responses
    if (input.includes('core tray') || input.includes('pertambangan') || input.includes('bor')) {
      response = `## **Plastik Core Tray & Perlengkapan Pertambangan**

Solusi manajemen **inti bor yang presisi**, tahan benturan, dan ringan untuk efisiensi lapangan Anda.

### **Fitur Utama:**
- **Tahan benturan dan impact** - Material berkualitas tinggi
- **Standar industri pertambangan** - Memenuhi spesifikasi internasional
- **Ringan dan mudah dibawa** - Efisiensi operasional lapangan
- **Presisi tinggi** - Akurasi dalam menyimpan core sample

### **Harga:**
Hubungi tim kami untuk penawaran terbaik yang disesuaikan dengan kebutuhan Anda.

---
Butuh informasi lebih detail? **[Lihat produk lengkap](/products/mining-core-tray)** atau chat langsung dengan tim teknis kami via WhatsApp! 📱`;
    }
    else if (input.includes('injeksi') || input.includes('presisi') || input.includes('komponen')) {
      response = `## ⚙️ Komponen Injeksi Plastik Presisi

Memproduksi komponen untuk berbagai industri dengan **akurasi tinggi hingga ±0.01 mm**.

### 🏭 Aplikasi Industri:
- **Otomotif** - Komponen interior & eksterior
- **Telekomunikasi** - Part elektronik & casing
- **Alat kesehatan** - Medical device components
- **Elektronik** - Precision parts

### ✨ Keunggulan:
- **Akurasi ultra-presisi** (±0.01 mm)
- **Sertifikasi ISO standard**
- **Berbagai material & ukuran**
- **Quality control ketat**

### **Harga:**
Disesuaikan dengan spesifikasi dan volume order. Konsultasikan kebutuhan Anda!

---
**Ingin konsultasi teknis?** Tim ahli kami siap membantu mencari solusi terbaik untuk Anda!`;
    }
    else if (input.includes('jasa') || input.includes('machining') || input.includes('molding') || input.includes('reverse')) {
      response = `## 🏭 Jasa Manufaktur Terintegrasi

Layanan **end-to-end solution** dari konsep hingga produk jadi dengan teknologi terkini.

### 🛠️ Layanan Kami:
1. **CNC Machining Presisi** - Proses cutting dengan akurasi tinggi
2. **Injection Molding** - Produksi massal plastik
3. **Reverse Engineering** - Analisis dan duplikasi produk
4. **Product Design** - Desain 3D dan prototipe
5. **Prototipe Cepat** - Fast prototyping untuk testing
6. **Quality Control** - Inspeksi dan pengujian produk

### 💪 Kapasitas Produksi:
- **14 unit mesin injeksi** hingga 800 ton
- **Presisi ±0.01 mm**
- **Produksi massal & custom order**

### ⏰ Lama Pengerjaan:
- Prototipe: 3-7 hari kerja
- Produksi: Disesuaikan volume & kompleksitas

---
**Butuh estimasi biaya?** Konsultasi gratis dengan tim engineer kami! 📱`;
    }
    else if (input.includes('harga') || input.includes('biaya') || input.includes('penawaran') || input.includes('cost')) {
      response = `## 💰 Informasi Harga & Penawaran

Untuk memberikan harga yang **akurat dan kompetitif**, tim kami perlu memahami:

### 📋 Detail yang Dibutuhkan:
- 🔢 Jumlah/kuantitas order
- 📐 Spesifikasi teknis (ukuran, material, toleransi)
- 📅 Waktu pengiriman
- 🎯 Keperluan khusus (certification, packaging)

### 🏆 Keunggulan Harga Kami:
- 💎 **Kualitas premium** dengan harga bersaing
- 📊 **Volume discount** untuk order besar
- 🚚 **Free delivery** untuk area tertentu
- 🔧 **After-sales support** penuh

### 📞 Cara Mendapatkan Penawaran:
1. Chat dengan saya untuk konsultasi awal
2. Tim kami akan menghubungi Anda dalam 1x24 jam
3. Dapatkan quotation detail dalam 2 hari kerja

---
**Mau penawaran cepat?** Klik tombol WhatsApp di bawah untuk terhubung langsung dengan sales team! 🚀`;
    }
    else if (input.includes('kontak') || input.includes('alamat') || input.includes('telepon') || input.includes('email')) {
      response = `## 📞 Hubungi Kami

Kami siap membantu kebutuhan manufaktur Anda dengan **respons cepat 24/7**.

### 🏢 Alamat Kantor:
[Alamat lengkap perusahaan Anda]

### 📱 Kontak Lengkap:
- 📧 **Email:** info@archcontinent.tech
- 📞 **Telepon:** +62 852-1544-2024
- 💬 **WhatsApp:** +62 852-1544-2024 (Fastest Response)
- 🌐 **Website:** [Website URL]

### ⏰ Jam Operasional:
- Senin - Jumat: 08:00 - 17:00 WIB
- Sabtu: 08:00 - 15:00 WIB
- Minggu & Hari Libur: Emergency Only

### 🚀 Cara Tercepat Menghubungi:
1. **WhatsApp** - Response dalam 5 menit
2. **Phone Call** - langsung ke tim sales
3. **Email** - Response dalam 2 jam

---
**Butuh bantuan sekarang?** Klik tombol WhatsApp untuk chat langsung dengan kami! 💬`;
    }
    else if (input.includes('tentang') || input.includes('profil') || input.includes('perusahaan') || input.includes('about')) {
      response = `## 🏢 PT ARCH CONTINENT TECH

**Mitra Solusi Manufaktur Presisi** Indonesia yang terpercaya sejak [tahun berdiri].

### 🎯 Visi & Misi:
Menjadi leader dalam solusi manufaktur presisi dengan **kualitas konsisten dan pengiriman andal**.

### 💪 Keunggulan Kompetitif:
- ✅ **Produk berkualitas** - QC ketat & standar industri
- 💰 **Harga kompetitif** - Kualitas premium dengan harga terbaik
- 🤝 **Layanan terpercaya** - Pengalaman bertahun-tahun
- 📜 **Legalitas lengkap** - Akta Notaris & izin usaha resmi
- 🤖 **Didukung HMI** - PT Hoshi Manufacturing Indonesia

### 🏭 Kapasitas Produksi:
- 🔧 **14 unit mesin injeksi** (hingga 800 ton)
- 📏 **Presisi ±0.01 mm** - Akurasi tertinggi di kelasnya
- 🎯 **End-to-End Solution** - Dari desain hingga produk
- 📊 **Skala besar** - Kapasitas produksi massal

### 🏆 Sertifikasi:
- ISO 9001:2015
- Industrial Safety Standard
- Quality Management System

---
**Tertarik bekerja sama?** Mari diskusikan kebutuhan proyek Anda! 📱`;
    }
    else if (input.includes('terima kasih') || input.includes('thanks') || input.includes('makasih')) {
      response = `## 😊 Senang Bisa Membantu!

Terima kasih telah menghubungi PT ARCH CONTINENT TECH.

### 🎯 Komitmen Kami:
- 💎 **Kualitas terbaik** untuk setiap produk
- 🚀 **Pengiriman tepat waktu** untuk project Anda
- 🤝 **Layanan penuh** dari awal hingga selesai
- 📞 **Support 24/7** untuk semua pertanyaan

### 📱 Butuh Bantuan Lagi?
Jangan ragu menghubungi kami kapan saja. Tim ahli kami selalu siap membantu!

**PT ARCH CONTINENT TECH - Mitra Solusi Manufaktur Presisi Indonesia**

Salam hangat,
Tim ARCH CONTINENT TECH ✨`;
    }
    else {
      // Default intelligent response
      response = `## 🤔 Saya Siap Membantu!

Saya mengerti Anda mencari informasi tentang PT ARCH CONTINENT TECH.

### 💡 Berikut yang bisa saya bantu:
- 🔍 **Cari produk** - Core Tray, Komponen Presisi, dll
- 🛠️ **Info layanan** - Machining, Molding, Reverse Engineering
- 💰 **Request penawaran** - Konsultasi harga & spesifikasi
- 📞 **Info kontak** - Hubungi tim sales & teknis
- 🏢 **Profil perusahaan** - Tentang kami & kapasitas

### 🎯 Coba tanyakan:
- "Apa saja produk khusus pertambangan?"
- "Berapa akurasi komponen presisi?"
- "Bagaimana cara order custom produk?"
- "Apakah bisa konsultasi gratis?"

### 📱 atau klik tombol WhatsApp untuk bantuan langsung!

Apa yang ingin Anda ketahui lebih detail? 😊`;
    }

    // Add WhatsApp CTA to all responses
    response += `\n\n---\n\n<div style="display: inline-block; margin-top: 16px;">
  <a href="https://wa.me/6285215442024?text=Halo%20PT%20ARCH%20CONTINENT%20TECH,%20saya%20tertarik%20dengan%20produk%20Anda"
     target="_blank"
     style="display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: white; padding: 12px 20px; border-radius: 25px; text-decoration: none; font-weight: 500; transition: all 0.3s;">
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    Chat via WhatsApp
  </a>
</div>`;

    return response;
  }, []);

  // Simulate streaming effect
  const simulateStreaming = useCallback(async (text) => {
    const words = text.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      setCurrentTypingMessage(currentText);
      await new Promise(resolve => setTimeout(resolve, 30)); // Adjust typing speed
    }

    return currentText;
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate and stream AI response
    const response = await generateAIResponse(inputValue);
    const streamedResponse = await simulateStreaming(response);

    const botMessage = {
      id: Date.now() + 1,
      content: streamedResponse,
      role: 'assistant',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setCurrentTypingMessage('');
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  // Markdown rendering function
  const renderMarkdown = (text) => {
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2 text-gray-900">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-4 mb-3 text-blue-600">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-3 text-gray-900">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="text-gray-900">$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-900">')
      .replace(/^\n/g, '<p class="mb-4 text-gray-900">')
      .replace(/^- (.*$)/gim, '<li class="ml-4 text-gray-900">• $1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc text-gray-900">$1</ul>')
      .replace(/(\d+\. )(.*)/g, '<li class="ml-4 text-gray-900">$1$2</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-blue-600 underline hover:text-blue-700 font-medium">$1</a>')
      .replace(/<div style="[^>]*">([\s\S]*?)<\/div>/g, '$1') // Preserve WhatsApp button HTML
      .replace(/<a href="https:\/\/wa\.me[^>]*>[\s\S]*?<\/a>/g, match => match) // Preserve WhatsApp link
      + '</p>';
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className='fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl z-40 group'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ChatBubbleLeftRightIcon className='h-5 w-5 sm:h-6 sm:w-6' />
        <motion.span
          className='absolute left-full ml-2 sm:ml-3 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Ada yang bisa saya bantu?
        </motion.span>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/50 z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className='fixed bottom-20 sm:bottom-24 left-4 right-4 sm:left-6 sm:right-auto md:w-full md:max-w-md lg:max-w-lg xl:max-w-md h-[75vh] sm:h-[85vh] md:h-[70vh] lg:h-[650px] xl:h-[600px] max-h-[700px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col'
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            >
              {/* Header */}
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between'>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <SparklesIcon className='h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-sm sm:text-base'>AI Assistant</h3>
                    <p className='text-xs opacity-90 hidden sm:block'>Online - Selalu siap membantu!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-1 hover:bg-white/20 rounded-lg transition-colors'
                >
                  <XMarkIcon className='h-5 w-5' />
                </button>
              </div>

              {/* Messages */}
              <div className='flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50'>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`flex items-end space-x-1.5 sm:space-x-2 max-w-[75%] sm:max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                          : 'bg-gradient-to-r from-green-500 to-teal-500'
                      }`}>
                        {message.role === 'user' ? (
                          <UserIcon className='h-3.5 w-3.5 sm:h-5 sm:w-5 text-white' />
                        ) : (
                          <SparklesIcon className='h-3.5 w-3.5 sm:h-5 sm:w-5 text-white' />
                        )}
                      </div>
                      <div
                        className={`p-2 sm:p-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-white text-gray-900 shadow-md'
                        }`}
                      >
                        <div
                          className='text-xs sm:text-sm leading-relaxed'
                          dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    className='flex justify-start'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className='flex items-end space-x-1.5 sm:space-x-2'>
                      <div className='w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center'>
                        <SparklesIcon className='h-3.5 w-3.5 sm:h-5 sm:w-5 text-white' />
                      </div>
                      <div className='bg-white text-gray-900 p-2 sm:p-3 rounded-2xl shadow-md'>
                        <div className='flex items-center space-x-1'>
                          <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce' />
                          <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }} />
                          <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }} />
                        </div>
                        {currentTypingMessage && (
                          <div
                            className='text-xs sm:text-sm leading-relaxed mt-2'
                            dangerouslySetInnerHTML={{ __html: renderMarkdown(currentTypingMessage) }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions */}
              <div className='bg-white border-t border-gray-200 p-2 sm:p-3 text-black'>
                <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3'>
                  {['Core Tray', 'Komponen Presisi', 'Minta Penawaran', 'Kontak Kami'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className='text-[10px] sm:text-xs bg-gray-100 hover:bg-gray-200 px-2 sm:px-3 py-1 rounded-full transition-colors'
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className='flex space-x-1.5 sm:space-x-2'>
                  <input
                    ref={inputRef}
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder='Ketik pertanyaan Anda...'
                    className='flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-500 text-sm'
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isTyping}
                    className='bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 sm:p-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <PaperAirplaneIcon className='h-4 w-4 sm:h-5 sm:w-5' />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}