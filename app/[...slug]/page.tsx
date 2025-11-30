import Link from "next/link";
import { BackNav } from "@/components/BackNav";
import { HeroBanner } from "@/components/HeroBanner";

export default function CatchAllPage({ params }: { params: { slug?: string[] } }) {
  const path = `/${(params.slug || []).join("/")}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ivory via-brand-cream to-brand-orange/10">
      <BackNav />

      <HeroBanner
        title="Page In Progress"
        subtitle="This section is coming soon — showing placeholder content."
        height="medium"
        overlay
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow p-6 border border-brand-maroon/10">
          <div className="text-brand-maroon/80">
            <p>
              You visited: <span className="font-mono text-brand-orange">{path || "/"}</span>
            </p>
            <p className="mt-2 text-brand-maroon/70">
              We’re preparing content for this page. In the meantime, explore these sections:
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link href="/" className="px-4 py-2 rounded-full bg-brand-maroon text-white hover:bg-brand-maroon/90">
              Home
            </Link>
            <Link href="/contribute" className="px-4 py-2 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-cream/50">
              Donate
            </Link>
            <Link href="/mahapadayatra" className="px-4 py-2 rounded-full border border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white">
              Mahapadayatra
            </Link>
            <Link href="/media/photo-gallery" className="px-4 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange/90">
              Photo Gallery
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
