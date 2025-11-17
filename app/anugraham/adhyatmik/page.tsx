'use client';

import { BackNav } from '@/components/BackNav';

export default function AdhyatmikPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Adhyatmik (आध्यात्मिक)</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Spiritual guidance and teachings for inner transformation and self-realization
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Spiritual Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Meditation Sessions</h3>
              <p className="text-gray-700 mb-4">
                Regular meditation sessions to help you connect with your inner self and experience inner peace.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Join Sessions
              </button>
            </div>
            
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Discourses</h3>
              <p className="text-gray-700 mb-4">
                Enlightening talks on ancient wisdom and spiritual practices for modern life.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Attend Discourses
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-gray-700 mb-6">
            Contact us to learn more about our spiritual programs and guidance sessions.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}