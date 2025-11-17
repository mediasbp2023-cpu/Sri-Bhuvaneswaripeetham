'use client';

import { BackNav } from '@/components/BackNav';

export default function TempleRenovationProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-orange-600 mb-6">Renovation Progress</h1>
          <p className="text-xl text-orange-600/80 max-w-3xl mx-auto">
            Track the progress of our temple renovation initiatives
          </p>
        </div>

        <div className="space-y-8">
          {/* Overall Progress */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Overall Renovation Progress</h2>
            <div className="mb-6">
              <div className="flex justify-between text-lg font-semibold text-orange-600 mb-2">
                <span>Total Progress</span>
                <span>68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-orange-600 h-4 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">₹52,50,000</div>
                <div className="text-sm text-gray-600">Total Budget</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">₹35,75,000</div>
                <div className="text-sm text-gray-600">Funds Utilized</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">₹16,75,000</div>
                <div className="text-sm text-gray-600">Remaining</div>
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Monthly Progress Report</h2>
            <div className="space-y-4">
              <div className="border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-orange-600">January 2024</h3>
                  <span className="text-sm text-gray-600">Report #24</span>
                </div>
                <p className="text-gray-700 mb-3">Main sanctum restoration completed 75%. Roof repair work commenced on the eastern wing.</p>
                <div className="text-sm text-orange-600">
                  <span className="font-medium">Key Achievements:</span> Structural reinforcement, traditional painting restoration
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-orange-600">December 2023</h3>
                  <span className="text-sm text-gray-600">Report #23</span>
                </div>
                <p className="text-gray-700 mb-3">Electrical modernization project completed. Water supply system upgrade finished.</p>
                <div className="text-sm text-orange-600">
                  <span className="font-medium">Key Achievements:</span> Safety compliance, modern amenities integration
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-orange-600">November 2023</h3>
                  <span className="text-sm text-gray-600">Report #22</span>
                </div>
                <p className="text-gray-700 mb-3">Foundation assessment completed. Planning phase for mural conservation initiated.</p>
                <div className="text-sm text-orange-600">
                  <span className="font-medium">Key Achievements:</span> Structural analysis, conservation planning
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Progress Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-orange-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">Before & After: Main Entrance</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Main Entrance Restoration</h4>
                  <p className="text-sm text-gray-600">Traditional stone work and carving restoration</p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">Sanctum Interior Work</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Sanctum Interior</h4>
                  <p className="text-sm text-gray-600">Traditional painting and gold leaf work</p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">Roof Construction</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-orange-600 mb-2">Traditional Roof Work</h4>
                  <p className="text-sm text-gray-600">Ancient tile restoration and waterproofing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Milestones */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Upcoming Milestones</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <div className="w-4 h-4 bg-orange-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-orange-600">Mural Conservation Phase 1</h4>
                  <p className="text-sm text-gray-600">March 2024 - Conservation of eastern wall murals</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <div className="w-4 h-4 bg-orange-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-orange-600">Floor Restoration</h4>
                  <p className="text-sm text-gray-600">June 2024 - Traditional stone flooring restoration</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <div className="w-4 h-4 bg-orange-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-orange-600">Final Sanctum Completion</h4>
                  <p className="text-sm text-gray-600">August 2024 - Main sanctum final touches and consecration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/temple-renovation/donate" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
            Support Our Progress
          </a>
        </div>
      </div>
    </div>
  );
}