import { guruData } from '@/app/constants/guru';

export interface GuruListProps {
  className?: string;
}

export function GuruList({ className = '' }: GuruListProps) {
  const items = Object.values(guruData);
  return (
    <section aria-label="Guru list" className={`mb-8 ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((g, idx) => {
          const placeholder = idx % 2 === 0 ? '/images/placeholder-left.svg' : '/images/placeholder-right.svg';
          const imgSrc = g.image || placeholder;
          return (
            <a key={g.id} href={`/guru-parampara/${g.id}`} className="group flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-brand-gold/30 group-hover:ring-brand-gold transition-shadow shadow-sm bg-white">
                <img src={imgSrc} alt={`${g.name} portrait`} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3">
                <div className="text-sm md:text-base font-semibold text-brand-maroon">{g.fullName || g.name}</div>
                <div className="text-xs md:text-sm text-black/60">{g.code}</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}