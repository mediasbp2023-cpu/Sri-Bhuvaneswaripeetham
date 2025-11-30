'use client';

import { HeroBanner } from '@/components';
import { motion } from 'framer-motion';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Terms and Conditions"
        description="Please read our terms and conditions carefully"
        height="medium"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-brand-gold/20"
        >
          <div className="prose max-w-none text-black space-y-6">
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                The terms "We" / "Us" / "Our"/"Organization" individually and collectively refer to Sri Bhuvaneswari Peetham and the terms "Visitor" "User" refer to the users.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                This page states the Terms and Conditions under which you (Visitor) may visit this website ("Website"). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The organization, any of its services and / or its subsidiaries, associate organizations or subsidiaries to subsidiaries or such other organizations (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.
              </p>
            </div>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">USE OF CONTENT</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under license, by the organization and / or its associate entities who feature on this Website.
                </p>
                <p>
                  The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.
                </p>
                <p>
                  You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organization's or entity's written permission.
                </p>
              </div>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">ACCEPTABLE WEBSITE USE</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand-maroon mb-3">(A) Security Rules</h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-3">
                    Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-sm sm:text-base">
                    <li>Accessing data not intended for such user or logging into a server or account which the user is not authorized to access,</li>
                    <li>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization,</li>
                    <li>Attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the Website, overloading, "flooding", "mail bombing" or "crashing", or</li>
                    <li>Sending unsolicited electronic mail, including promotions and/or advertising of products or services.</li>
                  </ol>
                  <p className="text-sm sm:text-base leading-relaxed mt-4">
                    Violations of system or network security may result in civil or criminal liability. The organization and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-maroon mb-3">(B) General Rules</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">INDEMNITY</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                The User unilaterally agree to indemnify and hold harmless, without objection, the Organization, its officers, board of directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of sribhuvaneswaripeetham.in or their breach of the terms.
              </p>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">LIABILITY</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  User agrees that neither Organization nor its group organizations, board of directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute services or resulting from any services or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of use or/and data or other intangible, even if Organization has been advised of the possibility of such damages.
                </p>
                <p>
                  User further agrees that Organization shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent.
                </p>
                <p>
                  User agrees that Organization shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Organization's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Organization, if any, that is related to the cause of action.
                </p>
              </div>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">DISCLAIMER OF CONSEQUENTIAL DAMAGES</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                In no event shall Organization or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.
              </p>
            </section>

            <div className="border-t border-brand-gold/20 pt-6 mt-8">
              <p className="text-sm text-gray-600 italic">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

