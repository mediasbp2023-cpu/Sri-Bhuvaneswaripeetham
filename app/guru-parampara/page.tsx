'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HeroBanner } from '@/components';
import { guruData } from '@/app/constants/guru';

export default function GuruParamparaPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Background Image from SPB Images */}
        <div className="fixed inset-0 z-0">
          <img 
            src="/images/Background 2.png" 
            alt="Sacred Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50"></div>
        </div>
      
      {/* Content Container */}
      <div className="relative z-10">

      {/* Page Hero (English-only) */}
      <HeroBanner
        title="Guru Parampara"
        description="Explore our spiritual lineage. Click a portrait below to read each guru’s story, teachings, and contributions."
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction (English-only) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-maroon">Our Spiritual Lineage</h2>
          <p className="mt-3 text-black/80 max-w-3xl mx-auto">
            Learn about each guru in our lineage. Tap or click a portrait below to open the guru’s information page.
          </p>
        </div>

        {/* Top grid of clickable guru placeholders */}
        <section aria-label="Guru list" className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.values(guruData).map((g, idx) => {
              const placeholder = idx % 2 === 0 ? '/images/placeholder-left.svg' : '/images/placeholder-right.svg';
              const imgSrc = g.image || placeholder;
              return (
                <a
                  key={g.id}
                  href={`/guru-parampara/${g.id}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-brand-gold/30 group-hover:ring-brand-gold transition-shadow shadow-sm bg-white">
                    <img
                      src={imgSrc}
                      alt={`${g.name} portrait placeholder`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="text-sm md:text-base font-semibold text-brand-maroon">{g.fullName || g.name}</div>
                    <div className="text-xs md:text-sm text-black/60">{g.code}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <div id="top"></div>

        {/* All Guru Details in one page */}
        <div className="space-y-12 mb-16">
          {Object.values(guruData).map((guru, index) => (
            <motion.section
              id={guru.id}
              key={guru.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
            >
              <div className="block relative bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3] rounded-3xl p-8 shadow-2xl border-4 border-[#FFD700]/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 pointer-events-none"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#800000] via-[#A52A2A] to-[#800000] text-[#FFD700] px-8 py-4 rounded-full text-xl font-bold shadow-2xl border-4 border-[#FFD700]/30">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">॥</span>
                      <span>{guru.code}</span>
                      <span className="text-2xl">॥</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-5 pt-4">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-[#800000] mb-3 font-serif tracking-wide">
                      {guru.name}
                    </h3>
                    {/* Sanskrit name intentionally omitted to keep English-only */}
                    <div className="inline-block bg-gradient-to-r from-[#800000] to-[#A52A2A] text-[#FFD700] px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                      {guru.period}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-2xl p-8 mb-6 border-2 border-[#800000]/30 shadow-inner">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-4 text-[#800000] mb-4">
                        <div className="w-8 h-1 bg-gradient-to-r from-[#800000] to-[#A52A2A]"></div>
                        <span className="text-xl font-serif">Sacred Description</span>
                        <div className="w-8 h-1 bg-gradient-to-r from-[#800000] to-[#A52A2A]"></div>
                      </div>
                    </div>
                    <p className="text-[#800000]/90 text-lg leading-relaxed mb-6 text-center font-medium">
                      {guru.description}
                    </p>
                    <p className="text-[#800000]/80 text-base leading-relaxed mb-6 text-center">
                      {guru.detailedDescription}
                    </p>

                    {/* Teachings */}
                    <div className="space-y-4 mb-6">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-[#8B0000] mb-4 font-serif">Key Teachings</h4>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-4"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3">
                        {guru.teachings.map((t, i) => (
                          <motion.span key={i} className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#8B0000] px-5 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-[#8B0000]/20" whileHover={{ scale: 1.05 }}>
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {guru.achievements?.length ? (
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-[#8B0000] mb-3 font-serif text-center">Achievements</h4>
                        <ul className="list-disc list-inside text-[#800000]/90 space-y-2 max-w-3xl mx-auto">
                          {guru.achievements.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {/* Quotes */}
                    {guru.quotes?.length ? (
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-[#8B0000] mb-3 font-serif text-center">Quotes</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {guru.quotes.map((q, i) => (
                            <blockquote key={i} className="bg-[#FFF8DC] border border-[#8B0000]/20 rounded-xl p-4 text-[#800000]/90 italic">
                              “{q}”
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Legacy */}
                    <div>
                      <h4 className="text-xl font-bold text-[#8B0000] mb-3 font-serif text-center">Legacy</h4>
                      <p className="text-[#800000]/80 text-base leading-relaxed text-center max-w-4xl mx-auto">
                        {guru.legacy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-[#FFD700]/40 rounded-tl-2xl"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-[#FFD700]/40 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-[#FFD700]/40 rounded-bl-2xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-[#FFD700]/40 rounded-br-2xl"></div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Sacred Conclusion - Traditional Temple Footer */}
        <motion.div 
          className="bg-gradient-to-br from-[#8B0000] via-[#A52A2A] to-[#8B0000] rounded-3xl p-16 shadow-3xl text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Traditional Temple Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMzBjMC0xNi41NjMtMTMuNDM3LTMwLTMwLTMwdjMwSDMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          </div>
          
          {/* Traditional Decorative Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700]"></div>
          
          {/* Sacred Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
              <div className="mx-8 text-[#FFD700]">
                <span className="text-6xl">॥</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 font-serif tracking-wide bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Sacred Conclusion
            </h2>
            
            {/* Sacred Sanskrit Text */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-[#FFD700]/90 mb-6 font-medium leading-relaxed">
                गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।<br/>
                गुरुः साक्षात् परब्रह्म तस्मै श्री गुरवे नमः॥
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-6"></div>
              <p className="text-xl text-[#FFD700]/80 leading-relaxed">
                The guru is the creator, the preserver, and the destroyer. 
                The guru is the supreme divine reality itself. 
                Salutations to that glorious guru.
              </p>
            </div>
            
            {/* Sacred Symbol Row */}
            <div className="flex justify-center items-center space-x-12 mb-8">
              <div className="text-4xl text-[#FFD700]/70 animate-pulse">◆</div>
              <div className="text-6xl text-[#FFD700] animate-bounce">ॐ</div>
              <div className="text-4xl text-[#FFD700]/70 animate-pulse">◆</div>
            </div>
            
            {/* Final Blessing */}
            <div className="inline-block bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-2xl px-10 py-6 border-2 border-[#FFD700]/30">
              <p className="text-xl text-[#FFD700]/90 font-semibold">
                May the divine grace of our sacred guru parampara guide you on your spiritual journey
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
}
