'use client';

import { BackNav } from '@/components/BackNav';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-600 mb-6">Our Partners</h1>
          <p className="text-xl text-purple-600/80 max-w-3xl mx-auto">
            Collaborating with like-minded organizations for spiritual and social welfare
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-purple-200">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Partnership Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Temples</h3>
              <p className="text-gray-700 mb-4">Collaborations with other spiritual centers</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                View Partners
              </button>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">NGOs</h3>
              <p className="text-gray-700 mb-4">Social welfare organizations</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                View Partners
              </button>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Spiritual Leaders</h3>
              <p className="text-gray-700 mb-4">Guidance and support from spiritual masters</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                View Partners
              </button>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Become a Partner</h2>
          <p className="text-gray-700 mb-6">
            Join hands with us in serving humanity and spreading spiritual wisdom.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}