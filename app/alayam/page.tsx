import Link from 'next/link';
import { HeroBanner } from '@/components';

export default function AlayamOverviewPage() {
  const links = [
    { href: '/alayam/peetha-aavirbhavam', label: 'Peetha Aavirbhavam' },
    { href: '/alayam/naga-kshetram', label: 'Naga Kshetram' },
    { href: '/alayam/sb-aalayam', label: 'SB Aalayam' },
    { href: '/alayam/rudra-mandalam', label: 'Rudra Mandalam' },
    { href: '/alayam/upa-aalayas', label: 'Upa Aalayas' },
    { href: '/alayam/annual-calendar', label: 'Annual Calendar' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Aalayam"
        description="Explore temple-related sections and resources"
        height="medium"
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block rounded-md border border-brand-gold/20 p-4 bg-white hover:bg-brand-gold/10 hover:border-brand-gold/40 transition-colors">
            {l.label}
          </Link>
        ))}
        </div>
      </section>
    </div>
  );
}
