'use client';

import { BackNav } from '@/components/BackNav';

export default function PhotoGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Photo Gallery</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Capturing divine moments and spiritual experiences
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Gallery Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🕉️</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Temple Events</h3>
              <p className="text-gray-700 mb-4">Photos from poojas, festivals, and special ceremonies</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                View Gallery
              </button>
            </div>
            
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Activities</h3>
              <p className="text-gray-700 mb-4">Moments from meditation sessions and spiritual programs</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                View Gallery
              </button>
            </div>
            
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Festivals</h3>
              <p className="text-gray-700 mb-4">Celebrations and cultural events throughout the year</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Share Your Photos</h2>
          <p className="text-gray-700 mb-6">
            Have photos from our events? We’d love to see them!
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Submit Photos
          </button>
        </div>
      </div>
    </div>
  );
}