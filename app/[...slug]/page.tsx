import Link from "next/link";
import { BackNav } from "@/components/BackNav";
import { HeroBanner } from "@/components/HeroBanner";

export default function CatchAllPage({ params }: { params: { slug?: string[] } }) {
  const path = `/${(params.slug || []).join("/")}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF7EE] to-[#E67C24]/10">
      <BackNav />

      <HeroBanner
        title="Page In Progress"
        subtitle="This section is coming soon — showing placeholder content."
        height="medium"
        overlay
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow p-6 border border-[#800000]/10">
          <div className="text-[#800000]/80">
            <p>
              You visited: <span className="font-mono text-[#E67C24]">{path || "/"}</span>
            </p>
            <p className="mt-2 text-[#800000]/70">
              We’re preparing content for this page. In the meantime, explore these sections:
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link href="/" className="px-4 py-2 rounded-full bg-[#800000] text-white hover:bg-[#800000]/90">
              Home
            </Link>
            <Link href="/contribute" className="px-4 py-2 rounded-full border border-[#E67C24] text-[#E67C24] hover:bg-[#FFF2E7]">
              Donate
            </Link>
            <Link href="/mahapadayatra" className="px-4 py-2 rounded-full border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white">
              Mahapadayatra
            </Link>
            <Link href="/media/photo-gallery" className="px-4 py-2 rounded-full bg-[#E67C24] text-white hover:bg-[#E67C24]/90">
              Photo Gallery
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
