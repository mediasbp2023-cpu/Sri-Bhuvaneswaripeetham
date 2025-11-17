'use client';

import { BackNav } from '@/components/BackNav';
import Link from 'next/link';

export default function MahapadayatraGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Mahapadayatra Gallery</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            Capturing the divine moments and spiritual experiences of our sacred journeys
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full font-medium hover:from-amber-700 hover:to-yellow-700 transition-colors">
            All Photos
          </button>
          <button className="px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-medium hover:bg-amber-200 transition-colors">
            Temple Visits
          </button>
          <button className="px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-medium hover:bg-amber-200 transition-colors">
            Spiritual Activities
          </button>
          <button className="px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-medium hover:bg-amber-200 transition-colors">
            Group Photos
          </button>
          <button className="px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-medium hover:bg-amber-200 transition-colors">
            Nature Scenes
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Sacred Temple Visit", category: "Temple Visits", description: "Devotees at ancient temple" },
            { title: "Group Meditation", category: "Spiritual Activities", description: "Collective meditation session" },
            { title: "Pilgrimage Group", category: "Group Photos", description: "Our spiritual family" },
            { title: "Holy River Ceremony", category: "Spiritual Activities", description: "Sacred river rituals" },
            { title: "Mountain Temple", category: "Temple Visits", description: "Hilltop temple darshan" },
            { title: "Sunrise Prayer", category: "Nature Scenes", description: "Morning spiritual practice" }
          ].map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center">
                <div className="w-20 h-20 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-amber-800 text-2xl">📸</span>
                </div>
              </div>
              <div className="p-6">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">{image.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{image.description}</p>
                <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-colors text-sm">
                  View Full Size
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Video Memories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-800 text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Journey Highlights</h3>
              <p className="text-gray-700 text-sm mb-4">Experience the divine moments of our pilgrimage</p>
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-colors">
                Watch Video
              </button>
            </div>
            <div className="bg-amber-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-800 text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Devotee Experiences</h3>
              <p className="text-gray-700 text-sm mb-4">Heartwarming stories from our spiritual family</p>
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-colors">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Share Your Memories</h2>
          <p className="text-gray-700 mb-6">
            Have photos or videos from your Mahapadayatra experience? We’d love to include them in our gallery.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
            Upload Your Media
          </button>
        </div>

        {/* Navigation */}
        <div className="text-center space-x-4">
          <Link href="/mahapadayatra/overview" className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors mr-4">
            Back to Overview
          </Link>
          <Link href="/mahapadayatra/stories" className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
            Read Stories
          </Link>
        </div>
      </div>
    </div>
  );
}