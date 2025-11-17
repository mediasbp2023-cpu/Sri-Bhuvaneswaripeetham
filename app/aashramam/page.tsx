import { Slideshow } from '@/components/Slideshow';
import { HeroBanner } from '@/components';
import { images } from '@/app/constants/images';

export default function AashramamPage() {
  const gallery = images.gallery.events;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Aashramam"
        description="Anugraham, activities and the history of the Aashramam"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Before / After Renovation section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Before & After Renovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border bg-white">
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              {/* Use first gallery image if present */}
              {gallery[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={gallery[0].src} alt={gallery[0].alt} className="w-full h-56 object-cover" />
              ) : (
                <div className="text-black">Before (image placeholder)</div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Before Renovation</h3>
              <p className="text-sm text-black">Original state of the area before restoration work.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border bg-white">
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              {gallery[1] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={gallery[1].src} alt={gallery[1].alt} className="w-full h-56 object-cover" />
              ) : (
                <div className="text-black">After (image placeholder)</div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">After Renovation</h3>
              <p className="text-sm text-black">The renovated ashram spaces showing improvements and restoration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery slideshow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ashram Gallery</h2>
        <Slideshow images={gallery} interval={4000} className="rounded-xl shadow-lg" />
      </section>

      {/* Thumbnails grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-lg border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              {img.caption && <div className="p-3 text-sm text-black">{img.caption}</div>}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
