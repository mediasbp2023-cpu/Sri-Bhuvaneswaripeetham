import { HeroBanner, GalleryGrid } from "@/components";
import { images } from "../constants/images";

export default function AalayamPage() {
  return (
    <div>
      <HeroBanner
        title="Aalayam"
        description="Our sacred temple and its divine presence"
        imageSrc={images.hero.aalayam}
        imageAlt="Temple interior view"
        height="large"
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="prose max-w-none mb-12">
          <h2>About Our Temple</h2>
          <p className="lead text-xl text-black">
            The Bhuvaneshwari Peetham temple stands as a beacon of spiritual enlightenment,
            where devotees find solace and divine connection.
          </p>
          <p>
            Our temple, dedicated to Divine Mother Bhuvaneshwari, embodies the sacred traditions
            while embracing the spiritual needs of contemporary devotees.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Temple Gallery</h2>
          <GalleryGrid
            images={images.gallery.temple}
            columns={2}
            className="mb-8"
          />
        </section>

        <section className="prose max-w-none">
          <h2>Temple Timings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Morning Rituals</h3>
              <ul className="space-y-2">
                <li>Temple Opens: 5:30 AM</li>
                <li>Morning Aarti: 6:00 AM</li>
                <li>Archana: 7:00 AM - 12:00 PM</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Evening Rituals</h3>
              <ul className="space-y-2">
                <li>Evening Aarti: 6:30 PM</li>
                <li>Special Puja: 7:00 PM</li>
                <li>Temple Closes: 8:30 PM</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
