'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroBanner } from '@/components';

export default function AshramamAlbumPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/images/Background 2.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50" />
      </div>

      <div className="relative z-10">
        <HeroBanner title="ఆశ్రమం ఆల్బమ్" subtitle="గ్యాలరీకి సిద్ధమైన తాత్కాలిక అమరిక" />

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-3xl p-8 shadow-2xl border-4 border-[#FFD700]/20">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img src="/images/placeholder-right.svg" alt="Placeholder" className="mx-auto h-40 opacity-80" />
              <div>
                <h2 className="text-3xl font-bold text-[#800000] mb-3">తాత్కాలిక విషయ వివరణ</h2>
                <p className="text-[#800000]/80 leading-relaxed mb-4">నిజ చిత్రాలను తరువాత ప్రత్యామ్నాయంగా చేర్చవచ్చు. ప్రస్తుతం సున్నితమైన యానిమేషన్‌లతో పరిచయ విభాగం అందుబాటులో ఉంది.</p>
                <p className="text-[#800000]/70 leading-relaxed">గ్యాలరీ గ్రిడ్ సిద్ధమైన తరువాత జోడించండి; అప్పటివరకు ఈ తాత్కాలిక కాపీ పేజీని ప్రయోజనాత్మకంగా ఉంచుతుంది.</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link href="/ashramam" className="inline-block bg-[#800000] text-[#FFD700] px-6 py-3 rounded-full font-semibold hover:bg-[#A52A2A]">Back to Ashramam</Link>
          </div>
        </div>
      </div>
    </div>
  );
}