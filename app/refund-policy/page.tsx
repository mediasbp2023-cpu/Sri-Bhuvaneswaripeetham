'use client';

import { HeroBanner } from '@/components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Refund and Cancellation Policy"
        description="Our commitment to your satisfaction"
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
            <div className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-lg p-4 sm:p-6 border border-brand-gold/20">
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:
            </p>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">CANCELLATION POLICY</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  For Cancellations please contact us via{' '}
                  <Link href="/contact" className="text-brand-maroon hover:text-brand-maroon/80 underline font-semibold">
                    contact us
                  </Link>{' '}
                  link.
                </p>
              </div>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-4">REFUND POLICY</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  In case any client is not completely satisfied with our services we can provide a refund.
                </p>
                <div className="bg-brand-cream rounded-lg p-4 border border-brand-gold/20">
                  <p className="font-semibold text-brand-maroon mb-2">Refund Process:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase</li>
                    <li>In case of payment gateway name payments, refund will be made to the same account</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border-t border-brand-gold/20 pt-6">
              <h3 className="text-xl font-semibold text-brand-maroon mb-3">Important Notes</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed ml-4">
                <li>All refund requests will be subject to investigation</li>
                <li>Refunds will be processed only after verification of the reasons provided</li>
                <li>Processing time for refunds may vary depending on the payment method used</li>
                <li>Please ensure all details are accurate when requesting a refund</li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-brand-maroon/10 to-orange-800/10 rounded-lg p-4 sm:p-6 border border-brand-gold/20 mt-6">
              <p className="text-sm sm:text-base leading-relaxed">
                For any queries or assistance regarding refunds and cancellations, please{' '}
                <Link href="/contact" className="text-brand-maroon hover:text-brand-maroon/80 underline font-semibold">
                  contact us
                </Link>
                . We are here to help and ensure your complete satisfaction.
              </p>
            </div>

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

