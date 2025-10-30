'use client';

import { PulsingBorder } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';

export default function PulsingCircle() {
  return (
    <a
      href='https://wa.me/6285215442024'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-8 right-8 z-30 cursor-pointer group'
      aria-label='Chat WhatsApp: +62 852-1544-2024'
    >
      <div className='relative w-20 h-20 flex items-center justify-center'>
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={[
            '#BEECFF',
            '#E77EDC',
            '#FF4C3E',
            '#00FF88',
            '#FFD700',
            '#FF6B35',
            '#8A2BE2',
          ]}
          // color-back='#00000000'
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spots-per-color={5}
          spot-size={0.1}
          pulse={0.1}
          smoke={0.5}
          smoke-size={4}
          scale={0.65}
          rotation={0}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
          }}
        />
        {/* WhatsApp Icon di tengah lingkaran */}
        <div className='absolute w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md'>
          <img
            src='/whatsapp.svg'
            alt='WhatsApp Logo'
            className='w-7 h-7'
            draggable='false'
          />
        </div>
        {/* Rotating Text Around the Pulsing Border */}
        <motion.svg
          className='absolute inset-0 w-full h-full pointer-events-none'
          viewBox='0 0 100 100'
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          style={{ transform: 'scale(1.6)' }}
        >
          <defs>
            <path
              id='circle-path'
              d='M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0'
            />
          </defs>
        </motion.svg>
      </div>
    </a>
  );
}
