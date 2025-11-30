import { GalleryGrid, Slideshow } from "@/components";
import Link from 'next/link';
import { images } from "./constants/images";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Bhuvaneshwari Peetham */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/Background 2.png" 
          alt="Bhuvaneshwari Peetham Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50"></div>
      </div>
      
      {/* Content */}
        <div className="relative z-10">
        {/* Hero Section with Bhuvaneshwari Peetham Title */}
        <section className="min-h-screen flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Top Action Buttons - Same color as Book a Pooja */}
            <h1 className="text-6xl md:text-8xl font-serif mb-6 text-shadow-lg">
              Bhuvaneshwari Peetham
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              A sanctuary of peace, devotion, and spiritual awakening
            </p>
            
            {/* Book a Pooja Button */}
            <div className="mt-12">
              <Link 
                href="/pooja" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] font-semibold rounded-full hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                  <path d="M10 2v18m-5-8h10"/>
                </svg>
                Book a Pooja
              </Link>
            </div>
          </div>
        </section>
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Sacred Space</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Discover the divine presence and spiritual heritage at Bhuvaneshwari Peetham, 
            where ancient wisdom meets contemporary devotion.
          </p>
        </section>

        {/* Divine Pooja Ceremonies */}
        <section className="py-16 bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3] relative">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#800000] mb-4 font-serif">
                Divine Pooja Ceremonies
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6"></div>
              <p className="text-lg text-[#800000]/80 max-w-2xl mx-auto">
                Experience the sacred rituals and ceremonies performed with devotion and tradition
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20">
              <Slideshow 
                images={images.gallery.pooja} 
                interval={5000}
                className="mb-6"
              />
            </div>
          </div>
        </section>

        {/* Sacred Moments Gallery */}
        <section className="py-16 bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3] relative">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#800000] mb-4 font-serif">
                Sacred Moments Gallery
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6"></div>
              <p className="text-lg text-[#800000]/80 max-w-2xl mx-auto">
                Cherish the divine moments and spiritual experiences captured in our sacred gallery
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20">
              <GalleryGrid images={images.gallery.events.slice(0, 6)} />
            </div>
            
            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] rounded-xl hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                View All Moments
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Temple Gallery Slideshow */}
        <section className="py-16 bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#800000] mb-4 font-serif">
                Temple Gallery
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6"></div>
              <p className="text-lg text-[#800000]/80 max-w-2xl mx-auto">
                Experience the divine beauty and sacred architecture of Bhuvaneshwari Peetham through these blessed images
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20">
              <Slideshow 
                images={images.gallery.temple.slice(0, 4)} 
                interval={4000}
                className="mb-6"
              />
            </div>
            
            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] rounded-xl hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                View Full Gallery
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="py-16 bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3] relative">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#800000] mb-4 font-serif">
                Recent Events
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6"></div>
              <p className="text-lg text-[#800000]/80 max-w-2xl mx-auto">
                Stay updated with our latest spiritual events and community gatherings
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20">
              <GalleryGrid images={images.gallery.pilgrimage.slice(0, 4)} />
            </div>
            
            <div className="text-center mt-8">
              <Link href="/events" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] rounded-xl hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                View All Events
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Visit Temple",
              description: "Plan your visit to Bhuvaneshwari Peetham",
              link: "/alayam"
            },
            {
              title: "Our Lineage",
              description: "Learn about our spiritual guides",
              link: "/guru-parampara"
            },
            {
              title: "Join Activities",
              description: "Participate in spiritual programs",
              link: "/aashramam"
            },
            {
              title: "Support Us",
              description: "Contribute to our mission",
              link: "/donate"
            }
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="block p-6 rounded-xl border border-zinc-200 hover:border-orange-200 hover:bg-orange-50/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600">{item.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
    </div>
  );
}

