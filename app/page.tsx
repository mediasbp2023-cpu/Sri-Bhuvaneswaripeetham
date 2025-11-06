import { HeroBanner, GalleryGrid } from "@/components";
import Image from "next/image";
import { images } from "./constants/images";

export default function Home() {
  return (
    <div>
      {/* Full-width orange hero with central poster card */}
      <section className="w-full bg-orange-400">
        <div className="max-w-6xl mx-auto relative">
          {/* Side decorative placeholders (can be replaced with lotus SVGs) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-48 bg-[url('/images/placeholder-left.png')] bg-contain bg-center bg-no-repeat" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-48 bg-[url('/images/placeholder-right.png')] bg-contain bg-center bg-no-repeat" />

          <div className="px-6 py-10 flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={images.gallery.temple[0].src}
                    alt={images.gallery.temple[0].alt}
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick-action pill navigation placed overlapping hero bottom */}
      <section className="bg-transparent">
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/aalayam" className="min-w-[220px] max-w-sm flex flex-col rounded-full bg-orange-50 border border-orange-100 p-4 shadow-sm">
              <span className="text-orange-600 font-semibold">Visit Temple</span>
              <span className="text-sm text-zinc-600">Plan your visit to Bhuvaneshwari Peetham</span>
            </a>

            <a href="/guru-parampara" className="min-w-[220px] max-w-sm flex flex-col rounded-full bg-orange-50 border border-orange-100 p-4 shadow-sm">
              <span className="text-orange-600 font-semibold">Our Lineage</span>
              <span className="text-sm text-zinc-600">Learn about our spiritual guides</span>
            </a>

            <a href="/aashramam" className="min-w-[220px] max-w-sm flex flex-col rounded-full bg-orange-50 border border-orange-100 p-4 shadow-sm">
              <span className="text-orange-600 font-semibold">Join Activities</span>
              <span className="text-sm text-zinc-600">Participate in spiritual programs</span>
            </a>

            <a href="/donate" className="min-w-[220px] max-w-sm flex flex-col rounded-full bg-orange-700 text-white p-4 shadow-md">
              <span className="text-white font-semibold">Support Us</span>
              <span className="text-sm text-orange-100">Contribute to our mission</span>
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-6">
        {/* Welcome / Telugu heading Section */}
        <section className="mb-8 text-center bg-[url('/images/bg-pattern.png')] bg-top bg-no-repeat py-12">
          <h2 className="text-4xl font-extrabold mb-4 text-orange-600">శ్రీ భువనేశ్వరి ఆలయ పూజలు</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Discover the divine presence and spiritual heritage at Bhuvaneshwari Peetham.
          </p>
        </section>

        {/* Featured Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Temple Gallery</h2>
          <GalleryGrid
            images={images.gallery.temple}
            columns={4}
            className="mb-8"
          />
        </section>

        {/* Recent Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recent Events</h2>
          <GalleryGrid
            images={images.gallery.events}
            columns={3}
            className="mb-8"
          />
        </section>

        {/* Quick Links Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Visit Temple",
              description: "Plan your visit to Bhuvaneshwari Peetham",
              link: "/aalayam"
            },
            {
              title: "Our Lineage",
              description: "Learn about our spiritual guides",
              link: "/guru-parampara"
            },
            {
              title: "Join Activities",
              description: "Participate in spiritual programs",
              link: "/aashramam"
            },
            {
              title: "Support Us",
              description: "Contribute to our mission",
              link: "/donate"
            }
          ].map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="block p-6 rounded-xl border border-zinc-200 hover:border-orange-200 hover:bg-orange-50/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600">{item.description}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
