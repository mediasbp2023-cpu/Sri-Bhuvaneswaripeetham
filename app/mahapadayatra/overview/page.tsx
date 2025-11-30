'use client';

import { BackNav } from '@/components/BackNav';
import { HeroBanner } from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MahapadayatraOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="మహాపాదయాత్ర"
        subtitle="మన దేవాలయాలను మనమే కాపాడుకుందాం - మన దేవాలయలను మనమే నిర్వహించుకుందాం - మన సమాజాన్ని మనమే సేవించుకుందాం"
        height="medium"
      />
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6 text-center">
            భారతదేశమే ఒక దేవాలయం - ప్రతి దేవాలయం ఒక భారతదేశం
          </h2>
          <div className="prose max-w-none text-black space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              జ్ఞానము, సంస్కృతి, నాగరికతలనే ప్రాణాలను తనయందు ప్రతిష్టించుకొని భారతమాత ఓ దేవతగా, భారతదేశం సమస్త భూమండలంపై ఓ పవిత్ర దేవాలయంగా విలసిల్లుతోంది. భారతదేశమనే దేవాలయాన్ని పటిష్టంగా పరిరక్షించినంత కాలం అవనీతలమంతా శాంతి సామరస్యాలతో సుభిక్షంగా మనగలుగుతుంది.
            </p>
            <p>
              అలాగే సాక్షాత్తు భగవంతునికే జన్మనిచ్చిన తల్లి భారతావని అంతటా నిర్ణితములైన స్వయంభు, పురాణ ప్రాశస్త్య, చరిత్ర ప్రస్తావిత, తీర్థక్షేత్రములన్నీ, దేవాలయములన్నీ నిత్య దీప ధూప నైవేద్యాలతో, సూర్యోదయాత్పూర్వ వేదఘోషతో, గుడిగంటల శబ్దాలతో, నాదస్వరాలతో, కూచిపూడి, భరతనాట్యాది మువ్వల సవ్వడితో, సకల శాస్త్ర వికాస, విస్తారాలతో, జానపద కళల జాగృతితో సమాజం ఎప్పుడూ నిత్ చైతన్యమవుతూ ఉండాలి. అలా ఉన్నంతవరకు విశ్వగురు పీఠంపై భరతమాత విశ్వానికి జ్ఞాన కిరణాలను విరజిమ్ముతూ ఉంటుంది. అందుకే మనమంతా దేశమంతటా 6లక్షల 40వేల గ్రామాలలో ఉన్న ప్రతి దేవాలయాన్ని పరిరక్షించుకొంటూ, క్రియాశీలంగా ఉంచుకోవాలి.
            </p>
          </div>
        </motion.div>

        {/* Yatra Lakshyam Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యాత్ర లక్ష్యం</h2>
          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-xl font-semibold text-brand-maroon mb-4">
              మన దేవాలయాలను మనమే కాపాడుకుందాం - మన దేవాలయలను మనమే నిర్వహించుకుందాం - మన సమాజాన్ని మనమే సేవించుకుందాం.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>లక్ష దేవాలయాలకు లక్ష ట్రస్టుల నిర్మాణం ప్రతి ట్రస్టులో కనీసం 10 మంది క్రియాశీల కార్యకర్తలు (ప్రతి దేవాలయ పరిధిలో 18 నుండి 30 సంవత్సరాల వరకు వయసు గల యువతి యువకులు దేవాలయ ట్రస్టులో సభ్యులు అవుతారు)</li>
              <li>10 లక్షల మంది క్రియాశీల కార్యకర్తల నిర్మాణం దేవాలయం కేంద్రంగా ప్రతి గ్రామంలో బస్తీలో కనీసం ఏదో ఒక సేవా కార్యక్రమం నిర్వహించేటట్లు చేయడం.</li>
            </ul>
          </div>
        </motion.div>

        {/* Youth Call Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యువతకు పిలుపు</h2>
          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p>
              ఈ పాదయాత్రలో యువతి యువకులు కలిసి రావాలని పిలుపునిస్తున్నాము. కనీసము ఒక్కరోజు సమయం వెచ్చించి పాదయాత్రలో పాల్గొనాలని పిలుపునిస్తున్నాము. పాదయాత్రలో అడుగడుగునా భారతదేశము మాతృభూమి భావన, ఈ సమాజము నాది అన్న భావన, ఇటు దేశభక్తి అటు దైవభక్తి మిళితమై ఒక అనుభూతితో, ఆనందముతో, భక్తి భావనతో దేశ, ధర్మ రక్షణ కొరకు సంకల్పం చేసుకుంటూ అటువంటి జీవితము కలిగి ఉంటానని సంకల్పిస్తూ అందరూ సమిష్టిగా ఉద్యమ స్ఫూర్తితో కదలి కలసి రావాలని పిలుపునిస్తున్నాము.
            </p>
            <p>
              నేడు భారతదేశంలో ఒక సంధి కాలములో ఉన్నది. హిందూ చైతన్యము వెల్లివిరుస్తూ ఉన్నది. ఆ చైతన్యాన్ని కార్యోన్ముఖంచేస్తూ, ఆచరణాత్మకంచేస్తూ, బాధ్యతలను స్వీకరిస్తూ మన దేవాలయాలను, మన గోసంపదను, మన జీవన మూలాలను, మన సామాజిక సమరసత మూల్యాలను గుర్తించి సంరక్షించుకుంటూ శాశ్వత కుటుంబ సమాజ జీవనాన్ని పదిలం చేసుకుంటూ ముందుకు సాగే పాదయాత్రలో మీరందరూ భాగస్వాములు కావాలని పిలుపునిస్తున్నాం.
            </p>
            <p>
              కనుక త్యాగభావనతో నిస్వార్థ బుద్ధితో తను మన ధన పూర్వకముగా వచ్చి బాధ్యతగా ఈ పాదయాత్రలో పాల్గొనవలసిందిగా యువతీ యువకులకు, అన్ని వర్గాల వారికి, అన్ని వయసుల వారికి, దైవభక్తి, దేశభక్తి ఉన్నవారికి, సమాజం పట్ల అవగాహన ఉన్నవారికి, అన్ని రంగాల వారికి వచ్చి పాదయాత్రలో పాల్గొనమని, భగవతి భారతి పూజయే ఈ పాదయాత్ర అని, అందరూ పూజారులే అని, చెబుతూ అందరిని ఆహ్వానిస్తున్నాం.
            </p>
            <p>
              ప్రత్యేకించి ఆదర్శవంతమైన దేవాలయ వ్యవస్థకు ధర్మకర్తలు, అర్చకుడు ప్రధానమైనటువంటి మూలస్తంభాలు. అందువలన వారందరినీ కూడా ఆహ్వానిస్తున్నాం. సమాజంలో నిరంతరము చైతన్యము జాగృతి చేస్తూనే ఉండాలి, నిరంతరము అందుకే పాటుపడుతూనే ఉండాలి అనే విషయాన్ని అందరూ అర్థం చేసుకుని ఉత్సాహంగా దేశభక్తి ప్రభూతులై అందరూ కూడా ఈ కార్యక్రమంలో పాల్గొనాలని చెప్పి ఆహ్వానిస్తున్నాం.
            </p>
            <p>
              మాటిమాటికి మళ్ళీ మళ్ళీ నిరంతరం సమాజంలో కలివిడిగా తిరుగుతూ సమాజాన్ని తట్టిలేపే కార్యక్రమం నిరంతరం జరుగుతూ ఉండాలి. మన హిందూ సమాజంలో ప్రాచీన కాలం నుండి ఎంతోమంది యతీశ్వరులు, సాధుసంతులు, భక్తిపరులు, సద్గురువులు నిరంతరం ధర్మ ప్రచారం చేస్తూ కీర్తనలు తత్వాలు పాడుకుంటూ సమాజంలో ఆధ్యాత్మిక ధార్మిక నైతిక సామాజిక విలువలను పెంపొందింప చేస్తూ అందరిచే ఆచరింప చేసే ప్రయత్నం నిరంతరము చేస్తూ వస్తున్నారు. స్వాతంత్రానికి పూర్వము ఎంతోమంది కాషాయాంబరధారులు, పీఠాధిపతులు, మఠాధిపతులు సమాజాన్ని తట్టిలేపటంలో చైతన్యపరుచుటలో ముందు ఉన్నారు. స్వాతంత్ర్యానంతరం ధర్మ ప్రచారము కొంత కుంటుపడిన మాట వాస్తవం. అనేకమంది సాధు మహాత్ములు ధర్మపరులు వారి ప్రయత్నం వారు నిరంతరంగా చేశారు. సమాజంలో వస్తున్న సామజిక, సాంస్కృతిక మార్పులను దృష్టిలోపెట్టుకుని సువ్యవస్థిత, దేవాలయాకేంద్రిత ధార్మిక వ్యవస్థలను ఏర్పాటు చేవలసిన అవసరం ఉన్నదనేది వాస్తవం. అయితే గత 30 సంవత్సరాలుగా అంటే అయోధ్య ఉద్యమం నాటి నుండి దేశం మొత్తం మీద హిందుత్వం పట్ల అవగాహన ఆచరణ పట్టుదల పెరగటం మనం గమనిస్తున్నాం. అయితే ఈ తరుణంలో సమాజంలో చాలా వేగంగా చోటు చేసుకుంటున్న మార్పులు కొన్ని అనుకూలంగా కొన్ని ప్రతికూలముగా కనిపిస్తున్నాయి. ఈ సమయంలో మరల గ్రామ గ్రామాన తిరుగుతూ నేరుగా హిందూ సమాజాన్ని ఎక్కడికక్కడ కలుస్తూ మన భక్తి మార్గాన్ని తెలియజేస్తూ, భక్తిమాధ్యమంగా సమాజాన్ని కలుపుతూ, కలిసిన సమాజం శక్తివంతంగా తయారై ధర్మ పరిరక్షణ చేసుకునే విధంగా మలుచుకోవటమే నేటి మన కర్తవ్యం.
            </p>
          </div>
        </motion.div>

        {/* Participation Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యువచైతన్య మహాపాదయాత్రలో మన భాగస్వామ్యం</h2>
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
              <li>దేవాలయం కేంద్రంగా ఆ గ్రామంలోని లేదా బస్తీలోని 18 సంవత్సరాల నుండి 30 సంవత్సరాల వరకు ఉన్న హిందూ యువతీ యువకులంతా సభ్యులు కావాలి. అలా యువత అంతా దేవాలయాన్ని ఆసరాగా చేసుకొని దేవిదేవతల ఆశీస్సులతో సమాజాన్ని, సమస్త ప్రాణికోటిని, యావత్ పర్యావరణాన్ని పరమేశ్వరి రూపంగా గ్రహించి, సేవించి, పరిరక్షించుకోవాలి. ఈ సందేశాన్ని తీసుకొని నేడు మరో మహాత్తర ధార్మిక చైతన్యం కొరకు పాదయాత్రలో మీరందరూ భాగస్వాములు కావాలని పిలుపునిస్తున్నాం.</li>
            </ul>
          </div>
        </motion.div>

        {/* When Yatra Comes to Village */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">యాత్ర మన గ్రామానికి వచ్చినప్పుడు</h2>
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
        </motion.div>

        {/* Purpose, Message, Sankalp, Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30"
          >
            <h3 className="text-xl font-bold text-brand-maroon mb-4">ప్రయోజనము</h3>
            <p className="text-sm sm:text-base text-gray-700">
              భక్త మండలి (ఆధ్యాత్మిక ధార్మిక సమాజసేవ కార్యక్రమాలు) నియామకము.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30"
          >
            <h3 className="text-xl font-bold text-brand-maroon mb-4">యాత్ర సందేశం</h3>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
              <li>దైవభక్తి, దేశభక్తులకు దేవాలయమే కేంద్రం.</li>
              <li>హిందూ సమాజానికి దేవాలయం సాంఘిక సంక్షేమ పథకం.</li>
              <li>యువతి యువకులు సభ్యులు కావటం, దేవాలయ కేంద్రంగా సేవా కార్యక్రమాల నిర్వహణ.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30"
          >
            <h3 className="text-xl font-bold text-brand-maroon mb-4">సంకల్పం</h3>
            <p className="text-sm sm:text-base text-gray-700">
              భక్తి ఉద్యమం ద్వారా దేవాలయాల పరిరక్షణ, గో సంరక్షణ, మతాంతరికరణాల పట్ల అవగాహన, ఆదర్శ హిందూ కుటుంబం వ్యవస్థ పట్ల అవగాహన, మాతృభాష సంరక్షణ, పర్యావరణ పరిరక్షణ, అంతరాలు లేని సమాజ నిర్మాణం.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30"
          >
            <h3 className="text-xl font-bold text-brand-maroon mb-4">ఫలితం</h3>
            <p className="text-sm sm:text-base text-gray-700">
              ఆచరణాత్మక క్రియాశీల హిందూ సమాజ ఆవిష్కరణం.
            </p>
          </motion.div>
        </div>

        {/* Service Programs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">దేవాలయం కేంద్రంగా చేయూతగిన కొన్ని సేవా కార్యక్రమాలు</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">గ్రామములోని వారందరూ కలిసి చేయవలసినవి:</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                హిందూ సంఘటన కార్యక్రమాలు, సదస్సులు, వకృత్వ వ్యాసరచన కంఠస్థ పోటీలు, దేశభక్తుల చరిత్ర పుస్తక పఠనం, దేశభక్తుల జన్మదినోత్సవాలు, పర్యావరణ మొక్కలు నాటడం, పండ్ల మొక్కలు పిల్లలకి వితరణ, దళిత గిరిజనుల గ్రామాలలో దేవాలయాల నిర్మాణం, ధార్మిక లఘు చిత్రాల నిర్మాణం, ధార్మిక పత్రికల పట్టణం ప్రచారం, దీక్ష మాల ధారణం, ధర్మరక్ష మాల ధారణం, జన్మదినోత్సవం, శుభ కార్య సందర్భంగా భగవద్గీత రామాయణం ఇవ్వడం, పేద ఆడపిల్లల వివాహాలు, పేద ఆడపిల్లల చదువు, పేద ఆడపిల్లల భద్రత; హిందూ హిత సంస్థలను ప్రోత్సహించటం - సాంఘిక సంక్షేమ వసతి గృహాలలో జన్మదినోత్సవం.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">హిందూ సమాజం:</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                ధార్మిక సృహ కలిగి ఉండాలి. వ్యక్తిగతంగా, కుటుంబ పరంగా ధర్మావలంబనం, సామాజికంగా కార్యక్రమాలలో పాల్గొనటం, ఇంట్లో ధార్మిక గ్రంధాలయం, మంచి సాహిత్య పఠనం, టీవీలలో ధార్మిక కార్యక్రమాలు, దేవాలయ దర్శనం, భజన, గ్రామ ఉత్సవాలలో పాల్గొనటం, అకృత్యాల పట్ల స్పందన, కళల ప్రోత్సాహం, పోషణ, ధర్మరక్షణ, ధర్మ ప్రచారం, మఠాలు, ఆశ్రమాల సందర్శనం, సంరక్షణ, వేసవిలో చలివేంద్రం, వైద్య, ఆరోగ్య, మాత, శిశు కేంద్రాలు, నేత్ర చికిత్స శిబిరాలు, గోశాల, పశు వైద్యశాలల నిర్వహణ.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">మన దేవాలయం:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                <li>దేశభక్తికి, దైవభక్తికి దేవాలయం ఆధారం.</li>
                <li>దేవాలయం లేని గ్రామంలో నివాసం ఉండరాదు.</li>
                <li>దేవాలయంలో కేవలం విగ్రహాన్ని ప్రతిష్ట చేయడం లేదు, విగ్రహానికి ప్రాణాన్ని ప్రతిష్ట చేస్తున్నాము.</li>
                <li>ఉచ్చ్వాస, నిశ్వాసం ఉన్న అంటే ప్రాణంతో ఉన్న దేవుడిని ఎదురుగా ఉంచుకొని దేవాతార్చన చేసుకునేది ప్రపంచంలో హిందువులు మాత్రమే.</li>
                <li>దేవాలయంలో నిత్య ధూప దీప నైవేద్యాలు జరుగుతుంటే గ్రామంలోని ప్రజలు, పశుపక్ష్యాధులు, పాడిపంటలు, జల వనరులు సమృద్ధిగా ఉండి గ్రామం సస్యశ్యామలంగా ఉంటుంది అని అగమ శాస్త్రం చెబుతోంది.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center"
        >
          <Link 
            href="/mahapadayatra/timeline" 
            className="inline-block bg-gradient-to-r from-brand-maroon to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-brand-maroon/90 hover:to-orange-800/90 transition-colors text-sm sm:text-base"
          >
            కాలక్రమం చూడండి
          </Link>
          <Link 
            href="/mahapadayatra/stories" 
            className="inline-block bg-gradient-to-r from-brand-maroon to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-brand-maroon/90 hover:to-orange-800/90 transition-colors text-sm sm:text-base"
          >
            కథలు చదవండి
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
