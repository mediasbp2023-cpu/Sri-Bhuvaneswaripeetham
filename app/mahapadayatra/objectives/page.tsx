"use client";

import { BackNav } from "@/components/BackNav";
import { HeroBanner } from "@/components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MahapadayatraObjectivesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="మహాపాదయాత్ర — లక్ష్యాలు"
        subtitle="మన దేవాలయాలను మనమే కాపాడుకుందాం • మన దేవాలయాలను మనమే నిర్వహించుకుందాం • మన సమాజాన్ని మనమే సేవించుకుందాం"
        height="medium"
      />
      <BackNav />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">Objectives Index</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="#yatra-lakshyam" className="text-brand-orange hover:underline">యాత్ర లక్ష్యం</Link>
            <Link href="#bharatam-devalayam" className="text-brand-orange hover:underline">భారతదేశమే ఒక దేవాలయం</Link>
            <Link href="#bhagasvamyam" className="text-brand-orange hover:underline">భాగస్వామ్యం</Link>
            <Link href="#yatra-gramam" className="text-brand-orange hover:underline">యాత్ర మన గ్రామానికి వచ్చినప్పుడు</Link>
            <Link href="#devalayam-kendramga" className="text-brand-orange hover:underline">దేవాలయం కేంద్రంగా</Link>
          </div>
        </motion.div>

        <motion.section
          id="yatra-lakshyam"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యాత్ర లక్ష్యం</h3>
          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-xl font-semibold text-brand-maroon mb-4">
              మన దేవాలయాలను మనమే కాపాడుకుందాం - మన దేవాలయలను మనమే నిర్వహించుకుందాం - మన సమాజాన్ని మనమే సేవించుకుందాం.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>లక్ష దేవాలయాలకు లక్ష ట్రస్టుల నిర్మాణం ప్రతి ట్రస్టులో కనీసం 10 మంది క్రియాశీల కార్యకర్తలు (ప్రతి దేవాలయ పరిధిలో 18 నుండి 30 సంవత్సరాల వరకు వయసు గల యువతి యువకులు దేవాలయ ట్రస్టులో సభ్యులు అవుతారు)</li>
              <li>10 లక్షల మంది క్రియాశీల కార్యకర్తల నిర్మాణం దేవాలయం కేంద్రంగా ప్రతి గ్రామంలో బస్తీలో కనీసం ఏదో ఒక సేవా కార్యక్రమం నిర్వహించేటట్లు చేయడం.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="bharatam-devalayam"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6 text-center">
            భారతదేశమే ఒక దేవాలయం - ప్రతి దేవాలయం ఒక భారతదేశం
          </h3>
          <div className="prose max-w-none text-black space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              జ్ఞానము, సంస్కృతి, నాగరికతలనే ప్రాణాలను తనయందు ప్రతిష్టించుకొని భారతమాత ఓ దేవతగా, భారతదేశం సమస్త భూమండలంపై ఓ పవిత్ర దేవాలయంగా విలసిల్లుతోంది. భారతదేశమనే దేవాలయాన్ని పటిష్టంగా పరిరక్షించినంత కాలం అవనీతలమంతా శాంతి సామరస్యాలతో సుభిక్షంగా మనగలుగుతుంది.
            </p>
            <p>
              అలాగే సాక్షాత్తు భగవంతునికే జన్మనిచ్చిన తల్లి భారతావని అంతటా నిర్ణితములైన స్వయంభు, పురాణ ప్రాశస్త్య, చరిత్ర ప్రస్తావిత, తీర్థక్షేత్రములన్నీ, దేవాలయములన్నీ నిత్య దీప ధూప నైవేద్యాలతో, సూర్యోదయాత్పూర్వ వేదఘోషతో, గుడిగంటల శబ్దాలతో, నాదస్వరాలతో, కూచిపూడి, భరతనాట్యాది మువ్వల సవ్వడితో, సకల శాస్త్ర వికాస, విస్తారాలతో, జానపద కళల జాగృతితో సమాజం ఎప్పుడూ నిత్ చైతన్యమవుతూ ఉండాలి. అలా ఉన్నంతవరకు విశ్వగురు పీఠంపై భరతమాత విశ్వానికి జ్ఞాన కిరణాలను విరజిమ్ముతూ ఉంటుంది. అందుకే మనమంతా దేశమంతటా 6లక్షల 40వేల గ్రామాలలో ఉన్న ప్రతి దేవాలయాన్ని పరిరక్షించుకొంటూ, క్రియాశీలంగా ఉంచుకోవాలి.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="bhagasvamyam"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యువచైతన్య మహాపాదయాత్రలో మన భాగస్వామ్యం</h3>
          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p>
              దేవాలయ వ్యవస్థ పట్ల సమాజాన్ని చైతన్య పరచటంలో ఇప్పటివరకు చేసిన యాత్రలు మొదటి ప్రయత్నం. అయితే మన సమాజంలోని చిట్టచివరి గ్రామం చిట్టచివరి, హిందూ కుటుంబం వరకు మన సందేశాన్ని నేరుగా తీసుకొని వెళ్లాల్సి ఉంది. అంతేకాక చిట్టచివరి దేవాలయంతో సహా అన్ని దేవాలయాలు క్రియాశీలం అయ్యే వరకు ఈ ప్రయత్నం జరగాల్సి ఉంది.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ప్రతి హిందువు ప్రతి కుటుంబము దేవాలయోస్ముఖం కావాలి.</li>
              <li>హిందూ యువత చైతన్యం కావాలి.</li>
              <li>మన ధర్మ సంస్కృతులను ప్రేమిస్తూ అవగాహన చేసుకుని ఆచరించాలి.</li>
              <li>ప్రతి దేవాలయం ఆధ్యాత్మిక ధార్మిక సమాజ సేవా కేంద్రంగా ఆవిష్కృతం కావాలి.</li>
              <li>ప్రతి దేవాలయం ఏదో ఒక సేవ కార్యక్రమాన్ని చేపట్టాలి.</li>
              <li>అందుకొరకు ప్రతి దేవాలయానికి ఒక సేవా ట్రస్ట్ ప్రారంభించుకోవాలి.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="yatra-gramam"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యాత్ర మన గ్రామానికి వచ్చినప్పుడు</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base md:text-lg text-black ml-4">
            <li>స్వాగతం</li>
            <li>దేవాలయ దర్శనం</li>
            <li>గ్రామ పరిచయం</li>
            <li>విషయ సేకరణం</li>
            <li>మార్గదర్శనం</li>
            <li>ప్రతిజ్ఞ</li>
            <li>కార్యకర్తల ఎంపిక</li>
            <li>పని విభజన</li>
            <li>సేవా కార్యక్రమాల నిర్ణయం</li>
            <li>వీడ్కోలు</li>
          </ol>
        </motion.section>

        <motion.section
          id="devalayam-kendramga"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">దేవాలయం కేంద్రంగా</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-800">
            ప్రతి దేవాలయం ఆధ్యాత్మిక ధార్మిక సమాజ సేవా కేంద్రంగా ఆవిష్కృతం కావాలి. దేవాలయం ఆధారంగా గ్రామ, బస్తీ స్థాయి సేవలు — విద్య, ఆరోగ్యం, పర్యావరణ పరిరక్షణ, గోసంపద సంరక్షణ — తో సమాజ చైతన్యం పెరగాలి.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

