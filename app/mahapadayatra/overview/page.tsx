'use client';

import { BackNav } from '@/components/BackNav';
import Link from 'next/link';

export default function MahapadayatraOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Mahapadayatra</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            A sacred journey of spiritual discovery and divine connection through ancient pilgrimage routes
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">About Mahapadayatra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Life & Teachings</h3>
              <p className="text-gray-700 mb-4">
                Mahapadayatra represents a profound spiritual journey that takes devotees through sacred 
                pilgrimage sites, ancient temples, and holy places. This transformative experience combines 
                physical travel with inner spiritual growth.
              </p>
              <p className="text-gray-700">
                Participants engage in meditation, prayer, and spiritual practices while visiting significant 
                religious sites, creating lasting connections with divine energy and fellow seekers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Legacy</h3>
              <p className="text-gray-700 mb-4">
                These sacred journeys have been conducted for decades, touching the lives of thousands 
                of devotees who seek spiritual enlightenment and divine blessings.
              </p>
              <p className="text-gray-700">
                Each yatra is carefully planned to provide maximum spiritual benefit while ensuring 
                comfort and safety for all participants.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
            <h2 className="text-2xl font-semibold text-brand-maroon mb-6">Journey Highlights</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brand-maroon">Sacred Temple Visits</h4>
                  <p className="text-sm text-gray-600">Ancient temples with historical and spiritual significance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brand-maroon">Spiritual Discourses</h4>
                  <p className="text-sm text-gray-600">Wisdom teachings from experienced spiritual masters</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brand-maroon">Meditation Retreats</h4>
                  <p className="text-sm text-gray-600">Deep meditation experiences in serene environments</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brand-maroon">Service Activities</h4>
                  <p className="text-sm text-gray-600">Seva opportunities at various spiritual centers</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brand-maroon">Cultural Immersion</h4>
                  <p className="text-sm text-gray-600">Experience local traditions and spiritual practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">Upcoming Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">South India Pilgrimage</h3>
              <p className="text-gray-700 mb-4">
                A 15-day spiritual journey covering major temples in Tamil Nadu, Karnataka, and Andhra Pradesh.
              </p>
              <div className="text-sm text-amber-700">
                <span className="inline-block bg-amber-100 px-3 py-1 rounded-full mr-2">15 Days</span>
                <span className="inline-block bg-amber-100 px-3 py-1 rounded-full">March 2024</span>
              </div>
            </div>
            <div className="border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Himalayan Retreat</h3>
              <p className="text-gray-700 mb-4">
                A 10-day meditation retreat in the serene Himalayan mountains with daily spiritual practices.
              </p>
              <div className="text-sm text-amber-700">
                <span className="inline-block bg-amber-100 px-3 py-1 rounded-full mr-2">10 Days</span>
                <span className="inline-block bg-amber-100 px-3 py-1 rounded-full">May 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-brand-gold/20">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-6">Preparation Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-brand-cream rounded-lg">
              <div className="text-3xl mb-3">🧘</div>
              <h4 className="font-semibold text-brand-maroon mb-2">Spiritual Preparation</h4>
              <p className="text-sm text-gray-600">Regular meditation practice and study of spiritual texts</p>
            </div>

            <div className="text-center p-4 bg-brand-cream rounded-lg">
              <div className="text-3xl mb-3">🎒</div>
              <h4 className="font-semibold text-brand-maroon mb-2">Physical Preparation</h4>
              <p className="text-sm text-gray-600">Comfortable walking shoes, modest clothing, and essential items</p>
            </div>

            <div className="text-center p-4 bg-brand-cream rounded-lg">
              <div className="text-3xl mb-3">📿</div>
              <h4 className="font-semibold text-brand-maroon mb-2">Mental Preparation</h4>
              <p className="text-sm text-gray-600">Open mind, devotional attitude, and willingness to serve</p>
            </div>
          </div>
        </div>

        <div className="text-center space-x-4">
          <Link href="/mahapadayatra/timeline" className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors mr-4">
            View Timeline
          </Link>
          <Link href="/mahapadayatra/stories" className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
            Read Stories
          </Link>
        </div>
      </div>
    </div>
  );
}