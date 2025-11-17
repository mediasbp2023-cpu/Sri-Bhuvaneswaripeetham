"use client";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-maroon text-center mb-6">🙏 Donate to Sri Bhuvaneswari Peetham 🙏</h1>
        <p className="text-xl text-brand-maroon/80 text-center mb-10">Please choose the category you wish to donate to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">Temple Renovation</button>
          <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">Maha Paada Yatra</button>
          <button className="bg-brand-maroon text-brand-gold px-6 py-3 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors">Aarjita Seva / Pooja</button>
        </div>
      </div>
    </div>
  );
}