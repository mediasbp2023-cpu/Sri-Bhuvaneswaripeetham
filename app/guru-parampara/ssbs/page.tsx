'use client';

export default function SSBSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Sri Sadananda Bharati Swamy</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            The current Peethadhipati and spiritual guide of Sri Bhuvaneshwari Peetham
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">About Sri Sadananda Bharati Swamy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Spiritual Leadership</h3>
              <p className="text-gray-700 mb-4">
                Sri Sadananda Bharati Swamy serves as the current Peethadhipati of Sri Bhuvaneshwari Peetham, 
                carrying forward the divine legacy of the parampara.
              </p>
              <p className="text-gray-700 mb-4">
                Under his guidance, the peetham continues to flourish as a center of spiritual learning, 
                worship, and service to humanity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Teachings & Vision</h3>
              <p className="text-gray-700 mb-4">
                His teachings emphasize the practical application of Dharma in daily life, 
                the importance of meditation, and the path of devotion.
              </p>
              <p className="text-gray-700 mb-4">
                He continues to guide devotees on their spiritual journey with wisdom, 
                compassion, and profound spiritual insight.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-gold/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Seek Blessings</h2>
          <p className="text-gray-700 mb-6">
            Receive guidance and blessings from Sri Sadananda Bharati Swamy.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
}