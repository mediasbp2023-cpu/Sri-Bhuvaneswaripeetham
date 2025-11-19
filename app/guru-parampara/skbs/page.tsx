'use client';
import Image from 'next/image';
import { GuruList } from '@/components';

export default function SKBSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <GuruList />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Krishnananda Bharati Swamy</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            A divine master who embodied Krishna consciousness
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Krishnananda Bharati Swamy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/testimonials/person-1.svg"
                alt="Sri Krishnananda Bharati Swamy portrait"
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Divine Love</h3>
              <p className="text-gray-700 mb-4">
                Sri Krishnananda Bharati Swamy radiated divine love and compassion, 
                teaching that love for God is the highest path to realization.
              </p>
              <p className="text-gray-700 mb-4">
                His life exemplified the perfect devotee - always absorbed in divine 
                remembrance and spreading joy wherever he went.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Wisdom</h3>
              <p className="text-gray-700 mb-4">
                Through his deep meditation and divine grace, he realized the eternal 
                truth that God and the devotee are one in essence.
              </p>
              <p className="text-gray-700 mb-4">
                His teachings continue to inspire seekers to develop pure love and 
                devotion as the path to supreme realization.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Experience Divine Love</h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in the teachings of divine love from Sri Krishnananda Bharati Swamy.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Read Teachings
          </button>
        </div>
      </div>
    </div>
  );
}