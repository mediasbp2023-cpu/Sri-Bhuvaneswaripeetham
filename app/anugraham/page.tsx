'use client';

import { motion } from 'framer-motion';
import { HeroBanner } from '@/components/HeroBanner';

export default function AnugrahamPage() {
  const features = [
    {
      id: 'preserve',
      title: 'Preserving Dharma',
      description: 'Support and protect traditional practices, temples and spiritual learning in rural communities.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-600" fill="currentColor" aria-hidden>
          <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91 4 9.27l5.91-.99L12 2z" />
        </svg>
      )
    },
    {
      id: 'spiritual',
      title: 'Spiritual Practices',
      description: 'Daily satsangs, pujas and teachings that guide aspirants along a steady spiritual path.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-600" fill="currentColor" aria-hidden>
          <path d="M12 2C10 6 7 8 7 11a5 5 0 0010 0c0-3-3-5-5-9zM12 22a6 6 0 01-6-6h12a6 6 0 01-6 6z" />
        </svg>
      )
    },
    {
      id: 'community',
      title: 'Community Service',
      description: 'Education, healthcare camps and livelihood programs reaching villages across the region.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-600" fill="currentColor" aria-hidden>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    }
  ];

  return (
  <div className="bg-white min-h-screen">
      <HeroBanner
        title="Anugraham"
        description="Our programs that preserve dharma, support spiritual life, and serve the community."
        imageSrc="/images/hero-home.svg"
        imageAlt="Anugraham hero"
        height="medium"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-maroon">Anugraham</h2>
          <p className="mt-3 text-black max-w-2xl mx-auto">
            Anugraham brings together spiritual guidance, community welfare and practical programs
            to uplift villages and houses of worship. Below are some core focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <motion.article
              key={f.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-lg border border-brand-gold/20"
            >
              <div className="mx-auto w-36 h-36 rounded-full bg-brand-cream flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-2">{f.title}</h3>
              <p className="text-black">{f.description}</p>
            </motion.article>
          ))}
        </div>

        {/* Optional deeper content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-brand-gold/20 shadow-sm">
            <h4 className="text-lg font-semibold mb-3 text-brand-maroon">Programs & Events</h4>
            <p className="text-black">Regular programs include temple rituals, teaching sessions, youth training, and seasonal outreach campaigns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-brand-gold/20 shadow-sm">
            <h4 className="text-lg font-semibold mb-3 text-brand-maroon">How to Participate</h4>
            <p className="text-black">Volunteers and donors are welcome. See the Donate page or contact the ashram for details on joining programs or contributing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
