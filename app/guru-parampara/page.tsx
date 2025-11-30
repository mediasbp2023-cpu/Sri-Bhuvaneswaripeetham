'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeroBanner } from '@/components';
import { guruData } from '@/app/constants/guru';

// Map guru IDs to image filenames
const guruImageMap: Record<string, string> = {
  scss: '/Gurus/SCSS.png',
  ssbs: '/Gurus/SSBS.png',
  scbs: '/Gurus/SCBS.png',
  spbs: '/Gurus/SPBS.png',
  ssbs2: '/Gurus/SSBS-2.png',
  sadhanandha: '/Gurus/sadanada.png',
  skbs: '/Gurus/SKBS.png'
};

// Define lotus positions based on the image pattern
const guruLotusMap: Record<string, 'left' | 'right' | 'special'> = {
  scss: 'left',
  ssbs: 'right',
  scbs: 'left',
  spbs: 'right',
  ssbs2: 'left',
  sadhanandha: 'right',
  skbs: 'special'
};

// Get content from document for each guru
const getGuruContent = (guruId: string) => {
  const contentMap: Record<string, { title: string; subtitle?: string; content: string }> = {
    scss: {
      title: 'శ్రీ చిదానంద సరస్వతి స్వామి',
      subtitle: 'ఆశ్రమ స్థాపకులు',
      content: `అత్యంత తపోనిష్ఠా గరిష్ఠులైన శ్రీ చిదానంద సరస్వతీ స్వామివారు ఈ యాశ్రమమును 1952న స్థాపించిరి. ఇందు శ్రీ శృంగేరీ పీఠాధిపతులచే పంపబడిన శ్రీ శంకరాచార్యులవారి పాల రాతి విగ్రహము ప్రతిష్టింపబడినది. మారుచున్న జన జీవన విధానమును తలపోసియోయన్నట్లు చిరునగవు చిందులాడు ఈ సుందరమూర్తి నాటి నుండి పూజల నందుకొనుచున్నది.

ఈ యాశ్రమమునకు ప్రక్కనే శ్రీ సోమలింగేశ్వరస్వామి మొదలగు పదునాల్గు దేవాలయముల నిర్మాణములుకూడ శ్రీ చిదానంద సరస్వతీ స్వామివారి ఆధ్వర్యమున ఆ కాలముననే జరిగినవి.

ఈ రెండు సంస్థలకును ఎకరము పైగా స్థలమును సమీపమునగల కేసరపల్లి నివాసియైన శ్రీ దోనపల్లి అనంతకోటి పద్మనాభంగారు దానము చేసిరి. ఈ యాశ్రమమునకు వెనుక దేవాలయ పూజారి నివసించుటకై ఒక యిల్లు నిర్మిపబడియున్నది. పై దేవాలయ సముదాయము నిత్య నైవేద్య దీపారాధనల నందుకొనుచు శోభిల్లుచున్నది.

ఆశ్రమ స్థాపకులైన శ్రీ చిదానంద సరస్వతీ స్వాములవారు పూర్వ నివాసమైన పశ్చిమ గోదావరి జిల్లా " పూళ్ల " గ్రామములో కుసుమ హర నాథాశ్రమ మనుపేర నొక యాశ్రమము స్థాపించి ఏకాహ సప్తాహాది సంకీర్తన కార్యక్రమముల ద్వారా భక్తి ప్రచారము గావించుచు భజన సంప్రదాయమునకు కూడ పాదుచేసి నీరు పోసి కొంతవరకు సంరక్షించిరి.

ప్రతినిత్యం అన్న దానము చేయుచుండుటయేకాక ప్రతి సంవత్సరం వేద సభలను పండిత సమావేశములను నిర్వహించుచు, వేద శాస్త్ర విద్వాంసులకు సన్మానము చేయుచుండెడివారు. ఉభయ గోదావరి - కృష్ణా - ఖమ్మం జిల్లాలో వీరి శిష్య బృందము కలదు. వారు నేటికిని యిచటికి వచ్చుట ఆచారముగా చేసికొని శ్రీవారి ఆబ్దికారాధనలను కావించుచున్నారు.`
    },
    ssbs: {
      title: 'శ్రీ సత్యానంద భారతి స్వామి',
      subtitle: 'పీఠ స్థాపకులు',
      content: `శ్రీ చిదానంద సరస్వతీ స్వాములవారి నిర్యాణము జరిగిన పిదప ధర్మకర్తలు సమావేశమై ఈ యాశ్రమమున ఆచార్య పీఠమును నెలకొల్ప నిశ్చయించిరి. ఒక యతీశ్వరుని పీఠాధిపతిగా జేసి గురు పరంపర కొనసాగింప సంకల్పించిరి. అందులకై ఆచార్యునిగూర్చి అన్వేషించిరి. ఆ సమయమున శ్రీ సత్యానంద భారతీ స్వామివారు విజయవాడలో తురీయాశ్రమము స్వీకరించినట్లు తెలియ వచ్చెను. ధర్మకర్తలు వారిని సమీపించి తమ యాశ్రమములో పీఠాధి పత్యము వహింప బ్రార్ధించిరి. వారంగీకరింప 14-11-1978న వారిని శ్రీ భువనేశ్వరీ పీఠమునకు అధిపతిగా పట్టాభిషేకము చేసిరి.

వీరు పూర్వాశ్రమమున తెనాలి తాలూకా హైస్కూలులో చిర కాలము తెలుగు పండితులుగా బనిచేసియుండిరి. ప్రమాదీ ఆశ్వయుజ శు॥ దశమి - గురువారం 9.10. 1913 వీరు జన్మించిరి. వీరు ఉభయ భాషా ప్రవీణులు. కవి, పండితులు, మార్గదర్శకులు, మంచి రచయిత, విమర్శకులు-శ్రీవిద్యోపాసకులు, నిత్యాగ్ని హోత్రులు, సదాచారపరాయణులు. పెక్కు పాఠ్య గ్రంథ వ్యాఖ్యలను, ఉపవాచకములను రచించి ప్రఖ్యాతి గడించిన సుధీమణులు. ఆ కాలమున "పులిగడ్డ గైడ్స్" అంటే ఎగుర నెత్తుక పోయెడివారు. జగద్గురు శ్రీ కల్యాణానంద భారతీస్వామి వారి ప్రియ శిష్యులైన శ్రీ వడ్లమూడి లక్ష్మీనారాయణగారివద్ద శ్రీ విద్యోప దేశమందిరి. నిత్యము శ్రీ చక్రార్చన చేయుచు ఆచార్యునకు ప్రీతి పాత్రులై, క్రమముగా పూర్ణ దీక్షను పడసిన ధన్య జీవులు. శ్రీ విద్యను సాంగో పాంగముగ ధారణచేసిన యసాధారణ ప్రతిభాసమన్వితులు. కల్ప గ్రంధ నిరపేక్షముగా శ్రీ చక్ర రాజమునకు నవావరణార్చనము నిర్వహించిన ప్రజ్ఞానిధి.

వీరు శ్రీ సిద్ధేశ్వరీ (కుర్తాళం) పీఠమునకు ఉత్తరాధికారిగా నెన్నకొనబడిన ప.ప. శ్రీ విమలానంద భారతీ స్వామివారి వద్ద 12-10-1978న తురీయాశ్రమము స్వీకరించి ప్రణోవోపదేశము పొందిరి.

వీరు పీఠాధిపత్యము వహించిన వెంటనే ఆశ్రమమున శ్రీ చక్ర రాజమును ప్రతిష్టించిరి. పిమ్మట శ్రీ విమలానంద భారతీస్వామి వారు పంపిన శ్రీ భువనేశ్వరీ దేవి యొక్క శిలా విగ్రహమును శ్రీ చక్రాకృతితో నిర్మించిన మండపములో 7-10-1979న ప్రతిష్టించిరి. ఆ పీఠమునకు "శ్రీ భువనేశ్వరీ పీఠ"మని నామకరణమొనరించిరి. తదాది శ్రీ భువనేశ్వరీ సహితముగా శ్రీ చక్ర రాజమునకు నిత్యార్చన - మధ్యాహ్న వేళలందు తీర్థ ప్రసాద వినియోగము, పూర్ణిమలందు సవావరణార్చనము మొదలైన పీఠ సంప్రదాయములు ప్రవేశ పెట్టబడినవి. భక్తుల కోర్కెననుసరించి పాద పూజలు - భిక్షావందనములు ఆచరణలోనికి వచ్చినవి. అనతి కాలముననే పీఠము రూపసౌందర్యమును సంతరించుకొనినది.

శ్రీ సత్యానంద భారతీ స్వామివారు క్షయ సం|| జ్యేష్ట శు॥ సప్తమి (14-6-86) నాడు బ్రహ్మైక్యము చెందిరి.`
    },
    scbs: {
      title: 'శ్రీ చిదానంద భారతి స్వామి',
      content: `తదుపరి పీఠాధి పతులుగానున్న శ్రీ చిదానంద భారతీస్వామి వారు క్రోధన జ్యేష్ఠ (13-6-1985)న విజయవాడ దత్తాత్రేయా శ్రమములో తురీయాశ్రమము స్వీకరించి శ్రీ సత్యానంద భారతీ స్వాముల వారి వద్ద ప్రణవోపదేశము పొందిరి. వీరిని శ్రీ భువనేశ్వరీ పీఠమునకు ఉత్తరాధికారిగా నియమించిరి. అట్లు ఉత్తరాధికారిగా నిర్ణయింపబడిన శ్రీ చిదానంద భారతీ స్వామి వారిని పీఠాధిపతిగా క్షయ జ్యేష్ట, యందు (22-6-86) ధర్మకర్తలు పట్టాభిషేకము చేసిరి. వీరునూ గురువుగారి అడుగు జాడలలో నడచుచు పీఠ కార్యక్రమములను నిర్వహించినారు.

వీరు పూర్వాశ్రమమున శ్రీ సనాతన ధార్మిక సంఘమునకు చిరకాలము కార్యదర్శిగా నుండిరి. సాహిత్య శిరోమణి పట్టభద్రులై తర్క వేదాంత విశారద, బ్రహ్మ విద్యాలంకార బ్రహ్మశ్రీ ముదిగొండ వేంకట రామశాస్త్రి గారి వద్ద అద్వైత వేదాంత మభ్యసించి ప్రస్థాన త్రయశాంతి చేసిరి. శ్రీ బెల్లంకొండ రామరాయ కవీంద్రుల వారి కొన్ని రచనలను ఆంధ్రీకరించిరి. నరసరావుపేట ఓరియంటల్ కళాశాలలో సంస్కృతాధ్యాపకులుగా పనిచేసిరి. కొంత కాలము ప్రధానో పన్యాసకునిగా కూడ పనిచేసిరి. ఈశ, కేన, కఠ, ప్రశ్న, ముండకము లనెడి ఐదు ఉపనిషత్తులను లలిత శైలిలో ఒక సంస్కృత కావ్యముగా రచించి "ఉపనిషత్కావ్యమని ప్రకటించిరి.

ది : 23.03.2006న వారి 94 వ. సంవత్సరమున శ్రీ చిదానంద భారతీస్వామి వారు బ్రహ్మీ భూతులైనారు.`
    },
    sadhanandha: {
      title: 'శ్రీ సదానంద భారతి స్వామి',
      content: `శ్రీ చిదానంద భారతి స్వామివారు శ్రీసదానంద భారతీ స్వామి వారికి ఆశ్రమ దీక్షనిచ్చి ఆశ్రమమున కాహ్వానించినారు. విధి వైచిత్రము అనతి కాలమునందే సదానందులు పరమేశ్వరిలో ఐక్యము నొందిరి.

వారు విజయవాడ కృష్ణా నది పుష్కర సమయమున నదీ గర్భమున దేహమును చాలించి ఈశ్వరైక్యమునకది గూడ యొక మార్గము అని చాటి చూపినారు.`
    },
    spbs: {
      title: 'శ్రీ ప్రకాశనంద భారతి స్వామి',
      content: `శ్రీ చిదానంద భారతీ స్వామివారు తమ ఉత్తరాధికారి కొరకు అన్వేషించు చుండగా గర్తపురీ వాసులు, ఆంధ్ర భాషోపాధ్యాయులు, షోడశ కర్మ నిర్వాహకులు, విశేష మంత్రో పాసకులు అయిన శ్రీ సూర్యప్రకాశ రావు గారిని ఎన్నుకొని దీక్ష నోసగి ప్రకాశానంద భారతీ స్వామిగా దీక్షానాముము నొసంగి ఉత్తర పీఠాధిపతులుగా ప్రకటించిరి. 25.09.2006న ప్రకాశనంద భారతీ స్వామి వారు శ్రీ భువనేశ్వరీ పీఠాధిపత్యమును పొందిరి.

వారునూ నిత్యకర్మానుష్ఠానములాచరించుచు, శ్రీ పరమేశ్వరికి సేవలందించి బ్రహ్మీభూతులైనారు.`
    },
    ssbs2: {
      title: 'శ్రీ సత్యానంద భారతి స్వామి-2',
      content: `శ్రీ ప్రకాశనంద భారతి స్వామి వారు శ్రీ సత్యానంద భారతి స్వామి వారిని మనసునందే నిర్దేశించుకొని ఆదరించి ఉత్తరాధికారులుగా ప్రకటించి పట్టాభిషేకమును గావించినారు. శ్రీ సత్యానంద భారతీ స్వామిII వారు ఈ పీఠ నిర్వహణ బాధ్యతలను స్వీకరించి మధ్యలో కొంత సన్నగిల్లిన పీఠ వైభవమునకు పూర్వస్థితిని తిరిగి సంతరించుటకై ఆలోచనా చిత్తులై పరితపించుచు పరమేశ్వరికి సేవలకు, ఆశ్రమమునకు ఆదాయ మార్గములనన్వేషించిన - కర్మ యోగి-ధర్మ యోగి పరమ నైష్ఠికులు-సమాజ సేవకులు - స్వయం సేవకులు - సేవాతత్పరులు.

శ్రీ స్వామివారు పీఠాధిపత్యమునందు నిరాసక్తులై, అంతర్ముఖులై తపమాచరించుటకు తమ ఉత్తరాధికారిగా శ్రీ కమలానంద భారతి స్వామి వారిని ప్రకటించి పట్టాభిషిక్తులను చేశారు. శ్రీ స్వామి వారు సమాజానికి మార్గదర్శనం చేస్తూ క్రోధి సం. వైశాఖ బహుళ సప్తమి (30-05-'24) నాడు బ్రహ్మైక్యము చెందిరి.`
    },
    skbs: {
      title: 'శ్రీ శ్రీ శ్రీ కమలానంద భారతి స్వామివారు',
      subtitle: 'పీఠాధిపతి',
      content: `శ్రీ శ్రీ శ్రీ కమలానంద భారతి స్వామివారు శ్రీ సిద్ధేశ్వరీ పీఠం, కుర్తాళం పీఠాధిపతి జగద్గురు శంకరాచార్య పరమహంస శ్రీ శ్రీ శ్రీ సిద్ధేశ్వరానంద భారతి స్వామి వారి నుండి సన్యాస ఆశ్రమాన్ని తీసుకుని తదుపరి శ్రీ చిదానంద ఆశ్రమంలో 2021 లో పీఠాధిపత్యా రోవాణం చేసారు.

మన గ్రామాలలోని దేవాలయాలను బలోపేతం చేయడం మరియు సనాతన ధర్మం మరియు మన సంస్కృతి మరియు వారసత్వానికి మూలాధారమైన గ్రామ దేవాలయాల పరిరక్షణ లక్ష్యంతో స్వామీజీ వారు 2007లో హిందూ దేవాలయ పరిరక్షణ సమితి స్థాపించారు.

"సంపూర్ణ గ్రామ దేవాలయ సందర్శన" పేరుతొ మొదటిసారి 2007 లో జ్ఞాన సంస్వతి దేవస్థానం, బాసర నుండి తిరుమల శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం వరకు: రెండవసారి 2008 లో శ్రీకూర్మం నుండి తిరుమల శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం వరకు: మూడవసారి 2009 లో ఉజ్జయిని మహంకాళీ దేవాలయం నుండి సికింద్రాబాద్ పరిధిలో పాదయాత్ర నిర్వహించారు.

మరల 2012 లో "సమస్త భారత దేశము ఒక పవిత్ర దేవాలయము, ప్రతి దేవాలయం భారత తత్వాన్ని ప్రతిబింబిస్తుంది" అనే భావనతో "మన దేవాలయాలను మనమే నిర్వహించుకుందాం - మన దేవాలయాలను మనమే కాపాడుకుందాం - మన సమాజాన్ని మనమే సేవించుకుందాం", "దేవాలయ నిర్వహణలో ప్రతి హిందువు భాగస్వామి కావాలి" అనే పిలుపులతో రథయాత్ర నిర్వహించారు. ఈ యాత్రలలో భాగంగా స్వామీజీ వారు ఆంధ్ర, తెలంగాణ రాష్ట్రాలలో 8,500 గ్రామాలలో విస్తరించి ఉన్న 35,000 దేవాలయాలను సందర్శించారు.

స్వామిజీ ప్రతి నెలలో 20 రోజులు గ్రామాల పర్యటనతో సాధారణ హిందువులలో చైతన్యం కలిగిస్తూ ఎక్కడ అవసరమైతే అక్కడకు చేరుకొని, వేగవంతమైన, చురుకైన, క్రియా శీలమైన తక్షణ చర్యలతో హిందూ సమాజానికి మేం ఉన్నామనే భరోసా కల్పిస్తూ, దేవాలయాల విషయంలో స్థిరమైన, నిబద్ధత కల్గిన, ఆదర్శవంతమైన, ఆచరణాత్మకమైన, ప్రత్యామ్నాయ దేవాలయ వ్యవస్థ కోసం స్పష్టమైన అవగాహనతో, లక్ష్య శుద్ధితో మీదుమిక్కిలి సహనంతో ముందుకు సాగుతున్నారు.`
    }
  };
  
  return contentMap[guruId] || { title: '', content: '' };
};

export default function GuruParamparaPage() {
  const gurus = useMemo(() => Object.values(guruData), []);
  
  // Get guru ID from URL hash or default to SKBS
  const getGuruIdFromHash = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash && guruData[hash]) {
        return hash;
      }
    }
    return 'skbs'; // Default to SKBS
  };

  const [selectedGuru, setSelectedGuru] = useState<string>(getGuruIdFromHash());
  const selectedGuruData = guruData[selectedGuru];
  const guruContent = getGuruContent(selectedGuru);

  // Handle hash changes and scroll to content
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && guruData[hash]) {
        setSelectedGuru(hash);
        // Scroll to content section after a short delay to allow render
        setTimeout(() => {
          const contentElement = document.getElementById('guru-content');
          if (contentElement) {
            const offset = 100; // Offset from top
            const elementPosition = contentElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    };

    // Check hash on mount (after initial render)
    if (typeof window !== 'undefined') {
      // Small delay to ensure DOM is ready
      setTimeout(handleHashChange, 100);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/Background 2.png" 
          alt="Sacred Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-800/30 to-yellow-900/50"></div>
      </div>
      
      <div className="relative z-10">
        <HeroBanner
          title="Guru Parampara"
          description="Explore our spiritual lineage"
          height="medium"
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Constant Guru Grid at Top */}
          <section aria-label="Guru list" className="mb-8 sm:mb-12 md:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {gurus.map((guru) => {
                const lotusType = guruLotusMap[guru.id] || 'left';
                const isSelected = selectedGuru === guru.id;
                const imagePath = guruImageMap[guru.id];
                
                return (
                  <button
                    key={guru.id}
                    onClick={() => {
                      setSelectedGuru(guru.id);
                      // Update URL hash without scrolling
                      window.history.replaceState(null, '', `#${guru.id}`);
                      // Scroll to content after a short delay
                      setTimeout(() => {
                        const contentElement = document.getElementById('guru-content');
                        if (contentElement) {
                          contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className={`group flex flex-col items-center text-center transition-all ${
                      isSelected ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    {/* Circle with Guru Image */}
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-36 lg:w-36 lg:h-36 rounded-full overflow-hidden transition-all border-2 border-[#800000] ${
                      isSelected 
                        ? 'ring-2 sm:ring-4 ring-brand-gold shadow-xl sm:shadow-2xl' 
                        : 'ring-1 sm:ring-2 ring-brand-gold/30 group-hover:ring-brand-gold'
                    } shadow-md sm:shadow-lg bg-white relative`}>
                      {imagePath ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={imagePath}
                            alt={guru.name}
                            width={144}
                            height={144}
                            className="w-full h-full object-cover"
                            style={{ 
                              objectPosition: 'center 30%',
                              transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                              transition: 'transform 0.3s ease'
                            }}
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${
                          lotusType === 'left' 
                            ? 'from-orange-500 to-orange-600' 
                            : 'from-orange-500 to-orange-600'
                        } flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">
                            {lotusType === 'left' ? 'Left Lotus' : 'Right Lotus'}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Name Only */}
                    <div className="mt-3">
                      <div className={`text-xs sm:text-sm md:text-base font-semibold ${
                        isSelected ? 'text-brand-gold' : 'text-brand-maroon'
                      } text-center leading-tight px-1`}>
                        {guru.fullName || guru.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Dynamic Content Below - Changes based on selected guru */}
          <motion.div
            id="guru-content"
            key={selectedGuru}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#FFFFF0] via-[#FFF8DC] to-[#F5E6D3] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border-2 sm:border-4 border-[#FFD700]/20"
          >

            <div className="relative z-5 pt-4 sm:pt-6 md:pt-8">
              {/* Guru Image and Title Section */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 items-center md:items-start">
                {/* Guru Image */}
                {guruImageMap[selectedGuru] && (
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 sm:ring-4 ring-brand-gold border-2 sm:border-4 border-[#800000] shadow-xl sm:shadow-2xl bg-white">
                      <div className="w-full h-full relative">
                        <Image
                          src={guruImageMap[selectedGuru]}
                          alt={selectedGuruData.name}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center 30%' }}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Title Section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] mb-2 sm:mb-3 font-serif tracking-wide">
                    {guruContent.title || selectedGuruData.name}
                  </h3>
                  {guruContent.subtitle && (
                    <p className="text-base sm:text-lg md:text-xl text-[#800000]/80 mb-3 sm:mb-4">{guruContent.subtitle}</p>
                  )}
                  <div className="inline-block bg-gradient-to-r from-[#800000] to-[#A52A2A] text-[#FFD700] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-lg">
                    {selectedGuruData.period}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFFFF0] to-[#FFF8DC] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border-2 border-[#800000]/30 shadow-inner">
                <div className="prose max-w-none text-[#800000]">
                  <div className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {guruContent.content || selectedGuruData.detailedDescription}
                  </div>
                </div>
              </div>

              {/* Teachings */}
              {selectedGuruData.teachings && selectedGuruData.teachings.length > 0 && (
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <h4 className="text-lg sm:text-xl font-bold text-[#8B0000] mb-3 sm:mb-4 font-serif">Key Teachings</h4>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-3 sm:mb-4"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {selectedGuruData.teachings.map((t, i) => (
                      <span 
                        key={i} 
                        className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#8B0000] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md sm:shadow-lg border-2 border-[#8B0000]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#8B0000] mb-2 sm:mb-3 font-serif text-center">Legacy</h4>
                <p className="text-[#800000]/80 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto px-2">
                  {selectedGuruData.legacy}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
