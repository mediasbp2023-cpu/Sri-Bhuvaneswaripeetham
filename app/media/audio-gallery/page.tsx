'use client';

import { BackNav } from '@/components/BackNav';

export default function AudioGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Audio Gallery</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Devotional music, mantras, and spiritual discourses
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Audio Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Bhajans</h3>
              <p className="text-gray-700 mb-4">Devotional songs and hymns</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Listen Now
              </button>
            </div>
            
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Mantras</h3>
              <p className="text-gray-700 mb-4">Sacred chants and vedic mantras</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Listen Now
              </button>
            </div>
            
            <div className="bg-brand-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📻</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Discourses</h3>
              <p className="text-gray-700 mb-4">Spiritual talks and teachings</p>
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Listen Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Download Our App</h2>
          <p className="text-gray-700 mb-6">
            Access our complete audio library on your mobile device.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}