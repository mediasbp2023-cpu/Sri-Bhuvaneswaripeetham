'use client';
import { BackNav } from '@/components/BackNav';
import Link from 'next/link';
export default function TempleRenovationProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-600 mb-6">Renovation Projects</h1>
          <p className="text-xl text-orange-600/80 max-w-3xl mx-auto">
            Detailed information about our ongoing and completed temple renovation projects
          </p>
        </div>

        <div className="space-y-12">
          {/* Ongoing Projects */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <h2 className="text-2xl font-semibold text-orange-600">Ongoing Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Main Sanctum Restoration</h3>
                <p className="text-gray-700 mb-4">Complete restoration of the main deity chamber using traditional materials and techniques.</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Estimated Completion:</strong> Q2 2024</p>
                  <p><strong>Budget:</strong> ₹15,00,000</p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Roof Repair & Waterproofing</h3>
                <p className="text-gray-700 mb-4">Traditional tile roof restoration with modern waterproofing techniques.</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Estimated Completion:</strong> Q1 2024</p>
                  <p><strong>Budget:</strong> ₹8,50,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Projects */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-semibold text-orange-600">Planned Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Mural Conservation</h3>
                <p className="text-gray-700 mb-4">Preservation of ancient wall paintings and frescoes.</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Start Date:</strong> March 2024</p>
                  <p><strong>Budget:</strong> ₹12,00,000</p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Floor Restoration</h3>
                <p className="text-gray-700 mb-4">Traditional stone flooring repair and replacement.</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Start Date:</strong> June 2024</p>
                  <p><strong>Budget:</strong> ₹6,50,000</p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Pillar Restoration</h3>
                <p className="text-gray-700 mb-4">Structural reinforcement of ancient stone pillars.</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Start Date:</strong> September 2024</p>
                  <p><strong>Budget:</strong> ₹9,00,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Completed Projects */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-semibold text-orange-600">Completed Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Electrical Modernization</h3>
                <p className="text-gray-700 mb-4">Complete electrical system upgrade with safety features.</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Completed:</strong> December 2023</p>
                  <p><strong>Total Cost:</strong> ₹4,25,000</p>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Water Supply System</h3>
                <p className="text-gray-700 mb-4">New water supply and drainage system installation.</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Completed:</strong> October 2023</p>
                  <p><strong>Total Cost:</strong> ₹3,75,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/temple-renovation/donate" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            Support Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
}