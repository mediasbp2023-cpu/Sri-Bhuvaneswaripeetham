'use client';
import Image from 'next/image';
import { GuruList } from '@/components';

export default function SPBSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <GuruList />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Paramananda Bharati Swamy</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            A luminous spiritual master in the divine parampara
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Paramananda Bharati Swamy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/testimonials/person-1.svg"
                alt="Sri Paramananda Bharati Swamy portrait"
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Divine Mission</h3>
              <p className="text-gray-700 mb-4">
                Sri Paramananda Bharati Swamy embodied the supreme bliss of spiritual realization 
                and dedicated his life to sharing this divine treasure with humanity.
              </p>
              <p className="text-gray-700 mb-4">
                His teachings radiated the light of transcendental wisdom, guiding seekers 
                toward the ultimate truth.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Contributions</h3>
              <p className="text-gray-700 mb-4">
                Through his profound spiritual practices and divine grace, he established 
                powerful centers of spiritual energy that continue to bless devotees.
              </p>
              <p className="text-gray-700 mb-4">
                His life was a perfect example of paramahamsa state - ever established 
                in supreme consciousness while compassionately serving humanity.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Experience His Grace</h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in the divine presence and teachings of Sri Paramananda Bharati Swamy.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}