'use client';
import { HeroBanner } from '@/components';
import Link from 'next/link';

export default function TempleRenovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Temple Renovation"
        description="Preserving and restoring our sacred temple spaces for future generations"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
            <div className="text-brand-maroon text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Structural Restoration</h3>
            <p className="text-gray-700">Restoring the ancient architecture and structural integrity of our temple buildings.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
            <div className="text-brand-maroon text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Artistic Conservation</h3>
            <p className="text-gray-700">Preserving traditional murals, sculptures, and decorative elements.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
            <div className="text-brand-maroon text-4xl mb-4">🙏</div>
            <h3 className="text-xl font-semibold text-brand-maroon mb-4">Sacred Spaces</h3>
            <p className="text-gray-700">Maintaining the spiritual sanctity and ritual requirements of temple areas.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-6">Current Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-brand-gold pl-6">
              <h4 className="text-lg font-semibold text-brand-maroon">Main Sanctum Renovation</h4>
              <p className="text-gray-700 mt-2">Restoration of the main deity chamber with traditional materials and techniques.</p>
              <div className="mt-3 text-sm text-brand-maroon">
                <span className="font-medium">Status:</span> In Progress • <span className="font-medium">Completion:</span> 75%
              </div>
            </div>

            <div className="border-l-4 border-brand-gold pl-6">
              <h4 className="text-lg font-semibold text-brand-maroon">Mural Restoration</h4>
              <p className="text-gray-700 mt-2">Conservation of ancient wall paintings depicting spiritual narratives.</p>
              <div className="mt-3 text-sm text-brand-maroon">
                <span className="font-medium">Status:</span> Planning Phase • <span className="font-medium">Expected Start:</span> Next Quarter
              </div>
            </div>

            <div className="border-l-4 border-brand-gold pl-6">
              <h4 className="text-lg font-semibold text-brand-maroon">Infrastructure Upgrade</h4>
              <p className="text-gray-700 mt-2">Modern amenities while preserving traditional aesthetics.</p>
              <div className="mt-3 text-sm text-brand-maroon">
                <span className="font-medium">Status:</span> Completed • <span className="font-medium">Year:</span> 2023
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/temple-renovation/donate" className="inline-block bg-brand-maroon text-brand-gold px-8 py-4 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Support Temple Renovation
          </Link>
        </div>
      </div>
    </div>
  );
}