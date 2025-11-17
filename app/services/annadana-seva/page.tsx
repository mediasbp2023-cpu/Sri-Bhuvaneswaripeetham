'use client';

import { BackNav } from '@/components/BackNav';

export default function AnnadanaSevaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Annadana Seva</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            The sacred service of food donation - nourishing body and soul
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Food Service Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Daily Annadana</h3>
              <p className="text-gray-700 mb-4">
                Providing nutritious meals to devotees and visitors every day.
              </p>
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-colors">
                Sponsor Meals
              </button>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Festival Feeding</h3>
              <p className="text-gray-700 mb-4">
                Special food distribution programs during festivals and celebrations.
              </p>
              <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-colors">
                Support Festivals
              </button>
            </div>
          </div>
        </div>

        <div className="bg-amber-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Support Annadana Seva</h2>
          <p className="text-gray-700 mb-6">
            Join us in this noble service of feeding the hungry and spreading love through food.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
            Donate Food
          </button>
        </div>
      </div>
    </div>
  );
}