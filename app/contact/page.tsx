import { HeroBanner } from '@/components';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Contact Us"
        description="Get in touch with Sri Bhuvaneshwari Peetham"
        height="medium"
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-gold/20">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-maroon mb-4">చిరునామా / Address</h2>
              <p className="text-lg text-black leading-relaxed">
                శ్రీ చిదానందాశ్రమము, ఇ.నెం: 10-141/1, కేసరిపల్లి గ్రామము, గన్నవరం (మం), కృష్ణాజిల్లా - 521 102, ఆంధ్రప్రదేశ్
              </p>
              <p className="text-lg text-black mt-2">
                Sri Chidananda Ashramam, E.No: 10-141/1, Kesaripalli Village, Gannavaram (M), Krishna District - 521 102, Andhra Pradesh
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-maroon mb-4">ఫోను నంబరు / Phone Number</h2>
              <p className="text-lg text-black">
                <a href="tel:+917382484277" className="text-brand-maroon hover:underline">+91 73824 84277</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-maroon mb-4">ఇమెయిల్ / Email</h2>
              <p className="text-lg text-black">
                <a href="mailto:sbp.info2023@gmail.com" className="text-brand-maroon hover:underline">sbp.info2023@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-gold/20">
          <h2 className="text-2xl font-bold text-brand-maroon mb-4">Social</h2>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/hinduaalayam/?ref=embed_page#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-cream">Facebook Page</a>
          </div>
        </div>
      </div>
    </div>
  );
}
