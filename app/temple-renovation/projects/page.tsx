'use client';
import { BackNav } from '@/components/BackNav';
import { HeroBanner } from '@/components';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TempleRenovationProjectsPage() {
  const projects = [
    {
      id: 'bhuvaneshwari-temple',
      title: 'శ్రీ భువనేశ్వరి మాత ఆలయము',
      subtitle: 'Sri Bhuvaneshwari Math Temple',
      items: [
        'ఆలయం',
        'ధ్యాన మందిరము'
      ],
      description: 'మహామాయ ఐన శ్రీ భువనేశ్వరి మాత విశ్వమంతటికి మహారాజ్ఞ్ని, హ్రీంకార బీజరూపిణి. పరమ శాంతి స్వరూపిణి. శ్రీ భువనేశ్వరి విద్య దశ మహావిద్యలలో నాల్గవది. అట్టి మాత ఆలయము ఆగమ శాస్త్రానుగుణంగా స్థపతుల స్థాపత్యంతో కృష్ణశిలతో నిర్మిస్తున్నాము.',
      cost: 'రూ. 3.00 కోట్లు'
    },
    {
      id: 'chidananda-ashramam',
      title: 'శ్రీ చిదానంద ఆశ్రమము',
      subtitle: 'Sri Chidananda Ashramam',
      items: [
        'పీఠాధిపతి నివాసము',
        'యతి సదనము',
        'పురోహితుల నివాసము',
        'సిబ్బంది నివాసాలు',
        'సమావేశ మందిరము',
        'యాత్రికుల వసతి',
        'శ్రీ అన్నపూర్ణ నిలయము',
        'షోడశ స్తంభ యాగశాల',
        'కార్యాలయం, గ్రంధాలయము',
        'భోజనశాల, వంటగది',
        'యాత్రికుల నివాసములు - 20',
        'సభా మందిరము'
      ],
      description: 'ఘనమైన చరిత్ర కలిగిన మన భువనేశ్వరీ పీఠంలో ప్రస్తుతం క్షీణదశలో ఉన్న భవనాలకు కాలానుగుణమైన మార్పులు చేయడం ద్వారా రాబోయే కాలంలో మరెన్నో తరాలకు ఆధ్యాత్మిక కేంద్రంగా పీఠం తన సేవలను కొనసాగించగలుగుతుంది.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="నూతన సముదాయములో ముఖ్య నిర్మాణాలు"
        subtitle="Major Construction Projects in the New Complex"
        height="medium"
      />
      <BackNav />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              మహామాయ ఐన శ్రీ భువనేశ్వరి మాత విశ్వమంతటికి మహారాజ్ఞ్ని, హ్రీంకార బీజరూపిణి. పరమ శాంతి స్వరూపిణి. శ్రీ భువనేశ్వరి విద్య దశ మహావిద్యలలో నాల్గవది. అట్టి మాత ఆలయము ఆగమ శాస్త్రానుగుణంగా స్థపతుల స్థాపత్యంతో కృష్ణశిలతో నిర్మిస్తున్నాము. దేవాలయ పవిత్రత, శాశ్వతత్వములను దృష్టిలో ఉంచుకొని ఈ విధముగా నిర్మించతలపెట్టినాము.
            </p>
            <p className="mb-4">
              అమ్మవారి మూలవిరాట్టు శక్తి పంచాయతనంతో ప్రతిష్ఠితమవుతుంది. విశేషంగా ఇక్కడ ప్రతిష్టించబడిన 17 ఆవరణలు, 367 శివలింగాలతో కూడిన మహిమాన్విత ఋతురసాగ్ని రుద్రమండలమును కూడా కృష్ణశిలతో పునఃనిర్మించి తిరిగి 367గురు దంపతులచేత 367 బాణ లింగాలు పునఃప్రతిష్టింప చేయబడును. అలాగే నిరంతరం అన్నదానం చేయుటకు, శాశ్వతమైన అన్నపూర్ణ పథకం నిర్వహించుటకు అన్నపూర్ణ నిలయం, వంటగది, వంట సామాగ్రి సమకూర్చుకొనవలెను.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-brand-gold/20"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-brand-maroon/80 mb-4">{project.subtitle}</p>
                {project.cost && (
                  <div className="inline-block bg-gradient-to-r from-brand-maroon to-orange-800 text-brand-gold px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                    అంచనా: {project.cost}
                  </div>
                )}
              </div>

              {project.description && (
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
              )}

              <div className="bg-gradient-to-br from-brand-cream to-brand-gold/20 rounded-xl p-6 border border-brand-gold/30">
                <h3 className="text-xl font-semibold text-brand-maroon mb-4">
                  నిర్మాణ అంశాలు:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {project.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start bg-white rounded-lg p-3 sm:p-4 border border-brand-gold/20 shadow-sm"
                    >
                      <span className="text-brand-maroon mr-2 font-bold text-lg">•</span>
                      <span className="text-sm sm:text-base text-gray-700 flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-8 border border-brand-gold/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-brand-maroon mb-4">
            ప్రత్యేక లక్షణాలు
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>కృష్ణశిలతో నిర్మాణం - శాశ్వతత్వం మరియు పవిత్రత కొరకు</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>ఆగమ శాస్త్రానుగుణంగా స్థపతుల స్థాపత్యంతో నిర్మాణం</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>17 ఆవరణలు, 367 శివలింగాలతో కూడిన ఋతురసాగ్ని రుద్రమండలం</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>శాశ్వతమైన అన్నపూర్ణ పథకం - నిరంతర అన్నదానం</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>యాత్రికులకు 20 నివాసములు - సౌకర్యవంతమైన వసతి</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-maroon mr-2 font-bold">✓</span>
              <span>షోడశ స్తంభ యాగశాల - ధార్మిక కార్యక్రమాల కొరకు</span>
            </li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            ఈ మహత్ కార్యంలో పాల్గొనవలసిందిగా అందరినీ ఆహ్వానిస్తున్నాము. ధర్మరక్షణ కోసం పని చేస్తున్న ఆచార్యులు, పీఠాలకు మనమందరం ఆర్థిక సహాయ సహకారాలు అందించడం ద్వారా మన జీవితం సార్థకత పొందగలదు.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contribute/temple-renovation"
              className="inline-block bg-brand-maroon text-brand-gold px-8 py-4 rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors text-sm sm:text-base"
            >
              ఆలయ పునరుద్ధరణకు మద్దతు ఇవ్వండి
            </Link>
            <Link
              href="/temple-renovation/progress"
              className="inline-block bg-brand-cream text-brand-maroon px-8 py-4 rounded-lg font-semibold border-2 border-brand-maroon hover:bg-brand-gold/20 transition-colors text-sm sm:text-base"
            >
              నిర్మాణ పురోగతి చూడండి
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
