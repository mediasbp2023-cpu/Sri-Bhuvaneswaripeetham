'use client';

import { BackNav } from '@/components/BackNav';

export default function SwasthyaSevaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Swasthya Seva</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            Healthcare and wellness services for physical, mental, and spiritual well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Ayurvedic Services</h3>
            <p className="text-gray-700 mb-4">
              Traditional Ayurvedic treatments, consultations, and wellness programs 
              based on ancient healing wisdom.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Panchakarma treatments</li>
              <li>• Herbal medicine consultations</li>
              <li>• Diet and lifestyle guidance</li>
              <li>• Yoga therapy sessions</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Medical Camps</h3>
            <p className="text-gray-700 mb-4">
              Free medical camps providing healthcare services to underserved communities 
              and rural areas.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• General health checkups</li>
              <li>• Specialist consultations</li>
              <li>• Free medicine distribution</li>
              <li>• Health awareness programs</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Mental Wellness</h3>
            <p className="text-gray-700 mb-4">
              Mental health support, meditation programs, and stress management 
              workshops for holistic well-being.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Meditation sessions</li>
              <li>• Stress management workshops</li>
              <li>• Counseling services</li>
              <li>• Spiritual healing programs</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Our Services Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">5000+</div>
              <div className="text-gray-700">Patients Treated</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">100+</div>
              <div className="text-gray-700">Medical Camps</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">2000+</div>
              <div className="text-gray-700">Wellness Sessions</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
              <div className="text-gray-700">Villages Served</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Support Our Health Services</h2>
          <p className="text-gray-700 mb-6">
            Help us provide quality healthcare and wellness services to those in need.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
              Volunteer
            </button>
            <button className="bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold border border-amber-600 hover:bg-amber-50 transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}