'use client';

import { BackNav } from '@/components/BackNav';

export default function SamajikaSevaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ivory via-brand-cream to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Samajika Seva</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Social service initiatives for community welfare and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Community Development</h3>
            <p className="text-gray-700 mb-4">
              Programs focused on uplifting rural and urban communities through education, 
              healthcare, and infrastructure development.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Village adoption programs</li>
              <li>• Skill development initiatives</li>
              <li>• Women empowerment projects</li>
              <li>• Youth leadership training</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Educational Support</h3>
            <p className="text-gray-700 mb-4">
              Providing quality education and learning opportunities to underprivileged 
              children and adults.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Free tuition centers</li>
              <li>• Scholarship programs</li>
              <li>• Adult literacy campaigns</li>
              <li>• Digital learning initiatives</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Healthcare Services</h3>
            <p className="text-gray-700 mb-4">
              Organizing medical camps, health awareness programs, and providing 
              healthcare access to remote areas.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Free medical camps</li>
              <li>• Health awareness workshops</li>
              <li>• Mobile health units</li>
              <li>• Mental health support</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-brand-maroon mb-2">1000+</div>
              <div className="text-gray-700">Families Supported</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-brand-maroon mb-2">50+</div>
              <div className="text-gray-700">Villages Adopted</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-brand-maroon mb-2">5000+</div>
              <div className="text-gray-700">Students Educated</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-brand-maroon mb-2">100+</div>
              <div className="text-gray-700">Health Camps</div>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Join Our Social Service</h2>
          <p className="text-gray-700 mb-6">
            Be part of our community service initiatives and make a positive impact.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-maroon px-6 py-3 rounded-lg font-semibold hover:from-brand-orange hover:to-brand-gold transition-all duration-300">
              Volunteer
            </button>
            <button className="bg-white text-brand-maroon px-6 py-3 rounded-lg font-semibold border border-brand-gold hover:bg-brand-cream transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
