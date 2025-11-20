'use client';

import dynamic from 'next/dynamic';
import { CheckCircleIcon, CurrencyDollarIcon, ShieldCheckIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

// Dynamic import untuk AnimatedContent dengan SSR disabled
// Ini akan mencegah Framer Motion menghalangi SSR
const AnimatedContent = dynamic(() => import('./AnimatedContent'), {
  ssr: false,
  loading: () => <AnimatedContentSkeleton />
});

// Skeleton loader untuk saat content masih loading
function AnimatedContentSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="h-20 w-3/4 mx-auto bg-white/20 animate-pulse rounded-lg mb-8"></div>
            <div className="h-8 w-2/3 mx-auto bg-white/20 animate-pulse rounded-lg mb-12"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-16 w-48 bg-white/20 animate-pulse rounded-full"></div>
              <div className="h-16 w-48 bg-white/10 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Skeleton */}
      <section className='py-20 bg-gray-50'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-16 w-96 mx-auto bg-gray-200 animate-pulse rounded-lg mb-4"></div>
            <div className="h-6 w-64 mx-auto bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <div className="h-32 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded-lg mb-2"></div>
                <div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AnimatedContentWrapper({ valuePropositions }) {
  return <AnimatedContent valuePropositions={valuePropositions} />;
}