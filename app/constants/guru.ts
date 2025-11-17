export interface GuruData {
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

export const guruData: Record<string, GuruData> = {
  scss: {
    id: 'scss',
    code: 'SCSS',
    name: 'Sri Chidananda Saraswati Swami',
    fullName: 'Sri Chidananda Saraswati Swami',
    sanskritName: 'श्री चिदानन्द सरस्वती स्वामी',
    description: 'A revered spiritual master known for his profound wisdom and dedication to Vedic traditions.',
    detailedDescription:
      'Sri Chidananda Saraswati Swami was a luminous beacon of spiritual wisdom whose life exemplified the highest ideals of Sanatana Dharma. His profound understanding of Vedic scriptures and ability to transmit ancient wisdom in contemporary contexts made him a revered guide for countless seekers. He established numerous spiritual centers and dedicated his life to the preservation and propagation of Vedic traditions, serving as a bridge between ancient wisdom and modern spiritual practice.',
    period: '20th Century',
    teachings: ['Vedic Philosophy', 'Meditation Practices', 'Self-Realization', 'Scriptural Study', 'Ritual Purity'],
    achievements: ['Established spiritual centers across India', 'Preserved ancient Vedic traditions', 'Guided thousands of disciples', 'Authored spiritual texts'],
    quotes: [
      'The path to self-realization begins with selfless service',
      'True wisdom lies in recognizing the divine in every being',
      'Meditation is not an escape from life, but a deeper engagement with reality',
    ],
    legacy:
      'His teachings continue to inspire spiritual seekers worldwide, and the institutions he established remain centers of learning and spiritual practice.',
  },
  ssbs: {
    id: 'ssbs',
    code: 'SSBS',
    name: 'Sri Satyananda Bharati Swami',
    fullName: 'Sri Satyananda Bharati Swami',
    sanskritName: 'श्री सत्यानन्द भारती स्वामी',
    description: 'A distinguished spiritual guide who dedicated his life to the revival of ancient traditions and temple worship.',
    detailedDescription:
      'Sri Satyananda Bharati Swami was a transformative spiritual leader whose life mission centered on the revival of temple worship and the restoration of ancient spiritual traditions. His extensive padayatras across the length and breadth of India were not merely physical journeys but spiritual pilgrimages that rekindled the flame of devotion in countless communities. He had an extraordinary ability to connect with people from all walks of life, inspiring them to reconnect with their spiritual heritage.',
    period: '2012 - 2015',
    birthDate: 'Sacred advent during 2012-2015',
    teachings: ['Temple Revival', 'Spiritual Travel', 'Community Service', 'Traditional Worship', 'Pilgrimage'],
    achievements: ['Conducted extensive padayatras across India', 'Revived temple worship practices', 'Inspired community spiritual revival', 'Established pilgrimage traditions'],
    quotes: [
      'Every step in pilgrimage is a step toward the divine',
      'Temples are not just buildings; they are living centers of spiritual energy',
      'Service to humanity is the highest form of worship',
    ],
    legacy:
      'His padayatras and temple revival efforts continue to inspire spiritual communities across India, fostering a renewed connection with traditional practices.',
  },
  scbs: {
    id: 'scbs',
    code: 'SCBS',
    name: 'Sri Chidananda Bharati Swami',
    fullName: 'Sri Chidananda Bharati Swami',
    sanskritName: 'श्री चिदानन्द भारती स्वामी',
    description: 'A compassionate spiritual mentor who focused on the revival of traditional practices and spiritual guidance.',
    detailedDescription:
      'Sri Chidananda Bharati Swami embodied the essence of compassionate spiritual leadership, dedicating his life to the meticulous revival of traditional practices and the provision of profound spiritual guidance. His approach combined deep scriptural knowledge with practical wisdom, making ancient teachings accessible to contemporary seekers. He served as a spiritual anchor for the community, providing steady guidance through changing times while maintaining the integrity of traditional practices.',
    period: '2015 - 2019',
    teachings: ['Spiritual Mentorship', 'Traditional Practices', 'Compassionate Leadership', 'Scriptural Guidance', 'Community Welfare'],
    achievements: ['Revived traditional spiritual practices', 'Mentored numerous spiritual seekers', 'Strengthened community spiritual bonds', 'Preserved ancient rituals'],
    quotes: [
      'Compassion is the foundation of true spiritual practice',
      'Tradition is not about preserving the ashes, but keeping the flame alive',
      'True leadership means serving those who follow you',
    ],
    legacy:
      'His emphasis on compassionate leadership and traditional practice revival continues to guide the spiritual community he served.',
  },
  spbs: {
    id: 'spbs',
    code: 'SPBS',
    name: 'Sri Paramananda Bharati Swami',
    fullName: 'Sri Paramananda Bharati Swami',
    sanskritName: 'श्री परमानन्द भारती स्वामी',
    description: 'An enlightened master who emphasized the importance of divine bliss and spiritual happiness.',
    detailedDescription:
      "Sri Paramananda Bharati Swami was a luminous embodiment of divine bliss and spiritual happiness, whose teachings centered on the experience of supreme joy that transcends worldly pleasures. He illuminated the path of devotion and selfless service, demonstrating through his own life how spiritual practice could lead to a state of perpetual divine happiness. His teachings emphasized that true fulfillment comes not from external acquisitions but from internal realization of one's divine nature.",
    period: '19th - 20th Century',
    teachings: ['Divine Bliss', 'Devotional Practices', 'Selfless Service', 'Bhakti Yoga', 'Spiritual Happiness'],
    achievements: ['Taught the path of divine bliss', 'Promoted devotional practices', 'Established service organizations', 'Inspired spiritual happiness'],
    quotes: [
      'Divine bliss is our true nature; everything else is just a shadow',
      'Service performed without expectation purifies the heart',
      'Happiness is not found; it is revealed when the ego dissolves',
    ],
    legacy:
      'His teachings on divine bliss and devotional service continue to guide seekers toward experiencing supreme spiritual happiness.',
  },
  ssbs2: {
    id: 'ssbs2',
    code: 'SSBS2',
    name: 'Sri Sadananda Bharati Swami',
    fullName: 'Sri Sadananda Bharati Swami',
    sanskritName: 'श्री सदानन्द भारती स्वामी',
    description: 'A wisdom teacher who emphasized eternal happiness and spiritual contentment.',
    detailedDescription:
      'Sri Sadananda Bharati Swami was a profound wisdom teacher whose life mission centered on imparting the knowledge of eternal happiness and spiritual contentment. He established educational institutions that became centers of Vedic learning, ensuring that ancient wisdom would be transmitted to future generations. His approach to education combined traditional scriptural study with practical application, creating a holistic system that addressed both intellectual understanding and spiritual realization.',
    period: 'Late 20th Century',
    teachings: ['Eternal Wisdom', 'Educational Reform', 'Spiritual Contentment', 'Vedic Learning', 'Youth Education'],
    achievements: ['Established Vedic educational institutions', 'Promoted Vedic learning among youth', 'Reformed educational approaches', 'Taught eternal wisdom principles'],
    quotes: [
      'True education awakens the wisdom that already exists within',
      'Eternal happiness comes from understanding our eternal nature',
      'Contentment is the foundation of spiritual progress',
    ],
    legacy:
      'His educational institutions and emphasis on eternal wisdom continue to shape the spiritual education of countless students.',
  },
  sadhanandha: {
    id: 'sadhanandha',
    code: 'sadhanandha',
    name: 'Sri Sadhananda Swami',
    fullName: 'Sri Sadhananda Swami',
    sanskritName: 'श्री साधनानन्द स्वामी',
    description: 'A spiritual guide focused on the path of dedicated practice (sadhana).',
    detailedDescription:
      'Sri Sadhananda Swami emphasized that consistent spiritual practice is the key to unlocking inner potential and achieving self-realization. His teachings focused on practical steps and disciplined effort to progress on the spiritual path.',
    period: 'Contemporary',
    teachings: ['Sadhana', 'Discipline', 'Spiritual Practice', 'Self-Realization'],
    achievements: ['Guided numerous disciples on the path of sadhana', 'Authored texts on spiritual discipline'],
    quotes: [
      'Discipline is the bridge between goals and accomplishment.',
      'Every moment is an opportunity for sadhana.',
    ],
    legacy:
      'His teachings continue to inspire seekers to take up dedicated spiritual practice.',
  },
  skbs: {
    id: 'skbs',
    code: 'SKBS',
    name: 'Sri Kamalananda Bharati Swami',
    fullName: 'Sri Kamalananda Bharati Swami',
    sanskritName: 'श्री कमलानन्द भारती स्वामी',
    description: 'The current Peethadhipati who has been leading since 2007.',
    detailedDescription:
      'Sri Kamalananda Bharati Swami, the current Peethadhipati, has been a transformative force in spiritual leadership since 2007. His vision encompasses the strengthening of village temples as centers of community spiritual life, the revival of traditional practices that had fallen into disuse, and the implementation of comprehensive community outreach initiatives. Under his guidance, the peetham has expanded its service activities while maintaining the highest standards of spiritual practice and traditional integrity.',
    period: '2007 - Present',
    birthDate: 'Leading since 2007',
    teachings: ['Temple Strengthening', 'Community Outreach', 'Traditional Revival', 'Village Development', 'Spiritual Leadership'],
    achievements: ['Strengthened village temples', 'Revived traditional practices', 'Led community outreach initiatives', 'Expanded peetham services'],
    quotes: [
      'A strong temple creates a strong community',
      'Tradition must be lived, not just remembered',
      'Spiritual leadership means serving the spiritual needs of all',
    ],
    legacy:
      'His ongoing leadership continues to strengthen the spiritual foundation of communities while preserving and promoting traditional practices for future generations.',
    image: '/images/guru/current-swamiji.svg',
  },
};