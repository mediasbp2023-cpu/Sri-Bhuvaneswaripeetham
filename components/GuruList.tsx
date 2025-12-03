import { guruData } from '@/app/constants/guru';

export interface GuruListProps {
  className?: string;
}

export function GuruList({ className = '' }: GuruListProps) {
  const items = Object.values(guruData).sort((a, b) => (a.id === 'skbs' ? -1 : b.id === 'skbs' ? 1 : 0));
  return (
    <aside aria-label="Guru list" className={`mb-8 ${className}`}>
      <div className="flex flex-col gap-4">
        {items.map((g, idx) => {
          const placeholder = idx % 2 === 0 ? '/images/placeholder-left.svg' : '/images/placeholder-right.svg';
          const imgSrc = g.image || placeholder;
          return (
            <a key={g.id} href={`/guru-parampara/${g.id}`} className="group flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand-gold/30 group-hover:ring-brand-gold transition-shadow shadow-sm bg-white">
                <img src={imgSrc} alt={`${g.name} portrait`} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-semibold text-brand-maroon">{g.fullName || g.name}</div>
                <div className="text-xs text-black/60">{g.code}</div>
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
