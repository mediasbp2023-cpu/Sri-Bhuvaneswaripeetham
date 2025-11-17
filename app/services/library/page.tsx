'use client';

import { BackNav } from '@/components/BackNav';

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Spiritual Library</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            A treasure trove of spiritual wisdom, ancient texts, and modern interpretations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Vedic Literature</h3>
            <p className="text-gray-700 mb-4">
              Authentic translations and commentaries on ancient Vedic texts, 
              Upanishads, and sacred scriptures.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Rig Veda & commentaries</li>
              <li>• Principal Upanishads</li>
              <li>• Bhagavad Gita interpretations</li>
              <li>• Puranic literature</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Guru’s Teachings</h3>
            <p className="text-gray-700 mb-4">
              Collections of discourses, writings, and teachings from our spiritual 
              masters and lineage holders.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Satsang recordings</li>
              <li>• Written discourses</li>
              <li>• Spiritual guidance books</li>
              <li>• Question & answer sessions</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Digital Resources</h3>
            <p className="text-gray-700 mb-4">
              Modern digital formats including e-books, audio books, 
              and multimedia presentations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• E-book collection</li>
              <li>• Audio discourses</li>
              <li>• Video teachings</li>
              <li>• Online courses</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Library Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">5000+</div>
              <div className="text-gray-700">Books & Texts</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">1000+</div>
              <div className="text-gray-700">Audio Recordings</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">500+</div>
              <div className="text-gray-700">Video Teachings</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
              <div className="text-gray-700">Languages</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Access Our Library</h2>
          <p className="text-gray-700 mb-6">
            Explore our vast collection of spiritual wisdom and knowledge.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
              Visit Library
            </button>
            <button className="bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold border border-amber-600 hover:bg-amber-50 transition-colors">
              Browse Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}