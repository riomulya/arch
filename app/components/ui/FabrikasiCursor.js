'use client';
import React, { useEffect, useRef } from 'react';

// Array berisi data ikon alat fabrikasi.
// Ganti URL gambar dengan ikon yang Anda miliki untuk hasil terbaik.
const icons = [
  {
    name: '3D Printer',
    src: 'https://cdn-icons-png.flaticon.com/512/3202/3202935.png',
  },
  {
    name: 'CNC Machine',
    src: 'https://cdn-icons-png.flaticon.com/512/2992/2992529.png',
  },
  {
    name: 'Laser Cutter',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMIYyDWxWuql5cRmTu0Db_KHoAHKrjiBhIQ&s',
  },
  {
    name: 'Soldering Iron',
    src: 'https://cdn-icons-png.flaticon.com/512/1998/1998636.png',
  },
  {
    name: 'Drill',
    src: 'https://cdn-icons-png.flaticon.com/512/2992/2992517.png',
  },
  {
    name: 'Wrench',
    src: 'https://cdn-icons-png.flaticon.com/512/189/189254.png',
  },
];

/**
 * Komponen kursor khusus yang menampilkan ikon alat fabrikasi
 * yang mengikuti pergerakan mouse dan memudar.
 */
const FabrikasiCursor = () => {
  // Ref untuk menyimpan elemen canvas
  const canvasRef = useRef(null);
  // Ref untuk menyimpan array partikel yang sedang aktif
  const particlesRef = useRef([]);
  // Ref untuk menyimpan gambar-gambar yang sudah dimuat
  const alatImagesRef = useRef([]);

  useEffect(() => {
    // Fungsi untuk memuat semua gambar secara asinkron sebelum animasi dimulai
    const loadAlatImages = async () => {
      const imagePromises = icons.map(({ name, src }) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve({ name, src, image: img });
        });
      });
      alatImagesRef.current = await Promise.all(imagePromises);
    };

    // Memulai proses pemuatan gambar dan inisialisasi canvas
    loadAlatImages().then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Mengatur ukuran canvas agar mengisi seluruh jendela
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      handleResize();
      window.addEventListener('resize', handleResize);

      const particles = particlesRef.current;

      // Loop animasi utama
      const animate = () => {
        // Membersihkan canvas pada setiap frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Memproses setiap partikel
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.update(); // Memperbarui posisi dan transparansi partikel
          p.draw(ctx); // Menggambar partikel ke canvas

          // Menghapus partikel dari array jika sudah tidak terlihat (alpha <= 0)
          if (p.alpha <= 0) {
            particles.splice(i, 1);
          }
        }
        requestAnimationFrame(animate);
      };

      animate();

      // Event handler untuk pergerakan mouse
      const onMove = (e) => {
        // Memilih ikon alat secara acak dari yang sudah dimuat
        const randomAlat =
          alatImagesRef.current[
            Math.floor(Math.random() * alatImagesRef.current.length)
          ];

        // Menentukan ukuran partikel secara acak untuk variasi visual
        const size = 22 + Math.random() * 8;

        // Membuat objek partikel baru
        const particle = {
          x: e.clientX,
          y: e.clientY,
          alpha: 1, // Transparansi awal
          image: randomAlat.image,
          size: size,
          // Fungsi untuk memperbarui keadaan partikel pada setiap frame
          update() {
            this.y -= 0.4; // Gerakan ke atas
            this.alpha -= 0.02; // Pengurangan transparansi (efek memudar)
          },
          // Fungsi untuk menggambar partikel ke canvas
          draw(ctx) {
            ctx.save(); // Menyimpan keadaan canvas saat ini
            ctx.globalAlpha = this.alpha; // Mengatur transparansi
            ctx.drawImage(
              this.image,
              this.x - this.size / 2, // Posisi x agar tengah
              this.y - this.size / 2, // Posisi y agar tengah
              this.size,
              this.size
            );
            ctx.restore(); // Mengembalikan keadaan canvas
          },
        };

        // Menambahkan partikel baru ke array
        particles.push(particle);
      };

      // Menambahkan event listener ke window
      window.addEventListener('mousemove', onMove);

      // Cleanup: menghapus event listener saat komponen tidak lagi digunakan (unmount)
      return () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []); // useEffect dijalankan sekali saat komponen dimount

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'
      style={{ pointerEvents: 'none' }} // Memastikan canvas tidak menghalangi interaksi elemen di bawahnya
    />
  );
};

export default FabrikasiCursor;
