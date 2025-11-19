'use client';
import Image from 'next/image';
import { GuruList } from '@/components';

export default function SCSSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <GuruList />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Satyananda Bharati Swamy</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            The founder of Sri Bhuvaneshwari Peetham and divine spiritual master
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Satyananda Bharati Swamy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/testimonials/person-1.svg"
                alt="Sri Satyananda Bharati Swamy portrait"
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Life & Teachings</h3>
              <p className="text-gray-700 mb-4">
                Sri Satyananda Bharati Swamy was the founding Peethadhipati of Sri Bhuvaneshwari Peetham. 
                His divine presence and spiritual guidance laid the foundation for this sacred institution.
              </p>
              <p className="text-gray-700 mb-4">
                Through his profound wisdom and compassionate leadership, he established the traditions 
                and spiritual practices that continue to guide devotees today.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Legacy</h3>
              <p className="text-gray-700 mb-4">
                His teachings emphasized the importance of Dharma, devotion, and service to humanity. 
                The peetham stands as a testament to his vision of spiritual enlightenment.
              </p>
              <p className="text-gray-700 mb-4">
                His samadhi at the peetham continues to be a place of pilgrimage and spiritual inspiration 
                for countless devotees.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Learn More</h2>
          <p className="text-gray-700 mb-6">
            Discover the profound teachings and divine life of Sri Satyananda Bharati Swamy.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Read Biography
          </button>
        </div>
      </div>
    </div>
  );
}