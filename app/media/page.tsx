"use client";

import React, { useState } from 'react';

export default function MediaPage() {
  const isVisible = true;
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);

  const handleVideoClick = (videoIndex: number) => {
    setClickedVideo(clickedVideo === videoIndex ? null : videoIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900/20 via-orange-800/15 to-yellow-900/25">
      {/* Background Image */}
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
        {/* Header Section */}
        <section className={`py-20 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#FFD700] drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-105">
              Media Center
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light hover:text-white transition-colors duration-300">
              Experience the divine through our media collection
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Side - Videos */}
              <div className="lg:col-span-2">
                {/* Featured Video */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#800000] mb-4 font-serif hover:text-[#FFD700] transition-colors duration-300 cursor-pointer">
                    Featured Video
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6 animate-pulse"></div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-[#FFD700]/20 mb-12 hover:shadow-3xl hover:border-[#FFA500]/40 transition-all duration-500 transform hover:scale-[1.02] group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="pb-[56.25%]"></div>
                    <iframe
                      src="https://www.youtube.com/embed/LfDiX4pJPvc"
                      title="నమస్తే సదావత్సలే మాతృభూమి... పతత్వేషకాయో నమస్తే నమస్తే"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full group-hover:opacity-95 transition-opacity duration-300"
                    ></iframe>
                  </div>
                  <div className="mt-6 text-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      నమస్తే సదావత్సలే మాతృభూమి... పతత్వేషకాయో నమస్తే నమస్తే
                    </h3>
                    <p className="text-[#800000]/80 group-hover:text-[#800000] transition-colors duration-300">
                      A devotional presentation from Bhuvaneshwari Peetham
                    </p>
                  </div>
                </div>

                {/* Additional YouTube Videos */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#800000] mb-4 font-serif hover:text-[#FFD700] transition-colors duration-300 cursor-pointer">
                    More Videos
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-6 animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Video 1 */}
                  <div 
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#FFD700]/20 hover:shadow-2xl hover:border-[#FFA500]/40 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                      hoveredVideo === 1 ? 'ring-2 ring-[#FFD700]/50' : ''
                    } ${clickedVideo === 1 ? 'ring-4 ring-[#FFA500]' : ''}`}
                    onMouseEnter={() => setHoveredVideo(1)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => handleVideoClick(1)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <div className="pb-[56.25%]"></div>
                      <iframe
                        src="https://www.youtube.com/embed/FS-2KZDtuNc"
                        title="సోనియా నుండి షర్మిలా దాకా హిందూ విద్వేషమేనా?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                      ></iframe>
                    </div>
                    <h4 className="text-lg font-bold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      సోనియా నుండి షర్మిలా దాకా హిందూ విద్వేషమేనా?
                    </h4>
                    <p className="text-sm text-[#800000]/70 group-hover:text-[#800000] transition-colors duration-300">
                      A thought-provoking discussion
                    </p>
                  </div>

                  {/* Video 2 */}
                  <div 
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#FFD700]/20 hover:shadow-2xl hover:border-[#FFA500]/40 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                      hoveredVideo === 2 ? 'ring-2 ring-[#FFD700]/50' : ''
                    } ${clickedVideo === 2 ? 'ring-4 ring-[#FFA500]' : ''}`}
                    onMouseEnter={() => setHoveredVideo(2)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => handleVideoClick(2)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <div className="pb-[56.25%]"></div>
                      <iframe
                        src="https://www.youtube.com/embed/XI73JHCybxc"
                        title="ఆంధ్రప్రదేశ్ ముఖ్యమంత్రి చంద్రబాబునాయుడు గారు ఇద్దరు ముగ్గురు పిల్లల్ని కనండి అని ఎందుకు అంటున్నారు"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                      ></iframe>
                    </div>
                    <h4 className="text-lg font-bold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      CM Chandrababu on Family Planning
                    </h4>
                    <p className="text-sm text-[#800000]/70 group-hover:text-[#800000] transition-colors duration-300">
                      Political discourse on population
                    </p>
                  </div>

                  {/* Video 3 */}
                  <div 
                    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[#FFD700]/20 hover:shadow-2xl hover:border-[#FFA500]/40 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                      hoveredVideo === 3 ? 'ring-2 ring-[#FFD700]/50' : ''
                    } ${clickedVideo === 3 ? 'ring-4 ring-[#FFA500]' : ''}`}
                    onMouseEnter={() => setHoveredVideo(3)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => handleVideoClick(3)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <div className="pb-[56.25%]"></div>
                      <iframe
                        src="https://www.youtube.com/embed/mOo0VDEwAXA"
                        title="Radhayatra"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                      ></iframe>
                    </div>
                    <h4 className="text-lg font-bold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      Radhayatra
                    </h4>
                    <p className="text-sm text-[#800000]/70 group-hover:text-[#800000] transition-colors duration-300">
                      Spiritual journey documentation
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Facebook */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-[#FFD700]/20 hover:shadow-3xl hover:border-[#FFA500]/40 transition-all duration-500 group">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#800000] mb-4 font-serif group-hover:text-[#FFD700] transition-colors duration-300">
                      Follow Us
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mb-4 animate-pulse"></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-10 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-12 h-62 text-[#1877F2] mx-auto mb-12 group-hover:text-[#166FE5] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <h4 className="text-lg font-semibold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                        Facebook
                      </h4>
                    </div>
                    
                    <p className="text-[#800000]/80 mb-4 text-sm group-hover:text-[#800000] transition-colors duration-300">
                      Stay connected with our latest updates and spiritual content
                    </p>
                    
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1877F2] to-[#166FE5] text-white rounded-xl hover:from-[#166FE5] hover:to-[#1877F2] transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg font-semibold group-hover:shadow-2xl"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Visit Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Resources",
                  description: "Spiritual resources and materials",
                  link: "/media/resources",
                  icon: "📚"
                },
                {
                  title: "Album",
                  description: "Photo galleries and collections",
                  link: "/media/album",
                  icon: "📸"
                },
                {
                  title: "Publications",
                  description: "Books and publications",
                  link: "/media/publications",
                  icon: "📖"
                },
                {
                  title: "Links",
                  description: "Useful spiritual links",
                  link: "/media/links",
                  icon: "🔗"
                }
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-[#FFD700]/20 hover:border-[#FFA500]/40 hover:bg-white/90 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg group"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#800000] mb-2 group-hover:text-[#FFD700] transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-[#800000]/70 group-hover:text-[#800000] transition-colors duration-300">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}