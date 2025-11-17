'use client';

import { BackNav } from '@/components/BackNav';

export default function DharmarakshaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Dharmaraksha (धर्मरक्षा)</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Protection and preservation of Dharma through various initiatives and programs
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Dharma Protection Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Vedic Education</h3>
              <p className="text-gray-700 mb-4">
                Preserving and teaching Vedic knowledge to the younger generation.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Traditional Practices</h3>
              <p className="text-gray-700 mb-4">
                Supporting the continuation of traditional rituals and customs.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Support Dharma Protection</h2>
          <p className="text-gray-700 mb-6">
            Join our efforts to protect and preserve the eternal principles of Dharma.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}