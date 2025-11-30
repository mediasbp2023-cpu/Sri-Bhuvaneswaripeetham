'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BackNav } from '@/components/BackNav';
import { HeroBanner } from '@/components';

const timelineSections = [
  {
    id: 'first-padayatra',
    title: 'మొదటి పాదయాత్ర',
    year: '2007-2008',
    subtitle: 'బాసర నుండి తిరుమల వరకు',
    description: 'ప్రథమ మహాపాదయాత్ర ప్రారంభం',
    mainContent: '2007 సెప్టెంబర్ 16, ఋషి పంచమి నుండి 2008 జనవరి 26 వరకు 13 జిల్లాల్లో 130 రోజుల పాటు, 3200 కి.మీ. మహా పాదయాత్ర చేసి తిరుపతిలో 10 వేల మందితో "భక్తిసంగమం" నిర్వహించారు.',
    stats: [
      { label: 'రోజులు', value: '130' },
      { label: 'కి.మీ.', value: '3,200' },
      { label: 'జిల్లాలు', value: '13' },
      { label: 'భక్తుల సంగమం', value: '10,000+' }
    ],
    districts: ['అదిలాబాద్', 'నిజామాబాద్', 'కరీంనగర్', 'వరంగల్', 'నల్గొండ', 'మెదక్', 'రంగారెడ్డి', 'హైదరాబాద్', 'మహబూబ్ నగర్', 'కర్నూల్', 'అనంతపురం', 'కడప', 'చిత్తూరు'],
    image: '/images/hero-home.svg'
  },
  {
    id: 'second-padayatra',
    title: 'రెండవ పాదయాత్ర',
    year: '2009',
    subtitle: 'శ్రీకూర్మం నుండి తిరుమల వరకు',
    description: 'సమగ్ర గ్రామ సందర్శన',
    mainContent: 'నాగపంచమి 6.8.2009 నుండి 16.2.2009 వరకు 11 జిల్లాలు – 200 రోజులు, 5500 కి.మీ. – 800 గ్రామాలు, దళిత బస్తీలు, గిరిజన బస్తీలు, మత్స్యకార గ్రామాలు సందర్శించి 2009 ఫిబ్రవరి 16న తిరుపతిలో 25 వేల మందితో "మహా భక్తిసంగమం" నిర్వహించారు.',
    stats: [
      { label: 'రోజులు', value: '200' },
      { label: 'కి.మీ.', value: '5,500' },
      { label: 'గ్రామాలు', value: '800+' },
      { label: 'భక్తుల సంగమం', value: '25,000+' }
    ],
    districts: ['శ్రీకాకుళం', 'విజయనగరం', 'విశాఖపట్నం', 'తూర్పుగోదావరి', 'పశ్చిమ గోదావరి', 'ఖమ్మం', 'కృష్ణ', 'గుంటూరు', 'ప్రకాశం', 'నెల్లూరు', 'చిత్తూరు'],
    image: '/images/hero-home.svg'
  },
  {
    id: 'third-padayatra',
    title: 'మూడవ మహా పాదయాత్ర',
    year: '2009-2010',
    subtitle: 'మహాభాగ్యనగర్ మహా పాదయాత్ర',
    description: 'సంకల్పిత ప్రయాణం',
    mainContent: 'మహాభాగ్యనగర్ మహా పాదయాత్ర సంకల్పించి ఆశ్వయుజ శుద్ధ ద్వితీయ నుండి (20.9.2009) నుండి వసంత పంచమి (21.1.2010) వరకు 130 రోజులు, పాదయాత్ర నిర్వహించారు.',
    stats: [
      { label: 'రోజులు', value: '130' },
      { label: 'ప్రారంభం', value: '20.9.2009' },
      { label: 'ముగింపు', value: '21.1.2010' },
      { label: 'సంకల్పం', value: 'మహాభాగ్యనగర్' }
    ],
    districts: ['వివిధ ప్రాంతాలు', 'గ్రామాలు', 'దేవాలయాలు', 'సమాజ కేంద్రాలు'],
    image: '/images/hero-home.svg'
  },
  {
    id: 'rathayatra',
    title: 'మొదటి రథ యాత్ర',
    year: '2012-2017',
    subtitle: 'సంపూర్ణ గ్రామ దేవాలయ సందర్శన',
    description: 'రథయాత్ర ప్రారంభం',
    mainContent: '2012లో ప్రారంభించి గ్రామ గ్రామాన రథయాత్ర చేస్తూ వేలాది గ్రామాలూ, దేవాలయాలు సందర్శిస్తూ, గిరిజన యానాదులు అర్చకులుగా ఉన్నటువంటి దేవునివెల్లంపల్లి గ్రామ శివాలయం, తిరుపతి జిల్లా నుండి ఆగస్టు2, 2017 శ్రావణ మాసం నుండి ప్రారంభించి సంపూర్ణ గ్రామ దేవాలయ సందర్శన రథయాత్ర చేసారు.',
    stats: [
      { label: 'గ్రామాలు', value: 'వేలాది' },
      { label: 'దేవాలయాలు', value: 'వేలాది' },
      { label: 'ప్రారంభం', value: '2012' },
      { label: 'కాలం', value: '5 సంవత్సరాలు' }
    ],
    districts: ['ఆంధ్రప్రదేశ్', 'తెలంగాణ', 'గ్రామాలు', 'దేవాలయాలు'],
    image: '/images/hero-home.svg'
  }
];

export default function MahapadayatraTimelinePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineSections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineSections.length) % timelineSections.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSection = timelineSections[currentIndex];
  const prevSection = timelineSections[(currentIndex - 1 + timelineSections.length) % timelineSections.length];
  const nextSection = timelineSections[(currentIndex + 1) % timelineSections.length];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="మహాపాదయాత్ర కాలక్రమం"
        description="Mahapadayatra Timeline - Journey Through Time"
        height="small"
      />
      <BackNav />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        {/* Intro Section */}
        <div className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-brand-gold/20">
          <div className="prose max-w-none text-black">
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              <strong>భారతదేశమే ఒక దేవాలయం - ప్రతి దేవాలయం ఒక భారతదేశం</strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              ఈ సంకల్పంతోనే పరమహంస పరివ్రాజకాచార్య శ్రీ శ్రీ శ్రీ కమలానంద భారతీ స్వామిజీ మన దేవాలయాలను మనమే కాపాడుకుందాం, మన దేవాలయాలను మనమే నిర్వహించుకుందాం, మన సమాజాన్ని మనమే సేవించుకుందాం అని సందేశంతో ఇప్పటికే ఆంధ్ర, తెలంగాణ రాష్ట్రాలలో 2007 నుండి 2010 వరకు మూడు మహాపాదయాత్రలు, 2012 నుండి తిరిగి రథయాత్రలను నిర్వహించివున్నారు. ఇందులో భాగంగా దాదాపు 8,500 గ్రామాలలో 35వేలకు పైగా దేవాలయాలను సందర్శించారు.
            </p>
          </div>
        </div>

        {/* Timeline Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {timelineSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => goToSlide(index)}
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 transition-all text-left ${
                currentIndex === index
                  ? 'border-brand-maroon ring-4 ring-brand-gold/30'
                  : 'border-brand-gold/20 hover:border-brand-maroon/50'
              }`}
            >
              <div className="text-xs sm:text-sm text-gray-500 mb-2">{section.year}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-maroon mb-2">
                {section.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">{section.subtitle}</p>
              <div className="flex items-center text-brand-maroon text-xs sm:text-sm">
                <span>Read More →</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-brand-gold/20 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-maroon mb-2">
                  {currentSection.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-maroon/80 mb-2">
                  {currentSection.year}
                </p>
                <p className="text-base sm:text-lg text-gray-700">{currentSection.subtitle}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-brand-maroon text-white hover:bg-brand-maroon/90 transition-colors flex items-center justify-center"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-brand-maroon text-white hover:bg-brand-maroon/90 transition-colors flex items-center justify-center"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="prose max-w-none text-black mb-6">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              {currentSection.mainContent}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {currentSection.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-brand-gold/30"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-maroon mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Districts List */}
          <div className="mb-4">
            <h4 className="font-semibold text-brand-maroon mb-3 text-base sm:text-lg">జిల్లాలు / ప్రాంతాలు:</h4>
            <div className="flex flex-wrap gap-2">
              {currentSection.districts.map((district, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-brand-cream text-brand-maroon rounded-full text-xs sm:text-sm font-medium border border-brand-gold/30"
                >
                  {district}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-brand-gold/20 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-maroon mb-2">8,500+</div>
            <div className="text-xs sm:text-sm text-gray-700">గ్రామాలు</div>
            <div className="text-xs text-gray-500 mt-1">Villages</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-brand-gold/20 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-maroon mb-2">35,000+</div>
            <div className="text-xs sm:text-sm text-gray-700">దేవాలయాలు</div>
            <div className="text-xs text-gray-500 mt-1">Temples</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-brand-gold/20 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-maroon mb-2">10,000+</div>
            <div className="text-xs sm:text-sm text-gray-700">కి.మీ.</div>
            <div className="text-xs text-gray-500 mt-1">Kilometers</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-brand-gold/20 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-maroon mb-2">2007+</div>
            <div className="text-xs sm:text-sm text-gray-700">సంవత్సరాలు</div>
            <div className="text-xs text-gray-500 mt-1">Years</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center">
          <Link
            href="/mahapadayatra/overview"
            className="inline-block bg-gradient-to-r from-brand-maroon to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-brand-maroon/90 hover:to-orange-800/90 transition-colors text-sm sm:text-base"
          >
            Back to Overview
          </Link>
          <Link
            href="/mahapadayatra/stories"
            className="inline-block bg-gradient-to-r from-brand-maroon to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-brand-maroon/90 hover:to-orange-800/90 transition-colors text-sm sm:text-base"
          >
            Read Stories
          </Link>
        </div>
      </div>
    </div>
  );
}
