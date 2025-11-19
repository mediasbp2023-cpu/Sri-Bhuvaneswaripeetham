'use client';
import Image from 'next/image';
import { GuruList } from '@/components';

export default function SSBS2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <GuruList />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Sukhananda Bharati Swamy</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            A blissful master who spread joy through spiritual wisdom
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Sukhananda Bharati Swamy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/testimonials/person-1.svg"
                alt="Sri Sukhananda Bharati Swamy portrait"
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Message of Joy</h3>
              <p className="text-gray-700 mb-4">
                Sri Sukhananda Bharati Swamy spread the message that true happiness comes from 
                spiritual realization and living in harmony with divine will.
              </p>
              <p className="text-gray-700 mb-4">
                His teachings emphasized that bliss is our true nature and can be experienced 
                through proper spiritual practice.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Legacy</h3>
              <p className="text-gray-700 mb-4">
                Through his radiant presence and profound wisdom, he transformed the lives of 
                countless seekers, guiding them toward inner peace and joy.
              </p>
              <p className="text-gray-700 mb-4">
                His life demonstrated that true spirituality is not about renunciation of joy, 
                but about discovering the eternal bliss within.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Discover Inner Bliss</h2>
          <p className="text-gray-700 mb-6">
            Learn from the teachings of Sri Sukhananda Bharati Swamy and experience true happiness.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Read Teachings
          </button>
        </div>
      </div>
    </div>
  );
}