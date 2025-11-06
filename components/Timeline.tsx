'use client';

export interface TimelineStat {
  label: string;
  value: string;
  description?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  stats?: TimelineStat[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface TimelineProps {
  className?: string;
  events: TimelineEvent[];
}

export function Timeline({ className = '', events }: TimelineProps) {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
          onClick={() => {
            const container = document.getElementById('timeline-scroll');
            if (container) {
              container.scrollBy({ left: -300, behavior: 'smooth' });
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
          onClick={() => {
            const container = document.getElementById('timeline-scroll');
            if (container) {
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Timeline Content */}
        <div
          id="timeline-scroll"
          className="flex gap-8 overflow-x-auto px-12 py-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sortedEvents.map((event, index) => (
            <div
              key={event.year}
              className="flex-none w-[300px] snap-center"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
                <div className="text-3xl font-bold mb-4">{event.year}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-zinc-600 mb-4">{event.description}</p>
                
                {event.stats && event.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {event.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-orange-50 rounded-lg p-4"
                      >
                        <div className="text-2xl font-bold text-orange-600">
                          {stat.value}
                        </div>
                        <div className="text-sm text-zinc-600">
                          {stat.label}
                        </div>
                        {stat.description && (
                          <div className="text-xs text-zinc-500 mt-1">
                            {stat.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Line connecting to next event */}
              {index < sortedEvents.length - 1 && (
                <div className="h-px bg-orange-200 w-[calc(100%+2rem)] mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}