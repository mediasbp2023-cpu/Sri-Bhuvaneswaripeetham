'use client';
import Image from 'next/image';
import { GuruList } from '@/components';

export default function SadhanandhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <GuruList />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Sadananda</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            A revered sage in the spiritual lineage
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Sadananda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/testimonials/person-1.svg"
                alt="Sri Sadananda portrait"
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Heritage</h3>
              <p className="text-gray-700 mb-4">
                Sri Sadananda represents the eternal tradition of spiritual wisdom that has been 
                passed down through generations of enlightened masters.
              </p>
              <p className="text-gray-700 mb-4">
                His teachings emphasize the importance of inner peace, self-realization, 
                and service to humanity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Philosophy</h3>
              <p className="text-gray-700 mb-4">
                Through profound meditation and spiritual practice, he attained the highest 
                states of consciousness and shared his insights with sincere seekers.
              </p>
              <p className="text-gray-700 mb-4">
                His life exemplified the perfect balance of wisdom and compassion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Explore Teachings</h2>
          <p className="text-gray-700 mb-6">
            Discover the profound wisdom and spiritual insights of Sri Sadananda.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Read Teachings
          </button>
        </div>
      </div>
    </div>
  );
}