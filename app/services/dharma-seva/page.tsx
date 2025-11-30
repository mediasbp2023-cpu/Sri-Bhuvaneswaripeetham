'use client';

import { BackNav } from '@/components/BackNav';

export default function DharmaSevaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-brand-cream to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Dharma Seva</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Spiritual service and religious activities for community welfare
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Dharma Service Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-gold pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Temple Services</h3>
              <p className="text-gray-700 mb-4">
                Daily rituals, poojas, and religious ceremonies.
              </p>
              <button className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-maroon px-6 py-2 rounded-lg hover:from-brand-orange hover:to-brand-gold transition-all duration-300 font-semibold">
                Participate
              </button>
            </div>
            
            <div className="border-l-4 border-brand-gold pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Teaching</h3>
              <p className="text-gray-700 mb-4">
                Religious education and spiritual guidance programs.
              </p>
              <button className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-maroon px-6 py-2 rounded-lg hover:from-brand-orange hover:to-brand-gold transition-all duration-300 font-semibold">
                Join Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Serve Dharma</h2>
          <p className="text-gray-700 mb-6">
            Join us in serving the divine through spiritual activities.
          </p>
          <button className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-maroon px-8 py-3 rounded-lg font-semibold hover:from-brand-orange hover:to-brand-gold transition-all duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
}
