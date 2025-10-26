'use client'

import { motion } from 'framer-motion'
import PricingTable from '@/components/PricingTable'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Choose the perfect plan for your needs. Scale as you grow with flexible pricing options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding">
        <div className="container-custom">
          <PricingTable />
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section-padding bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl glass-effect p-12 md:p-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-lime-700/10"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                    Need a Custom Solution?
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Our Enterprise plan offers tailored solutions for large organizations with specific requirements.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Dedicated infrastructure',
                      'Custom SLA agreements',
                      'On-premise deployment options',
                      'Advanced security features',
                      '24/7 premium support',
                      'Custom integration services',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                        <Check className="w-5 h-5 text-lime-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button size="lg">
                      Contact Sales
                      <ArrowRight className="ml-2 w-5 h-5 inline" />
                    </Button>
                  </Link>
                </div>

                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">What&apos;s Included</h3>
                  <div className="space-y-6">
                    {[
                      { title: 'Volume Discounts', desc: 'Custom pricing based on usage' },
                      { title: 'Dedicated Support', desc: 'Direct access to our engineering team' },
                      { title: 'Custom Features', desc: 'Tailored solutions for your needs' },
                      { title: 'Training & Onboarding', desc: 'Comprehensive team training' },
                    ].map((item) => (
                      <div key={item.title} className="border-l-2 border-lime-500 pl-4">
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and USDC.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.',
              },
              {
                q: 'What happens if I exceed my plan limits?',
                a: 'We&apos;ll notify you when you&apos;re approaching your limits. You can upgrade anytime or purchase additional resources as needed.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee on all annual plans. Monthly plans can be cancelled anytime.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


