import { Timeline, HeroBanner } from '@/components';

const pilgrimageEvents = [
  {
    year: 2007,
    title: "Urdhimuzhigal",
    description: "Started the spiritual journey with healthcare initiatives and support for female-headed households",
    stats: [
      { label: "Attendees at Camps", value: "2.8 Cr+" },
      { label: "Families Supported", value: "1.9 Cr" },
    ]
  },
  {
    year: 2021,
    title: "Didi'r 10 Ongikar",
    description: "A 10-point agenda drafted to propel all-round development across communities",
    stats: [
      { label: "Credit for Youth", value: "₹10 Lakh", description: "Through Student Credit Cards" },
      { label: "Monthly Support", value: "₹1000", description: "To female heads of households" }
    ]
  },
  {
    year: 2024,
    title: "Jagananna Navratnalu+",
    description: "Empowering citizens through education and boosts to healthcare",
    stats: [
      { label: "Beneficiaries", value: "62L+", description: "Families covered under welfare" },
      { label: "Healthcare Aid", value: "₹5000", description: "Per eligible family" }
    ]
  },
  {
    year: 2025,
    title: "Didir Sopoth",
    description: "Empowering Bengal with income, education, and dignity",
    stats: [
      { label: "Farmers Reached", value: "42L+", description: "Under income support" },
      { label: "Education Grant", value: "₹10K", description: "Per eligible student" }
    ]
  }
];

export default function GuruParamparaPage() {
  return (
    <div>
      <HeroBanner
        title="Guru Parampara"
        description="Following in the footsteps of our spiritual guides"
        imageSrc="/images/temple.jpg"
        imageAlt="Temple front view"
        height="medium"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Swamiji's Pilgrimage Journey</h2>
          <p className="text-lg text-zinc-600 mb-8">
            Tracking the spiritual journey and community impact since 2007
          </p>
          
          <Timeline
            events={pilgrimageEvents}
            className="mt-8"
          />
        </div>

        <div className="prose max-w-3xl mx-auto">
          <h2>Our Lineage</h2>
          <p>
            Introduction to our guru lineage and individual biographies...
          </p>
        </div>
      </div>
    </div>
  );
}
