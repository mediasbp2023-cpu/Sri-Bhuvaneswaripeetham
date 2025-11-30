'use client';

import { BackNav } from '@/components/BackNav';
import Link from 'next/link';

export default function MahapadayatraStoriesPage() {
  const stories = [
    {
      title: "The Divine Encounter at Rishikesh",
      author: "Sri Devi Priya",
      date: "March 2023",
      excerpt: "Our journey began with an unexpected blessing from a wandering saint...",
      category: "Divine Experiences"
    },
    {
      title: "The Healing Waters of Gangotri",
      author: "Sri Ram Kumar",
      date: "February 2023", 
      excerpt: "The sacred waters seemed to wash away not just physical fatigue but years of emotional burden...",
      category: "Transformation"
    },
    {
      title: "The Night Under the Stars at Kedarnath",
      author: "Sita Maa",
      date: "January 2023",
      excerpt: "As we camped under the Himalayan stars, the silence spoke louder than any words...",
      category: "Nature & Spirituality"
    },
    {
      title: "The Old Woman's Blessing in Varanasi",
      author: "Arjun Sharma",
      date: "December 2022",
      excerpt: "A simple encounter with an elderly woman by the Ganges became the most profound teaching...",
      category: "Divine Experiences"
    },
    {
      title: "The Mountain Temple Miracle",
      author: "Lakshmi Devi",
      date: "November 2022",
      excerpt: "When the path seemed impossible, the mountain itself seemed to guide our way...",
      category: "Miracles"
    },
    {
      title: "The Silent Teaching of the Forest Monk",
      author: "Vishwanath",
      date: "October 2022",
      excerpt: "Without speaking a word, the forest monk taught us the essence of meditation...",
      category: "Wisdom Teachings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Mahapadayatra Stories</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Inspiring experiences and transformative moments from our sacred journeys
          </p>
        </div>

        {/* Featured Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <div className="flex items-center mb-4">
            <span className="bg-brand-maroon text-brand-gold px-3 py-1 rounded-full text-sm font-medium">Featured</span>
          </div>
          <h2 className="text-3xl font-bold text-brand-maroon mb-4">The Divine Encounter at Rishikesh</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our journey began with an unexpected blessing from a wandering saint who appeared seemingly out of nowhere 
            during our morning meditation by the Ganges. His eyes held the depth of centuries, and his words carried 
            the weight of eternal truth...
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium">By:</span> Sri Devi Priya • <span className="font-medium">March 2023</span>
            </div>
            <button className="text-brand-maroon font-medium hover:text-brand-maroon/90 transition-colors">
              Read Full Story →
            </button>
          </div>
        </div>

        {/* Story Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-brand-maroon text-brand-gold rounded-full font-medium hover:bg-brand-maroon/90 transition-colors">
            All Stories
          </button>
          <button className="px-6 py-2 bg-brand-cream text-brand-maroon rounded-full font-medium hover:bg-brand-cream/80 transition-colors">
            Divine Experiences
          </button>
          <button className="px-6 py-2 bg-brand-cream text-brand-maroon rounded-full font-medium hover:bg-brand-cream/80 transition-colors">
            Transformation
          </button>
          <button className="px-6 py-2 bg-brand-cream text-brand-maroon rounded-full font-medium hover:bg-brand-cream/80 transition-colors">
            Nature & Spirituality
          </button>
          <button className="px-6 py-2 bg-brand-cream text-brand-maroon rounded-full font-medium hover:bg-brand-cream/80 transition-colors">
            Miracles
          </button>
          <button className="px-6 py-2 bg-brand-cream text-brand-maroon rounded-full font-medium hover:bg-brand-cream/80 transition-colors">
            Wisdom Teachings
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-brand-cream text-brand-maroon px-3 py-1 rounded-full text-xs font-medium">
                  {story.category}
                </span>
                <span className="text-sm text-gray-500">{story.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">{story.title}</h3>
              <p className="text-gray-700 mb-4">{story.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  <span className="font-medium">By:</span> {story.author}
                </span>
                <button className="text-brand-maroon font-medium hover:text-brand-maroon/90 transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-8 text-center">Devotee Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-maroon pl-6">
              <p className="text-gray-700 italic mb-4">
                “The Mahapadayatra transformed my understanding of spirituality. Walking through those sacred lands, 
                I felt connected to something much greater than myself.”
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">- Sri Ananda Mayi</span>
                <br />
                <span>2023 Journey Participant</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-maroon pl-6">
              <p className="text-gray-700 italic mb-4">
                “Every step of the journey was filled with divine grace. The stories we shared, the experiences 
                we had — they continue to inspire my daily practice.”
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">- Sri Ravi Shankar</span>
                <br />
                <span>2022 Journey Participant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="text-center bg-white rounded-xl p-8 mb-12 border border-brand-gold/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-6">Get Involved</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our spiritual community and be part of the divine journey. Your support and participation help us continue our sacred mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors shadow-md">
              Donate
            </button>
            <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors shadow-md">
              Volunteer
            </button>
            <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors shadow-md">
              Arjita Sevas
            </button>
            <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors shadow-md">
              Contact
            </button>
          </div>

          {/* Social Media Integration */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Follow us on:</span>
              <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-md" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors shadow-md" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors shadow-md" title="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 3.502 6.186C3 8.07 3 12 3 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C21 15.93 21 12 21 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Share Your Story Section */}
        <div className="text-center bg-brand-cream rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Share Your Story</h2>
          <p className="text-gray-700 mb-6">
            Have you been on a Mahapadayatra journey? We’d love to hear your experiences and insights.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Submit Your Story
          </button>
        </div>

        <div className="text-center mt-12">
          <Link href="/mahapadayatra/timeline" className="inline-block bg-brand-maroon text-brand-gold px-8 py-4 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors mr-4">
            View Timeline
          </Link>
          <Link href="/mahapadayatra/gallery" className="inline-block bg-brand-maroon text-brand-gold px-8 py-4 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Photo Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}