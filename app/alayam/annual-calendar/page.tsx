'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroBanner } from '@/components';

export default function AnnualCalendarPage() {
  const events = [
    { month: 'చైత్ర', day: 'శుద్ధ పూర్ణిమ', event: 'చిదానంద సరస్వతీ స్వామివారి జయంతి, ఆశ్రమ వార్షికోత్సవము' },
    { month: 'వైశాఖ', day: 'శుద్ధ పంచమి', event: 'శంకర జయంతి' },
    { month: 'వైశాఖ', day: 'బ॥దశమి', event: 'హనుమజయంతి, కల్యాణోత్సవము' },
    { month: 'జ్యేష్ట', day: 'శుద్ధ అష్టమి', event: 'శ్రీ సత్యానంద భారతీ స్వామి వారి ఆరాధన' },
    { month: 'ఆషాఢ', day: 'శుద్ధ పూర్ణిమ', event: 'గురు పూజ, చతుర్మాస్యారంభము' },
    { month: 'శ్రావణ', day: 'బహు పాడ్యమి', event: 'శ్రీ కృష్ణ జయంతి' },
    { month: 'భాద్రపద', day: 'శుద్ధ పాడ్యమి', event: 'శ్రీ చిదానంద సరస్వతీ స్వామి వారి ఆరాధన' },
    { month: 'ఆశ్వయుజ', day: 'శుద్ధ పాడ్యమి నుండి నవమి వరకు', event: 'దేవి నవరాత్రోత్సవములు (ప్రతి దినము శ్రీ చక్ర నవావరణార్చనలు - సువాసినీ పూజలు - కుమారి పూజలు - గోపూజ - కుంకుమార్చనలు - రుద్ర మండలాభిషేకము - చండీ యాగము)' },
    { month: 'ఆశ్వయుజ', day: 'విజయ దశమి', event: 'శ్రీ సత్యానంద భారతీస్వామి వారి జయంతి' },
    { month: 'ఆశ్వయుజ', day: 'బహుళ సప్తమి', event: 'శ్రీ భువనేశ్వరీదేవి జన్మదినోత్సవము' },
    { month: 'కార్తీక', day: 'మాసము నెలరోజులు', event: 'రుద్ర మండలమునకు మహాన్యాస పూర్వక మహాభిషేకములు' },
    { month: 'కార్తీక', day: 'శు॥ పూర్ణిమ రాత్రి', event: 'సహస్ర దీపోత్సవము - సమారాధనము' },
    { month: 'మార్గశిర', day: 'శుద్ధ షష్ఠి', event: 'శ్రీ సుబ్రహ్మణ్యేశ్వర కల్యాణము' },
    { month: 'మాఘ', day: 'బ॥ చతుర్దశి', event: 'మహా శివరాత్రి రుద్ర మండల మహాభిషేకము' },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/images/Background 2.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50" />
      </div>

      <div className="relative z-10">
        <HeroBanner title="శ్రీ భువనేశ్వరి పీఠమున కార్యక్రమములు" subtitle="Annual Calendar of Events" />

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-3xl p-8 shadow-2xl border-4 border-[#FFD700]/20"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#800000] mb-4">నిత్య కార్యక్రమములు</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#800000]">
                <li>నిత్యము ప్రాతస్సాయములయందు శ్రీ చక్రార్చన</li>
                <li>ప్రతి పూర్ణిమనాడు శ్రీ చక్రనవావరణార్చన</li>
                <li>ప్రతి మాస శివరాత్రి రుద్రమండలమునకు మహన్యాస పూర్వక మహాభిషేకము</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#800000] mb-6">వార్షిక కార్యక్రమములు</h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 border-[#FFD700] pl-4 py-2">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <span className="font-bold text-[#800000] text-lg">{event.month}</span>
                      <span className="text-[#800000]/80">{event.day}</span>
                    </div>
                    <p className="text-[#800000] leading-relaxed">{event.event}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-[#800000]/80 mt-8 italic">
              ఇవికాక ఇంకనూ విశేషదినములందు - ఆయా కార్యక్రమములు నిర్వహింపబడుచున్నవి.
            </p>
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
