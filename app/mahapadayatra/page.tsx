"use client";

import { AnimatedTimeline } from '@/components';
import type { TimelineEvent } from '@/components/AnimatedTimeline';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const travelEvents: TimelineEvent[] = [
  {
    year: "2007",
    title: "Beginning of the Journey",
    description: "Started from Sri Bhuvaneshwari Peetham with the mission to spread spiritual awareness and serve communities across regions.",
    stats: [
      { value: "500+", label: "Villages Visited" },
      { value: "10000+", label: "Devotees Blessed" }
    ]
  },
  {
    year: "2012",
    title: "Southern India Pilgrimage",
    description: "Extensive travel through Tamil Nadu, Kerala, and Karnataka, visiting ancient temples and conducting spiritual discourses.",
    stats: [
      { value: "100+", label: "Temples Visited" },
      { value: "50+", label: "Spiritual Camps" }
    ]
  },
  {
    year: "2016",
    title: "Northern Sacred Journey",
    description: "Traveled through the Himalayas, visiting sacred sites and conducting meditation camps in Uttarakhand and Himachal Pradesh.",
    stats: [
      { value: "25+", label: "Mountain Temples" },
      { value: "1000+", label: "Meditation Students" }
    ]
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adapted to global challenges by initiating online spiritual sessions and virtual satsangs, reaching devotees worldwide.",
    stats: [
      { value: "200+", label: "Online Sessions" },
      { value: "50000+", label: "Digital Reach" }
    ]
  },
  {
    year: "2024",
    title: "Community Outreach",
    description: "Focused on social service initiatives, education programs, and spiritual guidance across different communities.",
    stats: [
      { value: "30+", label: "Education Centers" },
      { value: "5000+", label: "Students Benefited" }
    ]
  }
];

export default function MahapadayatraPage() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const stories = [
    {
      id: 1,
      title: 'The First Steps — 2007',
      excerpt: 'A humble beginning: how the journey started with a small group of volunteers and a single temple visit that sparked a movement.',
      body: 'In 2007 the Mahapadayatra began as a modest effort to bring spiritual guidance and practical help to nearby villages. What started with a handful of devotees quickly grew into a larger movement as locals embraced the services and teachings provided during the visits.'
    },
    {
      id: 2,
      title: 'Crossing Regions — 2016 Pilgrimage',
      excerpt: 'Traveling through difficult terrain and bringing medicine and teaching to remote hamlets.',
      body: 'During 2016 the pilgrimage extended into northern regions, crossing mountain passes and organizing meditation camps in remote temples. The team coordinated logistics under trying conditions and established lasting relationships with local communities.'
    },
    {
      id: 3,
      title: 'Digital Shift — 2020',
      excerpt: 'Adapting to challenges by moving satsangs online, widening the reach across the world.',
      body: 'When travel slowed during 2020, the Mahapadayatra adapted by hosting virtual satsangs and online teachings. This allowed devotees from distant places to connect with the teachings and join the movement from afar.'
    }
  ];

  return (
  <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">Mahapadayatra</h1>
          <p className="text-xl text-orange-600/80">A spiritual journey across India, spreading wisdom and serving communities.</p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="my-8">
        <AnimatedTimeline events={travelEvents} />
      </section>

      {/* Additional Details */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">About the Journey</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-black mb-4">
            Since 2007, our spiritual journey has touched countless lives across India. 
            Through various Mahapadayatras, we have established connections with communities, 
            conducted spiritual discourses, and initiated social service projects.
          </p>
          <p className="text-lg text-black">
            Each year marks a significant milestone in our mission to spread spiritual awareness 
            and serve humanity. The journey continues with the blessings of devotees and the 
            divine grace of Sri Bhuvaneshwari Mata.
          </p>
        </div>
      </div>

      {/* Stories Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-orange-600">Padayatra Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <motion.article key={s.id} whileHover={{ y: -6 }} className="p-4 bg-white border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-black mb-4">{s.excerpt}</p>
              <button onClick={() => setSelectedStory(s.id)} className="text-sm text-orange-600">Read more</button>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selectedStory && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} className="max-w-2xl bg-white rounded-lg p-6">
                <button className="text-sm text-black mb-3" onClick={() => setSelectedStory(null)}>Close</button>
                <h3 className="text-xl font-semibold mb-2">{stories.find(s => s.id === selectedStory)?.title}</h3>
                <p className="text-black">{stories.find(s => s.id === selectedStory)?.body}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
