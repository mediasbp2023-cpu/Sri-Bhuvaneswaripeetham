"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { BackNav } from "@/components/BackNav";
import { HeroBanner } from "@/components/HeroBanner";

type TimelinePeriod = {
  id: string; // anchor id
  period: string; // e.g., 2007-2012
  overview: string;
  locations: string[];
  distanceKm: number;
  milestones: string[];
  images: string[]; // placeholder image paths
  mapEmbedUrl?: string;
};

const DATA: TimelinePeriod[] = [
  {
    id: "2007-2012",
    period: "2007-2012",
    overview:
      "The initial years of the Mahapadayatra laid the foundation — reviving village temples, strengthening community faith, and establishing core outreach routes.",
    locations: ["Andhra Pradesh", "Tamil Nadu", "Karnataka"],
    distanceKm: 5000,
    milestones: [
      "Launched temple revitalization routes",
      "Conducted village satsangs and annadanam",
      "Established early volunteer networks",
    ],
    images: [
      "/images/placeholder-left.svg",
      "/images/placeholder-right.svg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.825!2d77.5946!3d12.9716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v0000000000",
  },
  {
    id: "2012-2017",
    period: "2012-2017",
    overview:
      "Expansion phase — padayatras traversed longer routes, connecting coastal and interior regions with revived worship and teaching programs.",
    locations: ["Odisha", "Maharashtra", "Kerala"],
    distanceKm: 8000,
    milestones: [
      "Extended coastal temple circuits",
      "Pilgrim service centers initiated",
      "Youth engagement and scriptural camps",
    ],
    images: [
      "/images/placeholder-left.svg",
      "/images/placeholder-right.svg",
    ],
  },
  {
    id: "2017-2022",
    period: "2017-2022",
    overview:
      "Continued journey — deeper outreach in river valleys and forest regions; traditional practices revived and sustained.",
    locations: ["Madhya Pradesh", "Telangana", "Gujarat"],
    distanceKm: 11000,
    milestones: [
      "River-valley temple restoration",
      "Community welfare initiatives",
      "Scriptural training and mentorship",
    ],
    images: [
      "/images/placeholder-left.svg",
      "/images/placeholder-right.svg",
    ],
  },
  {
    id: "2022-present",
    period: "2022-Present",
    overview:
      "Current phase — consolidating routes, building temples as community hubs, and broad outreach with modern communications.",
    locations: ["All-India Routes", "Village Networks"],
    distanceKm: 14000,
    milestones: [
      "Comprehensive temple strengthening",
      "Digital outreach and archives",
      "Expanded service activities",
    ],
    images: [
      "/images/placeholder-left.svg",
      "/images/placeholder-right.svg",
    ],
  },
];

export default function MahapadayatraTimelinePage() {
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const countersRef = useRef<HTMLDivElement | null>(null);
  const yearRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = useMemo(() => {
    if (!query.trim()) return DATA;
    const q = query.toLowerCase();
    return DATA.filter(
      (p) =>
        p.period.toLowerCase().includes(q) ||
        p.locations.some((l) => l.toLowerCase().includes(q))
    );
  }, [query]);

  // Stats counters animation
  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;
    const nums = Array.from(el.querySelectorAll("[data-count]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            nums.forEach((node) => {
              const target = Number(node.getAttribute("data-count") || "0");
              let current = 0;
              const step = Math.ceil(target / 60);
              const tick = () => {
                current = Math.min(current + step, target);
                node.textContent = String(current);
                if (current < target) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToPeriod = (id: string) => {
    const node = yearRefs.current[id];
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF7EE] to-[#E67C24]/10">
      <BackNav />

      <HeroBanner
        title="Mahapadayatra Journey"
        subtitle="A spiritual pilgrimage from 2007 to the present"
        imageSrc="/images/mahapadayatra/hero.jpg"
        imageAlt="Mahapadayatra"
        height="large"
      />

      {/* Controls & Share */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <input
              aria-label="Search by year or location"
              className="w-full md:w-80 border border-[#E67C24]/40 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E67C24] bg-white/90"
              placeholder="Search by year or location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-full bg-[#000229] text-white hover:bg-[#000229]/90 transition"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              Clear
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-full bg-[#E67C24] text-white hover:bg-[#E67C24]/90 transition"
              onClick={() => {
                if (pinnedIndex !== null) scrollToPeriod(DATA[pinnedIndex].id);
              }}
            >
              Jump to pinned
            </button>
            <button
              className="px-4 py-2 rounded-full border border-[#000229] text-[#000229] hover:bg-[#000229] hover:text-white transition"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Mahapadayatra Journey",
                    url: window.location.href,
                    text: "Explore the Mahapadayatra timeline",
                  }).catch(() => void 0);
                } else {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      "Explore the Mahapadayatra timeline"
                    )}&url=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  );
                }
              }}
              aria-label="Share timeline"
            >
              Share
            </button>
            <button
              className="px-4 py-2 rounded-full bg-white border border-[#E67C24] text-[#E67C24] hover:bg-[#FFF2E7] transition"
              onClick={() => window.print()}
              aria-label="Download brochure (prints page)"
            >
              Download (PDF coming soon)
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section
        ref={countersRef}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-2xl shadow p-6 border border-[#E67C24]/30 text-center">
          <div className="text-4xl font-extrabold text-[#E67C24]" data-count={38000}>0</div>
          <div className="text-[#000229] mt-1">Total kilometers walked</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-[#E67C24]/30 text-center">
          <div className="text-4xl font-extrabold text-[#E67C24]" data-count={21}>0</div>
          <div className="text-[#000229] mt-1">States/regions visited</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-[#E67C24]/30 text-center">
          <div className="text-4xl font-extrabold text-[#E67C24]" data-count={18}>0</div>
          <div className="text-[#000229] mt-1">Years of journey</div>
        </div>
      </section>

      {/* Timeline: vertical sections arranged horizontally */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="overflow-x-auto pb-6">
          <div className="grid grid-flow-col auto-cols-[minmax(260px,320px)] gap-6 snap-x snap-mandatory">
            {filtered.map((p, i) => {
              const active = pinnedIndex === i || hoverIndex === i;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  ref={(node) => {
                    yearRefs.current[p.id] = node;
                  }}
                  className="relative snap-start group bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-[#000229]/10 p-4"
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <header className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#000229]">{p.period}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-xs px-3 py-1 rounded-full bg-[#E67C24] text-white hover:bg-[#E67C24]/90"
                        onClick={() => setPinnedIndex(i)}
                      >
                        Pin
                      </button>
                      <button
                        className="text-xs px-3 py-1 rounded-full border border-[#000229] text-[#000229] hover:bg-[#000229] hover:text-white"
                        onClick={() => scrollToPeriod(p.id)}
                      >
                        Focus
                      </button>
                    </div>
                  </header>

                  {/* Vertical marker inside the column */}
                  <div className="relative my-4 h-56 flex justify-center">
                    <div className="w-[3px] h-full bg-gradient-to-b from-[#E67C24] via-[#000229] to-[#E67C24]" />
                    <button
                      className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 ${
                        active ? "bg-[#E67C24] border-[#000229]" : "bg-[#000229] border-white"
                      } shadow focus:outline-none focus:ring-4 focus:ring-[#E67C24]/50`}
                      onClick={() => setPinnedIndex(pinnedIndex === i ? null : i)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPinnedIndex(pinnedIndex === i ? null : i);
                        }
                      }}
                      aria-label={`Year period ${p.period}. ${active ? "Expanded" : "Collapsed"}`}
                    />
                  </div>

                  {/* Expandable description */}
                  <div
                    className={`transition-all duration-300 ${
                      active ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
                    } overflow-hidden`}
                  >
                    <p className="text-[#000229]/80">{p.overview}</p>

                    <div className="mt-4 grid grid-cols-1 gap-3">
                      <div className="bg-[#FFF7EE] rounded-xl p-3 border border-[#E67C24]/20">
                        <div className="font-semibold text-[#E67C24]">Key Locations</div>
                        <ul className="mt-2 text-[#000229]/80 list-disc list-inside">
                          {p.locations.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#FFF7EE] rounded-xl p-3 border border-[#E67C24]/20">
                        <div className="font-semibold text-[#E67C24]">Distance Covered</div>
                        <div className="mt-1 text-[#000229]/80">~ {p.distanceKm.toLocaleString()} km</div>
                      </div>
                      <div className="bg-[#FFF7EE] rounded-xl p-3 border border-[#E67C24]/20">
                        <div className="font-semibold text-[#E67C24]">Notable Milestones</div>
                        <ul className="mt-2 text-[#000229]/80 list-disc list-inside">
                          {p.milestones.map((m) => (
                            <li key={m}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Gallery */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {p.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Gallery ${p.period} ${idx + 1}`}
                          loading="lazy"
                          className="h-24 w-full object-cover rounded-xl border border-[#000229]/10 shadow-sm"
                        />
                      ))}
                    </div>

                    {/* Optional Route Map */}
                    {p.mapEmbedUrl && (
                      <details className="mt-4">
                        <summary className="cursor-pointer select-none text-[#000229]">
                          Show Route Map
                        </summary>
                        <div className="mt-2">
                          <iframe
                            title={`Route map ${p.period}`}
                            aria-label={`Route map ${p.period}`}
                            src={p.mapEmbedUrl}
                            loading="lazy"
                            className="w-full h-56 rounded-xl border"
                          />
                        </div>
                      </details>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        className="px-4 py-2 rounded-full bg-[#000229] text-white hover:bg-[#000229]/90"
                        onClick={() => setPinnedIndex(pinnedIndex === i ? null : i)}
                      >
                        {pinnedIndex === i ? "Unpin" : "Know More"}
                      </button>
                      <Link
                        href={`/mahapadayatra/overview#${p.id}`}
                        className="px-4 py-2 rounded-full border border-[#E67C24] text-[#E67C24] hover:bg-[#FFF2E7]"
                        aria-label={`Navigate to detailed page for ${p.period}`}
                      >
                        Navigate to details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-16 text-center">
        <p className="text-[#000229]/70">
          Visuals use placeholders; maps and numbers are indicative for design. Provide assets to replace them for production.
        </p>
      </div>
    </div>
  );
}