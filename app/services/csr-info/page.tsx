'use client';

import { BackNav } from '@/components/BackNav';

export default function CSRInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">Corporate Social Responsibility</h1>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto">
            Partnering with organizations to create meaningful social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Education Initiatives</h3>
            <p className="text-gray-700 mb-4">
              Collaborative programs to improve educational infrastructure and 
              provide quality learning opportunities.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• School infrastructure development</li>
              <li>• Digital classroom setup</li>
              <li>• Teacher training programs</li>
              <li>• Scholarship initiatives</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Healthcare Projects</h3>
            <p className="text-gray-700 mb-4">
              Healthcare infrastructure development and medical service delivery 
              in underserved communities.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Mobile health units</li>
              <li>• Medical equipment donation</li>
              <li>• Health awareness campaigns</li>
              <li>• Telemedicine services</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Environmental Sustainability</h3>
            <p className="text-gray-700 mb-4">
              Environmental conservation and sustainable development initiatives 
              for ecological balance.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Tree plantation drives</li>
              <li>• Water conservation projects</li>
              <li>• Renewable energy adoption</li>
              <li>• Waste management systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">For Corporations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Fulfilling CSR compliance requirements</li>
                <li>• Brand visibility and reputation enhancement</li>
                <li>• Employee engagement opportunities</li>
                <li>• Tax benefits and incentives</li>
                <li>• Measurable social impact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">For Communities</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Sustainable development programs</li>
                <li>• Skill development and employment</li>
                <li>• Infrastructure development</li>
                <li>• Healthcare and education access</li>
                <li>• Long-term community empowerment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Partner With Us</h2>
          <p className="text-gray-700 mb-6">
            Collaborate with us to create meaningful social impact through CSR initiatives.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-colors">
              Contact CSR Team
            </button>
            <button className="bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold border border-amber-600 hover:bg-amber-50 transition-colors">
              View Partnership Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}