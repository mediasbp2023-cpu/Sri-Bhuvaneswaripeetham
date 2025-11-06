import { HeroBanner, GalleryGrid } from "@/components";
import { images } from "./constants/images";

export default function Home() {
  return (
    <div>
      <HeroBanner
        title="Bhuvaneshwari Peetham"
        description="A sanctuary of peace, devotion, and spiritual awakening"
        imageSrc={images.hero.home}
        imageAlt="Temple front view at sunset"
        height="large"
      />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Sacred Space</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Discover the divine presence and spiritual heritage at Bhuvaneshwari Peetham, 
            where ancient wisdom meets contemporary devotion.
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
