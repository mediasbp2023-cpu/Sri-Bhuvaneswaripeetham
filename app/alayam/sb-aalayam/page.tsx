'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroBanner } from '@/components';

export default function SBAalayamPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/images/Background 2.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50" />
      </div>

      <div className="relative z-10">
        <HeroBanner title="శ్రీ భువనేశ్వరి ఆలయం" subtitle="Sri Bhuvaneshwari Aalayam" />

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-3xl p-8 shadow-2xl border-4 border-[#FFD700]/20"
          >
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/aalayam/sb-aalayam.png" 
                alt="శ్రీ భువనేశ్వరి ఆలయం" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="prose max-w-none text-[#800000]">
              <p className="text-lg leading-relaxed mb-6">
                అత్యంత తపోనిష్టాగరిష్టులైన ప.ప.శ్రీ.శ్రీ.శ్రీ చిదానంద సరస్వతి స్వామి వారు కీ॥శే॥ ద్రోణపల్లి అనంతపద్మనాభ చౌదరి గారు ఇచ్చిన  దానభూమిలో 1952 సం.లో శ్రీ చిదానంద ఆశ్రమమును స్థాపించి, ఆనాటి శ్రీ శృంగేరి పీఠాధిపతుల ద్వారా పంపబడిన శ్రీ ఆదిశంకరాచార్యుల విగ్రహ ప్రతిష్ట చేసారు. ఈ ప్రాంగణమంతా అత్యంత మహిమాన్వితమైన నాగ క్షేత్రముగా ప్రసిద్ధి చెందినది.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                అనంతర కాలంలో, 1978 నందు ధర్మకర్తలు ఆశ్రమమున గురుపరంపర కొనసాగిస్తూ ప.ప.శ్రీ.శ్రీ.శ్రీ సత్యానందభారతిస్వామి వారికి పీఠాధిపతిగా పట్టాభిషేకము చేసినారు. వీరు ఆశ్రమమున శ్రీచక్ర స్థాపన మరియు 1978 విజయదశమినాడు ప.ప.శ్రీ.శ్రీ.శ్రీ విమలానందభారతి స్వామివారు పంపిన శ్రీ భువనేశ్వరిమాత విగ్రహ ప్రతిష్ఠ చేసి పీఠమునకు శ్రీ భువనేశ్వరి పీఠము అని నామకరణము చేసారు.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                ఆ పిమ్మట ఆశ్రమమునకు ప్రాకారము, ఋతు రసాగ్ని(367) లింగాత్మక రుద్ర మండలము, శ్రీ పంచముఖ ఆంజనేయ స్వామి మరియు శ్రీ నాగేంద్ర స్వామి ప్రతిష్టలు చేసి, షోడశ స్థంభ విలసిత శాశ్వత యాగశాల నిర్మాణము చేశారు. ఈ పీఠము శ్రీశృంగేరి శ్రీవిరూపాక్ష శ్రీపీఠాధ్యక్ష శ్రీకల్యాణానంద భారతీ సంప్రదాయమునకు చెందినది.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                ఆనాటినుండి పీఠము నిత్యపూజలు, శ్రీ చక్ర నవావరణ ఆర్చనలు, ఉత్సవాలు, విశేష వైదిక ఆధ్యాత్మిక సామజిక కార్యక్రమములతో విలసిల్లుతున్నది. 1986లో స్వామివారి సిద్ధి అనంతరము ప.ప.శ్రీ.శ్రీ. శ్రీ చిదానంద భారతి స్వామి, ప.ప.శ్రీ.శ్రీ.శ్రీ ప్రకాశానందభారతి స్వామి, శ్రీ సత్యానందభారతి స్వామి-2 కాలగమనంలో పీఠాధిపతులుగా లోకకళ్యాణమునకై వివిధ కార్యక్రమాలు నిర్వహించుతూ మార్గదర్శనం చేశారు.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                ప.ప.శ్రీ.శ్రీ.శ్రీ సిద్ధేశ్వరానంద భారతి స్వామి వారి వద్ద ప్రణవోపదేశం పొంది తురీయాశ్రమం స్వీకరించిన శ్రీ కమలానందభారతి స్వామి శ్రీఫ్లవ ఆశ్వయుజ శుద్ధ నవమి 2021 నాడు పీఠాధిపతులుగా నియుక్తి చేయబడ్డారు. స్వామివారు హిందూ ధర్మ వ్యాప్తి, పరిరక్షణ, సమాజ సంఘటన, ఉన్నతి కొరకు శ్రీ భువనేశ్వరి పీఠాధిపతిగా మార్గదర్శనం చేయుచున్నారు.
              </p>
            </div>
          </motion.div>

          <div className="text-center">
            <Link href="/alayam" className="inline-block bg-[#800000] text-[#FFD700] px-6 py-3 rounded-full font-semibold hover:bg-[#A52A2A]">
              Back to Alayam
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
