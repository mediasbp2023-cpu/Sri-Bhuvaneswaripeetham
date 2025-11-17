'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function AnimatedTimeline({ events }: TimelineProps) {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Enhanced default events with IndianPAC-style content
  const defaultEvents: TimelineEvent[] = [
    { 
      year: '1990', 
      title: 'FOUNDATION', 
      description: 'Establishment of Bhuvaneshwari Peetham under the divine guidance of Sri Sri Sri Satyananda Bharati Swamy.',
      stats: [
        { value: '1', label: 'Sacred Beginning' },
        { value: '∞', label: 'Divine Blessings' }
      ]
    },
    { 
      year: '1995', 
      title: 'TEMPLE CONSTRUCTION', 
      description: 'Construction of the main temple complex with traditional architecture and modern facilities.',
      stats: [
        { value: '5', label: 'Years Planning' },
        { value: '24/7', label: 'Sacred Energy' }
      ]
    },
    { 
      year: '2000', 
      title: 'EXPANSION', 
      description: 'Expansion of ashram facilities and introduction of various spiritual programs.',
      stats: [
        { value: '2X', label: 'Growth' },
        { value: '1000+', label: 'Devotees' }
      ]
    },
    { 
      year: '2005', 
      title: 'COMMUNITY SERVICES', 
      description: 'Launch of community welfare programs and educational initiatives.',
      stats: [
        { value: '50+', label: 'Villages' },
        { value: '10000+', label: 'Lives Touched' }
      ]
    },
    { 
      year: '2010', 
      title: 'DIGITAL PRESENCE', 
      description: 'Establishment of digital platforms to reach global devotees.',
      stats: [
        { value: 'Global', label: 'Reach' },
        { value: '24/7', label: 'Online Darshan' }
      ]
    },
    { 
      year: '2015', 
      title: 'GLOBAL OUTREACH', 
      description: 'International expansion and establishment of centers worldwide.',
      stats: [
        { value: '10+', label: 'Countries' },
        { value: '100K+', label: 'Global Devotees' }
      ]
    },
    { 
      year: '2020', 
      title: 'MODERNIZATION', 
      description: 'Integration of modern technology while preserving traditional values.',
      stats: [
        { value: 'Tech', label: 'Integration' },
        { value: 'Ancient', label: 'Wisdom' }
      ]
    },
    { 
      year: '2024', 
      title: 'FUTURE VISION', 
      description: 'Continued growth and service to humanity with divine blessings.',
      stats: [
        { value: '∞', label: 'Service' },
        { value: 'Divine', label: 'Mission' }
      ]
    }
  ];

  const timelineEvents = events && events.length > 0 ? events : defaultEvents;

  // Handle horizontal scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('timeline-container');
    if (container) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative py-16 overflow-hidden">
      {/* Temple Image Background - Clean Version */}
      <div className="absolute inset-0">
        <img
          src="/images/aalayam/aalayam 4.jpg"
          alt="Temple Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-gray-800 mb-6 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SACRED JOURNEY THROUGH TIME
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <motion.p 
          className="text-xl text-gray-700 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Follow our spiritual journey across the years, spreading divine wisdom and serving communities worldwide
        </motion.p>
      </div>

      {/* Horizontal Scrolling Timeline Container */}
      <div className="relative max-w-full overflow-hidden">
        {/* Scroll Navigation */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-4 rounded-full text-white shadow-xl border border-orange-200/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll Left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 p-4 rounded-full text-white shadow-xl border border-orange-200/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll Right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Timeline Cards Container */}
        <div 
          id="timeline-container"
          className="flex gap-8 overflow-x-auto scrollbar-hide px-16 py-8 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative group flex-shrink-0 w-80"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Main Card */}
              <div 
                className={`h-[28rem] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 relative
                  ${index === 2 ? 'ring-4 ring-white/50 shadow-2xl scale-105' : 'shadow-xl'}
                  bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm border border-white/20`}
                onMouseEnter={() => setHoveredYear(event.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Temple Image Header */}
                <div className="h-32 relative overflow-hidden">
                  <img
                    src="/images/aalayam/aalayam 1.png"
                    alt="Temple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    {event.year}
                  </div>
                  
                  {/* Featured Card Indicator */}
                  {index === 2 && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Featured
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 h-[calc(100%-8rem)] flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                    {event.title}
                  </h3>
                  
                  {/* Stats */}
                  {event.stats && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {event.stats.map((stat, i) => (
                        <div key={i} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                          <div className="text-lg font-bold text-orange-600 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs font-semibold text-orange-800 uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Know More
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-t from-orange-800/95 to-orange-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                   initial={false}
                   animate={{ opacity: hoveredYear === event.year ? 1 : 0 }}
                 >
                   <div className="text-white text-center p-8 max-w-full">
                     <div className="text-2xl font-bold mb-3">{event.year}</div>
                     <div className="text-lg font-semibold mb-4">{event.title}</div>
                     <div className="text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                       {event.description}
                     </div>
                     <motion.div
                       className="w-12 h-1 bg-white rounded-full mx-auto"
                       initial={{ scale: 0 }}
                       animate={{ scale: hoveredYear === event.year ? 1 : 0 }}
                       transition={{ delay: 0.2 }}
                     />
                   </div>
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}