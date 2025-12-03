'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function TempleRenovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-0">
        {/* Image Section */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-brand-gold/20 overflow-hidden">
            <Image
              src="/images/temple-renovation.png"
              alt="Temple Renovation Plan"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-brand-gold/20 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4 sm:mb-6">నూతన ఆలయం నిర్మాణం</h2>
          <div className="prose max-w-none text-black">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              మహామాయ ఐన శ్రీ భువనేశ్వరి మాత విశ్వమంతటికి మహారాజ్ఞ్ని, హ్రీంకార బీజరూపిణి. పరమ శాంతి స్వరూపిణి. శ్రీ భువనేశ్వరి విద్య దశ మహావిద్యలలో నాల్గవది. అట్టి మాత ఆలయము ఆగమ శాస్త్రానుగుణంగా స్థపతుల స్థాపత్యంతో కృష్ణశిలతో నిర్మిస్తున్నాము. దేవాలయ పవిత్రత, శాశ్వతత్వములను దృష్టిలో ఉంచుకొని ఈ విధముగా నిర్మించతలపెట్టినాము. <strong>ఒక్కదేవాలయ నిర్మాణము కొరకే రూ. 3.00 కోట్లు ఖర్చు అంచనా వేయబడింది.</strong>
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              అమ్మవారి మూలవిరాట్టు శక్తి పంచాయతనంతో ప్రతిష్ఠితమవుతుంది. విశేషంగా ఇక్కడ ప్రతిష్టించబడిన 17 ఆవరణలు, 367 శివలింగాలతో కూడిన మహిమాన్విత ఋతురసాగ్ని రుద్రమండలమును కూడా కృష్ణశిలతో పునఃనిర్మించి తిరిగి 367గురు దంపతులచేత 367 బాణ లింగాలు పునఃప్రతిష్టింప చేయబడును. అలాగే నిరంతరం అన్నదానం చేయుటకు, శాశ్వతమైన అన్నపూర్ణ పథకం నిర్వహించుటకు అన్నపూర్ణ నిలయం, వంటగది, వంట సామాగ్రి సమకూర్చుకొనవలెను.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              ప్రస్తుత ఆధునిక జీవనశైలిలో వివిధ ఆలయాలు, సంప్రదాయ మఠాలు తమ ఆధ్వర్యంలో వేద పండితుల సలహా సహకారాలతో అనేక ధార్మిక వైదిక కార్యక్రమాలు నిర్వహిస్తూ సమాజానికి మార్గదర్శనం చేస్తున్నాయి. గన్నవరంలో ఉన్న శ్రీ చిదానంద ఆశ్రమం, శ్రీ భువనేశ్వరి పీఠము ఎన్నో దశాబ్దాలుగా ఇటువంటి ఆధ్యాత్మిక, వైదిక, సాంప్రదాయిక సేవలను అందిస్తూ ఎంతో మందికి శ్రద్ధా కేంద్రంగా ప్రేరణ ఇస్తున్నాయి. మహానుభావులైన ఇక్కడి యతీశ్వరుల బోధనల ద్వారా ఎన్నో కుటుంబాలు సనాతన ఆచర వ్యవహారాలను అనుసరిస్తూ వారి వ్యక్తిగత ధార్మిక జీవితాలను విజయవంతంగా గడుపుతున్నాయి.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              ఘనమైన చరిత్ర కలిగిన మన భువనేశ్వరీ పీఠంలో ప్రస్తుతం క్షీణదశలో ఉన్న భవనాలకు కాలానుగుణమైన మార్పులు చేయడం ద్వారా రాబోయే కాలంలో మరెన్నో తరాలకు ఆధ్యాత్మిక కేంద్రంగా పీఠం తన సేవలను కొనసాగించగలుగుతుంది. ఈ మహత్కార్యంలో పాల్గొనవలసిందిగా అందరినీ ఆహ్వానిస్తున్నాము. ధర్మరక్షణ కోసం పని చేస్తున్న ఆచార్యులు, పీఠాలకు మనమందరం ఆర్థిక సహాయ సహకారాలు అందించడం ద్వారా మన జీవితం సార్థకత పొందగలదు. ఇక ధర్మ శాస్త్రాలను అనుసరించి దేవాలయ నిర్మాణంలో పాల్గొనేవారు తరతరాల వరకూ ఉత్తమ ఫలితాలను పొందుతారు.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              సనాతన ధర్మనికి ఎన్నో సవాళ్లు ఎదురవుతున్న ప్రస్తుత పరిస్థితులలో దేవాలయాలను, పీఠాలను కాపాడుకోవలసిన బాధ్యత మనందరిపైన ఉన్నది. అందుకోసం మనవంతు సమర్పణను ధన, వస్తు రూపంగా అందించాలి. అందరూ తరలి వచ్చి ఈ మహత్ కార్యంలో సహకరించవలసినదిగా ప్రార్ధన.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-brand-gold/20 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-6">నూతన సముదాయములో ముఖ్య నిర్మాణాలు</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Sri Bhuvaneshwari Math Temple */}
            <div className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-4 sm:p-6 border border-brand-gold/30">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">శ్రీ భువనేశ్వరి మాత ఆలయము</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>ఆలయం</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>ధ్యాన మందిరము</span>
                </li>
              </ul>
            </div>

            {/* Sri Chidananda Ashramam */}
            <div className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-4 sm:p-6 border border-brand-gold/30">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">శ్రీ చిదానంద ఆశ్రమము</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>పీఠాధిపతి నివాసము</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>యతి సదనము</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>పురోహితుల నివాసము</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>సిబ్బంది నివాసాలు</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>సమావేశ మందిరము</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>యాత్రికుల వసతి</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-4 sm:p-6 border border-brand-gold/30">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">శ్రీ అన్నపూర్ణ నిలయము</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>షోడశ స్తంభ యాగశాల</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>కార్యాలయం, గ్రంధాలయము</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>భోజనశాల, వంటగది</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>యాత్రికుల నివాసములు - 20</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-maroon mr-2 font-bold">•</span>
                  <span>సభా మందిరము</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-gold/20">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">మహత్ కార్యంలో సహకరించండి</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            ఈ పవిత్ర నిర్మాణ కార్యక్రమంలో మీ సహకారం, మీ సమర్పణ ముఖ్యమైనది. మనవంతు సమర్పణను ధన, వస్తు రూపంగా అందించి ఈ మహత్ కార్యంలో భాగస్వాములుగా మారండి.
          </p>
          <Link
            href="/contribute/temple-renovation"
            className="inline-block bg-brand-maroon text-brand-gold px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors text-sm sm:text-base"
          >
            ఆలయ పునరుద్ధరణకు మద్దతు ఇవ్వండి
          </Link>
        </div>
      </div>
    </div>
  );
}
