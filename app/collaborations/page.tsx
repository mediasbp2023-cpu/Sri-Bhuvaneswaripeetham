import Link from 'next/link';
import { HeroBanner } from '@/components';

export default function CollaborationsOverviewPage() {
  const links = [
    { href: '/collaborations/partners', label: 'Partners' },
    { href: '/collaborations/sponsors', label: 'Sponsors' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Collaborations"
        description="Explore our partners and sponsors"
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
