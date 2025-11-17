'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { HeroBanner } from '@/components';
import { guruData as sharedGuruData } from '@/app/constants/guru';

interface GuruData {
  id: string;
  code: string;
  name: string;
  fullName: string;
  sanskritName: string;
  description: string;
  detailedDescription: string;
  period: string;
  birthDate?: string;
  birthPlace?: string;
  teachings: string[];
  achievements: string[];
  quotes: string[];
  legacy: string;
  image?: string;
}

const guruData: Record<string, GuruData> = {
  scss: {
    id: 'scss',
    code: 'SCSS',
    name: 'Sri Chidananda Saraswati Swami',
    fullName: 'Sri Chidananda Saraswati Swami',
    sanskritName: 'श्री चिदानन्द सरस्वती स्वामी',
    description: 'A revered spiritual master known for his profound wisdom and dedication to Vedic traditions.',
    detailedDescription: 'Sri Chidananda Saraswati Swami was a luminous beacon of spiritual wisdom whose life exemplified the highest ideals of Sanatana Dharma. His profound understanding of Vedic scriptures and ability to transmit ancient wisdom in contemporary contexts made him a revered guide for countless seekers. He established numerous spiritual centers and dedicated his life to the preservation and propagation of Vedic traditions, serving as a bridge between ancient wisdom and modern spiritual practice.',
    period: '20th Century',
    teachings: ['Vedic Philosophy', 'Meditation Practices', 'Self-Realization', 'Scriptural Study', 'Ritual Purity'],
    achievements: ['Established spiritual centers across India', 'Preserved ancient Vedic traditions', 'Guided thousands of disciples', 'Authored spiritual texts'],
    quotes: [
      'The path to self-realization begins with selfless service',
      'True wisdom lies in recognizing the divine in every being',
      'Meditation is not an escape from life, but a deeper engagement with reality'
    ],
    legacy: 'His teachings continue to inspire spiritual seekers worldwide, and the institutions he established remain centers of learning and spiritual practice.'
  },
  ssbs: {
    id: 'ssbs',
    code: 'SSBS',
    name: 'Sri Satyananda Bharati Swami',
    fullName: 'Sri Satyananda Bharati Swami',
    sanskritName: 'श्री सत्यानन्द भारती स्वामी',
    description: 'A distinguished spiritual guide who dedicated his life to the revival of ancient traditions and temple worship.',
    detailedDescription: 'Sri Satyananda Bharati Swami was a transformative spiritual leader whose life mission centered on the revival of temple worship and the restoration of ancient spiritual traditions. His extensive padayatras across the length and breadth of India were not merely physical journeys but spiritual pilgrimages that rekindled the flame of devotion in countless communities. He had an extraordinary ability to connect with people from all walks of life, inspiring them to reconnect with their spiritual heritage.',
    period: '2012 - 2015',
    birthDate: 'Sacred advent during 2012-2015',
    teachings: ['Temple Revival', 'Spiritual Travel', 'Community Service', 'Traditional Worship', 'Pilgrimage'],
    achievements: ['Conducted extensive padayatras across India', 'Revived temple worship practices', 'Inspired community spiritual revival', 'Established pilgrimage traditions'],
    quotes: [
      'Every step in pilgrimage is a step toward the divine',
      'Temples are not just buildings; they are living centers of spiritual energy',
      'Service to humanity is the highest form of worship'
    ],
    legacy: 'His padayatras and temple revival efforts continue to inspire spiritual communities across India, fostering a renewed connection with traditional practices.'
  },
  scbs: {
    id: 'scbs',
    code: 'SCBS',
    name: 'Sri Chidananda Bharati Swami',
    fullName: 'Sri Chidananda Bharati Swami',
    sanskritName: 'श्री चिदानन्द भारती स्वामी',
    description: 'A compassionate spiritual mentor who focused on the revival of traditional practices and spiritual guidance.',
    detailedDescription: 'Sri Chidananda Bharati Swami embodied the essence of compassionate spiritual leadership, dedicating his life to the meticulous revival of traditional practices and the provision of profound spiritual guidance. His approach combined deep scriptural knowledge with practical wisdom, making ancient teachings accessible to contemporary seekers. He served as a spiritual anchor for the community, providing steady guidance through changing times while maintaining the integrity of traditional practices.',
    period: '2015 - 2019',
    teachings: ['Spiritual Mentorship', 'Traditional Practices', 'Compassionate Leadership', 'Scriptural Guidance', 'Community Welfare'],
    achievements: ['Revived traditional spiritual practices', 'Mentored numerous spiritual seekers', 'Strengthened community spiritual bonds', 'Preserved ancient rituals'],
    quotes: [
      'Compassion is the foundation of true spiritual practice',
      'Tradition is not about preserving the ashes, but keeping the flame alive',
      'True leadership means serving those who follow you'
    ],
    legacy: 'His emphasis on compassionate leadership and traditional practice revival continues to guide the spiritual community he served.'
  },
  spbs: {
    id: 'spbs',
    code: 'SPBS',
    name: 'Sri Paramananda Bharati Swami',
    fullName: 'Sri Paramananda Bharati Swami',
    sanskritName: 'श्री परमानन्द भारती स्वामी',
    description: 'An enlightened master who emphasized the importance of divine bliss and spiritual happiness.',
    detailedDescription: 'Sri Paramananda Bharati Swami was a luminous embodiment of divine bliss and spiritual happiness, whose teachings centered on the experience of supreme joy that transcends worldly pleasures. He illuminated the path of devotion and selfless service, demonstrating through his own life how spiritual practice could lead to a state of perpetual divine happiness. His teachings emphasized that true fulfillment comes not from external acquisitions but from internal realization of one\'s divine nature.',
    period: '19th - 20th Century',
    teachings: ['Divine Bliss', 'Devotional Practices', 'Selfless Service', 'Bhakti Yoga', 'Spiritual Happiness'],
    achievements: ['Taught the path of divine bliss', 'Promoted devotional practices', 'Established service organizations', 'Inspired spiritual happiness'],
    quotes: [
      'Divine bliss is our true nature; everything else is just a shadow',
      'Service performed without expectation purifies the heart',
      'Happiness is not found; it is revealed when the ego dissolves'
    ],
    legacy: 'His teachings on divine bliss and devotional service continue to guide seekers toward experiencing supreme spiritual happiness.'
  },
  ssbs2: {
    id: 'ssbs2',
    code: 'SSBS2',
    name: 'Sri Sadananda Bharati Swami',
    fullName: 'Sri Sadananda Bharati Swami',
    sanskritName: 'श्री सदानन्द भारती स्वामी',
    description: 'A wisdom teacher who emphasized eternal happiness and spiritual contentment.',
    detailedDescription: 'Sri Sadananda Bharati Swami was a profound wisdom teacher whose life mission centered on imparting the knowledge of eternal happiness and spiritual contentment. He established educational institutions that became centers of Vedic learning, ensuring that ancient wisdom would be transmitted to future generations. His approach to education combined traditional scriptural study with practical application, creating a holistic system that addressed both intellectual understanding and spiritual realization.',
    period: 'Late 20th Century',
    teachings: ['Eternal Wisdom', 'Educational Reform', 'Spiritual Contentment', 'Vedic Learning', 'Youth Education'],
    achievements: ['Established Vedic educational institutions', 'Promoted Vedic learning among youth', 'Reformed educational approaches', 'Taught eternal wisdom principles'],
    quotes: [
      'True education awakens the wisdom that already exists within',
      'Eternal happiness comes from understanding our eternal nature',
      'Contentment is the foundation of spiritual progress'
    ],
    legacy: 'His educational institutions and emphasis on eternal wisdom continue to shape the spiritual education of countless students.'
  },
  skbs: {
    id: 'skbs',
    code: 'SKBS',
    name: 'Sri Kamalananda Bharati Swami',
    fullName: 'Sri Kamalananda Bharati Swami',
    sanskritName: 'श्री कमलानन्द भारती स्वामी',
    description: 'The current Peethadhipati who has been leading since 2007.',
    detailedDescription: 'Sri Kamalananda Bharati Swami, the current Peethadhipati, has been a transformative force in spiritual leadership since 2007. His vision encompasses the strengthening of village temples as centers of community spiritual life, the revival of traditional practices that had fallen into disuse, and the implementation of comprehensive community outreach initiatives. Under his guidance, the peetham has expanded its service activities while maintaining the highest standards of spiritual practice and traditional integrity.',
    period: '2007 - Present',
    birthDate: 'Leading since 2007',
    teachings: ['Temple Strengthening', 'Community Outreach', 'Traditional Revival', 'Village Development', 'Spiritual Leadership'],
    achievements: ['Strengthened village temples', 'Revived traditional practices', 'Led community outreach initiatives', 'Expanded peetham services'],
    quotes: [
      'A strong temple creates a strong community',
      'Tradition must be lived, not just remembered',
      'Spiritual leadership means serving the spiritual needs of all'
    ],
    legacy: 'His ongoing leadership continues to strengthen the spiritual foundation of communities while preserving and promoting traditional practices for future generations.'
  }
};

export default function GuruDetailPage() {
  const params = useParams();
  const guruId = params?.guruId as string;
  const guru = useMemo(() => (guruId ? sharedGuruData[guruId] ?? null : null), [guruId]);

  if (!guru) {
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
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#FFD700]/30">
            <h1 className="text-4xl font-bold text-[#800000] mb-4">Guru Not Found</h1>
            <p className="text-lg text-[#800000]/70">The requested guru page could not be found.</p>
            <Link href="/guru-parampara" className="inline-block mt-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] px-6 py-3 rounded-full font-semibold hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300">
              Back to Guru Parampara
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Traditional Temple Header with Website Theme Colors */}
        <div className="relative bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] text-[#800000] py-16 overflow-hidden">
        {/* Sacred Decorative Pattern with Website Theme Colors */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#800000] via-[#A52A2A] to-[#800000]"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#800000] via-[#A52A2A] to-[#800000]"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-[#800000]/20"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-[#800000]/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Sacred Header with Traditional Elements */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-[#A52A2A] mx-6"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#FFD700]/30">
                <span className="text-[#FFD700] font-bold text-3xl">ॐ</span>
              </div>
              <div className="absolute -inset-2 border-2 border-[#800000]/40 rounded-full animate-pulse"></div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-[#A52A2A] mx-6"></div>
          </div>
          
          <motion.h1 
            className="text-6xl font-bold mb-6 font-serif tracking-wide bg-gradient-to-r from-[#800000] to-[#A52A2A] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {guru.name}
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-[#FFD700]/90 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {guru.fullName}
          </motion.p>
          
          {/* Sacred Code Badge */}
          <motion.div 
            className="mt-8 inline-block bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 rounded-full px-8 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="text-[#FFD700] font-semibold text-lg">॥ {guru.code} ॥</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Guru Overview with Portrait */}
        <motion.div 
          className="bg-gradient-to-br from-[#FFF8DC] via-[#FFE4B5] to-[#F5DEB3] rounded-3xl p-8 shadow-2xl border-4 border-[#800000]/20 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="md:flex md:items-start md:gap-8">
            {/* Portrait Placeholder */}
            <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
              <Image
                src={guru.image ?? '/images/testimonials/person-1.svg'}
                alt={`${guru.fullName} portrait`}
                width={256}
                height={256}
                className="rounded-full object-cover ring-4 ring-[#FFD700]/50 shadow-xl bg-white"
                priority
              />
            </div>
            {/* Description */}
            <div className="md:w-2/3">
              <div className="text-center md:text-left mb-6">
                <div className="inline-flex items-center space-x-4 text-[#8B0000] mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
                  <span className="text-2xl font-serif font-bold">Sacred Description</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
                </div>
              </div>
              <p className="text-lg text-[#8B0000]/90 leading-relaxed font-medium">
                {guru.detailedDescription}
              </p>
            </div>
          </div>

          {/* Period and Details */}
          {guru.birthDate && (
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                {guru.birthDate}
              </div>
            </div>
          )}
        </motion.div>

        {/* Teachings Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 text-[#8B0000] mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
              <span className="text-3xl font-serif font-bold">Key Teachings</span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guru.teachings.map((teaching, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-2xl p-6 shadow-lg border-2 border-[#FFD700]/30 text-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#8B0000] font-bold text-lg">{teaching}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 text-[#8B0000] mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
              <span className="text-3xl font-serif font-bold">Key Achievements</span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#FFF8DC] via-[#FFE4B5] to-[#F5DEB3] rounded-3xl p-8 shadow-2xl border-4 border-[#800000]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guru.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#8B0000]/90 text-lg leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quotes Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 text-[#8B0000] mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
              <span className="text-3xl font-serif font-bold">Quotes</span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            {guru.quotes.map((quote, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-r from-[#FFFFF0] to-[#FFF8DC] rounded-2xl p-8 shadow-lg border-2 border-[#FFD700]/30 text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.6 }}
              >
                <div className="absolute top-4 left-4 text-4xl text-[#FFD700]/30 font-serif">&ldquo;</div>
                <div className="absolute bottom-4 right-4 text-4xl text-[#FFD700]/30 font-serif">&rdquo;</div>
                <p className="text-[#8B0000]/90 text-lg leading-relaxed font-medium italic">
                  {quote}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legacy Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 text-[#8B0000] mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
              <span className="text-3xl font-serif font-bold">Legacy</span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#8B0000] via-[#A52A2A] to-[#8B0000] rounded-3xl p-8 shadow-3xl text-white text-center">
            <p className="text-xl leading-relaxed font-medium">
              {guru.legacy}
            </p>
          </div>
        </motion.div>

        {/* Back to Parampara Link */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link 
            href="/guru-parampara"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span>←</span>
            <span>Return to Guru Parampara</span>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
  );
}