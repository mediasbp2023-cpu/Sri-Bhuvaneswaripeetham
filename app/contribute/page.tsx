import { HeroBanner } from "@/components";

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner title="Donate" description="Support Sri Bhuvaneswari Peetham" height="small" />
      <div className="max-w-5xl mx-auto px-4 pt-4 pb-8 -mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/contribute/temple-renovation"
          className="block bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20 hover:bg-brand-gold/10"
        >
          <h3 className="text-xl font-semibold text-brand-maroon">Temple Renovation</h3>
          <p className="text-brand-maroon/80 mt-2">Multi‑step donation</p>
        </a>
        <a
          href="/contribute/maha-paada-yatra"
          className="block bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20 hover:bg-brand-gold/10"
        >
          <h3 className="text-xl font-semibold text-brand-maroon">Maha Paada Yatra</h3>
          <p className="text-brand-maroon/80 mt-2">Donate to support the yatra</p>
        </a>
        <a
          href="/contribute/arjita-seva"
          className="block bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20 hover:bg-brand-gold/10"
        >
          <h3 className="text-xl font-semibold text-brand-maroon">Arjita Seva</h3>
          <p className="text-brand-maroon/80 mt-2">Offer seva or pooja</p>
        </a>
      </div>
      
    </div>
  );
}
