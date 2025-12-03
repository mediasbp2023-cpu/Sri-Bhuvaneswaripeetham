'use client';
import { useEffect, useState } from 'react';

export default function DharmarakshaPage() {
  const [videoIds, setVideoIds] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const fallback = ["LfDiX4pJPvc","FS-2KZDtuNc","XI73JHCybxc","mOo0VDEwAXA","LfDiX4pJPvc","FS-2KZDtuNc","XI73JHCybxc","mOo0VDEwAXA","LfDiX4pJPvc","FS-2KZDtuNc","XI73JHCybxc","mOo0VDEwAXA","LfDiX4pJPvc","FS-2KZDtuNc","XI73JHCybxc"]; // 15 items for 5 rows at 3 cols
    fetch('https://www.youtube.com/feeds/videos.xml?user=radhayatra')
      .then(r => r.text())
      .then(text => {
        const doc = new window.DOMParser().parseFromString(text, 'text/xml');
        const entries = Array.from(doc.getElementsByTagName('entry'));
        const ids = entries.map(e => {
          const vid = e.getElementsByTagName('yt:videoId')[0]?.textContent || '';
          if (vid) return vid;
          const link = e.getElementsByTagName('link')[0]?.getAttribute('href') || '';
          try { return new URL(link).searchParams.get('v') || ''; } catch { return ''; }
        }).filter(Boolean);
        const take = ids.length >= 15 ? ids.slice(0, 15) : (ids.length ? ids : fallback);
        if (!cancelled) setVideoIds(take);
      })
      .catch(() => {
        if (!cancelled) setVideoIds(fallback);
      });
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-maroon mb-6">Dharmaraksha (धर्मरक्षा)</h1>
          <p className="text-xl text-brand-maroon/80 max-w-3xl mx-auto">
            Protection and preservation of Dharma through various initiatives and programs
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">YouTube Playlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(videoIds.length ? videoIds : ["LfDiX4pJPvc","FS-2KZDtuNc","XI73JHCybxc","mOo0VDEwAXA"]).map((id, i) => (
              <a key={`${id}-${i}`} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-lg border">
                  <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="YouTube thumbnail" className="w-full h-40 object-cover group-hover:scale-105 transition" />
                </div>
                <div className="mt-2 text-sm text-brand-maroon">Watch on YouTube</div>
              </a>
            ))}
          </div>
          <div className="mt-4 text-right">
            <a href="https://youtube.com/@radhayatra?si=yAYpaToKpYJdC0e3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-cream">Open Channel</a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6">Dharma Protection Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Vedic Education</h3>
              <p className="text-gray-700 mb-4">
                Preserving and teaching Vedic knowledge to the younger generation.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="border-l-4 border-brand-maroon pl-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Traditional Practices</h3>
              <p className="text-gray-700 mb-4">
                Supporting the continuation of traditional rituals and customs.
              </p>
              <button className="bg-brand-maroon text-brand-gold px-6 py-2 rounded-lg hover:bg-brand-maroon/90 transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-maroon mb-4">Support Dharma Protection</h2>
          <p className="text-gray-700 mb-6">
            Join our efforts to protect and preserve the eternal principles of Dharma.
          </p>
          <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">
            Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}
